const sharp = require('sharp');

async function removeBgPerfect2() {
  const { data, info } = await sharp('public/assets/img/hero/cute-robot.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const visited = new Uint8Array(w * h);

  // Stack for flood fill
  const stack = [];

  // Seed with border pixels
  for (let x = 0; x < w; x++) {
    stack.push([x, 0]);
    stack.push([x, h - 1]);
  }
  for (let y = 0; y < h; y++) {
    stack.push([0, y]);
    stack.push([w - 1, y]);
  }

  // The background studio color at the corners is roughly (200-225, 205-230, 215-242).
  // The top of the robot head highlight at y=90 is RGB(247, 250, 255).
  // So any pixel with r > 235 || g > 238 || b > 246 is ROBOT ARMOR, NOT BACKGROUND!

  while (stack.length > 0) {
    const [x, y] = stack.pop();
    if (x < 0 || x >= w || y < 0 || y >= h) continue;

    const pidx = y * w + x;
    if (visited[pidx]) continue;

    const didx = pidx * 4;
    const r = data[didx];
    const g = data[didx + 1];
    const b = data[didx + 2];

    // Background range: r <= 232, g <= 235, b <= 246
    // Must be light bluish gray
    const isBgColor = (r >= 180 && r <= 232 && g >= 185 && g <= 235 && b >= 195 && b <= 246) &&
                      (b >= r - 3) &&
                      (Math.abs(r - g) <= 15);

    if (isBgColor) {
      visited[pidx] = 1;
      data[didx + 3] = 0; // Make transparent

      const neighbors = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
          const nidx = (ny * w + nx) * 4;
          const nr = data[nidx];
          const ng = data[nidx + 1];
          const nb = data[nidx + 2];

          const diff = Math.abs(r - nr) + Math.abs(g - ng) + Math.abs(b - nb);
          // Tight step difference threshold (diff <= 12) prevents jumping onto robot outline
          if (diff <= 12) {
            stack.push([nx, ny]);
          }
        }
      }
    } else {
      visited[pidx] = 2; // Edge of robot
    }
  }

  // Refinement pass for clean edges
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const pidx = y * w + x;
      if (visited[pidx] === 2) {
        let tCount = 0;
        if (visited[(y - 1) * w + x] === 1) tCount++;
        if (visited[(y + 1) * w + x] === 1) tCount++;
        if (visited[y * w + x - 1] === 1) tCount++;
        if (visited[y * w + x + 1] === 1) tCount++;

        if (tCount >= 2) {
          const didx = pidx * 4;
          const r = data[didx];
          const g = data[didx + 1];
          const b = data[didx + 2];
          if (r > 190 && g > 195 && b > 205 && r <= 232) {
            data[didx + 3] = 0; // Edge cleaning
          }
        }
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/assets/img/hero/cute-robot-transparent.png');

  console.log('Strict boundary background removal complete!');
}

removeBgPerfect2().catch(console.error);
