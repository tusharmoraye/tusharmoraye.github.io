/**
 * Rasterise the PNG icon variants from the TM mark.
 *
 * The mark itself lives in public/favicon.svg, which carries a theme-aware
 * plate. iOS and Android composite their own masks and backgrounds, so the PNGs
 * get a fixed dark plate instead of the media query.
 *
 * Usage: node scripts/generate-icons.mjs
 */
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const PLATE = "#08080d";
const MARK = "#8b9bff";

const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${PLATE}"/>
  <g fill="none" stroke="${MARK}" stroke-width="7">
    <path d="M12 16.5H52"/>
    <path d="M32 16.5V29.5"/>
    <path d="M16 51.5V32.5L32 48.5L48 32.5V51.5"/>
  </g>
</svg>`);

const targets = [
  ["public/apple-touch-icon.png", 180],
  ["public/icon-192.png", 192],
  ["public/icon-512.png", 512],
];

for (const [file, size] of targets) {
  // density oversamples the vector before the resize so the diagonals stay clean.
  const png = await sharp(svg, { density: 600 })
    .resize(size, size)
    .png({ compressionLevel: 9, effort: 10 })
    .toBuffer();

  const { width, height } = await sharp(png).metadata();
  if (width !== size || height !== size) {
    throw new Error(`${file}: expected ${size}x${size}, got ${width}x${height}`);
  }

  writeFileSync(file, png);
  console.log(`${file.padEnd(30)}${width}x${height}  ${(png.length / 1024).toFixed(1)}KB`);
}
