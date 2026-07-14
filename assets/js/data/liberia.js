/* Liberia — VNR 2020 → 2026. Source factsheet authored in English (factsheets.pdf p.11).
   Concept frequencies re-read from the PDF by column position, not from the text extract.
   Fact-checked against the 2026 factsheet, the old "Liberia Dashboard.html" prototype,
   the Central Bank of Liberia, the World Bank / Mission 300 Liberia Energy Compact,
   the African Development Bank and the 2025 Global Peace Index.
   See `factcheck` at the bottom. */
window.VNR.register({
  slug: "liberia",
  iso: "LR",
  name: { en: "Liberia", fr: "Libéria" },
  region: "west",
  vnrPrev: 2020,
  vnrCycles: [2020, 2026],
  langs: ["EN"],
  sourceLang: "en",
  factsheetPdf: "factsheets/liberia.pdf",

  tagline: {
    en: "A people-centered and nationally owned framework advancing sustainable development through fiscal sovereignty, transparent governance, and investment in human capital.",
    fr: "Un cadre centré sur les personnes et pleinement approprié par le pays, qui fait progresser le développement durable par la souveraineté budgétaire, la transparence de la gouvernance et l'investissement dans le capital humain."
  },

  themes: [
    { sdg: 4,
      title: { en: "Investing in People as a Growth Strategy", fr: "Investir dans les personnes comme stratégie de croissance" },
      text: {
        en: "Teacher incentives, school feeding for 239,000 students and new STEM facilities treat human capital as a core driver of growth, not a residual cost.",
        fr: "Les primes aux enseignants, l'alimentation scolaire pour 239 000 élèves et de nouvelles installations STIM font du capital humain un moteur essentiel de la croissance, et non une dépense résiduelle."
      } },
    { sdg: 8,
      title: { en: "Growth That Reaches the Many", fr: "Une croissance qui profite au plus grand nombre" },
      text: {
        en: "Inflation fell from 12.8% to 4.0% as a new Youth Entrepreneurship Bank backs 30,000 businesses and agriculture broadens shared prosperity.",
        fr: "L'inflation est tombée de 12,8 % à 4,0 %, tandis qu'une nouvelle Banque de l'entrepreneuriat des jeunes doit soutenir 30 000 entreprises et que l'agriculture élargit la prospérité partagée."
      } },
    { sdg: 9,
      title: { en: "Honest Accounting on Infrastructure", fr: "Une comptabilité honnête des infrastructures" },
      text: {
        en: "Over 680 km of roads improved and electricity access rose to 37%, with candid acknowledgment of the gaps that remain.",
        fr: "Plus de 680 km de routes ont été améliorés et l'accès à l'électricité a atteint 37 %, avec une reconnaissance franche des lacunes qui subsistent."
      } },
    { sdg: 13,
      title: { en: "Climate as Livelihood Investment", fr: "Le climat comme investissement dans les moyens de subsistance" },
      text: {
        en: "NDC 3.0, a first National Carbon Policy and women-led savings associations tie emissions cuts directly to rural livelihoods.",
        fr: "La CDN 3.0, une première politique nationale du carbone et des associations d'épargne dirigées par des femmes relient directement la réduction des émissions aux moyens de subsistance ruraux."
      } },
    { sdg: 16,
      title: { en: "Governance with Fiscal Dividends", fr: "Une gouvernance aux dividendes budgétaires" },
      text: {
        en: "A debt audit rejected unsupported claims and reform uptake nearly tripled, and Liberia ranked among Africa's 10 most peaceful nations in 2025.",
        fr: "Un audit de la dette a rejeté des créances non justifiées, l'adoption des réformes a presque triplé et le Libéria figurait en 2025 parmi les dix pays les plus pacifiques d'Afrique."
      } },
    { sdg: 17,
      title: { en: "Domestic Resource Mobilization (DRM)", fr: "Mobilisation des ressources intérieures (MRI)" },
      text: {
        en: "Digitized tax systems and disciplined spending delivered a surplus above target, clear evidence that transparent institutions, not aid dependency, finance the SDGs.",
        fr: "La numérisation des systèmes fiscaux et la discipline des dépenses ont dégagé un excédent supérieur à la cible : la preuve que ce sont des institutions transparentes, et non la dépendance à l'aide, qui financent les ODD."
      } }
  ],

  continuity: [
    { prev: { en: "National Planning Framework (PAPD / V2030)", fr: "Cadre national de planification (PAPD / V2030)" },
      status: "sustained",
      now: { en: "Nationally Owned SDG Framework", fr: "Un cadre ODD pleinement approprié par le pays" } },
    { prev: { en: "Economic Growth via Infrastructure Corridors", fr: "Croissance économique par les corridors d'infrastructure" },
      status: "evolved",
      now: { en: "Diversified Growth & DRM", fr: "Croissance diversifiée et mobilisation des ressources intérieures" } },
    { prev: { en: "Crisis Response & Resilience (Ebola, COVID-19)", fr: "Réponse aux crises et résilience (Ebola, COVID-19)" },
      status: "evolved",
      now: { en: "Resilience Through Fiscal Sovereignty", fr: "La résilience par la souveraineté budgétaire" } },
    { prev: { en: "Human Capital & “Leave No One Behind”", fr: "Capital humain et « ne laisser personne de côté »" },
      status: "sustained",
      now: { en: "Investing in People as a Growth Strategy", fr: "Investir dans les personnes comme stratégie de croissance" } },
    { prev: { en: "Statistical Systems & Impact Measurement", fr: "Systèmes statistiques et mesure de l'impact" },
      status: "evolved",
      now: { en: "Transparent Accounting & Governance Reform", fr: "Comptabilité transparente et réforme de la gouvernance" } }
  ],

  concepts: {
    caption: {
      en: "Liberia's main message centres on fiscal sovereignty, transparency and a self-reliant path to the SDGs.",
      fr: "Le message principal du Libéria s'articule autour de la souveraineté budgétaire, de la transparence et d'une trajectoire autonome vers les ODD."
    },
    items: [
      { label: { en: "digital & tax systems", fr: "systèmes numériques et fiscaux" }, value: 9 },
      { label: { en: "investment", fr: "investissement" }, value: 9 },
      { label: { en: "domestic resource mobilization", fr: "mobilisation des ressources intérieures" }, value: 6 },
      { label: { en: "climate & NDC", fr: "climat et CDN" }, value: 5 },
      { label: { en: "fiscal sovereignty", fr: "souveraineté budgétaire" }, value: 5 },
      { label: { en: "accountability & audit", fr: "redevabilité et audit" }, value: 4 },
      { label: { en: "agriculture", fr: "agriculture" }, value: 4 },
      { label: { en: "growth", fr: "croissance" }, value: 4 },
      { label: { en: "nationally owned", fr: "appropriation nationale" }, value: 4 }
    ]
  },

  indicators: [
    { id: "elec_access", sdg: 7,
      label: { en: "Electricity access, national (all sources)", fr: "Accès à l'électricité, national (toutes sources)" },
      value: 37, unit: "%",
      note: { en: "The VNR's own figure, grid and off-grid combined. Independent 2025 estimates range from 32.7% (World Bank / Mission 300 Energy Compact) to 38% (Liberia Electricity Corporation). On every estimate, roughly two Liberians in three still have no electricity, and the VNR says so.",
              fr: "Le chiffre de la RNV elle-même, réseau et hors réseau confondus. Les estimations indépendantes pour 2025 vont de 32,7 % (Banque mondiale / Pacte énergétique Mission 300) à 38 % (Liberia Electricity Corporation). Quelle que soit l'estimation, environ deux Libériens sur trois demeurent sans électricité — et la RNV le dit." },
      source: "VNR 2026 factsheet · SDG indicator 7.1.1 · World Bank, National Energy Compact for Liberia (2025)" },
    { id: "inflation", sdg: 8,
      label: { en: "Headline inflation, end-2025", fr: "Inflation globale, fin 2025" },
      value: 4.0, unit: "%",
      note: { en: "Down from 12.8%. The Central Bank of Liberia confirms end-December 2025 inflation at 4.0%, on exchange-rate stability and lower food and fuel prices.",
              fr: "Contre 12,8 % auparavant. La Banque centrale du Libéria confirme une inflation de 4,0 % à fin décembre 2025, portée par la stabilité du taux de change et le repli des prix alimentaires et des carburants." },
      source: "VNR 2026 factsheet · Central Bank of Liberia, Q4 2025 monetary policy statement" },
    { id: "budget_own_taxes", sdg: 17,
      label: { en: "Share of the national budget financed by domestic taxes", fr: "Part du budget national financée par les impôts intérieurs" },
      value: 72, unit: "%",
      note: { en: "Up from 65% in 2022. This is a share of the budget — not the same thing as revenue as a share of GDP (16.5%) or tax revenue as a share of GDP (13.5%).",
              fr: "Contre 65 % en 2022. Il s'agit d'une part du budget — à ne pas confondre avec les recettes rapportées au PIB (16,5 %) ni avec les recettes fiscales rapportées au PIB (13,5 %)." },
      source: "VNR 2026 · Executive Summary & Table 15" },
    { id: "revenue_gdp", sdg: 17,
      label: { en: "Government revenue, % of GDP (2025)", fr: "Recettes publiques, en % du PIB (2025)" },
      value: 16.5, unit: "%",
      note: { en: "Up from about 14% in 2022. Domestic revenue reached US$846.7 million, US$42 million above target; tax revenue alone is 13.5% of GDP.",
              fr: "Contre environ 14 % en 2022. Les recettes intérieures ont atteint 846,7 millions de dollars, soit 42 millions de plus que la cible ; les seules recettes fiscales représentent 13,5 % du PIB." },
      source: "VNR 2026, Table 15 · SDG indicator 17.1.1" },
    { id: "debt_gdp", sdg: 17,
      label: { en: "Public debt, % of GDP (end-September 2025)", fr: "Dette publique, en % du PIB (fin septembre 2025)" },
      value: 51.9, unit: "%",
      note: { en: "A stock of US$2.7 billion, below the 60% ceiling in the Public Financial Management Regulations and managed under the IMF Extended Credit Facility.",
              fr: "Un encours de 2,7 milliards de dollars, en deçà du plafond de 60 % fixé par la réglementation de gestion des finances publiques et géré au titre de la facilité élargie de crédit du FMI." },
      source: "VNR 2026 · SDG indicator 17.4.1" },
    { id: "roads", sdg: 9,
      label: { en: "Roads improved under the ARREST Agenda", fr: "Routes améliorées au titre de l'Agenda ARREST" },
      value: 680, unit: "km",
      note: { en: "The factsheet's figure (\"over 680 km\"). The 2026 dashboard counted only 121.6 km of primary and 231.7 km of secondary roads — 353 km. The wider figure evidently includes feeder and community roads; the narrower one does not.",
              fr: "Le chiffre de la fiche (« plus de 680 km »). Le tableau de bord 2026 ne comptabilisait que 121,6 km de routes primaires et 231,7 km de routes secondaires, soit 353 km. Le chiffre le plus large inclut manifestement les pistes de desserte et les routes communautaires ; le plus étroit, non." },
      source: "VNR 2026 factsheet · cross-checked against the 2026 dashboard prototype" },
    { id: "school_feeding", sdg: 4,
      label: { en: "Students reached by school feeding", fr: "Élèves bénéficiant de l'alimentation scolaire" },
      value: 239000, unit: "students",
      note: { en: "Alongside teacher incentives and new STEM facilities. The Government raised its own budget line for school feeding from US$1 million to US$1.8 million and launched the School Connect tracking platform.",
              fr: "Aux côtés des primes aux enseignants et de nouvelles installations STIM. Le Gouvernement a porté sa propre ligne budgétaire pour l'alimentation scolaire de 1 million à 1,8 million de dollars et lancé la plateforme de suivi School Connect." },
      source: "VNR 2026 factsheet · Ministry of Education / School Meals Coalition" }
  ],

  charts: [
    { id: "elec_estimates", type: "gap", sdg: 7,
      title: { en: "One indicator, three published answers: electricity access, 2025",
               fr: "Un indicateur, trois réponses publiées : l'accès à l'électricité en 2025" },
      unit: "%",
      items: [
        { label: { en: "Liberia Electricity Corporation", fr: "Liberia Electricity Corporation" }, value: 38, emphasis: false },
        { label: { en: "VNR 2026 (the factsheet figure)", fr: "RNV 2026 (chiffre de la fiche)" }, value: 37, emphasis: true },
        { label: { en: "World Bank · Mission 300 Energy Compact", fr: "Banque mondiale · Pacte énergétique Mission 300" }, value: 32.7, emphasis: false }
      ],
      insight: {
        en: "Three institutions publish three different numbers for the same indicator in the same year, more than five points apart, and the old dashboard silently headlined a fourth (36%). Liberia's review is unusual in that it neither hides the spread nor rounds it away: it states 37%, and then says plainly that the country is not on track for SDG 7 by 2030. The candour is the point. Whichever figure you take, close to two thirds of Liberians have no electricity at all, and the rural–urban gap and the clean-cooking deficit sit underneath all three.",
        fr: "Trois institutions publient trois chiffres différents pour le même indicateur la même année, avec plus de cinq points d'écart — et l'ancien tableau de bord en affichait discrètement un quatrième (36 %). La revue libérienne a ceci d'inhabituel qu'elle ne masque ni n'arrondit cet écart : elle retient 37 %, puis affirme clairement que le pays n'est pas en voie d'atteindre l'ODD 7 d'ici à 2030. C'est cette franchise qui compte. Quel que soit le chiffre retenu, près de deux Libériens sur trois n'ont aucun accès à l'électricité, et l'écart entre villes et campagnes ainsi que le déficit de cuisson propre se logent sous les trois estimations."
      },
      source: "VNR 2026 factsheet · World Bank, National Energy Compact for Liberia (2025) · Liberia Electricity Corporation · SDG indicator 7.1.1" },

    { id: "selfreliance", type: "line", sdg: 17,
      title: { en: "Share of the national budget financed by domestic taxes", fr: "Part du budget national financée par les impôts intérieurs" },
      unit: "% of the national budget",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "own_taxes", label: { en: "Budget financed by domestic taxes", fr: "Budget financé par les impôts intérieurs" },
          points: [{ x: "2022", y: 65 }, { x: "2023", y: 67 }, { x: "2024", y: 70 }, { x: "2025", y: 72 }] }
      ],
      insight: {
        en: "This is the fiscal-sovereignty claim, and it is the one number that carries Liberia's whole argument. Seven points of the budget shifted from external financing to domestic taxes in three years, while the budget itself crossed US$1 billion for the first time since 1847. It matters because the counter-shock arrived mid-review: the suspension of USAID assistance in January 2025 tore a hole in external financing. A country that had not moved this line would have had no answer to that.",
        fr: "C'est là que se joue la souveraineté budgétaire, et c'est le chiffre qui porte toute l'argumentation libérienne. Sept points de budget sont passés du financement extérieur à la fiscalité intérieure en trois ans, tandis que le budget lui-même franchissait pour la première fois depuis 1847 la barre du milliard de dollars. L'enjeu est réel : le contre-choc est survenu en cours de revue, la suspension de l'aide de l'USAID en janvier 2025 ayant creusé un trou dans le financement extérieur. Un pays qui n'aurait pas déplacé cette courbe n'aurait eu aucune réponse à lui opposer."
      },
      source: "VNR 2026 · Executive Summary & national budget table" },

    { id: "revenue", type: "line", sdg: 17,
      title: { en: "Government revenue, % of GDP", fr: "Recettes publiques, en % du PIB" },
      unit: "% of GDP",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "revenue", label: { en: "Total government revenue", fr: "Recettes publiques totales" },
          points: [{ x: "2022", y: 14.0 }, { x: "2025", y: 16.5 }] }
      ],
      insight: {
        en: "Two and a half points of GDP in three years, under the Domestic Resource Mobilization Strategy — and it is a different measure from the budget share above, which is why the two must never be plotted together. Revenue reached US$846.7 million, US$42 million above target. The honest qualifier the VNR itself supplies: tax revenue alone is still only 13.5% of GDP, a modest tax effort by regional standards, so the gain rests as much on collection discipline as on a broader base.",
        fr: "Deux points et demi de PIB en trois ans, au titre de la Stratégie de mobilisation des ressources intérieures — et il s'agit d'une mesure distincte de la part du budget ci-dessus, raison pour laquelle les deux ne doivent jamais figurer sur le même graphique. Les recettes ont atteint 846,7 millions de dollars, soit 42 millions de plus que la cible. La nuance que la RNV apporte elle-même : les seules recettes fiscales ne représentent encore que 13,5 % du PIB, un effort fiscal modeste à l'échelle régionale ; le progrès tient donc autant à la discipline du recouvrement qu'à l'élargissement de l'assiette."
      },
      source: "VNR 2026, Table 15 · SDG indicator 17.1.1" },

    { id: "debt_service", type: "line", sdg: 17,
      title: { en: "Debt service, % of export earnings", fr: "Service de la dette, en % des recettes d'exportation" },
      unit: "% of exports",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "debt_service", label: { en: "Debt service", fr: "Service de la dette" },
          points: [{ x: "2022", y: 18 }, { x: "2025", y: 23 }] }
      ],
      insight: {
        en: "The price of the story on the other charts. Public debt itself is comfortable — 51.9% of GDP, below the 60% ceiling in Liberia's own PFM Regulations — but the cost of servicing it has climbed five points of export earnings in three years, at the exact moment aid receipts contracted. Debt sustainability here is not a stock problem but a cash-flow one, and the VNR names it as such rather than resting on the reassuring headline ratio.",
        fr: "C'est le prix de ce que racontent les autres graphiques. L'encours de la dette est lui-même soutenable — 51,9 % du PIB, sous le plafond de 60 % fixé par la réglementation libérienne des finances publiques — mais son coût de service a progressé de cinq points de recettes d'exportation en trois ans, au moment précis où l'aide se contractait. La soutenabilité de la dette n'est pas ici un problème d'encours mais de trésorerie, et la RNV le nomme comme tel plutôt que de s'abriter derrière un ratio rassurant."
      },
      source: "VNR 2026 · SDG indicator 17.4.1" },

    { id: "inflation", type: "gap", sdg: 8,
      title: { en: "Headline inflation, start of the review period vs. end-2025", fr: "Inflation globale : début de la période de revue et fin 2025" },
      unit: "%",
      items: [
        { label: { en: "Inflation, start of the review period", fr: "Inflation, début de la période de revue" }, value: 12.8, emphasis: false },
        { label: { en: "Inflation, end-2025", fr: "Inflation, fin 2025" }, value: 4.0, emphasis: true }
      ],
      insight: {
        en: "The most consequential number in the review for ordinary households, and the one most easily lost behind the fiscal aggregates. Inflation fell by nearly nine percentage points; the Central Bank of Liberia independently confirms end-December 2025 at 4.0%, on exchange-rate stability and softer food and fuel prices. This is what makes real GDP growth of 5.1% legible as income rather than as an accounting artefact — and it is the precondition for the Youth Entrepreneurship Investment Bank's lending to mean anything.",
        fr: "C'est le chiffre le plus lourd de conséquences pour les ménages ordinaires, et celui que les agrégats budgétaires font le plus aisément disparaître. L'inflation a reculé de près de neuf points de pourcentage ; la Banque centrale du Libéria confirme de son côté un taux de 4,0 % à fin décembre 2025, grâce à la stabilité du taux de change et à la détente des prix alimentaires et des carburants. C'est ce qui rend une croissance réelle de 5,1 % lisible comme un revenu et non comme un artefact comptable — et c'est la condition pour que les prêts de la Banque de l'entrepreneuriat des jeunes signifient quelque chose."
      },
      source: "VNR 2026 factsheet · Central Bank of Liberia, Q4 2025 monetary policy statement" }
  ],

  instruments: [
    { name: { en: "ARREST Agenda for Inclusive Development (AAID)", fr: "Agenda ARREST pour un développement inclusif (AAID)" },
      kicker: { en: "national plan, 2025–2029", fr: "plan national, 2025-2029" },
      text: {
        en: "Liberia runs no separate SDG tracker. The 2030 Agenda is carried inside the country's own plan, built on six pillars — agriculture, roads, rule of law, education, sanitation and health, and tourism — each led by a champion ministry and coordinated through a National Steering Committee. The AAID sits under Liberia Vision 2035 and carries the thirteen goals reviewed in depth in 2026. One plan, one reporting line.",
        fr: "Le Libéria ne tient pas de dispositif de suivi distinct des ODD. L'Agenda 2030 est porté par le plan national lui-même, bâti sur six piliers — agriculture, routes, État de droit, éducation, assainissement et santé, tourisme — chacun placé sous la responsabilité d'un ministère chef de file et coordonné par un comité de pilotage national. L'AAID s'inscrit dans la Vision 2035 du Libéria et porte les treize objectifs examinés en profondeur en 2026. Un seul plan, une seule chaîne de reporting."
      },
      source: "VNR 2026 · ARREST Agenda for Inclusive Development 2025–2029" },
    { name: { en: "Domestic Resource Mobilization Strategy", fr: "Stratégie de mobilisation des ressources intérieures" },
      kicker: { en: "65% → 72% of the budget", fr: "65 % → 72 % du budget" },
      text: {
        en: "The engine of the fiscal-sovereignty claim: digitized tax systems, a broader base and disciplined spending lifted revenue from about 14% to 16.5% of GDP and delivered a surplus above target. It was designed before the January 2025 suspension of USAID assistance and ended up absorbing it.",
        fr: "Le moteur de la souveraineté budgétaire : la numérisation des systèmes fiscaux, l'élargissement de l'assiette et la discipline des dépenses ont porté les recettes d'environ 14 % à 16,5 % du PIB et dégagé un excédent supérieur à la cible. Conçue avant la suspension de l'aide de l'USAID en janvier 2025, elle a fini par en amortir le choc."
      },
      source: "VNR 2026, Table 15 · DRM Strategy 2024–2029" },
    { name: { en: "Youth Entrepreneurship Investment Bank (YEIB)", fr: "Banque d'investissement pour l'entrepreneuriat des jeunes (YEIB)" },
      kicker: { en: "target: 30,000 businesses", fr: "cible : 30 000 entreprises" },
      text: {
        en: "Launched in July 2025 with US$16 million from the African Development Bank — the first youth bank of its kind in Africa. The Government's stated goal is to back 30,000 youth-led businesses and generate more than 120,000 direct and indirect jobs. That target, not a stock of businesses already financed, is what the factsheet's \"30,000\" refers to; the distinction is worth keeping.",
        fr: "Lancée en juillet 2025 avec 16 millions de dollars de la Banque africaine de développement — la première banque de ce type consacrée aux jeunes en Afrique. L'objectif affiché par le Gouvernement est de soutenir 30 000 entreprises portées par des jeunes et de créer plus de 120 000 emplois directs et indirects. C'est à cette cible, et non à un portefeuille déjà financé, que renvoient les « 30 000 » de la fiche : la distinction mérite d'être maintenue."
      },
      source: "African Development Bank · Ministry of Finance and Development Planning, July 2025" },
    { name: { en: "Debt audit & governance reform", fr: "Audit de la dette et réforme de la gouvernance" },
      kicker: { en: "unsupported claims rejected", fr: "créances non justifiées rejetées" },
      text: {
        en: "The quiet centrepiece of Liberia's SDG 16 story, and the reason its accounting can be taken at face value elsewhere. A debt audit rejected claims that could not be substantiated, reform uptake nearly tripled, and Liberia rose to 70th of 163 countries on the 2025 Global Peace Index — 10th in Africa, up six places.",
        fr: "La pièce maîtresse discrète du récit libérien sur l'ODD 16, et la raison pour laquelle sa comptabilité peut être prise au sérieux ailleurs. Un audit de la dette a rejeté les créances qui ne pouvaient être justifiées, l'adoption des réformes a presque triplé et le Libéria s'est hissé au 70e rang sur 163 pays dans l'Indice mondial de la paix 2025 — 10e en Afrique, en progression de six places."
      },
      source: "VNR 2026 factsheet · Institute for Economics & Peace, Global Peace Index 2025" },
    { name: { en: "NDC 3.0 & the first National Carbon Policy", fr: "CDN 3.0 et première politique nationale du carbone" },
      kicker: { en: "climate as livelihood", fr: "le climat comme moyen de subsistance" },
      text: {
        en: "Liberia advanced its third Nationally Determined Contribution, adopted a first National Carbon Policy and established a National Carbon Market Secretariat in 2025. The framing is deliberately economic rather than atmospheric: women-led savings associations and rural livelihoods are the delivery mechanism, which is how emissions cuts are meant to survive a budget cycle.",
        fr: "Le Libéria a fait progresser sa troisième contribution déterminée au niveau national, adopté une première politique nationale du carbone et créé en 2025 un secrétariat national du marché carbone. Le cadrage est délibérément économique plutôt qu'atmosphérique : les associations d'épargne dirigées par des femmes et les moyens de subsistance ruraux en sont le vecteur de mise en œuvre — c'est ainsi que la réduction des émissions est censée survivre à un cycle budgétaire."
      },
      source: "VNR 2026 factsheet · VNR 2026" },
    { name: { en: "IMF Extended Credit Facility", fr: "Facilité élargie de crédit du FMI" },
      kicker: { en: "debt at 51.9% of GDP", fr: "dette à 51,9 % du PIB" },
      text: {
        en: "Public debt of US$2.7 billion is held below the 60%-of-GDP threshold set in Liberia's own Public Financial Management Regulations, under an active IMF programme. The binding constraint is not the stock but the flow: debt service now takes 23% of export earnings, up from 18%, while aid receipts fall.",
        fr: "Une dette publique de 2,7 milliards de dollars est maintenue sous le seuil de 60 % du PIB fixé par la réglementation libérienne des finances publiques, dans le cadre d'un programme actif du FMI. La contrainte n'est pas l'encours mais le flux : le service de la dette absorbe désormais 23 % des recettes d'exportation, contre 18 %, alors même que l'aide reflue."
      },
      source: "VNR 2026 · SDG indicator 17.4.1" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        en: "The old dashboard headlined electricity access at 36% and wrote that it \"rose from 31.8% in 2022 to 36% by 2024\" — but its own chart plotted that 36% at 2025, and the factsheet reports 37%.",
        fr: "L'ancien tableau de bord affichait un accès à l'électricité de 36 % et indiquait qu'il était « passé de 31,8 % en 2022 à 36 % en 2024 » — alors que son propre graphique plaçait ces 36 % en 2025, et que la fiche indique 37 %."
      },
      resolution: {
        en: "Four figures circulate for the same indicator and the same year: 37% (VNR 2026 factsheet), 38% (Liberia Electricity Corporation), 36% (old dashboard) and 32.7% (World Bank / Mission 300 Energy Compact, which splits it into 25% grid and 7.7% off-grid). The factsheet's 37% is used as the headline, the spread is shown on its own chart rather than concealed, and the caption's year error is dropped. Nothing in Liberia's argument depends on which of these is right — all four say the same thing.",
        fr: "Quatre chiffres circulent pour le même indicateur et la même année : 37 % (fiche RNV 2026), 38 % (Liberia Electricity Corporation), 36 % (ancien tableau de bord) et 32,7 % (Banque mondiale / Pacte énergétique Mission 300, qui les décompose en 25 % de raccordements au réseau et 7,7 % hors réseau). Les 37 % de la fiche servent d'indicateur de tête, l'écart est exposé sur un graphique dédié plutôt que dissimulé, et l'erreur d'année de la légende est supprimée. Rien dans l'argumentaire libérien ne dépend de celui de ces chiffres qui a raison : tous quatre disent la même chose."
      } },
    { severity: "contradiction",
      issue: {
        en: "In the \"Debt & Revenue\" tab, both charts plotted values that contradicted their own printed labels. The debt-service line's final point was drawn above the 24% gridline — roughly 27.8% — while labelled 23%. The revenue line's final point was drawn at 18.0% of GDP while labelled 16.5%.",
        fr: "Dans l'onglet « Dette et recettes », les deux graphiques traçaient des valeurs contredisant leurs propres étiquettes. Le dernier point de la courbe du service de la dette était dessiné au-dessus de la ligne des 24 % — environ 27,8 % — tout en étant libellé 23 %. Le dernier point de la courbe des recettes était tracé à 18,0 % du PIB tout en étant libellé 16,5 %."
      },
      resolution: {
        en: "The full-size versions of the same two series in the Overview tab were drawn correctly (18% → 23% of exports; 14.0% → 16.5% of GDP), so the underlying data was sound and only the second rendering was wrong: the point coordinates had been computed against one axis scale and the gridlines labelled for another. The correct values are 23% and 16.5%. Both series are now generated from the data layer, so a point cannot land somewhere its label denies.",
        fr: "Les versions grand format de ces deux mêmes séries, dans l'onglet « Vue d'ensemble », étaient tracées correctement (18 % → 23 % des exportations ; 14,0 % → 16,5 % du PIB) : les données étaient donc justes et seul le second rendu était faux — les coordonnées des points avaient été calculées sur une échelle et les lignes de repère libellées pour une autre. Les valeurs exactes sont 23 % et 16,5 %. Les deux séries sont désormais générées depuis la couche de données : un point ne peut plus se poser là où son étiquette le nie."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard's \"2026 Focus Goals\" were SDG 6, 7, 9, 11 and 17 — the identical set shown for every other country in the template — while Liberia's six review themes are SDG 4, 8, 9, 13, 16 and 17.",
        fr: "Les « objectifs prioritaires 2026 » du tableau de bord étaient les ODD 6, 7, 9, 11 et 17 — exactement le même jeu que pour tous les autres pays du gabarit — alors que les six thèmes de la revue libérienne sont les ODD 4, 8, 9, 13, 16 et 17."
      },
      resolution: {
        en: "Only SDG 9 and 17 actually overlap. The consequence was severe: education, decent work, climate action and peace — four of Liberia's six themes — were absent, and with them every headline number the country chose to lead with (inflation down to 4.0%, the Youth Entrepreneurship Investment Bank, school feeding for 239,000 students, the debt audit). The themes are now taken from the factsheet, and the goal tiles follow the themes rather than the template.",
        fr: "Seuls les ODD 9 et 17 se recoupent réellement. La conséquence était lourde : l'éducation, le travail décent, l'action climatique et la paix — quatre des six thèmes libériens — étaient absents, et avec eux tous les chiffres phares que le pays avait choisi de mettre en avant (l'inflation ramenée à 4,0 %, la Banque d'investissement pour l'entrepreneuriat des jeunes, l'alimentation scolaire pour 239 000 élèves, l'audit de la dette). Les thèmes sont désormais repris de la fiche, et les vignettes d'objectifs suivent les thèmes et non le gabarit."
      } },
    { severity: "contradiction",
      issue: {
        en: "Roads: the factsheet reports \"over 680 km of roads improved\", while the dashboard reported 121.6 km of primary and 231.69 km of secondary roads — 353 km, about half.",
        fr: "Routes : la fiche fait état de « plus de 680 km de routes améliorés », tandis que le tableau de bord recensait 121,6 km de routes primaires et 231,69 km de routes secondaires, soit 353 km — environ la moitié."
      },
      resolution: {
        en: "The two count different road classes. The ARREST Agenda's own published target is a minimum of 485 km of primary roads, which sits between them and rules out neither. The factsheet's 680 km evidently includes feeder and community roads that the dashboard's primary/secondary split excludes. The 680 km figure is retained as the factsheet's, with the narrower breakdown stated in the note rather than presented as a rival total. The spurious precision of \"231.69 km\" has been dropped.",
        fr: "Les deux chiffres ne comptent pas les mêmes catégories de routes. La cible publiée de l'Agenda ARREST est d'au moins 485 km de routes primaires, ce qui se situe entre les deux et n'exclut ni l'un ni l'autre. Les 680 km de la fiche incluent manifestement des pistes de desserte et des routes communautaires que la ventilation primaire/secondaire du tableau de bord laisse de côté. Le chiffre de 680 km est conservé comme celui de la fiche, la ventilation plus étroite étant mentionnée en note plutôt que présentée comme un total concurrent. La précision illusoire du « 231,69 km » a été supprimée."
      } },
    { severity: "mislabel",
      issue: {
        en: "The electricity chart carried a dashed reference line annotated \"not on track for the SDG 7 2030 target\" — drawn at 28%, below the 36% the same chart plotted.",
        fr: "Le graphique de l'électricité comportait une ligne de repère en pointillés annotée « pas en voie d'atteindre la cible ODD 7 de 2030 » — tracée à 28 %, soit en dessous des 36 % que le même graphique traçait."
      },
      resolution: {
        en: "A threshold line below the current value cannot mean what it says: on that reading Liberia would already have passed the target it is said to be missing. The SDG 7.1 target is universal access by 2030 — 100%, not 28%. The line was a template artefact and has been removed. The VNR's actual statement, that Liberia is not on track for SDG 7, is retained in words, where it is true.",
        fr: "Une ligne de seuil située sous la valeur courante ne peut signifier ce qu'elle affirme : à la lire ainsi, le Libéria aurait déjà dépassé la cible qu'il est censé manquer. La cible de l'ODD 7.1 est l'accès universel d'ici à 2030 — 100 %, et non 28 %. Cette ligne était un résidu de gabarit ; elle a été supprimée. L'affirmation réelle de la RNV — le Libéria n'est pas en voie d'atteindre l'ODD 7 — est conservée sous forme de texte, où elle est exacte."
      } },
    { severity: "mislabel",
      issue: {
        en: "The \"Financing sources at a glance\" panel set four shares side by side — domestic revenue 16.5%, net ODA ~12%, remittances 11.2% (all % of GDP) and FDI inflows 4.2% (% of the budget) — under a subtitle that admitted \"shares expressed against different bases\".",
        fr: "Le panneau « Sources de financement en un coup d'œil » juxtaposait quatre parts — recettes intérieures 16,5 %, APD nette environ 12 %, envois de fonds 11,2 % (toutes en % du PIB) et IDE 4,2 % (en % du budget) — sous un sous-titre reconnaissant que « les parts sont exprimées sur des bases différentes »."
      },
      resolution: {
        en: "Admitting a comparison is invalid in the subtitle does not make it valid. Four bars of the same length and colour are read as comparable whatever the caption says. \"FDI as a share of the budget\" is not a standard measure and could not be traced to a citable source, so it has been dropped; the remaining figures, all shares of GDP, appear as separate labelled indicators rather than as one visual ranking.",
        fr: "Reconnaître dans le sous-titre qu'une comparaison est invalide ne la valide pas. Quatre barres de même longueur et de même couleur sont lues comme comparables, quoi qu'en dise la légende. « L'IDE en part du budget » n'est pas une mesure standard et n'a pu être rattaché à une source citable : il a été supprimé. Les chiffres restants, tous exprimés en part du PIB, apparaissent comme des indicateurs distincts et libellés, et non comme un classement visuel unique."
      } },
    { severity: "corrected",
      issue: {
        en: "The factsheet states that the Youth Entrepreneurship Bank \"backs 30,000 businesses\" — present tense, as an accomplished fact.",
        fr: "La fiche indique que la Banque de l'entrepreneuriat des jeunes « soutient 30 000 entreprises » — au présent, comme un fait accompli."
      },
      resolution: {
        en: "The Youth Entrepreneurship Investment Bank was launched in July 2025 with US$16 million from the African Development Bank, the first of its kind in Africa. Both the Government and the AfDB describe 30,000 youth-led businesses and 120,000 jobs as the bank's target, not as businesses already financed. The figure is retained with the tense corrected — a stated objective of a bank a few months old, which is still a substantial thing to report.",
        fr: "La Banque d'investissement pour l'entrepreneuriat des jeunes a été lancée en juillet 2025 avec 16 millions de dollars de la Banque africaine de développement, la première du genre en Afrique. Le Gouvernement comme la BAD présentent les 30 000 entreprises portées par des jeunes et les 120 000 emplois comme la cible de la banque, et non comme un portefeuille déjà financé. Le chiffre est conservé, le temps du verbe corrigé : c'est l'objectif déclaré d'une banque vieille de quelques mois — ce qui reste considérable à rapporter."
      } },
    { severity: "corrected",
      issue: {
        en: "Two of the factsheet's headline claims looked implausible enough to need external adjudication: inflation falling from 12.8% to 4.0%, and a top-ten peace ranking in Africa.",
        fr: "Deux affirmations phares de la fiche paraissaient assez peu vraisemblables pour exiger une vérification externe : le recul de l'inflation de 12,8 % à 4,0 % et un classement parmi les dix pays les plus pacifiques d'Afrique."
      },
      resolution: {
        en: "Both stand. The Central Bank of Liberia puts end-December 2025 inflation at 4.0% (Q4 average 4.4%), attributing the fall to exchange-rate stability and lower food and fuel prices. The 2025 Global Peace Index places Liberia 70th of 163 countries and 10th in Africa, up six places. Both are cited to source rather than to the factsheet alone.",
        fr: "Les deux se vérifient. La Banque centrale du Libéria situe l'inflation à 4,0 % à fin décembre 2025 (moyenne du quatrième trimestre : 4,4 %) et attribue ce recul à la stabilité du taux de change et à la baisse des prix alimentaires et des carburants. L'Indice mondial de la paix 2025 classe le Libéria au 70e rang sur 163 pays et au 10e en Afrique, en progression de six places. Les deux sont désormais cités à la source, et non plus à la seule fiche."
      } },
    { severity: "unverified",
      issue: {
        en: "The dashboard reported that the Liberia Water and Sewer Corporation lifted production \"from 700 to 846 million gallons\" — dated 2024→2025 on its chart and \"over the period\" (2022–2025) in the prose beside it, with no time base given for the volume.",
        fr: "Le tableau de bord indiquait que la Liberia Water and Sewer Corporation avait porté sa production « de 700 à 846 millions de gallons » — daté 2024-2025 sur son graphique et « sur la période » (2022-2025) dans le texte adjacent, sans que la base temporelle du volume soit précisée."
      },
      resolution: {
        en: "A volume without a period (per day? per year?) is not an indicator, and the same figure cannot describe both one year and four. Liberia's factsheet contains no SDG 6 theme, so nothing in the review depends on it. It has been dropped rather than reproduced with a citation it cannot support.",
        fr: "Un volume sans période (par jour ? par an ?) n'est pas un indicateur, et un même chiffre ne peut décrire à la fois une année et quatre. La fiche libérienne ne comporte aucun thème relatif à l'ODD 6 : rien dans la revue n'en dépend. Il a été supprimé plutôt que reproduit avec une citation qu'il ne peut étayer."
      } },
    { severity: "corrected",
      issue: {
        en: "In the text extraction of the factsheet, the nine concept-frequency counts are separated from their labels, and \"& audit\" floats between \"accountability\" and \"agriculture\".",
        fr: "Dans l'extraction textuelle de la fiche, les neuf fréquences de concepts sont séparées de leurs libellés, et « et audit » flotte entre « redevabilité » et « agriculture »."
      },
      resolution: {
        en: "The counts were re-read from the PDF by column position rather than from the text extract: digital & tax systems 9, investment 9, domestic resource mobilization 6, climate & NDC 5, fiscal sovereignty 5, accountability & audit 4, agriculture 4, growth 4, nationally owned 4. \"& audit\" belongs to \"accountability\"; \"agriculture\" stands alone. Bars are strictly proportional to these counts.",
        fr: "Les fréquences ont été relues dans le PDF d'après la position des colonnes, et non d'après l'extraction textuelle : systèmes numériques et fiscaux 9, investissement 9, mobilisation des ressources intérieures 6, climat et CDN 5, souveraineté budgétaire 5, redevabilité et audit 4, agriculture 4, croissance 4, appropriation nationale 4. « Et audit » se rattache à « redevabilité » ; « agriculture » se tient seul. Les barres sont strictement proportionnelles à ces valeurs."
      } }
  ]
});
