const sharp = require('sharp');

async function removeBgPerfect() {
  const { data, info } = await sharp('public/assets/img/hero/cute-robot.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const visited = new Uint8Array(w * h);

  // Stack for flood fill
  const stack = [];

  // Seed with all edge pixels around the 4 borders of the image
  for (let x = 0; x < w; x++) {
    stack.push([x, 0]);
    stack.push([x, h - 1]);
  }
  for (let y = 0; y < h; y++) {
    stack.push([0, y]);
    stack.push([w - 1, y]);
  }

  // Flood fill algorithm based on smooth gradient continuity
  while (stack.length > 0) {
    const [x, y] = stack.pop();
    if (x < 0 || x >= w || y < 0 || y >= h) continue;

    const pidx = y * w + x;
    if (visited[pidx]) continue;

    const didx = pidx * 4;
    const r = data[didx];
    const g = data[didx + 1];
    const b = data[didx + 2];

    // Background color profile check:
    // Studio background is light bluish-gray: r > 180, g > 185, b > 195, and b >= r - 5
    // AND gray-tinted: |r - g| < 20
    const isStudioBgColor = (r > 175 && g > 180 && b > 190) && (b >= r - 5) && (Math.abs(r - g) < 20);

    if (isStudioBgColor) {
      visited[pidx] = 1;
      data[didx + 3] = 0; // Make transparent

      // Check 4 neighbors
      const neighbors = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
          const nidx = (ny * w + nx) * 4;
          const nr = data[nidx];
          const ng = data[nidx + 1];
          const nb = data[nidx + 2];

          // Color delta between adjacent pixels
          const diff = Math.abs(r - nr) + Math.abs(g - ng) + Math.abs(b - nb);
          
          // Only expand if the neighbor is smooth gradient background (diff < 22)
          if (diff < 22) {
            stack.push([nx, ny]);
          }
        }
      }
    } else {
      visited[pidx] = 2; // Edge of robot
    }
  }

  // Refinement pass: Smooth outer edge alpha without touching inner pixels
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const pidx = y * w + x;
      if (visited[pidx] === 2) {
        // Count transparent neighbors
        let tCount = 0;
        if (visited[(y - 1) * w + x] === 1) tCount++;
        if (visited[(y + 1) * w + x] === 1) tCount++;
        if (visited[y * w + x - 1] === 1) tCount++;
        if (visited[y * w + x + 1] === 1) tCount++;

        // Only adjust alpha if it borders at least one background pixel
        if (tCount > 0) {
          const didx = pidx * 4;
          const r = data[didx];
          const g = data[didx + 1];
          const b = data[didx + 2];
          
          // Soften the boundary pixel
          const isOuterFringe = (r > 185 && g > 190 && b > 200);
          if (isOuterFringe && tCount >= 2) {
            data[didx + 3] = 0; // Clear outer fringe
          } else if (isOuterFringe) {
            data[didx + 3] = 120; // Soft edge
          }
        }
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/assets/img/hero/cute-robot-transparent.png');

  console.log('Perfect background removal completed!');
}

removeBgPerfect().catch(console.error);
