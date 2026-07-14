/* Schema + data-integrity validator for the 19 country files.
   Run: node validate.js
   Checks the rules the site promises, so a bad data file fails here
   rather than on a screen at UN Headquarters. */
const fs = require("fs");
const path = require("path");

const SLUGS = require("./assets/js/manifest_slugs.json");
const REGIONS = ["north", "west", "central", "east", "south"];
const SEVERITIES = ["contradiction", "mislabel", "unverified", "corrected"];

const errors = [];
const warns = [];
const countries = [];

global.window = { VNR: { register: c => countries.push(c) } };

for (const slug of SLUGS) {
  const f = path.join(__dirname, "assets/js/data", slug + ".js");
  if (!fs.existsSync(f)) { errors.push(`${slug}: FILE MISSING`); continue; }
  try { eval(fs.readFileSync(f, "utf8")); }
  catch (e) { errors.push(`${slug}: parse error — ${e.message}`); }
}

const isPair = p =>
  p && typeof p === "object" && typeof p.en === "string" && typeof p.fr === "string"
  && p.en.trim() && p.fr.trim();

const bad = (c, msg) => errors.push(`${c.slug}: ${msg}`);
const warn = (c, msg) => warns.push(`${c.slug}: ${msg}`);

for (const c of countries) {
  if (!SLUGS.includes(c.slug)) bad(c, `slug not in manifest`);
  if (!isPair(c.name)) bad(c, "name must be an {en,fr} pair");
  if (!isPair(c.tagline)) bad(c, "tagline must be an {en,fr} pair");
  if (!REGIONS.includes(c.region)) bad(c, `bad region "${c.region}"`);
  if (!c.factsheetPdf || !fs.existsSync(path.join(__dirname, c.factsheetPdf)))
    bad(c, `factsheetPdf missing on disk: ${c.factsheetPdf}`);
  if (!Number.isInteger(c.vnrPrev)) bad(c, "vnrPrev must be a year");

  // Themes — exactly six, per the methodology.
  if (!Array.isArray(c.themes) || c.themes.length !== 6)
    bad(c, `expected 6 themes, got ${c.themes ? c.themes.length : 0}`);
  (c.themes || []).forEach((t, i) => {
    if (!(t.sdg >= 1 && t.sdg <= 17)) bad(c, `theme[${i}] bad sdg ${t.sdg}`);
    if (!isPair(t.title)) bad(c, `theme[${i}] title not bilingual`);
    if (!isPair(t.text)) bad(c, `theme[${i}] text not bilingual`);
  });

  // Continuity
  (c.continuity || []).forEach((r, i) => {
    if (!["sustained", "evolved"].includes(r.status)) bad(c, `continuity[${i}] bad status "${r.status}"`);
    if (!isPair(r.prev)) bad(c, `continuity[${i}] prev not bilingual`);
    if (!isPair(r.now)) bad(c, `continuity[${i}] now not bilingual`);
  });
  if (!c.continuity || !c.continuity.length) bad(c, "no continuity rows");

  // Concepts
  if (!c.concepts || !isPair(c.concepts.caption)) bad(c, "concepts.caption not bilingual");
  const items = (c.concepts && c.concepts.items) || [];
  if (!items.length) bad(c, "no concept items");
  items.forEach((it, i) => {
    if (!isPair(it.label)) bad(c, `concept[${i}] label not bilingual`);
    if (!(typeof it.value === "number" && it.value > 0)) bad(c, `concept[${i}] bad value`);
  });
  for (let i = 1; i < items.length; i++)
    if (items[i].value > items[i - 1].value)
      warn(c, `concepts not sorted descending at index ${i}`);

  // Indicators
  (c.indicators || []).forEach((ind, i) => {
    if (!isPair(ind.label)) bad(c, `indicator[${i}] label not bilingual`);
    if (!isPair(ind.note)) bad(c, `indicator[${i}] note not bilingual`);
    if (typeof ind.value !== "number") bad(c, `indicator[${i}] value not numeric`);
    if (!ind.source) bad(c, `indicator[${i}] MISSING SOURCE`);
    if (!(ind.sdg >= 1 && ind.sdg <= 17)) bad(c, `indicator[${i}] bad sdg`);
  });
  if (!c.indicators || !c.indicators.length) bad(c, "no indicators");

  // Charts — the load-bearing rules
  (c.charts || []).forEach((ch, i) => {
    const id = `chart[${i}] (${ch.id})`;
    if (!["line", "gap", "bars"].includes(ch.type)) bad(c, `${id} bad type "${ch.type}"`);
    if (!isPair(ch.title)) bad(c, `${id} title not bilingual`);
    if (!isPair(ch.insight)) bad(c, `${id} insight not bilingual`);
    if (!ch.source) bad(c, `${id} MISSING SOURCE`);
    if (!ch.unit) bad(c, `${id} MISSING UNIT — a chart carries exactly one unit`);

    if (ch.type === "line") {
      if (!ch.series || !ch.series.length) return bad(c, `${id} no series`);
      const len = ch.series[0].points.length;
      ch.series.forEach((s, si) => {
        if (!isPair(s.label)) bad(c, `${id} series[${si}] label not bilingual`);
        if (!s.points || !s.points.length) bad(c, `${id} series[${si}] no points`);
        // Every series on a line chart shares one x-axis and one y-axis.
        if (s.points.length !== len)
          bad(c, `${id} series[${si}] has ${s.points.length} points, series[0] has ${len} — axes cannot align`);
        (s.points || []).forEach((p, pi) => {
          if (typeof p.y !== "number") bad(c, `${id} series[${si}].points[${pi}].y not numeric`);
          if (p.x == null || p.x === "") bad(c, `${id} series[${si}].points[${pi}].x empty`);
        });
      });
      if (ch.series.length > 5)
        bad(c, `${id} has ${ch.series.length} series — the categorical palette has 5 slots and is never cycled`);
    }
    if (ch.type === "gap" || ch.type === "bars") {
      if (!ch.items || ch.items.length < 2) bad(c, `${id} needs ≥2 items`);
      (ch.items || []).forEach((it, ii) => {
        if (!isPair(it.label)) bad(c, `${id} items[${ii}] label not bilingual`);
        if (typeof it.value !== "number") bad(c, `${id} items[${ii}] value not numeric`);
      });
    }
  });

  // Instruments
  (c.instruments || []).forEach((ins, i) => {
    if (!isPair(ins.name)) bad(c, `instrument[${i}] name not bilingual`);
    if (!isPair(ins.kicker)) bad(c, `instrument[${i}] kicker not bilingual`);
    if (!isPair(ins.text)) bad(c, `instrument[${i}] text not bilingual`);
    if (!ins.source) bad(c, `instrument[${i}] MISSING SOURCE`);
  });

  // Fact-check ledger
  (c.factcheck || []).forEach((f, i) => {
    if (!SEVERITIES.includes(f.severity)) bad(c, `factcheck[${i}] bad severity "${f.severity}"`);
    if (!isPair(f.issue)) bad(c, `factcheck[${i}] issue not bilingual`);
    if (!isPair(f.resolution)) bad(c, `factcheck[${i}] resolution not bilingual`);
  });
  if (!c.factcheck || !c.factcheck.length)
    warn(c, "no fact-check entries — every other country's dashboard had defects; verify this was really clean");

  // French typography: a decimal point inside French prose is an error
  // (French uses a comma) and usually means the text was not really localised.
  // The factcheck ledger is exempt — its French entries legitimately QUOTE the
  // defective English-punctuated source text they are reporting.
  const frBlobs = [];
  const walk = o => {
    if (!o || typeof o !== "object") return;
    if (typeof o.fr === "string" && typeof o.en === "string") frBlobs.push(o.fr);
    Object.values(o).forEach(walk);
  };
  const { factcheck, ...rest } = c;
  walk(rest);
  frBlobs.forEach(s => {
    const m = s.match(/\d+\.\d+\s*%/);
    if (m) warn(c, `French text uses a decimal point in "${m[0]}" — French takes a comma`);
  });
}

console.log(`\nCountries loaded: ${countries.length}/${SLUGS.length}`);
console.log(`Total fact-check entries: ${countries.reduce((n, c) => n + (c.factcheck || []).length, 0)}`);
console.log(`Total charts: ${countries.reduce((n, c) => n + (c.charts || []).length, 0)}`);
console.log(`Total indicators: ${countries.reduce((n, c) => n + (c.indicators || []).length, 0)}`);

if (warns.length) {
  console.log(`\n── WARNINGS (${warns.length}) ──`);
  warns.forEach(w => console.log("  ⚠ " + w));
}
if (errors.length) {
  console.log(`\n── ERRORS (${errors.length}) ──`);
  errors.forEach(e => console.log("  ✗ " + e));
  process.exit(1);
}
console.log("\n✓ All checks pass.\n");
