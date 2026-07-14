/* Landing page: region filter + country grid. */
(function () {
  "use strict";

  const t  = p => window.I18N.t(p);
  const ui = k => window.I18N.ui(k);
  const $  = s => document.querySelector(s);
  const REGIONS = ["north", "west", "central", "east"];

  let active = "all";

  const esc = s => String(s).replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function boot() {
    window.VNR.initChrome();
    renderFilters();
    render();
    window.I18N.onChange(() => { renderFilters(); render(); });
  }

  function renderFilters() {
    const all = window.VNR.all();
    const counts = { all: all.length };
    REGIONS.forEach(r => counts[r] = all.filter(c => c.region === r).length);

    // Counts are derived from the data, so the label can never drift out of
    // sync with the grid — which is exactly how the old page ended up
    // advertising "2 Southern African countries" while showing none.
    $("#filters").innerHTML = ["all", ...REGIONS].map(r =>
      `<button class="filter-btn" data-region="${r}" aria-pressed="${r === active}">
         ${esc(ui(r))} (${counts[r]})
       </button>`).join("");

    $("#filters").querySelectorAll("button").forEach(b =>
      b.addEventListener("click", () => { active = b.dataset.region; renderFilters(); render(); }));
  }

  function render() {
    const list = window.VNR.all().filter(c => active === "all" || c.region === active);
    const totalChecks = window.VNR.all()
      .reduce((n, c) => n + (c.factcheck ? c.factcheck.length : 0), 0);

    $("#stat-countries").textContent = window.VNR.all().length;
    $("#stat-checks").textContent = totalChecks;

    $("#count").textContent = `${ui("showing")} ${list.length} ${ui("countries_n")}`;

    $("#grid").innerHTML = list.map(c => `
      <a class="country-card r-${c.region}" href="country.html?c=${encodeURIComponent(c.slug)}">
        <div class="card-stripe"></div>
        <div class="card-top">
          <div class="card-name">${esc(t(c.name))}</div>
          <span class="card-badge">${esc(ui(c.region))}</span>
        </div>
        <div class="card-tagline">${esc(t(c.tagline))}</div>
        <div class="card-foot">
          <span>VNR ${c.vnrPrev} → 2026</span>
          <span class="card-arrow">→</span>
        </div>
      </a>`).join("");
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
