const sharp = require('sharp');

async function checkColors() {
  const { data, info } = await sharp('public/assets/img/hero/cute-robot.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;

  // Let's sample top-left, top-right, bottom-left, bottom-right, top-center
  const samples = [
    [10, 10],
    [w - 10, 10],
    [10, h - 10],
    [w - 10, h - 10],
    [Math.floor(w / 2), 10],
    [10, Math.floor(h / 2)],
    [w - 10, Math.floor(h / 2)],
  ];

  console.log("Image dimensions:", w, "x", h);
  samples.forEach(([x, y]) => {
    const idx = (y * w + x) * 3;
    console.log(`Pixel at (${x}, ${y}): RGB(${data[idx]}, ${data[idx+1]}, ${data[idx+2]})`);
  });
}

checkColors().catch(console.error);
