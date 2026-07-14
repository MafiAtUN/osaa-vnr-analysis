/* Rwanda — VNR 2023 → 2026. Source factsheet authored in English (factsheets.txt, lines 1020–1092);
   French is a translation. Fact-checked against the old "Rwanda Dashboard.html", NISR EICV4/EICV5/EICV7
   (poverty profile and utilities reports, April 2025), NISR formal external trade in goods (Q4 2024),
   the Rwanda Energy Group access series and World Bank national-accounts data. See `factcheck` at the bottom.
   Note: every line chart in the old dashboard plotted points that did not match its own axis — see the
   first fact-check entry. All series below are rebuilt from the underlying data. */
window.VNR.register({
  slug: "rwanda",
  iso: "RW",
  name: { en: "Rwanda", fr: "Rwanda" },
  region: "east",
  vnrPrev: 2023,
  vnrCycles: [2023, 2026],
  langs: ["EN", "FR"],
  sourceLang: "en",
  factsheetPdf: "factsheets/rwanda.pdf",

  tagline: {
    en: "Strong macroeconomic and social progress under the National Strategy for Transformation and Vision 2050.",
    fr: "Des progrès macroéconomiques et sociaux marqués, portés par la Stratégie nationale de transformation et la Vision 2050."
  },

  themes: [
    { sdg: 1,
      title: { en: "Broad-Based Growth & Poverty Decline", fr: "Croissance inclusive et recul de la pauvreté" },
      text: {
        en: "GDP grew about 9% a year (2021–2025), poverty fell from 39.8% in 2017 to 27.4% in 2024, and life expectancy reached 70.2 years.",
        fr: "Le PIB a progressé d'environ 9 % par an (2021-2025), la pauvreté est passée de 39,8 % en 2017 à 27,4 % en 2024, et l'espérance de vie a atteint 70,2 ans."
      } },
    { sdg: 6,
      title: { en: "Near-Universal Water Access", fr: "Un accès à l'eau quasi universel" },
      text: {
        en: "Improved water access rose from 22.6% of households in 2005 to 89.7% in 2024 and sanitation to 72.4%, though an urban–rural gap persists.",
        fr: "L'accès à l'eau améliorée est passé de 22,6 % des ménages en 2005 à 89,7 % en 2024, et l'assainissement à 72,4 %, même si un écart entre villes et campagnes persiste."
      } },
    { sdg: 7,
      title: { en: "Expanding Clean Electricity", fr: "Essor de l'électricité propre" },
      text: {
        en: "Electricity access jumped from 21.5% in 2014 to 84.6% in 2025 with renewables at 52% of generation, though ~75% of households still use firewood.",
        fr: "L'accès à l'électricité est passé de 21,5 % en 2014 à 84,6 % en 2025, avec 52 % de renouvelables dans la production, même si environ 75 % des ménages cuisinent encore au bois de feu."
      } },
    { sdg: 9,
      title: { en: "Made in Rwanda & Regional Hub", fr: "« Made in Rwanda » et pôle régional" },
      text: {
        en: "Industrial growth of ~10% lifted exports to USD 5.7bn and the export-to-import ratio to 75%, with AfCFTA integration and Bugesera airport by 2027.",
        fr: "Une croissance industrielle d'environ 10 % a porté les exportations à 5,7 milliards de dollars et le ratio exportations/importations à 75 %, avec l'intégration à la ZLECAf et l'aéroport de Bugesera d'ici à 2027."
      } },
    { sdg: 11,
      title: { en: "Climate-Resilient Urbanisation", fr: "Urbanisation résiliente au changement climatique" },
      text: {
        en: "The urban population rose from 18.4% to 28.4% since 2016/17, with 68% in planned settlements and reforms promoting scalable, affordable housing.",
        fr: "La population urbaine est passée de 18,4 % à 28,4 % depuis 2016-2017, dont 68 % dans des quartiers planifiés, avec des réformes favorisant un logement abordable et déployable à grande échelle."
      } },
    { sdg: 17,
      title: { en: "Catalytic SDG Financing", fr: "Un financement catalytique des ODD" },
      text: {
        en: "Guided by the INFF, Rwanda leverages public funds via PPPs and blended finance to close a ~9%-of-GDP (USD 1bn) annual SDG financing gap.",
        fr: "Guidé par le CNIF, le Rwanda mobilise les fonds publics par des partenariats public-privé et la finance mixte afin de combler un déficit annuel de financement des ODD d'environ 9 % du PIB (1 milliard de dollars)."
      } }
  ],

  continuity: [
    { prev: { en: "COVID-19 Recovery & Building Better (2023)", fr: "Relance post-COVID-19 et reconstruction en mieux (2023)" },
      status: "sustained",
      now: { en: "Accelerated SDG Delivery (NST2, Vision 2050)", fr: "Mise en œuvre accélérée des ODD (NST2, Vision 2050)" } },
    { prev: { en: "Economic Rebound", fr: "Rebond économique" },
      status: "evolved",
      now: { en: "9% Growth & Poverty Down to 27.4%", fr: "9 % de croissance et pauvreté ramenée à 27,4 %" } },
    { prev: { en: "Restoring Basic Services", fr: "Rétablissement des services de base" },
      status: "evolved",
      now: { en: "Near-Universal Water & 84.6% Power", fr: "Eau quasi universelle et 84,6 % d'accès à l'électricité" } },
    { prev: { en: "Industrial & Digital Foundations", fr: "Fondations industrielles et numériques" },
      status: "sustained",
      now: { en: "Made in Rwanda & AfCFTA Hub", fr: "« Made in Rwanda » et pôle ZLECAf" } },
    { prev: { en: "Development Partnerships", fr: "Partenariats de développement" },
      status: "evolved",
      now: { en: "Catalytic Financing via INFF", fr: "Financement catalytique par le CNIF" } }
  ],

  concepts: {
    caption: {
      en: "Rwanda's review centres on broad-based growth, near-universal services and catalytic financing under Vision 2050.",
      fr: "La revue du Rwanda s'articule autour d'une croissance inclusive, de services quasi universels et d'un financement catalytique dans le cadre de la Vision 2050."
    },
    items: [
      { label: { en: "financing", fr: "financement" }, value: 14 },
      { label: { en: "clean energy & water", fr: "énergie propre et eau" }, value: 12 },
      { label: { en: "human capital", fr: "capital humain" }, value: 7 },
      { label: { en: "industry & exports", fr: "industrie et exportations" }, value: 7 },
      { label: { en: "growth", fr: "croissance" }, value: 6 },
      { label: { en: "partnerships", fr: "partenariats" }, value: 6 },
      { label: { en: "digital economy", fr: "économie numérique" }, value: 5 },
      { label: { en: "infrastructure", fr: "infrastructures" }, value: 5 },
      { label: { en: "innovation", fr: "innovation" }, value: 5 }
    ]
  },

  indicators: [
    { id: "poverty", sdg: 1,
      label: { en: "Population below the national poverty line", fr: "Population sous le seuil national de pauvreté" },
      value: 27.4, unit: "%",
      note: { en: "Down from 39.8% in 2016/17 — about 1.5 million people lifted out of poverty. Extreme poverty fell from 11.3% to 5.4% over the same period.",
              fr: "Contre 39,8 % en 2016-2017, soit environ 1,5 million de personnes sorties de la pauvreté. L'extrême pauvreté est passée de 11,3 % à 5,4 % sur la même période." },
      source: "VNR 2026 factsheet · NISR, EICV7 Poverty Profile 2023/24 (April 2025) · SDG indicator 1.2.1" },
    { id: "gdp_growth", sdg: 1,
      label: { en: "Average annual GDP growth, 2021–2025", fr: "Croissance annuelle moyenne du PIB, 2021-2025" },
      value: 9, unit: "% a year",
      note: { en: "Corroborated by the national accounts: 10.9% (2021), 8.2% (2022), 8.2% (2023), 8.9% (2024) — among the fastest sustained growth rates in Africa.",
              fr: "Corroborée par les comptes nationaux : 10,9 % (2021), 8,2 % (2022), 8,2 % (2023), 8,9 % (2024) — parmi les rythmes de croissance soutenue les plus élevés d'Afrique." },
      source: "VNR 2026 factsheet · NISR national accounts · World Bank, Rwanda Economic Update (April 2025)" },
    { id: "elec_access", sdg: 7,
      label: { en: "Electricity access, any source (2025)", fr: "Accès à l'électricité, toutes sources (2025)" },
      value: 84.6, unit: "% of households",
      note: { en: "59.6% connected to the national grid plus 25.0% served by off-grid solar and mini-grids. This is the connections-based measure, not the household-survey measure (72% in 2023/24).",
              fr: "59,6 % de ménages raccordés au réseau national et 25,0 % desservis par le solaire hors réseau et les mini-réseaux. Il s'agit de la mesure fondée sur les raccordements, et non de celle issue des enquêtes auprès des ménages (72 % en 2023-2024)." },
      source: "VNR 2026 factsheet · Rwanda Energy Group · SDG indicator 7.1.1" },
    { id: "firewood", sdg: 7,
      label: { en: "Households still cooking with firewood", fr: "Ménages cuisinant encore au bois de feu" },
      value: 75, unit: "% of households",
      note: { en: "The counterweight to the electricity story, and stated in the review itself: access to electric light is not the same as an energy transition.",
              fr: "Le contrepoids du récit électrique, énoncé par la revue elle-même : accéder à l'éclairage électrique n'équivaut pas à une transition énergétique." },
      source: "VNR 2026 factsheet · SDG indicator 7.1.2" },
    { id: "water_improved", sdg: 6,
      label: { en: "Households using an improved drinking-water source", fr: "Ménages utilisant une source d'eau potable améliorée" },
      value: 89.7, unit: "% of households",
      note: { en: "Up from 87.4% in 2016/17 (EICV5). Kigali City reaches 98%; Western Province, the lowest, slipped from 87% to 85%.",
              fr: "Contre 87,4 % en 2016-2017 (EICV5). La ville de Kigali atteint 98 % ; la Province de l'Ouest, la plus faible, est passée de 87 % à 85 %." },
      source: "NISR, EICV7 Utilities & Amenities 2023/24 · VNR 2026 · SDG indicator 6.1.1" },
    { id: "water_safe", sdg: 6,
      label: { en: "Safely managed drinking water", fr: "Eau potable gérée en toute sécurité" },
      value: 53.4, unit: "%",
      note: { en: "Up from 47.8% in 2019. The gap between this and the 89.7% improved-source figure is the distance still to travel — the two are constantly confused.",
              fr: "Contre 47,8 % en 2019. L'écart avec les 89,7 % de sources améliorées mesure le chemin restant à parcourir — les deux indicateurs sont sans cesse confondus." },
      source: "VNR 2026 · SDG indicator 6.1.1 (safely managed)" },
    { id: "exports", sdg: 9,
      label: { en: "Exports of goods and services", fr: "Exportations de biens et de services" },
      value: 5.7, unit: "USD bn",
      note: { en: "With an export-to-import ratio of 75%. This is the goods-and-services measure: NISR records merchandise exports alone at USD 3.16bn against USD 6.88bn of merchandise imports in 2024.",
              fr: "Avec un ratio exportations/importations de 75 %. Il s'agit de la mesure biens et services : le NISR ne recense que 3,16 milliards de dollars d'exportations de marchandises, contre 6,88 milliards d'importations en 2024." },
      source: "VNR 2026 factsheet · NISR, Formal External Trade in Goods, Q4 2024" },
    { id: "financing_gap", sdg: 17,
      label: { en: "Annual SDG financing gap", fr: "Déficit annuel de financement des ODD" },
      value: 9, unit: "% of GDP",
      note: { en: "About USD 1bn a year. Set against tax revenue of 14.9% of GDP, the gap is equivalent to some 60% of everything the state currently collects in tax.",
              fr: "Soit environ 1 milliard de dollars par an. Rapporté à des recettes fiscales de 14,9 % du PIB, ce déficit équivaut à quelque 60 % de la totalité de l'impôt actuellement collecté par l'État." },
      source: "VNR 2026 factsheet · INFF (2021)" }
  ],

  charts: [
    { id: "poverty", type: "line", sdg: 1,
      title: { en: "Poverty and extreme poverty, 2016/17 → 2023/24", fr: "Pauvreté et extrême pauvreté, 2016-2017 → 2023-2024" },
      unit: "%",
      xLabel: { en: "Survey period", fr: "Période d'enquête" },
      series: [
        { key: "poverty", label: { en: "Below the national poverty line", fr: "Sous le seuil national de pauvreté" },
          points: [{ x: "2016/17", y: 39.8 }, { x: "2023/24", y: 27.4 }] },
        { key: "extreme", label: { en: "Below the extreme poverty line", fr: "Sous le seuil d'extrême pauvreté" },
          points: [{ x: "2016/17", y: 11.3 }, { x: "2023/24", y: 5.4 }] }
      ],
      insight: {
        en: "A 12.4-point fall in poverty and a halving of extreme poverty in seven years — roughly 1.5 million people. One caveat has to travel with the number: 39.8% is not the figure published in 2017. EICV7 revised the poverty line, and 39.8% is what 2016/17 would have been on the new basis; the rate published at the time was 38.2%. The fall is real and is measured consistently at both ends, but quoting 27.4% against any pre-2024 publication would overstate it.",
        fr: "Un recul de 12,4 points de la pauvreté et une extrême pauvreté divisée par deux en sept ans, soit environ 1,5 million de personnes. Une réserve doit accompagner ce chiffre : 39,8 % n'est pas la valeur publiée en 2017. L'EICV7 a révisé le seuil de pauvreté, et 39,8 % correspond à ce qu'aurait été 2016-2017 sur la nouvelle base ; le taux publié à l'époque était de 38,2 %. La baisse est réelle et mesurée de façon homogène aux deux bornes, mais rapporter 27,4 % à une publication antérieure à 2024 en exagérerait l'ampleur."
      },
      source: "NISR, EICV7 Poverty Profile 2023/24 (April 2025) · VNR 2026 factsheet · SDG indicator 1.2.1" },

    { id: "electricity", type: "line", sdg: 7,
      title: { en: "Electricity in the home, household surveys, 2013/14 → 2023/24",
               fr: "L'électricité au foyer, enquêtes auprès des ménages, 2013-2014 → 2023-2024" },
      unit: "% of households",
      xLabel: { en: "Survey period", fr: "Période d'enquête" },
      series: [
        { key: "eicv", label: { en: "Households using electricity for lighting (EICV)", fr: "Ménages utilisant l'électricité pour l'éclairage (EICV)" },
          points: [{ x: "2013/14", y: 19.8 }, { x: "2016/17", y: 34.0 }, { x: "2023/24", y: 72.0 }] }
      ],
      insight: {
        en: "One consistent survey series, from one source, and it is remarkable on its own terms: a country went from one household in five to nearly three in four in a decade. The headline 84.6% for 2025 is deliberately not on this line. That figure is the Rwanda Energy Group's connections-based measure (59.6% grid + 25.0% off-grid); the old dashboard joined it to the survey series and produced an apparent 12.6-point leap in a single year that is a change of instrument, not of coverage. Both numbers are shown on this page — neither is plotted as the continuation of the other.",
        fr: "Une série d'enquête homogène, issue d'une source unique, et remarquable en soi : le pays est passé d'un ménage sur cinq à près de trois sur quatre en une décennie. Les 84,6 % annoncés pour 2025 ne figurent délibérément pas sur cette courbe. Ce chiffre correspond à la mesure fondée sur les raccordements du Rwanda Energy Group (59,6 % de réseau et 25,0 % de hors-réseau) ; l'ancien tableau de bord le raccordait à la série d'enquête, produisant un bond apparent de 12,6 points en une seule année qui traduit un changement d'instrument, non de couverture. Les deux chiffres figurent sur cette page — aucun n'est tracé comme le prolongement de l'autre."
      },
      source: "NISR, EICV4 / EICV5 / EICV7 (electricity for lighting) · SDG indicator 7.1.1" },

    { id: "energy_ladder", type: "gap", sdg: 7,
      title: { en: "Electrified, but not yet cooking clean, 2025", fr: "Électrifié, mais pas encore une cuisson propre, 2025" },
      unit: "% of households",
      items: [
        { label: { en: "Electricity access, any source", fr: "Accès à l'électricité, toutes sources" }, value: 84.6, emphasis: false },
        { label: { en: "Still cooking with firewood", fr: "Cuisinent encore au bois de feu" }, value: 75, emphasis: true },
        { label: { en: "Connected to the national grid", fr: "Raccordés au réseau national" }, value: 59.6, emphasis: false },
        { label: { en: "Served by off-grid solar or mini-grids", fr: "Desservis par le solaire hors réseau ou des mini-réseaux" }, value: 25.0, emphasis: false }
      ],
      insight: {
        en: "Rwanda's electrification is the fastest in the cohort and roughly a third of it is off-grid — solar home systems and mini-grids doing work the grid has not reached. But the review sets its own limit on the story: about three households in four still cook with firewood. Electric light and clean energy are not the same achievement, and 84.6% describes the first, not the second. The access figure also hides geography — 88.1% urban against 65.3% rural, and 91.7% in Kigali City against 63.7% in the Southern Province.",
        fr: "L'électrification du Rwanda est la plus rapide de la cohorte et près d'un tiers de celle-ci passe par le hors-réseau : kits solaires domestiques et mini-réseaux desservent ce que le réseau n'a pas atteint. Mais la revue pose elle-même la limite du récit : environ trois ménages sur quatre cuisinent encore au bois de feu. L'éclairage électrique et l'énergie propre ne sont pas la même conquête, et 84,6 % décrit la première, non la seconde. Ce chiffre d'accès masque aussi une géographie : 88,1 % en ville contre 65,3 % en zone rurale, et 91,7 % à Kigali contre 63,7 % dans la Province du Sud."
      },
      source: "VNR 2026 factsheet · Rwanda Energy Group · SDG indicators 7.1.1 & 7.1.2" },

    { id: "water_ladder", type: "gap", sdg: 6,
      title: { en: "The water ladder: access is near-universal, safety is not, 2024",
               fr: "L'échelle de l'eau : un accès quasi universel, une sécurité qui ne l'est pas, 2024" },
      unit: "%",
      items: [
        { label: { en: "Improved drinking-water source", fr: "Source d'eau potable améliorée" }, value: 89.7, emphasis: false },
        { label: { en: "Improved sanitation, not shared", fr: "Assainissement amélioré, non partagé" }, value: 72.4, emphasis: false },
        { label: { en: "Safely managed sanitation", fr: "Assainissement géré en toute sécurité" }, value: 64.3, emphasis: false },
        { label: { en: "Safely managed drinking water", fr: "Eau potable gérée en toute sécurité" }, value: 53.4, emphasis: true }
      ],
      insight: {
        en: "\"Near-universal water access\" is true and incomplete. Nine households in ten use an improved source; barely five in ten have water that is safely managed — available when needed, on premises and free from contamination. The 36-point drop between the two rungs is Rwanda's real SDG 6 agenda, and it is invisible whenever the 89.7% figure travels alone. Note also the inversion: safely managed sanitation (64.3%) is ahead of safely managed water (53.4%), which is unusual and makes water treatment and distribution, not toilets, the binding constraint.",
        fr: "« Un accès à l'eau quasi universel » : c'est vrai et incomplet. Neuf ménages sur dix utilisent une source améliorée ; à peine cinq sur dix disposent d'une eau gérée en toute sécurité — disponible au besoin, sur place et exempte de contamination. Les 36 points qui séparent ces deux barreaux constituent le véritable programme du Rwanda pour l'ODD 6, et ils disparaissent dès que les 89,7 % voyagent seuls. À noter aussi l'inversion : l'assainissement géré en toute sécurité (64,3 %) devance l'eau gérée en toute sécurité (53,4 %), ce qui est inhabituel et fait du traitement et de la distribution de l'eau, et non des latrines, la contrainte déterminante."
      },
      source: "NISR, EICV7 2023/24 · VNR 2026 · SDG indicators 6.1.1 & 6.2.1" },

    { id: "urbanisation", type: "line", sdg: 11,
      title: { en: "Urban population, % of the total", fr: "Population urbaine, en % du total" },
      unit: "%",
      xLabel: { en: "Survey period", fr: "Période d'enquête" },
      series: [
        { key: "urban", label: { en: "Urban population", fr: "Population urbaine" },
          points: [{ x: "2016/17", y: 18.4 }, { x: "2023/24", y: 28.4 }] }
      ],
      insight: {
        en: "Ten points of urbanisation in seven years — one of the fastest shifts on the continent, and the reason housing and settlement policy is a theme in its own right. The review reports 68% of the urban population living in planned settlements; the remaining third is where the housing reforms have to land. Rwanda's advantage is that it is urbanising with a plan rather than after the fact, and the review's own framing — climate-resilient urbanisation — treats the two as one problem.",
        fr: "Dix points d'urbanisation en sept ans : l'une des évolutions les plus rapides du continent, et la raison pour laquelle la politique du logement et de l'habitat constitue un thème à part entière. La revue indique que 68 % de la population urbaine vit dans des quartiers planifiés ; c'est sur le tiers restant que les réformes du logement doivent porter. L'atout du Rwanda est de s'urbaniser avec un plan plutôt qu'après coup, et le cadrage même de la revue — une urbanisation résiliente au changement climatique — traite les deux questions comme une seule."
      },
      source: "VNR 2026 factsheet · NISR, EICV7 2023/24 · SDG indicator 11.1.1" },

    { id: "tax_revenue", type: "line", sdg: 17,
      title: { en: "Tax revenue, % of GDP", fr: "Recettes fiscales, en % du PIB" },
      unit: "%",
      xLabel: { en: "Fiscal year", fr: "Exercice budgétaire" },
      series: [
        { key: "tax", label: { en: "Tax revenue", fr: "Recettes fiscales" },
          points: [{ x: "2016/17", y: 15.8 }, { x: "2018/19", y: 16.2 }, { x: "2023/24", y: 14.1 }, { x: "2024/25", y: 14.3 }, { x: "2025/26", y: 14.9 }] }
      ],
      insight: {
        en: "Tax effort peaked at 16.2% of GDP in 2018/19, fell through the pandemic and the global shocks, and is climbing back — e-tax platforms, Electronic Billing Machines and IFMIS modernisation are doing the work — but at 14.9% it is still below where it stood seven years ago. Set that against the financing gap the INFF names: about 9% of GDP, some USD 1bn a year. The shortfall is equivalent to roughly 60% of the entire tax take. No plausible rate of tax recovery closes it, which is precisely why the review's answer is catalytic — PPPs and blended finance to mobilise capital the budget will not raise.",
        fr: "L'effort fiscal a culminé à 16,2 % du PIB en 2018-2019, a reculé pendant la pandémie et les chocs mondiaux, et se redresse — plateformes de télédéclaration, machines de facturation électronique et modernisation de l'IFMIS y contribuent — mais, à 14,9 %, il demeure inférieur à son niveau d'il y a sept ans. Rapportez-le au déficit de financement que désigne le CNIF : environ 9 % du PIB, soit quelque 1 milliard de dollars par an. Ce manque équivaut à près de 60 % de la totalité des recettes fiscales. Aucun rythme plausible de redressement de l'impôt ne le comble : c'est précisément pourquoi la réponse de la revue est catalytique — partenariats public-privé et finance mixte pour mobiliser des capitaux que le budget ne lèvera pas."
      },
      source: "VNR 2026 · SDG indicator 17.1.1" }
  ],

  instruments: [
    { name: { en: "Vision 2050 & NST2 (2024–2029)", fr: "Vision 2050 et NST2 (2024-2029)" },
      kicker: { en: "national vision", fr: "vision nationale" },
      text: {
        en: "Vision 2050 targets upper-middle-income status by 2035 and high-income status by 2050; the second National Strategy for Transformation is its current medium-term vehicle. Rwanda runs no separate SDG tracker — the Goals are mainstreamed into NST2, sector strategies and district plans, and delivered through Results-Based Budgeting and Imihigo performance contracts.",
        fr: "La Vision 2050 vise le statut de pays à revenu intermédiaire de la tranche supérieure d'ici à 2035 et celui de pays à revenu élevé d'ici à 2050 ; la deuxième Stratégie nationale de transformation en est le véhicule actuel à moyen terme. Le Rwanda ne tient pas de dispositif de suivi distinct des ODD : ceux-ci sont intégrés au NST2, aux stratégies sectorielles et aux plans de district, et mis en œuvre par la budgétisation axée sur les résultats et les contrats de performance Imihigo."
      },
      source: "VNR 2026" },
    { name: { en: "Integrated National Financing Framework", fr: "Cadre national intégré de financement" },
      kicker: { en: "~9% of GDP gap", fr: "un déficit d'environ 9 % du PIB" },
      text: {
        en: "Adopted in 2021, the INFF is the instrument behind the single most frequent concept in Rwanda's Key Messages — financing, cited fourteen times. It leverages public funds through public-private partnerships and blended finance against an annual SDG financing gap of roughly 9% of GDP, about USD 1bn.",
        fr: "Adopté en 2021, le CNIF est l'instrument qui sous-tend le concept le plus fréquent des messages clés du Rwanda — le financement, cité quatorze fois. Il mobilise les fonds publics par des partenariats public-privé et la finance mixte face à un déficit annuel de financement des ODD d'environ 9 % du PIB, soit près de 1 milliard de dollars."
      },
      source: "VNR 2026 factsheet · INFF (2021)" },
    { name: { en: "Grid and off-grid electrification", fr: "Électrification par réseau et hors réseau" },
      kicker: { en: "59.6% + 25.0%", fr: "59,6 % + 25,0 %" },
      text: {
        en: "A deliberate dual strategy: grid extension has reached 99% of administrative cells, while solar home systems and mini-grids carry electricity to the households the grid does not reach. Together they take access to 84.6%, with renewables at 52% of generation and universal access targeted for 2028/29.",
        fr: "Une stratégie double et assumée : l'extension du réseau atteint 99 % des cellules administratives, tandis que les kits solaires domestiques et les mini-réseaux acheminent l'électricité vers les ménages que le réseau ne dessert pas. Ensemble, ils portent l'accès à 84,6 %, avec 52 % de renouvelables dans la production et un objectif d'accès universel fixé à 2028-2029."
      },
      source: "VNR 2026 · Rwanda Energy Group" },
    { name: { en: "WASH infrastructure investment", fr: "Investissement dans les infrastructures d'eau et d'assainissement" },
      kicker: { en: "Kigali sewerage system", fr: "réseau d'assainissement de Kigali" },
      text: {
        en: "NST2 prioritises the Kigali Centralized Sewerage System and new wastewater treatment plants and sanitary landfills across districts, working toward the NST2 target of 90% water coverage by 2026/27, universal water access by 2028/29 and universal sanitation by 2035 under Vision 2050.",
        fr: "Le NST2 donne la priorité au réseau d'assainissement centralisé de Kigali ainsi qu'à de nouvelles stations d'épuration et décharges contrôlées dans les districts, en vue de la cible du NST2 de 90 % de couverture en eau d'ici à 2026-2027, d'un accès universel à l'eau d'ici à 2028-2029 et d'un assainissement universel d'ici à 2035 au titre de la Vision 2050."
      },
      source: "VNR 2026" },
    { name: { en: "Made in Rwanda & AfCFTA", fr: "« Made in Rwanda » et ZLECAf" },
      kicker: { en: "USD 5.7bn exports", fr: "5,7 milliards de dollars d'exportations" },
      text: {
        en: "Industrial growth of about 10% lifted exports of goods and services to USD 5.7bn and the export-to-import ratio to 75%. AfCFTA integration and Bugesera International Airport, due by 2027, are the two levers meant to turn a landlocked economy into a regional hub.",
        fr: "Une croissance industrielle d'environ 10 % a porté les exportations de biens et de services à 5,7 milliards de dollars et le ratio exportations/importations à 75 %. L'intégration à la ZLECAf et l'aéroport international de Bugesera, attendu pour 2027, sont les deux leviers censés faire d'une économie enclavée un pôle régional."
      },
      source: "VNR 2026 factsheet" },
    { name: { en: "Domestic resource mobilisation", fr: "Mobilisation des ressources intérieures" },
      kicker: { en: "e-tax, EBM, IFMIS", fr: "télédéclaration, MFE, IFMIS" },
      text: {
        en: "Electronic Billing Machines, e-tax platforms and IFMIS modernisation are broadening the base and improving compliance. Tax revenue has recovered from 14.1% of GDP in 2023/24 to 14.9% in 2025/26 — real progress, still short of the 16.2% reached in 2018/19.",
        fr: "Les machines de facturation électronique, les plateformes de télédéclaration et la modernisation de l'IFMIS élargissent l'assiette et améliorent le civisme fiscal. Les recettes fiscales sont remontées de 14,1 % du PIB en 2023-2024 à 14,9 % en 2025-2026 — un progrès réel, encore inférieur aux 16,2 % atteints en 2018-2019."
      },
      source: "VNR 2026" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        en: "Every line chart in the old Rwanda dashboard plotted points that do not sit where its own axis says they should. The flagship electricity chart is the clearest case: against its own gridlines (0% at y=200px, the 80% line at y=20px), the point labelled \"2024, 72.0%\" is drawn at 39.6%, and \"2025, 84.6%\" is drawn at exactly 80% — clamped to the top of the axis. The chart has four plotted points but only three x-axis ticks, and two of the four are labelled 2025.",
        fr: "Chaque graphique linéaire de l'ancien tableau de bord du Rwanda plaçait ses points ailleurs que là où son propre axe l'indiquait. Le graphique phare sur l'électricité en est l'illustration la plus nette : rapporté à ses propres lignes de repère (0 % à y=200 px, la ligne des 80 % à y=20 px), le point libellé « 2024, 72,0 % » est tracé à 39,6 %, et « 2025, 84,6 % » à exactement 80 % — plaqué contre le sommet de l'axe. Le graphique compte quatre points tracés pour seulement trois graduations en abscisse, et deux des quatre portent l'année 2025."
      },
      resolution: {
        en: "The fault is systematic, not isolated. The safely-managed water and sanitation chart renders 53.4% at about 30% and 64.3% at about 42% — and on two different implicit scales, an undeclared dual axis. The tax-revenue chart draws 14.9% of GDP at about 11.5%. The \"Domestic revenue effort\" chart draws 58.2% above its own 70% gridline. In every case the tooltip carried the right number and the geometry carried a different one, so the figure a reader read and the shape a reader saw disagreed. Every series on this page has been rebuilt from the data and is drawn to a single declared scale.",
        fr: "Le défaut est systématique, non isolé. Le graphique sur l'eau et l'assainissement gérés en toute sécurité restitue 53,4 % à environ 30 % et 64,3 % à environ 42 % — et selon deux échelles implicites différentes, soit un double axe non déclaré. Le graphique des recettes fiscales place 14,9 % du PIB à environ 11,5 %. Celui de l'« effort de recettes intérieures » trace 58,2 % au-dessus de sa propre ligne des 70 %. Dans tous les cas, l'infobulle portait le bon chiffre et la géométrie en portait un autre : le chiffre lu et la forme vue se contredisaient. Toutes les séries de cette page ont été reconstruites à partir des données et sont tracées selon une échelle unique et déclarée."
      } },
    { severity: "contradiction",
      issue: {
        en: "The factsheet reports improved water access rising from 22.6% of households in 2005 to 89.7% in 2024 — a 67-point climb that would be one of the most dramatic service expansions ever recorded.",
        fr: "La fiche indique un accès à l'eau améliorée passant de 22,6 % des ménages en 2005 à 89,7 % en 2024 — une progression de 67 points qui compterait parmi les extensions de service les plus spectaculaires jamais enregistrées."
      },
      resolution: {
        en: "The 2005 baseline does not survive checking. NISR's own EICV series runs 87.4% (2016/17) → 89.7% (2023/24); Rwanda's standard long-run narrative is 26.3% in 1994 → 87.4% in 2016/17; and the 2005 household survey found roughly 66% of urban and 57% of rural households using an improved source. A national figure of 22.6% for 2005 cannot be reconciled with any of these, and it looks like a transposition of the 26.3% figure for 1994. The 2005 → 2024 line has therefore not been plotted. The verified movement — 87.4% to 89.7% — is reported instead, and the water chart is built on the ladder from improved source to safely managed water, which is where the real story is.",
        fr: "La valeur de référence de 2005 ne résiste pas à la vérification. La série EICV du NISR lui-même donne 87,4 % (2016-2017) → 89,7 % (2023-2024) ; le récit long standard du Rwanda est de 26,3 % en 1994 à 87,4 % en 2016-2017 ; et l'enquête auprès des ménages de 2005 relevait environ 66 % des ménages urbains et 57 % des ménages ruraux utilisant une source améliorée. Un chiffre national de 22,6 % pour 2005 ne peut être concilié avec aucun d'entre eux et ressemble à une transposition des 26,3 % de 1994. La courbe 2005 → 2024 n'a donc pas été tracée. C'est l'évolution vérifiée — de 87,4 % à 89,7 % — qui est rapportée, et le graphique sur l'eau est construit sur l'échelle qui va de la source améliorée à l'eau gérée en toute sécurité, là où se trouve la véritable histoire."
      } },
    { severity: "contradiction",
      issue: {
        en: "The factsheet dates electricity access at 21.5% in 2014; the old dashboard used 19.8% for the same year; and the dashboard's line then ran 19.8% (2014) → 72.0% (2024) → 84.6% (2025).",
        fr: "La fiche situe l'accès à l'électricité à 21,5 % en 2014 ; l'ancien tableau de bord retenait 19,8 % pour la même année ; et sa courbe reliait ensuite 19,8 % (2014) → 72,0 % (2024) → 84,6 % (2025)."
      },
      resolution: {
        en: "Two problems, one of them serious. The baselines differ by 1.7 points because they are different instruments: EICV4 (2013/14) measured 19.8% of households using electricity for lighting, close to the World Bank's ~19.4% for 2014, while 21.5% appears to be a calendar-year interpolation. The serious problem is the other end of the line: 72.0% is the EICV7 household survey (2023/24) and 84.6% is the Rwanda Energy Group's connections-based access rate for 2025. Splicing them produces an apparent 12.6-point jump in twelve months that is a change of measure, not a change in the world. The survey series is plotted on its own; 84.6% is reported as a separate, clearly-labelled indicator.",
        fr: "Deux problèmes, dont un sérieux. Les valeurs de référence diffèrent de 1,7 point parce qu'elles procèdent d'instruments distincts : l'EICV4 (2013-2014) mesurait 19,8 % de ménages utilisant l'électricité pour l'éclairage, proche des quelque 19,4 % de la Banque mondiale pour 2014, tandis que 21,5 % semble être une interpolation en année civile. Le problème sérieux se situe à l'autre extrémité de la courbe : 72,0 % provient de l'enquête EICV7 (2023-2024) et 84,6 % du taux d'accès fondé sur les raccordements du Rwanda Energy Group pour 2025. Les raccorder produit un bond apparent de 12,6 points en douze mois qui traduit un changement de mesure, non un changement de réalité. La série d'enquête est tracée seule ; les 84,6 % sont présentés comme un indicateur distinct et explicitement libellé."
      } },
    { severity: "contradiction",
      issue: {
        en: "The factsheet reports 68% of the urban population living in planned settlements. The dashboard reported that the share of urban households in unplanned settlements fell from 52.5% to 22.4% — which implies 77.6% in planned settlements.",
        fr: "La fiche indique que 68 % de la population urbaine vit dans des quartiers planifiés. Le tableau de bord indiquait que la part des ménages urbains vivant dans des quartiers non planifiés était tombée de 52,5 % à 22,4 % — ce qui impliquerait 77,6 % en quartiers planifiés."
      },
      resolution: {
        en: "The two cannot both be right: the gap between 68% and 77.6% is nearly ten points of the urban population. The factsheet's 68% is retained as the country's own submitted figure, and the 52.5% / 22.4% pair — which is untraceable to the factsheet and internally inconsistent with it — has not been carried over.",
        fr: "Les deux ne peuvent être exacts simultanément : l'écart entre 68 % et 77,6 % représente près de dix points de la population urbaine. Les 68 % de la fiche sont conservés en tant que chiffre soumis par le pays lui-même, et le couple 52,5 % / 22,4 % — introuvable dans la fiche et incompatible avec elle — n'a pas été repris."
      } },
    { severity: "mislabel",
      issue: {
        en: "The SDG 9 panel headlined \"Debt service / exports — 5.7%\" and cited \"indicators 9.1.1 & 17.4.1\" under a Goal 9 heading. Separately, the factsheet's SDG 9 theme reports exports of USD 5.7bn.",
        fr: "Le panneau ODD 9 affichait « Service de la dette / exportations — 5,7 % » et citait « les indicateurs 9.1.1 et 17.4.1 » sous un intitulé relatif à l'objectif 9. Par ailleurs, le thème ODD 9 de la fiche fait état de 5,7 milliards de dollars d'exportations."
      },
      resolution: {
        en: "Debt service as a share of exports is SDG indicator 17.4.1 and belongs under Goal 17, not Goal 9 — the same class of copy-paste error found across the cloned dashboards. The coincidence of the two 5.7s, one a percentage and one a dollar figure, made the panel actively misleading. Debt-service data has been removed from the Goal 9 material; exports of USD 5.7bn are reported under SDG 9 with their unit stated.",
        fr: "Le service de la dette rapporté aux exportations correspond à l'indicateur ODD 17.4.1 et relève de l'objectif 17, non de l'objectif 9 — la même catégorie d'erreur de copier-coller que dans les autres tableaux de bord clonés. La coïncidence des deux « 5,7 », l'un en pourcentage et l'autre en dollars, rendait le panneau franchement trompeur. Les données de service de la dette ont été retirées du contenu relatif à l'objectif 9 ; les 5,7 milliards de dollars d'exportations sont présentés sous l'ODD 9, avec leur unité explicitée."
      } },
    { severity: "mislabel",
      issue: {
        en: "Exports of \"USD 5.7bn\" with an \"export-to-import ratio of 75%\" could not be reconciled with Rwanda's published trade statistics.",
        fr: "Des exportations de « 5,7 milliards de dollars » avec un « ratio exportations/importations de 75 % » ne pouvaient être conciliées avec les statistiques commerciales publiées du Rwanda."
      },
      resolution: {
        en: "NISR records merchandise exports of USD 3.16bn in 2024 against USD 6.88bn of merchandise imports — a ratio of 46%, not 75%. The factsheet's pair is coherent only on a goods-and-services basis, where Rwanda's large services exports (tourism, transport, conferencing) close most of the difference. The figure is kept and its basis is now stated: exports of goods and services. Quoted as merchandise trade it would be wrong by nearly a factor of two.",
        fr: "Le NISR enregistre 3,16 milliards de dollars d'exportations de marchandises en 2024 contre 6,88 milliards d'importations de marchandises — un ratio de 46 %, et non de 75 %. Le couple de chiffres de la fiche n'est cohérent que sur une base « biens et services », où les importantes exportations de services du Rwanda (tourisme, transport, événementiel) comblent l'essentiel de l'écart. Le chiffre est conservé et sa base est désormais précisée : exportations de biens et de services. Rapporté au seul commerce de marchandises, il serait faux de près du double."
      } },
    { severity: "corrected",
      issue: {
        en: "Poverty falling from 39.8% (2017) to 27.4% (2024), and GDP growing about 9% a year over 2021–2025, are the review's headline claims and needed independent verification.",
        fr: "Une pauvreté ramenée de 39,8 % (2017) à 27,4 % (2024) et une croissance du PIB d'environ 9 % par an sur 2021-2025 constituent les affirmations phares de la revue et devaient être vérifiées de source indépendante."
      },
      resolution: {
        en: "Both stand. NISR's EICV7 Poverty Profile (April 2025) confirms 27.4% in 2023/24 against 39.8% in 2016/17, with extreme poverty down from 11.3% to 5.4% — about 1.5 million people. The national accounts give growth of 10.9% (2021), 8.2% (2022), 8.2% (2023) and 8.9% (2024), an average close to 9%. One caveat is carried on the chart: 39.8% is a back-cast of 2016/17 under EICV7's revised poverty line — the rate published at the time was 38.2% — so 27.4% must not be compared with pre-2024 publications.",
        fr: "Les deux tiennent. Le Profil de pauvreté EICV7 du NISR (avril 2025) confirme 27,4 % en 2023-2024 contre 39,8 % en 2016-2017, l'extrême pauvreté reculant de 11,3 % à 5,4 % — soit environ 1,5 million de personnes. Les comptes nationaux donnent une croissance de 10,9 % (2021), 8,2 % (2022), 8,2 % (2023) et 8,9 % (2024), soit une moyenne proche de 9 %. Une réserve est portée sur le graphique : 39,8 % est une rétropolation de 2016-2017 selon le seuil de pauvreté révisé de l'EICV7 — le taux publié à l'époque était de 38,2 % — de sorte que 27,4 % ne doit pas être comparé aux publications antérieures à 2024."
      } },
    { severity: "unverified",
      issue: {
        en: "The old dashboard cited VNR page numbers such as \"p.2307–2311\", \"p.2242–2246\" and \"p.4979–4984\", and its browser tab was titled \"2014, 19.8%\".",
        fr: "L'ancien tableau de bord citait des numéros de page de la RNV tels que « p. 2307-2311 », « p. 2242-2246 » et « p. 4979-4984 », et son onglet de navigateur s'intitulait « 2014, 19.8% »."
      },
      resolution: {
        en: "No VNR runs to 5,000 pages; these are line or character offsets from an extraction tool dressed up as page references, and the page title is a chart tooltip that escaped into the browser tab. Citations here are reduced to the document, the survey and, where known, the report — anything that could not be traced to a checkable source has been dropped rather than given a false one.",
        fr: "Aucune RNV ne compte 5 000 pages : il s'agit de décalages de lignes ou de caractères issus d'un outil d'extraction, travestis en références de pages ; quant au titre de la page, c'est une infobulle de graphique échappée dans l'onglet du navigateur. Les citations sont ici ramenées au document, à l'enquête et, lorsqu'il est connu, au rapport — tout ce qui n'a pu être rattaché à une source vérifiable a été supprimé plutôt qu'affublé d'une fausse référence."
      } }
  ]
});
