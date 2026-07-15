/* Tanzania — VNR 2023 → 2026. Source factsheet authored in English.

   AUTHORITATIVE SOURCE: the VNR 2026 Tanzania Report — its chapter tables and,
   above all, its Selected Statistical Annex (Tables A1–A17), which carries the
   full 2020–2025 series. The corrections ledger sits above the `dashboard`
   block below; every deviation from the fact sheet is recorded there.

   The factsheet, the Main Messages and the NBS/Budget-Speech figures the first
   pass leaned on are NOT authoritative here: they are where 62.1% grid
   connection, 80% renewables and 49% internet came from, and the annex
   contradicts all three. Where the report's chapter tables disagree with the
   annex, the ANNEX WINS — the chapters repeatedly print the annex's 2024 value
   under a "2025" heading (verified on regional-centre water, electricity access
   and renewables). */
window.VNR.register({
  slug: "tanzania",
  iso: "TZ",
  name: { en: "Tanzania", fr: "Tanzanie" },
  region: "east",
  vnrPrev: 2023,
  vnrCycles: [2023, 2026],
  langs: ["EN", "SW"],
  sourceLang: "en",
  factsheetPdf: "factsheets/tanzania.pdf",

  tagline: {
    en: "Accelerating the 2030 Agenda through whole-of-nation PLUS action, guided by the Tanzania Development Vision (Dira) 2050.",
    fr: "Accélérer l'Agenda 2030 par une action « whole-of-nation PLUS », guidée par la Vision de développement de la Tanzanie (Dira) 2050."
  },

  /* The lede states the review's central finding. Its figures are `ref`s into
     `indicators` below — never retyped — so the fact sheet cannot drift away
     from the dashboard it summarises. Asterisks mark the emphasised figures so
     the emphasis survives translation instead of being positional. */
  lede: {
    statement: {
      en: "Tanzania invested heavily in infrastructure and financed much of it at home: *86%* of people now have electricity from some source, and *78%* of the budget is financed from domestic revenue. But only *52%* of households are actually connected to the national grid, while manufacturing's share of the economy fell even as the infrastructure rose.",
      fr: "La Tanzanie a beaucoup investi dans les infrastructures et les a financées en grande partie chez elle : *86 %* de la population a désormais accès à l'électricité, toutes sources confondues, et *78 %* du budget provient des recettes intérieures. Mais seuls *52 %* des ménages sont réellement raccordés au réseau national, tandis que la part de l'industrie manufacturière a reculé alors même que les infrastructures progressaient."
    },
    figures: [
      { ref: "elec_access" },
      { ref: "elec_grid", tone: "counter" },
      { ref: "selfreliance" }
    ]
  },

  themes: [
    { sdg: 6,
      title: { en: "Water Access & Self-Reliance", fr: "Accès à l'eau et autonomie" },
      text: {
        en: "Rural water coverage rose to 85.2% and regional centres to 92.5%, but sewer connectivity in those same centres is rated Regressing — non-revenue water and sanitation are the named acceleration priorities.",
        fr: "La couverture rurale en eau a atteint 85,2 % et celle des centres régionaux 92,5 %, mais le raccordement aux égouts de ces mêmes centres est jugé « en régression » — l'eau non facturée et l'assainissement sont les priorités d'accélération désignées."
      },
      metric: { value: 85.2, unit: "%", label: { en: "rural water coverage", fr: "couverture rurale en eau" } } },
    { sdg: 7,
      title: { en: "Energy Security as a Growth Engine", fr: "La sécurité énergétique, moteur de croissance" },
      text: {
        en: "The Julius Nyerere Hydropower Project doubled generation capacity in a year and connected all 26 regions; electricity access reached 86.2%, with renewables at 76.6% of electricity generation.",
        fr: "Le projet hydroélectrique Julius Nyerere a doublé la capacité de production en un an et raccordé les 26 régions ; l'accès à l'électricité atteint 86,2 %, les renouvelables représentant 76,6 % de la production électrique."
      },
      metric: { value: 86.2, unit: "%", label: { en: "electricity access, any source", fr: "accès à l'électricité, toutes sources" } } },
    { sdg: 9,
      title: { en: "Connectivity Revolution", fr: "Révolution de la connectivité" },
      text: {
        en: "The Standard Gauge Railway cut Dar–Dodoma travel from 12 hours to 3, carrying 4.14 million passengers in 2025, while internet penetration surged from 48% to 85%.",
        fr: "Le chemin de fer à écartement standard a réduit le trajet Dar-Dodoma de 12 heures à 3, transportant 4,14 millions de voyageurs en 2025, tandis que la pénétration d'Internet est passée de 48 % à 85 %."
      },
      metric: { value: 85, unit: "%", label: { en: "internet penetration, up from 48%", fr: "pénétration d'Internet, contre 48 % auparavant" } } },
    { sdg: 11,
      title: { en: "Reshaping Economic Geography", fr: "Redessiner la géographie économique" },
      text: {
        en: "Expanded ports, aviation and the railway make Tanzania a regional trade and mobility hub, opening new opportunities across East Africa.",
        fr: "L'extension des ports, de l'aviation et du rail fait de la Tanzanie une plaque tournante régionale du commerce et de la mobilité, ouvrant de nouvelles perspectives en Afrique de l'Est."
      } },
    { sdg: 13,
      title: { en: "Climate Resilience Pathway", fr: "Trajectoire de résilience climatique" },
      text: {
        en: "Strengthening agriculture, water and urban systems tackles disaster preparedness and sanitation — one of three acceleration pathways for 2026–2030.",
        fr: "Le renforcement de l'agriculture, de l'eau et des systèmes urbains répond à la préparation aux catastrophes et à l'assainissement — l'une des trois trajectoires d'accélération pour 2026-2030."
      },
      metric: { value: 3, unit: "", label: { en: "acceleration pathways for 2026–2030", fr: "trajectoires d'accélération pour 2026-2030" } } },
    { sdg: 17,
      title: { en: "Fiscal Self-Reliance", fr: "Autonomie budgétaire" },
      text: {
        en: "Domestic revenue peaked at 16.4% of GDP in 2023/24 and eased to 15.1% in 2024/25, while budget self-reliance rose from 58% to 78%.",
        fr: "Les recettes intérieures ont culminé à 16,4 % du PIB en 2023-2024 puis reflué à 15,1 % en 2024-2025, tandis que l'autonomie budgétaire est passée de 58 % à 78 %."
      },
      metric: { value: 78, unit: "%", label: { en: "of the budget financed at home, up from 58%", fr: "du budget financé sur ressources propres, contre 58 %" } } }
  ],

  continuity: [
    { prev: { en: "Clean Water & Electricity Access Gains", fr: "Progrès de l'accès à l'eau potable et à l'électricité" },
      status: "sustained",
      now: { en: "Energy Security & Water Self-Reliance", fr: "Sécurité énergétique et autonomie hydrique" } },
    { prev: { en: "Infrastructure for Industry (rail, road, air)", fr: "Infrastructures au service de l'industrie (rail, route, air)" },
      status: "evolved",
      now: { en: "Connectivity Revolution & Regional Trade Hub", fr: "Révolution de la connectivité et pôle commercial régional" } },
    { prev: { en: "Recovery from Global Shocks (COVID-19, conflict)", fr: "Relance après les chocs mondiaux (COVID-19, conflits)" },
      status: "evolved",
      now: { en: "Resilience via Dira 2050 & Self-Reliance", fr: "Résilience par Dira 2050 et l'autonomie" } },
    { prev: { en: "Leave No One Behind & Human Capital", fr: "Ne laisser personne de côté et capital humain" },
      status: "sustained",
      now: { en: "Whole-of-Nation PLUS Inclusion", fr: "Inclusion « whole-of-nation PLUS »" } },
    { prev: { en: "Innovative Financing & Partnerships", fr: "Financements innovants et partenariats" },
      status: "evolved",
      now: { en: "Broadening the Tax Base & Domestic Resource Mobilization", fr: "Élargissement de l'assiette fiscale et mobilisation des ressources intérieures" } }
  ],

  concepts: {
    caption: {
      en: "Tanzania's message centres on transformation, climate resilience and fiscal self-reliance under Dira 2050.",
      fr: "Le message de la Tanzanie s'articule autour de la transformation, de la résilience climatique et de l'autonomie budgétaire dans le cadre de Dira 2050."
    },
    items: [
      { label: { en: "whole-of-nation PLUS", fr: "approche « whole-of-nation PLUS »" }, value: 10 },
      { label: { en: "fiscal self-reliance", fr: "autonomie budgétaire" }, value: 8 },
      { label: { en: "climate resilience", fr: "résilience climatique" }, value: 7 },
      { label: { en: "human capital & jobs", fr: "capital humain et emplois" }, value: 7 },
      { label: { en: "infrastructure", fr: "infrastructures" }, value: 7 },
      { label: { en: "partnerships", fr: "partenariats" }, value: 7 },
      { label: { en: "trade & connectivity", fr: "commerce et connectivité" }, value: 7 },
      { label: { en: "domestic revenue", fr: "recettes intérieures" }, value: 6 },
      { label: { en: "industrialization", fr: "industrialisation" }, value: 6 }
    ]
  },

  indicators: [
    { id: "elec_access", sdg: 7,
      label: { en: "Electricity access, any source", fr: "Accès à l'électricité, toutes sources" },
      value: 86.2, unit: "%",
      note: { en: "Grid, mini-grid and off-grid solar combined. Not the same as a grid connection. The chapter table's 85.5% is the annex's 2024 value.",
              fr: "Réseau, mini-réseaux et solaire hors réseau confondus. À distinguer du raccordement au réseau. Les 85,5 % du tableau du chapitre correspondent à la valeur 2024 de l'annexe." },
      source: "VNR 2026 · Annexe A7 (ODD 7.1.1)" },
    { id: "elec_grid", sdg: 7,
      label: { en: "Households connected to the national grid", fr: "Ménages raccordés au réseau national" },
      value: 52.1, unit: "%",
      note: { en: "Rural connectivity remains below 36%. Every village now has access to electricity; most households are still not connected to the grid.",
              fr: "Le raccordement rural reste inférieur à 36 %. Tous les villages ont désormais accès à l'électricité ; la plupart des ménages ne sont toujours pas raccordés au réseau." },
      source: "VNR 2026 · ch. 4 (ODD 7)" },
    { id: "renew", sdg: 7,
      label: { en: "Renewables, % of electricity generated", fr: "Renouvelables, en % de l'électricité produite" },
      value: 76.6, unit: "%",
      note: { en: "Driven by the 2,115 MW Julius Nyerere Hydropower Plant, which took installed capacity to 4,504.9 MW. Renewables are 73.85% of total final energy consumption.",
              fr: "Portée par la centrale hydroélectrique Julius Nyerere (2 115 MW), qui a porté la capacité installée à 4 504,9 MW. Les renouvelables représentent 73,85 % de la consommation finale totale d'énergie." },
      source: "VNR 2026 · Annexe A7 (ODD 7.2.1)" },
    { id: "water_rural", sdg: 6,
      label: { en: "Rural water coverage", fr: "Couverture rurale en eau" },
      value: 85.2, unit: "%",
      note: { en: "Regional centres reach 92.5%. Non-revenue water and sanitation are named as the acceleration priorities; sewer connectivity is rated Regressing.",
              fr: "Les centres régionaux atteignent 92,5 %. L'eau non facturée et l'assainissement sont désignés comme priorités d'accélération ; le raccordement aux égouts est jugé « en régression »." },
      source: "VNR 2026 · Annexe A6 (ODD 6.1.1)" },
    { id: "internet", sdg: 9,
      label: { en: "Internet penetration", fr: "Pénétration d'Internet" },
      value: 85, unit: "%",
      note: { en: "Up from 48%, supported by 156 new 4G sites targeting rural and peri-urban areas.",
              fr: "Contre 48 %, grâce à 156 nouveaux sites 4G ciblant les zones rurales et périurbaines." },
      source: "VNR 2026 · tableau 4.3" },
    { id: "selfreliance", sdg: 17,
      label: { en: "Budget financed by domestic revenue", fr: "Budget financé par les recettes intérieures" },
      value: 78, unit: "%",
      note: { en: "Up from 58.3% in 2020/21. This is the 2023/24 reading, the latest the report records. Domestic revenue itself peaked at 16.4% of GDP that year and eased to 15.1% in 2024/25.",
              fr: "Contre 58,3 % en 2020-2021. Il s'agit du relevé de 2023-2024, le dernier consigné par le rapport. Les recettes intérieures elles-mêmes ont culminé à 16,4 % du PIB cette année-là avant de refluer à 15,1 % en 2024-2025." },
      source: "VNR 2026 · tableau 1.1 et tableau 4.5" }
  ],


  /* ═══════════════════════════════════════════════════════════════
     RICH DASHBOARD — 7 tabs.

     Every figure is traced to the VNR 2026 Tanzania Report — either to a
     chapter table (Tables 1.1, 3.x, 4.x) or to the Selected Statistical Annex
     (Annex Tables A1–A17, which carry the full 2020–2025 series).

     Where the report contradicts itself, the ANNEX wins: the chapter tables
     repeatedly label the annex's 2024 value as "2025". Corrections applied:
       · electricity access 86.2% (Annex A7 + Executive Summary), not 85.5%;
       · household connectivity 52.1% — the 62.1% used previously is in no source;
       · renewables = 76.6% of ELECTRICITY GENERATION and 73.85% of final energy
         consumption; the Main Messages' "80% of the mix" is unsupported;
       · regional-centre water 92.5% (Annex A6), not 91.6%;
       · sewer connectivity is REGRESSING, 13.0% → 5.6%;
       · internet users 48% → 85% (four places in the report), not 49%;
       · domestic revenue 15.1% of GDP (2024/25), having PEAKED at 16.4% in 2023/24;
       · budget self-reliance baseline 58.3%, not 68.3% (68.5% is the 2021/22 value);
       · forest area 43.71m ha — the Executive Summary's "48.1m ha" is an error;
       · child labour 21.1% (2025), not the Main Messages' "one in four".
     No number below is interpolated. Charts plot documented points only.
     ═══════════════════════════════════════════════════════════════ */
  dashboard: {
    tabs: [

      /* ── TAB 1 ─────────────────────────────── Overview & Trends ── */
      {
        id: "overview",
        label: { en: "Overview & Trends", fr: "Aperçu et tendances" },
        intro: {
          en: "Tanzania's third review documents a large infrastructure build-out: generation capacity more than doubled, every region on the grid, internet penetration at 85%, rural water at 85.2%. Over the same period, manufacturing's share of GDP fell from 7.7% to 5.9%, and 95.7% of non-agricultural jobs are informal. Select a tile to open its data.",
          fr: "La troisième revue de la Tanzanie documente une importante construction d'infrastructures : capacité de production plus que doublée, toutes les régions raccordées au réseau, pénétration d'Internet à 85 %, eau rurale à 85,2 %. Sur la même période, la part de l'industrie manufacturière dans le PIB est tombée de 7,7 % à 5,9 % et 95,7 % des emplois non agricoles sont informels. Sélectionnez une tuile pour ouvrir ses données."
        },
        blocks: [

          { type: "metrics", items: [

            /* Tile 1 — SDG 7 */
            { sdg: 7,
              label: { en: "Electricity access", fr: "Accès à l'électricité" },
              value: 86.2, unit: "%",
              sub: { en: "2025, from 78.4% in 2020 — but only 52.1% of households are connected",
                     fr: "2025, contre 78,4 % en 2020 — mais seuls 52,1 % des ménages sont raccordés" },
              panel: {
                sdg: 7,
                title: { en: "Access, connection, clean cooking: three different questions, 2025",
                         fr: "Accès, raccordement, cuisson propre : trois questions distinctes, 2025" },
                chart: {
                  type: "gap", sdg: 7, unit: "%",
                  title: { en: "Access, connection, clean cooking, 2025",
                           fr: "Accès, raccordement, cuisson propre, 2025" },
                  items: [
                    { label: { en: "Electricity access, any source", fr: "Accès à l'électricité, toutes sources" }, value: 86.2, emphasis: false },
                    { label: { en: "Household connectivity", fr: "Raccordement des ménages" }, value: 52.1, emphasis: true },
                    { label: { en: "Access to clean cooking", fr: "Accès à la cuisson propre" }, value: 23.2, emphasis: true }
                  ],
                  source: "VNR 2026, Annex Table A7 · Ch. 4 (SDG 7) narrative"
                },
                text: {
                  en: "These three numbers are routinely quoted as if they were one. They are not. 86.2% of the population has electricity from some source; only 52.1% of households hold an actual connection, and rural connectivity is below 36%. Clean cooking — the indicator that decides whether household energy is safe as well as available — reaches 23.2%, and the statistical annex flags it a \"critical gap\" with a single observation since 2022. The energy build is real; the last mile into the household is not yet finished.",
                  fr: "Ces trois chiffres sont couramment cités comme s'ils n'en formaient qu'un. Ils ne se confondent pas. 86,2 % de la population dispose d'électricité par une source ou une autre ; seuls 52,1 % des ménages détiennent un raccordement effectif, et le taux de raccordement rural reste inférieur à 36 %. La cuisson propre — l'indicateur qui détermine si l'énergie domestique est sûre autant que disponible — n'atteint que 23,2 %, et l'annexe statistique la signale comme une « lacune critique », avec une seule observation depuis 2022. La construction énergétique est réelle ; le dernier kilomètre jusqu'au ménage ne l'est pas encore."
                },
                source: "VNR 2026, Annex Table A7 · Table 4.2 · Ch. 4 (SDG 7)"
              } },

            /* Tile 2 — SDG 6 */
            { sdg: 6,
              label: { en: "Rural water access", fr: "Accès à l'eau en milieu rural" },
              value: 85.2, unit: "%",
              sub: { en: "2025, from 72.3% in 2020 — while sewer connectivity fell to 5.6%",
                     fr: "2025, contre 72,3 % en 2020 — tandis que le raccordement aux égouts est tombé à 5,6 %" },
              panel: {
                sdg: 6,
                title: { en: "Water coverage high; sanitation coverage low",
                         fr: "Couverture d'eau élevée, assainissement faible" },
                chart: {
                  type: "gap", sdg: 6, unit: "%",
                  title: { en: "Water is nearly universal; sanitation and hygiene are not",
                           fr: "L'eau est quasi universelle ; l'assainissement et l'hygiène ne le sont pas" },
                  items: [
                    { label: { en: "Dar es Salaam water access (2025)", fr: "Accès à l'eau, Dar es Salaam (2025)" }, value: 94.5, emphasis: false },
                    { label: { en: "Regional centre water access (2025)", fr: "Accès à l'eau, centres régionaux (2025)" }, value: 92.5, emphasis: false },
                    { label: { en: "Rural water access (2025)", fr: "Accès à l'eau en milieu rural (2025)" }, value: 85.2, emphasis: false },
                    { label: { en: "Adequate hygiene services (2025)", fr: "Services d'hygiène adéquats (2025)" }, value: 26, emphasis: true },
                    { label: { en: "Sewer connectivity, regional centres (2024)", fr: "Raccordement aux égouts, centres régionaux (2024)" }, value: 5.6, emphasis: true }
                  ],
                  source: "VNR 2026, Annex Table A6 · Ch. 4 (SDG 6) narrative"
                },
                text: {
                  en: "Water supply advanced across the period: rural coverage up nearly thirteen percentage points, regional centres at 92.5%, Dar es Salaam at 94.5%. Sanitation moved differently. Sewer connectivity in regional centres is rated \"regressing\" — 13.0% in 2020 against 5.6% in 2024 — about a quarter of the population has adequate hygiene services, and non-revenue water in Dar es Salaam is about 40%, the one SDG 6 indicator rated \"not on track\".",
                  fr: "L'approvisionnement en eau a progressé sur la période : la couverture rurale gagne près de treize points de pourcentage, les centres régionaux atteignent 92,5 % et Dar es Salaam 94,5 %. L'assainissement a évolué différemment. Le raccordement aux égouts dans les centres régionaux est classé « en régression » — 13,0 % en 2020 contre 5,6 % en 2024 —, environ un quart de la population dispose de services d'hygiène adéquats et l'eau non facturée à Dar es Salaam avoisine 40 %, seul indicateur de l'ODD 6 jugé « hors trajectoire »."
                },
                source: "VNR 2026, Table 4.1 · Annex Table A6"
              } },

            /* Tile 3 — SDG 9 */
            { sdg: 9,
              label: { en: "Manufacturing, % of GDP", fr: "Industrie manufacturière, en % du PIB" },
              value: 5.9, unit: "%",
              sub: { en: "2025, down from 7.7% in 2020",
                     fr: "2025, contre 7,7 % en 2020" },
              panel: {
                sdg: 9,
                title: { en: "Manufacturing value added, % of GDP, 2020–2025",
                         fr: "Valeur ajoutée manufacturière, en % du PIB, 2020-2025" },
                chart: {
                  type: "line", sdg: 9, unit: "%",
                  title: { en: "Manufacturing value added, % of GDP",
                           fr: "Valeur ajoutée manufacturière, en % du PIB" },
                  series: [
                    { key: "mva", label: { en: "Manufacturing value added", fr: "Valeur ajoutée manufacturière" },
                      points: [ { x: "2020", y: 7.7 }, { x: "2021", y: 7.2 }, { x: "2022", y: 7.1 },
                                { x: "2023", y: 7.1 }, { x: "2024", y: 7.3 }, { x: "2025", y: 5.9 } ] }
                  ],
                  source: "VNR 2026, Annex Table A9 (9.2.1)"
                },
                text: {
                  en: "The report names structural transformation as \"the central implementation gap\". Over the five years in which Tanzania doubled generation capacity, put every region on the grid and quadrupled rail passengers, the manufacturing share of GDP fell by nearly two percentage points, with the sharpest drop in the final year. The SME share of industrial value added rose from 7.2% to 11.6%.",
                  fr: "Le rapport désigne la transformation structurelle comme « la principale lacune de mise en œuvre ». Pendant les cinq années où la Tanzanie a doublé sa capacité de production, raccordé toutes ses régions au réseau et quadruplé le trafic ferroviaire de voyageurs, la part de l'industrie manufacturière dans le PIB a reculé de près de deux points de pourcentage, la chute la plus marquée intervenant la dernière année. La part des PME dans la valeur ajoutée industrielle est passée de 7,2 % à 11,6 %."
                },
                source: "VNR 2026, Table 4.3 · Annex Table A9"
              } },

            /* Tile 4 — SDG 8 */
            { sdg: 8,
              label: { en: "Informal employment", fr: "Emploi informel" },
              value: 95.7, unit: "%",
              sub: { en: "of non-agricultural jobs, 2025 — and 97.1% for women",
                     fr: "des emplois non agricoles, 2025 — et 97,1 % pour les femmes" },
              panel: {
                sdg: 8,
                title: { en: "Informal employment, non-agricultural, 2021–2025",
                         fr: "Emploi informel non agricole, 2021-2025" },
                chart: {
                  type: "line", sdg: 8, unit: "%",
                  title: { en: "Informal share of non-agricultural employment",
                           fr: "Part informelle de l'emploi non agricole" },
                  series: [
                    { key: "informal", label: { en: "Informal employment, total", fr: "Emploi informel, total" },
                      points: [ { x: "2021", y: 92.5 }, { x: "2024", y: 94.6 }, { x: "2025", y: 95.7 } ] }
                  ],
                  source: "VNR 2026, Table 3.8 · Annex Table A8 (8.3.1)"
                },
                text: {
                  en: "Informal employment rose from 92.5% of non-agricultural employment in 2021 to 95.7% in 2025, reaching 97.1% among women. Informality narrows the tax base that finances the SDGs, and formal industrial jobs remain limited alongside the falling manufacturing share. Unemployment fell to 5.9% over the same period.",
                  fr: "L'emploi informel est passé de 92,5 % de l'emploi non agricole en 2021 à 95,7 % en 2025, et atteint 97,1 % chez les femmes. L'informalité réduit l'assiette fiscale qui finance les ODD, et les emplois industriels formels restent limités, au regard du recul de la part manufacturière. Le chômage est tombé à 5,9 % sur la même période."
                },
                source: "VNR 2026, Table 3.8 · Annex Table A8"
              } },

            /* Tile 5 — SDG 17 */
            { sdg: 17,
              label: { en: "Domestic revenue, % of GDP", fr: "Recettes intérieures, en % du PIB" },
              value: 15.1, unit: "%",
              sub: { en: "2024/25 — down from a 16.4% peak in 2023/24",
                     fr: "2024-2025 — en recul par rapport au sommet de 16,4 % en 2023-2024" },
              panel: {
                sdg: 17,
                title: { en: "Domestic revenue, % of GDP, 2020/21–2024/25",
                         fr: "Recettes intérieures, en % du PIB, 2020-2021 à 2024-2025" },
                chart: {
                  type: "line", sdg: 17, unit: "%",
                  title: { en: "Domestic revenue, % of GDP", fr: "Recettes intérieures, en % du PIB" },
                  series: [
                    { key: "dom", label: { en: "Domestic revenue", fr: "Recettes intérieures" },
                      points: [ { x: "2020/21", y: 13.3 }, { x: "2021/22", y: 14.9 }, { x: "2022/23", y: 15.2 },
                                { x: "2023/24", y: 16.4 }, { x: "2024/25", y: 15.1 } ] }
                  ],
                  source: "VNR 2026, Annex Table A17 (17.1.1)"
                },
                text: {
                  en: "Domestic revenue rose by three percentage points of GDP in three years, then fell back in 2024/25 to 15.1%. The 16.4% cited in the Main Messages is the 2023/24 peak; 15.1% is the latest reading. Tax revenue has the same shape, peaking at 14.9% of GDP in 2022/23 before easing to about 13.3%. The base strengthened over the period and has begun to ease, while FYDP IV is costed on the assumption that it will not.",
                  fr: "Les recettes intérieures ont gagné trois points de pourcentage du PIB en trois ans, avant de refluer à 15,1 % en 2024-2025. Les 16,4 % cités dans les messages clés correspondent au sommet de 2023-2024 ; 15,1 % est le dernier relevé. Les recettes fiscales suivent la même courbe : culminant à 14,9 % du PIB en 2022-2023, elles retombent à environ 13,3 %. La base s'est renforcée sur la période et a commencé à fléchir, alors que le 4e Plan quinquennal est chiffré sur l'hypothèse inverse."
                },
                source: "VNR 2026, Table 1.1 · Annex Table A17"
              } },

            /* Tile 6 — SDG 15 */
            { sdg: 15,
              label: { en: "Forest area", fr: "Superficie forestière" },
              value: 43.71, unit: " M ha",
              sub: { en: "2025, from 46.06 M ha in 2020 — down each year",
                     fr: "2025, contre 46,06 M ha en 2020 — en recul chaque année" },
              panel: {
                sdg: 15,
                title: { en: "Forest area, million hectares, 2020–2025",
                         fr: "Superficie forestière, en millions d'hectares, 2020-2025" },
                chart: {
                  type: "line", sdg: 15, unit: " M ha",
                  title: { en: "Forest area, million hectares", fr: "Superficie forestière, en millions d'hectares" },
                  series: [
                    { key: "forest", label: { en: "Forest area", fr: "Superficie forestière" },
                      points: [ { x: "2020", y: 46.06 }, { x: "2021", y: 45.59 }, { x: "2022", y: 45.12 },
                                { x: "2023", y: 44.65 }, { x: "2024", y: 44.18 }, { x: "2025", y: 43.71 } ] }
                  ],
                  source: "VNR 2026, Annex Table A15 (15.1.1)"
                },
                text: {
                  en: "Forest area has fallen every year of the review period — a cumulative loss of 2.35 million hectares, 5% of the 2020 stock. Greenhouse gas emissions rose from 95,000 to 101,000 Gg CO2e, land degradation affects 50–61% of the land area, and marine key-biodiversity-area coverage has held at 53.6% since 2020. SDG 14 and SDG 15 are the two goals the national dashboard rates \"requires attention\". (The SDG 15 table and annex give 43.71 million hectares; the value shown here follows the annex.)",
                  fr: "La superficie forestière a reculé chaque année de la période sous revue — une perte cumulée de 2,35 millions d'hectares, soit 5 % du stock de 2020. Les émissions de gaz à effet de serre sont passées de 95 000 à 101 000 Gg éq. CO2, la dégradation des terres touche 50 à 61 % du territoire et la couverture des zones marines clés pour la biodiversité se maintient à 53,6 % depuis 2020. Les ODD 14 et 15 sont les deux objectifs que le tableau de bord national classe « nécessite une attention particulière ». (Le tableau de l'ODD 15 et l'annexe retiennent 43,71 millions d'hectares ; la valeur affichée ici suit l'annexe.)"
                },
                source: "VNR 2026, Table 3.13 (SDG 15) · Annex Tables A13, A14, A15"
              } }
          ] },

          { type: "table",
            title: { en: "Headline macroeconomic and fiscal indicators, 2020–2025",
                     fr: "Indicateurs macroéconomiques et budgétaires clés, 2020-2025" },
            rows: [
              { label: { en: "GDP real growth rate", fr: "Croissance réelle du PIB" },
                from: 4.5, fromYear: "2020", to: 5.9, toYear: "2025", unit: "%", dir: "up",
                status: { en: "Recovery path; the annex series ends at 5.5% in 2024",
                          fr: "Trajectoire de reprise ; la série de l'annexe s'arrête à 5,5 % en 2024" } },
              { label: { en: "Inflation", fr: "Inflation" },
                from: 3.3, fromYear: "2020", to: 3.3, toYear: "2025", unit: "%", dir: "flat",
                status: { en: "Stable, within the medium-term target range",
                          fr: "Stable, dans la fourchette cible à moyen terme" } },
              { label: { en: "GDP per capita (market rates)", fr: "PIB par habitant (taux de marché)" },
                from: 1172, fromYear: "2020", to: 1390, toYear: "2025", unit: " USD", dir: "up",
                status: { en: "Lower-middle-income status sustained",
                          fr: "Statut de pays à revenu intermédiaire de la tranche inférieure maintenu" } },
              { label: { en: "Manufacturing, % of GDP", fr: "Industrie manufacturière, en % du PIB" },
                from: 7.7, fromYear: "2020", to: 5.9, toYear: "2025", unit: "%", dir: "down",
                status: { en: "Falling over 2020–2025",
                          fr: "En recul sur 2020-2025" } },
              { label: { en: "Informal employment, non-agricultural", fr: "Emploi informel non agricole" },
                from: 92.5, fromYear: "2021", to: 95.7, toYear: "2025", unit: "%", dir: "up",
                status: { en: "Rising; 97.1% among women. Formalization is the priority",
                          fr: "En hausse ; 97,1 % chez les femmes. La formalisation est la priorité" } },
              { label: { en: "Tourism earnings, USD billion", fr: "Recettes touristiques, en milliards d'USD" },
                from: 0.71, fromYear: "2020", to: 4.2, toYear: "2025", unit: "", dir: "up",
                status: { en: "Strong post-pandemic recovery; 2.14 million arrivals in 2024",
                          fr: "Forte reprise post-pandémie ; 2,14 millions d'arrivées en 2024" } },
              { label: { en: "Internet users", fr: "Utilisateurs d'Internet" },
                from: 48, fromYear: "2020", to: 85, toYear: "2025", unit: "%", dir: "up",
                status: { en: "48% in 2020 per the report",
                          fr: "48 % en 2020 selon le rapport" } },
              { label: { en: "Tax revenue, % of GDP", fr: "Recettes fiscales, en % du PIB" },
                from: 11.2, fromYear: "2020/21", to: 13.3, toYear: "2024/25", unit: "%", dir: "up",
                status: { en: "Improving, but below the 14.9% peak of 2022/23",
                          fr: "En amélioration, mais en deçà du sommet de 14,9 % de 2022-2023" } },
              { label: { en: "Domestic revenue, % of GDP", fr: "Recettes intérieures, en % du PIB" },
                from: 13.3, fromYear: "2020/21", to: 15.1, toYear: "2024/25", unit: "%", dir: "up",
                status: { en: "Peaked at 16.4% in 2023/24 and fell back in the latest year",
                          fr: "Sommet de 16,4 % en 2023-2024, puis repli lors du dernier exercice" } },
              { label: { en: "Budget self-reliance", fr: "Autonomie budgétaire" },
                from: 58.3, fromYear: "2020/21", to: 78.0, toYear: "2023/24", unit: "%", dir: "up",
                status: { en: "Share of the budget financed from domestic revenue. No 2024/25 value",
                          fr: "Part du budget financée sur recettes intérieures. Aucune valeur pour 2024-2025" } },
              { label: { en: "Public debt, % of GDP", fr: "Dette publique, en % du PIB" },
                from: 41.3, fromYear: "2020/21", to: 51.0, toYear: "2024/25", unit: "%", dir: "up",
                status: { en: "The report's own reading: \"requires careful management\"",
                          fr: "Selon le rapport lui-même : « à gérer avec prudence »" } },
              { label: { en: "Child labour", fr: "Travail des enfants" },
                from: 24.9, fromYear: "2021", to: 21.1, toYear: "2025", unit: "%", dir: "down",
                status: { en: "Down from 24.9% in 2021; 21.1% is the 2025 reading",
                          fr: "En recul depuis 24,9 % en 2021 ; 21,1 % est le relevé de 2025" } }
            ],
            source: "VNR 2026, Table 1.1 · Tables 3.8, 4.3 · Annex Tables A8, A9, A17" }
        ]
      },

      /* ── TAB 2 ───────────────────────────── 2026 Focus Goals ── */
      {
        id: "goals",
        label: { en: "2026 Focus Goals", fr: "Objectifs prioritaires 2026" },
        intro: {
          en: "The HLPF reviews SDGs 6, 7, 9, 11 and 17 in depth in 2026, and Chapter 4 of the review is organised around exactly those five goals. Three of them (6, 7, 17) the national dashboard rates \"on track\"; two (9, 11) it rates \"mixed\". Select a goal to see what was achieved and what the report itself names as the priority ahead.",
          fr: "Le FPHN examine en profondeur les ODD 6, 7, 9, 11 et 17 en 2026, et le chapitre 4 de la revue est organisé autour de ces cinq objectifs précisément. Le tableau de bord national en juge trois « en bonne voie » (6, 7, 17) et deux « contrastés » (9, 11). Sélectionnez un objectif pour voir ce qui a été accompli et ce que le rapport désigne lui-même comme la priorité à venir."
        },
        blocks: [
          { type: "goals", items: [

            /* SDG 6 */
            { sdg: 6,
              headline: { en: "Water access high; sanitation lagging",
                          fr: "Accès à l'eau élevé ; assainissement en retard" },
              stats: [
                { label: { en: "Rural water access (2025)", fr: "Accès à l'eau en milieu rural (2025)" }, value: 85.2, unit: "%" },
                { label: { en: "Regional centres (2025)", fr: "Centres régionaux (2025)" }, value: 92.5, unit: "%" },
                { label: { en: "Non-revenue water, Dar es Salaam", fr: "Eau non facturée, Dar es Salaam" }, value: 40.0, unit: "%" },
                { label: { en: "Adequate hygiene services", fr: "Services d'hygiène adéquats" }, value: 26, unit: "%" }
              ],
              chart: {
                type: "line", sdg: 6, unit: "%",
                title: { en: "Water access by settlement type, 2020–2025",
                         fr: "Accès à l'eau par type de localité, 2020-2025" },
                series: [
                  { key: "dsm", label: { en: "Dar es Salaam", fr: "Dar es Salaam" },
                    points: [ { x: "2020", y: 89.0 }, { x: "2021", y: 90.0 }, { x: "2022", y: 90.0 },
                              { x: "2023", y: 92.5 }, { x: "2024", y: 93.0 }, { x: "2025", y: 94.5 } ] },
                  { key: "reg", label: { en: "Regional centres", fr: "Centres régionaux" },
                    points: [ { x: "2020", y: 86.0 }, { x: "2021", y: 86.5 }, { x: "2022", y: 88.0 },
                              { x: "2023", y: 90.0 }, { x: "2024", y: 91.6 }, { x: "2025", y: 92.5 } ] },
                  { key: "rural", label: { en: "Rural", fr: "Milieu rural" },
                    points: [ { x: "2020", y: 72.3 }, { x: "2021", y: 74.5 }, { x: "2022", y: 77.0 },
                              { x: "2023", y: 79.6 }, { x: "2024", y: 83.0 }, { x: "2025", y: 85.2 } ] }
                ],
                insight: {
                  en: "The rural line climbs almost thirteen percentage points and closes roughly half the gap with the towns. Note that the chapter table reports regional centres at 91.6% \"in 2025\" — that is the annex's 2024 value; the 2025 figure is 92.5%.",
                  fr: "La courbe rurale gagne près de treize points de pourcentage et comble environ la moitié de l'écart avec les villes. À noter : le tableau du chapitre situe les centres régionaux à 91,6 % « en 2025 » — il s'agit de la valeur 2024 de l'annexe ; le chiffre de 2025 est 92,5 %."
                },
                source: "VNR 2026, Annex Table A6 (6.1.1)"
              },
              achievement: {
                en: "Rural water access rose from 72.3% to 85.2% and regional centres reached 92.5%, with Dar es Salaam at 94.5%. Nine Basin Water Boards were reinforced, seven of nine basins now hold IWRM plans, water-quality monitoring networks more than doubled from 16 to 38, and discharge permits granted rose from 11 a year to 92. All of it was delivered while the population grew from 33.6 million in 2002 to 61.7 million in 2022.",
                fr: "L'accès à l'eau en milieu rural est passé de 72,3 % à 85,2 % et les centres régionaux ont atteint 92,5 %, Dar es Salaam culminant à 94,5 %. Neuf offices de bassin ont été renforcés, sept bassins sur neuf disposent désormais d'un plan de GIRE, les réseaux de surveillance de la qualité de l'eau ont plus que doublé (de 16 à 38) et les autorisations de rejet accordées sont passées de 11 à 92 par an. Le tout a été réalisé alors que la population passait de 33,6 millions d'habitants en 2002 à 61,7 millions en 2022."
              },
              priority: {
                en: "Sanitation, not water, is the SDG 6 priority. Sewer connectivity in regional centres is rated \"regressing\" (13.0% in 2020, 5.6% in 2024); only 26% of the population has adequate hygiene services and open defecation persists in some regions; non-revenue water in Dar es Salaam is about 40% against a 25% target for 2029, and is the goal's only \"not on track\" indicator. Per-capita water availability has fallen from 3,678 to 2,105 m³ a year. Safely managed sanitation is itself contested — the annex records 64.6% for 2025, the chapter table 78.5%, and the report's own priority response on that row reads \"clarify methodology\".",
                fr: "La priorité de l'ODD 6 porte sur l'assainissement, non sur l'eau. Le raccordement aux égouts dans les centres régionaux est classé « en régression » (13,0 % en 2020, 5,6 % en 2024) ; seuls 26 % de la population disposent de services d'hygiène adéquats et la défécation à l'air libre persiste dans certaines régions ; l'eau non facturée à Dar es Salaam avoisine 40 %, contre une cible de 25 % pour 2029, et constitue le seul indicateur de l'objectif jugé « hors trajectoire ». La disponibilité en eau par habitant est tombée de 3 678 à 2 105 m³ par an. L'assainissement géré en toute sécurité est lui-même contesté : l'annexe retient 64,6 % pour 2025, le tableau du chapitre 78,5 %, et la réponse prioritaire inscrite par le rapport sur cette ligne est « clarifier la méthodologie »."
              },
              source: "VNR 2026, Table 4.1 · Annex Table A6 · Ch. 4 (SDG 6)" },

            /* SDG 7 */
            { sdg: 7,
              headline: { en: "Capacity more than doubled in a year; household connection still partial",
                          fr: "Capacité plus que doublée en un an ; le raccordement des ménages reste partiel" },
              stats: [
                { label: { en: "Installed capacity (2025)", fr: "Capacité installée (2025)" }, value: 4504.9, unit: " MW" },
                { label: { en: "Electricity access (2025)", fr: "Accès à l'électricité (2025)" }, value: 86.2, unit: "%" },
                { label: { en: "Renewables, % of electricity generated", fr: "Renouvelables, en % de l'électricité produite" }, value: 76.6, unit: "%" },
                { label: { en: "Clean cooking access (2025)", fr: "Accès à la cuisson propre (2025)" }, value: 23.2, unit: "%" }
              ],
              chart: {
                type: "line", sdg: 7, unit: " MW",
                title: { en: "Installed generation capacity, MW, 2020–2025",
                         fr: "Capacité de production installée, en MW, 2020-2025" },
                series: [
                  { key: "cap", label: { en: "Installed capacity", fr: "Capacité installée" },
                    points: [ { x: "2020", y: 2100 }, { x: "2021", y: 1574 }, { x: "2022", y: 1518 },
                              { x: "2023", y: 1662 }, { x: "2024", y: 2411 }, { x: "2025", y: 4504.9 } ] }
                ],
                insight: {
                  en: "Capacity actually contracted between 2020 and 2022, before the investment cycle landed. The step change in 2025 is the Julius Nyerere Hydropower Plant coming on line: 2,115 MW, on its own close to the entire national fleet of 2022.",
                  fr: "La capacité s'est en réalité contractée entre 2020 et 2022, avant que le cycle d'investissement ne produise ses effets. Le saut de 2025 correspond à la mise en service de la centrale Julius Nyerere : 2 115 MW, soit à elle seule presque l'équivalent de tout le parc national de 2022."
                },
                source: "VNR 2026, Annex Table A7 (7.1.1)"
              },
              achievement: {
                en: "Installed generation capacity went from 2,100 MW to 4,504.9 MW, driven by the 2,115 MW Julius Nyerere Hydropower Plant. All 26 regions are now connected to the national grid (23 in 2023), grid length reached 8,500 km, every village has grid access, and electricity access rose from 78.4% to 86.2%. Renewables supply 76.6% of the electricity generated and 73.85% of total final energy consumption. Consumption per person climbed from 131 to 152 kWh.",
                fr: "La capacité de production installée est passée de 2 100 MW à 4 504,9 MW, portée par la centrale hydroélectrique Julius Nyerere (2 115 MW). Les 26 régions sont désormais raccordées au réseau national (contre 23 en 2023), la longueur du réseau atteint 8 500 km, tous les villages ont accès au réseau et l'accès à l'électricité est passé de 78,4 % à 86,2 %. Les renouvelables assurent 76,6 % de l'électricité produite et 73,85 % de la consommation finale totale d'énergie. La consommation par habitant est passée de 131 à 152 kWh."
              },
              priority: {
                en: "Convert capacity into connections, and connections into productive demand. Household connectivity stands at 52.1% and rural connectivity below 36%; clean cooking, at 23.2%, is the indicator the report names explicitly, and the annex rates it a \"critical gap\" with one observation since 2022. On reliability: SAIDI runs to 599 minutes a year across roughly ten interruptions, and transmission and distribution losses are unchanged (15.3% in 2020, 15.0% in 2025). On renewables: 76.6% is the share of electricity generated, and 73.85% the share of final energy consumption.",
                fr: "Convertir la capacité en raccordements, et les raccordements en demande productive. Le taux de raccordement des ménages s'établit à 52,1 % et celui des zones rurales reste inférieur à 36 % ; la cuisson propre, à 23,2 %, est l'indicateur que le rapport désigne explicitement, et l'annexe la classe « lacune critique », avec une seule observation depuis 2022. Sur la fiabilité : l'indice SAIDI atteint 599 minutes par an pour une dizaine d'interruptions, et les pertes de transport et de distribution sont stables (15,3 % en 2020, 15,0 % en 2025). Sur les renouvelables : 76,6 % est la part de l'électricité produite, et 73,85 % celle de la consommation finale d'énergie."
              },
              source: "VNR 2026, Table 4.2 · Annex Table A7 · Ch. 4 (SDG 7)" },

            /* SDG 9 */
            { sdg: 9,
              headline: { en: "A connectivity revolution that has not yet produced an industrial one",
                          fr: "Une révolution de la connectivité qui n'a pas encore produit de révolution industrielle" },
              stats: [
                { label: { en: "Railway passengers (2025)", fr: "Voyageurs ferroviaires (2025)" }, value: 4.14, unit: " M" },
                { label: { en: "Internet users (2025)", fr: "Utilisateurs d'Internet (2025)" }, value: 85, unit: "%" },
                { label: { en: "Manufacturing, % of GDP", fr: "Industrie manufacturière, en % du PIB" }, value: 5.9, unit: "%" },
                { label: { en: "SME share of industrial value added", fr: "Part des PME dans la valeur ajoutée industrielle" }, value: 11.6, unit: "%" }
              ],
              chart: {
                type: "line", sdg: 9, unit: " M",
                title: { en: "Railway passengers, millions, 2020–2025",
                         fr: "Voyageurs ferroviaires, en millions, 2020-2025" },
                series: [
                  { key: "rail", label: { en: "Railway passengers", fr: "Voyageurs ferroviaires" },
                    points: [ { x: "2020", y: 1.28 }, { x: "2021", y: 1.28 }, { x: "2022", y: 1.36 },
                              { x: "2023", y: 1.25 }, { x: "2024", y: 2.42 }, { x: "2025", y: 4.14 } ] }
                ],
                insight: {
                  en: "The Standard Gauge Railway more than trebled passenger volumes in two years and cut the Dar es Salaam–Dodoma journey from twelve hours to three. Rail freight moved the other way, from 539,000 tonnes in 2020 to 438,000 in 2025 — the network currently moves people, not goods.",
                  fr: "Le chemin de fer à écartement standard a plus que triplé le trafic voyageurs en deux ans et ramené le trajet Dar es Salaam-Dodoma de douze heures à trois. Le fret ferroviaire a évolué en sens inverse : de 539 000 tonnes en 2020 à 438 000 en 2025 — le réseau transporte aujourd'hui des personnes, pas des marchandises."
                },
                source: "VNR 2026, Annex Table A9 (9.1.2)"
              },
              achievement: {
                en: "Railway passengers rose from 1.28 million to 4.14 million and air passengers from 2.77 million to 8.11 million; maritime freight reached 29.1 million tonnes in 2024. Internet users went from 48% to 85% of the population, 4G coverage from 55% to 94%, 5G reached 30%, and the first 123,052 fibre-to-the-home subscriptions were recorded. R&D spending rose from 0.6% to 1.06% of GDP, and the SME share of industrial value added climbed steadily from 7.2% to 11.6%.",
                fr: "Le trafic ferroviaire de voyageurs est passé de 1,28 million à 4,14 millions et le trafic aérien de 2,77 millions à 8,11 millions ; le fret maritime a atteint 29,1 millions de tonnes en 2024. Les utilisateurs d'Internet sont passés de 48 % à 85 % de la population, la couverture 4G de 55 % à 94 %, la 5G atteint 30 % et les 123 052 premiers abonnements à la fibre jusqu'au domicile ont été enregistrés. Les dépenses de R&D sont passées de 0,6 % à 1,06 % du PIB et la part des PME dans la valeur ajoutée industrielle a progressé régulièrement de 7,2 % à 11,6 %."
              },
              priority: {
                en: "Manufacturing declined: 7.7% of GDP in 2020, 5.9% in 2025, with the steepest fall in the final year. Rail freight is declining even as rail passengers surge. Only 15% of the road network is paved. The review's own conclusion is that infrastructure must now be converted into value addition — through industrial corridors along the railway that package reliable power with serviced land, logistics, water, waste treatment and skills centres; through agro-processing clusters in cashew, coffee and horticulture; and through SME finance and supplier development. Digital access, likewise, has to translate into productivity rather than remain a consumption story.",
                fr: "L'industrie manufacturière recule : 7,7 % du PIB en 2020, 5,9 % en 2025, avec la chute la plus forte lors de la dernière année. Le fret ferroviaire décline alors même que le trafic voyageurs s'envole. Seuls 15 % du réseau routier sont revêtus. La revue conclut elle-même que les infrastructures doivent désormais être converties en valeur ajoutée : par des corridors industriels le long du chemin de fer associant électricité fiable, terrains viabilisés, logistique, eau, traitement des déchets et centres de formation ; par des grappes agro-industrielles dans la noix de cajou, le café et l'horticulture ; et par le financement des PME et le développement des fournisseurs. De même, l'accès numérique doit se traduire en productivité et non rester une histoire de consommation."
              },
              source: "VNR 2026, Table 4.3 · Annex Table A9 · Case Box 4.3" },

            /* SDG 11 */
            { sdg: 11,
              headline: { en: "Mobility and waste improving; disaster exposure and air quality are not",
                          fr: "Mobilité et déchets en progrès ; exposition aux catastrophes et qualité de l'air en recul" },
              stats: [
                { label: { en: "Public transport access, women (2025)", fr: "Accès aux transports publics, femmes (2025)" }, value: 53.5, unit: "%" },
                { label: { en: "Solid waste collected, Dar es Salaam", fr: "Déchets solides collectés, Dar es Salaam" }, value: 55, unit: "%" },
                { label: { en: "Districts with DRR strategies", fr: "Districts dotés d'une stratégie de RRC" }, value: 25.53, unit: "%" },
                { label: { en: "Disaster-affected per 100,000 (2025)", fr: "Personnes touchées par des catastrophes pour 100 000 (2025)" }, value: 284, unit: "" }
              ],
              chart: {
                type: "line", sdg: 11, unit: "%",
                title: { en: "Access to public transport, by sex, 2020–2025",
                         fr: "Accès aux transports publics, par sexe, 2020-2025" },
                series: [
                  { key: "m", label: { en: "Men", fr: "Hommes" },
                    points: [ { x: "2020", y: 47.5 }, { x: "2021", y: 49.0 }, { x: "2022", y: 51.3 },
                              { x: "2023", y: 53.8 }, { x: "2024", y: 55.0 }, { x: "2025", y: 56.2 } ] },
                  { key: "f", label: { en: "Women", fr: "Femmes" },
                    points: [ { x: "2020", y: 43.2 }, { x: "2021", y: 45.0 }, { x: "2022", y: 47.4 },
                              { x: "2023", y: 50.2 }, { x: "2024", y: 51.8 }, { x: "2025", y: 53.5 } ] }
                ],
                insight: {
                  en: "Both lines rise by roughly ten percentage points, and the gap between them narrows only marginally — from 4.3 percentage points to 2.7. Expanding the network has helped women and men about equally; it has not, on its own, closed the gender gap in urban mobility.",
                  fr: "Les deux courbes gagnent une dizaine de points de pourcentage et l'écart entre elles ne se resserre que marginalement, de 4,3 à 2,7 points de pourcentage. L'extension du réseau a profité à peu près également aux femmes et aux hommes ; elle n'a pas, à elle seule, comblé l'écart entre les sexes dans la mobilité urbaine."
                },
                source: "VNR 2026, Annex Table A11 (11.2.1)"
              },
              achievement: {
                en: "Access to public transport rose to 56.2% for men and 53.5% for women; solid-waste collection in Dar es Salaam reached 55%; districts with disaster risk reduction strategies rose from 15.4% to 25.5%; heritage expenditure grew from USD 300 million to 488 million. Informal settlements declined to 60.1% of general land, 139 District Land and Housing Tribunals are operational, and urbanisation stands at 35.76% of the population.",
                fr: "L'accès aux transports publics a atteint 56,2 % pour les hommes et 53,5 % pour les femmes ; la collecte des déchets solides à Dar es Salaam atteint 55 % ; la part des districts dotés d'une stratégie de réduction des risques de catastrophe est passée de 15,4 % à 25,5 % ; les dépenses en faveur du patrimoine sont passées de 300 à 488 millions d'USD. Les établissements informels sont retombés à 60,1 % des terres générales, 139 tribunaux fonciers et du logement de district sont opérationnels et le taux d'urbanisation s'établit à 35,76 % de la population."
              },
              priority: {
                en: "Urban resilience is not keeping pace with urban growth. Disaster-affected persons rose from 261 to 284 per 100,000, flood losses ran at USD 500 million in 2025, PM2.5 in Dar es Salaam remains elevated at 32.5 µg/m³, and open space has shrunk every year, from 6.5% to 5.5% of built-up area. Three-quarters of districts still have no DRR strategy, against a target of full coverage by 2028. One caution for readers: the report carries two different disaster-exposure series — the SDG 11 series shown here rises to 284 per 100,000, while the SDG 13 series falls to 139. They are not reconciled in the report, and they should not be averaged.",
                fr: "La résilience urbaine ne suit pas le rythme de la croissance urbaine. Le nombre de personnes touchées par des catastrophes est passé de 261 à 284 pour 100 000, les pertes dues aux inondations ont atteint 500 millions d'USD en 2025, les PM2,5 restent élevées à Dar es Salaam (32,5 µg/m³) et les espaces ouverts se réduisent chaque année, de 6,5 % à 5,5 % de la zone bâtie. Les trois quarts des districts demeurent sans stratégie de RRC, alors que la couverture intégrale est visée pour 2028. Une mise en garde pour le lecteur : le rapport comporte deux séries distinctes d'exposition aux catastrophes — celle de l'ODD 11, présentée ici, monte à 284 pour 100 000, tandis que celle de l'ODD 13 descend à 139. Elles ne sont pas réconciliées dans le rapport et ne doivent pas être moyennées."
              },
              source: "VNR 2026, Table 4.4 · Annex Tables A11, A13" },

            /* SDG 17 */
            { sdg: 17,
              headline: { en: "Four-fifths of the budget is now financed from domestic revenue",
                          fr: "Quatre cinquièmes du budget proviennent désormais de ressources propres" },
              stats: [
                { label: { en: "Budget self-reliance (2023/24)", fr: "Autonomie budgétaire (2023-2024)" }, value: 78.0, unit: "%" },
                { label: { en: "Domestic revenue, % of GDP (2024/25)", fr: "Recettes intérieures, en % du PIB (2024-2025)" }, value: 15.1, unit: "%" },
                { label: { en: "Public debt, % of GDP (2024/25)", fr: "Dette publique, en % du PIB (2024-2025)" }, value: 51.0, unit: "%" },
                { label: { en: "Partner projects aligned to national plans", fr: "Projets des partenaires alignés sur les plans nationaux" }, value: 95.74, unit: "%" }
              ],
              chart: {
                type: "line", sdg: 17, unit: "%",
                title: { en: "Budget self-reliance, % of the budget financed from domestic revenue",
                         fr: "Autonomie budgétaire, part du budget financée sur recettes intérieures" },
                series: [
                  { key: "self", label: { en: "Budget self-reliance", fr: "Autonomie budgétaire" },
                    points: [ { x: "2020/21", y: 58.3 }, { x: "2021/22", y: 68.5 },
                              { x: "2022/23", y: 70.7 }, { x: "2023/24", y: 78.0 } ] }
                ],
                insight: {
                  en: "Four points, because the annex records four — there is no 2024/25 observation. The baseline is 58.3%; the 2021/22 value is 68.5%.",
                  fr: "Quatre points, parce que l'annexe n'en consigne que quatre : il n'existe pas d'observation pour 2024-2025. La référence est 58,3 % ; la valeur 2021-2022 est de 68,5 %."
                },
                source: "VNR 2026, Annex Table A17 (17.1.2)"
              },
              achievement: {
                en: "Budget self-reliance rose from 58.3% in 2020/21 to 78.0% in 2023/24, and domestic revenue from 13.3% to a peak of 16.4% of GDP. The national budget grew from TZS 37.98 trillion in 2020/21 to TZS 56.49 trillion in 2025/26. ODA commitments increased from USD 2.65 billion to 3.19 billion, and 95.74% of partner project objectives are now aligned to national frameworks, up from 92.0% a year earlier. Internet users reached 85%, the statistical capacity score improved from 61.5 to about 69, and a full Population and Housing Census was conducted in 2022.",
                fr: "L'autonomie budgétaire est passée de 58,3 % en 2020-2021 à 78,0 % en 2023-2024, et les recettes intérieures de 13,3 % à un sommet de 16,4 % du PIB. Le budget national est passé de 37,98 billions de TZS en 2020-2021 à 56,49 billions en 2025-2026. Les engagements d'APD sont passés de 2,65 à 3,19 milliards d'USD, et 95,74 % des objectifs des projets des partenaires sont désormais alignés sur les cadres nationaux, contre 92,0 % un an plus tôt. Les utilisateurs d'Internet atteignent 85 %, le score de capacité statistique est passé de 61,5 à environ 69, et un recensement complet de la population et de l'habitat a été mené en 2022."
              },
              priority: {
                en: "The base has just begun to slip. Domestic revenue fell from 16.4% of GDP in 2023/24 to 15.1% in 2024/25; tax revenue is at about 13.3%, below its 14.9% peak of 2022/23. Public debt rose from 41.3% to 51.0% of GDP over the same five years — the cost of the infrastructure programme, which the report accepts and now says requires \"careful management\". The named responses are broadening the tax base and formalizing businesses without suppressing growth, enforcing project preparation before projects enter the budget, and building blended-finance instruments — because FYDP IV assumes the private sector will supply 70% of its investment requirement.",
                fr: "La base commence tout juste à fléchir. Les recettes intérieures sont retombées de 16,4 % du PIB en 2023-2024 à 15,1 % en 2024-2025 ; les recettes fiscales s'établissent à environ 13,3 %, sous leur sommet de 14,9 % de 2022-2023. La dette publique est passée de 41,3 % à 51,0 % du PIB sur les mêmes cinq années — le coût du programme d'infrastructures, que le rapport assume et qu'il estime désormais devoir « gérer avec prudence ». Les réponses désignées sont l'élargissement de l'assiette fiscale et la formalisation des entreprises sans brider la croissance, l'exigence d'une préparation rigoureuse des projets avant leur inscription budgétaire, et la mise en place d'instruments de financement mixte — car le 4e Plan quinquennal postule que le secteur privé apportera 70 % de ses besoins d'investissement."
              },
              source: "VNR 2026, Table 1.1 · Table 4.5 · Annex Table A17" }
          ] }
        ]
      },

      /* ── TAB 3 ────────────────────────────── Dira 2050 & SDGs ── */
      {
        id: "dira",
        label: { en: "Dira 2050 & the SDGs", fr: "Dira 2050 et les ODD" },
        intro: {
          en: "Tanzania runs no separate SDG tracker. The 2030 Agenda is delivered through the national planning chain — and the 2026 review was deliberately timed to the hand-off between two long-term frameworks, so that SDG acceleration is written into the new plan rather than bolted onto it.",
          fr: "La Tanzanie ne tient aucun dispositif de suivi distinct des ODD. L'Agenda 2030 est mis en œuvre par la chaîne de planification nationale — et la revue de 2026 a été délibérément calée sur le passage de relais entre deux cadres de long terme, afin que l'accélération des ODD soit inscrite dans le nouveau plan plutôt qu'ajoutée après coup."
        },
        blocks: [
          { type: "prose",
            title: { en: "One plan, one reporting line", fr: "Un seul plan, une seule chaîne de reporting" },
            text: {
              en: "The architecture runs in a single line. Dira 2050 sets the long-term aspiration — an inclusive, prosperous, just and self-reliant nation by 2050. FYDP IV, the Fourth Five-Year Development Plan, is its first implementation phase and, in the report's own words, \"the national SDG acceleration plan\". Sector Transformation Plans and Regional Development Plans translate that into programmes and projects; annual budgets fund them; and national monitoring — run by the National Planning Commission with the Zanzibar Planning Commission, on statistics from NBS and OCGS — reports on them. The SDGs are not a parallel exercise bolted onto this chain; they are reported through it.\n\nThat design has a consequence the review is explicit about: the SDG financing question and the FYDP IV financing question are the same question. FYDP IV is costed on the assumption that the private sector supplies 70% of total investment requirements. If that capital does not arrive, it is the SDG targets that go unmet — which is why domestic resource mobilisation, bankable project preparation and blended finance appear in this review as SDG measures rather than as budget technicalities.\n\nThe review process was designed to match. The National Planning Commission ran a whole-of-nation consultation — 824 civil society organisations through the Tanzania Sustainable Development Platform, 1,000 companies through the Global Compact Network Tanzania, and roughly 185 Local Government Authorities — under an Assess–Build–Consult–Deliver methodology, with a National Steering Committee at Permanent Secretary level and complementary Zanzibar, private-sector and civil-society SDG reports. As the report puts it, SDG implementation is \"not only a government reporting exercise, but a national accountability process\".",
              fr: "L'architecture se lit d'un seul trait. Dira 2050 fixe l'aspiration de long terme : une nation inclusive, prospère, juste et autonome à l'horizon 2050. Le 4e Plan quinquennal de développement (FYDP IV) en constitue la première phase de mise en œuvre et, selon les termes mêmes du rapport, « le plan national d'accélération des ODD ». Les plans sectoriels de transformation et les plans régionaux de développement traduisent cette ambition en programmes et projets ; les budgets annuels les financent ; et le suivi national — assuré par la Commission nationale de planification avec la Commission de planification de Zanzibar, sur la base des statistiques du NBS et de l'OCGS — en rend compte. Les ODD ne forment pas un exercice parallèle greffé sur cette chaîne : ils sont rapportés à travers elle.\n\nCe choix a une conséquence que la revue assume : la question du financement des ODD et celle du financement du FYDP IV n'en font qu'une. Le FYDP IV est chiffré sur l'hypothèse que le secteur privé apporte 70 % des besoins d'investissement totaux. Si ces capitaux ne se matérialisent pas, ce sont les cibles des ODD qui ne seront pas atteintes — d'où le fait que la mobilisation des ressources intérieures, la préparation de projets bancables et le financement mixte figurent dans cette revue comme des mesures relatives aux ODD, et non comme des questions budgétaires techniques.\n\nLe processus de revue a été conçu en cohérence. La Commission nationale de planification a mené une consultation « whole-of-nation » — 824 organisations de la société civile via la Tanzania Sustainable Development Platform, 1 000 entreprises via le Global Compact Network Tanzania et environ 185 autorités locales — selon une méthodologie « Évaluer-Construire-Consulter-Livrer », avec un comité national de pilotage au niveau des secrétaires permanents et des rapports ODD complémentaires pour Zanzibar, le secteur privé et la société civile. Comme l'écrit le rapport, la mise en œuvre des ODD n'est « pas seulement un exercice de reporting gouvernemental, mais un processus national de redevabilité »."
            },
            source: "VNR 2026, Ch. 1.2 (Table 1.2) · Ch. 2 · Ch. 5.2 · Ch. 8" },

          { type: "cards", items: [
            { name: { en: "Dira 2050 — Tanzania Development Vision 2050", fr: "Dira 2050 — Vision de développement de la Tanzanie 2050" },
              kicker: { en: "The long-term vision", fr: "La vision de long terme" },
              text: {
                en: "Succeeds Vision 2025 and defines the next long-term national aspiration: an inclusive, prosperous, just and self-reliant nation by 2050. Its stated SDG relevance is continuity — it carries the agenda beyond 2030, which is why the report treats the 2026 review as a hand-off rather than a stock-take.",
                fr: "Elle succède à la Vision 2025 et définit la prochaine aspiration nationale de long terme : une nation inclusive, prospère, juste et autonome à l'horizon 2050. Sa pertinence pour les ODD, telle qu'énoncée, tient à la continuité : elle prolonge l'agenda au-delà de 2030, raison pour laquelle le rapport traite la revue de 2026 comme un passage de relais plutôt que comme un bilan."
              },
              source: "VNR 2026, Table 1.2" },

            { name: { en: "FYDP IV — the national SDG acceleration plan", fr: "FYDP IV — le plan national d'accélération des ODD" },
              kicker: { en: "First implementation phase of Dira 2050", fr: "Première phase de mise en œuvre de Dira 2050" },
              stats: [
                { label: { en: "Private-sector share of investment need", fr: "Part du secteur privé dans les besoins d'investissement" }, value: 70, unit: "%" }
              ],
              text: {
                en: "The Fourth Five-Year Development Plan replaces FYDP III and is structured around pillars, drivers and foundations. The report's Call to Action asks explicitly that FYDP IV be used as the SDG acceleration plan — one plan, not two. Its financing model assumes the private sector will contribute 70% of total investment requirements, which makes private capital mobilisation a central execution risk in the review.",
                fr: "Le 4e Plan quinquennal de développement remplace le FYDP III et s'organise autour de piliers, de moteurs et de fondations. L'appel à l'action du rapport demande explicitement que le FYDP IV serve de plan d'accélération des ODD — un seul plan, et non deux. Son modèle de financement suppose que le secteur privé apporte 70 % des besoins d'investissement totaux, ce qui fait de la mobilisation des capitaux privés un risque d'exécution central de la revue."
              },
              source: "VNR 2026, Ch. 5.2 · Ch. 8" },

            { name: { en: "The national SDG dashboard", fr: "Le tableau de bord national des ODD" },
              kicker: { en: "17 goals, rated by Tanzania itself", fr: "17 objectifs, évalués par la Tanzanie elle-même" },
              stats: [
                { label: { en: "On track", fr: "En bonne voie" }, value: 4, unit: "" },
                { label: { en: "Mixed", fr: "Contrastés" }, value: 9, unit: "" },
                { label: { en: "Requires attention", fr: "Nécessitent une attention" }, value: 2, unit: "" }
              ],
              text: {
                en: "Four goals are on track (SDG 3 health, 6 water, 7 energy, 17 partnerships); nine are mixed (1, 2, 4, 5, 8, 9, 11, 13, 16); two carry only partial data (10, 12); and two require attention (14 life below water, 15 life on land). No goal is declared off track; the two rated \"requires attention\" (14 and 15) are both environmental.",
                fr: "Quatre objectifs sont en bonne voie (ODD 3 santé, 6 eau, 7 énergie, 17 partenariats) ; neuf sont contrastés (1, 2, 4, 5, 8, 9, 11, 13, 16) ; deux ne disposent que de données partielles (10, 12) ; et deux nécessitent une attention particulière (14 vie aquatique, 15 vie terrestre). Aucun objectif n'est déclaré hors trajectoire ; les deux classés « nécessite une attention » (14 et 15) relèvent tous deux de l'environnement."
              },
              source: "VNR 2026, Table 3.1" },

            { name: { en: "Whole-of-nation consultation", fr: "Consultation « whole-of-nation »" },
              kicker: { en: "Assess · Build · Consult · Deliver", fr: "Évaluer · Construire · Consulter · Livrer" },
              stats: [
                { label: { en: "CSOs consulted", fr: "OSC consultées" }, value: 824, unit: "" },
                { label: { en: "Companies consulted", fr: "Entreprises consultées" }, value: 1000, unit: "" },
                { label: { en: "Local authorities", fr: "Autorités locales" }, value: 185, unit: "" }
              ],
              text: {
                en: "Civil society came in through the Tanzania Sustainable Development Platform, business through the Global Compact Network Tanzania (750 completed questionnaires from 1,000 companies), and local government through PMO-RALG. Youth, women's groups and organisations of persons with disabilities were consulted separately, and disability is treated in the report \"as a policy and budgeting priority, not only as a minor disaggregation issue\".",
                fr: "La société civile a été mobilisée via la Tanzania Sustainable Development Platform, le monde des affaires via le Global Compact Network Tanzania (750 questionnaires complétés sur 1 000 entreprises) et les collectivités locales via le PMO-RALG. Les jeunes, les groupes de femmes et les organisations de personnes handicapées ont été consultés séparément, et le handicap est traité dans le rapport « comme une priorité de politique publique et de budgétisation, et non comme une simple question de désagrégation »."
              },
              source: "VNR 2026, Tables 2.1–2.3 · Table 6.1" },

            { name: { en: "Data gaps and sources", fr: "Lacunes de données et sources" },
              kicker: { en: "Where data are incomplete", fr: "Là où les données sont incomplètes" },
              text: {
                en: "The review records several statistical limits. Learning outcomes at the end of primary are marked \"pending — data gap\" for every year. Clean cooking is flagged a \"critical gap\". The safely managed sanitation row carries the priority response \"clarify methodology\". SDG 10 and SDG 12 are rated \"partial data\". The chapter tables and the statistical annex differ in some places — most often where a chapter table labels the annex's 2024 value as \"2025\"; this dashboard follows the annex in those cases.",
                fr: "La revue consigne plusieurs limites statistiques. Les acquis d'apprentissage en fin de primaire sont notés « en attente — lacune de données » pour chaque année. La cuisson propre est signalée comme une « lacune critique ». La ligne relative à l'assainissement géré en toute sécurité porte la réponse prioritaire « clarifier la méthodologie ». Les ODD 10 et 12 sont classés « données partielles ». Les tableaux des chapitres et l'annexe statistique diffèrent par endroits — le plus souvent lorsqu'un tableau de chapitre attribue à « 2025 » la valeur de 2024 de l'annexe ; ce tableau de bord suit alors l'annexe."
              },
              source: "VNR 2026, Table 2.4 · Annex Tables A4, A6, A7" },

            { name: { en: "Zanzibar", fr: "Zanzibar" },
              kicker: { en: "A second reporting line, converging", fr: "Une seconde chaîne de reporting, en convergence" },
              stats: [
                { label: { en: "Basic-needs poverty (2025)", fr: "Pauvreté de base (2025)" }, value: 19.9, unit: "%" },
                { label: { en: "Electricity access (2025)", fr: "Accès à l'électricité (2025)" }, value: 76.4, unit: "%" },
                { label: { en: "Informal employment (2025)", fr: "Emploi informel (2025)" }, value: 64.0, unit: "%" }
              ],
              text: {
                en: "Zanzibar reports through the Zanzibar Planning Commission and OCGS, with the Blue Economy Strategy as its platform for SDGs 8, 9, 14 and 15. Basic-needs poverty fell from 22.9% to 19.9%, stunting from 24.0% to 14.4%, and its statistical performance score rose from 75 to 91. Informal employment is recorded at 64.0%, on a narrower series that is not directly comparable to the mainland's.",
                fr: "Zanzibar rend compte par l'intermédiaire de sa Commission de planification et de l'OCGS, la Stratégie d'économie bleue servant de plateforme pour les ODD 8, 9, 14 et 15. La pauvreté de base est passée de 22,9 % à 19,9 %, le retard de croissance de 24,0 % à 14,4 %, et son score de performance statistique de 75 à 91. L'emploi informel est consigné à 64,0 %, sur une série plus étroite, non directement comparable à celle du continent."
              },
              source: "VNR 2026, Zanzibar status box (p. 17) · Case Boxes 4.2, 4.3" }
          ] }
        ]
      },

      /* ── TAB 4 ─────────────────────────────── Policy Responses ── */
      {
        id: "policy",
        label: { en: "Policy Responses", fr: "Réponses politiques" },
        intro: {
          en: "Six national instruments carry most of the progress this review reports — and most of the debt that financed it. Each is presented with the figures the report attaches to it, including the ones that complicate the story.",
          fr: "Six instruments nationaux portent l'essentiel des progrès rapportés par cette revue — et l'essentiel de la dette qui les a financés. Chacun est présenté avec les chiffres que le rapport lui associe, y compris ceux qui compliquent le récit."
        },
        blocks: [
          { type: "cards", items: [

            { name: { en: "Julius Nyerere Hydropower Plant", fr: "Centrale hydroélectrique Julius Nyerere" },
              kicker: { en: "2,115 MW", fr: "2 115 MW" },
              stats: [
                { label: { en: "National installed capacity, 2025", fr: "Capacité installée nationale, 2025" }, value: 4504.9, unit: " MW" },
                { label: { en: "Renewables, % of electricity generated", fr: "Renouvelables, en % de l'électricité produite" }, value: 76.6, unit: "%" },
                { label: { en: "Regions on the national grid", fr: "Régions raccordées au réseau national" }, value: 26, unit: "" }
              ],
              text: {
                en: "The single largest driver of the energy expansion, and on its own nearly the size of the entire national fleet as recently as 2022. Its completion took installed capacity from 2,411 MW to 4,504.9 MW in a year, lifted renewables to 76.6% of electricity generated, and underpinned the connection of all 26 regions to the national grid. One corollary is a concentration risk: the mix is now heavily hydro, in a country whose SDG 13 chapter documents recurrent drought.",
                fr: "Principal moteur de l'expansion énergétique, et à elle seule presque équivalente à l'ensemble du parc national de 2022 encore. Sa mise en service a porté la capacité installée de 2 411 MW à 4 504,9 MW en un an, hissé les renouvelables à 76,6 % de l'électricité produite et permis le raccordement des 26 régions au réseau national. Un corollaire est un risque de concentration : le mix est désormais fortement hydraulique, dans un pays dont le chapitre consacré à l'ODD 13 documente des sécheresses récurrentes."
              },
              source: "VNR 2026, Ch. 4 (SDG 7) · Annex Table A7" },

            { name: { en: "Standard Gauge Railway", fr: "Chemin de fer à écartement standard" },
              kicker: { en: "Dar–Dodoma: 12 hours → 3", fr: "Dar-Dodoma : de 12 heures à 3" },
              stats: [
                { label: { en: "Railway passengers, 2025", fr: "Voyageurs ferroviaires, 2025" }, value: 4.14, unit: " M" },
                { label: { en: "Rail freight, 2025 (000 tonnes)", fr: "Fret ferroviaire, 2025 (milliers de tonnes)" }, value: 438, unit: "" }
              ],
              text: {
                en: "Passenger volumes trebled in two years, from 1.25 million in 2023 to 4.14 million in 2025, and the Dar es Salaam–Dodoma journey fell from twelve hours to three. Freight went the other way: 539,000 tonnes in 2020, 438,000 in 2025, and the annex rates it \"declining\". A railway that moves people but not goods does not, by itself, industrialise an economy — which is precisely why the review proposes packaging industrial corridors along the line, bundling reliable power, serviced land, logistics, water, waste treatment and skills centres.",
                fr: "Le trafic voyageurs a triplé en deux ans, de 1,25 million en 2023 à 4,14 millions en 2025, et le trajet Dar es Salaam-Dodoma est passé de douze heures à trois. Le fret a évolué en sens inverse : 539 000 tonnes en 2020, 438 000 en 2025, l'annexe le classant « en recul ». Un chemin de fer qui transporte des personnes mais pas de marchandises n'industrialise pas à lui seul une économie — c'est précisément pourquoi la revue propose d'aménager des corridors industriels le long de la ligne, associant électricité fiable, terrains viabilisés, logistique, eau, traitement des déchets et centres de formation."
              },
              source: "VNR 2026, Table 4.3 · Annex Table A9 · Case Box 4.2" },

            { name: { en: "Domestic resource mobilisation", fr: "Mobilisation des ressources intérieures" },
              kicker: { en: "58.3% → 78.0% of the budget", fr: "De 58,3 % à 78,0 % du budget" },
              stats: [
                { label: { en: "Domestic revenue, % of GDP (2024/25)", fr: "Recettes intérieures, en % du PIB (2024-2025)" }, value: 15.1, unit: "%" },
                { label: { en: "Tax revenue, % of GDP (2024/25)", fr: "Recettes fiscales, en % du PIB (2024-2025)" }, value: 13.3, unit: "%" }
              ],
              text: {
                en: "The share of the budget financed from Tanzania's own revenue rose from 58.3% in 2020/21 to 78.0% in 2023/24, and SDG 17 is rated on track. Two caveats belong beside it. Domestic revenue as a share of GDP peaked at 16.4% in 2023/24 and fell to 15.1% the following year; tax revenue peaked at 14.9% in 2022/23 and eased to about 13.3%. Formalizing an economy in which 95.7% of non-agricultural jobs are informal is the structural precondition for going further.",
                fr: "La part du budget financée sur les recettes propres de la Tanzanie est passée de 58,3 % en 2020-2021 à 78,0 % en 2023-2024, et l'ODD 17 est jugé en bonne voie. Deux réserves doivent l'accompagner. Les recettes intérieures rapportées au PIB ont culminé à 16,4 % en 2023-2024 avant de retomber à 15,1 % l'année suivante ; les recettes fiscales ont culminé à 14,9 % en 2022-2023 puis reflué à environ 13,3 %. Formaliser une économie où 95,7 % des emplois non agricoles sont informels constitue la condition structurelle pour aller plus loin."
              },
              source: "VNR 2026, Table 1.1 · Table 4.5 · Annex Table A17" },

            { name: { en: "Digital and 4G expansion", fr: "Extension du numérique et de la 4G" },
              kicker: { en: "Internet users 48% → 85%", fr: "Utilisateurs d'Internet : de 48 % à 85 %" },
              stats: [
                { label: { en: "4G population coverage (2025)", fr: "Couverture 4G de la population (2025)" }, value: 94, unit: "%" },
                { label: { en: "5G population coverage (2025)", fr: "Couverture 5G de la population (2025)" }, value: 30, unit: "%" },
                { label: { en: "Fibre-to-the-home subscriptions", fr: "Abonnements à la fibre jusqu'au domicile" }, value: 123052, unit: "" }
              ],
              text: {
                en: "Internet penetration nearly doubled in five years, from 48% of the population in 2020 to 85% in 2025 (the report uses 48% for 2020). Private investment did much of the work: Vodacom put TZS 890 billion into network infrastructure and Airtel deployed 156 new 4G sites in underserved areas. In Zanzibar, penetration reached 97.2% with 78 e-government services live. The report frames the next step as translating digital access into productivity, service delivery and inclusion rather than consumption alone.",
                fr: "La pénétration d'Internet a presque doublé en cinq ans, de 48 % de la population en 2020 à 85 % en 2025 (le rapport retient 48 % pour 2020). L'investissement privé y a largement contribué : Vodacom a consacré 890 milliards de TZS aux infrastructures de réseau et Airtel a déployé 156 nouveaux sites 4G dans des zones mal desservies. À Zanzibar, la pénétration atteint 97,2 % et 78 services d'administration en ligne sont opérationnels. Le rapport formule l'étape suivante ainsi : l'accès numérique doit se traduire en productivité, en services publics et en inclusion, plutôt que rester une statistique de consommation."
              },
              source: "VNR 2026, Table 4.3 · Annex Table A9 · Case Box 4.3" },

            { name: { en: "Rural water programme and Basin Water Boards", fr: "Programme d'eau rurale et offices de bassin" },
              kicker: { en: "Rural access 72.3% → 85.2%", fr: "Accès rural : de 72,3 % à 85,2 %" },
              stats: [
                { label: { en: "Basins with IWRM plans (of 9)", fr: "Bassins dotés d'un plan de GIRE (sur 9)" }, value: 7, unit: "" },
                { label: { en: "Water-quality monitoring networks", fr: "Réseaux de surveillance de la qualité de l'eau" }, value: 38, unit: "" },
                { label: { en: "Gazetted water sources", fr: "Sources d'eau classées" }, value: 80, unit: "" }
              ],
              text: {
                en: "Rural water access rose almost thirteen percentage points while the population nearly doubled over the longer period. The institutional side matched it: nine Basin Water Boards reinforced, seven of nine basins now holding integrated water resources management plans, monitoring networks up from 16 to 38, and 100% of transboundary basins under cooperation arrangements. The unfinished half of the mandate is sanitation and utility efficiency — the report proposes a bankable non-revenue water programme for Dar es Salaam built on district metering, pressure management, active leakage control and performance-based contracts.",
                fr: "L'accès à l'eau en milieu rural a gagné près de treize points de pourcentage alors que la population a quasiment doublé sur la période longue. Le volet institutionnel a suivi : neuf offices de bassin renforcés, sept bassins sur neuf dotés d'un plan de gestion intégrée des ressources en eau, des réseaux de surveillance portés de 16 à 38 et 100 % des bassins transfrontaliers couverts par des accords de coopération. La moitié inachevée du mandat porte sur l'assainissement et l'efficience des services : le rapport propose un programme bancable de réduction de l'eau non facturée à Dar es Salaam, fondé sur la sectorisation des compteurs, la gestion de la pression, la recherche active de fuites et des contrats de performance."
              },
              source: "VNR 2026, Table 4.1 · Annex Table A6 · Case Box 4.1" },

            { name: { en: "Special Economic Zones and industrial corridors", fr: "Zones économiques spéciales et corridors industriels" },
              kicker: { en: "Infrastructure-to-industry link", fr: "Le lien infrastructures-industrie" },
              stats: [
                { label: { en: "FDI registered via TISEZA, 2025 (USD m)", fr: "IDE enregistrés via la TISEZA, 2025 (M USD)" }, value: 1656, unit: "" },
                { label: { en: "SME share of industrial value added", fr: "Part des PME dans la valeur ajoutée industrielle" }, value: 11.6, unit: "%" },
                { label: { en: "Manufacturing employment, % of total", fr: "Emploi manufacturier, en % du total" }, value: 5.5, unit: "%" }
              ],
              text: {
                en: "SEZs, industrial parks and the corridor programme are the instruments Tanzania is counting on to convert infrastructure into industry — and on the evidence of this review they have not yet done so: manufacturing fell to 5.9% of GDP even as FDI registered through TISEZA rose from USD 944 million to 1,656 million. The report's figures differ here — Table 4.5 puts 2024 FDI at USD 2,679.7 million while two annex tables give 1,656 million, a difference the report does not reconcile. Manufacturing employment and the SME share are both rising, which suggests the industrial base is broadening even as its share of output shrinks.",
                fr: "Les ZES, les parcs industriels et le programme de corridors sont les instruments sur lesquels la Tanzanie compte pour convertir les infrastructures en industrie — et, à l'aune de cette revue, ils n'y sont pas encore parvenus : l'industrie manufacturière est tombée à 5,9 % du PIB alors même que les IDE enregistrés via la TISEZA passaient de 944 à 1 656 millions d'USD. Les chiffres du rapport diffèrent ici : le tableau 4.5 situe les IDE de 2024 à 2 679,7 millions d'USD, tandis que deux tableaux de l'annexe retiennent 1 656 millions, un écart que le rapport ne réconcilie pas. L'emploi manufacturier et la part des PME progressent tous deux, ce qui suggère que la base industrielle s'élargit alors même que son poids dans la production se contracte."
              },
              source: "VNR 2026, Table 4.5 · Annex Tables A9, A17" }
          ] }
        ]
      },

      /* ── TAB 5 ───────────────────────────────────── Financing ── */
      {
        id: "financing",
        label: { en: "Financing", fr: "Financement" },
        intro: {
          en: "Tanzania finances the 2030 Agenda largely from its own budget. Four-fifths of the budget is now covered by domestic revenue; the revenue ratio has recently turned down, and FYDP IV is costed on the expectation that private capital will supply 70% of what it needs.",
          fr: "La Tanzanie finance l'Agenda 2030 en grande partie par son propre budget. Quatre cinquièmes du budget sont désormais couverts par les recettes intérieures ; le ratio de recettes s'est récemment infléchi à la baisse, et le 4e Plan quinquennal est chiffré sur l'hypothèse que les capitaux privés apporteront 70 % de ses besoins."
        },
        blocks: [
          { type: "stats", items: [
            { sdg: 17,
              label: { en: "Budget self-reliance", fr: "Autonomie budgétaire" },
              value: 78.0, unit: "%",
              note: { en: "2023/24, from 58.3% in 2020/21. The share of the budget financed from domestic revenue; the annex records no 2024/25 observation.",
                      fr: "2023-2024, contre 58,3 % en 2020-2021. Part du budget financée sur recettes intérieures ; l'annexe ne consigne aucune observation pour 2024-2025." },
              source: "VNR 2026, Annex A17 (17.1.2)" },
            { sdg: 17,
              label: { en: "Domestic revenue, % of GDP", fr: "Recettes intérieures, en % du PIB" },
              value: 15.1, unit: "%",
              note: { en: "2024/25. Peaked at 16.4% in 2023/24 — the figure quoted in the Main Messages is the peak, not the latest reading.",
                      fr: "2024-2025. Sommet de 16,4 % en 2023-2024 — le chiffre cité dans les messages clés est le sommet, non le dernier relevé." },
              source: "VNR 2026, Annex A17 (17.1.1)" },
            { sdg: 17,
              label: { en: "Tax revenue, % of GDP", fr: "Recettes fiscales, en % du PIB" },
              value: 13.3, unit: "%",
              note: { en: "2024/25, from 11.2% in 2020/21 — but below the 14.9% peak of 2022/23.",
                      fr: "2024-2025, contre 11,2 % en 2020-2021 — mais en deçà du sommet de 14,9 % de 2022-2023." },
              source: "VNR 2026, Table 1.1 · Annex A17" },
            { sdg: 17,
              label: { en: "National budget, TZS trillion", fr: "Budget national, en billions de TZS" },
              value: 56.49, unit: "",
              note: { en: "The 2025/26 budget, up from TZS 37.98 trillion in 2020/21. The annex records TZS 49.35 trillion for 2024/25.",
                      fr: "Budget 2025-2026, contre 37,98 billions de TZS en 2020-2021. L'annexe consigne 49,35 billions de TZS pour 2024-2025." },
              source: "VNR 2026, Table 1.1 · Annex A17" },
            { sdg: 17,
              label: { en: "Private-sector share of FYDP IV", fr: "Part du secteur privé dans le FYDP IV" },
              value: 70, unit: "%",
              note: { en: "The plan's financing model expects the private sector to contribute 70% of total investment requirements.",
                      fr: "Le modèle de financement du plan attend du secteur privé qu'il apporte 70 % des besoins d'investissement totaux." },
              source: "VNR 2026, Ch. 5.2" },
            { sdg: 17,
              label: { en: "ODA committed, USD billion", fr: "APD engagée, en milliards d'USD" },
              value: 3.19, unit: "",
              note: { en: "2024/25, from USD 2.65 billion in 2020/21. Predictable ODA is one of Tanzania's five asks of the international community.",
                      fr: "2024-2025, contre 2,65 milliards d'USD en 2020-2021. La prévisibilité de l'APD figure parmi les cinq demandes de la Tanzanie à la communauté internationale." },
              source: "VNR 2026, Annex A17 (17.9.1)" }
          ] },

          { type: "chart",
            chart: {
              type: "line", sdg: 17, unit: " trn",
              title: { en: "Total national budget, TZS trillion, 2020/21–2024/25",
                       fr: "Budget national total, en billions de TZS, 2020-2021 à 2024-2025" },
              series: [
                { key: "budget", label: { en: "Total national budget (TZS trillion)", fr: "Budget national total (billions de TZS)" },
                  points: [ { x: "2020/21", y: 37.98 }, { x: "2021/22", y: 31.78 }, { x: "2022/23", y: 40.95 },
                            { x: "2023/24", y: 44.39 }, { x: "2024/25", y: 49.35 } ] }
              ],
              insight: {
                en: "The fiscal envelope contracted sharply in 2021/22 — the pandemic year in the budget data — and has expanded every year since, reaching TZS 49.35 trillion in 2024/25. The widely quoted TZS 56.49 trillion is the 2025/26 budget, one year beyond this series; it is not plotted here because the annex does not record it as an outturn. Growth in the envelope is real but nominal: over the same period inflation ran between 3.1% and 4.3% a year.",
                fr: "L'enveloppe budgétaire s'est fortement contractée en 2021-2022 — l'exercice marqué par la pandémie dans les données budgétaires — puis s'est élargie chaque année, atteignant 49,35 billions de TZS en 2024-2025. Les 56,49 billions de TZS largement cités correspondent au budget 2025-2026, soit un exercice au-delà de cette série ; ils ne sont pas tracés ici, l'annexe ne les consignant pas comme une exécution. La croissance de l'enveloppe est réelle, mais nominale : sur la même période, l'inflation a évolué entre 3,1 % et 4,3 % par an."
              },
              source: "VNR 2026, Annex Table A17 (17.1.2)"
            } },

          { type: "cards", items: [
            { name: { en: "The 70% assumption", fr: "L'hypothèse des 70 %" },
              kicker: { en: "FYDP IV financing model", fr: "Modèle de financement du FYDP IV" },
              stats: [
                { label: { en: "Private-sector share of investment need", fr: "Part du secteur privé dans les besoins d'investissement" }, value: 70, unit: "%" }
              ],
              text: {
                en: "This number is central to Tanzania's financing chapter. FYDP IV — the country's SDG acceleration plan — expects the private sector to supply 70% of total investment requirements. Public revenue, however strong, is therefore not the binding constraint; the pipeline of bankable projects is. The report's own risk table says so plainly: bankability gaps constrain investment, and projects \"enter the budget without sufficient preparation\".",
                fr: "C'est un chiffre central du chapitre financier tanzanien. Le FYDP IV — plan national d'accélération des ODD — attend du secteur privé qu'il fournisse 70 % des besoins d'investissement totaux. Les recettes publiques, aussi solides soient-elles, ne constituent donc pas la contrainte déterminante ; c'est le vivier de projets bancables qui l'est. Le tableau des risques du rapport le dit sans détour : les lacunes de bancabilité freinent l'investissement et les projets « entrent au budget sans préparation suffisante »."
              },
              source: "VNR 2026, Ch. 5.2 · Table 5.1" },

            { name: { en: "Capital markets and green finance", fr: "Marchés de capitaux et finance verte" },
              kicker: { en: "USD 300m green bond", fr: "Obligation verte de 300 M USD" },
              text: {
                en: "CRDB Bank issued a USD 300 million green bond covering climate-smart agriculture, clean cooking, buildings and transport; Stanbic issued a TZS 50 billion commercial green bond. These are small against the FYDP IV requirement, but they show that domestic capital markets can price SDG-aligned instruments. Credit to the private sector grew 23.6% in 2025 and non-performing loans fell from 9.8% to 3.3%.",
                fr: "La CRDB Bank a émis une obligation verte de 300 millions d'USD couvrant l'agriculture climato-intelligente, la cuisson propre, les bâtiments et les transports ; Stanbic a émis une obligation verte commerciale de 50 milliards de TZS. Ces montants restent modestes au regard des besoins du FYDP IV, mais ils montrent que les marchés de capitaux nationaux peuvent valoriser des titres alignés sur les ODD. Le crédit au secteur privé a progressé de 23,6 % en 2025 et les prêts non performants sont tombés de 9,8 % à 3,3 %."
              },
              source: "VNR 2026, Case Boxes 4.2 and 4.5 · Annex Table A10" },

            { name: { en: "Development cooperation, aligned", fr: "Coopération au développement, alignée" },
              kicker: { en: "95.74% aligned to national plans", fr: "95,74 % alignés sur les plans nationaux" },
              stats: [
                { label: { en: "ODA committed, 2024/25 (USD bn)", fr: "APD engagée, 2024-2025 (Mds USD)" }, value: 3.19, unit: "" },
                { label: { en: "Project objectives aligned", fr: "Objectifs de projet alignés" }, value: 95.74, unit: "%" }
              ],
              text: {
                en: "The share of partner project objectives aligned to national frameworks rose from 92.0% in 2023/24 to 95.74% in 2024/25 (the chapter table labels these years as 2020 and 2025). ODA commitments grew steadily to USD 3.19 billion. Tanzania's ask of its partners is not more money in the abstract but predictability and alignment: fragmentation and unpredictable funding are listed in the risk table as a direct threat to implementation.",
                fr: "La part des objectifs de projets des partenaires alignés sur les cadres nationaux est passée de 92,0 % en 2023-2024 à 95,74 % en 2024-2025 (le tableau du chapitre situe ces valeurs en 2020 et 2025). Les engagements d'APD ont progressé régulièrement jusqu'à 3,19 milliards d'USD. La demande de la Tanzanie à ses partenaires ne porte pas sur davantage d'argent dans l'abstrait, mais sur la prévisibilité et l'alignement : la fragmentation et l'imprévisibilité des financements figurent dans le tableau des risques comme une menace directe pour la mise en œuvre."
              },
              source: "VNR 2026, Table 4.5 · Table 5.1 · Annex Table A17" },

            { name: { en: "External flows: FDI and remittances", fr: "Flux extérieurs : IDE et transferts de fonds" },
              kicker: { en: "Two figures in the report", fr: "Deux chiffres dans le rapport" },
              stats: [
                { label: { en: "FDI inflows, 2024/25 (USD m, annex)", fr: "Flux d'IDE, 2024-2025 (M USD, annexe)" }, value: 1656, unit: "" },
                { label: { en: "Remittances, % of GDP (2024/25)", fr: "Transferts de fonds, en % du PIB (2024-2025)" }, value: 1.5, unit: "%" }
              ],
              text: {
                en: "Two annex tables independently record FDI at USD 1,656 million for the latest year, up from USD 944 million in 2020. Table 4.5 and the body text give USD 2,679.7 million for 2024 — a 62% difference that the report does not reconcile. This dashboard uses the annex figure. Remittances are 1.5% of GDP.",
                fr: "Deux tableaux de l'annexe consignent indépendamment des IDE de 1 656 millions d'USD pour le dernier exercice, contre 944 millions en 2020. Le tableau 4.5 et le corps du texte retiennent 2 679,7 millions d'USD pour 2024 — une différence de 62 % que le rapport ne réconcilie pas. Ce tableau de bord retient le chiffre de l'annexe. Les transferts de fonds représentent 1,5 % du PIB."
              },
              source: "VNR 2026, Table 4.5 · Annex Tables A9, A17" },

            { name: { en: "Climate finance and the adaptation gap", fr: "Finance climatique et déficit d'adaptation" },
              kicker: { en: "Adaptation needs exceed current financing", fr: "Les besoins d'adaptation dépassent les financements actuels" },
              text: {
                en: "The report states the gap without quantifying it, and its remedy is a supply-side one: package bankable climate-resilient infrastructure and natural-capital projects so that climate finance has somewhere to land. The exposure is documented elsewhere in the review — flood losses of USD 500 million in 2025, drought losses of USD 190 million, disaster-affected persons up to 284 per 100,000. Scaling up climate finance is the second of Tanzania's five asks of the international community.",
                fr: "Le rapport constate le déficit sans le chiffrer, et son remède se situe du côté de l'offre : préparer des projets bancables d'infrastructures résilientes au climat et de capital naturel, afin que la finance climatique trouve où se déployer. L'exposition est documentée ailleurs dans la revue — 500 millions d'USD de pertes dues aux inondations en 2025, 190 millions dues à la sécheresse, jusqu'à 284 personnes touchées pour 100 000. L'accroissement de la finance climatique constitue la deuxième des cinq demandes de la Tanzanie à la communauté internationale."
              },
              source: "VNR 2026, Table 5.1 · Annex Table A11 · Main Messages" }
          ] }
        ]
      },

      /* ── TAB 6 ───────────────────────────────── Debt & Revenue ── */
      {
        id: "debt",
        label: { en: "Debt & Revenue", fr: "Dette et recettes" },
        intro: {
          en: "Public debt rose almost ten percentage points of GDP in five years. The review presents this as the cost of the infrastructure programme and names tax effort, debt-service discipline and rigorous project preparation as the conditions for keeping it sustainable. The three charts below show the underlying series.",
          fr: "La dette publique a progressé de près de dix points de pourcentage du PIB en cinq ans. La revue y voit le coût du programme d'infrastructures et désigne l'effort fiscal, la discipline du service de la dette et une préparation rigoureuse des projets comme les conditions de sa soutenabilité. Les trois graphiques ci-dessous présentent les séries sous-jacentes."
        },
        blocks: [
          { type: "chart",
            chart: {
              type: "line", sdg: 17, unit: "%",
              title: { en: "Public debt, % of GDP, 2020/21–2024/25",
                       fr: "Dette publique, en % du PIB, 2020-2021 à 2024-2025" },
              series: [
                { key: "debt", label: { en: "Public debt", fr: "Dette publique" },
                  points: [ { x: "2020/21", y: 41.3 }, { x: "2021/22", y: 43.4 }, { x: "2022/23", y: 44.9 },
                            { x: "2023/24", y: 47.8 }, { x: "2024/25", y: 51.0 } ] }
              ],
              insight: {
                en: "The rise is steady, not sudden — roughly two percentage points of GDP a year, every year, tracking the investment cycle that delivered the hydropower plant, the railway and the grid. The report classifies the indicator as monitored rather than at risk, and asks the international community for debt-architecture reform and concessional terms. Whether the assets financed by that debt generate the growth to service it is an open question at the HLPF; manufacturing's share has fallen over the period.",
                fr: "La progression est régulière, non brutale — environ deux points de pourcentage du PIB par an, chaque année, au rythme du cycle d'investissement qui a livré la centrale hydroélectrique, le chemin de fer et le réseau. Le rapport classe l'indicateur comme surveillé plutôt qu'à risque, et demande à la communauté internationale une réforme de l'architecture de la dette et des conditions concessionnelles. La question de savoir si les actifs financés par cette dette généreront la croissance permettant de les servir reste ouverte au FPHN ; la part de l'industrie manufacturière a reculé sur la période."
              },
              source: "VNR 2026, Table 1.1 · Annex Table A17 (17.4.1)"
            } },

          { type: "chart",
            chart: {
              type: "line", sdg: 17, unit: "%",
              title: { en: "Tax and domestic revenue, % of GDP, 2020/21–2024/25",
                       fr: "Recettes fiscales et intérieures, en % du PIB, 2020-2021 à 2024-2025" },
              series: [
                { key: "dom", label: { en: "Domestic revenue", fr: "Recettes intérieures" },
                  points: [ { x: "2020/21", y: 13.3 }, { x: "2021/22", y: 14.9 }, { x: "2022/23", y: 15.2 },
                            { x: "2023/24", y: 16.4 }, { x: "2024/25", y: 15.1 } ] },
                { key: "tax", label: { en: "Tax revenue", fr: "Recettes fiscales" },
                  points: [ { x: "2020/21", y: 11.2 }, { x: "2021/22", y: 11.9 }, { x: "2022/23", y: 14.9 },
                            { x: "2023/24", y: 14.6 }, { x: "2024/25", y: 13.3 } ] }
              ],
              insight: {
                en: "Both series are shares of GDP and both have turned down. Domestic revenue — which includes non-tax receipts and therefore sits above tax revenue — peaked at 16.4% in 2023/24 and fell to 15.1%; tax revenue peaked earlier, at 14.9% in 2022/23, and has lost 1.6 percentage points since. The report labels tax revenue \"improving\" on the five-year endpoints; the intervening trajectory peaks and eases. Debt has risen about two percentage points of GDP a year while the revenue ratio has stopped climbing.",
                fr: "Les deux séries sont exprimées en parts de PIB et toutes deux se sont retournées. Les recettes intérieures — qui incluent les recettes non fiscales et se situent donc au-dessus des recettes fiscales — ont culminé à 16,4 % en 2023-2024 avant de retomber à 15,1 % ; les recettes fiscales ont culminé plus tôt, à 14,9 % en 2022-2023, et ont perdu 1,6 point de pourcentage depuis. Le rapport qualifie les recettes fiscales d'« en amélioration » sur les points extrêmes à cinq ans ; la trajectoire intermédiaire culmine puis reflue. La dette progresse d'environ deux points de pourcentage du PIB par an tandis que le ratio de recettes a cessé de progresser."
              },
              source: "VNR 2026, Annex Table A17 (17.1.1)"
            } },

          { type: "chart",
            chart: {
              type: "line", sdg: 17, unit: "%",
              title: { en: "Budget self-reliance, % of the budget financed from domestic revenue",
                       fr: "Autonomie budgétaire, part du budget financée sur recettes intérieures" },
              series: [
                { key: "self", label: { en: "Budget self-reliance", fr: "Autonomie budgétaire" },
                  points: [ { x: "2020/21", y: 58.3 }, { x: "2021/22", y: 68.5 },
                            { x: "2022/23", y: 70.7 }, { x: "2023/24", y: 78.0 } ] }
              ],
              insight: {
                en: "Nearly twenty percentage points in three years, and SDG 17 is rated on track. Two clarifications. The baseline is 58.3%, confirmed in four places in the report; 68.5% is the 2021/22 value. And the series stops at 2023/24: the annex records no 2024/25 observation, so none is shown.",
                fr: "Près de vingt points de pourcentage en trois ans, et l'ODD 17 est jugé en bonne voie. Deux précisions. La référence est 58,3 %, confirmée à quatre endroits du rapport ; 68,5 % correspond à l'exercice 2021-2022. Et la série s'arrête en 2023-2024 : l'annexe ne consigne aucune observation pour 2024-2025, aucune n'est donc affichée."
              },
              source: "VNR 2026, Annex Table A17 (17.1.2)"
            } },

          { type: "table",
            title: { en: "SDG 17 — partnerships, financing and macroeconomic series",
                     fr: "ODD 17 — partenariats, financement et séries macroéconomiques" },
            rows: [
              { label: { en: "Tax revenue, % of GDP", fr: "Recettes fiscales, en % du PIB" },
                from: 11.2, fromYear: "2020/21", to: 13.3, toYear: "2024/25", unit: "%", dir: "up",
                status: { en: "On track per the annex, but below the 14.9% peak of 2022/23",
                          fr: "En bonne voie selon l'annexe, mais sous le sommet de 14,9 % de 2022-2023" } },
              { label: { en: "Non-tax revenue, % of GDP", fr: "Recettes non fiscales, en % du PIB" },
                from: 1.4, fromYear: "2020/21", to: 2.3, toYear: "2023/24", unit: "%", dir: "up",
                status: { en: "Improving. The annex carries no 2024/25 observation",
                          fr: "En amélioration. L'annexe ne comporte aucune observation pour 2024-2025" } },
              { label: { en: "Domestic revenue, % of GDP", fr: "Recettes intérieures, en % du PIB" },
                from: 13.3, fromYear: "2020/21", to: 15.1, toYear: "2024/25", unit: "%", dir: "up",
                status: { en: "Peaked at 16.4% in 2023/24; the latest year is a fall",
                          fr: "Sommet de 16,4 % en 2023-2024 ; le dernier exercice marque un recul" } },
              { label: { en: "Budget self-reliance", fr: "Autonomie budgétaire" },
                from: 58.3, fromYear: "2020/21", to: 78.0, toYear: "2023/24", unit: "%", dir: "up",
                status: { en: "On track; up nearly twenty percentage points since 2020/21",
                          fr: "En bonne voie ; en hausse de près de vingt points de pourcentage depuis 2020-2021" } },
              { label: { en: "Public debt, % of GDP", fr: "Dette publique, en % du PIB" },
                from: 41.3, fromYear: "2020/21", to: 51.0, toYear: "2024/25", unit: "%", dir: "up",
                status: { en: "Monitored. Roughly two percentage points of GDP a year, every year",
                          fr: "Surveillée. Environ deux points de pourcentage du PIB par an, chaque année" } },
              { label: { en: "Total national budget, TZS trillion", fr: "Budget national total, en billions de TZS" },
                from: 37.98, fromYear: "2020/21", to: 49.35, toYear: "2024/25", unit: "", dir: "up",
                status: { en: "The 2025/26 budget is set at TZS 56.49 trillion",
                          fr: "Le budget 2025-2026 est fixé à 56,49 billions de TZS" } },
              { label: { en: "FDI inflows, USD million", fr: "Flux d'IDE, en millions d'USD" },
                from: 944, fromYear: "2020/21", to: 1656, toYear: "2024/25", unit: "", dir: "up",
                status: { en: "Annex figure. Table 4.5 gives USD 2,679.7m for 2024 — unreconciled",
                          fr: "Chiffre de l'annexe. Le tableau 4.5 retient 2 679,7 M USD pour 2024 — non réconcilié" } },
              { label: { en: "ODA committed, USD billion", fr: "APD engagée, en milliards d'USD" },
                from: 2.65, fromYear: "2020/21", to: 3.19, toYear: "2024/25", unit: "", dir: "up",
                status: { en: "Improving. Predictability, not volume, is Tanzania's ask",
                          fr: "En amélioration. La demande de la Tanzanie porte sur la prévisibilité, non le volume" } },
              { label: { en: "Remittances, % of GDP", fr: "Transferts de fonds, en % du PIB" },
                from: 0.71, fromYear: "2020/21", to: 1.5, toYear: "2024/25", unit: "%", dir: "up",
                status: { en: "Improving, but a volatile series (0.42% in 2023/24)",
                          fr: "En amélioration, mais série volatile (0,42 % en 2023-2024)" } },
              { label: { en: "Project objectives aligned to national frameworks", fr: "Objectifs de projet alignés sur les cadres nationaux" },
                from: 92.0, fromYear: "2023/24", to: 95.74, toYear: "2024/25", unit: "%", dir: "up",
                status: { en: "On track. The chapter table labels these years as 2020 and 2025",
                          fr: "En bonne voie. Le tableau du chapitre situe ces valeurs en 2020 et 2025" } },
              { label: { en: "Statistical capacity score (SPI)", fr: "Score de capacité statistique (SPI)" },
                from: 61.53, fromYear: "2020/21", to: 69, toYear: "2024/25", unit: "", dir: "up",
                status: { en: "Improving. Zanzibar's own score rose from 75 to 91",
                          fr: "En amélioration. Le score propre de Zanzibar est passé de 75 à 91" } },
              { label: { en: "Internet users", fr: "Utilisateurs d'Internet" },
                from: 48, fromYear: "2020/21", to: 85, toYear: "2024/25", unit: "%", dir: "up",
                status: { en: "On track. Reported identically under SDG 9 and SDG 17",
                          fr: "En bonne voie. Rapporté à l'identique sous les ODD 9 et 17" } }
            ],
            source: "VNR 2026, Annex Table A17 · Table 1.1 · Table 4.5" }
        ]
      },

      /* ── TAB 7 ──────────────────── Acceleration Pathways 2026–2030 ── */
      {
        id: "acceleration",
        label: { en: "Acceleration 2026–2030", fr: "Accélération 2026-2030" },
        intro: {
          en: "Chapter 7 of the review sets out five cross-cutting challenges, three acceleration pathways, and five asks of the international community. What follows is the report's own diagnosis, not an external one — including its finding that the central implementation gap is structural transformation.",
          fr: "Le chapitre 7 de la revue présente cinq défis transversaux, trois trajectoires d'accélération et cinq demandes adressées à la communauté internationale. Ce qui suit constitue le diagnostic du rapport lui-même, et non un diagnostic externe — y compris son constat selon lequel la principale lacune de mise en œuvre porte sur la transformation structurelle."
        },
        blocks: [
          { type: "cards", items: [
            { name: { en: "Insufficient structural transformation", fr: "Transformation structurelle insuffisante" },
              kicker: { en: "Challenge 1", fr: "Défi 1" },
              stats: [ { label: { en: "Manufacturing, % of GDP (2025)", fr: "Industrie manufacturière, en % du PIB (2025)" }, value: 5.9, unit: "%" } ],
              text: {
                en: "The review's own framing: infrastructure must translate into industrial value addition, productivity and formal jobs. It has not yet. Manufacturing fell from 7.7% to 5.9% of GDP across the same five years in which generation capacity doubled and rail passengers quadrupled. This is the challenge from which the other four largely follow.",
                fr: "Selon la formulation même de la revue : les infrastructures doivent se traduire en valeur ajoutée industrielle, en productivité et en emplois formels. Ce n'est pas encore le cas. L'industrie manufacturière est tombée de 7,7 % à 5,9 % du PIB au cours des cinq années mêmes où la capacité de production a doublé et le trafic ferroviaire de voyageurs quadruplé. C'est le défi dont découlent largement les quatre autres."
              },
              source: "VNR 2026, Ch. 7 · Annex Table A9" },

            { name: { en: "High informality", fr: "Forte informalité" },
              kicker: { en: "Challenge 2", fr: "Défi 2" },
              stats: [
                { label: { en: "Informal, non-agricultural jobs (2025)", fr: "Emplois non agricoles informels (2025)" }, value: 95.7, unit: "%" },
                { label: { en: "Among women", fr: "Chez les femmes" }, value: 97.1, unit: "%" }
              ],
              text: {
                en: "Informality links several of the review's findings: it erodes the tax base, which constrains SDG financing; it leaves workers outside social protection (disability benefit coverage reaches 0.004% of households); and it reflects an industrial sector too small to absorb the labour force. It is rising, and highest among women.",
                fr: "L'informalité relie plusieurs constats de la revue : elle érode l'assiette fiscale, ce qui limite le financement des ODD ; elle laisse les travailleurs hors de la protection sociale (la couverture des prestations d'invalidité n'atteint que 0,004 % des ménages) ; et elle reflète un secteur industriel trop réduit pour absorber la population active. Elle progresse, et elle est la plus élevée chez les femmes."
              },
              source: "VNR 2026, Ch. 7 · Table 3.8 · Annex Tables A1, A8" },

            { name: { en: "Climate and environmental vulnerability", fr: "Vulnérabilité climatique et environnementale" },
              kicker: { en: "Challenge 3", fr: "Défi 3" },
              stats: [
                { label: { en: "Forest lost since 2020", fr: "Forêt perdue depuis 2020" }, value: 2.35, unit: " M ha" },
                { label: { en: "Flood losses, 2025 (USD m)", fr: "Pertes dues aux inondations, 2025 (M USD)" }, value: 500, unit: "" }
              ],
              text: {
                en: "The environmental indicators decline over the period. Forest area falls every year; greenhouse gas emissions rose from 95,000 to 101,000 Gg CO2e; land degradation affects 50–61% of the land area; marine protected coverage has not moved since 2020. Climate shocks then feed back into the fiscal position — the report's own words are that they increase fiscal pressure.",
                fr: "Les indicateurs environnementaux reculent sur la période. La superficie forestière recule chaque année ; les émissions de gaz à effet de serre sont passées de 95 000 à 101 000 Gg éq. CO2 ; la dégradation des terres touche 50 à 61 % du territoire ; la couverture marine protégée n'a pas bougé depuis 2020. Les chocs climatiques se répercutent ensuite sur la position budgétaire — le rapport écrit qu'ils accroissent la pression budgétaire."
              },
              source: "VNR 2026, Ch. 7 · Tables 3.11, 3.13 · Annex Tables A11, A13, A15" },

            { name: { en: "Financing constraints", fr: "Contraintes de financement" },
              kicker: { en: "Challenge 4", fr: "Défi 4" },
              stats: [
                { label: { en: "Public debt, % of GDP", fr: "Dette publique, en % du PIB" }, value: 51.0, unit: "%" },
                { label: { en: "Domestic revenue, % of GDP", fr: "Recettes intérieures, en % du PIB" }, value: 15.1, unit: "%" }
              ],
              text: {
                en: "Revenue effort remains below what SDG acceleration requires, and it has begun to fall. Debt has climbed ten percentage points of GDP. Adaptation needs exceed available climate finance. And FYDP IV assumes 70% private financing at a moment when the report itself says bankability gaps constrain investment. The financing problem is not primarily an aid problem — it is a formalization and project-preparation problem.",
                fr: "L'effort de recettes demeure inférieur à ce qu'exige l'accélération des ODD, et il a commencé à décliner. La dette a gagné dix points de pourcentage du PIB. Les besoins d'adaptation excèdent la finance climatique disponible. Et le FYDP IV postule un financement privé à hauteur de 70 %, au moment même où le rapport constate que les lacunes de bancabilité freinent l'investissement. Le problème de financement n'est pas d'abord un problème d'aide : c'est un problème de formalisation et de préparation des projets."
              },
              source: "VNR 2026, Ch. 7 · Table 5.1 · Annex Table A17" },

            { name: { en: "Uneven implementation capacity", fr: "Capacité de mise en œuvre inégale" },
              kicker: { en: "Challenge 5", fr: "Défi 5" },
              text: {
                en: "Local Government Authorities deliver most SDG services, and their planning, data and delivery capacity varies widely — the report consulted roughly 185 of them and heard the same message. Administrative data quality is uneven, disaggregation by sex, age, disability and location is incomplete, and some SDG indicators remain unlocalised. Capacity, not commitment, determines whether a national plan reaches a village.",
                fr: "Les autorités locales assurent la majorité des services relevant des ODD, et leurs capacités de planification, de données et d'exécution varient fortement — le rapport en a consulté environ 185 et en a reçu le même message. La qualité des données administratives est inégale, la désagrégation par sexe, âge, handicap et localisation reste incomplète, et certains indicateurs des ODD ne sont pas localisés. C'est la capacité, non l'engagement, qui détermine si un plan national parvient jusqu'à un village."
              },
              source: "VNR 2026, Ch. 7 · Table 2.4 · Table 7.2" }
          ] },

          { type: "cards", items: [
            { name: { en: "Pathway 1 — Industrial transformation", fr: "Trajectoire 1 — Transformation industrielle" },
              kicker: { en: "Convert infrastructure into productive capacity", fr: "Convertir les infrastructures en capacité productive" },
              text: {
                en: "Core objective: turn the energy and transport investments into exports and formal jobs. Priority actions named in the report: activate industrial corridors; develop agro-processing and blue-economy value chains; expand SME finance; reform technical and vocational training; strengthen supplier development. This pathway addresses the central implementation gap, and shows the least progress so far — which is why it is listed first.",
                fr: "Objectif central : convertir les investissements énergétiques et de transport en exportations et en emplois formels. Actions prioritaires désignées par le rapport : activer les corridors industriels ; développer les chaînes de valeur de l'agro-transformation et de l'économie bleue ; élargir le financement des PME ; réformer l'enseignement technique et professionnel ; renforcer le développement des fournisseurs. Cette trajectoire répond à la principale lacune de mise en œuvre et affiche jusqu'ici le moins de résultats — raison pour laquelle elle vient en tête."
              },
              source: "VNR 2026, Table 7.1" },

            { name: { en: "Pathway 2 — Climate-resilient systems", fr: "Trajectoire 2 — Systèmes résilients au climat" },
              kicker: { en: "Protect the assets the economy runs on", fr: "Protéger les actifs sur lesquels repose l'économie" },
              text: {
                en: "Core objective: reduce disaster losses and protect the natural assets underpinning water, energy, agriculture and urban services. Priority actions: scale disaster risk reduction strategies to all districts (only 25.5% have one today); reduce non-revenue water; expand clean cooking; restore watersheds and mangroves; mainstream climate risk in public investment appraisal. Note the dependency: a generation mix now 76.6% renewable and heavily hydro is itself exposed to the droughts this pathway is meant to manage.",
                fr: "Objectif central : réduire les pertes dues aux catastrophes et protéger les actifs naturels qui sous-tendent l'eau, l'énergie, l'agriculture et les services urbains. Actions prioritaires : étendre les stratégies de réduction des risques de catastrophe à tous les districts (25,5 % seulement en disposent aujourd'hui) ; réduire l'eau non facturée ; développer la cuisson propre ; restaurer les bassins versants et les mangroves ; intégrer le risque climatique dans l'évaluation des investissements publics. À noter, une dépendance : un mix de production désormais renouvelable à 76,6 % et fortement hydraulique est lui-même exposé aux sécheresses que cette trajectoire entend gérer."
              },
              source: "VNR 2026, Table 7.1 · Annex Tables A7, A11" },

            { name: { en: "Pathway 3 — Financing and implementation reform", fr: "Trajectoire 3 — Réforme du financement et de la mise en œuvre" },
              kicker: { en: "Pay for acceleration, and deliver it", fr: "Financer l'accélération, et l'exécuter" },
              text: {
                en: "Core objective: finance SDG acceleration through domestic revenue, private investment and aligned partnerships. Priority actions: raise tax effort; prepare bankable projects; use blended finance; align development cooperation to national plans and budget cycles; strengthen monitoring and accountability. The report pairs this with four implementation conditions — project preparation, subnational capacity, data discipline and partnership alignment — on the argument that money without preparation does not become delivery.",
                fr: "Objectif central : financer l'accélération des ODD par les recettes intérieures, l'investissement privé et des partenariats alignés. Actions prioritaires : accroître l'effort fiscal ; préparer des projets bancables ; recourir au financement mixte ; aligner la coopération au développement sur les plans nationaux et les cycles budgétaires ; renforcer le suivi et la redevabilité. Le rapport l'assortit de quatre conditions de mise en œuvre — préparation des projets, capacités infranationales, discipline des données et alignement des partenariats — au motif que l'argent sans préparation ne devient pas exécution."
              },
              source: "VNR 2026, Table 7.1 · Table 7.2 · Table 5.1" }
          ] },

          { type: "prose",
            title: { en: "Five calls to the international community", fr: "Cinq demandes à la communauté internationale" },
            text: {
              en: "Tanzania's asks are specific, and each is tied to a goal.\n\n1. Reform the debt architecture to expand fiscal space (SDG 17). Public debt has risen from 41.3% to 51.0% of GDP financing infrastructure whose returns have not yet materialised; the terms on which that debt is carried determine how much room remains for the SDGs.\n\n2. Scale up climate finance (SDG 7 and SDG 13). The report states plainly that adaptation needs exceed current financing — against flood losses of USD 500 million in 2025 alone.\n\n3. Accelerate technology transfer (SDG 9). Manufacturing at 5.9% of GDP and R&D at 1.06% describe an economy that cannot industrialise on domestic technology alone.\n\n4. Ensure predictable ODA (SDG 17). Commitments have grown to USD 3.19 billion and 95.74% of partner project objectives are now aligned to national frameworks; what the review asks for is not more aid, but aid it can plan around.\n\n5. Reform trade rules to protect industrial policy space (SDG 9 and SDG 17). The Minister's Foreword adds a sixth ask — expanded access to concessional financing.\n\nIn return, the report commits Tanzania to strengthen national systems, improve coordination, deepen accountability and \"ensure that development results reach people and communities\". Its closing line is the one to carry into the HLPF: \"Tanzania is not only reporting on the SDGs; it is using the SDG review to improve national implementation under Dira 2050 and FYDP IV.\"",
              fr: "Les demandes de la Tanzanie sont précises, et chacune est rattachée à un objectif.\n\n1. Réformer l'architecture de la dette afin d'élargir l'espace budgétaire (ODD 17). La dette publique est passée de 41,3 % à 51,0 % du PIB pour financer des infrastructures dont les rendements ne se sont pas encore matérialisés ; les conditions auxquelles cette dette est portée déterminent la marge qui reste pour les ODD.\n\n2. Accroître la finance climatique (ODD 7 et ODD 13). Le rapport affirme sans détour que les besoins d'adaptation dépassent les financements actuels — face à 500 millions d'USD de pertes dues aux inondations pour la seule année 2025.\n\n3. Accélérer le transfert de technologies (ODD 9). Une industrie manufacturière à 5,9 % du PIB et une R&D à 1,06 % décrivent une économie qui ne peut s'industrialiser sur la seule technologie nationale.\n\n4. Garantir la prévisibilité de l'APD (ODD 17). Les engagements ont atteint 3,19 milliards d'USD et 95,74 % des objectifs des projets des partenaires sont désormais alignés sur les cadres nationaux ; ce que demande la revue, ce n'est pas davantage d'aide, mais une aide sur laquelle planifier.\n\n5. Réformer les règles commerciales afin de préserver l'espace de politique industrielle (ODD 9 et ODD 17). L'avant-propos du ministre y ajoute une sixième demande : un accès élargi aux financements concessionnels.\n\nEn contrepartie, le rapport engage la Tanzanie à renforcer ses systèmes nationaux, à améliorer la coordination, à approfondir la redevabilité et à « faire en sorte que les résultats du développement atteignent les personnes et les communautés ». Sa phrase de conclusion est celle qu'il faut emporter au FPHN : « La Tanzanie ne se contente pas de rendre compte des ODD ; elle utilise la revue des ODD pour améliorer la mise en œuvre nationale dans le cadre de Dira 2050 et du FYDP IV. »"
            },
            source: "VNR 2026, Main Messages · Ch. 8 (Conclusion and Call to Action) · Minister's Foreword" },

          { type: "cards", items: [
            { name: { en: "Project preparation", fr: "Préparation des projets" },
              kicker: { en: "Condition 1", fr: "Condition 1" },
              text: {
                en: "Poorly prepared projects cannot attract finance or deliver impact. The response: strengthen feasibility studies, appraisal and risk allocation before a project enters the budget. With the private sector expected to fund 70% of FYDP IV, this is not a technicality — it is the pipeline itself.",
                fr: "Des projets mal préparés ne peuvent ni attirer de financements ni produire d'impact. La réponse : renforcer les études de faisabilité, l'évaluation et la répartition des risques avant l'inscription budgétaire. Le secteur privé devant financer 70 % du FYDP IV, il ne s'agit pas d'une question technique : c'est le vivier de projets lui-même."
              },
              source: "VNR 2026, Table 7.2 · Table 5.1" },
            { name: { en: "Subnational capacity", fr: "Capacités infranationales" },
              kicker: { en: "Condition 2", fr: "Condition 2" },
              text: {
                en: "Local Government Authorities deliver many SDG services. The response: invest in their planning, data and implementation support. This is where the gap between a 25.5% district DRR coverage rate and a 2028 universal target will be closed — or not.",
                fr: "Les autorités locales assurent de nombreux services relevant des ODD. La réponse : investir dans leur planification, leurs données et leur appui à la mise en œuvre. C'est là que l'écart entre un taux de couverture de 25,5 % des districts en stratégies de RRC et une cible universelle pour 2028 sera comblé — ou non."
              },
              source: "VNR 2026, Table 7.2 · Annex Table A11" },
            { name: { en: "Data discipline", fr: "Discipline des données" },
              kicker: { en: "Condition 3", fr: "Condition 3" },
              text: {
                en: "Decision makers need trusted, timely and comparable indicators. The response: agree metadata, units, sources and reporting calendars. The review's own chapter tables and statistical annex differ in several places, most often on which year a value belongs to.",
                fr: "Les décideurs ont besoin d'indicateurs fiables, actuels et comparables. La réponse : s'accorder sur les métadonnées, les unités, les sources et les calendriers de publication. Les propres tableaux de chapitre de la revue et son annexe statistique diffèrent par endroits, le plus souvent sur l'année à laquelle une valeur se rattache."
              },
              source: "VNR 2026, Table 7.2 · Table 2.4" },
            { name: { en: "Partnership alignment", fr: "Alignement des partenariats" },
              kicker: { en: "Condition 4", fr: "Condition 4" },
              text: {
                en: "Fragmented support reduces impact. The response: use national plans and budgets as the basis for partner support — the standard Tanzania has already reached on 95.74% of partner project objectives, and the standard it asks the international community to hold to.",
                fr: "Un appui fragmenté réduit l'impact. La réponse : faire des plans et budgets nationaux la base du soutien des partenaires — la norme que la Tanzanie applique déjà à 95,74 % des objectifs des projets partenaires, et celle qu'elle demande à la communauté internationale de respecter."
              },
              source: "VNR 2026, Table 7.2 · Annex Table A17" }
          ] }
        ]
      }
    ]
  }
});
