# Performance Notes

## Current asset strategy

- The public build stays fully static: HTML, CSS, JS, SVG, small favicon PNGs and a local `favicon.ico`.
- Brand assets in `public/assets/brand/` are limited to files that are actually referenced by the deployed pages.
- Hidden utility pages such as `health.html` and `favicon-preview.html` remain outside the sitemap and do not carry extra third-party dependencies.

## Fonts strategy

- Public pages use system font stacks from `public/styles.css`.
- External Google Fonts links were removed to reduce render-blocking requests and avoid dependency on third-party font CDNs.
- Monospace UI fragments use a local system mono stack with `JetBrains Mono` only as an optional fallback if the user already has it installed.

## Image strategy

- Header and navigation branding uses SVG assets where possible.
- Favicon and touch icons stay local and small enough for ordinary shared-hosting delivery.
- Oversized unused PNG exports are removed from `public/assets/brand/` so they do not bloat the deploy archive.

## JS strategy

- Client logic stays in `public/app.js` and content/config stays in `public/site-config.js`.
- No third-party analytics or external UI libraries are added in this sprint.
- Static HTML remains readable without JavaScript for core navigation and SEO fallback.

## Quality guardrails

- `npm run check:static` validates sitemap, metadata, structured data, canonical URLs and internal links.
- `npm run check:assets` validates key asset size thresholds, missing `alt` attributes and accidental reintroduction of external font CDN links.
- `prefers-reduced-motion` support remains enabled in `public/styles.css`.

## What to avoid in future sprints

- Do not add large raster logo exports to `public/` unless they are actually used.
- Do not restore external font loaders without a strong UX reason.
- Do not add third-party scripts for sliders, animations, counters or decorative widgets.
- Do not add long autoplay media to the first screen.
- Do not treat hidden utility pages as public SEO pages.

## Manual checks before deploy

1. Run `npm run lint`.
2. Run `npm run check`.
3. Open the homepage, one solution page and one material page at `360px`, `768px` and desktop width.
4. Confirm breadcrumbs wrap without horizontal scrolling.
5. Confirm buttons and footer links remain tappable on mobile.
6. Confirm `/favicon.ico` and `/assets/brand/apple-touch-icon.png` load after deploy.
