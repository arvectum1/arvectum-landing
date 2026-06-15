(function () {
  const config = window.SITE_CONFIG || {};
  const defaultLanguage = config.defaultLanguage || "ru";
  const COOKIE_PREFIX = "arvectum_";
  const CONSENT_COOKIE_NAME = `${COOKIE_PREFIX}cookie_consent`;
  const CONSENT_VERSION = "v1";

  let currentLanguage = defaultLanguage;
  let currentContent = null;
  let revealObserver = null;
  let carouselInitialized = false;
  let activeIndex = 0;

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

  const getLanguageContent = (lang) =>
    config.languages?.[lang] || config.languages?.[defaultLanguage] || {};

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
      // Some browser/privacy modes may block localStorage access.
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
    const existingVisitorId =
      getCookie(`${COOKIE_PREFIX}visitor_id`) || generateId("visitor");
    const existingFirstVisit =
      getCookie(`${COOKIE_PREFIX}first_visit`) || new Date().toISOString();

    setCookie(`${COOKIE_PREFIX}visitor_id`, existingVisitorId, 180);
    setCookie(`${COOKIE_PREFIX}session_id`, generateId("session"), 1);
    setCookie(`${COOKIE_PREFIX}first_visit`, existingFirstVisit, 180);
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
      // Consent logging must never block the page.
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

  const renderMeta = (meta) => {
    if (!meta) return;
    document.title = meta.title || document.title;
    document.documentElement.lang = currentLanguage;

    const description = document.getElementById("metaDescription");
    const ogTitle = document.getElementById("metaOgTitle");
    const ogDescription = document.getElementById("metaOgDescription");
    const ogLocale = document.getElementById("metaOgLocale");

    if (description)
      description.setAttribute("content", meta.description || "");
    if (ogTitle) ogTitle.setAttribute("content", meta.ogTitle || "");
    if (ogDescription)
      ogDescription.setAttribute("content", meta.ogDescription || "");
    if (ogLocale) ogLocale.setAttribute("content", meta.locale || "ru_RU");
  };

  const renderHero = (hero) => {
    setText("founderLabel", hero.founderLabel);
    setText("heroAudience", hero.audience);
    setText("heroTitle", hero.title);
    setText("heroSubtitle", hero.subtitle);
    setText("heroPositioningLabel", currentContent.ui.heroPositioningLabel);
    setText("heroPositioning", hero.positioning);
    setText("heroPositioningMirror", hero.positioning);
    setText("primaryCta", hero.ctaPrimary);
    setText("secondaryCta", hero.ctaSecondary);
    setText("primaryCtaTopbar", currentContent.ui.topbarCta);

    setHtml(
      "heroPainList",
      (hero.pains || [])
        .map(
          (item) => `
        <article class="hero-pain-item reveal">
          <span></span>
          <p>${escapeHtml(item)}</p>
        </article>
      `,
        )
        .join(""),
    );

    setHtml(
      "heroProofList",
      (hero.proof || [])
        .map(
          (item) => `
        <span class="reveal">${escapeHtml(item)}</span>
      `,
        )
        .join(""),
    );

    setHtml(
      "trustStrip",
      (hero.trustStrip || [])
        .map(
          (item) => `
        <span class="trust-pill reveal">${escapeHtml(item)}</span>
      `,
        )
        .join(""),
    );

    setHtml(
      "heroSignals",
      (hero.signals || [])
        .map((item) => `<span>${escapeHtml(item)}</span>`)
        .join(""),
    );

    setHtml(
      "heroPanels",
      (hero.panels || [])
        .map(
          (item) => `
        <article class="signal-card">
          <small>${escapeHtml(item.label)}</small>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
        )
        .join(""),
    );
  };

  const renderMetrics = (metrics) => {
    setHtml(
      "metricsGrid",
      (metrics || [])
        .map(
          (item) => `
        <div class="metric-card reveal">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <p>${escapeHtml(item.description)}</p>
        </div>
      `,
        )
        .join(""),
    );
  };

  const renderAudience = (items) => {
    setHtml(
      "audienceGrid",
      (items || [])
        .map(
          (item) => `
        <article class="card reveal audience-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
        )
        .join(""),
    );
  };

  const renderPositioningCards = (items) => {
    setHtml(
      "positioningGrid",
      (items || [])
        .map(
          (item) => `
        <article class="card reveal positioning-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
        )
        .join(""),
    );
  };

  const renderServices = (items) => {
    const labels = currentContent.labels || {};
    setHtml(
      "servicesGrid",
      (items || [])
        .map(
          (item) => `
        <article class="card reveal solution-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p class="solution-audience">${escapeHtml(item.audience)}</p>
          <div class="solution-meta">
            <div>
              <span>${escapeHtml(labels.solutionPain)}</span>
              <p>${escapeHtml(item.pain)}</p>
            </div>
            <div>
              <span>${escapeHtml(labels.solutionTiming)}</span>
              <p>${escapeHtml(item.timing)}</p>
            </div>
          </div>
          <div class="solution-block">
            <span>${escapeHtml(labels.solutionHow)}</span>
            <ul class="solution-list">
              ${(item.how || [])
                .map((howItem) => `<li>${escapeHtml(howItem)}</li>`)
                .join("")}
            </ul>
          </div>
          <div class="solution-footer">
            <div class="solution-result">
              <span>${escapeHtml(labels.solutionResult)}</span>
              <p>${escapeHtml(item.result)}</p>
            </div>
            <a class="button button-ghost solution-cta" href="#contacts">${escapeHtml(item.ctaLabel)}</a>
          </div>
        </article>
      `,
        )
        .join(""),
    );
  };

  const renderDeliverables = (items) => {
    setHtml(
      "deliverablesGrid",
      (items || [])
        .map(
          (item) => `
        <article class="card reveal deliverable-card">
          <div class="deliverable-badge">${escapeHtml(item.badge)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
        )
        .join(""),
    );
  };

  const renderCases = (items) => {
    const labels = currentContent.labels || {};
    setHtml(
      "casesGrid",
      (items || [])
        .map(
          (item, index) => `
        <article class="case-card reveal" aria-label="Case ${index + 1}: ${escapeHtml(item.niche)}">
          <div class="case-result">${escapeHtml(item.result)}</div>
          <h3>${escapeHtml(item.niche)}</h3>
          <div class="case-flow">
            <p><span>${escapeHtml(labels.caseChallenge)}</span>${escapeHtml(item.challenge)}</p>
            <p><span>${escapeHtml(labels.caseSolution)}</span>${escapeHtml(item.solution)}</p>
            <p><span>${escapeHtml(labels.caseResult)}</span>${escapeHtml(item.effect)}</p>
          </div>
          <ul class="case-results">
            ${(item.outcomes || [])
              .map((outcome) => `<li>${escapeHtml(outcome)}</li>`)
              .join("")}
          </ul>
          <div class="case-footer">
            <span class="case-note">${escapeHtml(item.timing)}</span>
            <a href="#contacts" class="case-demo-link">${escapeHtml(item.ctaLabel)}</a>
          </div>
        </article>
      `,
        )
        .join(""),
    );
  };

  const renderTimeline = (items) => {
    setHtml(
      "processList",
      (items || [])
        .map(
          (item, index) => `
        <li class="reveal">
          <div class="timeline-index">${index + 1}</div>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </li>
      `,
        )
        .join(""),
    );
  };

  const renderTrustPoints = (items) => {
    setHtml(
      "trustGrid",
      (items || [])
        .map(
          (item) => `
        <article class="card reveal trust-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
        )
        .join(""),
    );
  };

  const renderEngagement = (items) => {
    setHtml(
      "engagementGrid",
      (items || [])
        .map(
          (item) => `
        <article class="card reveal engagement-card">
          <div class="engagement-badge">${escapeHtml(item.badge)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
        )
        .join(""),
    );
  };

  const renderStack = (items) => {
    setHtml(
      "stackChips",
      (items || [])
        .map((item) => `<span class="chip reveal">${escapeHtml(item)}</span>`)
        .join(""),
    );
  };

  const renderFaq = (items) => {
    setHtml(
      "faqList",
      (items || [])
        .map(
          (item) => `
        <details class="glass reveal">
          <summary>${escapeHtml(item.question)}</summary>
          <p>${escapeHtml(item.answer)}</p>
        </details>
      `,
        )
        .join(""),
    );
  };

  const renderSelectOptions = (selectEl, placeholder, options) => {
    if (!selectEl) return;
    const currentValue = selectEl.value;
    selectEl.innerHTML = `
      <option value="" selected disabled>${escapeHtml(placeholder)}</option>
      ${(options || [])
        .map(
          (item) =>
            `<option value="${escapeHtml(item.value)}">${escapeHtml(item.label)}</option>`,
        )
        .join("")}
    `;

    const hasCurrentValue = (options || []).some(
      (item) => item.value === currentValue,
    );
    selectEl.value = hasCurrentValue ? currentValue : "";
  };

  const renderFooter = (footer) => {
    setText("contactBandTitle", footer.bandTitle);
    setText("contactBandText", footer.bandText);
    setText("contactLinksLabel", footer.contactLinksLabel);
    setText("workFormatLabel", footer.workFormatLabel);
    setText("workFormatText", footer.workFormatText);
    setText("requisitesLabel", footer.requisitesLabel);
    setText("requisitesNameLabel", footer.requisitesNameLabel);
    setText("requisitesNameValue", footer.requisitesNameValue);
    setText("requisitesTaxLabel", footer.requisitesTaxLabel);
    setText("requisitesTaxValue", footer.requisitesTaxValue);
    setText("requisitesEmailLabel", footer.requisitesEmailLabel);
    setText("requisitesEmailValue", footer.requisitesEmailValue);
    setText("requisitesPhoneLabel", footer.requisitesPhoneLabel);
    setText("requisitesPhoneValue", footer.requisitesPhoneValue);
  };

  const renderCookies = (cookies) => {
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
  };

  const renderForm = (formContent) => {
    setText("formTitle", formContent.title);
    setText("formIntro", formContent.intro);
    setText("nameLabel", formContent.nameLabel);
    setText("contactMethodLabel", formContent.contactMethodLabel);
    setText("contactMethodOtherLabel", formContent.contactMethodOtherLabel);
    setText("contactValueLabel", formContent.contactValueLabel);
    setText("projectTypeLabel", formContent.projectTypeLabel);
    setText("messageLabel", formContent.messageLabel);
    setText("deadlineLabel", formContent.deadlineLabel);
    setText("budgetLabel", formContent.budgetLabel);
    setText("submitButton", formContent.submitLabel);
    setText("legalNotice", formContent.legalNotice);

    const nameInput = document.getElementById("nameInput");
    const contactMethodOther = document.getElementById("contactMethodOther");
    const contactValue = document.getElementById("contactValue");
    const messageInput = document.getElementById("messageInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const budgetInput = document.getElementById("budgetInput");
    const contactMethodSelect = document.getElementById("contactMethod");
    const projectTypeSelect = document.getElementById("projectType");

    if (nameInput) nameInput.placeholder = formContent.namePlaceholder;
    if (contactMethodOther)
      contactMethodOther.placeholder =
        formContent.contactMethodOtherPlaceholder;
    if (contactValue)
      contactValue.placeholder = formContent.contactValuePlaceholderDefault;
    if (messageInput) messageInput.placeholder = formContent.messagePlaceholder;
    if (deadlineInput)
      deadlineInput.placeholder = formContent.deadlinePlaceholder;
    if (budgetInput) budgetInput.placeholder = formContent.budgetPlaceholder;

    renderSelectOptions(
      contactMethodSelect,
      formContent.contactMethodPlaceholder,
      formContent.contactMethodOptions,
    );
    renderSelectOptions(
      projectTypeSelect,
      formContent.projectTypePlaceholder,
      formContent.projectTypeOptions,
    );
  };

  const renderStaticUi = (ui) => {
    setText("skipLink", ui.skipLink);
    setText("brandMeta", ui.brandMeta);
    setText("navAudience", ui.navAudience);
    setText("navAttention", ui.navAttention);
    setText("navServices", ui.navServices);
    setText("navCases", ui.navCases);
    setText("navContacts", ui.navContacts);
    setText("topbarTelegram", ui.topbarTelegram);
    setText("primaryCtaTopbar", ui.topbarCta);
    setText("attentionTitle", ui.attentionTitle);
    setText("attentionText", ui.attentionText);
    setText("audienceTitle", ui.audienceTitle);
    setText("audienceText", ui.audienceText);
    setText("positioningTitle", ui.positioningTitle);
    setText("positioningText", ui.positioningText);
    setText("positioningStatementLabel", ui.positioningStatementLabel);
    setText("positioningStatementNote", ui.positioningStatementNote);
    setText("positioningCta", ui.positioningCta);
    setText("servicesTitle", ui.servicesTitle);
    setText("servicesText", ui.servicesText);
    setText("deliverablesTitle", ui.deliverablesTitle);
    setText("deliverablesText", ui.deliverablesText);
    setText("casesTitle", ui.casesTitle);
    setText("casesText", ui.casesText);
    setText("processTitle", ui.processTitle);
    setText("processText", ui.processText);
    setText("trustTitle", ui.trustTitle);
    setText("trustText", ui.trustText);
    setText("engagementTitle", ui.engagementTitle);
    setText("engagementText", ui.engagementText);
    setText("stackTitle", ui.stackTitle);
    setText("stackText", ui.stackText);
    setText("faqTitle", ui.faqTitle);
    setText("faqText", ui.faqText);
    setText("finalCtaTitle", ui.finalCtaTitle);
    setText("finalCtaText", ui.finalCtaText);
    setText("finalCtaButton", ui.finalCtaButton);

    const casePrev = document.getElementById("casePrev");
    const caseNext = document.getElementById("caseNext");
    const casesViewer = document.getElementById("casesViewer");
    const caseDots = document.getElementById("caseDots");

    if (casePrev) casePrev.setAttribute("aria-label", ui.carouselPrevLabel);
    if (caseNext) caseNext.setAttribute("aria-label", ui.carouselNextLabel);
    if (casesViewer)
      casesViewer.setAttribute("aria-label", ui.carouselRegionLabel);
    if (caseDots) caseDots.setAttribute("aria-label", ui.carouselDotsLabel);

    document.querySelectorAll(".brand img, .hero-monogram").forEach((img) => {
      img.setAttribute(
        "alt",
        currentLanguage === "ru" ? "Логотип Arvectum" : "Arvectum logo",
      );
    });
  };

  const updateLanguageSwitch = () => {
    document.querySelectorAll(".lang-switch__button").forEach((button) => {
      const isActive = button.dataset.lang === currentLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const initReveal = () => {
    if (revealObserver) {
      revealObserver.disconnect();
      revealObserver = null;
    }

    const revealNodes = document.querySelectorAll(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealNodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (typeof window.IntersectionObserver !== "function") {
      revealNodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    revealNodes.forEach((el) => el.classList.remove("is-visible"));

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    revealNodes.forEach((el) => revealObserver.observe(el));
  };

  const getCards = () =>
    Array.from(document.querySelectorAll("#casesGrid .case-card"));
  const getDots = () =>
    Array.from(document.querySelectorAll("#caseDots .carousel-dot"));
  const getCaseTrack = () => document.getElementById("casesGrid");
  const getCasesViewer = () => document.getElementById("casesViewer");
  const getSlideWidth = () => getCasesViewer()?.clientWidth || 0;
  const getMaxIndex = () => Math.max(0, getCards().length - 1);

  const syncCarouselUi = () => {
    const casePrev = document.getElementById("casePrev");
    const caseNext = document.getElementById("caseNext");
    if (casePrev) casePrev.disabled = activeIndex <= 0;
    if (caseNext) caseNext.disabled = activeIndex >= getMaxIndex();

    getDots().forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", String(isActive));
    });
  };

  const renderCarouselDots = () => {
    const caseDots = document.getElementById("caseDots");
    if (!caseDots) return;
    const dotLabel = currentContent?.ui?.carouselDotLabel || "Case";

    caseDots.innerHTML = getCards()
      .map(
        (_, index) => `
      <button
        class="button carousel-dot${index === activeIndex ? " is-active" : ""}"
        type="button"
        aria-label="${dotLabel} ${index + 1}"
        aria-current="${index === activeIndex ? "true" : "false"}"
        data-index="${index}"
      ></button>
    `,
      )
      .join("");
  };

  const scrollToCaseIndex = (index, behavior = "smooth") => {
    const track = getCaseTrack();
    if (!track) return;
    activeIndex = Math.min(Math.max(index, 0), getMaxIndex());
    track.scrollTo({ left: activeIndex * getSlideWidth(), behavior });
    syncCarouselUi();
  };

  const syncCaseIndexFromScroll = () => {
    const track = getCaseTrack();
    const width = getSlideWidth();
    if (!track || !width) return;
    activeIndex = Math.round(track.scrollLeft / width);
    syncCarouselUi();
  };

  const initCasesCarousel = () => {
    const casePrev = document.getElementById("casePrev");
    const caseNext = document.getElementById("caseNext");
    const caseDots = document.getElementById("caseDots");
    const casesViewer = document.getElementById("casesViewer");
    const casesTrack = getCaseTrack();

    if (!casePrev || !caseNext || !caseDots || !casesViewer || !casesTrack)
      return;

    if (!carouselInitialized) {
      casePrev.addEventListener("click", () =>
        scrollToCaseIndex(activeIndex - 1),
      );
      caseNext.addEventListener("click", () =>
        scrollToCaseIndex(activeIndex + 1),
      );
      caseDots.addEventListener("click", (event) => {
        const target = event.target.closest(".carousel-dot");
        if (!target) return;
        scrollToCaseIndex(Number(target.dataset.index));
      });

      casesTrack.addEventListener(
        "scroll",
        () => {
          window.clearTimeout(syncCaseIndexFromScroll._timer);
          syncCaseIndexFromScroll._timer = window.setTimeout(
            syncCaseIndexFromScroll,
            80,
          );
        },
        { passive: true },
      );

      window.addEventListener("resize", () => {
        window.clearTimeout(scrollToCaseIndex._timer);
        scrollToCaseIndex._timer = window.setTimeout(
          () => scrollToCaseIndex(activeIndex, "auto"),
          120,
        );
      });

      casesViewer.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") scrollToCaseIndex(activeIndex - 1);
        if (event.key === "ArrowRight") scrollToCaseIndex(activeIndex + 1);
      });

      carouselInitialized = true;
    }

    activeIndex = 0;
    renderCarouselDots();
    scrollToCaseIndex(0, "auto");
  };

  const renderLanguage = (lang) => {
    currentLanguage = config.languages?.[lang] ? lang : defaultLanguage;
    currentContent = getLanguageContent(currentLanguage);
    renderMeta(currentContent.meta);
    renderStaticUi(currentContent.ui);
    renderHero(currentContent.hero);
    renderMetrics(currentContent.metrics);
    renderAudience(currentContent.audiences);
    renderPositioningCards(currentContent.positioningCards);
    renderServices(currentContent.services);
    renderDeliverables(currentContent.deliverables);
    renderCases(currentContent.cases);
    renderTimeline(currentContent.process);
    renderTrustPoints(currentContent.trustPoints);
    renderEngagement(currentContent.engagementModels);
    renderStack(currentContent.stack);
    renderFaq(currentContent.faq);
    renderForm(currentContent.form);
    renderFooter(currentContent.footer);
    renderCookies(currentContent.cookies);
    updateLanguageSwitch();
    initReveal();
    initCasesCarousel();
    syncContactFields();
    syncCookieToggleLabel();
  };

  const contactMethodEl = document.getElementById("contactMethod");
  const contactMethodOtherWrap = document.getElementById(
    "contactMethodOtherWrap",
  );
  const contactMethodOtherEl = document.getElementById("contactMethodOther");
  const contactValueEl = document.getElementById("contactValue");

  const syncContactFields = () => {
    if (!contactMethodEl || !contactMethodOtherWrap || !contactMethodOtherEl)
      return;

    const method = String(contactMethodEl.value || "").trim();
    const isOther = method === "other";
    const placeholders = currentContent?.form?.contactValuePlaceholders || {};

    contactMethodOtherWrap.hidden = !isOther;
    contactMethodOtherEl.required = isOther;
    if (!isOther) contactMethodOtherEl.value = "";

    if (!contactValueEl) return;

    const placeholder =
      placeholders[method] ||
      placeholders.default ||
      currentContent?.form?.contactValuePlaceholderDefault ||
      "";
    contactValueEl.placeholder = placeholder;

    if (method === "phone" || method === "whatsapp") {
      contactValueEl.autocomplete = "tel";
    } else if (method === "email") {
      contactValueEl.autocomplete = "email";
    } else {
      contactValueEl.autocomplete = "off";
    }
  };

  const cookieBanner = document.getElementById("cookieBanner");
  const cookieAcceptBtn = document.getElementById("cookieAcceptBtn");
  const cookieDeclineBtn = document.getElementById("cookieDeclineBtn");
  const cookieCustomizeBtn = document.getElementById("cookieCustomizeBtn");
  const cookieModalBackdrop = document.getElementById("cookieModalBackdrop");
  const cookieModalClose = document.getElementById("cookieModalClose");
  const cookieAnalyticsToggle = document.getElementById(
    "cookieAnalyticsToggle",
  );
  const cookieAnalyticsLabel = document.getElementById("cookieAnalyticsLabel");
  const cookieSavePrefsBtn = document.getElementById("cookieSavePrefsBtn");
  const cookieSaveEssentialBtn = document.getElementById(
    "cookieSaveEssentialBtn",
  );

  const syncCookieToggleLabel = () => {
    if (!cookieAnalyticsToggle || !cookieAnalyticsLabel || !currentContent)
      return;
    cookieAnalyticsLabel.textContent = cookieAnalyticsToggle.checked
      ? currentContent.cookies.analyticsOn
      : currentContent.cookies.analyticsOff;
  };

  const openCookieModal = () => {
    if (!cookieModalBackdrop) return;
    cookieModalBackdrop.hidden = false;
    document.body.classList.add("cookie-modal-open");
    syncCookieToggleLabel();
  };

  const closeCookieModal = () => {
    if (!cookieModalBackdrop) return;
    cookieModalBackdrop.hidden = true;
    document.body.classList.remove("cookie-modal-open");
  };

  const hideCookieBanner = () => {
    if (cookieBanner) cookieBanner.hidden = true;
  };

  const showCookieBanner = () => {
    if (cookieBanner) cookieBanner.hidden = false;
  };

  const initializeCookieConsent = () => {
    const existingConsent = readConsent();
    if (existingConsent) {
      applyConsent(existingConsent);
      hideCookieBanner();
      if (cookieAnalyticsToggle) {
        cookieAnalyticsToggle.checked = !!existingConsent.analytics;
      }
    } else {
      showCookieBanner();
    }
    syncCookieToggleLabel();
  };

  const finalizeConsentChoice = (analytics) => {
    if (cookieAnalyticsToggle) cookieAnalyticsToggle.checked = !!analytics;
    syncCookieToggleLabel();
    hideCookieBanner();
    closeCookieModal();

    try {
      saveConsent({ analytics });
    } catch (_) {
      // Consent UI must not get stuck even if storage fails.
    }
  };

  if (cookieAnalyticsToggle) {
    cookieAnalyticsToggle.addEventListener("change", syncCookieToggleLabel);
  }

  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener("click", () =>
      finalizeConsentChoice(true),
    );
  }

  if (cookieDeclineBtn) {
    cookieDeclineBtn.addEventListener("click", () =>
      finalizeConsentChoice(false),
    );
  }

  if (cookieCustomizeBtn) {
    cookieCustomizeBtn.addEventListener("click", () => {
      const currentConsent = readConsent();
      if (cookieAnalyticsToggle) {
        cookieAnalyticsToggle.checked = currentConsent
          ? !!currentConsent.analytics
          : false;
      }
      syncCookieToggleLabel();
      openCookieModal();
    });
  }

  if (cookieModalClose) {
    cookieModalClose.addEventListener("click", closeCookieModal);
  }

  if (cookieModalBackdrop) {
    cookieModalBackdrop.addEventListener("click", (event) => {
      if (event.target === cookieModalBackdrop) closeCookieModal();
    });
  }

  if (cookieSavePrefsBtn) {
    cookieSavePrefsBtn.addEventListener("click", () => {
      const analytics = cookieAnalyticsToggle
        ? cookieAnalyticsToggle.checked
        : false;
      finalizeConsentChoice(analytics);
    });
  }

  if (cookieSaveEssentialBtn) {
    cookieSaveEssentialBtn.addEventListener("click", () =>
      finalizeConsentChoice(false),
    );
  }

  if (contactMethodEl) {
    contactMethodEl.addEventListener("change", syncContactFields);
  }

  document.querySelectorAll(".lang-switch__button").forEach((button) => {
    button.addEventListener("click", () => {
      renderLanguage(button.dataset.lang);
    });
  });

  const form = document.getElementById("leadForm");
  const statusEl = document.getElementById("formStatus");

  if (form && statusEl) {
    const setStatus = (message, isError = false) => {
      statusEl.textContent = message;
      statusEl.style.color = isError ? "#d14d72" : "#43e5c5";
    };

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

      const validation = currentContent?.form?.validation || {};

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

      const methodOption = (
        currentContent.form.contactMethodOptions || []
      ).find((item) => item.value === payload.contactMethod);
      const projectOption = (currentContent.form.projectTypeOptions || []).find(
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
  }

  renderLanguage(defaultLanguage);
  initializeCookieConsent();
})();
