import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const robotsPath = path.join(publicDir, "robots.txt");
const siteConfigPath = path.join(publicDir, "site-config.js");
const cssPath = path.join(publicDir, "styles.css");

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

const allFiles = walk(publicDir);
const htmlFiles = allFiles
  .filter((filePath) => filePath.endsWith(".html"))
  .map((filePath) =>
    path.relative(publicDir, filePath).split(path.sep).join("/"),
  )
  .sort();
const htmlSet = new Set(htmlFiles);

const publicIndexablePages = [
  "index.html",
  "solutions.html",
  "solutions/procurement.html",
  "solutions/document-workflow.html",
  "solutions/operations.html",
  "solutions/ai-document-checks.html",
  "approach.html",
  "contact.html",
  "privacy.html",
  "personal-data-consent.html",
  "cookies.html",
];

const hiddenPages = [
  "cases.html",
  "health.html",
  "favicon-preview.html",
  "thank-you.html",
];

const faviconFiles = [
  "favicon.ico",
  "assets/brand/favicon.svg",
  "assets/brand/favicon-16x16.png",
  "assets/brand/favicon-32x32.png",
  "assets/brand/favicon-48x48.png",
  "assets/brand/apple-touch-icon.png",
];

const sitemap = fs.readFileSync(sitemapPath, "utf8");
const sitemapUrls = Array.from(
  sitemap.matchAll(/<loc>([^<]+)<\/loc>/g),
  (match) => match[1],
);
const robotsContent = fs.readFileSync(robotsPath, "utf8");
const siteConfigContent = fs.readFileSync(siteConfigPath, "utf8");
const cssContent = fs.readFileSync(cssPath, "utf8");

const isExternalUrl = (value) =>
  /^(?:[a-z]+:|\/\/|#)/i.test(value) ||
  value.startsWith("mailto:") ||
  value.startsWith("tel:");

const stripQuery = (value) => value.split("#")[0].split("?")[0];

const resolvePublicPath = (fromRel, rawHref) => {
  const cleaned = stripQuery(rawHref);
  if (!cleaned) return "";
  if (cleaned.startsWith("/")) {
    return cleaned.replace(/^\/+/, "");
  }
  return path.posix.normalize(
    path.posix.join(path.posix.dirname(fromRel), cleaned),
  );
};

const toCanonicalUrl = (relPath) =>
  relPath === "index.html"
    ? "https://arvectum.com/"
    : `https://arvectum.com/${relPath}`;

const readHtml = (relPath) =>
  fs.readFileSync(path.join(publicDir, relPath), "utf8");

const getJsonLd = (html, id) => {
  const match = html.match(
    new RegExp(
      `<script[^>]+id="${id}"[^>]*type="application/ld\\+json"[^>]*>([\\s\\S]*?)<\\/script>`,
      "i",
    ),
  );
  if (!match) return null;
  try {
    return JSON.parse(match[1].trim());
  } catch (_) {
    return "INVALID";
  }
};

for (const fileName of publicIndexablePages) {
  record(htmlSet.has(fileName), `missing expected page -> ${fileName}`);
}

for (const filePath of faviconFiles) {
  record(
    fs.existsSync(path.join(publicDir, filePath)),
    `Missing favicon asset -> ${filePath}`,
  );
}

for (const fileName of htmlFiles) {
  const html = readHtml(fileName);

  const hasTitle = /<title>\s*[^<][\s\S]*?<\/title>/i.test(html);
  const hasDescription =
    /<meta[^>]+name="description"[^>]+content="[^"]+"/i.test(html);
  const hasCanonical =
    /<link[^>]+rel="canonical"[^>]+href="https:\/\/arvectum\.com\/[^"]*"/i.test(
      html,
    );

  record(hasTitle, `${fileName}: missing or empty <title>`);
  record(hasDescription, `${fileName}: missing meta description`);
  record(hasCanonical, `${fileName}: missing canonical link`);

  record(
    /<link[^>]+rel="icon"[^>]+type="image\/svg\+xml"[^>]+href="\/assets\/brand\/favicon\.svg\?v=20260616-seo24"/i.test(
      html,
    ),
    `${fileName}: missing SVG favicon link`,
  );
  record(
    /<link[^>]+rel="icon"[^>]+sizes="32x32"[^>]+href="\/assets\/brand\/favicon-32x32\.png\?v=20260616-seo24"/i.test(
      html,
    ),
    `${fileName}: missing 32x32 favicon link`,
  );
  record(
    /<link[^>]+rel="icon"[^>]+sizes="16x16"[^>]+href="\/assets\/brand\/favicon-16x16\.png\?v=20260616-seo24"/i.test(
      html,
    ),
    `${fileName}: missing 16x16 favicon link`,
  );
  record(
    /<link[^>]+rel="apple-touch-icon"[^>]+href="\/assets\/brand\/apple-touch-icon\.png\?v=20260616-seo24"/i.test(
      html,
    ),
    `${fileName}: missing apple-touch-icon link`,
  );
  record(
    /<link[^>]+rel="shortcut icon"[^>]+href="\/favicon\.ico\?v=20260616-seo24"/i.test(
      html,
    ),
    `${fileName}: missing shortcut icon link`,
  );

  const hrefs = Array.from(
    html.matchAll(/\b(?:href|src)="([^"]+)"/g),
    (match) => match[1],
  );

  for (const href of hrefs) {
    if (isExternalUrl(href)) continue;
    const resolved = resolvePublicPath(fileName, href);
    if (!resolved) continue;
    const fullPath = path.join(publicDir, resolved);

    if (resolved.endsWith(".html")) {
      record(
        htmlSet.has(resolved),
        `${fileName}: broken local HTML link -> ${href}`,
      );
    }

    if (/\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|json)$/i.test(resolved)) {
      record(fs.existsSync(fullPath), `${fileName}: missing asset -> ${href}`);
    }
  }

  const placeholderPatterns = [
    /Будет добавлено/iu,
    /\bTODO\b/u,
    /placeholder/iu,
  ];
  for (const pattern of placeholderPatterns) {
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

  if (fileName === "favicon-preview.html") {
    record(
      /<meta[^>]+name="robots"[^>]+content="noindex,nofollow"/i.test(html),
      "favicon-preview.html: must use noindex,nofollow",
    );
  }

  if (publicIndexablePages.includes(fileName)) {
    const organizationLd = getJsonLd(html, "organizationLd");
    record(
      organizationLd && organizationLd !== "INVALID",
      `${fileName}: missing or invalid Organization JSON-LD`,
    );
  }

  if (fileName === "index.html") {
    const websiteLd = getJsonLd(html, "websiteLd");
    record(
      websiteLd && websiteLd !== "INVALID",
      "index.html: missing or invalid WebSite JSON-LD",
    );

    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, " ").trim() : "";
    record(h1.length > 0, "index.html: homepage H1 is missing");
    record(
      !/закупочн(ый|ого|ому|ом)? маршрут/iu.test(h1),
      "index.html: homepage H1 must not position procurement as the only focus",
    );

    for (const link of [
      "solutions/procurement.html",
      "solutions/document-workflow.html",
      "solutions/operations.html",
      "solutions/ai-document-checks.html",
    ]) {
      record(html.includes(link), `index.html: missing static link -> ${link}`);
    }
  }

  if (fileName === "solutions.html") {
    for (const link of [
      "solutions/procurement.html",
      "solutions/document-workflow.html",
      "solutions/operations.html",
      "solutions/ai-document-checks.html",
    ]) {
      record(
        html.includes(link),
        `solutions.html: missing static link -> ${link}`,
      );
    }
  }

  if (fileName === "approach.html") {
    for (const link of [
      "solutions/procurement.html",
      "solutions/document-workflow.html",
      "solutions/operations.html",
      "solutions/ai-document-checks.html",
    ]) {
      record(
        html.includes(link),
        `approach.html: missing internal direction link -> ${link}`,
      );
    }
  }

  if (fileName.startsWith("solutions/")) {
    record(
      /aria-label="Хлебные крошки"/i.test(html) && /solutions\.html/.test(html),
      `${fileName}: missing visible breadcrumbs`,
    );
    record(
      getJsonLd(html, "breadcrumbLd") &&
        getJsonLd(html, "breadcrumbLd") !== "INVALID",
      `${fileName}: missing or invalid BreadcrumbList JSON-LD`,
    );
    record(
      getJsonLd(html, "serviceLd") &&
        getJsonLd(html, "serviceLd") !== "INVALID",
      `${fileName}: missing or invalid Service JSON-LD`,
    );
    const faqLd = getJsonLd(html, "faqLd");
    record(
      faqLd && faqLd !== "INVALID",
      `${fileName}: missing or invalid FAQPage JSON-LD`,
    );
    record(
      (faqLd?.mainEntity || []).length >= 4,
      `${fileName}: FAQ JSON-LD must include at least 4 questions`,
    );
    record(
      (html.match(/<details class="faq-item">/g) || []).length >= 4,
      `${fileName}: visible FAQ must include at least 4 items`,
    );
    record(
      !/"aggregateRating"|"reviewRating"|"reviewCount"|"bestRating"|"worstRating"|"award"/u.test(
        html,
      ),
      `${fileName}: must not include fake review/rating/award markup`,
    );
  }
}

for (const match of cssContent.matchAll(/url\((['"]?)([^)'"]+)\1\)/g)) {
  const asset = match[2];
  if (isExternalUrl(asset) || asset.startsWith("data:")) continue;
  const resolved = resolvePublicPath("styles.css", asset);
  record(
    fs.existsSync(path.join(publicDir, resolved)),
    `styles.css: missing asset -> ${asset}`,
  );
}

for (const jsFile of ["app.js", "site-config.js"]) {
  const content = fs.readFileSync(path.join(publicDir, jsFile), "utf8");
  for (const pattern of [/Будет добавлено/iu, /\bTODO\b/u]) {
    record(
      !pattern.test(content),
      `${jsFile}: forbidden placeholder text matched ${pattern}`,
    );
  }
  for (const match of content.matchAll(
    /["'](\/?assets\/[^"']+\.(?:png|jpg|jpeg|webp|gif|svg|ico))["']/g,
  )) {
    const resolved = resolvePublicPath(jsFile, match[1]);
    record(
      fs.existsSync(path.join(publicDir, resolved)),
      `${jsFile}: missing asset -> ${match[1]}`,
    );
  }
}

for (const url of sitemapUrls) {
  record(
    url.startsWith("https://arvectum.com/"),
    `sitemap.xml: URL must use https://arvectum.com/ -> ${url}`,
  );
  record(
    !url.includes("https://www."),
    `sitemap.xml: must not use www -> ${url}`,
  );
  record(
    !url.startsWith("http://"),
    `sitemap.xml: must not use http -> ${url}`,
  );

  const relPath =
    url === "https://arvectum.com/"
      ? "index.html"
      : url.replace("https://arvectum.com/", "");
  record(
    htmlSet.has(relPath),
    `sitemap.xml: URL points to non-existing file -> ${url}`,
  );
}

for (const relPath of publicIndexablePages) {
  record(
    sitemapUrls.includes(toCanonicalUrl(relPath)),
    `sitemap.xml: missing URL -> ${toCanonicalUrl(relPath)}`,
  );
}

for (const relPath of hiddenPages) {
  record(
    !sitemapUrls.includes(toCanonicalUrl(relPath)),
    `sitemap.xml: must not include hidden page -> ${toCanonicalUrl(relPath)}`,
  );
}

for (const disallow of [
  "Disallow: /health.html",
  "Disallow: /favicon-preview.html",
  "Disallow: /thank-you.html",
  "Disallow: /api/",
]) {
  record(
    robotsContent.includes(disallow),
    `robots.txt: missing rule -> ${disallow}`,
  );
}
record(
  robotsContent.includes("Sitemap: https://arvectum.com/sitemap.xml"),
  "robots.txt: missing sitemap URL",
);

record(
  !/nav:\s*\[[\s\S]*?slug:\s*"cases"/u.test(siteConfigContent),
  "site-config.js: primary nav must not include cases",
);
record(
  !/footerNav:\s*\[[\s\S]*?slug:\s*"cases"/u.test(siteConfigContent),
  "site-config.js: footer nav must not include cases",
);
record(
  !/Посмотреть сценарии|View scenarios/u.test(siteConfigContent),
  "site-config.js: must not expose scenarios in public CTAs",
);

if (failures.length) {
  console.error("Static checks failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Static checks passed for ${htmlFiles.length} HTML files.`);
