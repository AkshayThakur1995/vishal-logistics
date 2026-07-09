import sharp from "sharp";
import { stat, unlink, rename } from "node:fs/promises";
import path from "node:path";

const assetsDir = path.resolve("src/assets");

const targets = [
  "service-page-hero.webp",
  "freight-forwarding.webp",
  "sea-freight.jfif",
  "air-friet.webp",
  "land-rail.webp",
  "custom-clearnec.webp",
  "warehouse.webp",
];

async function optimize(file, { maxWidth = 1200, quality = 76 } = {}) {
  const input = path.join(assetsDir, file);
  const stem = file.replace(/\.[^.]+$/, "");
  const temp = path.join(assetsDir, `${stem}.opt.webp`);

  const before = (await stat(input)).size;

  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(temp);

  const output = path.join(assetsDir, `${stem}.webp`);
  await unlink(input).catch(() => {});
  await rename(temp, output);

  const after = (await stat(output)).size;
  console.log(`${file} → ${stem}.webp: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
}

for (const file of targets) {
  await optimize(file);
}

console.log("Done.");
