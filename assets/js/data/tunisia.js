/* Tunisie — RNV 2021 → 2026 (cycles 2019, 2021, 2026). Fiche source rédigée en français :
   le français fait foi, l'anglais est une traduction. La fiche tunisienne est presque
   entièrement qualitative : ce tableau de bord est délibérément sobre en chiffres et ne
   retient que des indicateurs macro citables. Vérifié contre data/factsheets.txt (p. 20 de la
   compilation OSAA), la FAO AQUASTAT, la Banque mondiale, l'OCDE et Enerdata/STEG.
   Voir `factcheck` en bas de fichier.

   Tunisia — VNR 2021 → 2026 (cycles 2019, 2021, 2026). Source factsheet authored in French:
   French is authoritative, English is a translation. The Tunisian factsheet is almost entirely
   qualitative; this dashboard is deliberately sparse on numbers and keeps only citable macro
   indicators. Fact-checked against data/factsheets.txt (p.20 of the OSAA compilation),
   FAO AQUASTAT, the World Bank, the OECD and Enerdata/STEG. See `factcheck` at the bottom. */
window.VNR.register({
  slug: "tunisia",
  iso: "TN",
  name: { en: "Tunisia", fr: "Tunisie" },
  region: "north",
  vnrPrev: 2021,
  vnrCycles: [2019, 2021, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/tunisia.pdf",

  tagline: {
    en: "Consolidating a social State that places the citizen, their rights and their dignity at the heart of public action.",
    fr: "La consolidation d'un État social plaçant le citoyen, ses droits et sa dignité au cœur de l'action publique."
  },

  themes: [
    { sdg: 4,
      title: { en: "Human capital and social protection", fr: "Capital humain et protection sociale" },
      text: {
        en: "Reorienting social action towards investment in the individual: quality education, accessible health care, decent work and strengthened social coverage.",
        fr: "Orienter l'action sociale vers l'investissement dans l'individu : éducation de qualité, santé accessible, travail décent et couverture sociale renforcée."
      } },
    { sdg: 8,
      title: { en: "Competitiveness and economic resilience", fr: "Compétitivité et résilience économique" },
      text: {
        en: "Restoring growth and integrating into global value chains through investment, exports, innovation and support to SMEs.",
        fr: "Restaurer la croissance et s'intégrer aux chaînes de valeur mondiales par l'investissement, les exportations, l'innovation et le soutien aux PME."
      } },
    { sdg: 10,
      title: { en: "Territorial development", fr: "Développement territorial" },
      text: {
        en: "Strengthening the attractiveness of the regions and developing border and disadvantaged areas in line with citizens' needs and expectations.",
        fr: "Renforcer l'attractivité des régions et développer les zones frontalières et défavorisées selon les besoins et attentes des citoyens."
      } },
    { sdg: 13,
      title: { en: "Ecological transition", fr: "Transition écologique" },
      text: {
        en: "Reducing carbon intensity, accelerating the energy transition and promoting the green, blue and circular economy and the sustainability of water resources.",
        fr: "Réduire l'intensité carbone, accélérer la transition énergétique et promouvoir l'économie verte, bleue et circulaire et la durabilité des ressources hydriques."
      } },
    { sdg: 16,
      title: { en: "Governance and public services", fr: "Gouvernance et services publics" },
      text: {
        en: "Improving the quality of public services, mainstreaming digitalization and unlocking initiative through more effective governance.",
        fr: "Améliorer la qualité des services publics, généraliser la digitalisation et libérer l'initiative par une gouvernance plus efficace."
      } },
    { sdg: 17,
      title: { en: "Transformative partnerships", fr: "Partenariats transformateurs" },
      text: {
        en: "Global partnerships grounded in national sovereignty, innovative financing and better access to technology to accelerate the SDGs.",
        fr: "Des partenariats mondiaux fondés sur la souveraineté nationale, des financements innovants et un meilleur accès aux technologies pour accélérer les ODD."
      } }
  ],

  continuity: [
    { prev: { en: "Social priorities & recovery (2021)", fr: "Priorités sociales et reprise (2021)" },
      status: "sustained",
      now: { en: "Social State & inclusive development", fr: "État social et développement inclusif" } },
    { prev: { en: "Post-crisis economic recovery", fr: "Relance économique post-crise" },
      status: "evolved",
      now: { en: "Competitiveness & economic resilience", fr: "Compétitivité et résilience économique" } },
    { prev: { en: "Stability & public-sector reform", fr: "Stabilité et réformes publiques" },
      status: "evolved",
      now: { en: "Governance & public services", fr: "Gouvernance et services publics" } },
    { prev: { en: "Regional equity", fr: "Équité régionale" },
      status: "sustained",
      now: { en: "Territorial development & disparities", fr: "Développement territorial et disparités" } },
    { prev: { en: "Partnerships & financing", fr: "Partenariats et financement" },
      status: "evolved",
      now: { en: "Sovereignty & transformative partnerships", fr: "Souveraineté et partenariats transformateurs" } }
  ],

  concepts: {
    caption: {
      en: "Tunisia is consolidating a social State that places the citizen at the heart of public action, in the service of the 2030 Agenda.",
      fr: "La Tunisie consolide un État social plaçant le citoyen au cœur de l'action publique, au service de l'Agenda 2030."
    },
    items: [
      { label: { en: "human capital", fr: "capital humain" }, value: 14 },
      { label: { en: "ecological transition", fr: "transition écologique" }, value: 10 },
      { label: { en: "growth", fr: "croissance" }, value: 7 },
      { label: { en: "governance", fr: "gouvernance" }, value: 7 },
      { label: { en: "partnerships", fr: "partenariats" }, value: 5 },
      { label: { en: "competitiveness", fr: "compétitivité" }, value: 4 },
      { label: { en: "financing", fr: "financement" }, value: 3 },
      { label: { en: "innovation & SMEs", fr: "innovation et PME" }, value: 3 },
      { label: { en: "investment", fr: "investissement" }, value: 2 }
    ]
  },

  indicators: [
    { id: "water_stress", sdg: 13,
      label: { en: "Level of water stress (withdrawal as a share of renewable resources)", fr: "Niveau de stress hydrique (prélèvements en part des ressources renouvelables)" },
      value: 98.1, unit: "%",
      note: {
        en: "FAO AQUASTAT, custodian of SDG indicator 6.4.2, latest year 2020. Tunisia withdraws almost exactly as much freshwater as its renewable resources yield — the ceiling, not a trend.",
        fr: "FAO AQUASTAT, dépositaire de l'indicateur ODD 6.4.2, dernière année 2020. La Tunisie prélève presque exactement autant d'eau douce que ses ressources renouvelables en produisent : c'est un plafond, non une tendance."
      },
      source: "FAO AQUASTAT · indicateur ODD 6.4.2 (2020)" },
    { id: "elec_access", sdg: 7,
      label: { en: "Access to electricity", fr: "Accès à l'électricité" },
      value: 100, unit: "%",
      note: {
        en: "Effectively universal since the 2010s. Tunisia's energy agenda in this review is decarbonisation of the mix, not extension of the grid.",
        fr: "De fait universel depuis les années 2010. L'agenda énergétique de la Tunisie dans cette revue est la décarbonation du mix, non l'extension du réseau."
      },
      source: "Banque mondiale, EG.ELC.ACCS.ZS (2023) · ODD 7.1.1" },
    { id: "renew_target", sdg: 13,
      label: { en: "Renewables target, share of the electricity mix by 2030", fr: "Objectif renouvelables, part du mix électrique à l'horizon 2030" },
      value: 35, unit: "%",
      note: {
        en: "Raised from 30% to 35% by 2030. Not 2035 — 2035 is the horizon for roughly 50%.",
        fr: "Relevé de 30 % à 35 % à l'horizon 2030. Et non 2035 : 2035 est l'horizon d'environ 50 %."
      },
      source: "Enerdata · Plan solaire tunisien (révision)" },
    { id: "debt", sdg: 17,
      label: { en: "Public debt, % of GDP, 2024", fr: "Dette publique, en % du PIB, 2024" },
      value: 84.9, unit: "%",
      note: {
        en: "Estimated at 82.2% for 2025. This is the binding constraint on the \"social State\" the review is built around.",
        fr: "Estimée à 82,2 % pour 2025. C'est la contrainte déterminante pesant sur l'« État social » autour duquel la revue est construite."
      },
      source: "Banque mondiale, Tunisia Economic Monitor / MPO (2025)" },
    { id: "tax", sdg: 17,
      label: { en: "Tax-to-GDP ratio, including social security contributions, 2023", fr: "Ratio impôts/PIB, cotisations sociales comprises, 2023" },
      value: 34.0, unit: "%",
      note: {
        en: "Among the highest in Africa (continental average ≈16%). The national \"taux de pression fiscale\" of about 25% is a narrower measure that excludes social security contributions — the two are not in conflict.",
        fr: "Parmi les plus élevés d'Afrique (moyenne continentale ≈16 %). Le « taux de pression fiscale » national d'environ 25 % est une mesure plus étroite, qui exclut les cotisations sociales : les deux ne se contredisent pas."
      },
      source: "OCDE, Statistiques des recettes publiques en Afrique 2025" }
  ],

  charts: [
    { id: "water_stress_series", type: "line", sdg: 13,
      title: { en: "Level of water stress, % of renewable resources withdrawn", fr: "Niveau de stress hydrique, en % des ressources renouvelables prélevées" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "stress", label: { en: "Level of water stress (SDG 6.4.2)", fr: "Niveau de stress hydrique (ODD 6.4.2)" },
          points: [
            { x: "2016", y: 94.6 },
            { x: "2018", y: 96.0 },
            { x: "2019", y: 96.3 },
            { x: "2020", y: 98.1 }
          ] }
      ],
      insight: {
        en: "The finding here is the level, not the slope. Tunisia has been withdrawing 95% or more of its renewable freshwater for a decade: the country is not approaching absolute scarcity, it is already living at the ceiling, and the small annual increments simply record how little headroom is left. This is why the 2026 review treats water as a matter of national planning discipline rather than an environmental portfolio item — and why \"ecological transition\" is its second most frequent concept. The old dashboard's rising curve from 68% in 2015 implied a deterioration that had in fact already happened long before.",
        fr: "Ce qui compte ici, c'est le niveau, non la pente. La Tunisie prélève 95 % ou plus de ses ressources en eau douce renouvelables depuis une décennie : le pays ne s'approche pas de la pénurie absolue, il vit déjà sous plafond, et les faibles incréments annuels ne font qu'enregistrer la marge résiduelle qui s'épuise. C'est pourquoi la revue 2026 traite l'eau comme une discipline de planification nationale plutôt que comme un dossier environnemental parmi d'autres — et pourquoi la « transition écologique » est son deuxième concept le plus fréquent. La courbe ascendante de l'ancien tableau de bord, partant de 68 % en 2015, laissait croire à une dégradation qui, en réalité, était consommée de longue date."
      },
      source: "FAO AQUASTAT · indicateur ODD 6.4.2" },

    { id: "renewables_gap", type: "bars", sdg: 13,
      title: { en: "Installed renewable capacity by technology, June 2025", fr: "Capacité renouvelable installée par technologie, juin 2025" },
      unit: "MW",
      items: [
        { label: { en: "Solar", fr: "Solaire" }, value: 485 },
        { label: { en: "Wind", fr: "Éolien" }, value: 240 },
        { label: { en: "Hydro", fr: "Hydraulique" }, value: 62 }
      ],
      insight: {
        en: "787 MW installed, against a 35%-by-2030 target that implies roughly 3.5 GW. Tunisia is therefore about a fifth of the way to its own commitment with less than five years to run, and the gap is not evenly distributed: solar already carries over 60% of the installed base and is where the tenders are concentrated. The ecological transition is the second most frequent concept in Tunisia's Key Messages; on this measure it is still far more a stated priority than a delivered one.",
        fr: "787 MW installés, face à un objectif de 35 % d'ici 2030 qui suppose environ 3,5 GW. La Tunisie a donc parcouru à peine un cinquième du chemin vers son propre engagement, à moins de cinq ans de l'échéance, et l'écart n'est pas réparti uniformément : le solaire représente déjà plus de 60 % du parc installé et concentre les appels d'offres. La transition écologique est le deuxième concept le plus fréquent des Messages clés tunisiens ; à cette aune, elle reste bien davantage une priorité affichée qu'une priorité réalisée."
      },
      source: "Enerdata · STEG (juin 2025)" },

    { id: "fiscal", type: "gap", sdg: 17,
      title: {
        en: "Two tax-to-GDP figures for the same country, and both are right",
        fr: "Deux ratios impôts/PIB pour un même pays, tous deux exacts"
      },
      unit: "%",
      items: [
        { label: { en: "Tax-to-GDP including social security contributions (OECD, 2023)", fr: "Impôts/PIB, cotisations sociales comprises (OCDE, 2023)" }, value: 34.0, emphasis: true },
        { label: { en: "National \"taux de pression fiscale\", excluding social contributions", fr: "« Taux de pression fiscale » national, hors cotisations sociales" }, value: 25.0, emphasis: false },
        { label: { en: "African average, OECD basis", fr: "Moyenne africaine, base OCDE" }, value: 16.0, emphasis: false }
      ],
      insight: {
        en: "Tunisia is described in some sources as collecting a quarter of GDP in tax and in others as collecting a third. Both are accurate: the difference is whether social security contributions are counted. On the comparable OECD basis Tunisia collects 34% of GDP — more than twice the African average and among the highest ratios on the continent. The revenue side is not where Tunisia's fiscal problem lies; the debt stock, at roughly 85% of GDP, is.",
        fr: "Certaines sources décrivent la Tunisie comme prélevant un quart du PIB en impôts, d'autres un tiers. Les deux sont exactes : la différence tient à la prise en compte ou non des cotisations sociales. Sur la base comparable de l'OCDE, la Tunisie prélève 34 % du PIB — plus du double de la moyenne africaine et l'un des ratios les plus élevés du continent. Ce n'est pas du côté des recettes que se situe le problème budgétaire tunisien, mais du côté de l'encours de la dette, à quelque 85 % du PIB."
      },
      source: "OCDE, Statistiques des recettes publiques en Afrique 2025 · RNV 2026" }
  ],

  instruments: [
    { name: { en: "Development Plan 2026–2030", fr: "Plan de développement 2026-2030" },
      kicker: { en: "national framework", fr: "cadre national" },
      text: {
        en: "Tunisia keeps no separate SDG tracker: the 2030 Agenda is aligned directly with the draft Development Plan 2026–2030, which is the single instrument through which the review's priorities are meant to be delivered. The 2026 review was timed to that drafting so that SDG acceleration is written into the plan rather than reported alongside it.",
        fr: "La Tunisie ne tient pas de dispositif de suivi distinct des ODD : l'Agenda 2030 est aligné directement sur le projet de Plan de développement 2026-2030, unique instrument par lequel les priorités de la revue doivent être mises en œuvre. La revue 2026 a été calée sur cette élaboration afin que l'accélération des ODD soit inscrite dans le plan plutôt que rapportée à côté de lui."
      },
      source: "Fiche RNV 2026 (OSAA) · RNV 2026" },
    { name: { en: "National Ecological Transition Strategy (SNTE)", fr: "Stratégie nationale de transition écologique (SNTE)" },
      kicker: { en: "adopted 2023", fr: "adoptée en 2023" },
      text: {
        en: "The framework behind the review's second most frequent concept. It brings carbon intensity, the energy transition, the green, blue and circular economy and the sustainability of water resources under one strategic roof, and is the instrument through which the ecological-transition theme reaches the Development Plan.",
        fr: "Le cadre qui sous-tend le deuxième concept le plus fréquent de la revue. Elle réunit sous une même architecture stratégique l'intensité carbone, la transition énergétique, l'économie verte, bleue et circulaire et la durabilité des ressources hydriques ; c'est par elle que le thème de la transition écologique rejoint le Plan de développement."
      },
      source: "Fiche RNV 2026 (OSAA) · SNTE 2023" },
    { name: { en: "Tunisian Solar Plan", fr: "Plan solaire tunisien" },
      kicker: { en: "35% of the mix by 2030", fr: "35 % du mix d'ici 2030" },
      text: {
        en: "Tunisia's renewables framework, formulated in 2012 and revised since. The target for renewables in the electricity mix was raised from 30% to 35% by 2030, with roughly 3.5 GW of capacity implied and successive tender rounds under way. Installed capacity stood at about 787 MW in mid-2025.",
        fr: "Le cadre tunisien des renouvelables, formulé en 2012 puis révisé. L'objectif de renouvelables dans le mix électrique a été relevé de 30 % à 35 % à l'horizon 2030, ce qui suppose environ 3,5 GW de capacité, avec des cycles successifs d'appels d'offres en cours. La capacité installée s'établissait à quelque 787 MW à la mi-2025."
      },
      source: "Enerdata · Plan solaire tunisien" },
    { name: { en: "Water: reuse and non-conventional resources", fr: "Eau : réutilisation et ressources non conventionnelles" },
      kicker: { en: "at the scarcity ceiling", fr: "au plafond de la rareté" },
      text: {
        en: "With withdrawals at roughly 98% of renewable resources, Tunisia's water policy has moved from allocation to substitution: treated-wastewater reuse for irrigation, demand-side efficiency and integrated water-food-energy planning. The review frames water as a national-security question rather than a sectoral one. (The old dashboard's figure of \"over 40,000 hectares\" irrigated with treated wastewater could not be verified and is not reproduced here.)",
        fr: "Avec des prélèvements à quelque 98 % des ressources renouvelables, la politique de l'eau en Tunisie est passée de l'allocation à la substitution : réutilisation des eaux usées traitées pour l'irrigation, efficacité de la demande et planification intégrée eau-alimentation-énergie. La revue traite l'eau comme une question de sécurité nationale et non comme un dossier sectoriel. (Le chiffre de « plus de 40 000 hectares » irrigués aux eaux usées traitées, avancé par l'ancien tableau de bord, n'a pu être vérifié et n'est pas repris ici.)"
      },
      source: "Fiche RNV 2026 (OSAA) · FAO AQUASTAT" },
    { name: { en: "The social State and social coverage", fr: "L'État social et la couverture sociale" },
      kicker: { en: "human capital · 14 mentions", fr: "capital humain · 14 occurrences" },
      text: {
        en: "\"Human capital\" is by some distance the most frequent concept in Tunisia's Key Messages — cited fourteen times, half again as often as anything else. The review's organising idea is to reorient social action from transfers towards investment in the individual: quality education, accessible health care, decent work and strengthened social coverage. Everything else in the file is subordinate to this framing.",
        fr: "« Capital humain » est de loin le concept le plus fréquent des Messages clés tunisiens — cité quatorze fois, soit une fois et demie plus que tout autre. L'idée directrice de la revue est de réorienter l'action sociale des transferts vers l'investissement dans l'individu : éducation de qualité, santé accessible, travail décent et couverture sociale renforcée. Tout le reste du dossier est subordonné à ce cadrage."
      },
      source: "Fiche RNV 2026 (OSAA), sections 1 et 3" },
    { name: { en: "Territorial development and border regions", fr: "Développement territorial et régions frontalières" },
      kicker: { en: "SDG 10 · sustained since 2021", fr: "ODD 10 · maintenu depuis 2021" },
      text: {
        en: "Regional equity is one of only two themes the factsheet marks as sustained rather than evolved between the 2021 and 2026 cycles: the same priority, restated. The 2026 framing is the attractiveness of the regions and the development of border and disadvantaged areas, defined against citizens' stated needs. A priority that survives a full cycle unchanged is usually one that has not yet been resolved.",
        fr: "L'équité régionale est l'un des deux seuls thèmes que la fiche qualifie de maintenu, et non d'évolué, entre les cycles 2021 et 2026 : la même priorité, réaffirmée. Le cadrage 2026 porte sur l'attractivité des régions et le développement des zones frontalières et défavorisées, définis d'après les besoins exprimés des citoyens. Une priorité qui traverse un cycle entier sans changer est généralement une priorité qui n'a pas encore été réglée."
      },
      source: "Fiche RNV 2026 (OSAA), sections 1 et 2" }
  ],

  factcheck: [
    { severity: "mislabel",
      issue: {
        en: "The old dashboard's five \"2026 priority goals\" were SDG 6, 7, 9, 11 and 17. Tunisia's factsheet names six themes: SDG 4, 8, 10, 13, 16 and 17. Only SDG 17 is common to both.",
        fr: "Les cinq « objectifs prioritaires 2026 » de l'ancien tableau de bord étaient les ODD 6, 7, 9, 11 et 17. La fiche tunisienne en nomme six : ODD 4, 8, 10, 13, 16 et 17. Seul l'ODD 17 leur est commun."
      },
      resolution: {
        en: "This is the central finding for Tunisia. The dashboard told a water–energy–industry story; Tunisia's own Key Messages are about the social State, human capital, territorial development and governance — human capital alone is cited fourteen times, more than any other concept. The dashboard was not so much wrong in its numbers as about the wrong country's priorities. It has been rebuilt on the six themes the factsheet actually names.",
        fr: "C'est le constat central pour la Tunisie. Le tableau de bord racontait une histoire d'eau, d'énergie et d'industrie ; les Messages clés tunisiens portent sur l'État social, le capital humain, le développement territorial et la gouvernance — le seul capital humain y est cité quatorze fois, plus que tout autre concept. Le tableau de bord n'était pas tant faux dans ses chiffres qu'erroné dans les priorités qu'il prêtait au pays. Il a été reconstruit sur les six thèmes que la fiche nomme réellement."
      } },
    { severity: "contradiction",
      issue: {
        en: "Two panels each claimed the highest priority score in Tunisia's own SDG prioritisation matrix: the Goals tab said target 11.1 (decent housing) had \"the highest urgency of all targets (Z-score 1.241)\", while the Water tab said target 6.4 (water-use efficiency) \"scored the highest urgency of all targets examined (Z-score 1.213)\".",
        fr: "Deux panneaux revendiquaient chacun le score de priorité le plus élevé de la matrice de priorisation tunisienne : l'onglet Objectifs affirmait que la cible 11.1 (logement décent) présentait « l'urgence la plus élevée de toutes les cibles (score Z 1,241) », tandis que l'onglet Eau affirmait que la cible 6.4 (efficacité de l'utilisation de l'eau) avait obtenu « l'urgence la plus élevée de toutes les cibles examinées (score Z 1,213) »."
      },
      resolution: {
        en: "Both cannot be the highest, and the two scores quoted differ (1.241 vs 1.213). Neither the matrix, the scores, nor the ranking could be traced to the factsheet or to any published Tunisian source. Both claims have been dropped rather than one arbitrarily preferred. Water remains prominent in this build because the factsheet's ecological-transition theme and the FAO water-stress data support it on their own — not because of an unverifiable Z-score.",
        fr: "Les deux ne peuvent être la plus élevée, et les scores cités diffèrent (1,241 contre 1,213). Ni la matrice, ni les scores, ni le classement n'ont pu être rattachés à la fiche ou à une source tunisienne publiée. Les deux affirmations ont été supprimées, plutôt que d'en privilégier arbitrairement une. L'eau demeure au premier plan dans cette version parce que le thème de la transition écologique et les données de la FAO sur le stress hydrique la justifient d'eux-mêmes — et non en vertu d'un score Z invérifiable."
      } },
    { severity: "contradiction",
      issue: {
        en: "The water-stress chart plotted a rising curve: 68% (2015), 75% (2018), 85% (2021), 97.1% (2024).",
        fr: "Le graphique du stress hydrique traçait une courbe ascendante : 68 % (2015), 75 % (2018), 85 % (2021), 97,1 % (2024)."
      },
      resolution: {
        en: "FAO AQUASTAT, the custodian agency for SDG indicator 6.4.2, reports Tunisia at 94.6% (2016), 96.0% (2018), 96.3% (2019) and 98.1% (2020). The dashboard's early points are wrong by roughly twenty points and the dramatic climb is an artefact of interpolating backwards from a single recent value. The FAO series is used instead. The level, not the trend, is the finding: Tunisia has been at the ceiling for a decade.",
        fr: "La FAO AQUASTAT, agence dépositaire de l'indicateur ODD 6.4.2, situe la Tunisie à 94,6 % (2016), 96,0 % (2018), 96,3 % (2019) et 98,1 % (2020). Les premiers points de l'ancien tableau de bord sont faux d'environ vingt points et la montée spectaculaire résulte d'une interpolation rétrospective à partir d'une seule valeur récente. La série de la FAO est retenue à la place. C'est le niveau, et non la tendance, qui constitue le constat : la Tunisie est sous plafond depuis une décennie."
      } },
    { severity: "corrected",
      issue: {
        en: "The dashboard gave Tunisia's renewables target as \"35% by 2035\", in a goal panel and an instrument card.",
        fr: "Le tableau de bord donnait l'objectif renouvelable tunisien comme « 35 % d'ici 2035 », dans un panneau d'objectifs et une fiche d'instrument."
      },
      resolution: {
        en: "Tunisia raised its target for renewables in the electricity mix from 30% to 35% by 2030, not 2035. 2035 is the horizon for roughly 50%. Pushing the 35% target five years into the future understates by half a decade how far behind the current 787 MW of installed capacity actually is.",
        fr: "La Tunisie a relevé de 30 % à 35 % son objectif de renouvelables dans le mix électrique à l'horizon 2030, et non 2035. L'horizon 2035 correspond à environ 50 %. Repousser de cinq ans l'objectif de 35 % masque d'un demi-décennie le retard réel des 787 MW actuellement installés."
      } },
    { severity: "unverified",
      issue: {
        en: "Internet use was headlined as \"73.4% in 2025, up from 64.5%\", and the same figure appeared in three panels.",
        fr: "L'usage d'Internet était affiché comme « 73,4 % en 2025, contre 64,5 % », et le même chiffre figurait dans trois panneaux."
      },
      resolution: {
        en: "DataReportal puts Tunisia's internet penetration at 84.9% at the start of 2025; the ITU/World Bank household series gives figures in the low-to-mid 70s for earlier years. 73.4% is not a 2025 value on either basis, and the two series are not comparable. Rather than pick between them, the figure has been dropped as a headline — it is not a factsheet theme and nothing in the review depends on it.",
        fr: "DataReportal situe la pénétration d'Internet en Tunisie à 84,9 % au début de 2025 ; la série ménages de l'UIT et de la Banque mondiale donne des valeurs situées entre 70 et 75 % pour des années antérieures. 73,4 % n'est une valeur de 2025 sur aucune de ces bases, et les deux séries ne sont pas comparables. Plutôt que de trancher entre elles, le chiffre a été retiré des indicateurs de tête : il ne correspond à aucun thème de la fiche et rien dans la revue n'en dépend."
      } },
    { severity: "mislabel",
      issue: {
        en: "The dashboard headlined \"Recettes fiscales / PIB — >25%\", describing it as \"among the highest domestic mobilisation levels in the region\".",
        fr: "Le tableau de bord affichait « Recettes fiscales / PIB — >25 % », en le décrivant comme « parmi les niveaux de mobilisation nationale les plus élevés de la région »."
      },
      resolution: {
        en: "The claim is right but the figure is a narrow one. Tunisia's national \"taux de pression fiscale\" excludes social security contributions; on the OECD's comparable basis, which includes them, Tunisia collects 34.0% of GDP (2023) — more than double the 16% African average and among the very highest on the continent. Both figures are now shown side by side with the difference in base stated, so that a reader meeting the other number elsewhere does not read it as a contradiction.",
        fr: "L'affirmation est juste mais le chiffre est étroit. Le « taux de pression fiscale » national tunisien exclut les cotisations sociales ; sur la base comparable de l'OCDE, qui les inclut, la Tunisie prélève 34,0 % du PIB (2023) — plus du double de la moyenne africaine de 16 % et l'un des tout premiers ratios du continent. Les deux chiffres sont désormais présentés côte à côte, avec l'écart de base explicité, afin qu'un lecteur rencontrant l'autre valeur ailleurs n'y voie pas une contradiction."
      } },
    { severity: "contradiction",
      issue: {
        en: "In the public-debt chart, the 2020 point (87% of GDP) was annotated \"pic COVID-19\" while the 2021 point plotted beside it was higher (88%). In the tax-revenue chart, the final data point was drawn at the very top edge of the plotting area, above the highest gridline and outside the axis range it was scaled to.",
        fr: "Dans le graphique de la dette publique, le point de 2020 (87 % du PIB) était annoté « pic COVID-19 » alors que le point de 2021 tracé à côté lui était supérieur (88 %). Dans le graphique des recettes fiscales, le dernier point était dessiné à l'extrême bord supérieur de la zone de tracé, au-dessus de la ligne de grille la plus haute et hors de la plage de l'axe à laquelle il était censé être rapporté."
      },
      resolution: {
        en: "A label contradicted by the data point next to it, and a value rendered outside its own axis. Neither series could be reconciled with the World Bank's published figures (84.9% of GDP in 2024, an estimated 82.2% in 2025), which are used instead, with the debt level given as an indicator rather than an invented trend line.",
        fr: "Une étiquette contredite par le point voisin, et une valeur tracée hors de son propre axe. Aucune des deux séries n'a pu être réconciliée avec les chiffres publiés par la Banque mondiale (84,9 % du PIB en 2024, 82,2 % estimés pour 2025), retenus à leur place, le niveau d'endettement étant donné comme indicateur plutôt que comme une courbe de tendance inventée."
      } },
    { severity: "unverified",
      issue: {
        en: "The dashboard reported \"over 40,000 hectares irrigated with treated wastewater\", industrial value added rising \"from 12.48% to 13.14% of GDP\", industrial income per capita of \"$614, up from $535\", and \"220,000 citizens newly connected\" under the Zones Blanches programme.",
        fr: "Le tableau de bord rapportait « plus de 40 000 hectares irrigués avec des eaux usées traitées », une valeur ajoutée industrielle passant « de 12,48 % à 13,14 % du PIB », un revenu industriel par habitant de « 614 $, contre 535 $ », et « 220 000 citoyens nouvellement connectés » au titre du programme des « Zones blanches »."
      },
      resolution: {
        en: "None of these figures appears in the factsheet, and none could be traced to a citable Tunisian or international source at the precision quoted. The wastewater-irrigation area in particular is well above published estimates for Tunisia. All have been dropped; the underlying policies are described qualitatively where the factsheet supports them, without numbers we cannot stand behind.",
        fr: "Aucun de ces chiffres ne figure dans la fiche, et aucun n'a pu être rattaché à une source tunisienne ou internationale citable avec la précision avancée. La superficie irriguée aux eaux usées traitées, en particulier, dépasse largement les estimations publiées pour la Tunisie. Tous ont été supprimés ; les politiques correspondantes sont décrites qualitativement là où la fiche les étaye, sans chiffres que nous ne pourrions assumer."
      } },
    { severity: "unverified",
      issue: {
        en: "Sources throughout cited VNR page numbers such as \"p.6416-6418\", \"p.9010\", \"p.4106-4141\" and \"p.7583-7587\".",
        fr: "Les sources citaient tout au long du document des numéros de page de la RNV tels que « p. 6416-6418 », « p. 9010 », « p. 4106-4141 » et « p. 7583-7587 »."
      },
      resolution: {
        en: "No VNR runs to 9,000 pages; these are line or character offsets from a text-extraction tool dressed up as page citations — the same artefact found in other country files in this build. Citations have been reduced to the document, and to the custodian agency where an external series is used. Claims that could not be traced to a checkable source have been dropped rather than given a false reference.",
        fr: "Aucune RNV ne compte 9 000 pages ; il s'agit de décalages de lignes ou de caractères issus d'un outil d'extraction de texte, déguisés en références de pages — le même artefact que celui relevé dans d'autres fiches pays de cette version. Les citations ont été ramenées au document, et à l'agence dépositaire lorsqu'une série externe est utilisée. Les affirmations qui n'ont pu être rattachées à une source vérifiable ont été supprimées plutôt qu'habillées d'une fausse référence."
      } },
    { severity: "mislabel",
      issue: {
        en: "English text was left embedded in the French dashboard — \"Tunisie's current five-year national strategy\", \"Water-Food-Energy nexus guidant l'investissement\", \"Top priority\" inside a French donut chart, \"des ressources en eau renouvelables prélevées nationally\" — and several tooltip attributes were malformed, rendering as stray HTML attributes (title=\"A \" self-reliance\"=\"\" strategy\"=\"\").",
        fr: "Du texte anglais subsistait dans le tableau de bord français — « Tunisie's current five-year national strategy », « Water-Food-Energy nexus guidant l'investissement », « Top priority » à l'intérieur d'un anneau en français, « des ressources en eau renouvelables prélevées nationally » — et plusieurs attributs d'infobulle étaient malformés, rendus comme des attributs HTML parasites (title=\"A \" self-reliance\"=\"\" strategy\"=\"\")."
      },
      resolution: {
        en: "Artefacts of an incomplete translation pass over an English template, plus unescaped quotation marks breaking the HTML. Every string in this file is a matched {en, fr} pair, so neither language can leak into the other and no text is written directly into markup.",
        fr: "Séquelles d'une traduction incomplète d'un gabarit anglais, doublées de guillemets non échappés qui cassaient le HTML. Chaque chaîne de ce fichier est une paire {en, fr} appariée : aucune langue ne peut fuir dans l'autre et aucun texte n'est écrit directement dans le balisage."
      } }
  ]
});
