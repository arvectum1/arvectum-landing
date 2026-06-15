(function () {
  const config = window.SITE_CONFIG || {};
  const routes = config.routes || {};
  const defaultLanguage = config.defaultLanguage || "ru";
  const currentPage = document.body.dataset.page || "home";
  const COOKIE_PREFIX = "arvectum_";
  const CONSENT_COOKIE_NAME = `${COOKIE_PREFIX}cookie_consent`;
  const CONSENT_VERSION = "v1";

  let currentLanguage = defaultLanguage;
  let currentContent = null;
  let currentCommon = null;
  let revealObserver = null;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  };

  const setHtml = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  const escapeHtml = (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  const getLanguage = () => {
    const lang = new URLSearchParams(window.location.search).get("lang");
    return config.languages?.[lang] ? lang : defaultLanguage;
  };

  const buildUrl = (slug, hash = "") => {
    const file = routes[slug] || routes.home || "index.html";
    const query =
      currentLanguage === defaultLanguage ? "" : `?lang=${currentLanguage}`;
    return `${file}${query}${hash}`;
  };

  const renderMeta = (meta) => {
    document.documentElement.lang = currentLanguage;
    document.title = meta?.title || "Arvectum";

    const description = document.getElementById("metaDescription");
    const ogTitle = document.getElementById("metaOgTitle");
    const ogDescription = document.getElementById("metaOgDescription");
    const ogLocale = document.getElementById("metaOgLocale");

    if (description) {
      description.setAttribute("content", meta?.description || "");
    }
    if (ogTitle) {
      ogTitle.setAttribute("content", meta?.ogTitle || "");
    }
    if (ogDescription) {
      ogDescription.setAttribute("content", meta?.ogDescription || "");
    }
    if (ogLocale) {
      ogLocale.setAttribute("content", currentCommon?.locale || "ru_RU");
    }
  };

  const renderHeader = () => {
    setText("skipLink", currentCommon.skipLink);
    setText("brandMeta", currentCommon.brandMeta);
    setText("topbarTelegram", currentCommon.telegramLabel);
    setText("topbarCta", currentCommon.headerCta);
    setText("mobileTelegram", currentCommon.telegramLabel);
    setText("mobileCta", currentCommon.headerCta);
    setText("menuButtonText", currentCommon.menuLabel);
    setText("menuTitle", currentCommon.menuTitle);
    setText("menuCloseText", currentCommon.menuClose);
    setText("menuSectionTitle", currentCommon.pagesLabel);
    setText("menuPrimaryCta", currentCommon.headerCta);

    const navMarkup = (currentCommon.nav || [])
      .map((item) => {
        const isActive = item.slug === currentPage ? " is-active" : "";
        return `<a class="nav-link${isActive}" href="${buildUrl(item.slug)}">${escapeHtml(item.label)}</a>`;
      })
      .join("");

    setHtml("desktopNav", navMarkup);
    setHtml("menuNav", navMarkup);

    const contactUrl = buildUrl("contact");
    const telegramUrl = "https://t.me/arvectum";

    ["topbarCta", "mobileCta", "menuPrimaryCta"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute("href", contactUrl);
    });

    ["topbarTelegram", "mobileTelegram"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute("href", telegramUrl);
    });

    document.querySelectorAll(".lang-switch__button").forEach((button) => {
      const isActive = button.dataset.lang === currentLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const brandImage = document.getElementById("brandLogo");
    if (brandImage) {
      brandImage.setAttribute(
        "alt",
        currentLanguage === "ru" ? "Логотип Arvectum" : "Arvectum logo",
      );
    }
  };

  const renderFooter = () => {
    const footer = currentCommon.footer;
    const contactLabel =
      (currentCommon.nav || []).find((item) => item.slug === "contact")
        ?.label || currentCommon.headerCta;
    const footerGrid = document.querySelector(".footer-grid");
    if (!footerGrid) return;

    footerGrid.innerHTML = `
      <div class="footer-bar">
        <div class="footer-bar__lead">
          <h2>Arvectum</h2>
          <p>${escapeHtml(footer.shortText)}</p>
        </div>
        <div class="footer-bar__links">
          ${(currentCommon.nav || [])
            .map(
              (item) =>
                `<a href="${buildUrl(item.slug)}">${escapeHtml(item.label)}</a>`,
            )
            .join("")}
        </div>
        <div class="footer-bar__contact">
          <a href="mailto:info@arvectum.com">info@arvectum.com</a>
          <a href="https://t.me/arvectum" target="_blank" rel="noreferrer">t.me/arvectum</a>
          <a href="${buildUrl("contact")}">${escapeHtml(contactLabel)}</a>
        </div>
      </div>
    `;
  };

  const renderHeroBullets = (items) =>
    (items || [])
      .map(
        (item) => `
          <li class="hero-bullet">
            <span></span>
            <p>${escapeHtml(item)}</p>
          </li>
        `,
      )
      .join("");

  const renderHome = (page) => `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow">${escapeHtml(page.hero.eyebrow)}</p>
          <h1>${escapeHtml(page.hero.title)}</h1>
          <p class="hero-text">${escapeHtml(page.hero.text)}</p>
          <ul class="hero-bullets">
            ${renderHeroBullets(page.hero.bullets)}
          </ul>
          <div class="hero-actions">
            <a class="button" href="${buildUrl("contact")}">${escapeHtml(page.hero.primaryCta)}</a>
            <a class="button button-ghost" href="${buildUrl("solutions")}">${escapeHtml(page.hero.secondaryCta)}</a>
          </div>
        </div>
        <aside class="hero-panel glass reveal">
          <img
            class="hero-panel__logo"
            src="assets/brand/arvectum-logo-primary.png"
            alt="${currentLanguage === "ru" ? "Логотип Arvectum" : "Arvectum logo"}"
          />
          <span class="hero-panel__label">${escapeHtml(page.hero.sideLabel)}</span>
          <div class="hero-panel__stack">
            ${(page.hero.sideItems || [])
              .map(
                (item) => `
                  <article class="stack-card">
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.text)}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container reveal">
        <div class="section-head">
          <h2>${escapeHtml(page.sectors.title)}</h2>
          <p>${escapeHtml(page.sectors.text)}</p>
        </div>
        <div class="grid grid-3 overview-grid">
          ${(page.sectors.cards || [])
            .map(
              (card) => `
                <article class="info-card">
                  <span class="card-label">${escapeHtml(card.label)}</span>
                  <h3>${escapeHtml(card.title)}</h3>
                  <p>${escapeHtml(card.text)}</p>
                  <a class="text-link" href="${buildUrl(card.route, card.hash || "")}">${escapeHtml(card.cta)}</a>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="home-summary">
          <div class="chip-grid">
            ${(page.focus.items || [])
              .map((item) => `<span class="chip">${escapeHtml(item)}</span>`)
              .join("")}
          </div>
          <a class="text-link" href="${buildUrl(page.compactCase.route, page.compactCase.hash || "")}">${escapeHtml(page.compactCase.cta)}</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container reveal">
        <article class="cta-band">
          <div>
            <h2>${escapeHtml(page.cta.title)}</h2>
            <p>${escapeHtml(page.cta.text)}</p>
          </div>
          <div class="cta-band__actions">
            <a class="button" href="${buildUrl("contact")}">${escapeHtml(page.cta.primary)}</a>
            <a class="button button-ghost" href="${buildUrl("approach")}">${escapeHtml(page.cta.secondary)}</a>
          </div>
        </article>
      </div>
    </section>
  `;

  const renderSolutions = (page) => `
    <section class="page-hero">
      <div class="container reveal">
        <p class="eyebrow">${escapeHtml(page.hero.eyebrow)}</p>
        <h1>${escapeHtml(page.hero.title)}</h1>
        <p class="page-hero__text">${escapeHtml(page.hero.text)}</p>
        <div class="page-pills">
          ${(page.quickLinks || [])
            .map(
              (link) =>
                `<a class="page-pill" href="#${escapeHtml(link.id)}">${escapeHtml(link.label)}</a>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container reveal">
        <div class="grid grid-2">
          ${(page.cards || [])
            .map(
              (card) => `
                <article class="solution-card" id="${escapeHtml(card.id)}">
                  <span class="card-label">${escapeHtml(card.label)}</span>
                  <h2>${escapeHtml(card.title)}</h2>
                  <p class="solution-card__audience">${escapeHtml(card.audience)}</p>
                  <div class="solution-meta">
                    <div>
                      <span>${currentLanguage === "ru" ? "Где болит" : "Pain point"}</span>
                      <p>${escapeHtml(card.pain)}</p>
                    </div>
                    <div>
                      <span>${currentLanguage === "ru" ? "Как это делаем" : "How we build it"}</span>
                      <ul class="compact-list">
                        ${(card.steps || [])
                          .map((step) => `<li>${escapeHtml(step)}</li>`)
                          .join("")}
                      </ul>
                    </div>
                    <div>
                      <span>${currentLanguage === "ru" ? "Срок первого этапа" : "First-stage timing"}</span>
                      <p>${escapeHtml(card.timing)}</p>
                    </div>
                    <div>
                      <span>${currentLanguage === "ru" ? "Что получает команда" : "What the team gets"}</span>
                      <p>${escapeHtml(card.result)}</p>
                    </div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container reveal">
        <article class="cta-band">
          <div>
            <h2>${escapeHtml(page.cta.title)}</h2>
            <p>${escapeHtml(page.cta.text)}</p>
          </div>
          <div class="cta-band__actions">
            <a class="button" href="${buildUrl("contact")}">${escapeHtml(page.cta.primary)}</a>
            <a class="button button-ghost" href="${buildUrl("cases")}">${escapeHtml(page.cta.secondary)}</a>
          </div>
        </article>
      </div>
    </section>
  `;

  const renderCases = (page) => `
    <section class="page-hero">
      <div class="container reveal">
        <p class="eyebrow">${escapeHtml(page.hero.eyebrow)}</p>
        <h1>${escapeHtml(page.hero.title)}</h1>
        <p class="page-hero__text">${escapeHtml(page.hero.text)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container reveal">
        <div class="case-list">
          ${(page.cases || [])
            .map(
              (item) => `
                <article class="case-card" id="${escapeHtml(item.id)}">
                  <span class="case-card__label">${escapeHtml(item.label)}</span>
                  <h2>${escapeHtml(item.title)}</h2>
                  <div class="case-flow">
                    <div>
                      <span>${currentLanguage === "ru" ? "Бизнес-вызов" : "Challenge"}</span>
                      <p>${escapeHtml(item.challenge)}</p>
                    </div>
                    <div>
                      <span>${currentLanguage === "ru" ? "Что построили" : "Solution"}</span>
                      <p>${escapeHtml(item.solution)}</p>
                    </div>
                    <div>
                      <span>${currentLanguage === "ru" ? "Что получил клиент" : "Result"}</span>
                      <p>${escapeHtml(item.result)}</p>
                    </div>
                  </div>
                  <ul class="compact-list compact-list--light">
                    ${(item.outcomes || [])
                      .map((outcome) => `<li>${escapeHtml(outcome)}</li>`)
                      .join("")}
                  </ul>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container reveal">
        <article class="cta-band">
          <div>
            <h2>${escapeHtml(page.cta.title)}</h2>
            <p>${escapeHtml(page.cta.text)}</p>
          </div>
          <div class="cta-band__actions">
            <a class="button" href="${buildUrl("contact")}">${escapeHtml(page.cta.primary)}</a>
            <a class="button button-ghost" href="${buildUrl("solutions")}">${escapeHtml(page.cta.secondary)}</a>
          </div>
        </article>
      </div>
    </section>
  `;

  const renderApproach = (page) => `
    <section class="page-hero">
      <div class="container reveal">
        <p class="eyebrow">${escapeHtml(page.hero.eyebrow)}</p>
        <h1>${escapeHtml(page.hero.title)}</h1>
        <p class="page-hero__text">${escapeHtml(page.hero.text)}</p>
        <div class="page-pills">
          ${(page.quickLinks || [])
            .map(
              (link) =>
                `<a class="page-pill" href="#${escapeHtml(link.id)}">${escapeHtml(link.label)}</a>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="signals">
      <div class="container reveal">
        <div class="section-head">
          <h2>${escapeHtml(page.signals.title)}</h2>
          <p>${escapeHtml(page.signals.text)}</p>
        </div>
        <div class="grid grid-4">
          ${(page.signals.items || [])
            .map(
              (item) => `
                <article class="info-card metric-card">
                  <strong>${escapeHtml(item.value)}</strong>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section-soft" id="deliverables">
      <div class="container reveal">
        <div class="section-head">
          <h2>${escapeHtml(page.deliverables.title)}</h2>
          <p>${escapeHtml(page.deliverables.text)}</p>
        </div>
        <div class="grid grid-4">
          ${(page.deliverables.items || [])
            .map(
              (item) => `
                <article class="info-card info-card--dark">
                  <span class="card-label">${escapeHtml(item.label)}</span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="timeline">
      <div class="container reveal">
        <div class="section-head">
          <h2>${escapeHtml(page.timeline.title)}</h2>
          <p>${escapeHtml(page.timeline.text)}</p>
        </div>
        <div class="step-grid">
          ${(page.timeline.items || [])
            .map(
              (item, index) => `
                <article class="step-card">
                  <strong>${String(index + 1).padStart(2, "0")}</strong>
                  <p>${escapeHtml(item)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section-soft" id="trust">
      <div class="container reveal">
        <div class="section-head">
          <h2>${escapeHtml(page.trust.title)}</h2>
          <p>${escapeHtml(page.trust.text)}</p>
        </div>
        <div class="grid grid-3">
          ${(page.trust.items || [])
            .map(
              (item) => `
                <article class="info-card">
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container reveal">
        <div class="section-head">
          <h2>${escapeHtml(page.stack.title)}</h2>
          <p>${escapeHtml(page.stack.text)}</p>
        </div>
        <div class="chip-grid">
          ${(page.stack.items || [])
            .map((item) => `<span class="chip">${escapeHtml(item)}</span>`)
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="container reveal">
        <div class="section-head">
          <h2>${escapeHtml(page.faq.title)}</h2>
        </div>
        <div class="faq-list">
          ${(page.faq.items || [])
            .map(
              (item) => `
                <details class="faq-item">
                  <summary>${escapeHtml(item.question)}</summary>
                  <p>${escapeHtml(item.answer)}</p>
                </details>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container reveal">
        <article class="cta-band">
          <div>
            <h2>${escapeHtml(page.cta.title)}</h2>
            <p>${escapeHtml(page.cta.text)}</p>
          </div>
          <div class="cta-band__actions">
            <a class="button" href="${buildUrl("contact")}">${escapeHtml(page.cta.primary)}</a>
            <a class="button button-ghost" href="${buildUrl("home")}">${escapeHtml(page.cta.secondary)}</a>
          </div>
        </article>
      </div>
    </section>
  `;

  const renderForm = () => {
    const form = currentCommon.form;
    const methodOptions = [
      `<option value="">${escapeHtml(form.contactMethodPlaceholder)}</option>`,
      ...(form.contactMethodOptions || []).map(
        (option) =>
          `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`,
      ),
    ].join("");
    const projectOptions = [
      `<option value="">${escapeHtml(form.projectTypePlaceholder)}</option>`,
      ...(form.projectTypeOptions || []).map(
        (option) =>
          `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`,
      ),
    ].join("");

    return `
      <section class="form-shell">
        <div class="form-block glass">
          <h2>${escapeHtml(form.title)}</h2>
          <p>${escapeHtml(form.intro)}</p>
          <form id="leadForm" novalidate>
            <label>
              <span>${escapeHtml(form.nameLabel)}</span>
              <input
                type="text"
                name="name"
                maxlength="120"
                autocomplete="name"
                placeholder="${escapeHtml(form.namePlaceholder)}"
              />
            </label>

            <div class="grid grid-2">
              <label>
                <span>${escapeHtml(form.contactMethodLabel)}</span>
                <select name="contactMethod" id="contactMethod">
                  ${methodOptions}
                </select>
              </label>
              <label id="contactMethodOtherWrap" hidden>
                <span>${escapeHtml(form.contactMethodOtherLabel)}</span>
                <input
                  type="text"
                  name="contactMethodOther"
                  maxlength="80"
                  placeholder="${escapeHtml(form.contactMethodOtherPlaceholder)}"
                />
              </label>
            </div>

            <div class="grid grid-2">
              <label>
                <span>${escapeHtml(form.contactValueLabel)}</span>
                <input
                  type="text"
                  name="contactValue"
                  id="contactValue"
                  maxlength="160"
                  autocomplete="off"
                  placeholder="${escapeHtml(form.contactValuePlaceholders.default)}"
                />
              </label>
              <label>
                <span>${escapeHtml(form.projectTypeLabel)}</span>
                <select name="projectType">
                  ${projectOptions}
                </select>
              </label>
            </div>

            <label>
              <span>${escapeHtml(form.messageLabel)}</span>
              <textarea
                name="message"
                rows="6"
                maxlength="2000"
                placeholder="${escapeHtml(form.messagePlaceholder)}"
              ></textarea>
            </label>

            <div class="grid grid-2">
              <label>
                <span>${escapeHtml(form.deadlineLabel)}</span>
                <input
                  type="text"
                  name="deadline"
                  maxlength="80"
                  autocomplete="off"
                  placeholder="${escapeHtml(form.deadlinePlaceholder)}"
                />
              </label>
              <label>
                <span>${escapeHtml(form.budgetLabel)}</span>
                <input
                  type="text"
                  name="budget"
                  maxlength="80"
                  autocomplete="off"
                  placeholder="${escapeHtml(form.budgetPlaceholder)}"
                />
              </label>
            </div>

            <input
              type="text"
              name="website"
              class="hp"
              tabindex="-1"
              autocomplete="off"
              aria-hidden="true"
            />

            <button class="button" type="submit">${escapeHtml(form.submitLabel)}</button>
            <p class="form-status" id="formStatus" aria-live="polite"></p>
            <p class="form-disclaimer">${escapeHtml(form.legalNotice)}</p>
          </form>
        </div>
      </section>
    `;
  };

  const renderContactBand = () => {
    const band = currentCommon.contactBand;
    const requisites = currentCommon.footer.requisites || [];
    return `
      <section class="contact-band glass">
        <div class="contact-band__intro">
          <h2>${escapeHtml(band.title)}</h2>
          <p>${escapeHtml(band.text)}</p>
        </div>
        <div class="grid grid-3">
          <article class="contact-panel">
            <span>${escapeHtml(band.directTitle)}</span>
            <div class="contact-links">
              <a href="mailto:info@arvectum.com">info@arvectum.com</a>
              <a href="https://t.me/arvectum" target="_blank" rel="noreferrer">t.me/arvectum</a>
            </div>
          </article>
          <article class="contact-panel">
            <span>${escapeHtml(band.formatTitle)}</span>
            <p>${escapeHtml(band.formatText)}</p>
          </article>
          <article class="contact-panel">
            <span>${escapeHtml(band.requisitesTitle)}</span>
            <dl class="footer-requisites footer-requisites--inverted">
              ${requisites
                .map((item) => {
                  const value =
                    item.type === "email"
                      ? `<a href="mailto:${escapeHtml(item.value)}">${escapeHtml(item.value)}</a>`
                      : escapeHtml(item.value);
                  return `
                    <div class="footer-requisite">
                      <dt>${escapeHtml(item.label)}</dt>
                      <dd>${value}</dd>
                    </div>
                  `;
                })
                .join("")}
            </dl>
          </article>
        </div>
      </section>
    `;
  };

  const renderContact = (page) => `
    <section class="page-hero">
      <div class="container reveal">
        <p class="eyebrow">${escapeHtml(page.hero.eyebrow)}</p>
        <h1>${escapeHtml(page.hero.title)}</h1>
        <p class="page-hero__text">${escapeHtml(page.hero.text)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container reveal">
        ${renderForm()}
      </div>
    </section>

    <section class="section section-soft">
      <div class="container reveal">
        ${renderContactBand()}
      </div>
    </section>
  `;

  const pageRenderers = {
    home: renderHome,
    solutions: renderSolutions,
    cases: renderCases,
    approach: renderApproach,
    contact: renderContact,
  };

  const renderPage = () => {
    const pageRoot = document.getElementById("pageRoot");
    const renderer = pageRenderers[currentPage] || pageRenderers.home;
    if (!pageRoot) return;
    pageRoot.innerHTML = renderer(currentContent);
  };

  const setCookie = (name, value, days = 180) => {
    const expires = days
      ? `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`
      : "";
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax${expires}`;
  };

  const getCookie = (name) => {
    const escaped = name.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    const match = document.cookie.match(
      new RegExp(`(?:^|; )${escaped}=([^;]*)`),
    );
    return match ? decodeURIComponent(match[1]) : null;
  };

  const clearCookie = (name) => {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  };

  const generateId = (prefix) => {
    const random = Math.random().toString(36).slice(2, 10);
    return `${prefix}_${Date.now().toString(36)}_${random}`;
  };

  const readConsent = () => {
    let storedConsent = null;
    try {
      storedConsent = window.localStorage.getItem(CONSENT_COOKIE_NAME);
    } catch (_) {
      storedConsent = null;
    }

    const raw = getCookie(CONSENT_COOKIE_NAME) || storedConsent;
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (_) {
      return null;
    }
  };

  const persistConsent = (payload) => {
    const serialized = JSON.stringify(payload);
    setCookie(CONSENT_COOKIE_NAME, serialized, 180);
    setCookie(
      `${COOKIE_PREFIX}consent_status`,
      payload.analytics ? "all" : "essential",
      180,
    );
    setCookie(`${COOKIE_PREFIX}consent_updated_at`, payload.updatedAt, 180);

    try {
      window.localStorage.setItem(CONSENT_COOKIE_NAME, serialized);
    } catch (_) {
      // localStorage may be unavailable in privacy modes.
    }
  };

  const clearAnalyticsCookies = () => {
    [
      `${COOKIE_PREFIX}visitor_id`,
      `${COOKIE_PREFIX}session_id`,
      `${COOKIE_PREFIX}first_visit`,
      `${COOKIE_PREFIX}last_visit`,
      `${COOKIE_PREFIX}landing_path`,
      `${COOKIE_PREFIX}referrer`,
      `${COOKIE_PREFIX}utm_source`,
      `${COOKIE_PREFIX}utm_medium`,
      `${COOKIE_PREFIX}utm_campaign`,
      `${COOKIE_PREFIX}utm_term`,
      `${COOKIE_PREFIX}utm_content`,
    ].forEach(clearCookie);
  };

  const getVisitSnapshot = () => {
    const url = new URL(window.location.href);
    return {
      path: `${url.pathname}${url.search}`,
      referrer: document.referrer || "direct",
      utm_source: url.searchParams.get("utm_source") || "",
      utm_medium: url.searchParams.get("utm_medium") || "",
      utm_campaign: url.searchParams.get("utm_campaign") || "",
      utm_term: url.searchParams.get("utm_term") || "",
      utm_content: url.searchParams.get("utm_content") || "",
    };
  };

  const applyConsent = (consent) => {
    setCookie(`${COOKIE_PREFIX}essential`, "true", 180);

    if (!consent || !consent.analytics) {
      clearAnalyticsCookies();
      return;
    }

    const snapshot = getVisitSnapshot();
    const visitorId =
      getCookie(`${COOKIE_PREFIX}visitor_id`) || generateId("visitor");
    const firstVisit =
      getCookie(`${COOKIE_PREFIX}first_visit`) || new Date().toISOString();

    setCookie(`${COOKIE_PREFIX}visitor_id`, visitorId, 180);
    setCookie(`${COOKIE_PREFIX}session_id`, generateId("session"), 1);
    setCookie(`${COOKIE_PREFIX}first_visit`, firstVisit, 180);
    setCookie(`${COOKIE_PREFIX}last_visit`, new Date().toISOString(), 180);
    setCookie(`${COOKIE_PREFIX}landing_path`, snapshot.path, 30);
    setCookie(`${COOKIE_PREFIX}referrer`, snapshot.referrer, 30);
    setCookie(`${COOKIE_PREFIX}utm_source`, snapshot.utm_source, 30);
    setCookie(`${COOKIE_PREFIX}utm_medium`, snapshot.utm_medium, 30);
    setCookie(`${COOKIE_PREFIX}utm_campaign`, snapshot.utm_campaign, 30);
    setCookie(`${COOKIE_PREFIX}utm_term`, snapshot.utm_term, 30);
    setCookie(`${COOKIE_PREFIX}utm_content`, snapshot.utm_content, 30);
  };

  const sendConsentLog = async (consent) => {
    try {
      const snapshot = getVisitSnapshot();
      const payload = {
        consentVersion: consent.version,
        analytics: !!consent.analytics,
        updatedAt: consent.updatedAt,
        visitorId: getCookie(`${COOKIE_PREFIX}visitor_id`) || null,
        sessionId: getCookie(`${COOKIE_PREFIX}session_id`) || null,
        firstVisit: getCookie(`${COOKIE_PREFIX}first_visit`) || null,
        lastVisit: getCookie(`${COOKIE_PREFIX}last_visit`) || null,
        path: snapshot.path,
        landingPath: getCookie(`${COOKIE_PREFIX}landing_path`) || snapshot.path,
        userAgent: navigator.userAgent,
        language: navigator.language,
        referrer: document.referrer || "",
        ...snapshot,
      };

      await fetch("/api/cookie-consent.php", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (_) {
      // Consent logging should never block the page.
    }
  };

  const saveConsent = ({ analytics }) => {
    const payload = {
      version: CONSENT_VERSION,
      analytics: !!analytics,
      updatedAt: new Date().toISOString(),
    };

    persistConsent(payload);
    applyConsent(payload);
    void sendConsentLog(payload);
    return payload;
  };

  const syncCookieToggleLabel = () => {
    const label = document.getElementById("cookieAnalyticsLabel");
    const toggle = document.getElementById("cookieAnalyticsToggle");
    if (!label || !toggle) return;
    label.textContent = toggle.checked
      ? currentCommon.cookies.analyticsOn
      : currentCommon.cookies.analyticsOff;
  };

  const renderCookies = () => {
    const cookies = currentCommon.cookies;
    setText("cookieBannerEyebrow", cookies.bannerEyebrow);
    setText("cookieBannerTitle", cookies.bannerTitle);
    setText("cookieBannerText", cookies.bannerText);
    setText("cookieDeclineBtn", cookies.decline);
    setText("cookieCustomizeBtn", cookies.customize);
    setText("cookieAcceptBtn", cookies.accept);
    setText("cookiePrefsEyebrow", cookies.prefsEyebrow);
    setText("cookieModalTitle", cookies.prefsTitle);
    setText("cookieEssentialTitle", cookies.essentialTitle);
    setText("cookieEssentialText", cookies.essentialText);
    setText("cookieEssentialAlwaysOn", cookies.essentialAlwaysOn);
    setText("cookieAnalyticsTitle", cookies.analyticsTitle);
    setText("cookieAnalyticsText", cookies.analyticsText);
    setText("cookieSaveEssentialBtn", cookies.saveEssential);
    setText("cookieSavePrefsBtn", cookies.savePrefs);

    const closeButton = document.getElementById("cookieModalClose");
    if (closeButton) {
      closeButton.setAttribute("aria-label", cookies.closeLabel);
    }

    syncCookieToggleLabel();
  };

  const initializeCookieConsent = () => {
    const banner = document.getElementById("cookieBanner");
    const modal = document.getElementById("cookieModalBackdrop");
    const toggle = document.getElementById("cookieAnalyticsToggle");
    const acceptBtn = document.getElementById("cookieAcceptBtn");
    const declineBtn = document.getElementById("cookieDeclineBtn");
    const customizeBtn = document.getElementById("cookieCustomizeBtn");
    const saveEssentialBtn = document.getElementById("cookieSaveEssentialBtn");
    const savePrefsBtn = document.getElementById("cookieSavePrefsBtn");
    const closeBtn = document.getElementById("cookieModalClose");

    const closeModal = () => {
      document.body.classList.remove("cookie-modal-open");
      if (modal) modal.hidden = true;
    };

    const openModal = () => {
      document.body.classList.add("cookie-modal-open");
      if (modal) modal.hidden = false;
    };

    const finalize = (analytics) => {
      saveConsent({ analytics });
      if (banner) banner.hidden = true;
      closeModal();
      syncCookieToggleLabel();
    };

    const consent = readConsent();
    if (consent) {
      applyConsent(consent);
      if (banner) banner.hidden = true;
      if (toggle) toggle.checked = !!consent.analytics;
      syncCookieToggleLabel();
    } else if (banner) {
      banner.hidden = false;
    }

    if (toggle) {
      toggle.addEventListener("change", syncCookieToggleLabel);
    }
    if (acceptBtn) {
      acceptBtn.addEventListener("click", () => finalize(true));
    }
    if (declineBtn) {
      declineBtn.addEventListener("click", () => finalize(false));
    }
    if (customizeBtn) {
      customizeBtn.addEventListener("click", () => {
        const currentConsent = readConsent();
        if (toggle) {
          toggle.checked = currentConsent ? !!currentConsent.analytics : false;
        }
        syncCookieToggleLabel();
        openModal();
      });
    }
    if (saveEssentialBtn) {
      saveEssentialBtn.addEventListener("click", () => finalize(false));
    }
    if (savePrefsBtn) {
      savePrefsBtn.addEventListener("click", () =>
        finalize(toggle ? toggle.checked : false),
      );
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }
    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
      });
    }
  };

  const initMenu = () => {
    const body = document.body;
    const drawer = document.getElementById("menuDrawer");
    const toggle = document.getElementById("menuToggle");
    const close = document.getElementById("menuClose");

    const closeMenu = () => {
      body.classList.remove("menu-open");
      if (drawer) drawer.classList.remove("is-open");
    };

    const openMenu = () => {
      body.classList.add("menu-open");
      if (drawer) drawer.classList.add("is-open");
    };

    if (toggle) {
      toggle.addEventListener("click", () => {
        if (body.classList.contains("menu-open")) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }

    if (close) {
      close.addEventListener("click", closeMenu);
    }

    if (drawer) {
      drawer.addEventListener("click", (event) => {
        if (event.target === drawer) closeMenu();
      });
    }

    document.querySelectorAll("#menuDrawer a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  };

  const initLanguageSwitch = () => {
    document.querySelectorAll(".lang-switch__button").forEach((button) => {
      button.addEventListener("click", () => {
        const nextLang = button.dataset.lang;
        if (!nextLang || nextLang === currentLanguage) return;
        const file = routes[currentPage] || "index.html";
        const query = nextLang === defaultLanguage ? "" : `?lang=${nextLang}`;
        window.location.href = `${file}${query}${window.location.hash}`;
      });
    });
  };

  const initReveal = () => {
    if (revealObserver) {
      revealObserver.disconnect();
      revealObserver = null;
    }

    const nodes = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    if (typeof window.IntersectionObserver !== "function") {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((node) => {
      node.classList.remove("is-visible");
      revealObserver.observe(node);
    });
  };

  const initForm = () => {
    const form = document.getElementById("leadForm");
    if (!form) return;

    const methodSelect = document.getElementById("contactMethod");
    const otherWrap = document.getElementById("contactMethodOtherWrap");
    const contactValue = document.getElementById("contactValue");
    const formConfig = currentCommon.form;
    const statusEl = document.getElementById("formStatus");

    const setStatus = (message, isError = false) => {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.style.color = isError ? "#ff8da6" : "#43e5c5";
    };

    const syncContactFields = () => {
      if (!methodSelect || !contactValue || !otherWrap) return;
      const value = methodSelect.value || "default";
      otherWrap.hidden = value !== "other";
      contactValue.placeholder =
        formConfig.contactValuePlaceholders?.[value] ||
        formConfig.contactValuePlaceholders?.default ||
        "";
    };

    if (methodSelect) {
      methodSelect.addEventListener("change", syncContactFields);
      syncContactFields();
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const payload = {
        name: String(formData.get("name") || "").trim(),
        contactMethod: String(formData.get("contactMethod") || "").trim(),
        contactMethodOther: String(
          formData.get("contactMethodOther") || "",
        ).trim(),
        contactValue: String(formData.get("contactValue") || "").trim(),
        projectType: String(formData.get("projectType") || "").trim(),
        message: String(formData.get("message") || "").trim(),
        budget: String(formData.get("budget") || "").trim(),
        deadline: String(formData.get("deadline") || "").trim(),
        website: String(formData.get("website") || "").trim(),
      };

      const validation = formConfig.validation || {};

      if (!payload.name) {
        setStatus(validation.nameRequired, true);
        return;
      }
      if (!payload.contactMethod) {
        setStatus(validation.contactMethodRequired, true);
        return;
      }
      if (payload.contactMethod === "other" && !payload.contactMethodOther) {
        setStatus(validation.contactMethodOtherRequired, true);
        return;
      }
      if (!payload.contactValue) {
        setStatus(validation.contactValueRequired, true);
        return;
      }

      const methodOption = (formConfig.contactMethodOptions || []).find(
        (item) => item.value === payload.contactMethod,
      );
      const projectOption = (formConfig.projectTypeOptions || []).find(
        (item) => item.value === payload.projectType,
      );

      const chosenMethod =
        payload.contactMethod === "other" && payload.contactMethodOther
          ? payload.contactMethodOther
          : methodOption?.label || payload.contactMethod;

      payload.contact = chosenMethod
        ? `${chosenMethod}: ${payload.contactValue}`
        : payload.contactValue;
      payload.contactMethod = chosenMethod;
      payload.projectType = projectOption?.label || payload.projectType || "";

      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) submitButton.disabled = true;
      setStatus(validation.sending || "Sending...");

      try {
        const response = await fetch("/api/submit.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = await response.json().catch(() => ({ ok: false }));
        if (!response.ok || !result.ok) {
          throw new Error(result.error || "Request failed");
        }

        form.reset();
        syncContactFields();
        setStatus(validation.success || "Request sent.");
      } catch (_) {
        setStatus(validation.error || "Could not send request.", true);
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  };

  const renderAll = () => {
    currentLanguage = getLanguage();
    const langPack =
      config.languages?.[currentLanguage] || config.languages?.ru;
    currentCommon = langPack.common;
    currentContent = langPack.pages?.[currentPage] || langPack.pages?.home;

    renderMeta(currentContent.meta);
    renderHeader();
    renderPage();
    renderFooter();
    renderCookies();
    initMenu();
    initLanguageSwitch();
    initReveal();
    initForm();
    initializeCookieConsent();
  };

  renderAll();
})();
