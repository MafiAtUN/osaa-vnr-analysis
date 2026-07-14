/* ============================================================
   Rich country dashboard — the 7-tab structure, rebuilt.

   A country's `dashboard.tabs` is a list of tabs; each tab is a list of
   BLOCKS. The renderer below knows how to draw each block type. This keeps
   the layout data-driven and bilingual, while allowing every tab to be as
   dense as the original.

   Block types
     metrics   clickable stat tiles; selecting one swaps the panel beneath
     chart     a full-width chart card (line | gap | bars | split)
     goals     SDG selector; each goal has stats + achievement + priority
     cards     a grid of narrative cards (policy instruments, pillars…)
     stats     a static row of figures
     prose     a titled narrative block
     triptych  Gabon's Contraste / Enjeu / Accélérateur, per SDG
     table     an indicator table (baseline → latest → status)
   ============================================================ */
(function () {
  "use strict";

  const t  = p => window.I18N.t(p);
  const ui = k => window.I18N.ui(k);
  const N  = (v, u) => window.I18N.num(v, u);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const sdgColor = n => window.VNR.SDG_COLORS[n] || "var(--s1)";
  const sdgName  = n => t(window.VNR.SDG_NAMES[n] || { en: "", fr: "" });

  const div = (cls, html) => {
    const d = document.createElement("div");
    if (cls) d.className = cls;
    if (html != null) d.innerHTML = html;
    return d;
  };

  /* ── source line ── */
  const srcLine = s => s ? `<div class="chart-src">${ui("source")}: ${esc(s)}</div>` : "";

  /* ── BLOCK: metrics (clickable tiles + swapping panel) ───── */
  function blockMetrics(b) {
    const wrap = div("block");
    const tiles = div("metric-tiles");
    const panels = div("metric-panels");

    b.items.forEach((m, i) => {
      const tile = document.createElement("button");
      tile.className = "metric-tile";
      tile.style.setProperty("--sdg", sdgColor(m.sdg));
      tile.setAttribute("aria-pressed", String(i === 0));
      tile.innerHTML =
        `<span class="metric-label">${esc(t(m.label))}</span>
         <span class="metric-value">${esc(N(m.value, m.unit))}</span>
         <span class="metric-sub">${esc(t(m.sub))}</span>`;
      tiles.appendChild(tile);

      const panel = div("metric-panel");
      panel.hidden = i !== 0;
      if (m.panel) panel.appendChild(renderPanel(m.panel));
      panels.appendChild(panel);

      tile.addEventListener("click", () => {
        tiles.querySelectorAll(".metric-tile").forEach((x, j) =>
          x.setAttribute("aria-pressed", String(j === i)));
        panels.querySelectorAll(".metric-panel").forEach((x, j) => x.hidden = j !== i);
      });
    });

    wrap.append(tiles, panels);
    return wrap;
  }

  /* A metric panel = a chart + narrative + sources. */
  function renderPanel(p) {
    const card = div("chart-card");
    if (p.sdg) card.style.setProperty("--sdg", sdgColor(p.sdg));
    const head = div("chart-head");
    head.innerHTML = `<div class="chart-title">${esc(t(p.title))}</div>`;
    if (p.sdg) head.innerHTML += `<span class="chart-sdg">SDG ${p.sdg}</span>`;
    card.appendChild(head);

    if (p.chart) {
      const c = window.Charts.render(Object.assign({}, p.chart, { bare: true }));
      if (c) card.appendChild(c);
    }
    if (p.text) card.appendChild(div("chart-insight", esc(t(p.text))));
    if (p.source) card.insertAdjacentHTML("beforeend", srcLine(p.source));
    return card;
  }

  /* ── BLOCK: chart ────────────────────────────────────────── */
  function blockChart(b) {
    const node = window.Charts.render(b.chart);
    return node || div("");
  }

  /* ── BLOCK: goals (SDG selector) ─────────────────────────── */
  function blockGoals(b) {
    const wrap = div("block");
    const rail = div("goal-rail");
    const panels = div("goal-panels");

    b.items.forEach((g, i) => {
      const btn = document.createElement("button");
      btn.className = "goal-btn";
      btn.style.setProperty("--sdg", sdgColor(g.sdg));
      btn.setAttribute("aria-pressed", String(i === 0));
      btn.innerHTML = `<span class="goal-num">${g.sdg}</span>
                       <span class="goal-name">${esc(sdgName(g.sdg))}</span>`;
      rail.appendChild(btn);

      const panel = div("goal-panel");
      panel.hidden = i !== 0;
      panel.style.setProperty("--sdg", sdgColor(g.sdg));

      const stats = (g.stats || []).map(s =>
        `<div class="gstat">
           <div class="gstat-value">${esc(N(s.value, s.unit))}</div>
           <div class="gstat-label">${esc(t(s.label))}</div>
         </div>`).join("");

      panel.innerHTML =
        `<div class="goal-head">
           <div class="sdg-chip">${g.sdg}</div>
           <div>
             <div class="goal-title">SDG ${g.sdg} · ${esc(sdgName(g.sdg))}</div>
             ${g.headline ? `<div class="goal-headline">${esc(t(g.headline))}</div>` : ""}
           </div>
         </div>
         ${stats ? `<div class="gstat-row">${stats}</div>` : ""}
         <div class="goal-split">
           <div class="goal-col good">
             <div class="goal-col-label">${ui("achievement")}</div>
             <p>${esc(t(g.achievement))}</p>
           </div>
           <div class="goal-col warn">
             <div class="goal-col-label">${ui("priority")}</div>
             <p>${esc(t(g.priority))}</p>
           </div>
         </div>
         ${srcLine(g.source)}`;

      if (g.chart) {
        const c = window.Charts.render(g.chart);
        if (c) panel.insertBefore(c, panel.querySelector(".goal-split"));
      }
      panels.appendChild(panel);

      btn.addEventListener("click", () => {
        rail.querySelectorAll(".goal-btn").forEach((x, j) =>
          x.setAttribute("aria-pressed", String(j === i)));
        panels.querySelectorAll(".goal-panel").forEach((x, j) => x.hidden = j !== i);
      });
    });

    wrap.append(rail, panels);
    return wrap;
  }

  /* ── BLOCK: triptych — Gabon's Contraste / Enjeu / Accélérateur ──
     This is the structure of Gabon's own Main Messages, so the dashboard
     uses it rather than imposing a foreign one. */
  function blockTriptych(b) {
    const wrap = div("block");
    b.items.forEach(g => {
      const card = div("tript");
      card.style.setProperty("--sdg", sdgColor(g.sdg));
      card.innerHTML =
        `<div class="tript-head">
           <div class="sdg-chip">${g.sdg}</div>
           <div>
             <div class="tript-title">SDG ${g.sdg} · ${esc(sdgName(g.sdg))}</div>
             ${g.headline ? `<div class="tript-headline">${esc(t(g.headline))}</div>` : ""}
           </div>
         </div>
         <div class="tript-grid">
           <div class="tript-col t-contrast">
             <div class="tript-label">${ui("contrast")}</div>
             <p>${esc(t(g.contrast))}</p>
           </div>
           <div class="tript-col t-stake">
             <div class="tript-label">${ui("stake")}</div>
             <p>${esc(t(g.stake))}</p>
           </div>
           <div class="tript-col t-accel">
             <div class="tript-label">${ui("accelerator")}</div>
             <p>${esc(t(g.accelerator))}</p>
           </div>
         </div>
         ${srcLine(g.source)}`;
      if (g.chart) {
        const c = window.Charts.render(g.chart);
        if (c) card.insertBefore(c, card.querySelector(".tript-grid"));
      }
      wrap.appendChild(card);
    });
    return wrap;
  }

  /* ── BLOCK: cards (instruments, pillars) ─────────────────── */
  function blockCards(b) {
    const wrap = div("block");
    const grid = div("card-grid");
    b.items.forEach(c => {
      const stats = (c.stats || []).map(s =>
        `<div class="cstat"><span class="cstat-v">${esc(N(s.value, s.unit))}</span>
         <span class="cstat-l">${esc(t(s.label))}</span></div>`).join("");
      grid.appendChild(div("ncard",
        `${c.kicker ? `<div class="ncard-kicker">${esc(t(c.kicker))}</div>` : ""}
         <div class="ncard-title">${esc(t(c.name))}</div>
         ${stats ? `<div class="cstat-row">${stats}</div>` : ""}
         <div class="ncard-text">${esc(t(c.text))}</div>
         ${srcLine(c.source)}`));
    });
    wrap.appendChild(grid);
    return wrap;
  }

  /* ── BLOCK: stats (static figure row) ────────────────────── */
  function blockStats(b) {
    const wrap = div("block");
    const grid = div("stat-grid");
    b.items.forEach(s => {
      grid.appendChild(div("stat",
        `<div class="stat-label">${esc(t(s.label))}</div>
         <div class="stat-value">${esc(N(s.value, s.unit))}</div>
         ${s.note ? `<div class="stat-note">${esc(t(s.note))}</div>` : ""}
         ${s.source ? `<div class="stat-src">${esc(s.source)}</div>` : ""}`));
      grid.lastChild.style.setProperty("--sdg", sdgColor(s.sdg));
    });
    wrap.appendChild(grid);
    return wrap;
  }

  /* ── BLOCK: prose ────────────────────────────────────────── */
  function blockProse(b) {
    return div("block", `<div class="card prose-card">
      ${b.title ? `<div class="chart-title" style="margin-bottom:10px">${esc(t(b.title))}</div>` : ""}
      <div class="prose-body">${esc(t(b.text)).replace(/\n\n/g, "</p><p>")}</div>
      ${srcLine(b.source)}
    </div>`);
  }

  /* ── BLOCK: indicator table (baseline → latest → status) ─── */
  function blockTable(b) {
    const rows = b.rows.map(r => `
      <tr>
        <td>${esc(t(r.label))}</td>
        <td class="num">${esc(N(r.from, r.unit))}<span class="yr"> ${esc(r.fromYear)}</span></td>
        <td class="num">${esc(N(r.to, r.unit))}<span class="yr"> ${esc(r.toYear)}</span></td>
        <td><span class="trend ${r.dir || "flat"}">${r.dir === "up" ? "▲" : r.dir === "down" ? "▼" : "—"}</span>
            ${esc(t(r.status))}</td>
      </tr>`).join("");
    return div("block", `<div class="card">
      ${b.title ? `<div class="chart-title" style="margin-bottom:12px">${esc(t(b.title))}</div>` : ""}
      <div style="overflow-x:auto">
      <table class="data ind">
        <thead><tr>
          <th>${ui("tbl_indicator")}</th>
          <th style="text-align:right">${ui("baseline")}</th>
          <th style="text-align:right">${ui("latest")}</th>
          <th>${ui("assessment")}</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
      ${srcLine(b.source)}
    </div>`);
  }

  const BLOCKS = {
    metrics: blockMetrics, chart: blockChart, goals: blockGoals,
    triptych: blockTriptych, cards: blockCards, stats: blockStats,
    prose: blockProse, table: blockTable
  };

  /* ── Public: render the whole dashboard ──────────────────── */
  window.Dash = {
    render(host, country) {
      host.innerHTML = "";
      const d = country.dashboard;
      if (!d) return false;

      const nav = div("dash-tabs");
      nav.setAttribute("role", "tablist");
      const body = div("dash-body");

      d.tabs.forEach((tab, i) => {
        const btn = document.createElement("button");
        btn.className = "dash-tab";
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", String(i === 0));
        btn.textContent = t(tab.label);
        nav.appendChild(btn);

        const panel = div("dash-panel");
        panel.hidden = i !== 0;
        if (tab.intro) panel.appendChild(div("dash-intro", esc(t(tab.intro))));
        (tab.blocks || []).forEach(b => {
          const fn = BLOCKS[b.type];
          if (fn) panel.appendChild(fn(b));
        });
        body.appendChild(panel);

        btn.addEventListener("click", () => {
          nav.querySelectorAll(".dash-tab").forEach((x, j) =>
            x.setAttribute("aria-selected", String(j === i)));
          body.querySelectorAll(".dash-panel").forEach((x, j) => x.hidden = j !== i);
          window.scrollTo({ top: host.offsetTop - 70, behavior: "smooth" });
        });
      });

      host.append(nav, body);
      return true;
    }
  };
})();
