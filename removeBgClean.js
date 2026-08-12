const sharp = require('sharp');

async function removeBgClean() {
  const { data, info } = await sharp('public/assets/img/hero/cute-robot.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const visited = new Uint8Array(w * h);

  // We start flood fill from all 4 borders
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

    const didx = pidx * 4;
    const r = data[didx];
    const g = data[didx + 1];
    const b = data[didx + 2];

    // Robot body elements to protect:
    // - Black visor / joints: r < 120 && g < 120 && b < 120
    // - Cyan glowing eyes: b > 180 && g > 150 && (b - r > 40 || g - r > 40)
    // - White robot body: neutral bright white (r > 200 && g > 200 && b > 200 && Math.abs(r - g) <= 6 && Math.abs(g - b) <= 6)
    
    const isRobotBlack = (r < 130 && g < 130 && b < 130);
    const isRobotCyan = (b > 160 && (b - r > 30 || g - r > 30));
    const isRobotPureWhite = (r > 200 && g > 200 && b > 200 && Math.abs(r - g) <= 5 && Math.abs(g - b) <= 5);

    const isRobotPart = isRobotBlack || isRobotCyan || isRobotPureWhite;

    // Background criteria:
    // Light gray/blue studio backdrop (r > 130, g > 135, b > 145) with blue bias (b >= r)
    const isLightBg = (r > 130 && g > 135 && b > 145);
    const isBgColor = isLightBg && !isRobotPart;

    if (isBgColor) {
      visited[pidx] = 1;
      data[didx + 3] = 0; // set alpha to 0 (transparent)

      stack.push([x - 1, y]);
      stack.push([x + 1, y]);
      stack.push([x, y - 1]);
      stack.push([x, y + 1]);
    } else {
      visited[pidx] = 2; // Edge of object
    }
  }

  // 2nd Pass: Remove remaining isolated background pixels & halo fringing near edges
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const pidx = y * w + x;
      if (visited[pidx] === 2) {
        const didx = pidx * 4;
        const r = data[didx];
        const g = data[didx + 1];
        const b = data[didx + 2];

        // Check surrounding transparent neighbors
        let tNeighbors = 0;
        if (visited[(y - 1) * w + x] === 1) tNeighbors++;
        if (visited[(y + 1) * w + x] === 1) tNeighbors++;
        if (visited[y * w + x - 1] === 1) tNeighbors++;
        if (visited[y * w + x + 1] === 1) tNeighbors++;

        // If it's a light bluish background fringe pixel with transparent neighbors, make it transparent
        const isFringe = (r > 140 && g > 140 && b > 150 && (b >= r - 5) && Math.abs(r - g) <= 15);
        if (tNeighbors >= 2 && isFringe) {
          data[didx + 3] = 0;
          visited[pidx] = 1;
        } else if (tNeighbors >= 1 && isFringe) {
          // Feather alpha on edge
          data[didx + 3] = Math.floor(255 * (1 - tNeighbors * 0.4));
        }
      }
    }
  }

  // 3rd Pass: Edge smoothing pass
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const pidx = y * w + x;
      if (data[pidx * 4 + 3] > 0) {
        let tNeighbors = 0;
        if (data[((y - 1) * w + x) * 4 + 3] === 0) tNeighbors++;
        if (data[((y + 1) * w + x) * 4 + 3] === 0) tNeighbors++;
        if (data[(y * w + x - 1) * 4 + 3] === 0) tNeighbors++;
        if (data[(y * w + x + 1) * 4 + 3] === 0) tNeighbors++;

        if (tNeighbors >= 3) {
          data[pidx * 4 + 3] = 0; // Remove single pixel noise specks
        }
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/assets/img/hero/cute-robot-transparent.png');

  console.log('Clean background removal completed successfully!');
}

removeBgClean().catch(console.error);
