/* Country page: Fact sheet · Dashboard · FAQ. */
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

    /* The hash is either a section — #faq — or a section and one FAQ entry —
       #faq/GAB-01 — so a specific answer can be linked to from a brief. */
    const [sec, entryId] = location.hash.replace("#", "").split("/");
    const tabs = ["factsheet", "dashboard"];
    if (hasFaq()) tabs.push("faq");
    selectTab(tabs.includes(sec) ? sec : "dashboard");

    if (entryId && sec === "faq" && hasFaq()) {
      window.Faq.focusEntry($("#faq-host"), c, entryId.toUpperCase());
    }
  }

  const hasFaq = () => !!window.VNR.getFaq(c.slug);

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

    // Countries rebuilt on the rich 7-tab structure render through dash.js.
    // The rest keep the simpler layout until they are rebuilt too.
    const rich = c.dashboard && window.Dash.render($("#dash-host"), c);
    $("#dash-fallback").hidden = !!rich;
    $("#dash-host").hidden = !rich;
    if (!rich) renderDashboard();

    // The FAQ tab exists only where the workbook gave us entries for the
    // country. Everywhere else the tab stays hidden rather than opening onto
    // an empty panel.
    const faq = hasFaq() && window.Faq.render($("#faq-host"), c);
    $("#tab-faq").hidden = !faq;

    window.VNR.applyStatic();
  }

  // ── FACT SHEET ─────────────────────────────────────────────
  function renderFactsheet() {
    renderLede();

    const themes = c.themes.map(th => {
      const col = window.VNR.SDG_COLORS[th.sdg];
      const name = t(window.VNR.SDG_NAMES[th.sdg]);
      // The metric is a number the theme text already states, lifted out of the
      // prose. It is optional — several themes are qualitative and get none,
      // and a card without one simply ends at its paragraph.
      const m = th.metric;
      const metric = m
        ? `<div class="theme-metric">
             <span class="theme-metric-val">${esc(window.I18N.num(m.value, m.unit))}</span>
             <span class="theme-metric-label">${esc(t(m.label))}</span>
           </div>`
        : "";
      return `<div class="theme reveal" style="--sdg:${col}" data-sdg="${th.sdg}">
        <div class="theme-head">
          <span class="sdg-dot"></span>SDG ${th.sdg} · ${esc(name)}
        </div>
        <div class="theme-title">${esc(t(th.title))}</div>
        <div class="theme-text">${esc(t(th.text))}</div>
        ${metric}
      </div>`;
    }).join("");
    $("#fs-themes").innerHTML = themes;

    const rows = c.continuity.map(r => `
      <div class="cont-row reveal" data-status="${r.status}">
        <div class="cont-prev">${esc(t(r.prev))}</div>
        <div class="cont-link">
          <span class="pill ${r.status}">${ui(r.status)}</span>
        </div>
        <div class="cont-now">${esc(t(r.now))}</div>
      </div>`).join("");
    $("#fs-continuity").innerHTML =
      `<div class="cont-axis">
         <div class="cont-axis-cell">
           <span class="cont-axis-year">${c.vnrPrev}</span>
           <span class="cont-axis-note">${ui("prev_cycle")}</span>
         </div>
         <div></div>
         <div class="cont-axis-cell">
           <span class="cont-axis-year">2026</span>
           <span class="cont-axis-note">${ui("this_cycle")}</span>
         </div>
       </div>
       <div class="continuity">${rows}</div>`;

    $("#fs-concept-caption").textContent = t(c.concepts.caption);
    const holder = $("#fs-concepts");
    holder.innerHTML = "";
    holder.appendChild(window.Charts.concepts(c.concepts.items));

    $("#fs-pdf").href = c.factsheetPdf;
    observeReveals();
  }

  /* The lede's figures are references into `indicators`, not fresh numbers, so
     the fact sheet cannot quietly drift away from the dashboard it summarises.
     An unresolvable ref is dropped rather than rendered as a blank tile. */
  function renderLede() {
    const box = $("#fs-lede");
    if (!c.lede) { box.hidden = true; return; }
    box.hidden = false;
    $("#fs-statement").innerHTML = mark(t(c.lede.statement));

    const byId = Object.create(null);
    (c.indicators || []).forEach(i => { byId[i.id] = i; });

    $("#fs-figs").innerHTML = (c.lede.figures || []).map(f => {
      const ind = byId[f.ref];
      if (!ind) return "";
      return `<div class="fs-fig" data-tone="${f.tone || "primary"}">
        <div class="fs-fig-val">${esc(window.I18N.num(ind.value, ind.unit))}</div>
        <div class="fs-fig-rule"></div>
        <div class="fs-fig-label">${esc(t(ind.label))}</div>
      </div>`;
    }).join("");
  }

  /* The statement wraps its key figures in *asterisks* in the data, so the
     emphasis travels with the sentence through translation instead of being
     positional. Everything is escaped first — the markup added here is ours. */
  const mark = s => esc(s).replace(/\*([^*]+)\*/g, "<strong>$1</strong>");

  /* Scroll reveal, progressive enhancement only: without IntersectionObserver,
     or with reduced motion asked for, everything is simply already visible. */
  let io;
  function observeReveals() {
    const nodes = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) ||
        matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(n => n.classList.add("in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      }, { rootMargin: "0px 0px -8% 0px" });
    }
    nodes.forEach((n, i) => {
      n.style.setProperty("--d", Math.min(i, 8) * 45 + "ms");
      io.observe(n);
    });
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

  const esc = s => String(s).replace(/[&<>"]/g, ch =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

  document.addEventListener("DOMContentLoaded", boot);
})();
