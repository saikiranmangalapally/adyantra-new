const sharp = require('sharp');

async function removeBgPerfectFinal() {
  const { data, info } = await sharp('public/assets/img/hero/cute-robot-fresh.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const visited = new Uint8Array(w * h);

  const stack = [];

  // Seed with outer border pixels
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

    // Background range: Light studio blue-gray background
    // Strict range prevents touching bright white armor (r > 235) or dark joints (r < 140)
    const isBgColor = (r >= 170 && r <= 234 && g >= 175 && g <= 236 && b >= 185 && b <= 246) &&
                      (b >= r - 4) &&
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
          // Tight diff limit guarantees no leaking into robot silhouette
          if (diff <= 12) {
            stack.push([nx, ny]);
          }
        }
      }
    } else {
      visited[pidx] = 2; // Robot edge
    }
  }

  // Edge smoothing for outer border
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
          if (r > 185 && g > 190 && b > 200 && r <= 234) {
            data[didx + 3] = 0;
          }
        }
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/assets/img/hero/cute-robot-transparent.png');

  console.log('Background removal complete for fresh upload!');
}

removeBgPerfectFinal().catch(console.error);
