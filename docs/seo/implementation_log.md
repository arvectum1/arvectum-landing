# Implementation Log — Arvectum Landing SEO & Positioning

## Sprint 00 — Repository Discovery & Guardrails

### Repository identity
- Remote: `https://github.com/arutyunoveth/arvectum-landing.git`
- Branch: `main` → switched to `feature/procurement-ai-seo`
- Latest commit: `241c0dc Refine enterprise positioning and update SEO fallbacks`

### Tech stack
- **Type:** Static HTML site (no framework, no build step)
- **Hosting:** Cloudflare Pages (wrangler.toml present)
- **Languages:** Russian (primary), English (JS-based switch)
- **CSS:** `public/styles.css` — single stylesheet
- **JS:** `public/app.js`, `public/site-config.js`
- **Backend:** PHP API in `public/api/` (submit.php, cookie-consent.php, health.php)
- **SEO:** sitemap.xml, robots.txt, canonical links, hreflang, OG tags, Schema.org JSON-LD

### Current page structure
| Route | Status | Notes |
|---|---|---|
| `/index.html` | Homepage | Broad "AI-автоматизация бизнес-процессов" |
| `/solutions.html` | Solutions hub | Links to 4 solution pages |
| `/solutions/procurement.html` | Procurement solution | Existing, good foundation |
| `/solutions/document-workflow.html` | Document workflow | Existing |
| `/solutions/operations.html` | Operations | Existing |
| `/solutions/ai-document-checks.html` | AI document checks | Existing |
| `/approach.html` | How we launch | Existing |
| `/cases.html` | Demo scenarios | Existing |
| `/contact.html` | Contact form | Working PHP form |
| `/materials.html` | Materials hub | 4 articles |
| `/materials/*.html` | 4 articles | Existing |
| `/privacy.html` | Privacy policy | Existing |
| `/personal-data-consent.html` | Consent | Existing |
| `/cookies.html` | Cookie policy | Existing |

### Navigation
- Desktop nav: Главная, Решения, Как запускаем
- Mobile: same + Telegram link
- CTA: «Связаться с нами»

### Available checks (package.json scripts)
- `npm run lint` — runs format, JS syntax, PHP lint
- `npm run lint:format` — prettier (not installed locally)
- `npm run lint:js` — JS syntax check
- `npm run lint:php` — PHP lint
- `npm run check:static` — static checks
- `npm run check:assets` — asset checks
- `npm run check:production` — production checks
- `npm run dev` — wrangler pages dev

**Note:** Prettier dependency not resolvable locally. Other checks may fail without full npm install. Content work is unaffected.

### Baseline check results (Sprint 00)
- `npm run lint:js` — syntax OK
- `npm run lint:php` — requires PHP CLI
- Prettier — not available (dependency issue)
- No build step required (static HTML)

### Guardrails created
- `docs/seo/procurement_ai_positioning_guardrails.md`

---

## Sprint 01 — Homepage Repositioning

### Changes to `public/index.html`
- Updated `<title>` to "ИИ-агенты для закупок и тендеров — Arvectum"
- Updated meta description and OG tags with procurement focus
- Replaced hero: new H1 "ИИ-агенты для закупок и тендеров", procurement CTAs
- Replaced "Сценарии использования" with "Что автоматизируем в закупках и тендерах"
- Added "Контролируемый маршрут" section with 5-step process flow
- Added "Чем Arvectum отличается" differentiation block
- Added "Как выглядит MVP" section
- Updated schema.org Service type
- Updated CTA band

### Changes to `public/styles.css`
- Added `.step-grid--five` grid class
- Added responsive rules for `.step-grid--five` at tablet and mobile breakpoints

### Verification
- Homepage clearly presents procurement AI agents as main category
- Hero, CTAs, process route and human-control statement are implemented
- No forbidden claims present
- Existing legal/contact blocks preserved
- "Возможности платформы", "Стыковка с ИТ-контуром", "Надёжность и законность" sections preserved
