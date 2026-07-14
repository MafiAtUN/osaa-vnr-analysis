/* Gabon — RNV 2022 → 2026. Fiche source rédigée en français.
   Vérifié contre factsheets.pdf p.8, les messages clés RNV 2026, le FMI (Article IV 2024)
   et la Banque mondiale (Gabon Economic Update 2024). Voir `factcheck` en fin de fichier. */
window.VNR.register({
  slug: "gabon",
  iso: "GA",
  name: { en: "Gabon", fr: "Gabon" },
  region: "central",
  vnrPrev: 2022,
  vnrCycles: [2022, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/gabon.pdf",

  tagline: {
    fr: "Le RNV 2026 s'arrime à la Vision GABON-2050 et au PNDC pour une croissance inclusive et résiliente.",
    en: "The 2026 review anchors itself in the GABON-2050 Vision and the National Development and Growth Plan, in pursuit of inclusive and resilient growth."
  },

  themes: [
    { sdg: 6,
      title: { fr: "Stress hydrique paradoxal", en: "A paradox of water stress" },
      text: {
        fr: "Le Grand Libreville subit un déficit de 50 000 m³/jour et l'accès rural à l'eau stagne à 30 % (contre 60 % en ville) ; priorité aux forages solaires.",
        en: "Greater Libreville runs a deficit of 50,000 m³ a day and rural water access is stuck at 30% (against 60% in towns); solar-powered boreholes are the stated priority."
      } },
    { sdg: 7,
      title: { fr: "Électrification et fracture rurale", en: "Electrification and the rural divide" },
      text: {
        fr: "L'électrification atteint 92,8 % avec un mix renouvelable de plus de 91 %, mais l'accès rural plafonne à 26,9 % ; l'hydroélectricité est l'accélérateur.",
        en: "Electrification reaches 92.8% with a renewable mix above 91%, but rural access is capped at 26.9%; hydropower is the accelerator."
      } },
    { sdg: 8,
      title: { fr: "Croissance inclusive et résiliente", en: "Inclusive and resilient growth" },
      text: {
        fr: "Le RNV 2026 s'arrime à la Vision GABON-2050 et au PNDC pour identifier les leviers d'une croissance inclusive et résiliente, sans laisser personne de côté.",
        en: "The 2026 review anchors itself in the GABON-2050 Vision and the PNDC to identify the levers of inclusive, resilient growth, leaving no one behind."
      } },
    { sdg: 9,
      title: { fr: "Industrie et innovation", en: "Industry and innovation" },
      text: {
        fr: "Le Gabon développe l'industrie, l'innovation et les infrastructures comme leviers de diversification et de transformation économique.",
        en: "Gabon is building industry, innovation and infrastructure as levers of diversification and economic transformation."
      } },
    { sdg: 11,
      title: { fr: "Réduire la fracture territoriale", en: "Closing the territorial divide" },
      text: {
        fr: "Les écarts entre zones urbaines et rurales appellent une gouvernance locale pérenne des infrastructures pour un accès équitable et durable.",
        en: "The gaps between urban and rural areas call for durable local governance of infrastructure, so that access is equitable and lasting."
      } },
    { sdg: 17,
      title: { fr: "Gouvernance et coordination", en: "Governance and coordination" },
      text: {
        fr: "Une coordination stratégique et une gouvernance renforcée, issues d'un dialogue participatif entre l'État, le secteur privé et la société civile.",
        en: "Strategic coordination and strengthened governance, emerging from a participatory dialogue between the State, the private sector and civil society."
      } }
  ],

  continuity: [
    { prev: { fr: "Contraintes : pétrole & COVID-19", en: "Constraints: oil and COVID-19" },
      status: "sustained",
      now: { fr: "Vision GABON-2050 & PNDC", en: "GABON-2050 Vision and the PNDC" } },
    { prev: { fr: "Capital vert et transformation structurelle", en: "Green capital and structural transformation" },
      status: "evolved",
      now: { fr: "Forages solaires & gouvernance locale", en: "Solar boreholes and local governance" } },
    { prev: { fr: "Éducation : scolarisation 88 %, parité genre", en: "Education: 88% enrolment, gender parity" },
      status: "evolved",
      now: { fr: "92,8 % d'accès à l'énergie, mix renouvelable 91 %", en: "92.8% energy access, 91% renewable mix" } },
    { prev: { fr: "Avancées environnementales", en: "Environmental progress" },
      status: "sustained",
      now: { fr: "Industrie, innovation & diversification", en: "Industry, innovation and diversification" } },
    { prev: { fr: "Défis sociaux, prospérité & paix", en: "Social challenges, prosperity and peace" },
      status: "evolved",
      now: { fr: "Réduction de la fracture rurale-urbaine", en: "Narrowing the rural–urban divide" } }
  ],

  concepts: {
    caption: {
      fr: "Le Gabon met l'accent sur l'eau, l'énergie et la réduction des fractures territoriales.",
      en: "Gabon's review emphasises water, energy and the closing of territorial divides."
    },
    items: [
      { label: { fr: "croissance & PIB", en: "growth & GDP" }, value: 8 },
      { label: { fr: "inclusion sociale", en: "social inclusion" }, value: 8 },
      { label: { fr: "investissement", en: "investment" }, value: 7 },
      { label: { fr: "gouvernance", en: "governance" }, value: 6 },
      { label: { fr: "infrastructure", en: "infrastructure" }, value: 5 },
      { label: { fr: "énergie", en: "energy" }, value: 5 },
      { label: { fr: "environnement", en: "environment" }, value: 4 },
      { label: { fr: "diversification", en: "diversification" }, value: 3 },
      { label: { fr: "partenariats", en: "partnerships" }, value: 1 }
    ]
  },

  indicators: [
    { id: "elec_nat", sdg: 7,
      label: { fr: "Électrification nationale", en: "National electrification" },
      value: 92.8, unit: "%",
      note: { fr: "Portée par le complexe hydroélectrique de Grand Poubara, Tchimbélé et Kinguélé.",
              en: "Driven by the Grand Poubara, Tchimbélé and Kinguélé hydropower complex." },
      source: "RNV 2026 · indicateur ODD 7.1.1" },
    { id: "elec_rural", sdg: 7,
      label: { fr: "Électrification rurale", en: "Rural electrification" },
      value: 26.9, unit: "%",
      note: { fr: "Près de trois ruraux sur quatre restent sans électricité, alors que la moyenne nationale approche 93 %.",
              en: "Almost three rural people in four remain without electricity, while the national average nears 93%." },
      source: "RNV 2026" },
    { id: "renew", sdg: 7,
      label: { fr: "Part des renouvelables dans le mix", en: "Renewables in the generation mix" },
      value: 91, unit: "%+",
      note: { fr: "L'un des mix électriques les plus propres du continent, d'origine essentiellement hydroélectrique.",
              en: "One of the cleanest power mixes on the continent, overwhelmingly hydroelectric." },
      source: "RNV 2026" },
    { id: "water_rural", sdg: 6,
      label: { fr: "Accès rural à l'eau", en: "Rural water access" },
      value: 30, unit: "%",
      note: { fr: "Stagnant, contre 60 % en milieu urbain — dans l'un des pays les mieux arrosés d'Afrique.",
              en: "Stagnant, against 60% in urban areas — in one of the best-watered countries in Africa." },
      source: "RNV 2026 · indicateur ODD 6.1.1" },
    { id: "libreville", sdg: 6,
      label: { fr: "Déficit hydrique du Grand Libreville", en: "Greater Libreville water deficit" },
      value: 50000, unit: " m³/j",
      note: { fr: "Un déficit d'infrastructure et de gouvernance, non de ressource : les fleuves sont pleins, les canalisations insuffisantes.",
              en: "A deficit of infrastructure and governance, not of resource: the rivers are full, the pipes are not." },
      source: "RNV 2026" },
    { id: "forest", sdg: 13,
      label: { fr: "Couverture forestière", en: "Forest cover" },
      value: 85, unit: "%",
      note: { fr: "Le Gabon absorbe plus de CO₂ qu'il n'en émet — un puits de carbone d'importance mondiale.",
              en: "Gabon absorbs more CO₂ than it emits — a carbon sink of global significance." },
      source: "RNV 2022 · RNV 2026" }
  ],

  charts: [
    { id: "divide", type: "gap", sdg: 7,
      title: { fr: "Une moyenne nationale qui masque le pays réel, 2024",
               en: "A national average that hides the real country, 2024" },
      unit: "%",
      items: [
        { label: { fr: "Électrification nationale", en: "National electrification" }, value: 92.8, emphasis: false },
        { label: { fr: "Électrification rurale", en: "Rural electrification" }, value: 26.9, emphasis: true },
        { label: { fr: "Accès urbain à l'eau", en: "Urban water access" }, value: 60, emphasis: false },
        { label: { fr: "Accès rural à l'eau", en: "Rural water access" }, value: 30, emphasis: true }
      ],
      insight: {
        fr: "C'est le graphique central du Gabon. Le taux national d'électrification de 92,8 % est authentique, mais il est porté par une population urbaine à 87 % : il décrit surtout les villes. En zone rurale, l'électricité tombe à 26,9 % et l'eau à 30 %. Citer la seule moyenne nationale reviendrait à effacer la moitié du problème que la RNV 2026 s'emploie précisément à nommer.",
        en: "This is Gabon's central chart. The 92.8% national electrification rate is genuine, but it rests on a population that is 87% urban: it largely describes the cities. In rural areas electricity falls to 26.9% and water to 30%. Quoting the national average alone would erase half of the very problem the 2026 review sets out to name."
      },
      source: "RNV 2026 · indicateurs ODD 6.1.1 et 7.1.1" },

    { id: "revenue", type: "line", sdg: 17,
      title: { fr: "Recettes publiques totales, en % du PIB", en: "Total government revenue, % of GDP" },
      unit: "%",
      xLabel: { fr: "Année", en: "Year" },
      series: [
        { key: "total", label: { fr: "Recettes publiques totales", en: "Total government revenue" },
          points: [{ x: "2010", y: 38 }, { x: "2016", y: 21 }, { x: "2024", y: 21 }] }
      ],
      insight: {
        fr: "Les recettes publiques ont été presque divisées par deux après l'effondrement des prix du pétrole de 2014 et ne s'en sont jamais remises : le palier de 2016 est devenu le nouveau niveau normal. Seuls les trois points effectivement documentés sont tracés — aucune année intermédiaire n'a été interpolée pour lisser la courbe. C'est ce plateau, et non un accident ponctuel, qui rend la diversification du PNDC urgente.",
        en: "Government revenue almost halved after the 2014 oil-price collapse and never recovered: the 2016 level became the new normal. Only the three points that are actually documented are plotted — no intermediate years have been interpolated to smooth the line. It is that plateau, rather than a one-off shock, that makes the PNDC's diversification urgent."
      },
      source: "RNV 2026 · FMI, Article IV 2024 · Banque mondiale, Gabon Economic Update 2024" },

    { id: "nonoil", type: "gap", sdg: 17,
      title: { fr: "Recettes hors pétrole, en % du PIB", en: "Non-oil revenue, % of GDP" },
      unit: "%",
      items: [
        { label: { fr: "2010", en: "2010" }, value: 8, emphasis: false },
        { label: { fr: "2024", en: "2024" }, value: 13, emphasis: true }
      ],
      insight: {
        fr: "La seule tendance franchement encourageante du tableau budgétaire gabonais : la base fiscale hors hydrocarbures a progressé de cinq points de PIB en quatorze ans. Elle est présentée ici comme deux repères plutôt qu'en courbe, parce que la source ne documente que ces deux années — tracer une ligne entre elles laisserait croire à une progression régulière que rien ne vient étayer. La direction est bonne ; le rythme reste inférieur à celui qu'exigerait le remplacement de la rente pétrolière.",
        en: "The one genuinely encouraging trend in Gabon's fiscal picture: the non-hydrocarbon tax base gained five points of GDP in fourteen years. It is shown as two markers rather than a line because the source documents only those two years — drawing a line between them would imply a steady climb that nothing supports. The direction is right; the pace is still slower than replacing the oil rent would require."
      },
      source: "RNV 2026 · FMI, Article IV 2024" },

    { id: "debt", type: "line", sdg: 17,
      title: { fr: "Dette extérieure, en % du PIB", en: "External debt, % of GDP" },
      unit: "%",
      xLabel: { fr: "Année", en: "Year" },
      series: [
        { key: "debt", label: { fr: "Dette extérieure", en: "External debt" },
          points: [{ x: "2010", y: 29 }, { x: "2016", y: 43 }, { x: "2024", y: 36 }] }
      ],
      insight: {
        fr: "La dette extérieure a bondi de 29 % à 43 % du PIB entre 2010 et 2016, lorsque l'État a emprunté pour compenser le manque à gagner pétrolier. Elle est redescendue à environ 36 %. L'appartenance à la CEMAC discipline la dépense mais prive le Gabon de la dévaluation comme outil d'ajustement : la gestion de la dette reste donc le principal levier budgétaire dont dispose le PNDC.",
        en: "External debt jumped from 29% to 43% of GDP between 2010 and 2016, when the State borrowed to offset the shortfall in oil receipts. It has since fallen back to around 36%. CEMAC membership disciplines spending but denies Gabon devaluation as an adjustment tool: debt management therefore remains the principal fiscal lever available to the PNDC."
      },
      source: "Base de données ODD des Nations Unies, objectif 17 · RNV 2026" },

    { id: "concept_water", type: "gap", sdg: 6,
      title: { fr: "L'eau au Gabon : un problème de tuyaux, pas de pluie",
               en: "Water in Gabon: a problem of pipes, not rainfall" },
      unit: "%",
      items: [
        { label: { fr: "Couverture forestière (régule le cycle de l'eau)", en: "Forest cover (regulates the water cycle)" }, value: 85, emphasis: false },
        { label: { fr: "Accès urbain à l'eau", en: "Urban water access" }, value: 60, emphasis: false },
        { label: { fr: "Accès rural à l'eau", en: "Rural water access" }, value: 30, emphasis: true }
      ],
      insight: {
        fr: "Le Gabon est équatorial, couvert à 85 % de forêt, et traversé de fleuves permanents. Et pourtant sa capitale manque de 50 000 m³ d'eau par jour et sept ruraux sur dix n'ont pas d'eau potable. La RNV 2026 est explicite : ce n'est pas une pénurie de ressource mais un déficit d'infrastructure et de gouvernance. C'est aussi ce qui rend le problème soluble — et ce qui justifie la priorité donnée aux forages solaires, qui relient l'ODD 6 et l'ODD 7 dans un même investissement.",
        en: "Gabon is equatorial, 85% forested and crossed by permanent rivers. Yet its capital is short of 50,000 m³ of water a day and seven rural people in ten have no safe water. The 2026 review is explicit: this is not resource scarcity but a deficit of infrastructure and governance. That is also what makes it solvable — and what justifies the priority given to solar boreholes, which tie SDG 6 and SDG 7 together in a single investment."
      },
      source: "RNV 2026 · indicateur ODD 6.1.1" }
  ],

  instruments: [
    { name: { fr: "Vision GABON-2050", en: "GABON-2050 Vision" },
      kicker: { fr: "horizon national", en: "national horizon" },
      text: {
        fr: "La Vision GABON-2050 fixe l'ambition de long terme : une économie diversifiée au-delà du pétrole, une société équitable où les fractures territoriales sont comblées, et un développement vert valorisant le patrimoine forestier pour la finance carbone. Les deux RNV, 2022 et 2026, sont des jalons à l'intérieur de ce cadre.",
        en: "The GABON-2050 Vision sets the long-term ambition: an economy diversified beyond oil, an equitable society in which territorial divides are closed, and green development that turns the country's forest endowment into carbon finance. The two reviews, 2022 and 2026, are milestones within that frame."
      },
      source: "RNV 2026 · RNV 2022" },
    { name: { fr: "PNDC", en: "National Development and Growth Plan" },
      kicker: { fr: "plan opérationnel", en: "operational plan" },
      text: {
        fr: "Le Plan national de développement et de la croissance traduit la Vision en plans sectoriels, en programme pluriannuel d'investissement public et en cadre de suivi. Un Comité de pilotage placé sous la Présidence coordonne les ministères, qui alignent budgets et rapports trimestriels sur les cibles du PNDC, elles-mêmes cartographiées sur les indicateurs des ODD.",
        en: "The National Development and Growth Plan turns the Vision into sector plans, a multi-year public investment programme and a monitoring framework. A steering committee under the Presidency coordinates ministries, which align budgets and quarterly reporting with PNDC targets, themselves mapped onto the SDG indicators."
      },
      source: "RNV 2026 · PNDC" },
    { name: { fr: "Programme de forages solaires", en: "Solar borehole programme" },
      kicker: { fr: "nexus eau-énergie", en: "the water–energy nexus" },
      text: {
        fr: "Explicitement priorisé par le RNV 2026 pour l'eau rurale : des panneaux solaires alimentent des pompes immergées exploitant les nappes phréatiques, supprimant le coût du diesel et étendant un service fiable aux villages hors réseau. Un seul investissement qui fait progresser l'ODD 6 et l'ODD 7 à la fois — la réponse la plus directe aux 30 % d'accès rural à l'eau.",
        en: "Explicitly prioritised by the 2026 review for rural water: solar panels drive submersible pumps drawing on groundwater, removing diesel costs and extending reliable service to off-grid villages. A single investment that advances SDG 6 and SDG 7 at once — the most direct answer to rural water access of 30%."
      },
      source: "RNV 2026" },
    { name: { fr: "Zone économique spéciale de Nkok", en: "Nkok Special Economic Zone" },
      kicker: { fr: "valeur ajoutée locale", en: "local value added" },
      text: {
        fr: "Le Gabon a interdit l'exportation de grumes brutes en 2010, contraignant la transformation du bois sur le territoire : scieries, usines de contreplaqué et fabricants de meubles se sont regroupés dans la ZES de Nkok. Les services pétroliers et le raffinage du manganèse à Port-Gentil étendent la même logique aux ressources minières. C'est le pari industriel sur lequel repose la diversification du PNDC.",
        en: "Gabon banned raw log exports in 2010, forcing timber to be processed on national soil: sawmills, plywood plants and furniture makers clustered in the Nkok Special Economic Zone. Oil services and manganese refining at Port-Gentil extend the same logic to mineral resources. This is the industrial bet on which the PNDC's diversification rests."
      },
      source: "RNV 2022 · RNV 2026" },
    { name: { fr: "Réforme de la gouvernance locale", en: "Local governance reform" },
      kicker: { fr: "l'infrastructure qui dure", en: "infrastructure that lasts" },
      text: {
        fr: "Construire des infrastructures ne suffit pas si les collectivités ne peuvent ni les gérer ni les entretenir. La réforme transfère responsabilités et financements aux communes et préfectures — condition, selon la revue, pour que l'électricité et l'eau atteignent durablement les zones rurales au lieu de dépendre de l'État central.",
        en: "Building infrastructure is not enough if local authorities can neither run nor maintain it. The reform devolves responsibility and funding to communes and prefectures — the condition, the review argues, for electricity and water to reach rural areas durably rather than depending on central government."
      },
      source: "RNV 2026" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        fr: "La tuile « Recettes / PIB » du tableau de bord précédent affichait 15,2 %, alors que son propre graphique de recettes indiquait environ 21 % du PIB pour la même année.",
        en: "The previous dashboard's \"Revenue / GDP\" tile showed 15.2%, while its own revenue chart put the same year at around 21% of GDP."
      },
      resolution: {
        fr: "Le chiffre de 15,2 % ne correspond à aucune source identifiable : ni au graphique du tableau de bord, ni au FMI (Article IV 2024) ni à la Banque mondiale, qui situent les recettes publiques autour de 21-23 % du PIB. Il a été supprimé. Les recettes sont désormais présentées uniquement sous forme de série chronologique, avec les recettes totales et hors pétrole distinguées.",
        en: "The 15.2% figure matches no identifiable source: not the dashboard's own chart, nor the IMF (2024 Article IV), nor the World Bank, which put government revenue at roughly 21–23% of GDP. It has been removed. Revenue is now shown only as a time series, with total and non-oil revenue kept distinct."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Six graphiques au moins portaient une légende sans rapport avec leurs données. Le graphique de la dette extérieure était légendé « Croissance du PIB (%) » et « Inflation (%) » ; celui de l'accès à l'eau opposait « Urbain » à « Électrification rurale » ; celui des recettes hors pétrole était légendé « Recettes internes (%) » et « Financement externe (%) » ; le panneau ODD 11 sur l'urbanisation portait l'axe « Recettes fiscales (% du PIB) ».",
        en: "At least six charts carried legends unrelated to their data. The external-debt chart was legended \"GDP growth (%)\" and \"Inflation (%)\"; the water-access chart set \"Urban\" against \"Rural electrification\"; the non-oil revenue chart was legended \"Domestic revenue (%)\" and \"External financing (%)\"; the SDG 11 urbanisation panel carried the axis label \"Tax revenue (% of GDP)\"."
      },
      resolution: {
        fr: "Ce sont des résidus de copier-coller du gabarit dont les 19 tableaux de bord ont été clonés. Toutes les étiquettes sont désormais générées depuis la couche de données : une série ne peut plus afficher un libellé qui n'est pas le sien.",
        en: "These are copy-paste residue from the template all 19 dashboards were cloned from. Every label is now generated from the data layer: a series can no longer display a name that is not its own."
      } },
    { severity: "contradiction",
      issue: {
        fr: "Deux graphiques intitulés « Priorités de financement du développement par secteur » présentaient des classements sectoriels différents et incompatibles (le premier plaçait en tête énergie, infrastructure et finance verte ; le second, emplois décents, industrialisation et énergie).",
        en: "Two charts titled \"Development financing priorities by sector\" presented different and incompatible sector rankings (the first led with energy, infrastructure and green finance; the second with decent jobs, industrialisation and energy)."
      },
      resolution: {
        fr: "Aucun des deux classements n'est traçable jusqu'à une source publiée, et le PNDC ne publie pas de ventilation sectorielle chiffrée de ses engagements. Les deux graphiques ont été retirés plutôt que d'en arbitrer un arbitrairement.",
        en: "Neither ranking is traceable to a published source, and the PNDC does not publish a costed sectoral breakdown of its commitments. Both charts have been removed rather than one being arbitrarily preferred."
      } },
    { severity: "unverified",
      issue: {
        fr: "Le tableau de bord affirmait que les partenaires au développement s'étaient engagés « à hauteur de 1,5 milliard de dollars jusqu'en 2035 ».",
        en: "The dashboard asserted that development partners had committed \"USD 1.5 billion through to 2035\"."
      },
      resolution: {
        fr: "Cet engagement n'a pu être rattaché ni au RNV 2026 ni à aucune source publiée. Il a été retiré : mieux vaut ne rien avancer qu'avancer un chiffre invérifiable devant une audience intergouvernementale.",
        en: "This commitment could not be traced to the 2026 review or to any published source. It has been removed: better to claim nothing than to put an uncheckable figure in front of an intergovernmental audience."
      } },
    { severity: "corrected",
      issue: {
        fr: "Les graphiques de recettes et de dette affichaient des axes à quatre repères (2010, 2015, 2021, 2024) alors que la source ne documente que trois années, les points intermédiaires étant interpolés pour étoffer la courbe.",
        en: "The revenue and debt charts displayed four-tick axes (2010, 2015, 2021, 2024) while the source documents only three years, the intermediate points being interpolated to give the line more body."
      },
      resolution: {
        fr: "Une courbe interpolée affirme une trajectoire que la donnée ne soutient pas. Les graphiques ne tracent désormais que les points effectivement publiés. Les recettes hors pétrole, qui ne comptent que deux années documentées, sont présentées comme deux repères et non comme une ligne.",
        en: "An interpolated line asserts a trajectory the data does not support. The charts now plot only the points that are actually published. Non-oil revenue, which has just two documented years, is shown as two markers rather than a line."
      } },
    { severity: "corrected",
      issue: {
        fr: "Le tableau de bord opposait l'électrification rurale (26,9 %) à un accès urbain « ≈ 100 % », chiffre absent de la fiche.",
        en: "The dashboard set rural electrification (26.9%) against urban access of \"≈100%\", a figure absent from the factsheet."
      },
      resolution: {
        fr: "L'ordre de grandeur est cohérent — avec 87 % de population urbaine, une moyenne nationale de 92,8 % implique effectivement un accès urbain proche de la saturation — mais il s'agit d'une déduction, non d'une donnée publiée. Le graphique compare désormais la moyenne nationale publiée (92,8 %) au taux rural publié (26,9 %), sans avancer de chiffre urbain qui ne figure pas dans la source.",
        en: "The order of magnitude holds — with an 87% urban population, a national average of 92.8% does imply near-saturated urban access — but it is an inference, not a published datum. The chart now compares the published national average (92.8%) with the published rural rate (26.9%), without asserting an urban figure the source does not contain."
      } }
  ]
});
