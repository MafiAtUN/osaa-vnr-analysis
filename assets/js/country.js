/* Country page: Fact sheet · Dashboard · Fact-check. */
(function () {
  "use strict";

  const t  = p => window.I18N.t(p);
  const ui = k => window.I18N.ui(k);
  const $  = s => document.querySelector(s);

  const slug = new URLSearchParams(location.search).get("c");
  const c = window.VNR.get(slug);

  function boot() {
    window.VNR.initChrome();
    if (!c) {
      $("#page").innerHTML =
        `<div class="wrap" style="padding:80px 32px;text-align:center;">
           <p style="font-size:18px;">${ui("not_found")}</p>
           <p style="margin-top:14px;"><a class="nav-btn primary" href="index.html">${ui("back_all")}</a></p>
         </div>`;
      return;
    }
    document.title = t(c.name) + " · " + ui("site_title");
    render();
    window.I18N.onChange(render);

    document.querySelectorAll(".sec-tab").forEach(tab => {
      tab.addEventListener("click", () => selectTab(tab.dataset.sec));
    });
    const initial = location.hash.replace("#", "");
    selectTab(["factsheet", "dashboard", "factcheck"].includes(initial) ? initial : "factsheet");
  }

  function selectTab(sec) {
    document.querySelectorAll(".sec-tab").forEach(b =>
      b.setAttribute("aria-selected", String(b.dataset.sec === sec)));
    document.querySelectorAll("[data-sec-panel]").forEach(p =>
      p.hidden = p.dataset.secPanel !== sec);
    history.replaceState(null, "", "#" + sec);
  }

  function render() {
    // ── Hero ──
    $("#c-name").textContent = t(c.name);
    $("#c-tagline").textContent = t(c.tagline);
    $("#c-meta").innerHTML = [
      `VNR ${c.vnrCycles.join(" · ")}`,
      window.VNR.regionName(c.region),
      c.langs.join(" · ")
    ].map(x => `<span class="meta-chip">${esc(x)}</span>`).join("");

    renderFactsheet();
    renderDashboard();
    renderFactcheck();
    window.VNR.applyStatic();
  }

  // ── FACT SHEET ─────────────────────────────────────────────
  function renderFactsheet() {
    const themes = c.themes.map(th => {
      const col = window.VNR.SDG_COLORS[th.sdg];
      const name = t(window.VNR.SDG_NAMES[th.sdg]);
      return `<div class="theme" style="--sdg:${col}">
        <div class="theme-head">SDG ${th.sdg} · ${esc(name)}</div>
        <div class="theme-body">
          <div class="sdg-chip">${th.sdg}</div>
          <div>
            <div class="theme-title">${esc(t(th.title))}</div>
            <div class="theme-text">${esc(t(th.text))}</div>
          </div>
        </div>
      </div>`;
    }).join("");
    $("#fs-themes").innerHTML = themes;

    const rows = c.continuity.map(r => `
      <div class="cont-row">
        <div class="cont-prev">${esc(t(r.prev))}</div>
        <div style="text-align:center">
          <span class="pill ${r.status}">${ui(r.status)}</span>
        </div>
        <div class="cont-now">${esc(t(r.now))}</div>
      </div>`).join("");
    $("#fs-continuity").innerHTML =
      `<div class="cont-axis">
         <span>${c.vnrPrev}</span><span></span><span>2026</span>
       </div>${rows}`;

    $("#fs-concept-caption").textContent = t(c.concepts.caption);
    const holder = $("#fs-concepts");
    holder.innerHTML = "";
    holder.appendChild(window.Charts.concepts(c.concepts.items));

    $("#fs-pdf").href = c.factsheetPdf;
  }

  // ── DASHBOARD ──────────────────────────────────────────────
  function renderDashboard() {
    $("#db-stats").innerHTML = c.indicators.map(ind => {
      const col = window.VNR.SDG_COLORS[ind.sdg] || "var(--s1)";
      return `<div class="stat" style="--sdg:${col}">
        <div class="stat-label">${esc(t(ind.label))}</div>
        <div class="stat-value">${esc(window.I18N.num(ind.value, ind.unit))}</div>
        <div class="stat-note">${esc(t(ind.note))}</div>
        <div class="stat-src">${esc(ind.source)}</div>
      </div>`;
    }).join("");

    const charts = $("#db-charts");
    charts.innerHTML = "";
    c.charts.forEach(spec => {
      const node = window.Charts.render(spec);
      if (node) charts.appendChild(node);
    });

    $("#db-instruments").innerHTML = (c.instruments || []).map(i => `
      <div class="inst">
        <div class="inst-kicker">${esc(t(i.kicker))}</div>
        <div class="inst-name">${esc(t(i.name))}</div>
        <div class="inst-text">${esc(t(i.text))}</div>
        <div class="inst-src">${esc(i.source)}</div>
      </div>`).join("");
  }

  // ── FACT-CHECK ─────────────────────────────────────────────
  function renderFactcheck() {
    const list = c.factcheck || [];
    if (!list.length) {
      $("#fc-list").innerHTML = `<div class="card">${ui("fc_none")}</div>`;
      return;
    }
    $("#fc-list").innerHTML = list.map(f => `
      <div class="fc-item" data-sev="${f.severity}">
        <div class="fc-tag">${ui("sev_" + f.severity)}</div>
        <div class="fc-issue">${esc(t(f.issue))}</div>
        <div class="fc-res">${esc(t(f.resolution))}</div>
      </div>`).join("");
  }

  const esc = s => String(s).replace(/[&<>"]/g, ch =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

  document.addEventListener("DOMContentLoaded", boot);
})();
