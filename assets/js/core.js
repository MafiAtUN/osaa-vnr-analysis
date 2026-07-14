/* ============================================================
   OSAA VNR 2026 — core: registry, i18n, theme.
   No dependencies, no CDN. Works from file:// and GitHub Pages.
   ============================================================ */
(function () {
  "use strict";

  // ── Country registry ──────────────────────────────────────
  const COUNTRIES = [];
  const BY_SLUG = Object.create(null);

  window.VNR = {
    register(c) { COUNTRIES.push(c); BY_SLUG[c.slug] = c; },
    all() { return COUNTRIES.slice().sort((a, b) => a.name.en.localeCompare(b.name.en)); },
    get(slug) { return BY_SLUG[slug] || null; }
  };

  // ── Language ──────────────────────────────────────────────
  const LANG_KEY = "osaa-vnr-lang";
  let lang = localStorage.getItem(LANG_KEY);
  if (lang !== "en" && lang !== "fr") {
    lang = (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  const listeners = [];

  const I18N = {
    get lang() { return lang; },

    set(next) {
      if (next !== "en" && next !== "fr") return;
      lang = next;
      localStorage.setItem(LANG_KEY, lang);
      document.documentElement.lang = lang;
      applyStatic();
      listeners.forEach(fn => fn(lang));
      syncLangButtons();
    },

    onChange(fn) { listeners.push(fn); },

    /* Pick the active language out of a {en, fr} pair.
       Falls back to the other language rather than rendering "undefined". */
    t(pair) {
      if (pair == null) return "";
      if (typeof pair === "string") return pair;
      return pair[lang] ?? pair.en ?? pair.fr ?? "";
    },

    /* Locale-correct number. French uses a comma decimal separator and a
       narrow no-break space before the % sign. */
    num(v, unit) {
      if (v == null || v === "") return "";
      // Percentages want one decimal; index values below 1 (an HDI of 0.571,
      // a ratio) need three, or they round away to a meaningless "0.6".
      const dp = Math.abs(v) < 1 ? 3 : 1;
      const s = new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB", {
        maximumFractionDigits: dp
      }).format(v);
      if (!unit) return s;
      if (unit === "%" || unit === "%+") {
        return lang === "fr" ? s + " " + unit : s + unit;
      }
      return s + unit;
    },

    /* UI strings. */
    ui(key) { return (UI[key] && UI[key][lang]) || (UI[key] && UI[key].en) || key; }
  };

  const UI = {
    site_title:     { en: "Africa VNR Analysis", fr: "Analyse des RNV africains" },
    site_sub:       { en: "Office of the Special Adviser on Africa · United Nations", fr: "Bureau du Conseiller spécial pour l'Afrique · Nations Unies" },
    nav_countries:  { en: "Countries", fr: "Pays" },
    nav_method:     { en: "Methodology", fr: "Méthodologie" },
    nav_findings:   { en: "Fact-check", fr: "Vérification" },
    back_all:       { en: "← All countries", fr: "← Tous les pays" },

    hero_label:     { en: "Voluntary National Reviews · HLPF, July 2026", fr: "Rapports nationaux volontaires · FPHN, juillet 2026" },
    hero_title:     { en: "19 African countries<br>at the 2026 HLPF", fr: "19 pays africains<br>au FPHN 2026" },
    hero_body:      { en: "For each country, the one-page fact sheet OSAA submitted to the High-Level Political Forum, paired with a dashboard of the indicators behind it — every figure traced to its source, and every discrepancy found in the review recorded rather than quietly smoothed over.",
                      fr: "Pour chaque pays, la fiche d'une page transmise par l'OSAA au Forum politique de haut niveau, accompagnée d'un tableau de bord des indicateurs qui la sous-tendent — chaque chiffre rattaché à sa source et chaque divergence relevée consignée plutôt que discrètement effacée." },
    stat_countries: { en: "Countries", fr: "Pays" },
    stat_goals:     { en: "SDGs in focus", fr: "ODD prioritaires" },
    stat_checks:    { en: "Data corrections", fr: "Corrections" },

    filter_region:  { en: "Region", fr: "Région" },
    all:            { en: "All", fr: "Tous" },
    north:          { en: "North Africa", fr: "Afrique du Nord" },
    west:           { en: "West Africa", fr: "Afrique de l'Ouest" },
    central:        { en: "Central Africa", fr: "Afrique centrale" },
    east:           { en: "East Africa", fr: "Afrique de l'Est" },
    showing:        { en: "Showing", fr: "Affichage de" },
    countries_n:    { en: "countries", fr: "pays" },

    tab_factsheet:  { en: "Fact sheet", fr: "Fiche pays" },
    tab_dashboard:  { en: "Dashboard", fr: "Tableau de bord" },
    tab_factcheck:  { en: "Fact-check", fr: "Vérification" },

    fs_themes:      { en: "Six themes driving the review", fr: "Six thèmes structurant la revue" },
    fs_continuity:  { en: "Theme continuity across review cycles", fr: "Continuité thématique entre les cycles" },
    fs_concepts:    { en: "Recurring concepts in the Key Messages", fr: "Concepts récurrents dans les Messages clés" },
    fs_concepts_note:{ en: "Bar length is the number of times the concept is referenced in the Key Messages document.",
                       fr: "La longueur des barres correspond au nombre de références au concept dans le document de Messages clés." },
    fs_download:    { en: "↓ Download fact sheet (PDF)", fr: "↓ Télécharger la fiche (PDF)" },

    db_indicators:  { en: "Headline indicators", fr: "Indicateurs clés" },
    db_indicators_note: { en: "Only figures traceable to the review or a citable source. Where two similar-sounding indicators disagreed, both are shown and labelled.",
                          fr: "Seuls les chiffres rattachables à la revue ou à une source citable. Lorsque deux indicateurs proches divergeaient, les deux sont présentés et explicitement libellés." },
    db_charts:      { en: "Indicators in detail", fr: "Les indicateurs en détail" },
    db_instruments: { en: "Policy instruments", fr: "Instruments de politique publique" },

    fc_title:       { en: "What we corrected", fr: "Ce que nous avons corrigé" },
    fc_intro:       { en: "Every discrepancy found between the fact sheet, the previous dashboard and external sources — and how it was resolved. Published rather than hidden, because a figure a reader cannot check is worth less than one they can.",
                      fr: "Chaque divergence relevée entre la fiche pays, l'ancien tableau de bord et les sources externes — et la manière dont elle a été tranchée. Publiée plutôt que masquée : un chiffre invérifiable vaut moins qu'un chiffre vérifiable." },
    fc_none:        { en: "No discrepancies found for this country.", fr: "Aucune divergence relevée pour ce pays." },
    fc_issue:       { en: "Issue", fr: "Problème" },
    fc_resolution:  { en: "Resolution", fr: "Résolution" },
    sev_contradiction: { en: "Contradiction", fr: "Contradiction" },
    sev_mislabel:      { en: "Mislabelled", fr: "Libellé erroné" },
    sev_unverified:    { en: "Unverified", fr: "Invérifiable" },
    sev_corrected:     { en: "Corrected", fr: "Corrigé" },

    prev_cycle:     { en: "Previous cycle", fr: "Cycle précédent" },
    this_cycle:     { en: "2026 cycle", fr: "Cycle 2026" },
    sustained:      { en: "Sustained", fr: "Maintenu" },
    evolved:        { en: "Evolved", fr: "Évolué" },

    source:         { en: "Source", fr: "Source" },
    show_table:     { en: "Table", fr: "Tableau" },
    hide_table:     { en: "Chart", fr: "Graphique" },
    tbl_series:     { en: "Series", fr: "Série" },
    tbl_period:     { en: "Period", fr: "Période" },
    tbl_value:      { en: "Value", fr: "Valeur" },
    tbl_indicator:  { en: "Indicator", fr: "Indicateur" },

    theme_light:    { en: "Light", fr: "Clair" },
    theme_dark:     { en: "Dark", fr: "Sombre" },

    disclaimer:     { en: "Draft prepared for consultation and review. Content is subject to revision and should not be cited or circulated as final. Data and information are based on documentation prepared by the respective Member States and do not represent the views of the United Nations.",
                      fr: "Document de travail préparé à des fins de consultation et de révision. Son contenu est susceptible d'être modifié et ne doit être ni cité ni diffusé comme version finale. Les données et informations reposent sur la documentation établie par les États Membres concernés et ne représentent pas les vues des Nations Unies." },
    footer:         { en: "Office of the Special Adviser on Africa (OSAA) · United Nations · HLPF July 2026",
                      fr: "Bureau du Conseiller spécial pour l'Afrique (OSAA) · Nations Unies · FPHN juillet 2026" },
    not_found:      { en: "Country not found.", fr: "Pays introuvable." }
  };

  /* Any element with data-i18n gets its text from the UI table. */
  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = I18N.ui(key);
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      el.setAttribute("aria-label", I18N.ui(el.getAttribute("data-i18n-aria")));
    });
  }

  function syncLangButtons() {
    document.querySelectorAll("[data-lang]").forEach(b => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  }

  // ── Theme ─────────────────────────────────────────────────
  const THEME_KEY = "osaa-vnr-theme";
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.textContent = currentTheme() === "dark" ? "☀" : "☾";
  }
  function currentTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function toggleTheme() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
    listeners.forEach(fn => fn(lang)); // charts re-read CSS vars
  }

  // ── Shared header wiring ──────────────────────────────────
  function initChrome() {
    document.documentElement.lang = lang;
    applyTheme(localStorage.getItem(THEME_KEY));
    document.querySelectorAll("[data-lang]").forEach(b => {
      b.addEventListener("click", () => I18N.set(b.dataset.lang));
    });
    const tt = document.querySelector("[data-theme-toggle]");
    if (tt) tt.addEventListener("click", toggleTheme);
    applyStatic();
    syncLangButtons();
  }

  window.I18N = I18N;
  window.VNR.initChrome = initChrome;
  window.VNR.applyStatic = applyStatic;
  window.VNR.regionName = r => I18N.ui(r);

  // SDG brand colours (official UN palette) — used for goal chips only,
  // never as a categorical series colour.
  window.VNR.SDG_COLORS = {
    1: "#E5243B",  2: "#DDA63A",  3: "#4C9F38",  4: "#C5192D",  5: "#FF3A21",
    6: "#26BDE2",  7: "#FCC30B",  8: "#A21942",  9: "#FD6925", 10: "#DD1367",
   11: "#FD9D24", 12: "#BF8B2E", 13: "#3F7E44", 14: "#0A97D9", 15: "#56C02B",
   16: "#00689D", 17: "#19486A"
  };

  window.VNR.SDG_NAMES = {
    1:  { en: "No Poverty", fr: "Pas de pauvreté" },
    2:  { en: "Zero Hunger", fr: "Faim zéro" },
    3:  { en: "Good Health & Well-being", fr: "Bonne santé et bien-être" },
    4:  { en: "Quality Education", fr: "Éducation de qualité" },
    5:  { en: "Gender Equality", fr: "Égalité entre les sexes" },
    6:  { en: "Clean Water & Sanitation", fr: "Eau propre et assainissement" },
    7:  { en: "Affordable & Clean Energy", fr: "Énergie propre et abordable" },
    8:  { en: "Decent Work & Economic Growth", fr: "Travail décent et croissance économique" },
    9:  { en: "Industry, Innovation & Infrastructure", fr: "Industrie, innovation et infrastructure" },
    10: { en: "Reduced Inequalities", fr: "Inégalités réduites" },
    11: { en: "Sustainable Cities & Communities", fr: "Villes et communautés durables" },
    12: { en: "Responsible Consumption & Production", fr: "Consommation et production responsables" },
    13: { en: "Climate Action", fr: "Mesures relatives au climat" },
    14: { en: "Life Below Water", fr: "Vie aquatique" },
    15: { en: "Life on Land", fr: "Vie terrestre" },
    16: { en: "Peace, Justice & Strong Institutions", fr: "Paix, justice et institutions efficaces" },
    17: { en: "Partnerships for the Goals", fr: "Partenariats pour la réalisation des objectifs" }
  };
})();
