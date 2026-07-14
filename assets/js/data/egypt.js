/* Egypt — VNR 2016 · 2018 · 2021 → 2026 (fourth review). Source factsheet authored in English.
   Fact-checked against data/factsheets.txt (lines 410–482), the Ministry of Planning, Economic
   Development and International Cooperation's FY2024/25 GDP release, OECD/AUC/ATAF Revenue
   Statistics in Africa 2024, and the Decent Life (Hayah Karima) programme documentation.
   See `factcheck` at the bottom — the old dashboard was cloned from a French template and
   carried recycled legends, a French axis label and several untraceable figures. */
window.VNR.register({
  slug: "egypt",
  iso: "EG",
  name: { en: "Egypt", fr: "Égypte" },
  region: "north",
  vnrPrev: 2021,
  vnrCycles: [2016, 2018, 2021, 2026],
  langs: ["EN", "AR"],
  sourceLang: "en",
  factsheetPdf: "factsheets/egypt.pdf",

  tagline: {
    en: "Sustained commitment to the 2030 Agenda through reform-led, private-sector growth.",
    fr: "Un engagement constant envers l'Agenda 2030, porté par une croissance réformatrice et tirée par le secteur privé."
  },

  themes: [
    { sdg: 1,
      title: { en: "Poverty Reduction & Equal Opportunity", fr: "Réduction de la pauvreté et égalité des chances" },
      text: {
        en: "Egypt reinforced its social protection architecture and promoted economic equality, expanding financial inclusion and opportunities especially for youth.",
        fr: "L'Égypte a renforcé son architecture de protection sociale et promu l'égalité économique, en élargissant l'inclusion financière et les perspectives offertes, en particulier aux jeunes."
      } },
    { sdg: 7,
      title: { en: "Green Energy & Digital Economy", fr: "Énergie verte et économie numérique" },
      text: {
        en: "Diversified growth across the digital economy, green energy, tourism and advanced manufacturing anchors a reform-oriented, resilient growth path.",
        fr: "Une croissance diversifiée — économie numérique, énergie verte, tourisme et industrie de pointe — ancre une trajectoire de croissance réformatrice et résiliente."
      } },
    { sdg: 8,
      title: { en: "Reform-Led Economic Resilience", fr: "Résilience économique portée par les réformes" },
      text: {
        en: "Private-sector-led, diversified growth lifted GDP to 4.4% in FY 2024/25 (from 2.4%), supported by fiscal and tax reforms that strengthened resource mobilisation.",
        fr: "Une croissance diversifiée, tirée par le secteur privé, a porté le PIB à 4,4 % pour l'exercice 2024-2025 (contre 2,4 %), soutenue par des réformes budgétaires et fiscales qui ont renforcé la mobilisation des ressources."
      } },
    { sdg: 9,
      title: { en: "Private Sector & Startups", fr: "Secteur privé et jeunes pousses" },
      text: {
        en: "SME support, financial inclusion and private investment expanded opportunity, with Egypt's startup ecosystem attracting over USD 2.3bn since 2020.",
        fr: "L'appui aux PME, l'inclusion financière et l'investissement privé ont élargi les perspectives, l'écosystème égyptien des jeunes pousses ayant attiré plus de 2,3 milliards de dollars depuis 2020."
      } },
    { sdg: 10,
      title: { en: "Spatial Development & Rural Poverty Reduction", fr: "Développement territorial et réduction de la pauvreté rurale" },
      text: {
        en: "Growth-pole approaches and the Hayah Kareema initiative reduce regional disparities by improving infrastructure and services in the poorest areas.",
        fr: "L'approche par pôles de croissance et l'initiative Hayah Kareema réduisent les disparités régionales en améliorant les infrastructures et les services dans les zones les plus pauvres."
      } },
    { sdg: 17,
      title: { en: "Aligned SDG Financing", fr: "Un financement aligné sur les ODD" },
      text: {
        en: "The Integrated National Financing Framework aligns financing flows with the SDGs, built on multi-stakeholder coordination and SDG localization.",
        fr: "Le Cadre national intégré de financement aligne les flux de financement sur les ODD, en s'appuyant sur une coordination multipartite et sur la territorialisation des ODD."
      } }
  ],

  continuity: [
    { prev: { en: "Economic Reform, Resilience & Leaving No One Behind", fr: "Réforme économique, résilience et « ne laisser personne de côté »" },
      status: "sustained",
      now: { en: "Fourth VNR — Accelerating Delivery", fr: "Quatrième RNV — accélérer la mise en œuvre" } },
    { prev: { en: "Economic stabilization & reform (COVID-resilient)", fr: "Stabilisation et réforme économiques (résilience face à la COVID-19)" },
      status: "evolved",
      now: { en: "Diversified, Private-Led Growth (GDP 4.4%)", fr: "Croissance diversifiée, tirée par le privé (PIB 4,4 %)" } },
    { prev: { en: "Social protection expansion", fr: "Extension de la protection sociale" },
      status: "evolved",
      now: { en: "Reinforced Social Protection & Equity", fr: "Protection sociale renforcée et équité" } },
    { prev: { en: "Infrastructure & Hayah Kareema", fr: "Infrastructures et Hayah Kareema" },
      status: "sustained",
      now: { en: "Spatial Equity & Growth Poles", fr: "Équité territoriale et pôles de croissance" } },
    { prev: { en: "SDG financing & coordination", fr: "Financement et coordination des ODD" },
      status: "evolved",
      now: { en: "INFF & SDG Localization (VLRs)", fr: "Cadre national intégré de financement et territorialisation des ODD (examens locaux volontaires)" } }
  ],

  concepts: {
    caption: {
      en: "Egypt's fourth review centres on reform-led growth, poverty reduction and human development.",
      fr: "Le quatrième examen de l'Égypte s'articule autour d'une croissance portée par les réformes, de la réduction de la pauvreté et du développement humain."
    },
    items: [
      { label: { en: "growth & reform", fr: "croissance et réforme" }, value: 19 },
      { label: { en: "climate & energy", fr: "climat et énergie" }, value: 12 },
      { label: { en: "human development", fr: "développement humain" }, value: 12 },
      { label: { en: "private investment", fr: "investissement privé" }, value: 12 },
      { label: { en: "financing", fr: "financement" }, value: 9 },
      { label: { en: "institutions", fr: "institutions" }, value: 9 },
      { label: { en: "partnerships", fr: "partenariats" }, value: 7 },
      { label: { en: "digital & green", fr: "numérique et vert" }, value: 6 },
      { label: { en: "infrastructure", fr: "infrastructures" }, value: 5 }
    ]
  },

  indicators: [
    { id: "gdp_growth", sdg: 8,
      label: { en: "Real GDP growth, FY2024/25", fr: "Croissance du PIB réel, exercice 2024-2025" },
      value: 4.4, unit: "%",
      note: { en: "Up from 2.4% in FY2023/24, the year of the exchange-rate and subsidy adjustment. Growth came mainly from tourism, non-oil manufacturing and ICT.",
              fr: "Contre 2,4 % en 2023-2024, l'exercice de l'ajustement du taux de change et des subventions. La croissance provient principalement du tourisme, de l'industrie hors hydrocarbures et des TIC." },
      source: "VNR 2026 · Ministry of Planning, Economic Development and International Cooperation, FY2024/25 national accounts release" },
    { id: "startup_funding", sdg: 9,
      label: { en: "Venture funding raised by Egyptian startups since 2020", fr: "Financements en capital-risque levés par les jeunes pousses égyptiennes depuis 2020" },
      value: 2.3, unit: "USD bn",
      note: { en: "The factsheet reports \"over USD 2.3bn\". The Ministry of Planning publicly cites USD 2.2bn for the same 2020–2025 window — roughly seven times the 2015–2019 total. Cumulative, not annual.",
              fr: "La fiche indique « plus de 2,3 milliards de dollars ». Le ministère de la Planification cite publiquement 2,2 milliards de dollars pour la même période 2020-2025, soit environ sept fois le total de 2015-2019. Il s'agit d'un cumul, non d'un flux annuel." },
      source: "VNR 2026 factsheet · Ministry of Planning, Economic Development and International Cooperation (October 2025)" },
    { id: "tax_gdp", sdg: 17,
      label: { en: "Tax revenue, % of GDP (2022, latest comparable year)", fr: "Recettes fiscales, en % du PIB (2022, dernier exercice comparable)" },
      value: 14.2, unit: "%",
      note: { en: "OECD definition, including social security contributions. Below the 16.0% average of the 36 African countries in the same dataset. Not the same as total government revenue.",
              fr: "Définition OCDE, cotisations sociales incluses. En deçà de la moyenne de 16,0 % des 36 pays africains du même jeu de données. À distinguer des recettes publiques totales." },
      source: "OECD/AUC/ATAF, Revenue Statistics in Africa 2024" },
    { id: "hayah_target", sdg: 10,
      label: { en: "Hayah Kareema target population", fr: "Population ciblée par Hayah Kareema" },
      value: 58, unit: "million people",
      note: { en: "The programme's design target — roughly 57% of Egyptians across some 4,500 villages. It is a target, not a count of people already served: phases 1–2 cover 1,500 villages.",
              fr: "Il s'agit de la cible de conception du programme — environ 57 % des Égyptiens, répartis dans quelque 4 500 villages. C'est un objectif, et non un décompte de bénéficiaires déjà servis : les phases 1 et 2 couvrent 1 500 villages." },
      source: "VNR 2026 · Decent Life (Hayah Karima) programme documentation · UN DESA Partnerships Platform" },
    { id: "benban", sdg: 7,
      label: { en: "Benban Solar Park installed capacity", fr: "Capacité installée du parc solaire de Benban" },
      value: 1.65, unit: "GW",
      note: { en: "Africa's largest solar park at commissioning, and the anchor asset of the NWFE (Nexus of Water, Food and Energy) platform.",
              fr: "Le plus grand parc solaire d'Afrique lors de sa mise en service, et l'actif d'ancrage de la plateforme NWFE (nexus eau-alimentation-énergie)." },
      source: "VNR 2026 · NWFE Programme" },
    { id: "renew_target", sdg: 7,
      label: { en: "Renewables targeted in the generation mix by 2030", fr: "Part des renouvelables visée dans le mix de production d'ici 2030" },
      value: 42, unit: "%",
      note: { en: "A target, not an achieved share. Egypt's current renewable share of generation remains well below it.",
              fr: "Il s'agit d'une cible, et non d'une part atteinte. La part actuelle des renouvelables dans la production égyptienne lui reste très inférieure." },
      source: "VNR 2026 · Egypt Integrated Sustainable Energy Strategy" }
  ],

  charts: [
    { id: "gdp", type: "line", sdg: 8,
      title: { en: "Real GDP growth, % per fiscal year", fr: "Croissance du PIB réel, en % par exercice budgétaire" },
      unit: "%",
      xLabel: { en: "Fiscal year", fr: "Exercice budgétaire" },
      series: [
        { key: "gdp", label: { en: "Real GDP growth", fr: "Croissance du PIB réel" },
          points: [{ x: "FY2019/20", y: 3.6 }, { x: "FY2021/22", y: 6.6 }, { x: "FY2022/23", y: 3.8 }, { x: "FY2023/24", y: 2.4 }, { x: "FY2024/25", y: 4.4 }] }
      ],
      insight: {
        en: "This is the review's headline, and it deserves to be read as a V, not as a straight line up. Egypt grew through the pandemic (3.6% in FY2019/20), rebounded to 6.6%, then fell to 2.4% in FY2023/24 — the cost of the exchange-rate float, subsidy reform and inflation shock. The 4.4% recorded in FY2024/25 is a genuine recovery, driven by tourism, non-oil manufacturing and ICT rather than by extraction, but it is still below the post-COVID rebound. The honest claim is that the reform adjustment has been absorbed, not that growth has been transformed.",
        fr: "C'est le chiffre phare de l'examen, et il doit se lire comme un V, non comme une ligne ascendante. L'Égypte a poursuivi sa croissance pendant la pandémie (3,6 % en 2019-2020), a rebondi à 6,6 %, puis est retombée à 2,4 % en 2023-2024 — le prix du flottement du taux de change, de la réforme des subventions et du choc inflationniste. Les 4,4 % de l'exercice 2024-2025 constituent une reprise réelle, portée par le tourisme, l'industrie hors hydrocarbures et les TIC plutôt que par l'extraction, mais elle demeure inférieure au rebond post-COVID. L'affirmation défendable est que l'ajustement lié aux réformes a été absorbé, non que la croissance a été transformée."
      },
      source: "VNR 2026 · Ministry of Planning, Economic Development and International Cooperation" },

    { id: "tax_trend", type: "line", sdg: 17,
      title: { en: "Tax revenue, % of GDP", fr: "Recettes fiscales, en % du PIB" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "tax", label: { en: "Tax revenue (OECD definition)", fr: "Recettes fiscales (définition OCDE)" },
          points: [{ x: "2013", y: 15.0 }, { x: "2021", y: 14.1 }, { x: "2022", y: 14.2 }] }
      ],
      insight: {
        en: "The one number that does not follow the reform narrative. Between 2013 and 2022 Egypt's tax-to-GDP ratio fell by 0.8 percentage points, from 15.0% to 14.2%, while the African average rose. A decade of growth, VAT digitisation and taxpayer registration has not yet widened the tax base — which is precisely why the INFF, and the SDG 17 theme, exist. Domestic resource mobilisation, not growth, is Egypt's binding constraint on SDG financing.",
        fr: "C'est le seul chiffre qui ne suit pas le récit des réformes. Entre 2013 et 2022, le taux de prélèvement obligatoire de l'Égypte a reculé de 0,8 point de pourcentage, de 15,0 % à 14,2 %, alors que la moyenne africaine progressait. Une décennie de croissance, de dématérialisation de la TVA et d'immatriculation des contribuables n'a pas encore élargi l'assiette fiscale — c'est précisément la raison d'être du Cadre national intégré de financement et du thème relatif à l'ODD 17. C'est la mobilisation des ressources intérieures, et non la croissance, qui contraint le financement des ODD en Égypte."
      },
      source: "OECD/AUC/ATAF, Revenue Statistics in Africa 2024" },

    { id: "tax_gap", type: "gap", sdg: 17,
      title: { en: "Tax revenue against the African average, % of GDP, 2022", fr: "Recettes fiscales rapportées à la moyenne africaine, en % du PIB, 2022" },
      unit: "%",
      items: [
        { label: { en: "Average, 36 African countries", fr: "Moyenne, 36 pays africains" }, value: 16.0, emphasis: false },
        { label: { en: "Egypt", fr: "Égypte" }, value: 14.2, emphasis: true }
      ],
      insight: {
        en: "Egypt is one of the largest economies on the continent and one of the most reform-intensive, yet it collects 1.8 points of GDP less in tax than the African average. The gap matters because every financing instrument the review names — the INFF, green bonds, blended finance — is designed to supplement domestic revenue, not to substitute for it.",
        fr: "L'Égypte est l'une des plus grandes économies du continent et l'une des plus engagées dans les réformes ; elle prélève pourtant 1,8 point de PIB de moins que la moyenne africaine. Cet écart est décisif, car tous les instruments de financement cités par l'examen — cadre intégré, obligations vertes, financement mixte — sont conçus pour compléter les recettes intérieures, non pour s'y substituer."
      },
      source: "OECD/AUC/ATAF, Revenue Statistics in Africa 2024" },

    { id: "hayah", type: "gap", sdg: 10,
      title: { en: "Hayah Kareema: villages targeted, by programme phase", fr: "Hayah Kareema : villages ciblés, par phase du programme" },
      unit: "villages",
      items: [
        { label: { en: "Full programme design", fr: "Programme complet, à terme" }, value: 4500, emphasis: false },
        { label: { en: "Phases 1–2 (from January 2021)", fr: "Phases 1 et 2 (à partir de janvier 2021)" }, value: 1500, emphasis: true },
        { label: { en: "Phase 1 (from January 2019)", fr: "Phase 1 (à partir de janvier 2019)" }, value: 375, emphasis: false }
      ],
      insight: {
        en: "The widely-quoted \"58 million Egyptians\" is the target population of the full programme — some 4,500 villages, about 57% of the country. The 1,500 villages contracted in phases 1 and 2 correspond to roughly a fifth of the population. Both facts are impressive and neither is the other: Hayah Kareema is one of the largest rural development programmes ever attempted on the continent, and it is still being built. Presenting the design target as a delivered result is the single most common error in reporting on it.",
        fr: "Les « 58 millions d'Égyptiens » si souvent cités correspondent à la population ciblée par le programme dans son ensemble — quelque 4 500 villages, soit environ 57 % du pays. Les 1 500 villages engagés au titre des phases 1 et 2 représentent à peu près un cinquième de la population. Ces deux faits sont remarquables et ne se confondent pas : Hayah Kareema est l'un des plus vastes programmes de développement rural jamais entrepris sur le continent, et il est toujours en cours de déploiement. Présenter la cible de conception comme un résultat acquis est l'erreur la plus fréquente dans les comptes rendus qui lui sont consacrés."
      },
      source: "VNR 2026 · Decent Life (Hayah Karima) programme documentation" }
  ],

  instruments: [
    { name: { en: "Vision Egypt 2030", fr: "Vision Égypte 2030" },
      kicker: { en: "fourth VNR — 2016, 2018, 2021, 2026", fr: "quatrième RNV — 2016, 2018, 2021, 2026" },
      text: {
        en: "Vision 2030 is the common frame for the SDGs, Agenda 2063 and the national Sustainable Development Strategy: a competitive and diversified economy, a knowledge-based innovation ecosystem, and sustainable environmental management. Egypt has now reported four times — more review cycles than any other country in this cohort — and the 2026 review is positioned as an acceleration review rather than a first accounting.",
        fr: "La Vision 2030 constitue le cadre commun aux ODD, à l'Agenda 2063 et à la Stratégie nationale de développement durable : une économie compétitive et diversifiée, un écosystème d'innovation fondé sur la connaissance et une gestion environnementale durable. L'Égypte a désormais présenté quatre rapports — davantage de cycles d'examen que tout autre pays de ce groupe — et l'examen de 2026 se veut un exercice d'accélération plutôt qu'un premier bilan."
      },
      source: "VNR 2026" },
    { name: { en: "Hayah Kareema (Decent Life)", fr: "Hayah Kareema (« Vie décente »)" },
      kicker: { en: "~4,500 villages targeted", fr: "environ 4 500 villages ciblés" },
      text: {
        en: "Egypt's flagship integrated rural development programme delivers housing, roads, water, sanitation, health, education and economic opportunity to the poorest rural communities, organised around growth poles. Its design target is some 58 million people across roughly 4,500 villages; 1,500 villages were brought into phases 1 and 2 from January 2021. It is the operational expression of the SDG 10 theme — spatial equity.",
        fr: "Le programme phare de développement rural intégré de l'Égypte fournit logement, routes, eau, assainissement, santé, éducation et perspectives économiques aux communautés rurales les plus pauvres, autour de pôles de croissance. Sa cible de conception est d'environ 58 millions de personnes dans quelque 4 500 villages ; 1 500 villages ont été intégrés aux phases 1 et 2 à partir de janvier 2021. Il constitue la traduction opérationnelle du thème relatif à l'ODD 10 : l'équité territoriale."
      },
      source: "VNR 2026 · Decent Life programme documentation" },
    { name: { en: "NWFE — Nexus of Water, Food and Energy", fr: "NWFE — nexus eau, alimentation et énergie" },
      kicker: { en: "Benban 1.65 GW", fr: "Benban, 1,65 GW" },
      text: {
        en: "NWFE is Egypt's country platform for climate and development investment, treating water, food and energy as a single problem: renewable power for desalination and drip irrigation, treated wastewater reuse, and solar pumping. Benban Solar Park (1.65 GW), Zafarana and the Gulf of Suez wind complexes are the anchor assets, and the strategy targets 42% renewables in the generation mix by 2030.",
        fr: "NWFE est la plateforme-pays de l'Égypte pour l'investissement climatique et de développement ; elle traite l'eau, l'alimentation et l'énergie comme un problème unique : électricité renouvelable pour le dessalement et l'irrigation goutte-à-goutte, réutilisation des eaux usées traitées, pompage solaire. Le parc solaire de Benban (1,65 GW), Zafarana et les complexes éoliens du golfe de Suez en sont les actifs d'ancrage, et la stratégie vise 42 % de renouvelables dans le mix de production d'ici 2030."
      },
      source: "VNR 2026 · NWFE Programme" },
    { name: { en: "Integrated National Financing Framework & Voluntary Local Reviews", fr: "Cadre national intégré de financement et examens locaux volontaires" },
      kicker: { en: "three financing pillars", fr: "trois piliers de financement" },
      text: {
        en: "The INFF aligns financing flows with SDG investment across domestic resource mobilisation (tax reform, VAT digitisation), private and innovative finance (green bonds, public-private partnerships), and international partnerships (climate finance, development banks). Voluntary Local Reviews cascade the framework to governorate and city level, a practice in which Egypt is among the most active on the continent.",
        fr: "Le Cadre national intégré de financement aligne les flux financiers sur l'investissement dans les ODD selon trois axes : mobilisation des ressources intérieures (réforme fiscale, dématérialisation de la TVA), financement privé et innovant (obligations vertes, partenariats public-privé) et partenariats internationaux (financement climatique, banques de développement). Les examens locaux volontaires déclinent ce cadre à l'échelle des gouvernorats et des villes, une pratique dans laquelle l'Égypte figure parmi les plus actives du continent."
      },
      source: "VNR 2026" },
    { name: { en: "State Ownership Policy", fr: "Politique de l'actionnariat public" },
      kicker: { en: "state as regulator", fr: "l'État régulateur" },
      text: {
        en: "The State Ownership Policy commits the state to withdrawing from commercial sectors and repositioning itself as regulator and strategic investor, so that private enterprise can lead. SME facilitation and startup accelerators are its instruments; the USD 2.3bn raised by Egyptian startups since 2020 is the evidence the review offers for it.",
        fr: "La Politique de l'actionnariat public engage l'État à se retirer des secteurs marchands et à se repositionner comme régulateur et investisseur stratégique, afin que l'entreprise privée puisse jouer le premier rôle. L'appui aux PME et les accélérateurs de jeunes pousses en sont les instruments ; les 2,3 milliards de dollars levés par les jeunes pousses égyptiennes depuis 2020 constituent la preuve avancée par l'examen."
      },
      source: "VNR 2026" },
    { name: { en: "Takaful & Karama", fr: "Takaful et Karama" },
      kicker: { en: "cash transfers", fr: "transferts monétaires" },
      text: {
        en: "Takaful (\"solidarity\") provides conditional cash transfers to families that keep children in school and in health care; Karama (\"dignity\") provides unconditional support to older persons and people with disabilities. Together they are the operational core of the SDG 1 theme and of Egypt's leave-no-one-behind commitment.",
        fr: "Takaful (« solidarité ») verse des transferts monétaires conditionnels aux familles qui maintiennent leurs enfants scolarisés et suivis médicalement ; Karama (« dignité ») apporte un soutien inconditionnel aux personnes âgées et aux personnes handicapées. Ensemble, ils constituent le cœur opérationnel du thème relatif à l'ODD 1 et de l'engagement égyptien à ne laisser personne de côté."
      },
      source: "VNR 2026" }
  ],

  factcheck: [
    { severity: "mislabel",
      issue: {
        en: "The English Egypt dashboard carried the French x-axis label « Année » on five charts, and its chart legends were recycled from the French template they were cloned from. The GDP-growth chart was legended \"Renewable Energy (%)\" and \"Electricity Access (%)\"; the panel titled \"Electricity access and renewable capacity\" actually plotted government revenue and was legended \"GDP growth\"; the panel titled \"Inflation and fiscal reform\" plotted debt-service data and was legended \"GDP Growth (%)\" and \"Inflation (%)\"; the water-stress sparkline was legended \"Investment Priorities (rank)\"; and the SDG 9 startup donut was legended \"FDI Inflows (USD B)\" over a tooltip about informal settlements.",
        fr: "Le tableau de bord anglais de l'Égypte portait l'étiquette d'axe française « Année » sur cinq graphiques, et ses légendes étaient héritées du gabarit français dont il avait été cloné. Le graphique de croissance du PIB était légendé « Renewable Energy (%) » et « Electricity Access (%) » ; le panneau intitulé « Electricity access and renewable capacity » traçait en réalité les recettes publiques et était légendé « GDP growth » ; le panneau intitulé « Inflation and fiscal reform » traçait le service de la dette sous les légendes « GDP Growth (%) » et « Inflation (%) » ; la courbe du stress hydrique était légendée « Investment Priorities (rank) » ; et l'anneau consacré aux jeunes pousses (ODD 9) était légendé « FDI Inflows (USD B) » au-dessus d'une infobulle relative aux établissements informels."
      },
      resolution: {
        en: "Not one legend on the old dashboard described the data beneath it. All labels are now generated from this bilingual data layer, so a chart cannot display a language, a legend or a unit that does not match its own series.",
        fr: "Aucune légende de l'ancien tableau de bord ne décrivait les données qu'elle surmontait. Toutes les étiquettes sont désormais générées depuis cette couche de données bilingue : un graphique ne peut plus afficher une langue, une légende ou une unité qui ne correspond pas à ses propres séries."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard headlined \"Tax Revenue / GDP — 15.1%, up from 13.5% in FY2020/21\", while the chart behind that very tile plotted \"total government revenue, 17.7% of GDP\" and \"internally-raised revenue, 10.6% of GDP\". Three different revenue figures, no definitions, all presented as the same thing.",
        fr: "Le tableau de bord affichait « Recettes fiscales / PIB — 15,1 %, contre 13,5 % en 2020-2021 », tandis que le graphique associé à cette même tuile traçait des « recettes publiques totales à 17,7 % du PIB » et des « recettes levées en interne à 10,6 % du PIB ». Trois chiffres de recettes différents, aucune définition, tous présentés comme équivalents."
      },
      resolution: {
        en: "None of the three could be traced. The defensible figure is OECD/AUC/ATAF Revenue Statistics in Africa 2024: Egypt's tax-to-GDP ratio was 14.2% in 2022 and 14.1% in 2021, against an African average of 16.0%; Egypt's Ministry of Finance reports about 12.6% for FY2024/25 on its narrower budget-sector definition, with a stated target of 16%. The dashboard's 15.1% and 13.5% have been dropped; 14.2% is now shown with its definition stated.",
        fr: "Aucun des trois n'a pu être retracé. Le chiffre défendable provient des Statistiques des recettes publiques en Afrique 2024 (OCDE/CUA/ATAF) : le taux de prélèvement obligatoire de l'Égypte s'établissait à 14,2 % en 2022 et à 14,1 % en 2021, contre une moyenne africaine de 16,0 % ; le ministère égyptien des Finances fait état d'environ 12,6 % pour l'exercice 2024-2025 selon sa définition budgétaire plus étroite, avec une cible affichée de 16 %. Les chiffres de 15,1 % et 13,5 % ont été retirés ; 14,2 % est désormais présenté, définition à l'appui."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard stated, in six places, that Hayah Kareema \"reached 58 million Egyptians across 1,500 villages\".",
        fr: "Le tableau de bord affirmait, en six endroits, que Hayah Kareema « a touché 58 millions d'Égyptiens dans 1 500 villages »."
      },
      resolution: {
        en: "The two numbers belong to different things. 58 million (about 57% of the population) is the design target of the full programme, covering roughly 4,500 villages. The 1,500-village figure is the scope of phases 1–2 from January 2021, corresponding to about 20% of the population; phase 1 covered 375 villages. The figure is retained as a target and relabelled, and the phase structure is now charted.",
        fr: "Ces deux chiffres ne renvoient pas à la même réalité. Les 58 millions (environ 57 % de la population) constituent la cible de conception du programme complet, portant sur quelque 4 500 villages. Les 1 500 villages correspondent au périmètre des phases 1 et 2 depuis janvier 2021, soit environ 20 % de la population ; la phase 1 portait sur 375 villages. Le chiffre est conservé en tant qu'objectif, réétiqueté comme tel, et la structure par phases est désormais représentée graphiquement."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard footer cited \"Republic of Egypt, Second Voluntary National Review 2026 (June 2026); First Voluntary National Review 2020\", and one water chart cited \"VNR 2020, p.85–86\" — while the same dashboard's header and its Joint Implementation tab correctly described a fourth VNR (2016, 2018, 2021, 2026).",
        fr: "Le pied de page du tableau de bord citait « République d'Égypte, deuxième rapport national volontaire 2026 (juin 2026) ; premier rapport national volontaire 2020 », et un graphique sur l'eau renvoyait au « RNV 2020, p. 85-86 » — alors que l'en-tête du même tableau de bord et son onglet « Mise en œuvre conjointe » décrivaient correctement un quatrième RNV (2016, 2018, 2021, 2026)."
      },
      resolution: {
        en: "Egypt has never submitted a 2020 VNR. The 2026 review is its fourth, following 2016, 2018 and 2021, exactly as the factsheet states. The footer and the phantom citation were template residue from another country's file and have been removed.",
        fr: "L'Égypte n'a jamais présenté de RNV en 2020. L'examen de 2026 est le quatrième, après ceux de 2016, 2018 et 2021, conformément à la fiche. Le pied de page et la citation fantôme provenaient du gabarit d'un autre pays et ont été supprimés."
      } },
    { severity: "unverified",
      issue: {
        en: "The dashboard built an entire tab around a headline \"Water Stress — 112.9%\", with a trajectory chart reading 107% in 2015 rising to 112.9% in 2023.",
        fr: "Le tableau de bord consacrait un onglet entier au chiffre phare « Stress hydrique — 112,9 % », assorti d'un graphique de trajectoire allant de 107 % en 2015 à 112,9 % en 2023."
      },
      resolution: {
        en: "The direction of travel is not in doubt — Egypt withdraws more freshwater than its renewable resources replenish, and the Nile supplies about 97% of them — but the precise 112.9% could not be matched to FAO AQUASTAT or to UN SDG indicator 6.4.2 for any stated year, the two plotted points did not sit on their own line, and Egypt's factsheet does not name water as one of its six themes. The number has been dropped from the headline indicators rather than dressed in a citation it does not have.",
        fr: "Le sens de l'évolution ne fait aucun doute — l'Égypte prélève plus d'eau douce que ses ressources renouvelables n'en reconstituent, et le Nil en fournit environ 97 % — mais la valeur précise de 112,9 % n'a pu être rapprochée ni d'AQUASTAT (FAO) ni de l'indicateur ODD 6.4.2 pour une année déterminée, les deux points tracés ne se trouvaient pas sur leur propre courbe, et la fiche égyptienne ne retient pas l'eau parmi ses six thèmes. Le chiffre a été retiré des indicateurs de tête plutôt que d'être habillé d'une citation dont il ne dispose pas."
      } },
    { severity: "unverified",
      issue: {
        en: "The financing tab announced \"Total $1,507,171,475\" of partner commitments through 2035, on a bar chart whose own caption conceded that \"bar lengths show rank order rather than dollar amounts\". The same chart appeared twice with two different sector lists (private investment / green energy / energy / health / spatial equity / education / social protection in one; decent jobs / industrialization / energy / health / hunger / education / poverty in the other).",
        fr: "L'onglet « Financement » annonçait un « total de 1 507 171 475 dollars » d'engagements des partenaires à l'horizon 2035, sur un graphique dont la légende reconnaissait elle-même que « la longueur des barres indique un rang et non un montant ». Le même graphique figurait deux fois avec deux listes sectorielles différentes (investissement privé / énergie verte / énergie / santé / équité territoriale / éducation / protection sociale d'une part ; emplois décents / industrialisation / énergie / santé / faim / éducation / pauvreté d'autre part)."
      },
      resolution: {
        en: "A dollar total quoted to the unit, attached to bars that plot no dollars and to two mutually inconsistent sector rankings, is not a finding. Both charts have been dropped. Egypt's financing story is told instead through the tax-to-GDP series, which is sourced and comparable.",
        fr: "Un total libellé au dollar près, adossé à des barres qui ne représentent aucun dollar et à deux classements sectoriels mutuellement incompatibles, ne constitue pas un résultat. Les deux graphiques ont été supprimés. Le récit financier de l'Égypte repose désormais sur la série du taux de prélèvement obligatoire, qui est sourcée et comparable."
      } },
    { severity: "mislabel",
      issue: {
        en: "The Focus Goals tab announced \"the five Sustainable Development Goals under review\" with buttons keyed s6, s7, s9, s11 and s17 that in fact rendered SDGs 1, 7, 8, 9 and 10. The SDG 1 panel was sourced to water indicators 6.1.1 and 6.2.1; the SDG 9 startup panel was sourced to indicator 11.1.1 (informal settlements). SDG 17 — one of the six themes on the factsheet — had no panel at all.",
        fr: "L'onglet « Objectifs prioritaires » annonçait « les cinq objectifs de développement durable examinés » avec des boutons identifiés s6, s7, s9, s11 et s17 qui affichaient en réalité les ODD 1, 7, 8, 9 et 10. Le panneau ODD 1 était sourcé sur les indicateurs relatifs à l'eau 6.1.1 et 6.2.1 ; le panneau ODD 9 sur les jeunes pousses était sourcé sur l'indicateur 11.1.1 (établissements informels). L'ODD 17 — l'un des six thèmes de la fiche — ne disposait d'aucun panneau."
      },
      resolution: {
        en: "The goal keys were never renumbered when the template was cloned, so every panel's SDG citation belonged to a different country's chart. Goals and indicator citations are now bound to the data: the six themes are SDGs 1, 7, 8, 9, 10 and 17, exactly as the factsheet states.",
        fr: "Les identifiants d'objectifs n'ont jamais été renumérotés lors du clonage du gabarit : la citation d'indicateur de chaque panneau appartenait donc au graphique d'un autre pays. Les objectifs et les citations d'indicateurs sont désormais liés aux données : les six thèmes correspondent aux ODD 1, 7, 8, 9, 10 et 17, exactement comme l'indique la fiche."
      } },
    { severity: "corrected",
      issue: {
        en: "The startup figure — \"over USD 2.3bn since 2020\" on the factsheet — was carried on the dashboard as a headline with no window, no base and, in one panel, a percentage axis: the social-protection chart's y-axis ran 0–80% while its final data point was labelled \"58M\", putting a count of people and a percentage on the same scale.",
        fr: "Le chiffre relatif aux jeunes pousses — « plus de 2,3 milliards de dollars depuis 2020 » sur la fiche — figurait au tableau de bord comme chiffre phare, sans période, sans base et, dans un panneau, sur un axe en pourcentage : l'axe des ordonnées du graphique de protection sociale allait de 0 à 80 % alors que son dernier point était libellé « 58M », plaçant un effectif de personnes et un pourcentage sur la même échelle."
      },
      resolution: {
        en: "The USD 2.3bn is retained as the factsheet's own figure and corroborated in the same order of magnitude by the Ministry of Planning, which publicly cites USD 2.2bn raised between 2020 and 2025 — about seven times the 2015–2019 total. It is now labelled as a cumulative five-year figure, and no chart in this file carries two units.",
        fr: "Les 2,3 milliards de dollars sont conservés comme chiffre propre à la fiche et corroborés, dans le même ordre de grandeur, par le ministère de la Planification, qui cite publiquement 2,2 milliards de dollars levés entre 2020 et 2025, soit environ sept fois le total de 2015-2019. Le chiffre est désormais présenté comme un cumul sur cinq ans, et aucun graphique de ce fichier ne comporte deux unités."
      } }
  ]
});
