import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

const files = ['BookCover.png', 'BookCoverFront.png'];

console.log(`Optimizing book cover images...`);

async function optimizeImage(filename) {
  const inputPath = path.join(assetsDir, filename);
  const outputPath = path.join(assetsDir, filename);

  const stats = fs.statSync(inputPath);
  const sizeBefore = (stats.size / 1024 / 1024).toFixed(2);

  await sharp(inputPath)
    .resize(2000, null, {
      withoutEnlargement: true,
      fit: 'inside'
    })
    .png({
      quality: 85,
      compressionLevel: 9,
      adaptiveFiltering: true
    })
    .toFile(outputPath + '.tmp');

  fs.unlinkSync(inputPath);
  fs.renameSync(outputPath + '.tmp', outputPath);

  const statsAfter = fs.statSync(outputPath);
  const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);

  console.log(`✓ ${filename}: ${sizeBefore}MB → ${sizeAfter}MB (${((1 - statsAfter.size/stats.size) * 100).toFixed(1)}% reduction)`);
}

for (const file of files) {
  await optimizeImage(file);
}

console.log('\n✅ Book cover images optimized!');
