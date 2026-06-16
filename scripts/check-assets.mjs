import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");

const failures = [];

const record = (condition, message) => {
  if (!condition) failures.push(message);
};

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...walk(fullPath));
    } else {
      result.push(fullPath);
    }
  }
  return result;
};

const files = walk(publicDir);
const rel = (filePath) => path.relative(rootDir, filePath).split(path.sep).join("/");
const read = (filePath) => fs.readFileSync(filePath, "utf8");
const size = (filePath) => fs.statSync(filePath).size;

const limits = [
  { file: "public/styles.css", max: 120 * 1024 },
  { file: "public/app.js", max: 120 * 1024 },
  { file: "public/site-config.js", max: 180 * 1024 },
  { file: "public/favicon.ico", max: 80 * 1024 },
  { file: "public/assets/brand/apple-touch-icon.png", max: 80 * 1024 },
  { file: "public/assets/brand/favicon-48x48.png", max: 20 * 1024 },
  { file: "public/assets/brand/favicon-32x32.png", max: 10 * 1024 },
  { file: "public/assets/brand/favicon-16x16.png", max: 5 * 1024 },
];

for (const { file, max } of limits) {
  const fullPath = path.join(rootDir, file);
  record(fs.existsSync(fullPath), `Missing expected asset -> ${file}`);
  if (fs.existsSync(fullPath)) {
    record(
      size(fullPath) <= max,
      `${file}: size ${size(fullPath)} exceeds ${max} bytes`,
    );
  }
}

for (const filePath of files) {
  const relativePath = rel(filePath);
  const isImage =
    /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(filePath) &&
    !/favicon-(16x16|32x32|48x48)\.png$/i.test(filePath) &&
    !/apple-touch-icon\.png$/i.test(filePath);

  if (isImage) {
    record(
      size(filePath) <= 250 * 1024,
      `${relativePath}: image is too large (${size(filePath)} bytes)`,
    );
  }
}

const htmlFiles = files.filter((filePath) => filePath.endsWith(".html"));

for (const filePath of htmlFiles) {
  const html = read(filePath);
  const relativePath = rel(filePath);

  record(
    !html.includes("fonts.googleapis.com") && !html.includes("fonts.gstatic.com"),
    `${relativePath}: external font CDN reference found`,
  );

  const images = Array.from(html.matchAll(/<img\b([^>]*)>/gi), (match) => match[1]);
  for (const imageAttributes of images) {
    record(
      /\balt\s*=\s*"[^"]*"/i.test(imageAttributes),
      `${relativePath}: <img> is missing alt text`,
    );
  }
}

const totalBrandSize = files
  .filter((filePath) => filePath.includes(`${path.sep}assets${path.sep}brand${path.sep}`))
  .reduce((sum, filePath) => sum + size(filePath), 0);

record(
  totalBrandSize <= 200 * 1024,
  `public/assets/brand total size ${totalBrandSize} exceeds 204800 bytes`,
);

if (failures.length > 0) {
  console.error("Asset checks failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Asset checks passed");
