const sharp = require('sharp');

async function inspectHeadTransition() {
  const { data, info } = await sharp('public/assets/img/hero/cute-robot.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const centerX = Math.floor(w / 2);

  console.log("Center column sampling (x =", centerX, "):");
  for (let y = 0; y < 350; y += 10) {
    const idx = (y * w + centerX) * 3;
    console.log(`y=${y}: RGB(${data[idx]}, ${data[idx+1]}, ${data[idx+2]})`);
  }
}

inspectHeadTransition().catch(console.error);
