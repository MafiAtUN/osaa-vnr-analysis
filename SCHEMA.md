# Country data schema — OSAA VNR 2026

Every country is one file: `site/assets/js/data/<slug>.js`, which does:

```js
window.VNR.register({ /* the object below */ });
```

**Every human-readable string is a `{en, fr}` pair. No exceptions.**
Where the source text is French, `fr` is the source wording and `en` is a faithful
translation. Where the source is English, the reverse. Translations must read as
native UN register, not machine output.

## The object

```js
{
  slug: "tanzania",              // kebab-case, matches filename & ?c= param
  iso: "TZ",
  name: { en: "Tanzania", fr: "Tanzanie" },
  region: "east",                // north | west | central | east | south
  vnrPrev: 2023,                 // year of previous VNR
  vnrCycles: [2023, 2026],       // all cycles named on the factsheet
  langs: ["EN", "SW"],           // languages of submission
  sourceLang: "en",              // language the factsheet was authored in
  factsheetPdf: "factsheets/tanzania.pdf",

  tagline: {
    en: "Accelerating the 2030 Agenda through whole-of-nation PLUS action, guided by Tanzania Development Vision (DIRA) 2050.",
    fr: "Accélérer l'Agenda 2030 par une action « whole-of-nation PLUS », guidée par la Vision de développement de la Tanzanie (DIRA) 2050."
  },

  // ── FACTSHEET SECTION 1: the six themes ──
  // Exactly 6. `sdg` is the SDG number. Text is verbatim from the factsheet
  // (translated into the other language).
  themes: [
    { sdg: 6,
      title: { en: "Water Access & Self-Reliance", fr: "Accès à l'eau et autonomie" },
      text:  { en: "Rural water coverage rose to 85% and regional centres to 92%, with non-revenue water and sanitation flagged as priorities for acceleration.",
               fr: "La couverture rurale en eau a atteint 85 % et les centres régionaux 92 %, l'eau non facturée et l'assainissement étant désignés comme priorités d'accélération." } },
    // … 5 more
  ],

  // ── FACTSHEET SECTION 2: theme continuity ──
  // `status` is "sustained" | "evolved" (the only two the methodology defines).
  continuity: [
    { prev:   { en: "Clean Water & Electricity Access Gains", fr: "…" },
      status: "sustained",
      now:    { en: "Energy Security & Water Self-Reliance",  fr: "…" } },
    // … typically 5 rows
  ],

  // ── FACTSHEET SECTION 3: recurring concepts ──
  // `value` = frequency count from the Key Messages document. Keep the source
  // counts EXACTLY. Bars are rendered strictly proportional to value.
  concepts: {
    caption: { en: "Tanzania's message centres on transformation, climate resilience and fiscal self-reliance under Dira 2050.", fr: "…" },
    items: [
      { label: { en: "whole-of-nation PLUS", fr: "approche « whole-of-nation PLUS »" }, value: 10 },
      // … 9 total, descending by value
    ]
  },

  // ── DASHBOARD: headline indicators (stat tiles) ──
  // ONLY numbers that survive fact-checking. Each carries a precise label —
  // ambiguity between similar-sounding indicators is what broke the old build.
  // `note` disambiguates. `sdg` links it to a goal. `source` is required.
  indicators: [
    { id: "elec_access",
      sdg: 7,
      label: { en: "Electricity access (any source)", fr: "Accès à l'électricité (toutes sources)" },
      value: 86, unit: "%",
      note:  { en: "Includes grid, mini-grid and off-grid solar.", fr: "Inclut réseau, mini-réseaux et solaire hors réseau." },
      source: "VNR 2026 · NBS Energy Access Survey" },
    // …
  ],

  // ── DASHBOARD: charts ──
  // type: "line"  → change over time. series[].points = [{x, y}]. ONE y-axis, always.
  // type: "gap"   → two contrasting values (urban vs rural). Purpose-built.
  // type: "bars"  → ranked magnitude, one series, one colour.
  // Every chart states its own `insight` — what the reader should take away.
  // NEVER two different units on one chart.
  charts: [
    { id: "elec_gap",
      type: "gap",
      sdg: 7,
      title:   { en: "Grid reach vs. household connection, 2025", fr: "…" },
      unit: "%",
      items: [
        { label: { en: "Villages reached by the grid", fr: "…" }, value: 100 },
        { label: { en: "Households connected to the grid", fr: "…" }, value: 62.1 },
        { label: { en: "Electricity access, any source", fr: "…" }, value: 86 }
      ],
      insight: { en: "Every village now has grid infrastructure, but only 62% of households are connected to it — the gap between reach and connection is Tanzania's central energy challenge.", fr: "…" },
      source: "VNR 2026 · NBS" },

    { id: "revenue",
      type: "line",
      sdg: 17,
      title: { en: "Domestic revenue and tax revenue, % of GDP", fr: "…" },
      unit: "% of GDP",
      series: [
        { key: "domestic", label: { en: "Domestic revenue", fr: "Recettes intérieures" },
          points: [ {x: "2020/21", y: 14.2}, {x: "2024/25", y: 16.4} ] },
        { key: "tax",      label: { en: "Tax revenue", fr: "Recettes fiscales" },
          points: [ {x: "2020/21", y: 11.2}, {x: "2024/25", y: 13.3} ] }
      ],
      insight: { en: "…", fr: "…" },
      source: "VNR 2026, Table 4.5 · UN SDG Database 17.1.1" }
  ],

  // ── Narrative blocks for the dashboard (policy instruments etc.) ──
  instruments: [
    { name:  { en: "Dira 2050 & FYDP IV", fr: "Dira 2050 et FYDP IV" },
      kicker:{ en: "national vision", fr: "vision nationale" },
      text:  { en: "…", fr: "…" },
      source: "VNR 2026" }
    // 4–6 of these
  ],

  // ── Fact-check ledger — SHOWN ON THE PAGE. This is the point of the exercise. ──
  // Every discrepancy found between the old dashboard, the factsheet, and external
  // sources, and how it was resolved. Empty array only if genuinely nothing found.
  factcheck: [
    { issue: { en: "The old dashboard headlined 95.74% \"budget on own taxes\" while the factsheet reported 78% budget self-reliance.", fr: "…" },
      resolution: { en: "78% is the share of the budget financed by domestic revenue (Tanzania's official 2026/27 figure is 74.2%). The 95.74% figure measured a narrower base and is not comparable; it has been dropped.", fr: "…" },
      severity: "contradiction" }   // contradiction | mislabel | unverified | corrected
  ]
}
```

## The FAQ block — `site/assets/js/data/faq/<slug>.js`

The FAQ is the country page's third section, alongside the fact sheet and the
dashboard. It lives in its own file, not in the country object, because it is
long and only some countries have one — at the time of writing, Gabon and
Tanzania, the two countries covered by
`data/OSAA_HLPF_2026_Gabon_Tanzania_FAQ.xlsx`.

A country gets an FAQ tab **if and only if** a file exists here. There is nothing
else to switch on: `build-manifest.js` picks the file up, and `country.js` hides
the tab when there is no block. These files are GENERATED from the workbook —
edit the workbook and regenerate, rather than hand-editing the output.

```js
window.VNR.registerFaq({
  slug: "gabon",                         // must match an existing country

  // The workbook's themes, in its own order. Used for the filter chips and to
  // group the list.
  themes: [
    { key: "sdg-progress", label: { en: "SDG progress and gaps", fr: "Progrès et lacunes au titre des ODD" } }
    // … 6 in total
  ],

  entries: [
    { id: "GAB-01",                      // the workbook's FAQ ID; also the deep link (#faq/GAB-01)
      theme: "sdg-progress",             // must match a themes[].key
      q:        { en: "…", fr: "…" },    // the question
      a:        { en: "…", fr: "…" },    // the suggested OSAA answer — the text a drafter lifts
      evidence: { en: "…", fr: "…" },    // key evidence and figures; figures are auto-pilled on render

      // Policy implications arrive as ONE sentence in the workbook, in one of
      // two shapes. A list of imperative actions becomes bullets; a sentence
      // carrying an embedded noun list would be destroyed by splitting, so it
      // stays prose. Exactly one of these two forms, never both.
      policy: { kind: "list",  items: [ { en: "…", fr: "…" } ] },
      //   or: { kind: "prose", text:  { en: "…", fr: "…" } },

      refs: ["GAB-R01", "GAB-R02"],      // every id must exist in refs[] below
      basis: { key: "direct",            // direct | synthesis
               label: { en: "Direct evidence and synthesis", fr: "Preuves directes et synthèse" } },

      // OPTIONAL. Present only where `evidence` departs from the OSAA workbook.
      // Rendered as a visible callout on the entry and carried into the copied
      // text, so a figure that differs from the workbook on the reader's desk
      // never travels without the reason why.
      correction: { en: "…", fr: "…" } }
  ],

  // The reference index, rendered as section 02 and jumped to when a reader
  // clicks a source chip. This is what makes an answer checkable.
  refs: [
    { id: "GAB-R01",
      doc: "VNR 2026 Gabon Report.pdf",
      pdfPages: "8–9",                   // page in the PDF
      printPages: "7–8",                 // page printed on the report itself
      section: { en: "Messages clés", fr: "Messages clés" },
      covers:  { en: "…", fr: "…" } }
  ]
});
```

`basis` matters editorially: **direct** means the report states or quantifies the
answer, **synthesis** means OSAA constructed it from several findings. Anyone
briefing a minister needs to know which of the two they are holding, so the page
labels every answer with it.

### Why some FAQ entries carry a `correction`

The workbook took its figures from the VNR reports' **chapter tables**. Those
tables repeatedly print the Statistical Annex's **2024** value under a **"2025"**
heading. Verified on three separate Tanzanian indicators:

| Indicator | Annex 2024 | Annex 2025 | Chapter table / workbook says |
|---|---|---|---|
| Regional-centre water | 91.6 | **92.5** | "91.6% in 2025" |
| Electricity access | 85.5 | **86.2** | "85.5 in 2025" |
| Renewables (electricity) | 43.1 | **76.6** | "80% of the mix" (in no source) |

The dashboards are built on the **annex**, so the annex wins — otherwise the FAQ
tab and the Dashboard tab would show different numbers for the same indicator,
one click apart. Annex Table A6 also shows sewer connectivity **falling from
13.0% to 5.6%**, which the report's own status column rates *Regressing*; the
workbook records it as having "remained 13%". The direction of travel is the
finding, so it is not quietly dropped.

Every such deviation is published on the entry via `correction`. Never correct a
figure silently.

## Hard rules

1. **Never invent a number.** If the old dashboard has a figure you cannot trace to
   the factsheet or a citable source, either drop it or list it in `factcheck` with
   `severity: "unverified"`. It is better to show fewer, solid numbers.
2. **Never put two units on one chart.** No dual axes, ever.
3. **Concept-frequency bars use the source counts verbatim**, and bar length is
   strictly proportional to the count.
4. **Labels must disambiguate.** "Electricity access" and "grid connection" are
   different indicators; say which one you mean, every time.
5. **Every chart and indicator needs a `source`.** Every FAQ answer needs a `refs`
   entry that resolves to a page of the report. An answer a reader cannot look up
   is an assertion, not evidence.
6. French uses the narrow no-break space before `%`, `:`, `;`, `!`, `?` and inside
   `« »` — write `92,8 %`, not `92.8%`. French decimals use a comma.
7. **A figure must survive translation.** `validate.js` compares the digits in the
   English and French of every FAQ answer and evidence block and fails on a
   mismatch. A dropped digit in a briefing note is the failure with consequences.
