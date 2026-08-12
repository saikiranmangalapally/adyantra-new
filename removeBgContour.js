const sharp = require('sharp');

async function removeBgContour() {
  const { data, info } = await sharp('public/assets/img/hero/cute-robot-fresh.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;

  // Step 1: Find the outer boundary points of the robot character for each row & column
  // A pixel is considered background if it matches the light studio blue-gray background:
  // r > 175 && g > 180 && b > 190 && |r - g| < 20 && b >= r - 5
  
  function isStudioBg(r, g, b) {
    return (r > 175 && g > 180 && b > 190) && (Math.abs(r - g) < 22) && (b >= r - 8);
  }

  // Find minX and maxX for each row y
  const minX = new Int32Array(h).fill(-1);
  const maxX = new Int32Array(h).fill(-1);

  for (let y = 0; y < h; y++) {
    // Scan from left to right
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      if (!isStudioBg(data[idx], data[idx + 1], data[idx + 2])) {
        minX[y] = x;
        break;
      }
    }
    // Scan from right to left
    for (let x = w - 1; x >= 0; x--) {
      const idx = (y * w + x) * 4;
      if (!isStudioBg(data[idx], data[idx + 1], data[idx + 2])) {
        maxX[y] = x;
        break;
      }
    }
  }

  // Find minY and maxY for each column x
  const minY = new Int32Array(w).fill(-1);
  const maxY = new Int32Array(w).fill(-1);

  for (let x = 0; x < w; x++) {
    // Scan from top to bottom
    for (let y = 0; y < h; y++) {
      const idx = (y * w + x) * 4;
      if (!isStudioBg(data[idx], data[idx + 1], data[idx + 2])) {
        minY[x] = y;
        break;
      }
    }
    // Scan from bottom to top
    for (let y = h - 1; y >= 0; y--) {
      const idx = (y * w + x) * 4;
      if (!isStudioBg(data[idx], data[idx + 1], data[idx + 2])) {
        maxY[x] = y;
        break;
      }
    }
  }

  // Step 2: Set alpha based strictly on outer contour bounds!
  // ANY pixel inside [minX(y), maxX(y)] AND [minY(x), maxY(x)] IS 100% OPAQUE FOREGROUND!
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;

      const isInsideX = (minX[y] !== -1 && x >= minX[y] && x <= maxX[y]);
      const isInsideY = (minY[x] !== -1 && y >= minY[x] && y <= maxY[x]);

      // If it's outside the outer contour, it is background (alpha = 0)
      if (!isInsideX || !isInsideY) {
        data[idx + 3] = 0;
      } else {
        // INSIDE THE ROBOT: GUARANTEED 100% OPAQUE!
        data[idx + 3] = 255;
      }
    }
  }

  // Step 3: Soften edge boundary pixels (1px border feather) for crisp visual quality
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const idx = (y * w + x) * 4;
      if (data[idx + 3] === 255) {
        // Count surrounding transparent neighbors
        let tNeighbors = 0;
        if (data[((y - 1) * w + x) * 4 + 3] === 0) tNeighbors++;
        if (data[((y + 1) * w + x) * 4 + 3] === 0) tNeighbors++;
        if (data[(y * w + x - 1) * 4 + 3] === 0) tNeighbors++;
        if (data[(y * w + x + 1) * 4 + 3] === 0) tNeighbors++;

        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];

        if (tNeighbors >= 2 && isStudioBg(r, g, b)) {
          data[idx + 3] = 0; // Clear outer boundary halo
        } else if (tNeighbors === 1 && isStudioBg(r, g, b)) {
          data[idx + 3] = 160; // Soft edge anti-aliasing
        }
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/assets/img/hero/cute-robot-transparent.png');

  console.log('Contour-bounded background removal completed successfully!');
}

removeBgContour().catch(console.error);
