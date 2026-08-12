const sharp = require('sharp');

async function removeBgFinalClean() {
  const { data, info } = await sharp('public/assets/img/hero/cute-robot-fresh.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;

  function isStudioBg(r, g, b) {
    // Background studio color range: light blue-gray
    // Studio background is NOT pure white (r < 235), and has blue tint (b >= r - 4)
    return (r >= 170 && r <= 234 && g >= 175 && g <= 236 && b >= 185 && b <= 246) &&
           (Math.abs(r - g) <= 15) &&
           (b >= r - 4);
  }

  // Step 1: Find outer bounds of robot
  const minX = new Int32Array(h).fill(-1);
  const maxX = new Int32Array(h).fill(-1);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      if (!isStudioBg(data[idx], data[idx + 1], data[idx + 2])) {
        minX[y] = x;
        break;
      }
    }
    for (let x = w - 1; x >= 0; x--) {
      const idx = (y * w + x) * 4;
      if (!isStudioBg(data[idx], data[idx + 1], data[idx + 2])) {
        maxX[y] = x;
        break;
      }
    }
  }

  const minY = new Int32Array(w).fill(-1);
  const maxY = new Int32Array(w).fill(-1);

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const idx = (y * w + x) * 4;
      if (!isStudioBg(data[idx], data[idx + 1], data[idx + 2])) {
        minY[x] = y;
        break;
      }
    }
    for (let y = h - 1; y >= 0; y--) {
      const idx = (y * w + x) * 4;
      if (!isStudioBg(data[idx], data[idx + 1], data[idx + 2])) {
        maxY[x] = y;
        break;
      }
    }
  }

  // Step 2: Flood fill background from 4 outer edges ONLY up to [minX, maxX] / [minY, maxY]
  const visited = new Uint8Array(w * h);
  const stack = [];

  for (let x = 0; x < w; x++) {
    stack.push([x, 0]);
    stack.push([x, h - 1]);
  }
  for (let y = 0; y < h; y++) {
    stack.push([0, y]);
    stack.push([w - 1, y]);
  }

  while (stack.length > 0) {
    const [x, y] = stack.pop();
    if (x < 0 || x >= w || y < 0 || y >= h) continue;

    const pidx = y * w + x;
    if (visited[pidx]) continue;

    const idx = pidx * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    // If it's outside the robot bounds OR matches studio background, mark as background
    const isOutsideBounds = (minX[y] === -1 || x < minX[y] || x > maxX[y] || minY[x] === -1 || y < minY[x] || y > maxY[x]);

    if (isOutsideBounds || isStudioBg(r, g, b)) {
      visited[pidx] = 1;
      data[idx + 3] = 0; // Make transparent

      const neighbors = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
          const nidx = (ny * w + nx) * 4;
          const nr = data[nidx];
          const ng = data[nidx + 1];
          const nb = data[nidx + 2];
          const diff = Math.abs(r - nr) + Math.abs(g - ng) + Math.abs(b - nb);
          
          if (diff <= 15) {
            stack.push([nx, ny]);
          }
        }
      }
    } else {
      visited[pidx] = 2; // Robot edge
    }
  }

  // Step 3: GUARANTEE 100% SOLID (alpha = 255) for all pixels inside the robot bounds [minX..maxX, minY..maxY]
  for (let y = 0; y < h; y++) {
    if (minX[y] === -1) continue;
    // Keep 2px margin inside boundary to preserve outer edge smooth anti-aliasing
    const startX = minX[y] + 2;
    const endX = maxX[y] - 2;

    for (let x = startX; x <= endX; x++) {
      if (minY[x] !== -1 && y >= minY[x] + 2 && y <= maxY[x] - 2) {
        data[(y * w + x) * 4 + 3] = 255; // 100% SOLID ROBOT BODY
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/assets/img/hero/cute-robot-transparent.png');

  console.log('Final clean background removal complete!');
}

removeBgFinalClean().catch(console.error);
