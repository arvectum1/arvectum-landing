import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const cssPath = path.join(publicDir, "styles.css");
const robotsPath = path.join(publicDir, "robots.txt");
const siteConfigPath = path.join(publicDir, "site-config.js");
const jsFiles = [
  path.join(publicDir, "app.js"),
  path.join(publicDir, "site-config.js"),
];

const htmlFiles = fs
  .readdirSync(publicDir)
  .filter((name) => name.endsWith(".html"))
  .sort();

const localHtmlFiles = new Set(htmlFiles);
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const sitemapUrls = Array.from(
  sitemap.matchAll(/<loc>([^<]+)<\/loc>/g),
  (match) => match[1],
);
const robotsContent = fs.readFileSync(robotsPath, "utf8");
const siteConfigContent = fs.readFileSync(siteConfigPath, "utf8");

const expectedSitemapFiles = [
  "index.html",
  "solutions.html",
  "approach.html",
  "contact.html",
  "privacy.html",
  "personal-data-consent.html",
  "cookies.html",
].filter((fileName) => localHtmlFiles.has(fileName));

const forbiddenSitemapFiles = [
  "cases.html",
  "health.html",
  "seo-checklist.html",
  "thank-you.html",
];

const expectedFaviconFiles = [
  "favicon.ico",
  "assets/brand/favicon-32x32.png",
  "assets/brand/favicon-16x16.png",
  "assets/brand/apple-touch-icon.png",
];

const failures = [];

const record = (condition, message) => {
  if (!condition) failures.push(message);
};

const isExternalUrl = (value) =>
  /^(?:[a-z]+:|\/\/|#)/i.test(value) ||
  value.startsWith("mailto:") ||
  value.startsWith("tel:");

const stripQuery = (value) => value.split("#")[0].split("?")[0];

const toPublicRelative = (value) => stripQuery(value).replace(/^\/+/, "");

const fileNameToUrl = (fileName) =>
  fileName === "index.html"
    ? "https://arvectum.com/"
    : `https://arvectum.com/${fileName}`;

for (const fileName of htmlFiles) {
  const filePath = path.join(publicDir, fileName);
  const html = fs.readFileSync(filePath, "utf8");

  record(
    /<title>[\s\S]*?<\/title>/i.test(html),
    `${fileName}: missing <title>`,
  );
  record(
    /<meta[^>]+name="description"[^>]+content="[^"]+"/i.test(html),
    `${fileName}: missing meta description`,
  );
  record(
    /<link[^>]+rel="canonical"[^>]+href="[^"]+"/i.test(html),
    `${fileName}: missing canonical link`,
  );

  record(
    /<link[^>]+rel="icon"[^>]+href="\/favicon\.ico"[^>]*sizes="any"/i.test(
      html,
    ),
    `${fileName}: missing /favicon.ico link`,
  );
  record(
    /<link[^>]+rel="icon"[^>]+sizes="32x32"[^>]+href="\/assets\/brand\/favicon-32x32\.png"/i.test(
      html,
    ),
    `${fileName}: missing 32x32 favicon link`,
  );
  record(
    /<link[^>]+rel="icon"[^>]+sizes="16x16"[^>]+href="\/assets\/brand\/favicon-16x16\.png"/i.test(
      html,
    ),
    `${fileName}: missing 16x16 favicon link`,
  );
  record(
    /<link[^>]+rel="apple-touch-icon"[^>]+href="\/assets\/brand\/apple-touch-icon\.png"/i.test(
      html,
    ),
    `${fileName}: missing apple-touch-icon link`,
  );

  const hrefs = Array.from(
    html.matchAll(/\b(?:href|src)="([^"]+)"/g),
    (match) => match[1],
  );

  for (const rawHref of hrefs) {
    if (isExternalUrl(rawHref)) continue;
    const href = toPublicRelative(rawHref);
    if (!href) continue;

    if (href.endsWith(".html")) {
      record(
        localHtmlFiles.has(path.basename(href)),
        `${fileName}: broken local HTML link -> ${rawHref}`,
      );
    }

    if (/\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|json)$/i.test(href)) {
      const assetPath = path.join(publicDir, href);
      record(
        fs.existsSync(assetPath),
        `${fileName}: missing asset -> ${rawHref}`,
      );
    }
  }

  const forbiddenPatterns = [/Будет добавлено/iu, /\bTODO\b/u, /placeholder/iu];
  for (const pattern of forbiddenPatterns) {
    record(
      !pattern.test(html),
      `${fileName}: forbidden placeholder text matched ${pattern}`,
    );
  }

  if (fileName === "cases.html") {
    record(
      /<meta[^>]+name="robots"[^>]+content="noindex,nofollow"/i.test(html),
      "cases.html: must use noindex,nofollow",
    );
  } else {
    record(
      !/href="(?:\/)?cases\.html(?:[#?"][^"]*)?"/i.test(html),
      `${fileName}: must not link to cases.html`,
    );
  }

  if (fileName === "index.html") {
    record(
      !/Кто стоит за Arvectum|Кто делает Arvectum|Основатель/iu.test(html),
      "index.html: founder/about block must not appear on homepage",
    );

    const homeH1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const homeH1 = homeH1Match
      ? homeH1Match[1]
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim()
      : "";
    record(homeH1.length > 0, "index.html: homepage H1 is missing");
    record(
      !/закупочн(ый|ого|ому|ом)? маршрут/iu.test(homeH1),
      "index.html: homepage H1 is too narrow and must not position procurement as the only focus",
    );
    record(
      !/только закупки/iu.test(homeH1),
      "index.html: homepage H1 must not position the company as procurement-only",
    );
  }
}

const cssContent = fs.readFileSync(cssPath, "utf8");
for (const match of cssContent.matchAll(/url\((['"]?)([^)'"]+)\1\)/g)) {
  const asset = match[2];
  if (isExternalUrl(asset) || asset.startsWith("data:")) continue;
  const assetPath = path.join(publicDir, toPublicRelative(asset));
  record(fs.existsSync(assetPath), `styles.css: missing asset -> ${asset}`);
}

for (const filePath of jsFiles) {
  const content = fs.readFileSync(filePath, "utf8");
  if (filePath.endsWith("site-config.js")) {
    const forbiddenPatterns = [/Будет добавлено/iu, /\bTODO\b/u];
    for (const pattern of forbiddenPatterns) {
      record(
        !pattern.test(content),
        `${path.basename(filePath)}: forbidden placeholder text matched ${pattern}`,
      );
    }
  }

  for (const match of content.matchAll(
    /["'](\/?assets\/[^"']+\.(?:png|jpg|jpeg|webp|gif|svg|ico))["']/g,
  )) {
    const asset = toPublicRelative(match[1]);
    const assetPath = path.join(publicDir, asset);
    record(
      fs.existsSync(assetPath),
      `${path.basename(filePath)}: missing asset -> ${match[1]}`,
    );
  }
}

const ogImagePath = path.join(publicDir, "assets/brand/logo-horizontal.svg");
record(
  fs.existsSync(ogImagePath),
  "Missing og:image asset -> assets/brand/logo-horizontal.svg",
);

for (const filePath of expectedFaviconFiles) {
  record(
    fs.existsSync(path.join(publicDir, filePath)),
    `Missing favicon asset -> ${filePath}`,
  );
}

for (const url of sitemapUrls) {
  record(
    url.startsWith("https://arvectum.com/"),
    `sitemap.xml: URL must use https://arvectum.com/ -> ${url}`,
  );
  record(!url.startsWith("http://"), `sitemap.xml: must not use http -> ${url}`);
  record(
    !url.startsWith("https://www.arvectum.com/"),
    `sitemap.xml: must not use www -> ${url}`,
  );

  const fileName = url === "https://arvectum.com/" ? "index.html" : path.basename(url);
  record(
    localHtmlFiles.has(fileName),
    `sitemap.xml: URL points to non-existing file -> ${url}`,
  );
}

for (const fileName of expectedSitemapFiles) {
  const url = fileNameToUrl(fileName);
  record(sitemapUrls.includes(url), `sitemap.xml: missing URL -> ${url}`);
}

for (const fileName of forbiddenSitemapFiles) {
  const url = fileNameToUrl(fileName);
  record(!sitemapUrls.includes(url), `sitemap.xml: must not include ${url}`);
}

record(
  !/nav:\s*\[[\s\S]*?slug:\s*"cases"[\s\S]*?\]/u.test(siteConfigContent),
  "site-config.js: cases must not appear in primary navigation",
);
record(
  !/footerNav:\s*\[[\s\S]*?slug:\s*"cases"[\s\S]*?\]/u.test(siteConfigContent),
  "site-config.js: cases must not appear in footer navigation",
);
record(
  !/Посмотреть сценарии|View scenarios/u.test(siteConfigContent),
  "site-config.js: hidden scenarios page must not be used in CTA copy",
);

record(
  /Sitemap:\s+https:\/\/arvectum\.com\/sitemap\.xml/u.test(robotsContent),
  "robots.txt: missing sitemap directive",
);
record(
  /Disallow:\s+\/health\.html/u.test(robotsContent),
  "robots.txt: missing Disallow: /health.html",
);
record(
  /Disallow:\s+\/thank-you\.html/u.test(robotsContent),
  "robots.txt: missing Disallow: /thank-you.html",
);
record(
  /Disallow:\s+\/api\//u.test(robotsContent),
  "robots.txt: missing Disallow: /api/",
);

if (failures.length) {
  console.error("Static checks failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Static checks passed for ${htmlFiles.length} HTML files.`);
