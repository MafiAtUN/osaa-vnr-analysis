/* Senegal — VNR 2022 → 2026. Source factsheet authored in French; the French wording
   is the source, the English is a translation.
   Fact-checked against data/factsheets.txt (p.16 of the OSAA factsheet pack), the old
   "Senegal Dashboard.dc.html", the Ministry of Economy, Planning and Cooperation
   (2025 national accounts and 2025 budget execution, published April 2026), the
   Cour des comptes audit of February 2025, IMF staff statements of November 2025 and
   ASER rural-electrification data. See `factcheck` at the bottom. */
window.VNR.register({
  slug: "senegal",
  iso: "SN",
  name: { en: "Senegal", fr: "Sénégal" },
  region: "west",
  vnrPrev: 2022,
  vnrCycles: [2018, 2022, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/senegal.pdf",

  tagline: {
    en: "Vision Senegal 2050 as the foundation of public action to accelerate the 2030 Agenda.",
    fr: "La Vision Sénégal 2050, socle de l'action publique pour accélérer l'Agenda 2030."
  },

  themes: [
    { sdg: 6,
      title: { en: "Near-Universal Water Access", fr: "Accès à l'eau quasi universel" },
      text: {
        en: "Access to drinking water is almost universal, rural areas included, but sanitation remains a significant challenge.",
        fr: "L'accès à l'eau potable est presque universel, y compris en milieu rural, mais l'assainissement demeure un défi significatif."
      } },
    { sdg: 7,
      title: { en: "Diversifying the Energy Mix", fr: "Diversification du mix énergétique" },
      text: {
        en: "Progress on electricity access and a diversifying mix, with a target of 40% renewables by 2030.",
        fr: "Progrès de l'accès à l'électricité et diversification du mix, avec un objectif de 40 % d'énergies renouvelables d'ici 2030."
      } },
    { sdg: 8,
      title: { en: "Growth Driven by Oil and Gas", fr: "Croissance portée par le pétrole et le gaz" },
      text: {
        en: "GDP growth of 6.7% in 2025 driven by oil and gas production, with the deficit brought down from 13.7% of GDP to 6.2% of GDP.",
        fr: "Croissance de 6,7 % du PIB en 2025 portée par l'exploitation pétrolière et gazière, avec un déficit ramené de 13,7 % du PIB à 6,2 % du PIB."
      } },
    { sdg: 9,
      title: { en: "Industry as the Engine of Transformation", fr: "L'industrie, moteur de transformation" },
      text: {
        en: "Industry is positioned as the engine of economic transformation and job creation, supported by modern transport infrastructure.",
        fr: "L'industrie est positionnée comme moteur de transformation économique et de création d'emplois, avec des infrastructures de transport modernes."
      } },
    { sdg: 10,
      title: { en: "Territorialisation & Social Inclusion", fr: "Territorialisation et inclusion sociale" },
      text: {
        en: "Policies are territorialised through development poles, alongside social protection programmes, in order to reduce inequalities.",
        fr: "Territorialisation des politiques via les pôles de développement et des programmes de protection sociale pour réduire les inégalités."
      } },
    { sdg: 17,
      title: { en: "Domestic Resources & Partnerships", fr: "Ressources internes et partenariats" },
      text: {
        en: "Strengthening domestic resource mobilisation and partnerships, including the National Compact for Water Security and the Global Accelerator on Jobs and Social Protection.",
        fr: "Renforcer la mobilisation des ressources internes et les partenariats, dont le Compact national pour la Sécurité de l'Eau et l'Accélérateur mondial pour l'emploi."
      } }
  ],

  continuity: [
    { prev: { en: "Plan Sénégal Émergent & its Priority Action Plan (PAP), 2022", fr: "Plan Sénégal Émergent & son Plan d'Actions Prioritaires (PAP) (2022)" },
      status: "sustained",
      now: { en: "Vision Senegal 2050 & the National Development Strategy 2025–2029", fr: "Vision Sénégal 2050 & Stratégie nationale de développement 2025-2029" } },
    { prev: { en: "Fighting poverty", fr: "Lutte contre la pauvreté" },
      status: "evolved",
      now: { en: "Social inclusion & territorialisation", fr: "Inclusion sociale & territorialisation" } },
    { prev: { en: "Climate resilience & COVID-19", fr: "Résilience climatique & Covid-19" },
      status: "evolved",
      now: { en: "Sustainable, resilient transformation", fr: "Transformation durable et résiliente" } },
    { prev: { en: "Macroeconomic stability", fr: "Stabilité macroéconomique" },
      status: "sustained",
      now: { en: "Oil-and-gas growth, reduced deficit", fr: "Croissance pétrole-gaz, déficit réduit" } },
    { prev: { en: "Equity & gender equality", fr: "Équité & égalité de genre" },
      status: "evolved",
      now: { en: "Resource mobilisation & partnerships", fr: "Mobilisation des ressources & partenariats" } }
  ],

  concepts: {
    caption: {
      en: "Senegal builds its review around growth, social inclusion and domestic resources.",
      fr: "Le Sénégal articule sa revue autour de la croissance, de l'inclusion sociale et des ressources internes."
    },
    items: [
      { label: { en: "social inclusion", fr: "inclusion sociale" }, value: 16 },
      { label: { en: "growth", fr: "croissance" }, value: 14 },
      { label: { en: "financing & debt", fr: "financement & dette" }, value: 8 },
      { label: { en: "energy & water", fr: "énergie & eau" }, value: 7 },
      { label: { en: "governance", fr: "gouvernance" }, value: 6 },
      { label: { en: "infrastructure", fr: "infrastructure" }, value: 4 },
      { label: { en: "oil & gas", fr: "pétrole & gaz" }, value: 3 },
      { label: { en: "industry", fr: "industrie" }, value: 2 },
      { label: { en: "partnerships", fr: "partenariats" }, value: 2 }
    ]
  },

  indicators: [
    { id: "gdp_growth", sdg: 8,
      label: { en: "Real GDP growth", fr: "Croissance du PIB réel" },
      value: 6.7, unit: "%",
      note: {
        en: "2025, up from 6.5% in 2024, driven by hydrocarbon extraction at Sangomar and GTA. Confirmed by the Ministry of Economy, Planning and Cooperation.",
        fr: "2025, contre 6,5 % en 2024, portée par l'exploitation des hydrocarbures à Sangomar et GTA. Chiffre confirmé par le ministère de l'Économie, du Plan et de la Coopération."
      },
      source: "VNR 2026 factsheet · Ministry of Economy, Planning and Cooperation (2025 national accounts)" },

    { id: "deficit", sdg: 17,
      label: { en: "Fiscal deficit, % of GDP", fr: "Déficit budgétaire, en % du PIB" },
      value: 6.2, unit: "% of GDP",
      note: {
        en: "2025, down from 13.7% in 2024 — more than halved in a single year. Provisional end-December execution data gave 6.44%; the official figure published in April 2026 is 6.2%. Both are well inside the 7.8% ceiling of the revised 2025 budget law.",
        fr: "2025, contre 13,7 % en 2024 — plus que divisé par deux en un an. Les données d'exécution provisoires à fin décembre donnaient 6,44 % ; le chiffre officiel publié en avril 2026 est de 6,2 %. Les deux sont nettement en deçà du plafond de 7,8 % de la loi de finances rectificative 2025."
      },
      source: "VNR 2026 factsheet · Ministry of Economy, Planning and Cooperation, 2025 budget execution (April 2026)" },

    { id: "debt", sdg: 17,
      label: { en: "Public debt, % of GDP", fr: "Dette publique, en % du PIB" },
      value: 117.6, unit: "% of GDP",
      note: {
        en: "Against a WAEMU convergence ceiling of 70%. On a wider perimeter that consolidates state-owned-enterprise debt and expenditure arrears, the IMF puts total public-sector debt higher still. This level is not comparable with pre-2024 published figures, which the Cour des comptes found to be understated.",
        fr: "Contre un plafond de convergence UEMOA de 70 %. Sur un périmètre élargi consolidant la dette des entreprises publiques et les arriérés de dépenses, le FMI situe la dette publique totale à un niveau encore supérieur. Ce niveau n'est pas comparable aux chiffres publiés avant 2024, que la Cour des comptes a jugés sous-évalués."
      },
      source: "VNR 2026 review · Cour des comptes audit, February 2025 · IMF staff statement, November 2025" },

    { id: "tax_revenue", sdg: 17,
      label: { en: "Tax revenue, % of GDP", fr: "Recettes fiscales, en % du PIB" },
      value: 18.9, unit: "% of GDP",
      note: {
        en: "Up from 15.2% in 2015. Distinct from total public revenue including grants, which reached 20.98% of GDP — the two are frequently confused.",
        fr: "Contre 15,2 % en 2015. À distinguer des recettes publiques totales, dons compris, qui atteignent 20,98 % du PIB — les deux sont fréquemment confondues."
      },
      source: "VNR 2026 · SDG indicator 17.1.1" },

    { id: "elec_access", sdg: 7,
      label: { en: "Electricity access, national", fr: "Accès à l'électricité, national" },
      value: 86.0, unit: "%",
      note: {
        en: "2024, up from 62% in 2015. Rural access rose faster still, from 31.5% to 69.84%, corroborated by ASER.",
        fr: "2024, contre 62 % en 2015. L'accès rural a progressé plus vite encore, de 31,5 % à 69,84 %, chiffre corroboré par l'ASER."
      },
      source: "VNR 2026 · ASER (Senegalese Rural Electrification Agency) · SDG indicator 7.1.1" },

    { id: "water", sdg: 6,
      label: { en: "Access to improved drinking water", fr: "Accès à l'eau potable améliorée" },
      value: 96.9, unit: "%",
      note: {
        en: "2025, up from 92.6% in 2015; urban areas are at 97.8%. This is the figure the review describes as “almost universal”.",
        fr: "2025, contre 92,6 % en 2015 ; les zones urbaines atteignent 97,8 %. C'est le chiffre que la revue qualifie de « presque universel »."
      },
      source: "VNR 2026 · SDG indicator 6.1.1" },

    { id: "sanitation", sdg: 6,
      label: { en: "Access to improved sanitation", fr: "Accès à l'assainissement amélioré" },
      value: 69.4, unit: "%",
      note: {
        en: "2025, up from 49.45% in 2015. Rural sanitation moved fastest of all WASH indicators, from 37.5% to 64.5%. This — not water — is Senegal's real SDG 6 gap.",
        fr: "2025, contre 49,45 % en 2015. L'assainissement rural a progressé plus vite que tout autre indicateur EAH, de 37,5 % à 64,5 %. C'est là — et non sur l'eau — que se situe le véritable écart du Sénégal sur l'ODD 6."
      },
      source: "VNR 2026 · SDG indicator 6.2.1" }
  ],

  charts: [
    { id: "deficit", type: "line", sdg: 8,
      title: { en: "Fiscal deficit, % of GDP", fr: "Déficit budgétaire, en % du PIB" },
      unit: "% of GDP",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "deficit", label: { en: "Fiscal deficit", fr: "Déficit budgétaire" },
          points: [{ x: "2023", y: 12.3 }, { x: "2024", y: 13.7 }, { x: "2025", y: 6.2 }] }
      ],
      insight: {
        en: "The headline achievement of the review, and it is genuine: the deficit was more than halved in a single year. Two things should be read alongside it. First, the 2023 and 2024 starting points are themselves the product of the Cour des comptes audit — they are not what was reported at the time. Second, the correction came substantially from compressing investment spending and transfers rather than from revenue alone, and it is precisely capital spending that water, sanitation and energy delivery depend on. A halved deficit and a slowed SDG programme can be the same decision seen from two sides.",
        fr: "C'est le résultat phare de la revue, et il est réel : le déficit a plus que diminué de moitié en une seule année. Deux éléments doivent être lus en regard. D'abord, les points de départ de 2023 et 2024 sont eux-mêmes issus de l'audit de la Cour des comptes — ce ne sont pas les chiffres publiés à l'époque. Ensuite, la correction est venue pour une large part de la compression des dépenses d'investissement et des transferts, et non des seules recettes ; or ce sont précisément les dépenses en capital dont dépendent l'eau, l'assainissement et l'énergie. Un déficit divisé par deux et un programme ODD ralenti peuvent être la même décision vue de deux côtés."
      },
      source: "VNR 2026 factsheet (2024, 2025) · Cour des comptes audit, February 2025 (2023) · Ministry of Economy, Planning and Cooperation, 2025 budget execution" },

    { id: "debt_ceiling", type: "gap", sdg: 17,
      title: { en: "Public debt against the WAEMU ceiling, 2025", fr: "Dette publique et plafond de convergence UEMOA, 2025" },
      unit: "% of GDP",
      items: [
        { label: { en: "WAEMU convergence ceiling", fr: "Plafond de convergence UEMOA" }, value: 70, emphasis: false },
        { label: { en: "Senegal's public debt", fr: "Dette publique du Sénégal" }, value: 117.6, emphasis: true }
      ],
      insight: {
        en: "Debt stands 68% above the regional ceiling — the binding constraint on everything else in this review. The old dashboard charted a rise from 57.3% of GDP in 2019 to 117.6% and called it a doubling in six years. That reading is wrong in an important way: the February 2025 Cour des comptes audit found roughly $7bn of previously undisclosed borrowing, so a substantial share of the “increase” is the correction of concealed debt rather than new money raised. The level is real and severe; the trend line is a measurement artefact, and this is shown as a level against a ceiling for exactly that reason.",
        fr: "La dette se situe 68 % au-dessus du plafond régional — la contrainte qui pèse sur tout le reste de cette revue. L'ancien tableau de bord traçait une progression de 57,3 % du PIB en 2019 à 117,6 % et y voyait un doublement en six ans. Cette lecture est fautive sur un point essentiel : l'audit de la Cour des comptes de février 2025 a mis au jour environ 7 milliards de dollars d'emprunts jusque-là non déclarés ; une part substantielle de la « hausse » relève donc de la correction d'une dette dissimulée et non d'argent nouvellement levé. Le niveau est réel et sévère ; la courbe de tendance, elle, est un artefact de mesure — d'où la présentation en niveau, rapporté au plafond."
      },
      source: "VNR 2026 review · Cour des comptes audit, February 2025 · WAEMU convergence criteria · IMF staff statement, November 2025" },

    { id: "electricity", type: "line", sdg: 7,
      title: { en: "Electricity access, national and rural, % of population", fr: "Accès à l'électricité, national et rural, en % de la population" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "national", label: { en: "National access", fr: "Accès national" },
          points: [{ x: "2015", y: 62.0 }, { x: "2024", y: 86.0 }] },
        { key: "rural", label: { en: "Rural access", fr: "Accès rural" },
          points: [{ x: "2015", y: 31.5 }, { x: "2024", y: 69.84 }] }
      ],
      insight: {
        en: "The fastest-moving indicator in Senegal's review, and the one where the gap actually closed: rural access more than doubled, narrowing the distance to the national rate from 30 points to 16. Grid extension did part of it; solar multifunctional platforms and pumping did the rest, in places the grid was never going to reach economically. A sixteen-point gap remains, and it now sits alongside the 40% renewables target for 2030 as the country's twin energy commitments.",
        fr: "C'est l'indicateur qui progresse le plus vite dans la revue sénégalaise, et le seul où l'écart s'est réellement resserré : l'accès rural a plus que doublé, réduisant la distance au taux national de 30 à 16 points. L'extension du réseau y a contribué ; les plateformes solaires multifonctionnelles et le pompage ont fait le reste, là où le réseau n'arriverait jamais à des conditions économiques viables. Un écart de seize points subsiste, et il figure désormais aux côtés de l'objectif de 40 % de renouvelables d'ici 2030 comme le double engagement énergétique du pays."
      },
      source: "VNR 2026 · ASER (Senegalese Rural Electrification Agency) · SDG indicator 7.1.1" },

    { id: "wash", type: "line", sdg: 6,
      title: { en: "Improved water and improved sanitation, % of population", fr: "Eau améliorée et assainissement amélioré, en % de la population" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "water", label: { en: "Improved drinking water", fr: "Eau potable améliorée" },
          points: [{ x: "2015", y: 92.6 }, { x: "2025", y: 96.9 }] },
        { key: "sanitation", label: { en: "Improved sanitation", fr: "Assainissement amélioré" },
          points: [{ x: "2015", y: 49.45 }, { x: "2025", y: 69.4 }] }
      ],
      insight: {
        en: "Water is the figure that gets quoted — 96.9%, and 97.8% in the towns — and on water the review's claim of near-universal access holds. Sanitation is the figure that matters. It gained twenty points in a decade, faster than water ever moved, and it is still thirty points behind. Reporting the 96.9% alone, as the old dashboard's water page did, converts Senegal's hardest remaining SDG 6 problem into a success story. The two belong on the same axis.",
        fr: "L'eau est le chiffre que l'on cite — 96,9 %, et 97,8 % en ville — et sur l'eau l'affirmation d'un accès quasi universel tient. L'assainissement est le chiffre qui compte. Il a gagné vingt points en dix ans, plus vite que l'eau n'a jamais progressé, et il accuse encore trente points de retard. Ne présenter que les 96,9 %, comme le faisait la page « eau » de l'ancien tableau de bord, transforme le problème ODD 6 le plus difficile du Sénégal en réussite. Les deux séries relèvent du même axe."
      },
      source: "VNR 2026 · SDG indicators 6.1.1 & 6.2.1" },

    { id: "revenue", type: "line", sdg: 17,
      title: { en: "Revenue mobilisation, % of GDP", fr: "Mobilisation des recettes, en % du PIB" },
      unit: "% of GDP",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "tax", label: { en: "Tax revenue", fr: "Recettes fiscales" },
          points: [{ x: "2015", y: 15.2 }, { x: "2023", y: 18.8 }, { x: "2025", y: 18.9 }] },
        { key: "total", label: { en: "Total public revenue, incl. grants", fr: "Recettes publiques totales, dons compris" },
          points: [{ x: "2015", y: 19.3 }, { x: "2023", y: 20.7 }, { x: "2025", y: 20.98 }] }
      ],
      insight: {
        en: "Tax revenue and total revenue are different measures and are routinely used as if they were interchangeable: total revenue includes non-tax receipts and grants, which is why it sits two points higher. The domestic effort is real — 3.7 points of GDP in a decade — but it has been flat since 2023, at 18.8% then 18.9%, exactly when it was needed most. Set against a debt stock of 117.6% of GDP, the base that must service the debt is growing far more slowly than the debt itself.",
        fr: "Recettes fiscales et recettes totales sont deux mesures distinctes, employées couramment comme si elles étaient interchangeables : les recettes totales incluent les recettes non fiscales et les dons, d'où les deux points d'écart. L'effort intérieur est réel — 3,7 points de PIB en dix ans — mais il stagne depuis 2023, à 18,8 % puis 18,9 %, au moment précis où il était le plus nécessaire. Rapporté à un encours de dette de 117,6 % du PIB, l'assiette qui doit assurer le service de la dette progresse bien plus lentement que la dette elle-même."
      },
      source: "VNR 2026 · SDG indicator 17.1.1" }
  ],

  instruments: [
    { name: { en: "Vision Senegal 2050 & the SND 2025–2029", fr: "Vision Sénégal 2050 et la SND 2025-2029" },
      kicker: { en: "national vision · four pillars", fr: "vision nationale · quatre piliers" },
      text: {
        en: "Vision Senegal 2050 is the long-term transformation agenda; the National Development Strategy 2025–2029 is its first five-year operational phase, built on four pillars — a competitive economy, human capital, good governance and territorial equity. Senegal runs no separate SDG tracker: the 2030 Agenda is monitored inside the SND's own harmonised framework, which is also aligned to the African Union's Agenda 2063.",
        fr: "La Vision Sénégal 2050 est l'agenda de transformation de long terme ; la Stratégie nationale de développement 2025-2029 en est la première phase opérationnelle quinquennale, bâtie sur quatre piliers — une économie compétitive, le capital humain, la bonne gouvernance et l'équité territoriale. Le Sénégal ne tient pas de dispositif de suivi distinct des ODD : l'Agenda 2030 est suivi dans le cadre harmonisé de la SND elle-même, également aligné sur l'Agenda 2063 de l'Union africaine."
      },
      source: "VNR 2026 factsheet · VNR 2026" },

    { name: { en: "Rural electrification strategy", fr: "Stratégie d'électrification rurale" },
      kicker: { en: "31.5% → 69.84% rural access", fr: "accès rural : 31,5 % → 69,84 %" },
      text: {
        en: "The instrument behind the single largest gain in the review. It pairs grid extension with solar multifunctional platforms, solar pumping and the electrification of rural public facilities, plus net metering for productive uses — reaching households the grid could not reach economically. It sits under the review's wider energy commitment: 40% renewables in the mix by 2030.",
        fr: "L'instrument à l'origine du gain le plus important de la revue. Il associe l'extension du réseau à des plateformes solaires multifonctionnelles, au pompage solaire et à l'électrification des infrastructures publiques rurales, ainsi qu'au comptage net pour les usages productifs — atteignant des ménages que le réseau ne pouvait desservir à des conditions économiques viables. Il s'inscrit dans l'engagement énergétique plus large de la revue : 40 % de renouvelables dans le mix d'ici 2030."
      },
      source: "VNR 2026 factsheet · ASER" },

    { name: { en: "Fiscal consolidation & debt management", fr: "Consolidation budgétaire et gestion de la dette" },
      kicker: { en: "13.7% → 6.2% of GDP", fr: "13,7 % → 6,2 % du PIB" },
      text: {
        en: "The deficit was brought down from 13.7% of GDP in 2024 to 6.2% in 2025, chiefly through stronger tax collection, lower investment spending and reduced public transfers. The trajectory continues towards the 3% WAEMU convergence threshold by 2029. The constraint remains the stock, not the flow: at 117.6% of GDP, debt service competes directly with the sanitation and water capital programme.",
        fr: "Le déficit a été ramené de 13,7 % du PIB en 2024 à 6,2 % en 2025, principalement par un meilleur recouvrement fiscal, une baisse des dépenses d'investissement et une réduction des transferts publics. La trajectoire se poursuit vers le seuil de convergence UEMOA de 3 % à l'horizon 2029. La contrainte demeure l'encours, non le flux : à 117,6 % du PIB, le service de la dette entre en concurrence directe avec le programme d'investissement en eau et en assainissement."
      },
      source: "VNR 2026 factsheet · Ministry of Economy, Planning and Cooperation, 2025 budget execution" },

    { name: { en: "Development poles & territorialisation", fr: "Pôles de développement et territorialisation" },
      kicker: { en: "SDG 10 · social inclusion", fr: "ODD 10 · inclusion sociale" },
      text: {
        en: "The review's answer to inequality is spatial: policy is territorialised through development poles, paired with social protection programmes. Social inclusion is by some distance the most frequently invoked concept in Senegal's key messages, ahead even of growth — a notable emphasis in a year in which the economic story is oil and gas.",
        fr: "La réponse de la revue aux inégalités est spatiale : la politique est territorialisée à travers les pôles de développement, adossés à des programmes de protection sociale. L'inclusion sociale est, de loin, le concept le plus fréquemment invoqué dans les messages clés du Sénégal, devant même la croissance — accent notable pour une année dont le récit économique est celui du pétrole et du gaz."
      },
      source: "VNR 2026 factsheet" },

    { name: { en: "Integrated national financing framework (INFF)", fr: "Cadre intégré de financement national (CADFI)" },
      kicker: { en: "adopted 2023, realigned to Vision 2050", fr: "adopté en 2023, réaligné sur la Vision 2050" },
      text: {
        en: "Senegal's INFF, first adopted in 2023 and since realigned to Vision Senegal 2050 and the SND, is the central lever for aligning public and private flows on national priorities — infrastructure, human capital and the energy transition. It is paired with an SDG Investor Map, developed with UNDP, that identifies bankable opportunities in agriculture, renewables, water and sanitation, and health.",
        fr: "Le CADFI du Sénégal, adopté une première fois en 2023 puis réaligné sur la Vision Sénégal 2050 et la SND, est le levier central pour aligner les flux publics et privés sur les priorités nationales — infrastructures, capital humain et transition énergétique. Il est associé à une Carte des investisseurs ODD, élaborée avec le PNUD, qui identifie des opportunités finançables dans l'agriculture, les renouvelables, l'eau et l'assainissement, et la santé."
      },
      source: "VNR 2026" },

    { name: { en: "Water Security Compact & Global Accelerator on Jobs", fr: "Compact pour la sécurité de l'eau et Accélérateur mondial pour l'emploi" },
      kicker: { en: "SDG 17 · named partnerships", fr: "ODD 17 · partenariats nommés" },
      text: {
        en: "The two partnerships the factsheet names by title: the National Compact for Water Security, and the Global Accelerator on Jobs and Social Protection for Just Transitions. Together they mark where Senegal expects external partnership to do work its own budget cannot — water security and decent work — at the moment when concessional access is narrowing as the country becomes a hydrocarbon exporter.",
        fr: "Les deux partenariats que la fiche nomme explicitement : le Compact national pour la sécurité de l'eau et l'Accélérateur mondial pour l'emploi et la protection sociale au service des transitions justes. Ensemble, ils indiquent où le Sénégal attend du partenariat extérieur qu'il fasse ce que son propre budget ne peut faire — sécurité de l'eau et travail décent — au moment même où l'accès concessionnel se resserre à mesure que le pays devient exportateur d'hydrocarbures."
      },
      source: "VNR 2026 factsheet" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        en: "The old dashboard headlined the fiscal deficit as “-6,40 % du PIB, sous le plafond cible de 7,82 %” and never showed where it had come from. The factsheet reports the deficit brought down from 13.7% of GDP to 6.2% — a different endpoint and a starting point the dashboard omitted entirely.",
        fr: "L'ancien tableau de bord affichait le déficit budgétaire comme « -6,40 % du PIB, sous le plafond cible de 7,82 % » sans jamais indiquer d'où il venait. La fiche fait état d'un déficit ramené de 13,7 % du PIB à 6,2 % — point d'arrivée différent et point de départ totalement absent du tableau de bord."
      },
      resolution: {
        en: "Both endpoints are real and the difference is one of vintage: 6.44% was the provisional end-December 2025 execution figure, while the Ministry of Economy's official result, published in April 2026, is 6.2% of GDP, down from 13.7% in 2024. (The IMF, on its own perimeter, puts 2024 at 13.4%.) The factsheet figure is used. More importantly, the 2024 starting point has been restored: the halving of the deficit in one year is the story, and a dashboard showing only the endpoint could not tell it.",
        fr: "Les deux points d'arrivée sont réels et la différence est d'antériorité : 6,44 % était le chiffre d'exécution provisoire à fin décembre 2025, tandis que le résultat officiel du ministère de l'Économie, publié en avril 2026, s'établit à 6,2 % du PIB, contre 13,7 % en 2024. (Le FMI, sur son propre périmètre, retient 13,4 % pour 2024.) Le chiffre de la fiche est retenu. Surtout, le point de départ de 2024 a été rétabli : la réduction de moitié du déficit en une année est le fait marquant, et un tableau de bord n'en montrant que le point d'arrivée ne pouvait pas le raconter."
      } },

    { severity: "contradiction",
      issue: {
        en: "The old dashboard charted public debt rising from 57.3% of GDP in 2019 to 117.6% in 2025 and captioned it “la dette publique a doublé en six ans”, presenting the increase as six years of borrowing.",
        fr: "L'ancien tableau de bord traçait une dette publique passant de 57,3 % du PIB en 2019 à 117,6 % en 2025 sous le titre « la dette publique a doublé en six ans », présentant la hausse comme six années d'emprunt."
      },
      resolution: {
        en: "The 2019 figure belongs to a series the Cour des comptes found in February 2025 to be understated: roughly $7bn of borrowing had not been disclosed. A large part of the apparent doubling is therefore the correction of concealed debt, not new money raised — and the two endpoints are not measured on the same basis, so the line between them is not a trend. The chart has been replaced by a level-versus-ceiling comparison (117.6% against the WAEMU limit of 70%), with the discontinuity stated in the text. The level itself is not in doubt, and on a wider perimeter including SOE debt and arrears the IMF puts it higher still.",
        fr: "Le chiffre de 2019 appartient à une série que la Cour des comptes a jugée, en février 2025, sous-évaluée : environ 7 milliards de dollars d'emprunts n'avaient pas été déclarés. Une large part du doublement apparent relève donc de la correction d'une dette dissimulée et non d'argent nouvellement levé — et les deux points extrêmes n'étant pas mesurés sur la même base, la droite qui les relie n'est pas une tendance. Le graphique a été remplacé par une comparaison en niveau face au plafond (117,6 % contre la limite UEMOA de 70 %), la rupture de série étant explicitée dans le texte. Le niveau lui-même n'est pas contesté et, sur un périmètre élargi incluant la dette des entreprises publiques et les arriérés, le FMI le situe plus haut encore."
      } },

    { severity: "corrected",
      issue: {
        en: "GDP growth — the headline of the factsheet's SDG 8 theme and the entire oil-and-gas story — appeared nowhere in the old dashboard, which reported no growth figure at all.",
        fr: "La croissance du PIB — l'élément central du thème ODD 8 de la fiche et de tout le récit pétrole-gaz — n'apparaissait nulle part dans l'ancien tableau de bord, qui ne rapportait aucun chiffre de croissance."
      },
      resolution: {
        en: "Verified and restored: real GDP grew 6.7% in 2025, up from 6.5% in 2024, driven by hydrocarbon extraction at Sangomar and GTA — confirmed by the Ministry of Economy, Planning and Cooperation. It is now a headline indicator. Growth of 6.7% alongside a deficit halved from 13.7% is Senegal's 2026 story, and neither half of it was on the old page.",
        fr: "Vérifié et rétabli : le PIB réel a progressé de 6,7 % en 2025, contre 6,5 % en 2024, porté par l'exploitation des hydrocarbures à Sangomar et GTA — chiffre confirmé par le ministère de l'Économie, du Plan et de la Coopération. Il figure désormais parmi les indicateurs de tête. Une croissance de 6,7 % conjuguée à un déficit ramené de 13,7 % à 6,2 % : c'est le récit sénégalais de 2026, et aucune de ses deux moitiés ne figurait sur l'ancienne page."
      } },

    { severity: "unverified",
      issue: {
        en: "A cluster of composite scores and rankings appeared only in the old dashboard and in no other source: “Score de performance ODD 6 : 47,2 %”, “Score de performance ODD 7 : 46,1 %”, a “score ODD infranational” of 48/100, a Business Ready rank of “8th of 27”, “62 % de l'APD reçue des 4 principaux donateurs”, “ressources du budget général en hausse de 85,5 %” and “66,6 % des eaux usées urbaines traitées”.",
        fr: "Un ensemble de scores composites et de classements ne figurait que dans l'ancien tableau de bord et dans aucune autre source : « Score de performance ODD 6 : 47,2 % », « Score de performance ODD 7 : 46,1 % », un « score ODD infranational » de 48/100, un classement Business Ready « 8e sur 27 », « 62 % de l'APD reçue des 4 principaux donateurs », « ressources du budget général en hausse de 85,5 % » et « 66,6 % des eaux usées urbaines traitées »."
      },
      resolution: {
        en: "None of these can be traced to the factsheet or to a citable public source, and the 48/100 “subnational SDG score” was in addition cited to SDG indicator 11.1.1 (population in informal settlements), which measures something else entirely. They have all been dropped. Fewer solid numbers beat more shaky ones, and none of them was load-bearing for the argument this page makes.",
        fr: "Aucun de ces chiffres n'a pu être rattaché à la fiche ni à une source publique citable, et le « score ODD infranational » de 48/100 était de surcroît attribué à l'indicateur ODD 11.1.1 (population vivant dans des établissements informels), qui mesure tout autre chose. Ils ont tous été supprimés. Mieux vaut peu de chiffres solides que beaucoup de chiffres fragiles, et aucun d'eux n'était porteur de l'argument développé sur cette page."
      } },

    { severity: "mislabel",
      issue: {
        en: "The SDG 11 panel plotted a single value — the 48/100 composite — under the series legend “Score ODD infranational (/100)” as though it were a time series, on a chart with no time axis and one data point. The dashboard's water page headlined 96.9% improved water access under the title “l'écart d'assainissement” (the sanitation gap).",
        fr: "Le panneau ODD 11 traçait une valeur unique — le composite 48/100 — sous la légende de série « Score ODD infranational (/100) » comme s'il s'agissait d'une série temporelle, sur un graphique sans axe de temps et à un seul point de donnée. La page « eau » du tableau de bord affichait en tête 96,9 % d'accès à l'eau améliorée sous le titre « l'écart d'assainissement »."
      },
      resolution: {
        en: "Every chart legend was checked against the data beneath it. The single-point “series” has been removed. Water and sanitation are now plotted together on one axis with two clearly-named series, so the gap the title promises is the gap the chart actually shows: 96.9% on water against 69.4% on sanitation.",
        fr: "Chaque légende de graphique a été confrontée aux données qu'elle surmontait. La « série » à point unique a été supprimée. L'eau et l'assainissement sont désormais tracés ensemble sur un axe unique, en deux séries clairement nommées, de sorte que l'écart annoncé par le titre est bien celui que le graphique montre : 96,9 % pour l'eau contre 69,4 % pour l'assainissement."
      } },

    { severity: "corrected",
      issue: {
        en: "The 40% renewables-by-2030 target — the only quantified energy commitment in the factsheet — was absent from the old dashboard, whose energy panel instead reported an untraceable “Score de performance ODD 7 : 46,1 %”.",
        fr: "L'objectif de 40 % de renouvelables d'ici 2030 — le seul engagement énergétique chiffré de la fiche — était absent de l'ancien tableau de bord, dont le panneau énergie rapportait à la place un intraçable « Score de performance ODD 7 : 46,1 % »."
      },
      resolution: {
        en: "The target has been restored to the SDG 7 theme and to the rural electrification instrument, where it belongs. A national commitment stated in the country's own review outranks a composite score of unknown provenance.",
        fr: "L'objectif a été rétabli dans le thème ODD 7 et dans l'instrument d'électrification rurale, où il a sa place. Un engagement national énoncé dans la revue du pays lui-même prime sur un score composite d'origine inconnue."
      } },

    { severity: "mislabel",
      issue: {
        en: "The French dashboard carried untranslated English template strings (“Municipal bankable plans — Pikine's 62.3B FCFA Priority Action Plan”, “Solar multifunctional platforms & pumps expanding rural supply”, “Water & sanitation ladder, latest”, “territorial SDG diagnostic score”), one panel had an entire paragraph pasted into its title slot, and one sentence was corrupted mid-word (“23 points d'eau non fonctionnelsoints identified in Pikine alone.”). Its own footer described it as a prototype “à reproduire à l'identique pour les 19 tableaux de bord pays”.",
        fr: "Le tableau de bord français comportait des chaînes anglaises non traduites issues du gabarit (« Municipal bankable plans — Pikine's 62.3B FCFA Priority Action Plan », « Solar multifunctional platforms & pumps expanding rural supply », « Water & sanitation ladder, latest », « territorial SDG diagnostic score »), un panneau dont l'emplacement du titre contenait un paragraphe entier, et une phrase corrompue en plein mot (« 23 points d'eau non fonctionnelsoints identified in Pikine alone. »). Son propre pied de page le décrivait comme un prototype « à reproduire à l'identique pour les 19 tableaux de bord pays »."
      },
      resolution: {
        en: "That footer is the diagnosis: a single template was cloned nineteen times and the defects travelled with it. Text is now held once, bilingually, in the data layer, and rendered from it — so a French page cannot show an English string, and a chart cannot show a legend that belongs to another country's data.",
        fr: "Ce pied de page constitue le diagnostic : un gabarit unique a été cloné dix-neuf fois et les défauts ont voyagé avec lui. Le texte est désormais stocké une seule fois, en version bilingue, dans la couche de données, et rendu à partir d'elle — une page française ne peut donc plus afficher une chaîne anglaise, ni un graphique une légende appartenant aux données d'un autre pays."
      } }
  ]
});
