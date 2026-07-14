/* Tanzania — VNR 2023 → 2026. Source factsheet authored in English.
   Fact-checked against factsheets.pdf p.18, the 2026 VNR key messages, Tanzania NBS
   energy surveys and the 2026/27 Budget Speech. See `factcheck` at the bottom. */
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

  themes: [
    { sdg: 6,
      title: { en: "Water Access & Self-Reliance", fr: "Accès à l'eau et autonomie" },
      text: {
        en: "Rural water coverage rose to 85% and regional centres to 92%, with non-revenue water and sanitation flagged as priorities for acceleration.",
        fr: "La couverture rurale en eau a atteint 85 % et celle des centres régionaux 92 %, l'eau non facturée et l'assainissement étant désignés comme priorités d'accélération."
      } },
    { sdg: 7,
      title: { en: "Energy Security as a Growth Engine", fr: "La sécurité énergétique, moteur de croissance" },
      text: {
        en: "The Julius Nyerere Hydropower Project doubled generation capacity in a year and connected all 26 regions; electricity access reached 86% with renewables at 80%.",
        fr: "Le projet hydroélectrique Julius Nyerere a doublé la capacité de production en un an et raccordé les 26 régions ; l'accès à l'électricité atteint 86 %, avec 80 % de renouvelables."
      } },
    { sdg: 9,
      title: { en: "Connectivity Revolution", fr: "Révolution de la connectivité" },
      text: {
        en: "The Standard Gauge Railway cut Dar–Dodoma travel from 12 hours to 3, carrying nearly 5 million passengers, while internet penetration surged from 49% to 85%.",
        fr: "Le chemin de fer à écartement standard a réduit le trajet Dar-Dodoma de 12 heures à 3, transportant près de 5 millions de passagers, tandis que la pénétration d'Internet est passée de 49 % à 85 %."
      } },
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
      } },
    { sdg: 17,
      title: { en: "Fiscal Self-Reliance", fr: "Autonomie budgétaire" },
      text: {
        en: "Domestic revenue climbed to 16.4% of GDP and budget self-reliance rose from 58% to 78%, reinforcing the financing base for the SDGs.",
        fr: "Les recettes intérieures ont atteint 16,4 % du PIB et l'autonomie budgétaire est passée de 58 % à 78 %, renforçant la base de financement des ODD."
      } }
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
      value: 86, unit: "%",
      note: { en: "Grid, mini-grid and off-grid solar combined. Not the same as a grid connection.",
              fr: "Réseau, mini-réseaux et solaire hors réseau confondus. À distinguer du raccordement au réseau." },
      source: "VNR 2026 · SDG indicator 7.1.1" },
    { id: "elec_grid", sdg: 7,
      label: { en: "Households connected to the national grid", fr: "Ménages raccordés au réseau national" },
      value: 62.1, unit: "%",
      note: { en: "Up from 45.8% in 2021/22. Every village has grid infrastructure; most households are not yet connected to it.",
              fr: "Contre 45,8 % en 2021-2022. Tous les villages disposent d'une infrastructure de réseau ; la plupart des ménages n'y sont pas encore raccordés." },
      source: "VNR 2026 · NBS Energy Access Survey" },
    { id: "renew", sdg: 7,
      label: { en: "Renewables in the generation mix", fr: "Part des renouvelables dans le mix de production" },
      value: 80, unit: "%",
      note: { en: "Driven by the 2,115 MW Julius Nyerere Hydropower Plant, which took installed capacity to 4,504.9 MW.",
              fr: "Portée par la centrale hydroélectrique Julius Nyerere (2 115 MW), qui a porté la capacité installée à 4 504,9 MW." },
      source: "VNR 2026" },
    { id: "water_rural", sdg: 6,
      label: { en: "Rural water coverage", fr: "Couverture rurale en eau" },
      value: 85, unit: "%",
      note: { en: "Regional centres reach 92%. Non-revenue water and sanitation are named as the acceleration priorities.",
              fr: "Les centres régionaux atteignent 92 %. L'eau non facturée et l'assainissement sont désignés comme priorités d'accélération." },
      source: "VNR 2026 · SDG indicator 6.1.1" },
    { id: "internet", sdg: 9,
      label: { en: "Internet penetration", fr: "Pénétration d'Internet" },
      value: 85, unit: "%",
      note: { en: "Up from 49%, supported by 156 new 4G sites targeting rural and peri-urban areas.",
              fr: "Contre 49 %, grâce à 156 nouveaux sites 4G ciblant les zones rurales et périurbaines." },
      source: "VNR 2026" },
    { id: "selfreliance", sdg: 17,
      label: { en: "Budget financed by domestic revenue", fr: "Budget financé par les recettes intérieures" },
      value: 78, unit: "%",
      note: { en: "Up from 58%. Tanzania's 2026/27 budget puts the domestic share at 74.2% and aid at 0.9%.",
              fr: "Contre 58 %. Le budget 2026-2027 de la Tanzanie fixe la part intérieure à 74,2 % et l'aide à 0,9 %." },
      source: "VNR 2026 · Budget Speech 2026/27" }
  ],

  charts: [
    { id: "elec_ladder", type: "gap", sdg: 7,
      title: { en: "Grid reach is not the same as a grid connection, 2025",
               fr: "Couverture du réseau et raccordement au réseau, 2025" },
      unit: "%",
      items: [
        { label: { en: "Villages reached by the grid", fr: "Villages desservis par le réseau" }, value: 100, emphasis: false },
        { label: { en: "Electricity access, any source", fr: "Accès à l'électricité, toutes sources" }, value: 86, emphasis: false },
        { label: { en: "Households connected to the grid", fr: "Ménages raccordés au réseau" }, value: 62.1, emphasis: true }
      ],
      insight: {
        en: "Three figures that are often quoted interchangeably measure three different things. Every village now has grid infrastructure and 86% of people have electricity from some source — but only 62% of households are actually connected to the grid. The distance between reach and connection is the country's real energy challenge, and it is invisible if only one of these numbers is shown.",
        fr: "Trois chiffres souvent cités indifféremment mesurent trois réalités distinctes. Tous les villages disposent désormais d'une infrastructure de réseau et 86 % de la population a accès à l'électricité par une source ou une autre — mais seuls 62 % des ménages sont réellement raccordés au réseau. L'écart entre desserte et raccordement constitue le véritable défi énergétique du pays, et il disparaît si l'on ne présente qu'un seul de ces chiffres."
      },
      source: "VNR 2026 · NBS Energy Access Survey · SDG indicator 7.1.1" },

    { id: "revenue_measures", type: "gap", sdg: 17,
      title: { en: "Three fiscal figures that measure three different things, 2024/25",
               fr: "Trois chiffres budgétaires qui mesurent trois réalités différentes, 2024-2025" },
      unit: "%",
      items: [
        { label: { en: "Budget financed by domestic revenue", fr: "Budget financé par les recettes intérieures" }, value: 78, emphasis: true },
        { label: { en: "Domestic revenue, % of GDP", fr: "Recettes intérieures, en % du PIB" }, value: 16.4, emphasis: false },
        { label: { en: "Tax revenue, % of GDP", fr: "Recettes fiscales, en % du PIB" }, value: 13.3, emphasis: false }
      ],
      insight: {
        en: "These three numbers were used almost interchangeably across the old material, which is how a dashboard claiming 95.74% \"budget on own taxes\" ended up next to a fact sheet claiming 78%. They are not alternatives to each other: 78% is a share of the budget, while 16.4% and 13.3% are shares of GDP — and domestic revenue exceeds tax revenue because it also counts non-tax receipts. Read together they are consistent, and they say Tanzania now funds roughly four-fifths of its own budget.",
        fr: "Ces trois chiffres étaient employés de façon presque interchangeable dans les documents précédents : c'est ainsi qu'un tableau de bord affichant 95,74 % de « budget financé par l'impôt » s'est retrouvé à côté d'une fiche annonçant 78 %. Ils ne sont pas substituables : 78 % est une part du budget, tandis que 16,4 % et 13,3 % sont des parts du PIB — et les recettes intérieures dépassent les recettes fiscales parce qu'elles intègrent aussi les recettes non fiscales. Lus ensemble, ils sont cohérents et disent que la Tanzanie finance désormais environ quatre cinquièmes de son propre budget."
      },
      source: "VNR 2026, Table 4.5 · Budget Speech 2026/27 · SDG indicator 17.1.1" },

    { id: "fiscal", type: "line", sdg: 17,
      title: { en: "Tax revenue, % of GDP", fr: "Recettes fiscales, en % du PIB" },
      unit: "%",
      xLabel: { en: "Fiscal year", fr: "Exercice budgétaire" },
      series: [
        { key: "tax", label: { en: "Tax revenue", fr: "Recettes fiscales" },
          points: [{ x: "2020/21", y: 11.2 }, { x: "2024/25", y: 13.3 }] }
      ],
      insight: {
        en: "Two points, because those are the two the review actually reports — no intermediate years have been interpolated to make the line look richer. Tax revenue gained roughly two points of GDP over four years, and Tanzania's own 2026/27 budget projects 13.7%, so the trend is real rather than a one-year artefact.",
        fr: "Deux points, parce que ce sont les deux que la revue rapporte réellement — aucune année intermédiaire n'a été interpolée pour étoffer la courbe. Les recettes fiscales ont gagné environ deux points de PIB en quatre ans, et le budget tanzanien 2026-2027 projette lui-même 13,7 % : la tendance est réelle et non un artefact d'une seule année."
      },
      source: "VNR 2026, Table 4.5 · SDG indicator 17.1.1" },

    { id: "debt", type: "line", sdg: 17,
      title: { en: "Public debt, % of GDP", fr: "Dette publique, en % du PIB" },
      unit: "%",
      xLabel: { en: "Fiscal year", fr: "Exercice budgétaire" },
      series: [
        { key: "debt", label: { en: "Public debt", fr: "Dette publique" },
          points: [{ x: "2020/21", y: 41.3 }, { x: "2024/25", y: 51.0 }] }
      ],
      insight: {
        en: "Debt rose roughly ten points of GDP while the investment programme accelerated. The VNR does not present this as a failure but as the cost of the infrastructure push — and names tax effort, debt-service discipline and rigorous project preparation as the conditions for keeping it sustainable.",
        fr: "La dette a progressé d'environ dix points de PIB pendant l'accélération du programme d'investissement. La RNV n'y voit pas un échec mais le coût de l'effort d'infrastructure — et désigne l'effort fiscal, la discipline du service de la dette et une préparation rigoureuse des projets comme les conditions de sa soutenabilité."
      },
      source: "VNR 2026 · SDG indicator 17.4.1" },

    { id: "wash", type: "gap", sdg: 6,
      title: { en: "Water is ahead; hygiene is the frontier, 2025", fr: "L'eau progresse ; l'hygiène reste la frontière, 2025" },
      unit: "%",
      items: [
        { label: { en: "Regional centre water coverage", fr: "Couverture en eau des centres régionaux" }, value: 92, emphasis: false },
        { label: { en: "Rural water coverage", fr: "Couverture rurale en eau" }, value: 85, emphasis: false },
        { label: { en: "Adequate hygiene services", fr: "Services d'hygiène adéquats" }, value: 26, emphasis: true }
      ],
      insight: {
        en: "Water coverage is genuinely high, in rural areas as well as towns. Hygiene is not: only about a quarter of the population has adequate services, and open defecation persists in places. Reporting the water figure alone would flatter the picture — the honest reading is a strong pipe network sitting on top of a weak sanitation base.",
        fr: "La couverture en eau est réellement élevée, en zone rurale comme urbaine. L'hygiène ne l'est pas : environ un quart seulement de la population dispose de services adéquats et la défécation à l'air libre persiste par endroits. Ne présenter que le chiffre de l'eau embellirait le tableau — la lecture honnête est celle d'un réseau solide reposant sur une base d'assainissement fragile."
      },
      source: "VNR 2026 · SDG indicators 6.1.1 & 6.2.1" },

    { id: "manuf", type: "line", sdg: 9,
      title: { en: "Manufacturing value added, % of GDP", fr: "Valeur ajoutée manufacturière, en % du PIB" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "mva", label: { en: "Manufacturing value added", fr: "Valeur ajoutée manufacturière" },
          points: [{ x: "2020", y: 7.7 }, { x: "2025", y: 5.9 }] }
      ],
      insight: {
        en: "The one clearly negative trend in Tanzania's review, and it is worth showing. Even as transport and digital infrastructure expanded, manufacturing's share of the economy fell from 7.7% to 5.9%. Connectivity has not yet converted into industrial capacity, and informality remains above 96% of non-agricultural employment.",
        fr: "C'est la seule tendance nettement négative de la revue tanzanienne, et elle mérite d'être montrée. Alors même que les infrastructures de transport et numériques s'étendaient, la part de l'industrie manufacturière dans l'économie est tombée de 7,7 % à 5,9 %. La connectivité ne s'est pas encore convertie en capacité industrielle et l'informalité dépasse toujours 96 % de l'emploi non agricole."
      },
      source: "VNR 2026 · SDG indicator 9.2.1" }
  ],

  instruments: [
    { name: { en: "Dira 2050 & FYDP IV", fr: "Dira 2050 et le 4e Plan quinquennal" },
      kicker: { en: "national vision", fr: "vision nationale" },
      text: {
        en: "The Tanzania Development Vision 2050 succeeds Vision 2025, with the Fourth Five-Year Development Plan as its first implementation phase. The review was deliberately timed to this hand-off so that acceleration of lagging SDGs is written into the new plan rather than bolted on. Tanzania runs no separate SDG tracker — one plan, one reporting line.",
        fr: "La Vision de développement de la Tanzanie 2050 succède à la Vision 2025, le 4e Plan quinquennal de développement en constituant la première phase de mise en œuvre. La revue a été délibérément calée sur ce passage de relais afin que l'accélération des ODD en retard soit inscrite dans le nouveau plan plutôt qu'ajoutée après coup. La Tanzanie ne tient pas de dispositif de suivi distinct des ODD : un seul plan, une seule chaîne de reporting."
      },
      source: "VNR 2026" },
    { name: { en: "Julius Nyerere Hydropower Plant", fr: "Centrale hydroélectrique Julius Nyerere" },
      kicker: { en: "2,115 MW", fr: "2 115 MW" },
      text: {
        en: "The single largest driver of the energy expansion. It roughly doubled generation capacity within a year, lifting installed capacity to 4,504.9 MW and taking renewables to 80% of the mix, and helped extend grid infrastructure to all 26 regions.",
        fr: "Le principal moteur de l'expansion énergétique. Elle a pratiquement doublé la capacité de production en un an, portant la capacité installée à 4 504,9 MW et la part des renouvelables à 80 % du mix, et a contribué à étendre l'infrastructure de réseau aux 26 régions."
      },
      source: "VNR 2026" },
    { name: { en: "Standard Gauge Railway & port modernisation", fr: "Chemin de fer à écartement standard et modernisation portuaire" },
      kicker: { en: "12 hours → 3", fr: "12 heures → 3" },
      text: {
        en: "The railway cut Dar es Salaam–Dodoma travel from twelve hours to three and has carried close to five million passengers. Combined with upgrades at Dar es Salaam, Tanga and Mtwara ports, it is the backbone of Tanzania's claim to be a regional trade and mobility hub.",
        fr: "Le chemin de fer a réduit le trajet Dar es Salaam-Dodoma de douze heures à trois et a transporté près de cinq millions de passagers. Conjugué à la modernisation des ports de Dar es Salaam, Tanga et Mtwara, il constitue l'ossature de l'ambition tanzanienne de pôle régional du commerce et de la mobilité."
      },
      source: "VNR 2026" },
    { name: { en: "Domestic resource mobilisation", fr: "Mobilisation des ressources intérieures" },
      kicker: { en: "58% → 78% of the budget", fr: "58 % → 78 % du budget" },
      text: {
        en: "Broadening the tax base lifted the share of the budget financed from domestic revenue from 58% to 78%, with tax revenue at 13.3% of GDP and domestic revenue at 16.4%. The VNR rates SDG 17 as on track, and aid now covers under 1% of the 2026/27 budget.",
        fr: "L'élargissement de l'assiette fiscale a porté la part du budget financée sur recettes intérieures de 58 % à 78 %, avec des recettes fiscales à 13,3 % du PIB et des recettes intérieures à 16,4 %. La RNV juge l'ODD 17 en bonne voie et l'aide couvre désormais moins de 1 % du budget 2026-2027."
      },
      source: "VNR 2026, Table 4.5 · Budget Speech 2026/27" },
    { name: { en: "4G network expansion", fr: "Extension du réseau 4G" },
      kicker: { en: "156 new sites", fr: "156 nouveaux sites" },
      text: {
        en: "156 new 4G sites were deployed with an explicit rural and peri-urban focus, part of the push that lifted internet penetration from 49% to 85% of the population.",
        fr: "156 nouveaux sites 4G ont été déployés avec une priorité explicite aux zones rurales et périurbaines, dans le cadre de l'effort qui a porté la pénétration d'Internet de 49 % à 85 % de la population."
      },
      source: "VNR 2026" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        en: "The previous dashboard headlined electricity at 62.1% (\"Electricity Connectivity\"), while the factsheet reports 86%. Presented side by side, the two flatly contradicted each other.",
        fr: "Le tableau de bord précédent affichait l'électricité à 62,1 % (« connectivité électrique »), alors que la fiche indique 86 %. Présentés côte à côte, ces deux chiffres se contredisaient frontalement."
      },
      resolution: {
        en: "Both are correct but measure different things: 86% is access to electricity from any source (grid, mini-grid, off-grid solar); 62.1% is the share of households connected to the national grid, up from 45.8% in 2021/22 per the NBS energy surveys. Both are now shown, explicitly labelled, and the gap between them is presented as the finding rather than hidden.",
        fr: "Les deux sont exacts mais mesurent des réalités différentes : 86 % correspond à l'accès à l'électricité toutes sources confondues (réseau, mini-réseaux, solaire hors réseau) ; 62,1 % correspond à la part des ménages raccordés au réseau national, contre 45,8 % en 2021-2022 selon les enquêtes énergétiques du NBS. Les deux sont désormais présentés, explicitement libellés, et l'écart entre eux est exposé comme un résultat plutôt que masqué."
      } },
    { severity: "contradiction",
      issue: {
        en: "The previous dashboard headlined \"Budget on Own Taxes — 95.74%\", while the factsheet reports budget self-reliance rising from 58% to 78%.",
        fr: "Le tableau de bord précédent affichait « budget financé par les impôts propres — 95,74 % », alors que la fiche indique une autonomie budgétaire passant de 58 % à 78 %."
      },
      resolution: {
        en: "78% is the defensible figure: it is the share of the total budget financed by domestic revenue, and Tanzania's own 2026/27 Budget Speech puts the domestic share at 74.2% with aid at 0.9%. The 95.74% figure measured a narrower base (a share of the domestic budget only) and is not comparable with the factsheet's metric. It has been removed as a headline.",
        fr: "78 % est le chiffre défendable : il s'agit de la part du budget total financée par les recettes intérieures, et le discours budgétaire tanzanien 2026-2027 situe lui-même cette part à 74,2 %, l'aide à 0,9 %. Le chiffre de 95,74 % portait sur une base plus étroite (une part du seul budget intérieur) et n'est pas comparable à la mesure de la fiche. Il a été retiré des indicateurs de tête."
      } },
    { severity: "mislabel",
      issue: {
        en: "Tax revenue (13.3% of GDP) and domestic revenue (16.4% of GDP) were used interchangeably across the dashboard and factsheet, as if one contradicted the other.",
        fr: "Les recettes fiscales (13,3 % du PIB) et les recettes intérieures (16,4 % du PIB) étaient employées indifféremment dans le tableau de bord et la fiche, comme si l'une contredisait l'autre."
      },
      resolution: {
        en: "They are distinct and both are right: domestic revenue includes non-tax receipts. Tanzania's official 2025/26 figures are 13.2% (tax) and 16.5% (domestic), corroborating both. They are now plotted as two clearly-named series on a single axis.",
        fr: "Ce sont deux mesures distinctes et toutes deux exactes : les recettes intérieures incluent les recettes non fiscales. Les chiffres officiels tanzaniens 2025-2026 sont de 13,2 % (fiscales) et 16,5 % (intérieures), ce qui corrobore les deux. Elles sont désormais tracées comme deux séries clairement nommées sur un axe unique."
      } },
    { severity: "mislabel",
      issue: {
        en: "The SDG 11 panel displayed informal-employment data under the series label \"Villages with grid access (%)\" and cited SDG indicator 8.3.1 under a Goal 11 heading.",
        fr: "Le panneau ODD 11 affichait des données d'emploi informel sous l'intitulé de série « Villages raccordés au réseau (%) » et citait l'indicateur ODD 8.3.1 sous un titre relatif à l'objectif 11."
      },
      resolution: {
        en: "A copy-paste error in the template. The informal-employment figure (above 96% of non-agricultural employment) is retained but reported under SDG 9 alongside the manufacturing decline, where it belongs.",
        fr: "Il s'agissait d'une erreur de copier-coller dans le gabarit. Le chiffre de l'emploi informel (plus de 96 % de l'emploi non agricole) est conservé mais rattaché à l'ODD 9, aux côtés du recul de l'industrie manufacturière, où il a sa place."
      } },
    { severity: "mislabel",
      issue: {
        en: "Every chart in the English Tanzania dashboard carried the French x-axis label « Année », and the water chart's series were labelled in French. One revenue chart carried the legend \"IWRM score (/100)\" over tax-revenue data.",
        fr: "Chaque graphique du tableau de bord anglais de la Tanzanie portait l'étiquette d'axe française « Année », et les séries du graphique sur l'eau étaient libellées en français. Un graphique de recettes portait la légende « score GIRE (/100) » sur des données de recettes fiscales."
      },
      resolution: {
        en: "Leftovers from the French template the dashboards were cloned from. All labels are now generated from the bilingual data layer, so a chart cannot display a language or a legend that does not match its data.",
        fr: "Ce sont des résidus du gabarit français à partir duquel les tableaux de bord ont été clonés. Toutes les étiquettes sont désormais générées depuis la couche de données bilingue : un graphique ne peut plus afficher une langue ou une légende qui ne correspond pas à ses données."
      } },
    { severity: "unverified",
      issue: {
        en: "The old dashboard cited VNR page numbers such as \"p.2627–2631\" and \"p.3345–3372\".",
        fr: "L'ancien tableau de bord citait des numéros de page de la RNV tels que « p. 2627-2631 » et « p. 3345-3372 »."
      },
      resolution: {
        en: "No VNR runs to 3,000+ pages; these appear to be line or character offsets from an extraction tool, not page references. Citations have been reduced to the document and, where known, the table — claims that could not be traced to a checkable source have been dropped rather than dressed in a false citation.",
        fr: "Aucune RNV ne compte plus de 3 000 pages ; il s'agit apparemment de décalages de lignes ou de caractères issus d'un outil d'extraction, non de références de pages. Les citations ont été ramenées au document et, lorsqu'il est connu, au tableau — les affirmations qui n'ont pu être rattachées à une source vérifiable ont été supprimées plutôt qu'habillées d'une fausse référence."
      } }
  ]
});
