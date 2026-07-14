# Africa VNR Analysis 2026 — OSAA

Bilingual (EN/FR) analysis of the **19 African Voluntary National Reviews** presented at the
2026 High-Level Political Forum, prepared for the United Nations Office of the Special Adviser
on Africa (OSAA).

**Live site:** https://mafiatun.github.io/osaa-vnr-analysis/

Each country has three views:

| View | What it is |
|---|---|
| **Fact sheet** | The one-page analysis OSAA submitted to the HLPF — six SDG themes, theme continuity across review cycles, and the recurring concepts in the country's Key Messages. Downloadable as PDF. |
| **Dashboard** | The evidence beneath the fact sheet — headline indicators, time series, and the national policy instruments they rest on. |
| **Fact-check** | Every discrepancy found between the fact sheet, the previous dashboard and external sources — published, not hidden. |

## Why the fact-check tab exists

The dashboards this project replaces were cloned from a single template, and the cloning left
real damage. Some examples that are now corrected and documented in-app:

- **Tanzania** headlined electricity access at `62.1%` while its own fact sheet said `86%`.
  These measure different things (grid connection vs. access from any source) and neither page
  said which — but the `62.1%` was also simply wrong. The VNR report puts household grid
  connectivity at `52.1%`; `62.1%` appears in no source. Both indicators are now shown at their
  correct values, precisely labelled, and the gap between them is presented as the finding.
- **Tanzania**'s chapter tables print the Statistical Annex's **2024** value under a **"2025"**
  heading — confirmed on regional-centre water (`91.6` is 2024; 2025 is `92.5`), electricity
  access (`85.5` is 2024; 2025 is `86.2`) and renewables. The dashboards follow the annex, and
  the FAQ says so wherever it departs from the OSAA workbook, which followed the chapter tables.
  Annex Table A6 also shows sewer connectivity **falling from `13.0%` to `5.6%`** — the report's
  own status column rates it *Regressing*, where the workbook records it as flat at `13%`.
- **Tanzania** headlined "budget on own taxes — `95.74%`" against a fact sheet reporting `78%`
  budget self-reliance. The `78%` figure is the defensible one (Tanzania's own 2026/27 Budget
  Speech puts the domestic share at 74.2%); `95.74%` measured a narrower base and was dropped.
- **Gabon**'s external-debt chart carried the legend *"GDP growth (%) / Inflation (%)"*. Its
  water-access chart set *"Urban"* against *"Rural electrification"*. Its revenue tile said
  `15.2%` of GDP while its own chart said `~21%` and the IMF says `23.4%`.
- **Guinea-Bissau**'s SDG 8 theme described **Guinea's** Simandou iron-ore project.
- The concept-frequency bars were **not proportional to their values** (10 → 130px but 6 → 81px,
  where 6 should have been 78px), visually flattening real differences.
- The landing page advertised *"2 Southern African countries"* while showing none, and linked
  DR Congo to Egypt's page in the PDF.

## Structure

```
index.html            Landing page — 19 countries, region filter
country.html          ?c=<slug> — Fact sheet · Dashboard · Fact-check
methodology.html      How the fact sheets and dashboards were built
assets/
  css/site.css        Design system; light + dark
  js/core.js          Country registry, i18n, theme
  js/charts.js        SVG chart library (line, gap, concept bars)
  js/manifest.js      The 19 countries — single source of truth
  js/home.js          Landing controller
  js/country.js       Country-page controller
  js/data/<slug>.js   One file per country; every string is an {en, fr} pair
factsheets/<slug>.pdf One-page PDF per country, split from the source
SCHEMA.md             The country data contract
```

Adding a country means adding one data file and one line in `manifest.js`. No HTML changes.

## Data rules

These are enforced in the code, not just in review:

1. **No number without a source.** Untraceable figures are dropped, or kept and flagged
   `unverified` on the Fact-check tab.
2. **No two units on one axis.** There are no dual-axis charts anywhere on this site — they
   invent correlations that are not in the data.
3. **Labels must disambiguate.** Where two similar-sounding indicators measure different
   things, both are shown and each is precisely named.
4. **Marks are proportional.** Bar length is value ÷ max, exactly.
5. **Every chart has a table view.** No value is reachable only by hovering.

## Colour

The categorical palette is validated programmatically — against a lightness band, a chroma
floor, adjacent-pair separation under simulated colour-vision deficiency, and contrast with the
page surface — in **both** light and dark modes. All six checks pass in both.

| Slot | Light | Dark |
|---|---|---|
| 1 Blue | `#1F6FB2` | `#4F9AD9` |
| 2 Green | `#0E8F5E` | `#199E70` |
| 3 Amber | `#B0791F` | `#B98520` |
| 4 Clay | `#B4533A` | `#D0674B` |
| 5 Violet | `#6B3FA8` | `#9585DE` |

Colour never carries meaning alone: every series is named in a legend and, where it matters,
labelled directly.

## Running locally

No build step, no dependencies, no CDN for code.

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Credits

Fact sheets prepared by the Intergovernmental Support Team (IGS) of OSAA. Compilation and
analysis by Omotola Bamidele, with contributions from Kounady Ouattara, under the guidance of
Utku Teksoz.

## Disclaimer

Draft prepared for consultation and review. Content is subject to revision and should not be
cited or circulated as a final version. Data and information are based entirely on documentation
prepared by the respective Member States and do not represent the views of the United Nations or
any of its affiliates.
