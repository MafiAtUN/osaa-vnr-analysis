# Rich dashboard schema (Tanzania & Gabon)

The country object keeps everything it already has (`slug`, `name`, `region`,
`tagline`, `themes`, `continuity`, `concepts`, `factsheetPdf` …) — the Fact sheet
tab renders from those and must not be broken.

**Add one new key: `dashboard`.** That drives the rich 7-tab dashboard rendered by
`assets/js/dash.js`. Delete the old `indicators` / `charts` / `instruments` /
`factcheck` keys — they are no longer rendered.

**Every human-readable string is an `{en, fr}` pair. No exceptions.**
French: narrow no-break space (U+202F) before `%` `:` `;` `!` `?` and inside `« »`;
decimal comma (`92,5 %`, never `92.5%`).

```js
dashboard: {
  tabs: [ Tab, Tab, … ]      // 7 tabs
}
```

## Tab

```js
{
  id: "overview",
  label: { en: "Overview & Trends", fr: "Aperçu et tendances" },
  intro: { en: "…", fr: "…" },        // optional lede paragraph
  blocks: [ Block, Block, … ]
}
```

## Blocks

### `metrics` — clickable stat tiles; selecting one swaps the panel beneath
The signature interaction of the original dashboard. 4–6 tiles.
```js
{ type: "metrics", items: [
  { sdg: 7,
    label: { en: "Electricity access", fr: "Accès à l'électricité" },
    value: 85.5, unit: "%",
    sub: { en: "up from 78.4% in 2020", fr: "contre 78,4 % en 2020" },
    panel: {
      sdg: 7,
      title:  { en: "Electricity access and generation capacity, 2020–2025", fr: "…" },
      chart:  { …Chart… },              // optional
      text:   { en: "Narrative — what this actually means.", fr: "…" },
      source: "VNR 2026, Table 4.2"
    } }
] }
```

### `goals` — SDG selector (used for the 2026 Focus Goals tab)
```js
{ type: "goals", items: [
  { sdg: 6,
    headline: { en: "Water access and self-reliance", fr: "…" },
    stats: [ { label: {en,fr}, value: 85.2, unit: "%" }, … ],   // 2–4
    chart: { …Chart… },                                          // optional
    achievement: { en: "What the review achieved.", fr: "…" },
    priority:    { en: "What it names as the priority ahead.", fr: "…" },
    source: "VNR 2026, Table 4.1" }
] }
```

### `triptych` — Gabon only: Le contraste / L'enjeu / L'accélérateur
This is the structure of Gabon's OWN Main Messages. Use it verbatim.
```js
{ type: "triptych", items: [
  { sdg: 6,
    headline: { en: "…", fr: "…" },
    chart: { …Chart… },                 // optional
    contrast:    { en: "…", fr: "Le Gabon affronte un stress hydrique paradoxal…" },
    stake:       { en: "…", fr: "…" },
    accelerator: { en: "…", fr: "…" },
    source: "ENV 2026 · Messages clés" }
] }
```

### `table` — indicator table (baseline → latest → assessment)
The VNR reports are full of these. Transcribe them.
```js
{ type: "table",
  title: { en: "SDG 7 — priority performance indicators", fr: "…" },
  rows: [
    { label: { en: "Electricity access", fr: "Accès à l'électricité" },
      from: 78.4, fromYear: "2020", to: 85.5, toYear: "2025", unit: "%",
      dir: "up",                                    // up | down | flat
      status: { en: "Improving; last-mile connections remain", fr: "…" } }
  ],
  source: "VNR 2026, Table 4.2" }
```

### `cards` — narrative cards (policy instruments, financing pillars)
```js
{ type: "cards", items: [
  { name:   { en: "Julius Nyerere Hydropower Plant", fr: "…" },
    kicker: { en: "2,115 MW", fr: "2 115 MW" },
    stats:  [ { label: {en,fr}, value: 4504.9, unit: " MW" } ],   // optional
    text:   { en: "…", fr: "…" },
    source: "VNR 2026" }
] }
```

### `stats` — a static row of figures
```js
{ type: "stats", items: [
  { sdg: 17, label: {en,fr}, value: 51.0, unit: "%", note: {en,fr}, source: "…" }
] }
```

### `chart` — a full-width standalone chart card
```js
{ type: "chart", chart: { …Chart… } }
```

### `prose` — a titled narrative block
```js
{ type: "prose", title: {en,fr}, text: {en,fr}, source: "…" }
```

## Chart

Three types. **One unit per chart. Never two. No dual axes, ever.**

```js
// change over time
{ type: "line", sdg: 7, unit: "%",
  title: { en:"…", fr:"…" },
  series: [ { key:"access", label:{en,fr},
              points:[ {x:"2020", y:78.4}, {x:"2025", y:85.5} ] } ],   // ≤5 series
  insight: { en:"What the reader should take away.", fr:"…" },        // omit inside a metrics panel
  source: "…" }

// contrasting values on one scale (urban vs rural, reach vs connection)
{ type: "gap", sdg: 6, unit: "%",
  title: {en,fr},
  items: [ { label:{en,fr}, value: 83, emphasis:false },
           { label:{en,fr}, value: 57, emphasis:true } ],   // emphasis = the one that matters
  insight: {en,fr}, source: "…" }

// ranked magnitude, one series, one colour
{ type: "bars", sdg: 9, unit: " MW", title:{en,fr}, items:[…], insight:{en,fr}, source:"…" }
```

**All series in a `line` chart must have the same number of points** (they share one
x-axis). If an indicator has only two documented years, plot two points — do NOT
interpolate a third to make the line look richer.

## Hard rules

1. **The REPORT wins.** Where the report, the Main Messages brief and OSAA's fact
   sheet disagree, use the report's figure and say so in the narrative.
2. **Never invent a number.** No figure without a source.
3. **Never interpolate.** Plot only documented points.
4. **Projections must be labelled.** If a figure is a 2025 projection, say
   "(proj. 2025)" in the label or the `sub`/`note` — never present it as an actual.
5. Every block needs a `source`.
