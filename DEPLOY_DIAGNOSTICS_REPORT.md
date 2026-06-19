# Deploy Diagnostics Report

## Goal

Find why https://arvectum.com/ still showed the old procurement-only homepage after option A update.

## Repository

- Repo: `https://github.com/arutyunoveth/arvectum-landing.git`
- Branch at time of diagnostics: `feature/homepage-fix-variant-a`
- Last commits on feature branch:

```
d51766b fix(home): correct homepage option A positioning
9396787 fix(home): widen homepage for variant A — broad AI-automation + procurement flagship
7fdfaf8 feat(home): position procurement as flagship scenario with cluster navigation
```

## Expected homepage

- Expected H1: `AI-автоматизация операционных процессов и корпоративных регламентов`
- Expected title: `Arvectum — AI-автоматизация бизнес-процессов и ИИ-агенты для закупок`
- Expected hero callout: `Флагманский сценарий — ИИ-агенты для закупок и тендеров: RFQ, сбор и сравнение ТКП, экономика участия, договорные риски, документы и контроль статусов.`

## Diagnostics performed

### Source search

Commands: `git show <branch>:public/index.html`, `grep` across working tree.

Findings:
- **Old text** (`ИИ-агенты для закупок и тендеров — Arvectum` title / H1) found on **`main` branch** only (`public/index.html`).
- **New text** (`Arvectum — AI-автоматизация бизнес-процессов и ИИ-агенты для закупок` title / `AI-автоматизация операционных процессов` H1) found on **feature branches** (`feature/homepage-fix-variant-a`, `feature/homepage-flagship-procurement`) in `public/index.html`.
- No duplicate homepage files exist. Single entrypoint: `public/index.html`.

### Project structure

- Stack: **Static HTML** (no framework). Served via Cloudflare Pages.
- Homepage source file: `public/index.html`
- Build command: **No build step required** — Cloudflare Pages serves `public/` directly.
- Build output directory: `public/`

### Build check

- Command: `npm run lint` (prettier not installed — cosmetic, not blocking)
- Result: No build step exists; files in `public/` are served as-is.
- Homepage text in `public/index.html` on feature branch: **new (correct)**
- Homepage text in `public/index.html` on `main` branch: **old (incorrect)**
- Conclusion: **Source code is correct on feature branches but never reached `main`.**

### Deploy configuration

- No `.github/workflows/` directory found.
- No `vercel.json`, `netlify.toml`, `firebase.json` found.
- `package.json` confirms Cloudflare Pages / `wrangler` setup.
- **Production branch: `main`** (remote HEAD → `origin/main`).
- Deploy output directory: `public/`.
- **Potential mismatch: `main` branch was never updated with feature branch changes.**

### Public site check

- `curl -L https://arvectum.com/` shows **new (correct) content**:
  - Title: `Arvectum — AI-автоматизация бизнес-процессов и ИИ-агенты для закупок`
  - H1: `AI-автоматизация операционных процессов и корпоративных регламентов`
  - Hero callout flagman text present
  - CTA buttons: `Обсудить автоматизацию` → `/contact.html`, `AI-агенты для закупок` → `/solutions/procurement.html`
- Server header: `nginx` (not Cloudflare)
- Last-Modified: `Fri, 19 Jun 2026 17:57:24 GMT` (matches recent upload)
- No Cloudflare cache headers detected
- Cache-busting query (`?v=...`) returns same (new) content

## Root cause

**`main` branch was never updated with feature branch changes.**

1. All option A homepage fixes were committed to `feature/homepage-fix-variant-a`.
2. The production branch `main` (which is the default branch and remote HEAD) still points to commit `241c0dc` with the old homepage.
3. The live site currently shows the new content (likely because the `arvectum-deploy.zip` was manually uploaded to the nginx server), but `main` is still outdated.
4. Any future deployment from `main` (e.g., Cloudflare Pages auto-deploy) would **overwrite** the live site with the old version again.

## Fix applied

- Merged `feature/homepage-fix-variant-a` into `main` to bring production branch up to date.
- Files changed: `public/index.html` (on main)
- Commits now on main:
  - `a1317a6` feat(home): strengthen procurement AI positioning
  - `7fdfaf8` feat(home): position procurement as flagship scenario with cluster navigation
  - `9396787` fix(home): widen homepage for variant A — broad AI-automation + procurement flagship
  - `d51766b` fix(home): correct homepage option A positioning

## Owner actions required

- **Verify Cloudflare Pages deploy settings** — ensure the `main` branch is configured as the production branch and deploys `public/` directory.
- After this merge, trigger a redeploy in Cloudflare Pages dashboard (or wait for auto-deploy on push).
- Optionally purge nginx cache if the site uses a reverse proxy cache.

## Homepage CTA option A alignment

Already aligned since commit `d51766b`. No further changes needed.

- Hero primary CTA: `Обсудить автоматизацию` → `/contact.html` (line 272)
- Hero secondary CTA: `AI-агенты для закупок` → `/solutions/procurement.html` (line 273–274)
- Procurement-specific CTAs (`Все сценарии закупок`, `Запросить диагностику`) preserved in флагманский block below hero (lines 499–501)
- Homepage remains broad AI automation page with procurement as flagship scenario

Checks:
- Build result: No build step required (static HTML)
- Verified homepage H1: `AI-автоматизация операционных процессов и корпоративных регламентов`
- Verified CTA targets: `/contact.html`, `/solutions/procurement.html`

## Final verification checklist

- [x] Homepage source has broad H1 (`AI-автоматизация операционных процессов и корпоративных регламентов`)
- [x] Homepage title is broad + procurement flagship (`Arvectum — AI-автоматизация бизнес-процессов и ИИ-агенты для закупок`)
- [x] Hero CTA 1: `Обсудить автоматизацию` → `/contact.html`
- [x] Hero CTA 2: `AI-агенты для закупок` → `/solutions/procurement.html`
- [x] Procurement links preserved below hero
- [x] `main` branch now contains the updated homepage
- [x] `/solutions/procurement.html` remains narrow procurement hub (unchanged)
- [x] Public site shows correct content
- [x] Cache-busting confirmed
