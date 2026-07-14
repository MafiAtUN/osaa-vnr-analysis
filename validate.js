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
const faqBlocks = [];

global.window = {
  VNR: {
    register: c => countries.push(c),
    registerFaq: b => {
      faqBlocks.push(b);
      const c = countries.find(x => x.slug === b.slug);
      if (c) c.faq = b;                       // so the FR typography walk sees it too
      else errors.push(`faq/${b.slug}: no such country`);
    }
  }
};

for (const slug of SLUGS) {
  const f = path.join(__dirname, "assets/js/data", slug + ".js");
  if (!fs.existsSync(f)) { errors.push(`${slug}: FILE MISSING`); continue; }
  try { eval(fs.readFileSync(f, "utf8")); }
  catch (e) { errors.push(`${slug}: parse error — ${e.message}`); }
}

/* FAQ files are optional and load AFTER the countries, exactly as the browser
   loads them — an FAQ attaches itself to a country that must already exist. */
const faqDir = path.join(__dirname, "assets/js/data/faq");
const faqFiles = fs.existsSync(faqDir)
  ? fs.readdirSync(faqDir).filter(f => f.endsWith(".js")).sort()
  : [];
for (const file of faqFiles) {
  try { eval(fs.readFileSync(path.join(faqDir, file), "utf8")); }
  catch (e) { errors.push(`faq/${file}: parse error — ${e.message}`); }
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
    // Optional surfaced metric. It must be a figure the theme text already
    // states — the card lifts it out of the prose, it does not add to it.
    if (t.metric) {
      if (typeof t.metric.value !== "number") bad(c, `theme[${i}] metric.value not numeric`);
      if (!isPair(t.metric.label)) bad(c, `theme[${i}] metric.label not bilingual`);
      if (typeof t.metric.unit !== "string") bad(c, `theme[${i}] metric.unit must be a string ("" for a bare count)`);
    }
  });

  // Lede (optional). Its figures are references into `indicators`; a lede may
  // not introduce a number of its own, which is the whole point of the ref.
  if (c.lede) {
    if (!isPair(c.lede.statement)) bad(c, "lede.statement not bilingual");
    const figs = c.lede.figures || [];
    if (figs.length !== 3) bad(c, `lede.figures: expected 3, got ${figs.length}`);
    const ids = new Set((c.indicators || []).map(i => i.id));
    figs.forEach((f, i) => {
      if (!ids.has(f.ref)) bad(c, `lede.figures[${i}] ref "${f.ref}" matches no indicator id`);
      if (f.tone && !["primary", "counter"].includes(f.tone))
        bad(c, `lede.figures[${i}] bad tone "${f.tone}"`);
    });
    // Unbalanced asterisks would render a stray "*" on the page.
    ["en", "fr"].forEach(l => {
      const n = (c.lede.statement[l].match(/\*/g) || []).length;
      if (n % 2) bad(c, `lede.statement.${l} has an unclosed * emphasis marker`);
    });
  }

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

  const RICH = !!c.dashboard;

  // Indicators (legacy shape only)
  (c.indicators || []).forEach((ind, i) => {
    if (!isPair(ind.label)) bad(c, `indicator[${i}] label not bilingual`);
    if (!isPair(ind.note)) bad(c, `indicator[${i}] note not bilingual`);
    if (typeof ind.value !== "number") bad(c, `indicator[${i}] value not numeric`);
    if (!ind.source) bad(c, `indicator[${i}] MISSING SOURCE`);
    if (!(ind.sdg >= 1 && ind.sdg <= 17)) bad(c, `indicator[${i}] bad sdg`);
  });
  if (!RICH && (!c.indicators || !c.indicators.length)) bad(c, "no indicators");

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

  // ── FAQ (optional; only Gabon and Tanzania carry one) ──
  if (c.faq) {
    const F = c.faq;
    const themeKeys = new Set((F.themes || []).map(t => t.key));
    const refIds = new Set((F.refs || []).map(r => r.id));

    if (!themeKeys.size) bad(c, "faq: no themes");
    if (!refIds.size) bad(c, "faq: no reference index");
    (F.themes || []).forEach((t, i) => {
      if (!t.key) bad(c, `faq theme[${i}] has no key`);
      if (!isPair(t.label)) bad(c, `faq theme[${i}] label not bilingual`);
    });

    (F.refs || []).forEach((r, i) => {
      if (!r.id) bad(c, `faq ref[${i}] has no id`);
      if (!r.doc) bad(c, `faq ref[${r.id || i}] MISSING SOURCE DOCUMENT`);
      // The page numbers are the whole point of the index: an answer a reader
      // cannot look up in the report is worth no more than an assertion.
      if (!r.pdfPages) bad(c, `faq ref[${r.id || i}] missing pdfPages`);
      if (!r.printPages) bad(c, `faq ref[${r.id || i}] missing printPages`);
      if (!isPair(r.section)) bad(c, `faq ref[${r.id || i}] section not bilingual`);
      if (!isPair(r.covers)) bad(c, `faq ref[${r.id || i}] covers not bilingual`);
    });

    if (!(F.entries || []).length) bad(c, "faq: no entries");
    (F.entries || []).forEach((e, i) => {
      const id = e.id || `entry[${i}]`;
      if (!e.id) bad(c, `faq entry[${i}] has no id`);
      if (!themeKeys.has(e.theme)) bad(c, `faq ${id}: unknown theme "${e.theme}"`);
      if (!isPair(e.q)) bad(c, `faq ${id}: question not bilingual`);
      if (!isPair(e.a)) bad(c, `faq ${id}: answer not bilingual`);
      if (!isPair(e.evidence)) bad(c, `faq ${id}: evidence not bilingual`);

      // Policy is one of exactly two shapes — a list of actions, or prose.
      const p = e.policy || {};
      if (p.kind === "list") {
        if (!(p.items || []).length) bad(c, `faq ${id}: empty policy list`);
        (p.items || []).forEach((it, j) => {
          if (!isPair(it)) bad(c, `faq ${id}: policy item[${j}] not bilingual`);
        });
      } else if (p.kind === "prose") {
        if (!isPair(p.text)) bad(c, `faq ${id}: policy prose not bilingual`);
      } else {
        bad(c, `faq ${id}: policy.kind must be "list" or "prose", got "${p.kind}"`);
      }

      if (!["direct", "synthesis"].includes((e.basis || {}).key))
        bad(c, `faq ${id}: bad evidence basis "${(e.basis || {}).key}"`);
      if (!isPair((e.basis || {}).label)) bad(c, `faq ${id}: basis label not bilingual`);

      // A source chip that resolves to nothing is a dead citation.
      if (!(e.refs || []).length) bad(c, `faq ${id}: NO SOURCE REFERENCE`);
      (e.refs || []).forEach(rid => {
        if (!refIds.has(rid)) bad(c, `faq ${id}: cites unknown reference "${rid}"`);
      });

      // Every figure in the English must survive into the French. A dropped
      // digit in a briefing note is the failure with actual consequences.
      ["a", "evidence"].forEach(field => {
        if (!isPair(e[field])) return;
        const digits = s => (s.match(/\d[\d.,   ]*\d|\d/g) || [])
          .map(x => x.replace(/\D/g, "")).sort();
        const en = digits(e[field].en), fr = digits(e[field].fr);
        if (en.join("|") !== fr.join("|"))
          bad(c, `faq ${id}.${field}: figures differ between EN and FR\n`
                 + `        en: ${en.join(", ") || "—"}\n`
                 + `        fr: ${fr.join(", ") || "—"}`);
      });
    });

    // Ids must be unique, or a deep link (#faq/GAB-01) is ambiguous.
    const seen = new Set();
    (F.entries || []).forEach(e => {
      if (seen.has(e.id)) bad(c, `faq: duplicate entry id "${e.id}"`);
      seen.add(e.id);
    });

    // An unused reference is not an error, but it usually means an entry lost
    // its citation somewhere between the workbook and here.
    const cited = new Set((F.entries || []).flatMap(e => e.refs || []));
    (F.refs || []).forEach(r => {
      if (!cited.has(r.id)) warn(c, `faq: reference ${r.id} is never cited`);
    });
  }


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
console.log(`FAQ: ${faqBlocks.length} countries, `
  + `${faqBlocks.reduce((n, f) => n + (f.entries || []).length, 0)} entries, `
  + `${faqBlocks.reduce((n, f) => n + (f.refs || []).length, 0)} references`);
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

/* ── Rich dashboard validation (Tanzania, Gabon) ──────────────
   Enforces the same load-bearing rules on the 7-tab structure:
   one unit per chart, bilingual everywhere, a source on every block,
   equal point counts across series, no colour slot cycling. */
const BLOCK_TYPES = ["metrics", "chart", "goals", "triptych", "cards", "stats", "prose", "table"];
for (const c of countries) {
  if (!c.dashboard) continue;
  const D = c.dashboard;
  if (!Array.isArray(D.tabs) || !D.tabs.length) { errors.push(`${c.slug}: dashboard has no tabs`); continue; }

  const checkChart = (ch, where) => {
    if (!ch) return;
    if (!["line", "gap", "bars"].includes(ch.type)) errors.push(`${c.slug}: ${where} bad chart type "${ch.type}"`);
    // The rule is one DECLARED unit per chart. A rate chart ("per 100,000
    // inhabitants") legitimately carries its unit in the title and declares
    // unit: "" — that is deliberate. A missing key is the actual error.
    if (typeof ch.unit !== "string") errors.push(`${c.slug}: ${where} chart MISSING UNIT — one unit per chart, always`);
    if (!isPair(ch.title)) errors.push(`${c.slug}: ${where} chart title not bilingual`);
    if (ch.type === "line") {
      if (!ch.series || !ch.series.length) return errors.push(`${c.slug}: ${where} line chart has no series`);
      if (ch.series.length > 5) errors.push(`${c.slug}: ${where} ${ch.series.length} series — the palette has 5 slots and is never cycled`);
      const n = ch.series[0].points.length;
      ch.series.forEach((s, i) => {
        if (!isPair(s.label)) errors.push(`${c.slug}: ${where} series[${i}] label not bilingual`);
        if (s.points.length !== n)
          errors.push(`${c.slug}: ${where} series[${i}] has ${s.points.length} points vs ${n} — they share one x-axis`);
        s.points.forEach((p, j) => {
          if (typeof p.y !== "number") errors.push(`${c.slug}: ${where} series[${i}].points[${j}].y not numeric`);
        });
      });
    } else {
      if (!ch.items || ch.items.length < 2) errors.push(`${c.slug}: ${where} ${ch.type} needs >=2 items`);
      (ch.items || []).forEach((it, i) => {
        if (!isPair(it.label)) errors.push(`${c.slug}: ${where} items[${i}] label not bilingual`);
        if (typeof it.value !== "number") errors.push(`${c.slug}: ${where} items[${i}] value not numeric`);
      });
    }
  };

  D.tabs.forEach((tab, ti) => {
    const T = `tab[${ti}](${tab.id || "?"})`;
    if (!isPair(tab.label)) errors.push(`${c.slug}: ${T} label not bilingual`);
    if (tab.intro && !isPair(tab.intro)) errors.push(`${c.slug}: ${T} intro not bilingual`);
    (tab.blocks || []).forEach((b, bi) => {
      const W = `${T}.block[${bi}](${b.type})`;
      if (!BLOCK_TYPES.includes(b.type)) return errors.push(`${c.slug}: ${W} unknown block type`);

      if (b.type === "metrics") {
        (b.items || []).forEach((m, i) => {
          if (!isPair(m.label)) errors.push(`${c.slug}: ${W}.item[${i}] label not bilingual`);
          if (!isPair(m.sub)) errors.push(`${c.slug}: ${W}.item[${i}] sub not bilingual`);
          if (typeof m.value !== "number") errors.push(`${c.slug}: ${W}.item[${i}] value not numeric`);
          if (m.panel) {
            if (!isPair(m.panel.title)) errors.push(`${c.slug}: ${W}.item[${i}] panel title not bilingual`);
            if (!isPair(m.panel.text)) errors.push(`${c.slug}: ${W}.item[${i}] panel text not bilingual`);
            if (!m.panel.source) errors.push(`${c.slug}: ${W}.item[${i}] panel MISSING SOURCE`);
            checkChart(m.panel.chart, `${W}.item[${i}].panel`);
          }
        });
      }
      if (b.type === "goals") {
        (b.items || []).forEach((g, i) => {
          if (!(g.sdg >= 1 && g.sdg <= 17)) errors.push(`${c.slug}: ${W}.goal[${i}] bad sdg`);
          if (!isPair(g.achievement)) errors.push(`${c.slug}: ${W}.goal[${i}] achievement not bilingual`);
          if (!isPair(g.priority)) errors.push(`${c.slug}: ${W}.goal[${i}] priority not bilingual`);
          if (!g.source) errors.push(`${c.slug}: ${W}.goal[${i}] MISSING SOURCE`);
          checkChart(g.chart, `${W}.goal[${i}]`);
        });
      }
      if (b.type === "triptych") {
        (b.items || []).forEach((g, i) => {
          ["contrast", "stake", "accelerator"].forEach(k => {
            if (!isPair(g[k])) errors.push(`${c.slug}: ${W}.item[${i}].${k} not bilingual`);
          });
          if (!g.source) errors.push(`${c.slug}: ${W}.item[${i}] MISSING SOURCE`);
          checkChart(g.chart, `${W}.item[${i}]`);
        });
      }
      if (b.type === "cards") {
        (b.items || []).forEach((x, i) => {
          if (!isPair(x.name)) errors.push(`${c.slug}: ${W}.card[${i}] name not bilingual`);
          if (!isPair(x.text)) errors.push(`${c.slug}: ${W}.card[${i}] text not bilingual`);
          if (!x.source) errors.push(`${c.slug}: ${W}.card[${i}] MISSING SOURCE`);
        });
      }
      if (b.type === "stats") {
        (b.items || []).forEach((x, i) => {
          if (!isPair(x.label)) errors.push(`${c.slug}: ${W}.stat[${i}] label not bilingual`);
          if (typeof x.value !== "number") errors.push(`${c.slug}: ${W}.stat[${i}] value not numeric`);
        });
      }
      if (b.type === "table") {
        (b.rows || []).forEach((r, i) => {
          if (!isPair(r.label)) errors.push(`${c.slug}: ${W}.row[${i}] label not bilingual`);
          if (!isPair(r.status)) errors.push(`${c.slug}: ${W}.row[${i}] status not bilingual`);
          if (typeof r.to !== "number") errors.push(`${c.slug}: ${W}.row[${i}] 'to' not numeric`);
        });
        if (!b.source) errors.push(`${c.slug}: ${W} MISSING SOURCE`);
      }
      if (b.type === "prose") {
        if (!isPair(b.text)) errors.push(`${c.slug}: ${W} text not bilingual`);
      }
      if (b.type === "chart") checkChart(b.chart, W);
    });
  });

  const nTabs = D.tabs.length;
  const nBlocks = D.tabs.reduce((n, t) => n + (t.blocks || []).length, 0);
  console.log(`  ${c.slug}: rich dashboard — ${nTabs} tabs, ${nBlocks} blocks`);
}

if (errors.length) {
  console.log(`\n── RICH ERRORS (${errors.length}) ──`);
  errors.forEach(e => console.log("  ✗ " + e));
  process.exit(1);
}
