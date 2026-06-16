# SEO Master Plan

## Product Positioning

- Arvectum automates business processes with AI modules, roles, statuses, documents, logs, and controlled workflows.
- Procurement and tenders are a flagship scenario, but not the only company direction.
- The homepage should stay a compact company overview, not a long procurement-only SEO landing page.

## Public SEO Structure

- Homepage: `https://arvectum.com/`
- Solutions: `https://arvectum.com/solutions.html`
- Approach: `https://arvectum.com/approach.html`
- Contacts: `https://arvectum.com/contact.html`
- Legal pages, while they remain public:
  - `https://arvectum.com/privacy.html`
  - `https://arvectum.com/personal-data-consent.html`
  - `https://arvectum.com/cookies.html`
- Future direction pages, materials, and blog content can be added in later sprints.

## Hidden / Non-Promoted Structure

- `cases.html` may remain in the repository as a hidden supporting page.
- `cases.html` must not be treated as a public SEO page.
- If `cases.html` remains in the project, it must be `noindex,nofollow` and excluded from sitemap.

## Core SEO Rules

- Public pages must have `title`, meta description, canonical, and `hreflang` where applicable.
- Public pages must be reachable by internal links.
- Public pages must be included in `sitemap.xml`.
- Hidden pages must not be included in `sitemap.xml`.
- No fake case studies, fake metrics, fake clients, fake ratings, fake reviews, or fake awards.

## Post-Sprint Checks

- `npm run lint`
- `npm run check`
- `npm run check:production` if production is reachable from the current environment
