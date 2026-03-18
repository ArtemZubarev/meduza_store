const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");
const JPEG_QUALITY = 82;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const stats = fs.statSync(filePath);
  const sizeBefore = stats.size;

  try {
    let pipeline = sharp(filePath);

    if (ext === ".png") {
      // PNG: palette mode reduces colors, compressionLevel 9. Only overwrite if smaller.
      pipeline = pipeline.png({ palette: true, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY });
    }

    const buffer = await pipeline.toBuffer();
    const sizeAfter = buffer.length;

    if (sizeAfter < sizeBefore) {
      fs.writeFileSync(filePath, buffer);
      const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
      console.log(
        `  ${path.relative(IMAGES_DIR, filePath)}: ${formatSize(sizeBefore)} → ${formatSize(sizeAfter)} (-${saved}%)`
      );
    } else {
      console.log(
        `  ${path.relative(IMAGES_DIR, filePath)}: ${formatSize(sizeBefore)} (skipped, no reduction)`
      );
    }
  } catch (err) {
    console.error(`  ${filePath}: ${err.message}`);
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function walkDir(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  console.log("Optimizing images in public/images/...\n");
  const files = walkDir(IMAGES_DIR).filter((f) =>
    [".png", ".jpg", ".jpeg"].includes(path.extname(f).toLowerCase())
  );

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log(`\nDone. Processed ${files.length} images.`);
}

main().catch(console.error);
