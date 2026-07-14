/* Guinée — RNV 2024 → 2026. Fiche source rédigée en français : le `fr` est le
   texte source, l'`en` en est la traduction.
   Fact-checké contre data/factsheets.txt (l. 558–637), l'ancien tableau de bord
   « Guinea Dashboard.dc.html », la BAD (Perspectives économiques 2025), la Banque
   mondiale (WDI, Macro Poverty Outlook), l'USGS et Rio Tinto/Simfer.
   Voir `factcheck` en bas. */
window.VNR.register({
  slug: "guinea",
  iso: "GN",
  name: { en: "Guinea", fr: "Guinée" },
  region: "west",
  vnrPrev: 2024,
  vnrCycles: [2018, 2024, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/guinea.pdf",

  tagline: {
    fr: "La Vision 2040 et les cadres nationaux de développement (PNDES, PRI et Programme Simandou 2040) au service de l'Agenda 2030.",
    en: "Vision 2040 and the national development frameworks (PNDES, PRI and the Simandou 2040 Programme) in the service of the 2030 Agenda."
  },

  themes: [
    { sdg: 1,
      title: { fr: "Bien-être de la population", en: "Well-being of the Population" },
      text: {
        fr: "La Guinée s'engage à pérenniser ses acquis et à garantir le bien-être de sa population, sans laisser personne de côté.",
        en: "Guinea commits to consolidating its gains and to guaranteeing the well-being of its population, leaving no one behind."
      } },
    { sdg: 8,
      title: { fr: "Stabilité macroéconomique", en: "Macroeconomic Stability" },
      text: {
        fr: "PIB de 6,9 % en 2025 et perspectives d'environ 10 % pour 2026-2027 ; inflation maîtrisée de 5,1 % à 3,1 %, fruit d'une politique prudente.",
        en: "GDP growth of 6.9% in 2025 and an outlook of around 10% for 2026–2027; inflation brought under control from 5.1% to 3.1%, the fruit of a prudent policy."
      } },
    { sdg: 9,
      title: { fr: "Vision 2040 et Programme Simandou", en: "Vision 2040 and the Simandou Programme" },
      text: {
        fr: "La Vision 2040 pour une Guinée émergente et le Programme Simandou 2040 structurent l'ambition de croissance et de transformation.",
        en: "Vision 2040 for an emerging Guinea and the Simandou 2040 Programme give structure to the country's ambition for growth and transformation."
      } },
    { sdg: 10,
      title: { fr: "Mise en œuvre souveraine", en: "Sovereign Implementation" },
      text: {
        fr: "Une mise en œuvre souveraine de l'Agenda 2030, au service de tous les citoyens guinéens et de la cohésion nationale.",
        en: "A sovereign implementation of the 2030 Agenda, in the service of all Guinean citizens and of national cohesion."
      } },
    { sdg: 16,
      title: { fr: "Cohérence des politiques", en: "Policy Coherence" },
      text: {
        fr: "Alignement des ODD dans les documents de planification (PNDES, PRI 2022-2025) et Guide de formulation des politiques sectorielles.",
        en: "Alignment of the SDGs across the planning documents (PNDES, PRI 2022–2025) and the Guide to the formulation of sectoral policies."
      } },
    { sdg: 17,
      title: { fr: "Suivi-évaluation et statistiques", en: "Monitoring, Evaluation and Statistics" },
      text: {
        fr: "Le Dispositif Institutionnel de Suivi-Évaluation (DISE) et l'Institut National de la Statistique fournissent des données fiables, renforcés par une plateforme numérique.",
        en: "The Institutional Monitoring and Evaluation Mechanism (DISE) and the National Institute of Statistics provide reliable data, reinforced by a digital platform."
      } }
  ],

  continuity: [
    { prev: { fr: "Croissance minière, gouvernance et capital humain", en: "Mining-led growth, governance and human capital" },
      status: "sustained",
      now: { fr: "Vision 2040 & Programme Simandou", en: "Vision 2040 & the Simandou Programme" } },
    { prev: { fr: "Croissance tirée par le secteur minier", en: "Growth driven by the mining sector" },
      status: "evolved",
      now: { fr: "PIB 6,9 %, inflation maîtrisée", en: "GDP 6.9%, inflation contained" } },
    { prev: { fr: "Alignement & priorisation des ODD", en: "SDG alignment & prioritisation" },
      status: "evolved",
      now: { fr: "Cohérence des politiques (Guide sectoriel)", en: "Policy coherence (sectoral Guide)" } },
    { prev: { fr: "Suivi des progrès depuis le RNV 2018", en: "Tracking progress since the 2018 VNR" },
      status: "sustained",
      now: { fr: "Dispositif DISE & plateforme numérique", en: "The DISE mechanism & digital platform" } },
    { prev: { fr: "Renforcement du système statistique", en: "Strengthening the statistical system" },
      status: "evolved",
      now: { fr: "Données fiables de l'Institut National de la Statistique et coopération", en: "Reliable data from the National Institute of Statistics, and cooperation" } }
  ],

  concepts: {
    caption: {
      fr: "La Guinée articule sa revue autour de la stabilité macroéconomique, de la cohérence et du suivi des ODD.",
      en: "Guinea builds its review around macroeconomic stability, policy coherence and SDG monitoring."
    },
    items: [
      { label: { fr: "institutions & cohérence", en: "institutions & coherence" }, value: 8 },
      { label: { fr: "suivi-évaluation", en: "monitoring & evaluation" }, value: 8 },
      { label: { fr: "planification & ODD", en: "planning & the SDGs" }, value: 7 },
      { label: { fr: "croissance & PIB", en: "growth & GDP" }, value: 6 },
      { label: { fr: "statistiques & données", en: "statistics & data" }, value: 6 },
      { label: { fr: "Simandou 2040", en: "Simandou 2040" }, value: 3 },
      { label: { fr: "bien-être", en: "well-being" }, value: 3 },
      { label: { fr: "inflation maîtrisée", en: "contained inflation" }, value: 3 },
      { label: { fr: "réformes budgétaires", en: "fiscal reforms" }, value: 2 }
    ]
  },

  indicators: [
    { id: "gdp_growth", sdg: 8,
      label: { fr: "Croissance du PIB réel, 2025", en: "Real GDP growth, 2025" },
      value: 6.9, unit: "%",
      note: {
        fr: "Contre 5,4 % en 2024. La BAD confirme 6,9 % ; le Macro Poverty Outlook de la Banque mondiale retient 7,4 %, l'écart tenant au traitement de la montée en puissance de Simandou en fin d'année.",
        en: "Up from 5.4% in 2024. The AfDB confirms 6.9%; the World Bank's Macro Poverty Outlook gives 7.4%, the difference turning on how the end-of-year Simandou ramp-up is treated."
      },
      source: "RNV 2026 · BAD, Perspectives économiques en Guinée (2025)" },
    { id: "gdp_outlook", sdg: 8,
      label: { fr: "Croissance projetée, moyenne 2026-2027", en: "Projected growth, 2026–2027 average" },
      value: 9.6, unit: "%",
      note: {
        fr: "La fiche annonce « environ 10 % ». La BAD projette précisément 9,3 % en 2026 et 9,8 % en 2027, soit une moyenne de 9,6 % — une projection, non un résultat, et entièrement suspendue à la montée en cadence de Simandou.",
        en: "The factsheet says \"around 10%\". The AfDB projects 9.3% in 2026 and 9.8% in 2027 precisely — an average of 9.6%. This is a projection, not an outturn, and it hangs entirely on the Simandou ramp-up."
      },
      source: "BAD, Perspectives économiques en Guinée (2025) · RNV 2026" },
    { id: "inflation", sdg: 8,
      label: { fr: "Inflation, 2025", en: "Inflation, 2025" },
      value: 3.1, unit: "%",
      note: {
        fr: "Contre 5,1 % en 2024, sous l'effet de la dissipation des chocs d'offre et d'une politique monétaire prudente. La BAD projette toutefois une remontée à 4,2 % en 2026.",
        en: "Down from 5.1% in 2024, as supply shocks dissipated and monetary policy stayed prudent. The AfDB nonetheless projects a rebound to 4.2% in 2026."
      },
      source: "RNV 2026 · BAD, Perspectives économiques en Guinée (2025)" },
    { id: "elec_access", sdg: 7,
      label: { fr: "Accès à l'électricité, ensemble du pays", en: "Electricity access, national" },
      value: 51.1, unit: "%",
      note: {
        fr: "Donnée Banque mondiale 2023. La fiche RNV de la Guinée ne comporte aucun chiffre d'accès à l'électricité : cet indicateur est ajouté depuis une source externe citable, non repris du RNV.",
        en: "World Bank data, 2023. Guinea's VNR factsheet carries no electricity-access figure at all: this indicator is added from a citable external source, not taken from the VNR."
      },
      source: "Banque mondiale, WDI 2023 (EG.ELC.ACCS.ZS) · Base de données ODD, indicateur 7.1.1" },
    { id: "elec_rural", sdg: 7,
      label: { fr: "Accès à l'électricité en milieu rural", en: "Rural electricity access" },
      value: 25.7, unit: "%",
      note: {
        fr: "Contre 92,5 % en milieu urbain : l'écart urbain-rural est de près de 67 points, le plus large de tous les indicateurs disponibles sur la Guinée.",
        en: "Against 92.5% in urban areas: an urban–rural gap of nearly 67 points, the widest of any indicator available for Guinea."
      },
      source: "Banque mondiale, WDI 2023 (EG.ELC.ACCS.RU.ZS)" },
    { id: "poverty_national", sdg: 1,
      label: { fr: "Population sous le seuil national de pauvreté (2018-2019)", en: "Population below the national poverty line (2018–2019)" },
      value: 43.7, unit: "%",
      note: {
        fr: "Soit environ 5,8 millions de personnes. C'est la donnée d'enquête la plus récente disponible, antérieure de sept ans à la revue : la fiche RNV 2026 fait du « bien-être de la population » l'un de ses six thèmes sans avancer un seul chiffre social.",
        en: "Around 5.8 million people. It is the most recent survey figure available, seven years older than the review itself: the 2026 VNR factsheet makes \"well-being of the population\" one of its six themes without advancing a single social number."
      },
      source: "Banque mondiale, Macro Poverty Outlook / Global Poverty Statistics (enquête 2018-2019)" },
    { id: "bauxite_share", sdg: 9,
      label: { fr: "Part de la Guinée dans les réserves mondiales de bauxite", en: "Guinea's share of world bauxite reserves" },
      value: 26.4, unit: "%",
      note: {
        fr: "Premier rang mondial, avec environ 7,4 milliards de tonnes de réserves (USGS). À cela s'ajoute Simandou, plus grand gisement de minerai de fer à haute teneur d'Afrique, dont le système intégré mine-rail-port représente un investissement de 20 à 23 milliards de dollars.",
        en: "First in the world, with roughly 7.4 billion tonnes of reserves (USGS). To this is added Simandou, Africa's largest high-grade iron-ore deposit, whose integrated mine–rail–port system represents an investment of US$20–23 billion."
      },
      source: "USGS Mineral Commodity Summaries · Rio Tinto / Simfer" }
  ],

  charts: [
    { id: "gdp_path", type: "line", sdg: 8,
      title: { fr: "Croissance du PIB réel, en %", en: "Real GDP growth, %" },
      unit: "%",
      xLabel: { fr: "Année (2026 et 2027 : projections)", en: "Year (2026 and 2027: projections)" },
      series: [
        { key: "gdp", label: { fr: "Croissance du PIB réel", en: "Real GDP growth" },
          points: [{ x: "2024", y: 5.4 }, { x: "2025", y: 6.9 }, { x: "2026", y: 9.3 }, { x: "2027", y: 9.8 }] }
      ],
      insight: {
        fr: "Deux des quatre points de ce graphique sont des projections, et il faut le dire : 2024 et 2025 sont des résultats, 2026 et 2027 sont ce que la Guinée espère de Simandou. Le premier minerai a été exporté fin 2025 et la montée en cadence doit atteindre 120 millions de tonnes par an. Une économie dont l'accélération repose sur un seul gisement est aussi une économie dont le profil de risque repose sur un seul gisement : le cours du minerai de fer, le calendrier du chantier et la gestion de la rente décideront si la courbe ci-dessus se réalise.",
        en: "Two of the four points on this chart are projections, and that has to be said: 2024 and 2025 are outturns, 2026 and 2027 are what Guinea hopes for from Simandou. First ore was exported in late 2025 and the ramp-up is meant to reach 120 million tonnes a year. An economy whose acceleration rests on a single deposit is also an economy whose risk profile rests on a single deposit: the iron-ore price, the construction timetable and the management of the rent will decide whether the curve above materialises."
      },
      source: "BAD, Perspectives économiques en Guinée (2025) · RNV 2026" },

    { id: "inflation_path", type: "line", sdg: 8,
      title: { fr: "Inflation, en %", en: "Inflation, %" },
      unit: "%",
      xLabel: { fr: "Année (2026 et 2027 : projections)", en: "Year (2026 and 2027: projections)" },
      series: [
        { key: "cpi", label: { fr: "Inflation (IPC)", en: "Inflation (CPI)" },
          points: [{ x: "2024", y: 5.1 }, { x: "2025", y: 3.1 }, { x: "2026", y: 4.2 }, { x: "2027", y: 3.6 }] }
      ],
      insight: {
        fr: "La fiche présente l'inflation comme « maîtrisée », de 5,1 % à 3,1 %. C'est exact pour 2025 — mais les mêmes projections qui portent la croissance à près de 10 % font remonter l'inflation à 4,2 % en 2026. Le boom minier est lui-même une source de pression sur les prix : dépenses d'infrastructure, appréciation du change, demande intérieure. La maîtrise de l'inflation n'est pas un acquis, c'est l'épreuve que la Guinée doit passer pendant le boom, pas avant.",
        en: "The factsheet presents inflation as \"contained\", from 5.1% to 3.1%. That is right for 2025 — but the same projections that take growth to nearly 10% take inflation back up to 4.2% in 2026. The mining boom is itself a source of price pressure: infrastructure spending, currency appreciation, domestic demand. Contained inflation is not an achievement banked; it is the test Guinea has to pass during the boom, not before it."
      },
      source: "BAD, Perspectives économiques en Guinée (2025) · RNV 2026" },

    { id: "elec_gap", type: "gap", sdg: 7,
      title: { fr: "Accès à l'électricité : Conakry et le reste du pays, 2023", en: "Electricity access: Conakry and the rest of the country, 2023" },
      unit: "%",
      items: [
        { label: { fr: "Milieu urbain", en: "Urban areas" }, value: 92.5, emphasis: false },
        { label: { fr: "Ensemble du pays", en: "National" }, value: 51.1, emphasis: false },
        { label: { fr: "Milieu rural", en: "Rural areas" }, value: 25.7, emphasis: true }
      ],
      insight: {
        fr: "Aucun de ces trois chiffres ne figure sur la fiche RNV 2026 de la Guinée, qui ne retient pas l'ODD 7 parmi ses six thèmes. Ils méritent pourtant d'être posés à côté du Programme Simandou : le pays qui construit 650 km de voie ferrée et un port en eau profonde n'a pas électrifié trois quarts de ses campagnes. C'est la mesure exacte de la conversion à réussir — de la rente minière au bien-être, thème que la revue revendique mais ne chiffre pas.",
        en: "None of these three figures appears on Guinea's 2026 VNR factsheet, which does not count SDG 7 among its six themes. They deserve to sit beside the Simandou Programme all the same: the country building 650 km of railway and a deep-water port has not electrified three quarters of its countryside. That is the exact measure of the conversion still to be made — from mining rent to well-being, the theme the review claims but does not quantify."
      },
      source: "Banque mondiale, WDI 2023 (EG.ELC.ACCS.ZS, EG.ELC.ACCS.UR.ZS, EG.ELC.ACCS.RU.ZS)" },

    { id: "poverty_measures", type: "gap", sdg: 1,
      title: { fr: "Deux mesures de la pauvreté, en % de la population", en: "Two measures of poverty, % of the population" },
      unit: "%",
      items: [
        { label: { fr: "Pauvreté multidimensionnelle (IPM, 2021)", en: "Multidimensional poverty (MPI, 2021)" }, value: 66.2, emphasis: true },
        { label: { fr: "Seuil national de pauvreté monétaire (2018-2019)", en: "National monetary poverty line (2018–2019)" }, value: 43.7, emphasis: false }
      ],
      insight: {
        fr: "« Bien-être de la population » est l'un des six thèmes de la revue guinéenne, et la fiche n'y attache aucun chiffre. Les seules données disponibles viennent de l'extérieur, et elles sont anciennes : 43,7 % de pauvreté monétaire (enquête 2018-2019) et 66,2 % de pauvreté multidimensionnelle (IPM 2021). L'écart de vingt-deux points entre les deux mesures est lui-même le message : la privation en Guinée porte moins sur le revenu que sur l'accès — école, santé, eau, électricité. Ce sont précisément les dimensions que la croissance minière ne délivre pas d'elle-même.",
        en: "\"Well-being of the population\" is one of the six themes of Guinea's review, and the factsheet attaches no number to it. The only data available come from outside, and they are old: 43.7% monetary poverty (2018–2019 survey) and 66.2% multidimensional poverty (MPI 2021). The twenty-two-point gap between the two measures is itself the message: deprivation in Guinea is less about income than about access — schooling, health, water, electricity. These are precisely the dimensions that mining growth does not deliver on its own."
      },
      source: "Banque mondiale, Global Poverty Statistics (2018-2019) · PNUD/OPHI, Indice de pauvreté multidimensionnelle 2023 (données 2021)" }
  ],

  instruments: [
    { name: { fr: "Vision Guinée 2040", en: "Guinea Vision 2040" },
      kicker: { fr: "aspiration nationale de long terme", en: "the long-term national aspiration" },
      text: {
        fr: "Le cadre d'horizon : une Guinée émergente, souveraine et prospère à l'horizon 2040. La Vision organise l'ambition du pays autour du passage de la rente minière à l'industrialisation, de l'investissement dans le capital humain et de la réforme de la gouvernance. La revue insiste sur le caractère souverain de la mise en œuvre de l'Agenda 2030 — c'est un choix politique explicite, et l'un des six thèmes.",
        en: "The horizon framework: an emerging, sovereign and prosperous Guinea by 2040. The Vision organises the country's ambition around the shift from mining rent to industrialisation, investment in human capital and governance reform. The review insists on the sovereign character of its implementation of the 2030 Agenda — an explicit political choice, and one of the six themes."
      },
      source: "RNV 2026 · Fiche RNV 2026" },
    { name: { fr: "Programme Simandou 2040", en: "The Simandou 2040 Programme" },
      kicker: { fr: "mine, rail et port", en: "mine, rail and port" },
      text: {
        fr: "Le plus grand gisement de minerai de fer à haute teneur d'Afrique — plus de trois milliards de tonnes à environ 65 % de fer — et le système intégré qui doit l'exporter : quelque 650 km de voie ferrée à travers le pays et un port en eau profonde à Matakong. Les premières exportations ont eu lieu fin 2025 ; la montée en cadence vise 120 millions de tonnes par an. C'est le pivot de toute la revue guinéenne.",
        en: "Africa's largest high-grade iron-ore deposit — over three billion tonnes at around 65% Fe — and the integrated system built to export it: some 650 km of railway across the country and a deep-water port at Matakong. First exports took place in late 2025; the ramp-up targets 120 million tonnes a year. It is the pivot of Guinea's entire review."
      },
      source: "RNV 2026 · Rio Tinto / Simfer · BAD (2025)" },
    { name: { fr: "PNDES et PRI 2022-2025", en: "PNDES and PRI 2022–2025" },
      kicker: { fr: "planification et priorités d'investissement", en: "planning and investment priorities" },
      text: {
        fr: "Le Plan national de développement économique et social porte le cadre stratégique ; le Programme de référence intérimaire 2022-2025 en est le plan opérationnel d'investissement public. La fiche présente l'alignement des ODD dans ces deux documents comme l'une de ses six réalisations — la cohérence des politiques y est traitée comme un résultat en soi, et non comme un préalable.",
        en: "The National Economic and Social Development Plan carries the strategic framework; the Interim Reference Programme 2022–2025 is its operational public-investment plan. The factsheet presents the alignment of the SDGs across these two documents as one of its six achievements — policy coherence is treated as a result in itself, not as a precondition."
      },
      source: "RNV 2026 · Fiche RNV 2026" },
    { name: { fr: "Guide de formulation des politiques sectorielles", en: "Guide to the formulation of sectoral policies" },
      kicker: { fr: "l'ODD 16 en pratique", en: "SDG 16 in practice" },
      text: {
        fr: "L'instrument par lequel chaque ministère rattache son document de politique à des cibles ODD précises. C'est un objet administratif modeste et c'est aussi, dans une revue centrée sur les institutions, ce qui distingue l'alignement déclaré de l'alignement effectif : les concepts « institutions & cohérence » et « planification & ODD » sont les plus fréquents des Messages Clés guinéens.",
        en: "The instrument through which each ministry ties its policy document to specific SDG targets. It is a modest administrative object, and in a review centred on institutions it is also what separates declared alignment from effective alignment: \"institutions & coherence\" and \"planning & the SDGs\" are the most frequent concepts in Guinea's Key Messages."
      },
      source: "RNV 2026 · Fiche RNV 2026" },
    { name: { fr: "Dispositif Institutionnel de Suivi-Évaluation (DISE)", en: "Institutional Monitoring and Evaluation Mechanism (DISE)" },
      kicker: { fr: "avec l'Institut National de la Statistique", en: "with the National Institute of Statistics" },
      text: {
        fr: "Le DISE et l'Institut National de la Statistique fournissent les données de suivi des ODD, appuyés par une plateforme numérique. La revue en fait une réalisation transversale — et c'est cohérent avec le poids du « suivi-évaluation » dans ses Messages Clés. Le test reste à venir : les données sociales guinéennes les plus récentes datent d'enquêtes de 2018-2021.",
        en: "The DISE and the National Institute of Statistics supply the SDG monitoring data, supported by a digital platform. The review treats this as a cross-cutting achievement — consistent with the weight of \"monitoring & evaluation\" in its Key Messages. The test is still ahead: Guinea's most recent social data come from surveys of 2018–2021."
      },
      source: "RNV 2026 · Fiche RNV 2026" },
    { name: { fr: "Souapiti et l'hydroélectricité du Fouta-Djalon", en: "Souapiti and Fouta Djallon hydropower" },
      kicker: { fr: "450 MW, mis en service en 2021", en: "450 MW, commissioned in 2021" },
      text: {
        fr: "Le barrage de Souapiti (450 MW) a doublé la capacité hydroélectrique du pays à sa mise en service en 2021 ; avec Kaleta, la Guinée exporte aujourd'hui de l'électricité vers le Sénégal, la Gambie et la Guinée-Bissau. Le plateau du Fouta-Djalon est la source du Niger, du Sénégal et de la Gambie : la Guinée est le château d'eau de l'Afrique de l'Ouest — un rôle régional qu'elle assume mieux qu'elle n'électrifie ses propres campagnes.",
        en: "The Souapiti dam (450 MW) doubled the country's hydropower capacity when it was commissioned in 2021; together with Kaleta, Guinea now exports electricity to Senegal, The Gambia and Guinea-Bissau. The Fouta Djallon plateau is the source of the Niger, Senegal and Gambia rivers: Guinea is West Africa's water tower — a regional role it fulfils rather better than it electrifies its own countryside."
      },
      source: "Banque mondiale, projets Guinée · OMVG · Tractebel (mise en service 2021)" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        fr: "L'ancien tableau de bord affichait « 40 Bn tonnes de réserves de bauxite — les plus grandes au monde ».",
        en: "The old dashboard displayed \"40Bn tonnes of bauxite reserves — the world's largest\"."
      },
      resolution: {
        fr: "La Guinée détient bien les premières réserves mondiales de bauxite, mais l'USGS les chiffre à environ 7,4 milliards de tonnes, soit 26,4 % du total mondial. Les 40 milliards relèvent de l'estimation de ressources parfois avancée dans la communication officielle : ce n'est pas la même grandeur qu'une réserve prouvée, et l'écart est d'un facteur cinq. Le chiffre est retiré ; le rang mondial, lui, est confirmé.",
        en: "Guinea does hold the world's largest bauxite reserves, but the USGS puts them at about 7.4 billion tonnes, or 26.4% of the world total. The 40-billion figure belongs to the resource estimate sometimes cited in official communications: that is not the same quantity as a proven reserve, and the gap is a factor of five. The figure is dropped; the world ranking is confirmed."
      } },
    { severity: "contradiction",
      issue: {
        fr: "Le tableau de bord donnait l'accès à l'électricité à « ~46 % » en 2024 et la cuisson propre à 8 %.",
        en: "The dashboard put electricity access at \"~46%\" in 2024 and clean cooking at 8%."
      },
      resolution: {
        fr: "La Banque mondiale situe l'accès à l'électricité en Guinée à 51,1 % dès 2023 (92,5 % en milieu urbain, 25,7 % en milieu rural) : le chiffre du tableau de bord est à la fois plus bas et plus tardif. Pour la cuisson propre, plus de 96 % de la population n'y a pas accès, ce qui place le taux sous les 4 % et non à 8 %. Les deux chiffres sont remplacés par les données Banque mondiale. À noter : aucun de ces indicateurs ne figure sur la fiche RNV de la Guinée, qui ne retient pas l'ODD 7.",
        en: "The World Bank puts Guinea's electricity access at 51.1% as early as 2023 (92.5% urban, 25.7% rural): the dashboard figure is both lower and later. On clean cooking, over 96% of the population lacks access, which puts the rate below 4%, not at 8%. Both figures are replaced with World Bank data. Note: neither indicator appears on Guinea's VNR factsheet, which does not carry SDG 7."
      } },
    { severity: "unverified",
      issue: {
        fr: "Le tableau de bord affirmait un potentiel hydroélectrique de « 26 000 MW — le troisième d'Afrique subsaharienne ».",
        en: "The dashboard claimed a hydropower potential of \"26,000 MW — the third largest in sub-Saharan Africa\"."
      },
      resolution: {
        fr: "Les estimations publiques du potentiel hydroélectrique guinéen se situent le plus souvent autour de 6 000 MW, avec des évaluations basses vers 2 900 MW. Aucune source citable ne soutient 26 000 MW, et le rang continental n'est pas établi. Le chiffre est supprimé. Ce qui est vérifiable est conservé : Souapiti (450 MW, 2021) a doublé la capacité hydroélectrique du pays, qui exporte désormais vers trois voisins.",
        en: "Public estimates of Guinea's hydropower potential most often cluster around 6,000 MW, with lower assessments near 2,900 MW. No citable source supports 26,000 MW, and the continental ranking is not established. The figure is removed. What is verifiable is kept: Souapiti (450 MW, 2021) doubled the country's hydropower capacity, which now exports to three neighbours."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Huit graphiques du tableau de bord guinéen portaient une légende sans rapport avec leurs données : « Accès électricité (%) » sur la série de croissance du PIB (graphique « Croissance du PIB et inflation »), avec pour source citée l'indicateur ODD 7.1.1 ; « Croissance du PIB » et « Inflation » sur les recettes publiques ; « Croissance du PIB (%) » et « Inflation (%) » sur la dette extérieure ; « Recettes fiscales (% du PIB) » sur la croissance du PIB (panneau ODD 8 Simandou) ; « Production minière (Mt) » sur une réserve exprimée en milliards de tonnes (panneau ODD 9), sourcée à l'indicateur 11.1.1 (quartiers informels) ; « Recettes internes (%) » et « Financement externe (%) » sur la dette ; « Recettes nationales (%) » et « Financement externe (%) » sur les recettes ; « Priorités d'investissement (rang) » sur une série d'accès à l'électricité. Le panneau ODD 1 (« bien-être ») était sourcé aux indicateurs 6.1.1 et 6.2.1, qui portent sur l'eau.",
        en: "Eight charts in Guinea's dashboard carried a legend unrelated to their data: \"Electricity access (%)\" over the GDP-growth series (in the \"GDP growth and inflation\" chart), sourced to SDG indicator 7.1.1; \"GDP growth\" and \"Inflation\" over public revenue; \"GDP growth (%)\" and \"Inflation (%)\" over external debt; \"Tax revenue (% of GDP)\" over GDP growth (SDG 8 Simandou panel); \"Mining production (Mt)\" over a reserve expressed in billions of tonnes (SDG 9 panel), sourced to indicator 11.1.1 (informal settlements); \"Domestic revenue (%)\" and \"External financing (%)\" over debt; \"Domestic revenue (%)\" and \"External financing (%)\" over revenue; and \"Investment priorities (rank)\" over an electricity-access series. The SDG 1 (\"well-being\") panel was sourced to indicators 6.1.1 and 6.2.1, which concern water."
      },
      resolution: {
        fr: "Ces légendes et ces citations d'indicateurs sont des résidus du gabarit dont les tableaux de bord ont été clonés ; plusieurs annonçaient une unité que le graphique ne portait pas (des mégatonnes sur une réserve, un rang sur un pourcentage). Toutes les étiquettes sont désormais générées depuis la couche de données bilingue : un graphique ne peut plus afficher une légende, une unité ou une source qui ne correspond pas à ses données.",
        en: "These legends and indicator citations are leftovers from the template the dashboards were cloned from; several announced a unit the chart did not carry (megatonnes over a reserve, a rank over a percentage). All labels are now generated from the bilingual data layer, so a chart can no longer display a legend, a unit or a source that does not match its data."
      } },
    { severity: "contradiction",
      issue: {
        fr: "Les séries de recettes et de dette du tableau de bord guinéen (13,4 % du PIB en 2015 → 17,7 % en 2024 ; recettes levées en interne 7,8 % → 10,6 % ; dette extérieure 10,9 % des exportations) sont présentées comme guinéennes.",
        en: "The revenue and debt series in Guinea's dashboard (13.4% of GDP in 2015 → 17.7% in 2024; domestically raised revenue 7.8% → 10.6%; external debt 10.9% of exports) are presented as Guinean."
      },
      resolution: {
        fr: "Elles sont identiques, chiffre pour chiffre, à celles du tableau de bord du Cameroun — jusqu'aux annotations « Interne 2017, ~11 % (trajectoire indicative) ». Deux pays ne partagent pas la même trajectoire budgétaire à la décimale près. Ce sont des données de gabarit. Toutes ces séries sont supprimées ; aucune donnée budgétaire n'est présentée pour la Guinée tant qu'elle n'est pas traçable à une source guinéenne.",
        en: "They are identical, digit for digit, to those in Cameroon's dashboard — down to the annotations \"Domestic 2017, ~11% (indicative trajectory)\". Two countries do not share the same fiscal path to the decimal. These are template data. All such series are removed; no fiscal data are presented for Guinea until they can be traced to a Guinean source."
      } },
    { severity: "unverified",
      issue: {
        fr: "Le bloc de financement affichait « Total 1 507 171 475 $ » d'engagements des partenaires jusqu'en 2035, avec une ventilation sectorielle (Emplois décents ODD 8, Industrialization ODD 9, Energy ODD 7, Health ODD 3, Hunger ODD 2, Education ODD 4, Poverty ODD 1) attribuée au « Graphique 74, p. 122 ».",
        en: "The financing block displayed \"Total $1,507,171,475\" of partner commitments to 2035, with a sector breakdown (Decent jobs SDG 8, Industrialization SDG 9, Energy SDG 7, Health SDG 3, Hunger SDG 2, Education SDG 4, Poverty SDG 1) attributed to \"Figure 74, p. 122\"."
      },
      resolution: {
        fr: "Le montant au dollar près, la liste sectorielle et la citation de page sont strictement identiques dans le tableau de bord du Cameroun. Le même chiffre ne peut pas être le total de deux pays différents. Le bloc entier est supprimé plutôt que reconduit sous une fausse précision.",
        en: "The dollar-exact total, the sector list and the page citation are strictly identical in Cameroon's dashboard. The same number cannot be the total for two different countries. The entire block is dropped rather than carried forward under false precision."
      } },
    { severity: "corrected",
      issue: {
        fr: "Le pied de page citait « Troisième Revue nationale volontaire 2026 ; Première Revue nationale volontaire 2020 », tandis que le corps du tableau de bord annonçait « 3 cycles RNV : 2018, 2024, 2026 » et renvoyait à un « RNV 2024, p. 85-86 » à numérotation invérifiable.",
        en: "The footer cited \"Third Voluntary National Review 2026; First Voluntary National Review 2020\", while the body announced \"3 VNR cycles: 2018, 2024, 2026\" and referenced a \"VNR 2024, pp. 85–86\" whose pagination cannot be checked."
      },
      resolution: {
        fr: "La fiche RNV 2026 nomme le cycle précédent (2024) et se réfère explicitement au « RNV 2018 » : les cycles retenus sont 2018, 2024 et 2026. Il n'existe pas de RNV guinéen de 2020. Les citations de page ont été ramenées au document et, lorsqu'elle est connue, à la source statistique.",
        en: "The 2026 VNR factsheet names the previous cycle (2024) and refers explicitly to the \"2018 VNR\": the cycles carried here are 2018, 2024 and 2026. There is no Guinean VNR of 2020. Page citations have been reduced to the document and, where known, to the statistical source."
      } },
    { severity: "unverified",
      issue: {
        fr: "La fiche RNV 2026 de la Guinée fait du « bien-être de la population » (ODD 1) et de la « mise en œuvre souveraine » (ODD 10) deux de ses six thèmes, sans avancer un seul indicateur social — ni pauvreté, ni santé, ni éducation, ni inégalité.",
        en: "Guinea's 2026 VNR factsheet makes \"well-being of the population\" (SDG 1) and \"sovereign implementation\" (SDG 10) two of its six themes, without advancing a single social indicator — no poverty, no health, no education, no inequality figure."
      },
      resolution: {
        fr: "Ce silence est un constat en soi, et il est signalé plutôt que comblé par des chiffres inventés. Les seules données sociales citables disponibles sont externes et anciennes : 43,7 % de pauvreté monétaire (enquête 2018-2019, Banque mondiale) et 66,2 % de pauvreté multidimensionnelle (IPM, données 2021). Elles sont présentées comme telles, avec leur millésime. Une revue dont les cinq concepts les plus fréquents sont institutionnels — institutions, suivi-évaluation, planification, croissance, statistiques — et dont le bien-être n'apparaît qu'en sixième position avec trois mentions décrit fidèlement où en est la conversion de la rente minière en développement.",
        en: "That silence is a finding in itself, and it is flagged rather than filled with invented numbers. The only citable social data available are external and old: 43.7% monetary poverty (2018–2019 survey, World Bank) and 66.2% multidimensional poverty (MPI, 2021 data). They are presented as such, with their vintage. A review whose five most frequent concepts are institutional — institutions, monitoring, planning, growth, statistics — and in which well-being appears only in sixth place with three mentions is an accurate description of how far the conversion of mining rent into development has got."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Le tableau de bord francophone était parsemé d'anglais non traduit — « SDG 1 · No Poverty — Sustaining Bien-être », « P1 · Macroeconomic stability », « Hydroelectric Strategy », « Electricity access improvement, 2020-2024 », « Energy SDG 7 », « Health SDG 3 » — et certains passages étaient dupliqués et tronqués (« …le château d'eau de l'Afrique de l'Ouest et la base hydroélectrique de la souveraineté énergétique de la Guinée . »).",
        en: "The French-language dashboard was littered with untranslated English — \"SDG 1 · No Poverty — Sustaining Bien-être\", \"P1 · Macroeconomic stability\", \"Hydroelectric Strategy\", \"Electricity access improvement, 2020–2024\", \"Energy SDG 7\", \"Health SDG 3\" — and several passages were duplicated and truncated."
      },
      resolution: {
        fr: "La Guinée a soumis en français : le français est la langue source de chaque chaîne de cette page, l'anglais en est la traduction. Les blocs dupliqués ont disparu avec les sections qui les portaient.",
        en: "Guinea submitted in French: French is the source language of every string on this page, English its translation. The duplicated blocks disappeared with the sections that carried them."
      } }
  ]
});
