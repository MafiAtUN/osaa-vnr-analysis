/* ============================================================
   OSAA VNR 2026 — core: registry, i18n, theme.
   No dependencies, no CDN. Works from file:// and GitHub Pages.
   ============================================================ */
(function () {
  "use strict";

  // ── Country registry ──────────────────────────────────────
  const COUNTRIES = [];
  const BY_SLUG = Object.create(null);
  const FAQ = Object.create(null);

  window.VNR = {
    register(c) { COUNTRIES.push(c); BY_SLUG[c.slug] = c; },
    all() { return COUNTRIES.slice().sort((a, b) => a.name.en.localeCompare(b.name.en)); },
    get(slug) { return BY_SLUG[slug] || null; },

    /* The FAQ registry lives here rather than in faq.js because the data files
       are document.write()n by manifest.js and therefore execute BEFORE any
       renderer script has loaded. Only some countries have an FAQ; the tab is
       hidden for the rest. manifest.js writes every country file before any
       FAQ file, so the country is always present by the time this runs. */
    registerFaq(block) {
      FAQ[block.slug] = block;
      const c = BY_SLUG[block.slug];
      if (c) c.faq = block;
    },
    getFaq(slug) { return FAQ[slug] || null; }
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
    logo_alt:       { en: "United Nations Office of the Special Adviser on Africa", fr: "Nations Unies · Bureau du Conseiller spécial pour l'Afrique" },
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
    tab_faq:        { en: "FAQ", fr: "FAQ" },

    /* Provenance. Every figure on this site comes from a country's own VNR
       submission to the HLPF — not from OSAA's estimates and not from a
       third-party database. That is the single most important thing a reader
       needs to know before quoting anything here, so it is stated on the page
       rather than buried in the methodology. */
    prov_country:   { en: "Source: figures on this page are drawn from the country's own 2026 Voluntary National Review (VNR) submission to the High-Level Political Forum.",
                      fr: "Source : les chiffres de cette page proviennent du rapport national volontaire (RNV) 2026 soumis par le pays lui-même au Forum politique de haut niveau." },
    prov_home:      { en: "Source: every figure on this site is drawn from the 2026 Voluntary National Review (VNR) reports submitted by Member States to the High-Level Political Forum.",
                      fr: "Source : tous les chiffres de ce site proviennent des rapports nationaux volontaires (RNV) 2026 soumis par les États Membres au Forum politique de haut niveau." },
    prov_faq:       { en: "Every answer below is drawn from the country's 2026 Voluntary National Review submission, and cites the report section and page it rests on.",
                      fr: "Chaque réponse ci-dessous est tirée du rapport national volontaire 2026 soumis par le pays et cite la section et la page du rapport dont elle procède." },
    prov_footer:    { en: "Source: 2026 Voluntary National Review (VNR) reports submitted by Member States to the High-Level Political Forum.",
                      fr: "Source : rapports nationaux volontaires (RNV) 2026 soumis par les États Membres au Forum politique de haut niveau." },

    // ── FAQ ──
    faq_title:      { en: "Questions and answers", fr: "Questions et réponses" },
    faq_intro:      { en: "Briefing-ready answers drawn from the country's Voluntary National Review, each one traced to the report section and page it rests on. Written for use in OSAA briefs, talking points and delegation Q&A.",
                      fr: "Des réponses prêtes à l'emploi tirées du rapport national volontaire du pays, chacune rattachée à la section et à la page du rapport dont elle procède. Conçues pour les notes de synthèse, les éléments de langage et les questions-réponses des délégations de l'OSAA." },
    faq_search_ph:  { en: "Search questions, evidence, figures…", fr: "Rechercher : questions, données, chiffres…" },
    faq_search_lbl: { en: "Search the FAQ", fr: "Rechercher dans la FAQ" },
    faq_all:        { en: "All", fr: "Tous" },
    faq_expand:     { en: "Expand all", fr: "Tout déplier" },
    faq_collapse:   { en: "Collapse all", fr: "Tout replier" },
    faq_showing:    { en: "Showing", fr: "Affichage de" },
    faq_of:         { en: "of", fr: "sur" },
    faq_questions:  { en: "questions", fr: "questions" },
    faq_none:       { en: "No question matches this search.", fr: "Aucune question ne correspond à cette recherche." },
    faq_none_hint:  { en: "Try a broader term, or clear the filters.", fr: "Essayez un terme plus large ou réinitialisez les filtres." },
    faq_clear:      { en: "Clear filters", fr: "Réinitialiser" },
    faq_answer:     { en: "Suggested OSAA answer", fr: "Réponse suggérée de l'OSAA" },
    faq_evidence:   { en: "Key evidence and figures", fr: "Données et chiffres clés" },
    faq_policy:     { en: "Policy implications and best practices", fr: "Implications pour l'action et bonnes pratiques" },
    faq_sources:    { en: "Sources", fr: "Sources" },
    faq_correction: { en: "Correction to the OSAA workbook", fr: "Correction apportée au classeur de l'OSAA" },
    faq_copy:       { en: "Copy", fr: "Copier" },
    faq_copied:     { en: "Copied", fr: "Copié" },
    faq_copy_lbl:   { en: "Copy this question and answer", fr: "Copier cette question et sa réponse" },
    faq_refs_title: { en: "Reference index", fr: "Index des sources" },
    faq_refs_note:  { en: "Every answer above cites one or more of these. Page numbers are given both as the PDF page and as the page printed on the report itself.",
                      fr: "Chaque réponse ci-dessus renvoie à une ou plusieurs de ces sources. La pagination est donnée à la fois en page PDF et en page imprimée sur le rapport." },
    faq_ref_doc:    { en: "Source document", fr: "Document source" },
    faq_ref_pdf:    { en: "PDF page", fr: "Page PDF" },
    faq_ref_print:  { en: "Report page", fr: "Page du rapport" },
    faq_ref_section:{ en: "Section", fr: "Section" },
    faq_ref_covers: { en: "Evidence covered", fr: "Éléments couverts" },

    fs_finding:     { en: "The finding", fr: "Le constat" },
    fs_lede_note:   { en: "Figures below are the review's own, each carried through to the dashboard with its source.",
                      fr: "Les chiffres ci-dessous sont ceux de la revue, repris tels quels dans le tableau de bord avec leur source." },
    fs_goal:        { en: "Goal", fr: "Objectif" },
    fs_rank:        { en: "Rank", fr: "Rang" },
    fs_mentions:    { en: "Mentions", fr: "Occurrences" },
    fs_concept:     { en: "Concept", fr: "Concept" },

    // Rich dashboard blocks
    achievement:    { en: "Achievement", fr: "Réalisation" },
    priority:       { en: "Priority ahead", fr: "Priorité à venir" },
    contrast:       { en: "The contrast", fr: "Le contraste" },
    stake:          { en: "What is at stake", fr: "L'enjeu" },
    accelerator:    { en: "The accelerator", fr: "L'accélérateur" },
    baseline:       { en: "Baseline", fr: "Référence" },
    latest:         { en: "Latest", fr: "Dernier relevé" },
    assessment:     { en: "Assessment", fr: "Appréciation" },

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
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      el.setAttribute("alt", I18N.ui(el.getAttribute("data-i18n-alt")));
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

  /* Readable ink for text sitting ON an SDG colour.
     The brand palette spans #FCC30B (SDG 7) to #19486A (SDG 17); a fixed white
     foreground — which is what the old cards used — fails contrast badly on the
     yellows and light greens. Pick whichever of white/near-black actually wins
     the WCAG contrast ratio against the swatch. */
  const srgb = ch => (ch <= 0.03928 ? ch / 12.92 : Math.pow((ch + 0.055) / 1.055, 2.4));
  function luminance(hex) {
    const n = parseInt(hex.slice(1), 16);
    const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(v => srgb(v / 255));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  const ratio = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  const INK_ON_LIGHT = "#10202E";
  window.VNR.sdgInk = function (sdg) {
    const hex = window.VNR.SDG_COLORS[sdg];
    if (!hex) return "#fff";
    const L = luminance(hex);
    return ratio(L, luminance("#FFFFFF")) >= ratio(L, luminance(INK_ON_LIGHT))
      ? "#fff" : INK_ON_LIGHT;
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
