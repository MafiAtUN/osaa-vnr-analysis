/* ============================================================
   OSAA VNR 2026 — chart library. Inline SVG, zero dependencies.

   Rules enforced here, by construction:
   • One y-axis. Never two. A chart carries a single `unit`.
   • Series colours come from the fixed categorical order (--s1…--s5)
     and follow the series key, never its rank — filtering cannot repaint.
   • Bar length is strictly proportional to value (the old factsheet's
     bars were not, which flattened the differences).
   • ≥2 series ⇒ a legend is always present; endpoints are direct-labelled.
   • Every chart ships a table-view twin, so no value is reachable
     only by hovering.
   ============================================================ */
(function () {
  "use strict";

  const SERIES_VARS = ["--s1", "--s2", "--s3", "--s4", "--s5"];
  const NS = "http://www.w3.org/2000/svg";

  const el = (tag, attrs) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  };
  const esc = s => String(s).replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* Round the TICK STEP, not the maximum — then take max = step × 4.
     Rounding the maximum is the obvious approach and it is wrong: it gives a
     tidy top of scale but divides into ragged ticks (a max of 15 across four
     gridlines yields 3.75, 7.5, 11.25). Rounding the step guarantees every
     gridline lands on a readable number, which is what the reader actually sees. */
  const STEPS = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
  function niceStep(v) {
    const pow = Math.pow(10, Math.floor(Math.log10(v)));
    const n = v / pow;
    return STEPS.find(s => n <= s + 1e-9) * pow;
  }
  function niceMax(v) {
    if (v <= 0) return 1;
    return niceStep(v / 4) * 4;
  }

  /* ── Shared card shell: title, SDG chip, legend, table toggle ──
     `bare: true` is used when the chart sits inside a panel that already
     supplies its own title, narrative and source (the metric-tile panels),
     so the chrome is not drawn twice. */
  function shell(spec) {
    const t = window.I18N.t.bind(window.I18N);

    if (spec.bare) {
      const card = document.createElement("div");
      const plot = document.createElement("div");
      const table = document.createElement("div");
      table.hidden = true;
      card.append(plot, table);
      return { card, plot, table };
    }

    const card = document.createElement("div");
    card.className = "chart-card";
    if (spec.sdg) card.style.setProperty("--sdg", window.VNR.SDG_COLORS[spec.sdg]);

    const head = document.createElement("div");
    head.className = "chart-head";
    const title = document.createElement("div");
    title.className = "chart-title";
    title.textContent = t(spec.title);
    head.appendChild(title);

    const right = document.createElement("div");
    right.style.cssText = "display:flex;gap:8px;align-items:center;";
    if (spec.sdg) {
      const chip = document.createElement("span");
      chip.className = "chart-sdg";
      chip.textContent = "SDG " + spec.sdg;
      right.appendChild(chip);
    }
    const tblBtn = document.createElement("button");
    tblBtn.className = "table-toggle";
    tblBtn.textContent = window.I18N.ui("show_table");
    right.appendChild(tblBtn);
    head.appendChild(right);
    card.appendChild(head);

    const plot = document.createElement("div");
    card.appendChild(plot);

    const table = document.createElement("div");
    table.hidden = true;
    card.appendChild(table);

    tblBtn.addEventListener("click", () => {
      const showing = table.hidden;
      table.hidden = !showing;
      plot.hidden = showing;
      tblBtn.textContent = window.I18N.ui(showing ? "hide_table" : "show_table");
    });

    if (spec.insight) {
      const ins = document.createElement("div");
      ins.className = "chart-insight";
      ins.textContent = t(spec.insight);
      card.appendChild(ins);
    }
    if (spec.source) {
      const src = document.createElement("div");
      src.className = "chart-src";
      src.textContent = window.I18N.ui("source") + ": " + spec.source;
      card.appendChild(src);
    }
    return { card, plot, table };
  }

  function legend(series) {
    const t = window.I18N.t.bind(window.I18N);
    const box = document.createElement("div");
    box.className = "chart-legend";
    series.forEach((s, i) => {
      const item = document.createElement("div");
      item.className = "legend-item";
      const sw = document.createElement("span");
      sw.className = "legend-swatch";
      sw.style.background = `var(${SERIES_VARS[i % 5]})`;
      item.appendChild(sw);
      item.appendChild(document.createTextNode(t(s.label)));
      box.appendChild(item);
    });
    return box;
  }

  /* ── Tooltip (shared singleton) ── */
  let tip;
  function tooltip() {
    if (tip) return tip;
    tip = document.createElement("div");
    tip.style.cssText =
      "position:fixed;pointer-events:none;z-index:200;opacity:0;transition:opacity .12s;" +
      "background:var(--surface);border:1px solid var(--line-strong);border-radius:8px;" +
      "padding:8px 11px;font-size:12.5px;line-height:1.5;color:var(--ink);" +
      "box-shadow:0 4px 16px rgba(0,0,0,.14);max-width:260px;";
    document.body.appendChild(tip);
    return tip;
  }
  function showTip(html, x, y) {
    const el = tooltip();
    el.innerHTML = html;
    el.style.opacity = "1";
    const r = el.getBoundingClientRect();
    let left = x + 14, top = y - r.height - 10;
    if (left + r.width > innerWidth - 8) left = x - r.width - 14;
    if (top < 8) top = y + 16;
    el.style.left = left + "px";
    el.style.top = top + "px";
  }
  const hideTip = () => { if (tip) tip.style.opacity = "0"; };

  /* ── LINE / trend ─────────────────────────────────────────
     Multiple series, ONE y-axis, one unit. Endpoints direct-labelled. */
  function lineChart(spec) {
    const t = window.I18N.t.bind(window.I18N);
    const { card, plot, table } = shell(spec);
    // A legend is mandatory for ≥2 series and pointless for one — the title
    // already names it, and the endpoint is direct-labelled.
    if (spec.series.length > 1) plot.appendChild(legend(spec.series));

    // Sized to be legible from the back of a room, not to fit a thumbnail.
    const W = 1140, H = 380, P = { t: 24, r: 78, b: 44, l: 62 };
    const xs = spec.series[0].points.map(p => p.x);
    const allY = spec.series.flatMap(s => s.points.map(p => p.y));
    const max = niceMax(Math.max(...allY) * 1.12);

    const px = i => P.l + (xs.length === 1 ? 0 : i * (W - P.l - P.r) / (xs.length - 1));
    const py = v => H - P.b - (v / max) * (H - P.t - P.b);

    const svg = el("svg", {
      viewBox: `0 0 ${W} ${H}`, class: "chart-svg",
      role: "img", "aria-label": t(spec.title)
    });

    // Gridlines + y ticks
    for (let i = 0; i <= 4; i++) {
      const v = (max / 4) * i, y = py(v);
      svg.appendChild(el("line", { x1: P.l, y1: y, x2: W - P.r, y2: y, class: i ? "grid-line" : "axis-line" }));
      const lab = el("text", { x: P.l - 9, y: y + 3.5, "text-anchor": "end", class: "axis-label" });
      lab.textContent = window.I18N.num(v, spec.unit);
      svg.appendChild(lab);
    }
    // x ticks
    xs.forEach((x, i) => {
      const lab = el("text", { x: px(i), y: H - P.b + 17, "text-anchor": "middle", class: "axis-label" });
      lab.textContent = x;
      svg.appendChild(lab);
    });

    spec.series.forEach((s, si) => {
      const color = `var(${SERIES_VARS[si % 5]})`;
      const d = s.points.map((p, i) => `${i ? "L" : "M"}${px(i)},${py(p.y)}`).join(" ");
      svg.appendChild(el("path", {
        d, fill: "none", stroke: color, "stroke-width": 2.5,
        "stroke-linecap": "round", "stroke-linejoin": "round"
      }));

      s.points.forEach((p, i) => {
        const c = el("circle", { cx: px(i), cy: py(p.y), r: 6, fill: color, class: "dot-ring" });
        svg.appendChild(c);
        // Generous invisible hit target (≥24px), per interaction spec.
        const hit = el("circle", { cx: px(i), cy: py(p.y), r: 20, fill: "transparent", style: "cursor:pointer" });
        hit.addEventListener("mousemove", ev => showTip(
          `<strong>${esc(t(s.label))}</strong><br>${esc(p.x)} — ${esc(window.I18N.num(p.y, spec.unit))}`,
          ev.clientX, ev.clientY));
        hit.addEventListener("mouseleave", hideTip);
        svg.appendChild(hit);
      });

      // Direct-label the endpoint only — never every point.
      const last = s.points[s.points.length - 1];
      const lab = el("text", {
        x: px(s.points.length - 1) + 13, y: py(last.y) + 5,
        class: "val-label", fill: color
      });
      lab.textContent = window.I18N.num(last.y, spec.unit);
      svg.appendChild(lab);
    });

    plot.appendChild(svg);

    // Table twin
    let rows = "";
    spec.series.forEach(s => s.points.forEach(p => {
      rows += `<tr><td>${esc(t(s.label))}</td><td>${esc(p.x)}</td><td class="num">${esc(window.I18N.num(p.y, spec.unit))}</td></tr>`;
    }));
    table.innerHTML =
      `<table class="data"><thead><tr>
        <th>${window.I18N.ui("tbl_series")}</th>
        <th>${window.I18N.ui("tbl_period")}</th>
        <th style="text-align:right">${window.I18N.ui("tbl_value")}</th>
      </tr></thead><tbody>${rows}</tbody></table>`;

    return card;
  }

  /* ── GAP: contrasting values on one scale ─────────────────
     Purpose-built for the urban/rural and reach/connection splits that
     the old dashboards collapsed into a single misleading average. */
  function gapChart(spec) {
    const t = window.I18N.t.bind(window.I18N);
    const { card, plot, table } = shell(spec);

    const max = niceMax(Math.max(...spec.items.map(i => i.value)));
    const rowH = 54, W = 1140, L = 330, R = 86;
    const H = spec.items.length * rowH + 34;

    const svg = el("svg", {
      viewBox: `0 0 ${W} ${H}`, class: "chart-svg",
      role: "img", "aria-label": t(spec.title)
    });

    // Vertical gridlines
    for (let i = 0; i <= 4; i++) {
      const x = L + (i / 4) * (W - L - R);
      svg.appendChild(el("line", { x1: x, y1: 4, x2: x, y2: H - 28, class: i ? "grid-line" : "axis-line" }));
      const lab = el("text", { x, y: H - 8, "text-anchor": "middle", class: "axis-label" });
      lab.textContent = window.I18N.num((max / 4) * i, spec.unit);
      svg.appendChild(lab);
    }

    spec.items.forEach((it, i) => {
      const y = 10 + i * rowH;
      const w = (it.value / max) * (W - L - R);
      // Emphasis carries the story; the rest recede. One hue, two weights —
      // not a value-ramp across nominal categories.
      const color = it.emphasis ? "var(--s4)" : "var(--s1)";

      const lab = el("text", { x: L - 16, y: y + 27, "text-anchor": "end", class: "axis-label" });
      lab.setAttribute("font-size", "14");
      lab.setAttribute("fill", "var(--ink-2)");
      lab.textContent = t(it.label);
      svg.appendChild(lab);

      svg.appendChild(el("rect", {
        x: L, y: y + 7, width: Math.max(w, 2), height: 30,
        rx: 4, fill: color, opacity: it.emphasis ? 1 : 0.82
      }));

      const val = el("text", { x: L + w + 13, y: y + 28, class: "val-label", fill: color });
      val.textContent = window.I18N.num(it.value, spec.unit);
      svg.appendChild(val);

      const hit = el("rect", { x: L, y: y, width: W - L - R, height: rowH, fill: "transparent", style: "cursor:pointer" });
      hit.addEventListener("mousemove", ev => showTip(
        `<strong>${esc(t(it.label))}</strong><br>${esc(window.I18N.num(it.value, spec.unit))}`,
        ev.clientX, ev.clientY));
      hit.addEventListener("mouseleave", hideTip);
      svg.appendChild(hit);
    });

    plot.appendChild(svg);

    table.innerHTML =
      `<table class="data"><thead><tr>
        <th>${window.I18N.ui("tbl_indicator")}</th>
        <th style="text-align:right">${window.I18N.ui("tbl_value")}</th>
      </tr></thead><tbody>${spec.items.map(i =>
        `<tr><td>${esc(t(i.label))}</td><td class="num">${esc(window.I18N.num(i.value, spec.unit))}</td></tr>`
      ).join("")}</tbody></table>`;

    return card;
  }

  /* ── CONCEPT FREQUENCY ────────────────────────────────────
     One series, nominal categories ⇒ ONE colour for every bar.
     (The original factsheet used a rank-ordered colour ramp AND
     non-proportional heights: 10→130px but 6→81px, where 6 should
     have been 78px. Both are fixed here — length is value/max, exactly.) */
  function conceptChart(items) {
    const t = window.I18N.t.bind(window.I18N);
    const max = Math.max(...items.map(i => i.value));
    const box = document.createElement("div");
    box.className = "reveal";
    items.forEach((it, i) => {
      const row = document.createElement("div");
      row.className = "concept-row";

      const rank = document.createElement("div");
      rank.className = "concept-rank";
      rank.textContent = String(i + 1).padStart(2, "0");

      const label = document.createElement("div");
      label.className = "concept-label";
      label.textContent = t(it.label);

      const track = document.createElement("div");
      track.className = "concept-track";
      const bar = document.createElement("div");
      bar.className = "concept-bar";
      bar.style.setProperty("--w", (it.value / max * 100) + "%");  // strictly proportional
      track.appendChild(bar);

      const val = document.createElement("div");
      val.className = "concept-val";
      val.textContent = it.value;

      row.append(rank, label, track, val);
      box.appendChild(row);
    });

    // The count is on every row already, so nothing here is hover-only — but the
    // rows are marks, not a table, and a screen reader deserves the real thing.
    const tbl = document.createElement("table");
    tbl.className = "data";
    tbl.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;";
    tbl.innerHTML =
      `<caption>${esc(window.I18N.ui("fs_concepts"))}</caption>
       <thead><tr>
         <th>${esc(window.I18N.ui("fs_concept"))}</th>
         <th>${esc(window.I18N.ui("fs_mentions"))}</th>
       </tr></thead><tbody>${items.map(it =>
        `<tr><td>${esc(t(it.label))}</td><td>${it.value}</td></tr>`).join("")}</tbody>`;

    const wrap = document.createElement("div");
    wrap.style.position = "relative";
    wrap.append(box, tbl);
    return wrap;
  }

  window.Charts = {
    render(spec) {
      if (spec.type === "line") return lineChart(spec);
      // "gap" and "bars" share a renderer: both are ranked horizontal bars on
      // one scale. They differ only in intent — "gap" contrasts two readings of
      // the same thing, "bars" ranks magnitudes. Either way a single hue carries
      // every bar and `emphasis` highlights the one that matters, rather than
      // ramping colour by rank across nominal categories.
      if (spec.type === "gap" || spec.type === "bars") return gapChart(spec);
      return null;
    },
    concepts: conceptChart
  };
})();
