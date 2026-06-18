# SEO Master Plan

## Product Positioning

- Arvectum automates operational workflows and corporate regulations with AI modules, roles, statuses, documents, logs, and controlled digital routes.
- Supply and procurement are a flagship scenario, but not the only company direction.
- Public positioning should also cover document workflow, task control, IT-contour alignment, deployment, and careful data-security wording.
- The homepage should stay a compact company overview, not a long procurement-only SEO landing page.

## Public SEO Structure

- Homepage: `https://arvectum.com/`
- About: `https://arvectum.com/about.html`
- Solutions: `https://arvectum.com/solutions.html`
- Direction pages:
  - `https://arvectum.com/solutions/procurement.html`
  - `https://arvectum.com/solutions/document-workflow.html`
  - `https://arvectum.com/solutions/operations.html`
  - `https://arvectum.com/solutions/ai-document-checks.html`
- Approach: `https://arvectum.com/approach.html`
- Contacts: `https://arvectum.com/contact.html`
- Materials:
  - `https://arvectum.com/materials.html`
  - `https://arvectum.com/materials/how-to-choose-first-process.html`
  - `https://arvectum.com/materials/ai-automation-simple.html`
  - `https://arvectum.com/materials/chatbot-vs-process-automation.html`
  - `https://arvectum.com/materials/mvp-automation-2-4-weeks.html`
- Legal pages, while they remain public:
  - `https://arvectum.com/privacy.html`
  - `https://arvectum.com/personal-data-consent.html`
  - `https://arvectum.com/cookies.html`
- Future blog content can be added in later sprints.

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
