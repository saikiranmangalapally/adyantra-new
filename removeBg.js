const sharp = require('sharp');

async function removeBg() {
  const { data, info } = await sharp('public/assets/img/hero/cute-robot.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const visited = new Uint8Array(w * h);

  // Flood fill from all 4 corners + edges
  const stack = [];
  // Add all edge pixels as seeds
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

    // The background is a light gray-blue gradient: roughly (190-240, 190-240, 200-245)
    // Check: all channels are high (light), blue >= red, not too saturated
    const isLight = r > 175 && g > 175 && b > 180;
    const isGrayish = Math.abs(r - g) < 25 && Math.abs(g - b) < 30;
    const isBg = isLight && isGrayish;

    if (isBg) {
      visited[pidx] = 1;
      data[didx + 3] = 0; // transparent

      stack.push([x - 1, y]);
      stack.push([x + 1, y]);
      stack.push([x, y - 1]);
      stack.push([x, y + 1]);
    } else {
      visited[pidx] = 2; // edge of object
    }
  }

  // Anti-alias: soften edge pixels that border transparent ones
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const pidx = y * w + x;
      if (visited[pidx] !== 2) continue;

      let tCount = 0;
      if (visited[(y - 1) * w + x] === 1) tCount++;
      if (visited[(y + 1) * w + x] === 1) tCount++;
      if (visited[y * w + x - 1] === 1) tCount++;
      if (visited[y * w + x + 1] === 1) tCount++;

      if (tCount > 0) {
        // Fade the alpha based on how many transparent neighbors
        data[pidx * 4 + 3] = Math.max(0, 255 - tCount * 60);
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/assets/img/hero/cute-robot-transparent.png');

  console.log('Done! Saved cute-robot-transparent.png');
}

removeBg().catch(console.error);
