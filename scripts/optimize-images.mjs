import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_IMAGES = [
  'public/testimonial/testimonial-yellow.png',
  'public/Service-page/yellow-bg.png',
  'public/case-study/banner-navya.png',
  'public/case-study/navya/navya-laptop.png',
  'public/case-study/navya/navya-g1.png',
  'public/case-study/navya/navya-g2.png',
  'public/case-study/navya/navya-g3.png',
  'public/case-study/navya/navya-g4.png',
  'public/case-study/navya/navya-g5.png',
  'public/case-study/navya/navya-g6.png',
];

async function optimizeImages() {
  console.log('Starting WebP conversion process...\n');
  let totalSavedBytes = 0;

  for (const imgPath of TARGET_IMAGES) {
    const absoluteInputPath = path.resolve(imgPath);

    if (!fs.existsSync(absoluteInputPath)) {
      console.warn(`File not found: ${imgPath}. Skipping...`);
      continue;
    }

    const ext = path.extname(imgPath);
    const absoluteOutputPath = absoluteInputPath.replace(ext, '.webp');
    const relativeOutputPath = imgPath.replace(ext, '.webp');

    const originalSize = fs.statSync(absoluteInputPath).size;

    try {
      await sharp(absoluteInputPath)
        .webp({ quality: 82 })
        .toFile(absoluteOutputPath);

      const optimizedSize = fs.statSync(absoluteOutputPath).size;
      const savedBytes = originalSize - optimizedSize;
      totalSavedBytes += savedBytes;

      const formatSize = (bytes) => (bytes / (1024 * 1024)).toFixed(2) + ' MB';

      console.log(`Optimized: ${imgPath}`);
      console.log(`  Original:  ${formatSize(originalSize)} (${originalSize.toLocaleString()} bytes)`);
      console.log(`  WebP:      ${formatSize(optimizedSize)} (${optimizedSize.toLocaleString()} bytes)`);
      console.log(`  Reduction: ${((savedBytes / originalSize) * 100).toFixed(1)}% saved\n`);
    } catch (error) {
      console.error(`Error optimizing ${imgPath}:`, error);
    }
  }

  const formatTotalSize = (bytes) => (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  console.log(`WebP conversion complete! Total bandwidth saved: ${formatTotalSize(totalSavedBytes)}`);
}

optimizeImages();
