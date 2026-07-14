/* Togo — VNR 2022 → 2026. Source factsheet authored in FRENCH, so the French is the
   source wording and the English is the translation.
   Fact-checked against the OSAA factsheet (Togo page), the old "Togo Dashboard.dc.html",
   UNDP's 2025 Human Development Report, the Togolese Revenue Office (OTR) via Togo First
   and Agence Ecofin, the ministries of Energy and of Water, and WAEMU convergence rules.
   See `factcheck` at the bottom. */
window.VNR.register({
  slug: "togo",
  iso: "TG",
  name: { en: "Togo", fr: "Togo" },
  region: "west",
  vnrPrev: 2022,
  vnrCycles: [2022, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/togo.pdf",

  tagline: {
    fr: "La feuille de route gouvernementale au service de l'Agenda 2030 : Protéger, Rassembler et Transformer.",
    en: "The government roadmap in the service of the 2030 Agenda: Protect, Bring Together, Transform."
  },

  themes: [
    { sdg: 6,
      title: { fr: "Eau potable et assainissement", en: "Drinking Water & Sanitation" },
      text: {
        fr: "1,8 million de personnes rapprochées d'un point d'eau ; desserte en eau potable de 71 % et assainissement de 40 % des bassins versants de Lomé.",
        en: "1.8 million people brought closer to a water point; drinking-water coverage of 71% and sanitation across 40% of Lomé's watersheds."
      } },
    { sdg: 7,
      title: { fr: "Accès à l'énergie élargi", en: "Broadened Energy Access" },
      text: {
        fr: "Accès à l'électricité porté de 50 % à 75,6 %, capacité de 170 à 355 MW, renouvelables de 19 % à 38 % et 633 298 ménages électrifiés.",
        en: "Electricity access raised from 50% to 75.6%, capacity from 170 to 355 MW, renewables from 19% to 38%, and 633,298 households electrified."
      } },
    { sdg: 8,
      title: { fr: "Croissance soutenue et stabilité", en: "Sustained Growth & Stability" },
      text: {
        fr: "Croissance moyenne de 5,1 % (6,2 % en 2025), inflation maîtrisée à 0,4 % et IDH de 0,571 : le Togo rejoint les pays à développement humain moyen.",
        en: "Average growth of 5.1% (6.2% in 2025), inflation held to 0.4% and an HDI of 0.571: Togo joins the medium human development group."
      } },
    { sdg: 9,
      title: { fr: "Hub logistique et numérique", en: "Logistics & Digital Hub" },
      text: {
        fr: "Plateforme industrielle d'Adétikopé — zone industrielle près de Lomé (12 unités, 3 500 emplois) ; 300+ démarches digitalisées ; Data Center Tier 3 ; 2e catégorie mondiale selon l'Indice GovTech (Banque mondiale).",
        en: "The Adétikopé Industrial Platform — an industrial zone near Lomé (12 units, 3,500 jobs); 300+ digitised administrative procedures; a Tier 3 data centre; second world category on the World Bank's GovTech Index."
      } },
    { sdg: 11,
      title: { fr: "Habitat sûr et résilient", en: "Safe & Resilient Housing" },
      text: {
        fr: "Délai de délivrance des titres fonciers réduit de 60 à 6 mois, 1,9 million de tonnes de déchets collectées et procédures foncières digitalisées.",
        en: "Land-title issuance cut from 60 months to 6, 1.9 million tonnes of waste collected, and land procedures digitised."
      } },
    { sdg: 17,
      title: { fr: "Moyens de mise en œuvre renforcés", en: "Strengthened Means of Implementation" },
      text: {
        fr: "Hausse de 50 % du Salaire minimum interprofessionnel garanti, nouveau code du travail pro-investissement, dématérialisation des procédures et cadre de concertation État–secteur privé.",
        en: "A 50% rise in the guaranteed inter-professional minimum wage (SMIG), a new investment-friendly labour code, dematerialised procedures, and a State–private sector consultation framework."
      } }
  ],

  continuity: [
    { prev: { fr: "ODD 17 : diaspora, PPP et secteur privé", en: "SDG 17: diaspora, PPPs and the private sector" },
      status: "sustained",
      now: { fr: "Moyens de mise en œuvre renforcés (SMIG +50 %, PPP)", en: "Strengthened means of implementation (minimum wage +50%, PPPs)" } },
    { prev: { fr: "ODD 4 : gratuité scolaire (94,3 % scolarisés)", en: "SDG 4: free schooling (94.3% enrolment)" },
      status: "evolved",
      now: { fr: "Eau potable et accès à l'énergie (ODD 6 et 7)", en: "Drinking water and energy access (SDGs 6 and 7)" } },
    { prev: { fr: "ODD 14-15 : reboisement et érosion côtière", en: "SDGs 14-15: reforestation and coastal erosion" },
      status: "evolved",
      now: { fr: "Villes durables et habitat résilient (ODD 11)", en: "Sustainable cities and resilient housing (SDG 11)" } },
    { prev: { fr: "ODD 14 : port sec d'Adétikopé et littoral", en: "SDG 14: the Adétikopé dry port and the coastline" },
      status: "sustained",
      now: { fr: "Hub logistique et numérique d'excellence (ODD 9)", en: "A logistics and digital hub of excellence (SDG 9)" } },
    { prev: { fr: "ODD 5 : femmes au gouvernement (34,3 %)", en: "SDG 5: women in government (34.3%)" },
      status: "evolved",
      now: { fr: "Croissance inclusive et IDH moyen (0,571)", en: "Inclusive growth and medium HDI (0.571)" } }
  ],

  concepts: {
    caption: {
      fr: "Le Togo articule sa revue autour de la croissance, de l'énergie, de l'eau et d'un hub régional.",
      en: "Togo frames its review around growth, energy, water and a regional hub."
    },
    items: [
      { label: { fr: "emploi et services", en: "jobs & services" }, value: 9 },
      { label: { fr: "eau et assainissement", en: "water & sanitation" }, value: 8 },
      { label: { fr: "énergie et électricité", en: "energy & electricity" }, value: 7 },
      { label: { fr: "foncier et habitat", en: "land & housing" }, value: 6 },
      { label: { fr: "gouvernance", en: "governance" }, value: 6 },
      { label: { fr: "industrie et hub", en: "industry & hub" }, value: 6 },
      { label: { fr: "infrastructure numérique", en: "digital infrastructure" }, value: 6 },
      { label: { fr: "croissance", en: "growth" }, value: 4 },
      { label: { fr: "partenariats", en: "partnerships" }, value: 3 }
    ]
  },

  indicators: [
    { id: "elec_access", sdg: 7,
      label: { fr: "Accès à l'électricité, taux national", en: "Electricity access, national rate" },
      value: 75.6, unit: "%",
      note: { fr: "Contre 50 % en 2020. Taux national toutes sources confondues : ce n'est pas un taux de raccordement au réseau, et la fiche ne publie pas de ventilation urbain/rural.",
              en: "Up from 50% in 2020. A national rate covering all sources — it is not a grid-connection rate, and the factsheet gives no urban/rural split." },
      source: "Fiche RNV 2026 (OSAA) · ministère de l'Énergie et des Mines, Togo (2025)" },
    { id: "elec_capacity", sdg: 7,
      label: { fr: "Capacité de production installée", en: "Installed generation capacity" },
      value: 355, unit: " MW",
      note: { fr: "Contre 170 MW en 2020 : la capacité a plus que doublé. À distinguer du taux d'accès, qui est une part de population.",
              en: "Up from 170 MW in 2020 — capacity more than doubled. Not to be confused with the access rate, which is a share of the population." },
      source: "Fiche RNV 2026 (OSAA)" },
    { id: "renewables", sdg: 7,
      label: { fr: "Part des renouvelables dans le mix électrique", en: "Renewables in the electricity mix" },
      value: 38, unit: "%",
      note: { fr: "Contre 19 % en 2020. Part du mix électrique, et non part de la population desservie par des renouvelables.",
              en: "Up from 19% in 2020. A share of the electricity mix, not a share of the population served by renewables." },
      source: "Fiche RNV 2026 (OSAA)" },
    { id: "households", sdg: 7,
      label: { fr: "Ménages électrifiés", en: "Households electrified" },
      value: 633298, unit: "",
      note: { fr: "Chiffre cumulé de la fiche. Il agrège raccordements au réseau et kits solaires hors réseau, sans en publier la ventilation.",
              en: "The cumulative figure given on the factsheet. It aggregates grid connections and off-grid solar kits, without publishing the split." },
      source: "Fiche RNV 2026 (OSAA)" },
    { id: "water", sdg: 6,
      label: { fr: "Desserte en eau potable, taux national", en: "Drinking-water coverage, national rate" },
      value: 71, unit: "%",
      note: { fr: "Contre 60 % en 2020 ; 1,8 million de personnes « rapprochées d'un point d'eau » — une proximité, non un raccordement au domicile.",
              en: "Up from 60% in 2020; 1.8 million people \"brought closer to a water point\" — proximity, not a household connection." },
      source: "Fiche RNV 2026 (OSAA) · ministère de l'Eau et de l'Hydraulique villageoise (72 % en 2025)" },
    { id: "sanitation_lome", sdg: 6,
      label: { fr: "Assainissement, bassins versants de Lomé", en: "Sanitation, Lomé's watersheds" },
      value: 40, unit: "%",
      note: { fr: "Le seul chiffre d'assainissement de la fiche, et il porte sur la seule capitale — 31 points sous la desserte en eau.",
              en: "The only sanitation figure on the factsheet, and it covers the capital alone — 31 points below water coverage." },
      source: "Fiche RNV 2026 (OSAA)" },
    { id: "inflation", sdg: 8,
      label: { fr: "Inflation annuelle, 2025", en: "Annual inflation, 2025" },
      value: 0.4, unit: "%",
      note: { fr: "Plus bas niveau depuis plusieurs années, contre 2,9 % en 2024, sous la norme UEMOA de 3 %.",
              en: "The lowest level in several years, down from 2.9% in 2024 and well under the WAEMU 3% norm." },
      source: "Fiche RNV 2026 (OSAA) · INSEED, via Togo First (janvier 2026)" },
    { id: "tax_ratio", sdg: 17,
      label: { fr: "Taux de pression fiscale, % du PIB", en: "Tax-to-GDP ratio" },
      value: 13.1, unit: "%",
      note: { fr: "Absent de la fiche, corroboré à l'extérieur. Reste très en deçà de la norme de convergence UEMOA/CEDEAO de 20 % du PIB.",
              en: "Not on the factsheet; corroborated externally. It remains far below the 20%-of-GDP WAEMU/ECOWAS convergence norm." },
      source: "Office togolais des recettes, via Togo First et Agence Ecofin (2025)" },
    { id: "land_title", sdg: 11,
      label: { fr: "Délai de délivrance d'un titre foncier (mois)", en: "Time to issue a land title (months)" },
      value: 6, unit: "",
      note: { fr: "Contre 60 mois auparavant : une division par dix, portée par la digitalisation des procédures foncières.",
              en: "Down from 60 months — a tenfold reduction, driven by the digitisation of land procedures." },
      source: "Fiche RNV 2026 (OSAA)" },
    { id: "women_gov", sdg: 5,
      label: { fr: "Femmes au gouvernement", en: "Women in government" },
      value: 34.3, unit: "%",
      note: { fr: "Acquis du cycle 2022, reconduit dans la revue 2026 sous l'angle de la croissance inclusive.",
              en: "A gain from the 2022 cycle, carried into the 2026 review under the heading of inclusive growth." },
      source: "Fiche RNV 2026 (OSAA)" }
  ],

  charts: [
    { id: "elec_access", type: "line", sdg: 7,
      title: { fr: "Accès à l'électricité, taux national, en %", en: "Electricity access, national rate, %" },
      unit: "%",
      xLabel: { fr: "Année", en: "Year" },
      series: [
        { key: "access", label: { fr: "Accès à l'électricité, taux national", en: "Electricity access, national rate" },
          points: [{ x: "2020", y: 50 }, { x: "2025", y: 75.6 }] }
      ],
      insight: {
        fr: "Plus de vingt-cinq points en cinq ans : c'est l'une des progressions les plus rapides de la cohorte, et le ministère de l'Énergie confirme un taux dépassant 75 % fin 2025. Deux précautions s'imposent néanmoins. Il s'agit d'un taux national toutes sources confondues — la fiche ne publie aucune ventilation urbain/rural, et le dernier quart de la population non desservi est, par construction, le plus rural et le plus coûteux à atteindre. Et les 633 298 ménages électrifiés mêlent raccordements au réseau et kits solaires autonomes, deux niveaux de service très différents que le chiffre unique confond.",
        en: "More than twenty-five points in five years — one of the fastest gains in the cohort, and the Ministry of Energy confirms a rate above 75% at the end of 2025. Two cautions follow. This is a national rate covering all sources: the factsheet publishes no urban/rural split, and the remaining quarter of the population is, by construction, the most rural and the most expensive to reach. And the 633,298 households electrified mix grid connections with stand-alone solar kits — two very different levels of service that a single number collapses into one."
      },
      source: "Fiche RNV 2026 (OSAA) · ministère de l'Énergie et des Mines, Togo (2025)" },

    { id: "elec_capacity", type: "gap", sdg: 7,
      title: { fr: "Capacité de production installée, en MW", en: "Installed generation capacity, MW" },
      unit: " MW",
      items: [
        { label: { fr: "Capacité installée, 2020", en: "Installed capacity, 2020" }, value: 170, emphasis: false },
        { label: { fr: "Capacité installée, 2025", en: "Installed capacity, 2025" }, value: 355, emphasis: true }
      ],
      insight: {
        fr: "Les trois chiffres énergétiques du Togo — l'accès (%), la capacité (MW) et la part des renouvelables (%) — se mesurent en trois unités différentes, et c'est exactement ce que l'ancien tableau de bord avait ignoré : il traçait « 170 → 355 MW » sur une barre graduée de 0 à 100 %, où elle débordait à 109 % de sa propre piste. Ramenée à son échelle, la capacité raconte l'histoire qui compte : elle a plus que doublé en cinq ans, plus vite encore que le taux d'accès, ce qui est le bon ordre des choses — on ne raccorde pas des ménages à une électricité que l'on ne produit pas. Mais elle a doublé depuis une base si faible que 355 MW doivent encore alimenter un pays entier.",
        en: "Togo's three energy figures — access (%), capacity (MW) and renewable share (%) — are measured in three different units, and that is precisely what the old dashboard ignored: it plotted \"170 → 355 MW\" on a bar scaled from 0 to 100%, where it overflowed its own track at 109% width. Restored to its own scale, capacity tells the story that matters: it more than doubled in five years, faster than the access rate itself, which is the right order of events — you cannot connect households to electricity you do not generate. But it doubled from a base so low that 355 MW must still power an entire country."
      },
      source: "Fiche RNV 2026 (OSAA)" },

    { id: "renewables", type: "gap", sdg: 7,
      title: { fr: "Part des renouvelables dans le mix électrique, en %", en: "Renewables in the electricity mix, %" },
      unit: "%",
      items: [
        { label: { fr: "Renouvelables, 2020", en: "Renewables, 2020" }, value: 19, emphasis: false },
        { label: { fr: "Renouvelables, 2025", en: "Renewables, 2025" }, value: 38, emphasis: true }
      ],
      insight: {
        fr: "La part des renouvelables a doublé en cinq ans, pendant que la capacité totale doublait elle aussi : la progression est donc réelle en part comme en volume, et non l'effet d'un dénominateur qui rétrécit. Deux réserves d'honnêteté. La fiche ne précise pas si ces 38 % désignent une part de la capacité installée ou une part de l'électricité effectivement produite — la distinction est loin d'être théorique, un mégawatt solaire produisant nettement moins de kilowattheures qu'un mégawatt thermique. Et une part du mix ne dit rien de qui reçoit le courant : elle se mesure sur la production, jamais sur la population.",
        en: "The renewable share doubled in five years while total capacity also doubled: the gain is therefore real in both share and volume, not the artefact of a shrinking denominator. Two honest caveats. The factsheet does not say whether the 38% is a share of installed capacity or of electricity actually generated — the distinction is far from academic, since a megawatt of solar delivers considerably fewer kilowatt-hours than a megawatt of thermal plant. And a share of the mix says nothing about who receives the power: it is measured on generation, never on people."
      },
      source: "Fiche RNV 2026 (OSAA)" },

    { id: "water_access", type: "line", sdg: 6,
      title: { fr: "Desserte en eau potable, taux national, en %", en: "Drinking-water coverage, national rate, %" },
      unit: "%",
      xLabel: { fr: "Année", en: "Year" },
      series: [
        { key: "water", label: { fr: "Desserte en eau potable, taux national", en: "Drinking-water coverage, national rate" },
          points: [{ x: "2020", y: 60 }, { x: "2025", y: 71 }] }
      ],
      insight: {
        fr: "Onze points en cinq ans, et 1,8 million de personnes concernées : la progression est solide et le ministère de l'Eau la confirme, à 72 % pour 2025. Le mot exact de la fiche mérite pourtant d'être lu : ces personnes ont été « rapprochées d'un point d'eau ». C'est une mesure de proximité, non de raccordement au domicile, et encore moins de service géré en toute sécurité au sens de l'indicateur 6.1.1. Le gain est authentique ; la métrique, elle, est généreuse — et elle explique pourquoi la desserte peut progresser vite là où l'assainissement, lui, ne bouge pas.",
        en: "Eleven points in five years, and 1.8 million people affected: the gain is solid, and the Ministry of Water confirms it at 72% for 2025. The factsheet's exact wording deserves reading, though: these people were \"brought closer to a water point\". That is a measure of proximity, not of a household connection, and still less of safely managed service in the sense of indicator 6.1.1. The gain is genuine; the metric is generous — and it explains how coverage can advance quickly where sanitation does not move at all."
      },
      source: "Fiche RNV 2026 (OSAA) · ministère de l'Eau et de l'Hydraulique villageoise (60 % en 2020 ; 72 % en 2025)" },

    { id: "wash_gap", type: "gap", sdg: 6,
      title: { fr: "L'eau avance, l'assainissement reste en arrière", en: "Water advances; sanitation lags behind" },
      unit: "%",
      items: [
        { label: { fr: "Desserte en eau potable, national", en: "Drinking-water coverage, national" }, value: 71, emphasis: false },
        { label: { fr: "Assainissement, bassins versants de Lomé", en: "Sanitation, Lomé's watersheds" }, value: 40, emphasis: true }
      ],
      insight: {
        fr: "La fiche place ces deux chiffres dans la même phrase, mais ils ne se mesurent pas sur la même base : l'un est une desserte nationale en eau, l'autre une couverture d'assainissement sur les seuls bassins versants de la capitale. Loin d'annuler l'écart, cela l'aggrave — car les 40 % sont mesurés là où l'État est le plus présent, le plus dense et le mieux financé. Si l'assainissement plafonne à 40 % dans Lomé, il n'y a aucune raison de le supposer meilleur ailleurs. C'est le point aveugle d'une revue par ailleurs excellente : l'eau est le succès le plus cité du Togo, et le service qui la rend sans danger accuse trente points de retard dans sa propre vitrine.",
        en: "The factsheet puts these two figures in the same sentence, but they are not measured on the same base: one is national water coverage, the other sanitation coverage across the capital's watersheds alone. Far from cancelling the gap, this widens it — the 40% is measured precisely where the state is most present, most concentrated and best funded. If sanitation stalls at 40% inside Lomé, there is no reason to assume it fares better elsewhere. This is the blind spot in an otherwise strong review: water is Togo's most-cited success, and the service that makes it safe runs thirty points behind it in the country's own shop window."
      },
      source: "Fiche RNV 2026 (OSAA)" },

    { id: "growth", type: "gap", sdg: 8,
      title: { fr: "Croissance du PIB réel, en %", en: "Real GDP growth, %" },
      unit: "%",
      items: [
        { label: { fr: "Croissance annuelle moyenne, 2020-2025", en: "Average annual growth, 2020-2025" }, value: 5.1, emphasis: false },
        { label: { fr: "Croissance en 2025", en: "Growth in 2025" }, value: 6.2, emphasis: true }
      ],
      insight: {
        fr: "Le Togo accélère au-dessus de sa propre moyenne quinquennale, avec une inflation à 0,4 % et un IDH de 0,571 qui vient de franchir le seuil de 0,550 séparant développement humain faible et moyen. Peu de pays de la cohorte peuvent aligner ces trois lignes. La question honnête n'est donc pas la performance mais sa géographie : la réussite industrielle que la revue met en avant tient à une plateforme (Adétikopé, 12 unités, 3 500 emplois) et sa réussite numérique à un centre de données, tous deux aux abords de Lomé. Une croissance de 6,2 % et une inflation de 0,4 % disent que le cadre macroéconomique fonctionne ; elles ne disent rien de la diffusion des revenus au-delà du corridor de la capitale — et l'assainissement à 40 % des bassins versants de Lomé, dans cette même revue, suggère que la réponse n'est pas encore acquise.",
        en: "Togo is accelerating above its own five-year average, with inflation at 0.4% and an HDI of 0.571 that has just crossed the 0.550 line separating low from medium human development. Few countries in the cohort can put those three lines together. The honest question is therefore not performance but geography: the industrial success the review showcases rests on one platform (Adétikopé, 12 units, 3,500 jobs) and its digital success on one data centre, both on the edge of Lomé. Growth of 6.2% and inflation of 0.4% say the macroeconomic frame is working; they say nothing about whether incomes are broadening beyond the capital's corridor — and sanitation at 40% of Lomé's own watersheds, in this same review, suggests the answer is not yet settled."
      },
      source: "Fiche RNV 2026 (OSAA) · PNUD, Rapport sur le développement humain 2025 (IDH 0,571) · INSEED" }
  ],

  instruments: [
    { name: { fr: "Feuille de route gouvernementale 2020-2025", en: "Government Roadmap 2020-2025" },
      kicker: { fr: "cadre national", en: "national framework" },
      text: {
        fr: "Adoptée après que la COVID-19 a interrompu le Plan national de développement 2018-2022, la feuille de route est le véhicule unique de la mise en œuvre de l'Agenda 2030 au Togo, résumée par trois verbes : protéger, rassembler, transformer. Le pays ne tient pas de dispositif de suivi des ODD séparé — la revue et le bilan de la feuille de route sont le même exercice.",
        en: "Adopted after COVID-19 interrupted the 2018-2022 National Development Plan, the roadmap is the single vehicle for delivering the 2030 Agenda in Togo, summed up in three verbs: protect, bring together, transform. The country keeps no separate SDG tracking system — the review and the roadmap's own stocktake are one and the same exercise."
      },
      source: "Fiche RNV 2026 (OSAA)" },
    { name: { fr: "Électrification : réseau, capacité et solaire hors réseau", en: "Electrification: grid, capacity and off-grid solar" },
      kicker: { fr: "633 298 ménages", en: "633,298 households" },
      text: {
        fr: "Le taux d'accès est passé de 50 % à 75,6 %, la capacité installée de 170 à 355 MW et la part des renouvelables de 19 % à 38 %. L'effort combine extension du réseau, subvention au raccordement des ménages et kits solaires autonomes déployés par l'agence d'électrification rurale — dont la fiche ne publie pas la ventilation, alors qu'ils ne procurent pas le même niveau de service.",
        en: "The access rate rose from 50% to 75.6%, installed capacity from 170 to 355 MW, and the renewable share from 19% to 38%. The effort combines grid extension, a household connection subsidy and stand-alone solar kits deployed by the rural electrification agency — a split the factsheet does not publish, even though the two do not deliver the same level of service."
      },
      source: "Fiche RNV 2026 (OSAA) · AT2ER (kits solaires)" },
    { name: { fr: "Plateforme industrielle d'Adétikopé (PIA)", en: "Adétikopé Industrial Platform (PIA)" },
      kicker: { fr: "12 unités, 3 500 emplois", en: "12 units, 3,500 jobs" },
      text: {
        fr: "Zone industrielle intégrée aux portes de Lomé, adossée au port sec d'Adétikopé, la PIA est l'ancrage physique de l'ambition de hub logistique. Elle porte à elle seule le volet industriel de la revue : 12 unités opérationnelles et 3 500 emplois directs — un socle réel, mais étroit pour un pays de plus de neuf millions d'habitants.",
        en: "An integrated industrial zone on the edge of Lomé, anchored to the Adétikopé dry port, the PIA is the physical anchor of the logistics-hub ambition. It carries the entire industrial chapter of the review on its own: 12 operating units and 3,500 direct jobs — a real base, but a narrow one for a country of more than nine million people."
      },
      source: "Fiche RNV 2026 (OSAA)" },
    { name: { fr: "Gouvernance numérique et GovTech", en: "Digital governance and GovTech" },
      kicker: { fr: "300+ démarches digitalisées", en: "300+ digitised procedures" },
      text: {
        fr: "Plus de 300 démarches administratives dématérialisées, un centre de données Tier 3 et le passage du Togo à la 2e catégorie mondiale de l'Indice GovTech de la Banque mondiale font du numérique le second pilier de la stratégie de hub. C'est aussi le levier de la réforme foncière et de la mobilisation des recettes : la digitalisation est ici un instrument budgétaire autant qu'un service au citoyen.",
        en: "More than 300 dematerialised administrative procedures, a Tier 3 data centre and Togo's move into the second world category of the World Bank's GovTech Index make digital the second pillar of the hub strategy. It is also the lever behind land reform and revenue mobilisation: digitisation here is a fiscal instrument as much as a citizen service."
      },
      source: "Fiche RNV 2026 (OSAA)" },
    { name: { fr: "Réforme foncière", en: "Land reform" },
      kicker: { fr: "60 mois → 6 mois", en: "60 months → 6" },
      text: {
        fr: "La délivrance d'un titre foncier, qui demandait cinq ans, en demande six mois. Dans un pays où l'insécurité foncière bloque l'investissement des ménages comme celui des entreprises, cette division par dix est probablement la réforme la plus structurante de la revue — et la moins visible dans les chiffres agrégés.",
        en: "Issuing a land title used to take five years; it now takes six months. In a country where insecure tenure blocks investment by households and firms alike, this tenfold reduction is probably the most structural reform in the review — and the least visible in the aggregate figures."
      },
      source: "Fiche RNV 2026 (OSAA)" },
    { name: { fr: "SMIG +50 % et nouveau code du travail", en: "Minimum wage +50% and a new labour code" },
      kicker: { fr: "35 000 → 52 500 FCFA", en: "CFA 35,000 → 52,500" },
      text: {
        fr: "Le salaire minimum interprofessionnel garanti a été relevé de 50 %, de 35 000 à 52 500 FCFA — après dix années sans revalorisation. Associé à un nouveau code du travail et à un cadre de concertation État–secteur privé, il constitue le volet « moyens de mise en œuvre » de la revue, et le seul instrument qui agisse directement sur les revenus des ménages plutôt que sur les infrastructures.",
        en: "The guaranteed inter-professional minimum wage was raised by 50%, from CFA 35,000 to 52,500 — after ten years without an increase. Combined with a new labour code and a State–private sector consultation framework, it forms the \"means of implementation\" chapter of the review, and the only instrument acting directly on household incomes rather than on infrastructure."
      },
      source: "Fiche RNV 2026 (OSAA) · République togolaise, revalorisation du SMIG (2023)" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        fr: "L'ancien tableau de bord affirmait, sous son graphique sur l'électricité, que « la capacité installée a doublé de 400 MW à 800 MW ». La fiche indique 170 à 355 MW — et deux autres panneaux du même tableau de bord (ODD 7 et Fonds Tinga) affichaient eux aussi 170 → 355 MW.",
        en: "The old dashboard stated, under its electricity chart, that \"installed capacity doubled from 400 MW to 800 MW\". The factsheet reports 170 to 355 MW — and two other panels of the same dashboard (SDG 7 and Fonds Tinga) themselves displayed 170 → 355 MW."
      },
      resolution: {
        fr: "Le chiffre de 400 → 800 MW est faux et se contredisait à l'intérieur même du tableau de bord : il aurait fait du Togo un producteur plus de deux fois supérieur à sa capacité réelle. Seule la série 170 → 355 MW est retenue, et elle est désormais tracée sur un axe en MW, séparément du taux d'accès.",
        en: "The 400 → 800 MW figure is wrong and contradicted the dashboard's own other panels: it would have credited Togo with more than double its real generating base. Only the 170 → 355 MW series is retained, and it is now plotted on a MW axis, separately from the access rate."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Dans l'onglet « Dette et revenus », un graphique traçant le taux de pression fiscale (12,2 % → 13,1 % du PIB) portait la légende « Score GIRE (/100) » — un indicateur de gestion intégrée des ressources en eau, sans aucun rapport avec des recettes fiscales.",
        en: "In the \"Debt and revenue\" tab, a chart plotting the tax-to-GDP ratio (12.2% → 13.1% of GDP) carried the legend \"IWRM score (/100)\" — an integrated water resources management indicator with no relationship whatsoever to tax revenue."
      },
      resolution: {
        fr: "Résidu du gabarit à partir duquel les tableaux de bord ont été clonés. Toutes les légendes sont désormais générées depuis la couche de données bilingue : un graphique ne peut plus afficher une légende étrangère aux données qu'il porte.",
        en: "A leftover from the template the dashboards were cloned from. Every legend is now generated from the bilingual data layer, so a chart can no longer display a legend that belongs to somebody else's data."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Le panneau ODD 7 traçait « 170 → 355 MW » comme une barre de progression sur une piste graduée de 0 à 100 %, où elle atteignait une largeur de 109 % et débordait de son propre axe. Le panneau ODD 9 faisait de même avec un indice de production industrielle de 135,2, aligné sur la même piste en pourcentage que la couverture Internet (90 %) et l'état du réseau routier (76,6 %).",
        en: "The SDG 7 panel plotted \"170 → 355 MW\" as a progress bar on a track scaled from 0 to 100%, where it reached a width of 109% and overflowed its own axis. The SDG 9 panel did the same with an industrial production index of 135.2, set on the same percentage track as internet coverage (90%) and road condition (76.6%)."
      },
      resolution: {
        fr: "Deux unités sur un même axe, deux fois. Les mégawatts disposent désormais de leur propre graphique et de leur propre échelle ; l'indice de production industrielle, non traçable à la fiche, a été retiré. Aucun graphique de ce tableau de bord ne porte plus qu'une seule unité.",
        en: "Two units on one axis, twice over. Megawatts now have their own chart and their own scale; the industrial production index, untraceable to the factsheet, has been dropped. No chart on this dashboard now carries more than one unit."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Les 40 % de la fiche — « assainissement de 40 % des bassins versants de Lomé » — étaient présentés par l'ancien tableau de bord comme « 40 % des bassins versants de Lomé (163 km²) réhabilités pour la gestion des risques d'inondation », rattachés à l'ODD 11 et à l'indicateur 11.5.1 sur les pertes dues aux catastrophes.",
        en: "The factsheet's 40% — \"sanitation of 40% of Lomé's watersheds\" — was presented by the old dashboard as \"40% of Lomé's watersheds (163 km²) rehabilitated for flood-risk management\", filed under SDG 11 and cited to indicator 11.5.1 on disaster losses."
      },
      resolution: {
        fr: "Ce n'est pas la même chose : une couverture d'assainissement a été convertie en surface réhabilitée contre les inondations, et déplacée de l'ODD 6 vers l'ODD 11. Le chiffre est rétabli tel que la fiche l'énonce — une couverture d'assainissement sur les bassins versants de Lomé — et présenté sous l'ODD 6, face à la desserte en eau, où il révèle l'écart de 31 points.",
        en: "These are not the same thing: a sanitation coverage rate was converted into an area rehabilitated against flooding, and moved from SDG 6 to SDG 11. The figure is restored as the factsheet states it — sanitation coverage across Lomé's watersheds — and reported under SDG 6, alongside water coverage, where it exposes the 31-point gap."
      } },
    { severity: "unverified",
      issue: {
        fr: "L'ancien tableau de bord présentait le Togo au « 318e » rang du classement Doing Business de la Banque mondiale, « en progression depuis la 349e place en 2021 ».",
        en: "The old dashboard placed Togo \"318th\" in the World Bank's Doing Business ranking, \"improved from 349th in 2021\"."
      },
      resolution: {
        fr: "Impossible : le rapport Doing Business n'a jamais classé plus de 190 économies, et la Banque mondiale l'a abandonné en septembre 2021. Aucun pays n'a pu être 318e de quoi que ce soit. La mention est supprimée ; le classement de gouvernance réellement documenté par la fiche — la 2e catégorie mondiale de l'Indice GovTech de la Banque mondiale — est retenu à sa place.",
        en: "Impossible: the Doing Business report never ranked more than 190 economies, and the World Bank discontinued it in September 2021. No country could be 318th of anything. The claim is removed; the governance ranking the factsheet actually documents — second world category on the World Bank's GovTech Index — is retained in its place."
      } },
    { severity: "unverified",
      issue: {
        fr: "L'ancien tableau de bord ventilait l'électrification en 100 114 ménages raccordés par subvention et 330 729 ménages équipés de kits solaires, soit 430 843 au total. La fiche indique 633 298 ménages électrifiés.",
        en: "The old dashboard broke electrification down into 100,114 households connected via subsidy and 330,729 equipped with solar kits — 430,843 in total. The factsheet reports 633,298 households electrified."
      },
      resolution: {
        fr: "Les deux chiffres ne se rejoignent pas, et rien ne permet de dire si la ventilation couvre une période plus courte, un seul programme, ou si elle est simplement erronée. Seul le total de la fiche (633 298) est affiché, avec la mention explicite qu'il agrège réseau et hors-réseau sans en publier le détail. La ventilation est écartée.",
        en: "The two do not reconcile, and nothing indicates whether the breakdown covers a shorter period, a single programme, or is simply wrong. Only the factsheet total (633,298) is shown, with an explicit note that it aggregates grid and off-grid without publishing the split. The breakdown is set aside."
      } },
    { severity: "unverified",
      issue: {
        fr: "Une série entière de chiffres de l'ancien tableau de bord n'est traçable ni à la fiche ni à une source citable : accès rural à l'électricité passé de 18 % à 34 %, défécation à l'air libre de 37,54 % à 32,2 %, 46 932 latrines, 780 km de drainage, 7 bassins de rétention, 28 150 emplois créés, 20 000 logements à livrer, zone de 1 177 hectares à Kpomé-Dalavé, couverture Internet de 75 % à 90 %.",
        en: "A whole series of figures on the old dashboard is traceable neither to the factsheet nor to any citable source: rural electricity access rising from 18% to 34%, open defecation falling from 37.54% to 32.2%, 46,932 latrines, 780 km of drainage, 7 retention basins, 28,150 jobs created, 20,000 homes to be delivered, a 1,177-hectare zone at Kpomé-Dalavé, internet coverage from 75% to 90%."
      },
      resolution: {
        fr: "Plusieurs sont plausibles, aucune n'est vérifiable en l'état — la RNV 2026 du Togo n'est pas encore publique, et les références de pages citées par l'ancien tableau de bord (« p. 29-31 », « p. 32-35 ») ne renvoient à aucun document consultable. Ces chiffres sont retirés du tableau de bord plutôt que maquillés d'une citation invérifiable. L'écart rural en électricité, en particulier, reste le chiffre le plus utile que la fiche ne fournit pas.",
        en: "Several are plausible; none is verifiable as things stand — Togo's 2026 VNR is not yet public, and the page references the old dashboard cited (\"p.29-31\", \"p.32-35\") point to no consultable document. These figures are removed from the dashboard rather than dressed in an uncheckable citation. The rural electricity gap, in particular, remains the single most useful number the factsheet does not provide."
      } },
    { severity: "corrected",
      issue: {
        fr: "L'ancien tableau de bord faisait de la dette publique un indicateur de tête : 61,65 % du PIB à fin décembre 2025, « confortablement sous le plafond UEMOA de 70 % ».",
        en: "The old dashboard headlined public debt: 61.65% of GDP at end-December 2025, \"comfortably below the 70% WAEMU ceiling\"."
      },
      resolution: {
        fr: "La dette ne figure pas sur la fiche, et les sources externes ne convergent pas : 69 % du PIB fin 2024, 65 % à fin juin 2025, environ 62,6 % selon le gouvernement pour 2025. La trajectoire est baissière et le plafond est bien respecté, mais aucun de ces chiffres ne corrobore précisément les 61,65 % affichés. L'indicateur est retiré des tuiles plutôt que de donner une fausse précision à deux décimales.",
        en: "Debt does not appear on the factsheet, and external sources do not converge: 69% of GDP at end-2024, 65% at end-June 2025, around 62.6% according to the government for 2025. The trajectory is downward and the ceiling is indeed respected, but none of these corroborates the 61.65% displayed to two decimal places. The indicator is dropped from the tiles rather than lend false precision."
      } },
    { severity: "corrected",
      issue: {
        fr: "Le taux de pression fiscale (13,1 % du PIB) était présenté comme une réussite mesurée à l'aune d'une cible nationale de 15 % à l'horizon 2028.",
        en: "The tax-to-GDP ratio (13.1%) was presented as a success, measured against a national target of 15% by 2028."
      },
      resolution: {
        fr: "Le chiffre de 13,1 % du PIB pour 2025 est exact — il est confirmé par l'Office togolais des recettes, via Togo First et l'Agence Ecofin. Mais l'aune retenue était trop indulgente : la norme de convergence de l'UEMOA et de la CEDEAO est de 20 % du PIB. L'indicateur est conservé, avec cette référence — c'est la contrainte de financement qui pèse sur toute la stratégie de hub.",
        en: "The 13.1%-of-GDP figure for 2025 is correct — confirmed by the Togolese Revenue Office, via Togo First and Agence Ecofin. But the benchmark chosen was too forgiving: the WAEMU and ECOWAS convergence norm is 20% of GDP. The indicator is retained, with that benchmark attached — it is the financing constraint bearing on the entire hub strategy."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Le graphique sur l'eau traçait trois séries (national, urbain, rural) sous une légende qui n'en nommait que deux — « National » et « Rural » —, la courbe urbaine restant sans nom. Le tableau de bord, francophone, était par ailleurs truffé d'anglais (« 318th », « 2nd », « Togo's Voluntary National Review 2026 with the United Nations SDG Database », infobulles anglaises) et utilisait le point décimal anglais (75.6%, 71.6%) de bout en bout.",
        en: "The water chart plotted three series (national, urban, rural) under a legend that named only two — \"National\" and \"Rural\" — leaving the urban line unnamed. The dashboard, otherwise in French, was also littered with English (\"318th\", \"2nd\", \"Togo's Voluntary National Review 2026 with the United Nations SDG Database\", English tooltips) and used English decimal points (75.6%, 71.6%) throughout."
      },
      resolution: {
        fr: "Une courbe sans légende est une courbe que le lecteur ne peut pas identifier. Toutes les étiquettes proviennent désormais de la couche bilingue, et les nombres sont formatés par la locale : virgule décimale et espace fine insécable devant le signe % en français.",
        en: "A line with no legend entry is a line the reader cannot identify. All labels now come from the bilingual data layer, and numbers are formatted by locale: decimal comma and narrow no-break space before the % sign in French."
      } },
    { severity: "unverified",
      issue: {
        fr: "L'ancien tableau de bord affirmait que la desserte rurale en eau (77,13 %) dépasse désormais la desserte urbaine (72,9 %), le semi-urbain restant à 60,89 % — un renversement inhabituel, présenté comme le résultat phare du Togo sur l'ODD 6.",
        en: "The old dashboard claimed rural water coverage (77.13%) now exceeds urban coverage (72.9%), with semi-urban at 60.89% — an unusual reversal, presented as Togo's headline SDG 6 result."
      },
      resolution: {
        fr: "Les ordres de grandeur sont corroborés par les communications du ministère de l'Eau (rural autour de 77 %, semi-urbain le plus bas). Mais les deux taux ne se mesurent pas de la même façon — la fiche parle elle-même de personnes « rapprochées d'un point d'eau » en milieu rural, ce qui n'est pas un raccordement au domicile. La comparaison rural/urbain est donc écartée du tableau de bord : elle oppose deux définitions du même mot, et le seul chiffre national (71 %) est conservé.",
        en: "The orders of magnitude are corroborated by Ministry of Water communications (rural around 77%, semi-urban lowest). But the two rates are not measured the same way — the factsheet itself speaks of people \"brought closer to a water point\" in rural areas, which is not a household connection. The rural/urban comparison is therefore kept off the dashboard: it sets two definitions of the same word against each other. Only the national figure (71%) is retained."
      } }
  ]
});
