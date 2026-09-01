/**
 * Recompress the source images under src/assets.
 *
 * Astro re-encodes these to webp at build time, so this pass is about the bytes
 * in the repo and the work the build has to do, not the bytes a visitor
 * downloads. The exception is og.png, which Base.astro serves as a real PNG.
 *
 * PNGs are re-encoded losslessly, so they can be run through repeatedly without
 * drifting. JPEGs are lossy, so a file is only rewritten when the saving clears
 * MIN_JPEG_GAIN; that keeps repeat runs from slowly grinding quality away.
 *
 * Usage: node scripts/optimize-images.mjs [--dry]
 */
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = "src/assets";
const JPEG_QUALITY = 88;
const MIN_JPEG_GAIN = 0.1; // rewrite only if it saves at least 10%
const dry = process.argv.includes("--dry");

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(join(dir, entry.name)) : join(dir, entry.name),
  );

const kb = (bytes) => (bytes / 1024).toFixed(0).padStart(5) + "KB";

let before = 0;
let after = 0;
const skipped = [];

for (const file of walk(ROOT).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const original = statSync(file).size;
  const isPng = extname(file).toLowerCase() === ".png";
  const image = sharp(file);

  const output = isPng
    ? await image.png({ compressionLevel: 9, effort: 10 }).toBuffer()
    : await image.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true }).toBuffer();

  const gain = (original - output.length) / original;
  // PNG is lossless here, so any saving is free. JPEG has to earn its rewrite.
  const worthIt = output.length < original && (isPng || gain >= MIN_JPEG_GAIN);

  before += original;
  after += worthIt ? output.length : original;

  if (!worthIt) {
    skipped.push(file);
    continue;
  }
  if (!dry) writeFileSync(file, output);
  console.log(`${kb(original)} -> ${kb(output.length)}  (-${(gain * 100).toFixed(0)}%)  ${file}`);
}

for (const file of skipped) console.log(`${" ".repeat(21)}kept  ${file}`);
console.log(
  `\n${dry ? "would save" : "saved"} ${kb(before - after)} of ${kb(before)} ` +
    `(-${(((before - after) / before) * 100).toFixed(0)}%)`,
);
