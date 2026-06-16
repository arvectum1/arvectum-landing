# SEO Monitoring Plan

## Immediately after deploy

Check:

- `https://arvectum.com/`
- `https://arvectum.com/sitemap.xml`
- `https://arvectum.com/robots.txt`
- `https://arvectum.com/favicon.ico`
- `https://arvectum.com/materials.html`
- all public `/solutions/...` pages
- all public `/materials/...` pages

Run:

- `npm run check:production`

Submit:

- `https://arvectum.com/sitemap.xml` to Google Search Console
- `https://arvectum.com/sitemap.xml` to Yandex Webmaster

## After 1–3 days

Check:

- sitemap processing status
- homepage indexing status
- solution pages indexing status
- robots/canonical warnings
- HTTPS or crawl errors

## After 7–14 days

Check:

- which pages are indexed
- first impressions in Google Search Console and Yandex Webmaster
- pages excluded from index
- whether search engines chose the expected canonical URLs

## After 30 days

Review:

- queries with impressions
- pages with impressions but weak CTR
- pages with no impressions
- title/description candidates for improvement
- next 4 useful material topics

## Ongoing rules

- Re-submit the sitemap only after meaningful sitemap changes.
- Do not re-submit the sitemap repeatedly within the same day without new changes.
- Keep hidden pages such as `cases.html`, `health.html`, `favicon-preview.html` and `thank-you.html` outside the public SEO flow.
