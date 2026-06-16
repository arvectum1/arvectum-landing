# SEO Audit Baseline

Snapshot date: 2026-06-16

This file records the repository state before Sprint 1 SEO cleanup.

## 1. HTML files currently present in `public/`

- `approach.html`
- `cases.html`
- `contact.html`
- `cookies.html`
- `health.html`
- `index.html`
- `personal-data-consent.html`
- `privacy.html`
- `solutions.html`
- `thank-you.html`

## 2. URLs currently present in `public/sitemap.xml`

- `https://arvectum.com/`
- `https://arvectum.com/solutions.html`
- `https://arvectum.com/cases.html`
- `https://arvectum.com/approach.html`
- `https://arvectum.com/contact.html`
- `https://arvectum.com/privacy.html`
- `https://arvectum.com/personal-data-consent.html`
- `https://arvectum.com/cookies.html`

## 3. Routes currently present in `public/site-config.js`

- `home` → `index.html`
- `solutions` → `solutions.html`
- `cases` → `cases.html`
- `approach` → `approach.html`
- `contact` → `contact.html`
- `privacy` → `privacy.html`
- `personalDataConsent` → `personal-data-consent.html`
- `cookiesPolicy` → `cookies.html`

## 4. Primary navigation items

RU:
- `Главная`
- `Решения`
- `Как запускаем`

EN:
- `Home`
- `Solutions`
- `How We Launch`

## 5. Footer navigation items

`footerNav` in `site-config.js`:

RU:
- `Главная`
- `Решения`
- `Как запускаем`
- `Контакты`

EN:
- `Home`
- `Solutions`
- `How We Launch`
- `Contact`

Important: current runtime footer rendering is driven mainly by contacts + legal links, not by `footerNav`.

## 6. Whether `cases.html` exists

- Yes, `public/cases.html` exists.

## 7. Whether `cases.html` is linked from public UI surfaces

Primary nav:
- No.

Mobile nav:
- No.

Footer nav:
- No.

CTA buttons:
- No direct CTA to `cases.html` found in public pages or public config CTA copy.

Sitemap:
- Yes. `cases.html` is currently present in `public/sitemap.xml`.

Other current references:
- Route exists in `site-config.js`.
- `app.js` contains breadcrumb label mapping for `cases`.
- `cases.html` contains self-references through canonical / hreflang / og URL.
- `cases.html` breadcrumb text currently shows `Сценарии`.

## 8. Per-page SEO marker snapshot

| Page | Title | Meta description | Canonical | Hreflang | Robots noindex | Structured data |
|---|---|---:|---:|---:|---:|---|
| `index.html` | Yes | Yes | Yes | Yes | No | Organization + Service |
| `solutions.html` | Yes | Yes | Yes | Yes | No | Organization |
| `approach.html` | Yes | Yes | Yes | Yes | No | Organization + FAQPage |
| `contact.html` | Yes | Yes | Yes | Yes | No | Organization |
| `cases.html` | Yes | Yes | Yes | Yes | No (`index,follow`) | Organization |
| `privacy.html` | Yes | Yes | Yes | No | No | None |
| `personal-data-consent.html` | Yes | Yes | Yes | No | No | None |
| `cookies.html` | Yes | Yes | Yes | No | No | None |
| `health.html` | Yes | Yes | Yes | No | Yes (`noindex,nofollow`) | None |
| `thank-you.html` | Yes | Yes | Yes | No | Yes (`noindex,follow`) | None |

## 9. Current favicon / icon setup

Current favicon references in public HTML:
- `assets/brand/app-icon.png`

Current brand/icon files present in `public/assets/brand/`:
- `app-icon.png`
- `app-icon.svg`
- `arvectum-logo-header-light.png`
- `arvectum-logo-header-light.svg`
- `arvectum-logo-primary.png`
- `avatar-circle.png`
- `avatar-circle.svg`
- `logo-horizontal.png`
- `logo-horizontal.svg`
- `menu-logo.svg`
- `monogram.png`
- `monogram.svg`

Current gaps before Sprint 1:
- no root `public/favicon.ico`
- no dedicated `favicon-32x32.png`
- no dedicated `favicon-16x16.png`
- no dedicated `apple-touch-icon.png`
- HTML pages use the older `app-icon.png` reference

## 10. Command results before Sprint 1 changes

### `npm run lint`

Result: PASS

Observed output:

```text
> arvectum-landing@1.0.0 lint
> npm run lint:format && npm run lint:js && npm run lint:php

Checking formatting...
All matched files use Prettier code style!
JS syntax OK
No syntax errors detected in public/api/submit.php
No syntax errors detected in public/api/cookie-consent.php
No syntax errors detected in public/api/health.php
```

### `npm run check`

Result: FAIL

Observed output:

```text
Static checks failed:
- cases.html: must use noindex,nofollow
- sitemap.xml: missing URL -> https://arvectum.com/thank-you.html
```

Interpretation:
- Static checks already expected hidden `cases.html`, but the page was still indexable at this snapshot.
- Static checks still expected `thank-you.html` in sitemap, which conflicts with the current desired SEO model.

### `npm run check:production`

Result: PARTIAL FAIL

Observed output summary:

```text
PASS https://arvectum.com/
FAIL https://www.arvectum.com/ (curl timeout)
PASS https://arvectum.com/health.html
PASS https://arvectum.com/api/health.php
PASS https://arvectum.com/robots.txt
FAIL https://arvectum.com/sitemap.xml (curl timeout)
```

Interpretation:
- Main production homepage was reachable from the current environment.
- `www.arvectum.com` timed out at the time of the check.
- `sitemap.xml` timed out from production at the time of the check.
- This may be caused by external hosting / network / CDN state rather than repository code alone.
