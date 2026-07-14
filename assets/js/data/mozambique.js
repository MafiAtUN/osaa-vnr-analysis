/* Mozambique — VNR 2020 → 2026. Source factsheet authored in English (factsheets.txt, lines 875–949);
   French is a translation. Fact-checked against the old "Mozambique Dashboard.html", the World Bank /
   UNICEF child- and maternal-mortality series, IPU Parline (Assembly of the Republic, elected 13 Jan 2025)
   and Mozambique's ENDE 2025–2044 poverty target. See `factcheck` at the bottom. */
window.VNR.register({
  slug: "mozambique",
  iso: "MZ",
  name: { en: "Mozambique", fr: "Mozambique" },
  region: "east",
  vnrPrev: 2020,
  vnrCycles: [2020, 2026],
  langs: ["PT", "EN"],
  sourceLang: "en",
  factsheetPdf: "factsheets/mozambique.pdf",

  tagline: {
    en: "Consolidating peace, stability and national unity as the foundation for inclusive, sustainable socio-economic development.",
    fr: "Consolider la paix, la stabilité et l'unité nationale comme fondement d'un développement socio-économique inclusif et durable."
  },

  themes: [
    { sdg: 1,
      title: { en: "Poverty & Social Protection", fr: "Pauvreté et protection sociale" },
      text: {
        en: "Poverty remains a challenge at ~68.2%; basic social protection now covers 15.1% of households, prioritising women, youth, the elderly and people with disabilities.",
        fr: "La pauvreté demeure un défi, à environ 68,2 % ; la protection sociale de base couvre désormais 15,1 % des ménages, en priorité les femmes, les jeunes, les personnes âgées et les personnes handicapées."
      } },
    { sdg: 3,
      title: { en: "Improving Health Outcomes", fr: "Amélioration des résultats de santé" },
      text: {
        en: "Infant mortality fell from 52.8 to 39 per 1,000 (2020–2023) and maternal mortality from 408 to 233, while institutional births rose to 65%.",
        fr: "La mortalité infantile est passée de 52,8 à 39 pour 1 000 (2020-2023) et la mortalité maternelle de 408 à 233, tandis que les accouchements en établissement ont atteint 65 %."
      } },
    { sdg: 5,
      title: { en: "Gender Parity & Women's Voice", fr: "Parité de genre et voix des femmes" },
      text: {
        en: "Mozambique reached gender parity in primary enrolment and women hold 39% of Parliament seats — chairing the body — with stronger responses to GBV.",
        fr: "Le Mozambique a atteint la parité de genre dans les inscriptions au primaire et les femmes occupent 39 % des sièges au Parlement — dont la présidence — avec des réponses renforcées aux violences fondées sur le genre."
      } },
    { sdg: 6,
      title: { en: "Wider Water & Energy Access", fr: "Élargissement de l'accès à l'eau et à l'énergie" },
      text: {
        en: "Access to drinking water rose from 49.6% to 53.6% and energy access from 32.1% to 35.8% between 2019/20 and 2022/23.",
        fr: "L'accès à l'eau potable est passé de 49,6 % à 53,6 % et l'accès à l'énergie de 32,1 % à 35,8 % entre 2019-2020 et 2022-2023."
      } },
    { sdg: 8,
      title: { en: "Gas Revenues & Demographic Dividend", fr: "Recettes gazières et dividende démographique" },
      text: {
        en: "Rovuma Basin gas reserves offer revenue to build human capital and infrastructure, while a young population presents a demographic strength to harness.",
        fr: "Les réserves gazières du bassin du Rovuma offrent des recettes pour bâtir le capital humain et les infrastructures, tandis qu'une population jeune constitue un atout démographique à valoriser."
      } },
    { sdg: 16,
      title: { en: "Peace & Political Stability", fr: "Paix et stabilité politique" },
      text: {
        en: "Mozambique consolidates national unity, peace and political stability as the foundation for sustainable development, despite extremism in the north.",
        fr: "Le Mozambique consolide l'unité nationale, la paix et la stabilité politique comme fondement du développement durable, malgré l'extrémisme dans le nord du pays."
      } }
  ],

  continuity: [
    { prev: { en: "2030 Agenda aligned with national plans (2020)", fr: "Agenda 2030 aligné sur les plans nationaux (2020)" },
      status: "sustained",
      now: { en: "Peace, Stability & SDG Localization", fr: "Paix, stabilité et territorialisation des ODD" } },
    { prev: { en: "Basic social services for the vulnerable", fr: "Services sociaux de base pour les populations vulnérables" },
      status: "evolved",
      now: { en: "Social Protection Covers 15.1% of Households", fr: "La protection sociale couvre 15,1 % des ménages" } },
    { prev: { en: "Health & education service delivery", fr: "Prestation des services de santé et d'éducation" },
      status: "evolved",
      now: { en: "Infant Mortality 52.8 → 39 per 1,000", fr: "Mortalité infantile : 52,8 → 39 pour 1 000" } },
    { prev: { en: "Leave no one behind", fr: "Ne laisser personne de côté" },
      status: "sustained",
      now: { en: "Gender Parity & 39% Women in Parliament", fr: "Parité de genre et 39 % de femmes au Parlement" } },
    { prev: { en: "Rovuma Basin gas prospects & industrialization", fr: "Perspectives gazières du bassin du Rovuma et industrialisation" },
      status: "evolved",
      now: { en: "Harnessing Rovuma Gas Basin for Social Investment", fr: "Mettre le bassin gazier du Rovuma au service de l'investissement social" } }
  ],

  concepts: {
    caption: {
      en: "Mozambique's review centres on peace and stability, social protection and the opportunity of Rovuma gas.",
      fr: "La revue du Mozambique s'articule autour de la paix et de la stabilité, de la protection sociale et de l'opportunité que représente le gaz du Rovuma."
    },
    items: [
      { label: { en: "governance", fr: "gouvernance" }, value: 12 },
      { label: { en: "gender equality", fr: "égalité de genre" }, value: 10 },
      { label: { en: "climate & water", fr: "climat et eau" }, value: 9 },
      { label: { en: "development", fr: "développement" }, value: 9 },
      { label: { en: "social protection", fr: "protection sociale" }, value: 9 },
      { label: { en: "employment & youth", fr: "emploi et jeunesse" }, value: 7 },
      { label: { en: "gas & resources", fr: "gaz et ressources" }, value: 7 },
      { label: { en: "revenue & financing", fr: "recettes et financement" }, value: 4 },
      { label: { en: "infrastructure", fr: "infrastructures" }, value: 2 }
    ]
  },

  indicators: [
    { id: "poverty", sdg: 1,
      label: { en: "Population below the national poverty line", fr: "Population sous le seuil national de pauvreté" },
      value: 68.2, unit: "%",
      note: { en: "The central unresolved fact of the review. ENDE 2025–2044 sets a twenty-year target of 27.7%.",
              fr: "Le fait majeur non résolu de la revue. L'ENDE 2025-2044 fixe une cible de 27,7 % à vingt ans." },
      source: "VNR 2026 factsheet · ENDE 2025–2044 poverty target (68.2% → 27.7%)" },
    { id: "social_protection", sdg: 1,
      label: { en: "Households covered by basic social protection", fr: "Ménages couverts par la protection sociale de base" },
      value: 15.1, unit: "% of households",
      note: { en: "Prioritises women, youth, the elderly and people with disabilities. Measured on households — the poverty rate is measured on individuals; the two are not subtractable.",
              fr: "Cible en priorité les femmes, les jeunes, les personnes âgées et les personnes handicapées. Mesurée sur les ménages — le taux de pauvreté l'est sur les individus : les deux ne se soustraient pas." },
      source: "VNR 2026 factsheet" },
    { id: "infant_mortality", sdg: 3,
      label: { en: "Infant mortality", fr: "Mortalité infantile" },
      value: 39, unit: "per 1,000 live births",
      note: { en: "Down from 52.8 in 2020 — a 26% fall in three years. National survey-based estimate; internationally modelled series run higher and should not be mixed with it.",
              fr: "Contre 52,8 en 2020, soit une baisse de 26 % en trois ans. Estimation nationale issue d'enquêtes ; les séries modélisées internationales sont plus élevées et ne doivent pas y être mêlées." },
      source: "VNR 2026 factsheet · SDG indicator 3.2.2" },
    { id: "maternal_mortality", sdg: 3,
      label: { en: "Maternal mortality ratio", fr: "Ratio de mortalité maternelle" },
      value: 233, unit: "per 100,000 live births",
      note: { en: "Down from 408 in 2020. The World Bank's modelled estimate for 2023 is 223, corroborating the order of magnitude.",
              fr: "Contre 408 en 2020. L'estimation modélisée de la Banque mondiale pour 2023 s'établit à 223, ce qui corrobore l'ordre de grandeur." },
      source: "VNR 2026 factsheet · World Bank SH.STA.MMRT (2023: 223) · SDG indicator 3.1.1" },
    { id: "women_mps", sdg: 5,
      label: { en: "Seats in Parliament held by women", fr: "Sièges au Parlement détenus par des femmes" },
      value: 39, unit: "%",
      note: { en: "As reported in the review; the Assembly of the Republic is chaired by a woman. IPU Parline puts the current share at 43.2% for the Assembly elected on 13 January 2025.",
              fr: "Chiffre déclaré dans la revue ; l'Assemblée de la République est présidée par une femme. L'UIP (Parline) situe la part actuelle à 43,2 % pour l'Assemblée élue le 13 janvier 2025." },
      source: "VNR 2026 factsheet · IPU Parline, Assembly of the Republic (43.2%) · SDG indicator 5.5.1" },
    { id: "water", sdg: 6,
      label: { en: "Access to drinking water", fr: "Accès à l'eau potable" },
      value: 53.6, unit: "%",
      note: { en: "Up from 49.6% between 2019/20 and 2022/23 — real progress, but still one of the lowest levels in the 2026 cohort. This is the national measure, not the JMP \"at least basic service\" measure (~62%).",
              fr: "Contre 49,6 % entre 2019-2020 et 2022-2023 : un progrès réel, mais un niveau qui reste parmi les plus faibles de la cohorte 2026. Il s'agit de la mesure nationale, et non de la mesure « service au moins élémentaire » du JMP (environ 62 %)." },
      source: "VNR 2026 factsheet · SDG indicator 6.1.1" },
    { id: "energy", sdg: 6,
      label: { en: "Energy access", fr: "Accès à l'énergie" },
      value: 35.8, unit: "%",
      note: { en: "Up from 32.1% between 2019/20 and 2022/23. Urban access is 77.1%, rural 14.1% — the widest access gap in the cohort.",
              fr: "Contre 32,1 % entre 2019-2020 et 2022-2023. L'accès urbain atteint 77,1 %, l'accès rural 14,1 % : le plus grand écart de la cohorte." },
      source: "VNR 2026 factsheet · VNR 2026 (urban/rural split) · SDG indicator 7.1.1" }
  ],

  charts: [
    { id: "access", type: "line", sdg: 6,
      title: { en: "Access to drinking water and to energy, 2019/20 → 2022/23",
               fr: "Accès à l'eau potable et à l'énergie, 2019-2020 → 2022-2023" },
      unit: "%",
      xLabel: { en: "Survey period", fr: "Période d'enquête" },
      series: [
        { key: "water", label: { en: "Access to drinking water", fr: "Accès à l'eau potable" },
          points: [{ x: "2019/20", y: 49.6 }, { x: "2022/23", y: 53.6 }] },
        { key: "energy", label: { en: "Energy access", fr: "Accès à l'énergie" },
          points: [{ x: "2019/20", y: 32.1 }, { x: "2022/23", y: 35.8 }] }
      ],
      insight: {
        en: "Both services gained about four points in three years, and both are moving in the right direction. That is the good news, and it should not be allowed to obscure the level: barely half the population has drinking water and barely a third has energy. Even allowing for differences in definition between countries, these are among the lowest access levels anywhere in the 2026 cohort — Tanzania reports 85% rural water coverage, Rwanda 89.7% improved water. Mozambique is improving from a very low base, and four points every three years does not close that distance by 2030.",
        fr: "Les deux services ont gagné environ quatre points en trois ans et progressent tous deux dans la bonne direction. C'est la bonne nouvelle, et elle ne doit pas masquer le niveau : à peine la moitié de la population dispose d'eau potable et à peine un tiers d'un accès à l'énergie. Même en tenant compte des différences de définition entre pays, ce sont parmi les niveaux d'accès les plus bas de toute la cohorte 2026 — la Tanzanie déclare 85 % de couverture rurale en eau, le Rwanda 89,7 % d'eau améliorée. Le Mozambique progresse à partir d'une base très basse, et quatre points tous les trois ans ne suffiront pas à combler cet écart d'ici à 2030."
      },
      source: "VNR 2026 factsheet · SDG indicators 6.1.1 & 7.1.1" },

    { id: "elec_geography", type: "gap", sdg: 6,
      title: { en: "Energy access is a map, not a number, 2022",
               fr: "L'accès à l'énergie est une carte, pas un chiffre, 2022" },
      unit: "%",
      items: [
        { label: { en: "Maputo City", fr: "Ville de Maputo" }, value: 97.9, emphasis: false },
        { label: { en: "Urban areas", fr: "Zones urbaines" }, value: 77.1, emphasis: false },
        { label: { en: "National average", fr: "Moyenne nationale" }, value: 35.8, emphasis: true },
        { label: { en: "Zambézia province", fr: "Province de Zambézia" }, value: 15.4, emphasis: false },
        { label: { en: "Rural areas", fr: "Zones rurales" }, value: 14.1, emphasis: false }
      ],
      insight: {
        en: "The national figure of 35.8% is an average of two countries that barely overlap. In Maputo City almost everyone has electricity; in Zambézia and in rural areas generally, roughly one household in seven does. Quoting the national average alone — as the previous dashboard's headline tile did — describes neither. The rural figure, 14.1%, is the number the acceleration plan has to move.",
        fr: "Le chiffre national de 35,8 % est la moyenne de deux pays qui ne se recouvrent presque pas. Dans la ville de Maputo, la quasi-totalité des habitants a l'électricité ; en Zambézia et, plus largement, en zone rurale, environ un ménage sur sept. Ne citer que la moyenne nationale — comme le faisait la vignette de tête du tableau de bord précédent — ne décrit ni l'une ni l'autre. C'est le chiffre rural, 14,1 %, que le plan d'accélération doit faire bouger."
      },
      source: "VNR 2026 · IOF 2022 (INE) · SDG indicator 7.1.1" },

    { id: "infant_mortality", type: "line", sdg: 3,
      title: { en: "Infant mortality, per 1,000 live births", fr: "Mortalité infantile, pour 1 000 naissances vivantes" },
      unit: "per 1,000 live births",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "imr", label: { en: "Infant mortality", fr: "Mortalité infantile" },
          points: [{ x: "2020", y: 52.8 }, { x: "2023", y: 39 }] }
      ],
      insight: {
        en: "A fall of 13.8 deaths per 1,000 live births in three years — roughly a quarter of the rate — is the strongest single result in Mozambique's review, and it is the direct product of getting more women to deliver in a health facility: institutional births reached 65%. It is also the clearest evidence that low income and fast health gains are not incompatible; the same country still has 68% of its people below the poverty line.",
        fr: "Une baisse de 13,8 décès pour 1 000 naissances vivantes en trois ans — soit environ un quart du taux — constitue le résultat le plus marquant de la revue mozambicaine, et elle découle directement d'un accès accru à l'accouchement en établissement : 65 % des naissances y ont désormais lieu. C'est aussi la démonstration la plus nette qu'un faible revenu et des progrès sanitaires rapides ne sont pas incompatibles : ce même pays compte encore 68 % de sa population sous le seuil de pauvreté."
      },
      source: "VNR 2026 factsheet · SDG indicator 3.2.2" },

    { id: "maternal_mortality", type: "line", sdg: 3,
      title: { en: "Maternal mortality ratio, per 100,000 live births", fr: "Ratio de mortalité maternelle, pour 100 000 naissances vivantes" },
      unit: "per 100,000 live births",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "mmr", label: { en: "Maternal mortality ratio", fr: "Ratio de mortalité maternelle" },
          points: [{ x: "2020", y: 408 }, { x: "2023", y: 233 }] }
      ],
      insight: {
        en: "Maternal deaths fell by 43% in three years, and the World Bank's independently modelled estimate for 2023 — 223 per 100,000 — sits close enough to the review's 233 to corroborate it. This is deliberately a separate chart from infant mortality: the two are measured per 100,000 and per 1,000 respectively, and the only way to draw them together is a dual axis, which would flatten the infant-mortality line into a straight edge and hide the very result it is meant to show.",
        fr: "Les décès maternels ont reculé de 43 % en trois ans, et l'estimation modélisée indépendante de la Banque mondiale pour 2023 — 223 pour 100 000 — est suffisamment proche des 233 de la revue pour la corroborer. Ce graphique est délibérément distinct de celui de la mortalité infantile : les deux mesures s'expriment respectivement pour 100 000 et pour 1 000, et les réunir supposerait un double axe, lequel aplatirait la courbe de la mortalité infantile jusqu'à masquer le résultat même qu'elle doit montrer."
      },
      source: "VNR 2026 factsheet · World Bank SH.STA.MMRT (2023: 223) · SDG indicator 3.1.1" },

    { id: "poverty_protection", type: "gap", sdg: 1,
      title: { en: "Poverty and the reach of social protection", fr: "La pauvreté et la portée de la protection sociale" },
      unit: "%",
      items: [
        { label: { en: "Population below the national poverty line", fr: "Population sous le seuil national de pauvreté" }, value: 68.2, emphasis: true },
        { label: { en: "Households covered by basic social protection", fr: "Ménages couverts par la protection sociale de base" }, value: 15.1, emphasis: false }
      ],
      insight: {
        en: "This is the tension the review is honest enough to state and a dashboard must not bury. Health and gender outcomes have improved markedly, but roughly two people in three remain below the national poverty line, while basic social protection reaches about one household in seven. The two bars are measured on different bases — individuals for poverty, households for coverage — so they cannot simply be subtracted; the distance between them is nonetheless the shape of the task. ENDE 2025–2044 sets a twenty-year path from 68.2% to 27.7%, and the review names extremism in the north as the standing risk to it.",
        fr: "C'est la tension que la revue a l'honnêteté d'énoncer et qu'un tableau de bord ne doit pas enfouir. Les résultats en matière de santé et de genre se sont nettement améliorés, mais près de deux personnes sur trois demeurent sous le seuil national de pauvreté, tandis que la protection sociale de base atteint environ un ménage sur sept. Les deux barres reposent sur des bases différentes — les individus pour la pauvreté, les ménages pour la couverture — et ne peuvent donc être soustraites l'une de l'autre ; l'écart n'en dessine pas moins l'ampleur de la tâche. L'ENDE 2025-2044 trace une trajectoire à vingt ans de 68,2 % à 27,7 %, et la revue désigne l'extrémisme dans le nord comme le risque permanent qui pèse sur elle."
      },
      source: "VNR 2026 factsheet · ENDE 2025–2044 · SDG indicators 1.2.1 & 1.3.1" }
  ],

  instruments: [
    { name: { en: "ENDE 2025–2044", fr: "ENDE 2025-2044" },
      kicker: { en: "national strategy", fr: "stratégie nationale" },
      text: {
        en: "Mozambique's twenty-year National Development Strategy carries the 2030 Agenda inside the national plan rather than tracking the SDGs separately. Its headline commitment is on poverty: from 68.2% of the population below the national poverty line to 27.7% over the life of the strategy.",
        fr: "La Stratégie nationale de développement à vingt ans du Mozambique intègre l'Agenda 2030 au plan national plutôt que de suivre les ODD séparément. Son engagement phare porte sur la pauvreté : passer de 68,2 % de la population sous le seuil national de pauvreté à 27,7 % sur la durée de la stratégie."
      },
      source: "VNR 2026 · ENDE 2025–2044" },
    { name: { en: "PQG 2025–2029", fr: "PQG 2025-2029" },
      kicker: { en: "five-year plan", fr: "plan quinquennal" },
      text: {
        en: "The Five-Year Government Plan is ENDE's first implementation phase, translating the twenty-year strategy into five-year targets and annual State Budget allocations, coordinated by the Ministry of Economy and Finance through a single results architecture.",
        fr: "Le Plan quinquennal du gouvernement constitue la première phase de mise en œuvre de l'ENDE : il traduit la stratégie à vingt ans en objectifs quinquennaux et en dotations annuelles du budget de l'État, sous la coordination du ministère de l'Économie et des Finances, au sein d'une architecture de résultats unique."
      },
      source: "VNR 2026" },
    { name: { en: "Basic social protection", fr: "Protection sociale de base" },
      kicker: { en: "15.1% of households", fr: "15,1 % des ménages" },
      text: {
        en: "Basic social protection now reaches 15.1% of households, with women, youth, the elderly and people with disabilities named as the priority groups. It is the principal instrument standing between the poverty rate and the people it describes, and its coverage is the review's most direct measure of leaving no one behind.",
        fr: "La protection sociale de base atteint désormais 15,1 % des ménages, les femmes, les jeunes, les personnes âgées et les personnes handicapées étant désignées comme groupes prioritaires. C'est le principal instrument qui s'interpose entre le taux de pauvreté et les personnes qu'il recouvre, et sa couverture constitue la mesure la plus directe de l'engagement à ne laisser personne de côté."
      },
      source: "VNR 2026 factsheet" },
    { name: { en: "Rovuma Basin gas", fr: "Gaz du bassin du Rovuma" },
      kicker: { en: "revenue for human capital", fr: "des recettes pour le capital humain" },
      text: {
        en: "Rovuma Basin gas reserves are presented not as an end but as a financing source: revenue to build human capital and infrastructure, in a country whose young population is itself named as a demographic strength to harness. The review is candid that the revenue is prospective and that its management is the test.",
        fr: "Les réserves gazières du bassin du Rovuma ne sont pas présentées comme une fin, mais comme une source de financement : des recettes destinées à bâtir le capital humain et les infrastructures, dans un pays dont la jeunesse de la population est elle-même désignée comme un atout démographique à valoriser. La revue reconnaît sans détour que ces recettes restent à venir et que leur gestion constituera l'épreuve de vérité."
      },
      source: "VNR 2026 factsheet" },
    { name: { en: "Peace, unity and political stability", fr: "Paix, unité et stabilité politique" },
      kicker: { en: "SDG 16", fr: "ODD 16" },
      text: {
        en: "Peace, national unity and political stability are framed as the precondition for everything else in the review — the foundation, not one theme among six. The review states the counterweight in the same breath: extremism in the north, which continues to displace people and to place the northern provinces beyond the reach of much of the progress recorded elsewhere.",
        fr: "La paix, l'unité nationale et la stabilité politique sont présentées comme la condition préalable à tout le reste dans la revue — le fondement, et non un thème parmi six. La revue en énonce le contrepoids dans le même mouvement : l'extrémisme dans le nord, qui continue de déplacer des populations et de tenir les provinces septentrionales à l'écart d'une grande partie des progrès enregistrés ailleurs."
      },
      source: "VNR 2026 factsheet" },
    { name: { en: "Disaster Management Law No. 10/2020", fr: "Loi n° 10/2020 sur la gestion des catastrophes" },
      kicker: { en: "resilient reconstruction", fr: "reconstruction résiliente" },
      text: {
        en: "After repeated cyclones in the central and northern provinces, roads, bridges, schools, health facilities and water points are rebuilt to resilience standards under Disaster Management Law No. 10/2020. Climate and water together are the third most frequent concept in the Key Messages, and the law is the instrument behind it.",
        fr: "Après des cyclones à répétition dans les provinces du centre et du nord, routes, ponts, écoles, établissements de santé et points d'eau sont reconstruits selon des normes de résilience, en application de la loi n° 10/2020 sur la gestion des catastrophes. Le climat et l'eau forment ensemble le troisième concept le plus fréquent des messages clés, et cette loi en est l'instrument."
      },
      source: "VNR 2026" }
  ],

  factcheck: [
    { severity: "mislabel",
      issue: {
        en: "The old dashboard's \"2026 Focus Goals\" tab presented SDGs 6, 7, 9, 11 and 17 as Mozambique's goals under review. The factsheet's six themes are SDGs 1, 3, 5, 6, 8 and 16.",
        fr: "L'onglet « Objectifs prioritaires 2026 » de l'ancien tableau de bord présentait les ODD 6, 7, 9, 11 et 17 comme les objectifs examinés par le Mozambique. Les six thèmes de la fiche sont les ODD 1, 3, 5, 6, 8 et 16."
      },
      resolution: {
        en: "The goal set was inherited wholesale from the template the nineteen dashboards were cloned from — it is Rwanda's and Tanzania's, not Mozambique's. Five of Mozambique's six themes — poverty, health, gender, gas and peace — appeared nowhere on the dashboard: it showed no poverty rate, no mortality figures and no parliamentary representation. This build is rebuilt on the factsheet's six themes.",
        fr: "Cet ensemble d'objectifs a été repris tel quel du gabarit à partir duquel les dix-neuf tableaux de bord ont été clonés : ce sont ceux du Rwanda et de la Tanzanie, non ceux du Mozambique. Cinq des six thèmes mozambicains — pauvreté, santé, genre, gaz et paix — n'apparaissaient nulle part : ni taux de pauvreté, ni chiffres de mortalité, ni représentation parlementaire. Cette version est reconstruite sur les six thèmes de la fiche."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard headlined \"Improved Water 62.3% (▲ from 56.8% in 2020)\". The factsheet reports access to drinking water rising from 49.6% to 53.6% between 2019/20 and 2022/23. The two sat nine points apart with nothing to explain the difference.",
        fr: "Le tableau de bord affichait « Eau améliorée : 62,3 % (▲ contre 56,8 % en 2020) ». La fiche indique un accès à l'eau potable passant de 49,6 % à 53,6 % entre 2019-2020 et 2022-2023. Neuf points séparaient ces deux chiffres, sans la moindre explication."
      },
      resolution: {
        en: "They are different indicators. 62.3% is close to the WHO/UNICEF JMP \"at least basic drinking water service\" estimate for Mozambique (about 63%); 53.6% is the national household-survey measure of access to drinking water that the VNR reports. Neither is wrong, but they are not interchangeable and the dashboard headlined the flattering one without saying which it was. The national series is used here, and the JMP measure is named in the indicator note.",
        fr: "Il s'agit de deux indicateurs distincts. 62,3 % est proche de l'estimation JMP (OMS/UNICEF) du « service d'eau potable au moins élémentaire » pour le Mozambique (environ 63 %) ; 53,6 % est la mesure nationale, issue des enquêtes auprès des ménages, que retient la RNV. Aucun des deux n'est faux, mais ils ne sont pas interchangeables et le tableau de bord mettait en avant le plus flatteur sans préciser lequel. La série nationale est retenue ici, et la mesure du JMP est mentionnée dans la note de l'indicateur."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard headlined \"Budget on own taxes — 93.5%\" alongside \"Aid share of budget — 6.5%\" and a budget deficit of −6.7% of GDP.",
        fr: "Le tableau de bord affichait « Budget financé par les impôts propres — 93,5 % » aux côtés d'une « part de l'aide dans le budget — 6,5 % » et d'un déficit budgétaire de −6,7 % du PIB."
      },
      resolution: {
        en: "The two shares sum to exactly 100.0%, which gives the error away: 93.5% was computed as 100 minus the aid share, so it is the non-aid share of the budget, not the tax-funded share. A budget running a deficit of 6.7% of GDP — the dashboard's own figure — cannot be 93.5% tax-funded and 6.5% aid-funded, because domestic and external borrowing must fund the rest. This is the same template error that produced Tanzania's discredited \"95.74% budget on own taxes\". The figure has been dropped; the factsheet carries no fiscal indicator, and none has been invented to replace it.",
        fr: "Les deux parts totalisent exactement 100,0 %, ce qui trahit l'erreur : 93,5 % a été obtenu en soustrayant la part de l'aide de 100 ; il s'agit donc de la part non financée par l'aide, et non de la part financée par l'impôt. Un budget affichant un déficit de 6,7 % du PIB — chiffre du tableau de bord lui-même — ne peut être financé à 93,5 % par l'impôt et à 6,5 % par l'aide, puisque l'emprunt intérieur et extérieur doit couvrir le reste. C'est l'erreur de gabarit qui avait produit les « 95,74 % du budget sur ressources fiscales propres » discrédités de la Tanzanie. Le chiffre est retiré ; la fiche ne comporte aucun indicateur budgétaire, et aucun n'a été inventé pour le remplacer."
      } },
    { severity: "mislabel",
      issue: {
        en: "In the Debt & Revenue tab, the chart \"Domestic revenue effort is rising fast\" plotted points that do not sit where its own axis says they should.",
        fr: "Dans l'onglet « Dette et recettes », le graphique « L'effort de recettes intérieures progresse rapidement » plaçait ses points ailleurs que là où son propre axe l'indiquait."
      },
      resolution: {
        en: "Measured against the chart's own gridlines (0% at y=150px, 100% at y=40px), the point labelled 93.5% is drawn at about 109% — above the top of the plot area — and the 21.2% aid point is drawn at about 60%. The two series are rendered to two different, undeclared scales. The chart was decorative, not quantitative. It has been removed along with the figure it displayed.",
        fr: "Rapportés aux lignes de repère du graphique lui-même (0 % à y=150 px, 100 % à y=40 px), le point libellé 93,5 % est tracé à environ 109 % — au-dessus de la zone de tracé — et le point de l'aide à 21,2 % est tracé à environ 60 %. Les deux séries sont rendues selon deux échelles différentes et non déclarées. Le graphique était décoratif, non quantitatif. Il est supprimé, comme le chiffre qu'il affichait."
      } },
    { severity: "unverified",
      issue: {
        en: "The dashboard's revenue and deficit lines drew six points each while documenting only four and three; the undocumented points included revenue of 23.8% of GDP in 2021 and 25.0% in 2024, and deficits of −8.7% in 2021 and −11.2% in 2024.",
        fr: "Les courbes des recettes et du déficit du tableau de bord traçaient six points chacune alors qu'elles n'en documentaient que quatre et trois ; les points non documentés comprenaient des recettes de 23,8 % du PIB en 2021 et de 25,0 % en 2024, ainsi que des déficits de −8,7 % en 2021 et de −11,2 % en 2024."
      },
      resolution: {
        en: "These values appear in no tooltip, no caption and no citation — they exist only as vertices of the line. They cannot be traced to the factsheet or to a published source and have not been carried over. Fewer, solid numbers.",
        fr: "Ces valeurs ne figurent dans aucune infobulle, aucune légende ni aucune citation : elles n'existent que comme sommets de la courbe. Elles ne peuvent être rattachées ni à la fiche ni à une source publiée et n'ont pas été reprises. Moins de chiffres, mais solides."
      } },
    { severity: "mislabel",
      issue: {
        en: "The SDG 11 panel displayed provincial electricity coverage (Maputo City 97.9%, Zambézia 15.4%) and cited \"UN SDG Database, indicator 11.1.1\" — the indicator for the urban population living in slums. The page's HTML <title> was \"Urban 2020, 73.3%\", a chart tooltip that had leaked into the browser tab.",
        fr: "Le panneau ODD 11 affichait la couverture électrique par province (ville de Maputo 97,9 %, Zambézia 15,4 %) en citant « Base de données ODD de l'ONU, indicateur 11.1.1 » — l'indicateur relatif à la population urbaine vivant dans des quartiers informels. Le <title> HTML de la page était « Urban 2020, 73.3% », une infobulle de graphique échappée dans l'onglet du navigateur."
      },
      resolution: {
        en: "Copy-paste damage from the template. The provincial figures are genuine and valuable — they are the sharpest evidence of spatial inequality in the review — and are retained under SDG 7 (indicator 7.1.1), where they belong, in the energy-geography chart.",
        fr: "Dégâts de copier-coller hérités du gabarit. Les chiffres provinciaux sont authentiques et précieux — ils constituent la démonstration la plus nette de l'inégalité spatiale dans la revue — et sont conservés sous l'ODD 7 (indicateur 7.1.1), où ils ont leur place, dans le graphique de géographie énergétique."
      } },
    { severity: "contradiction",
      issue: {
        en: "The factsheet reports women holding 39% of Parliament seats. IPU Parline reports 43.2% for the Assembly of the Republic elected on 13 January 2025.",
        fr: "La fiche indique que les femmes détiennent 39 % des sièges au Parlement. L'UIP (Parline) rapporte 43,2 % pour l'Assemblée de la République élue le 13 janvier 2025."
      },
      resolution: {
        en: "The review's 39% is reported as submitted and is the conservative figure — it appears to predate the current legislature. IPU's 43.2% is disclosed in the indicator note rather than substituted for it: a country's own submission is not overwritten silently. The factsheet's related claim is independently confirmed — the Assembly is chaired by a woman.",
        fr: "Les 39 % de la revue sont repris tels que soumis et constituent le chiffre le plus prudent : ils semblent antérieurs à la législature actuelle. Les 43,2 % de l'UIP sont signalés dans la note de l'indicateur plutôt que substitués : on ne réécrit pas en silence la soumission d'un pays. L'affirmation connexe de la fiche est confirmée de source indépendante : l'Assemblée est présidée par une femme."
      } },
    { severity: "corrected",
      issue: {
        en: "Maternal mortality falling from 408 to 233 per 100,000 live births (2020–2023) is a very large drop over three years and needed independent corroboration before being headlined.",
        fr: "Une chute de la mortalité maternelle de 408 à 233 pour 100 000 naissances vivantes (2020-2023) représente un recul considérable en trois ans et devait être corroborée de source indépendante avant d'être mise en avant."
      },
      resolution: {
        en: "It stands. The World Bank's modelled maternal mortality ratio for Mozambique in 2023 is 223 per 100,000, within 5% of the review's 233. Infant mortality (52.8 → 39 per 1,000) is the national survey estimate; internationally modelled child-mortality series run higher, so the two families of estimates are labelled and never mixed on one axis. Note also that the review's poverty rate of ~68.2% is corroborated by ENDE 2025–2044, which sets the twenty-year target of reducing it to 27.7%.",
        fr: "Le chiffre tient. Le ratio de mortalité maternelle modélisé par la Banque mondiale pour le Mozambique en 2023 s'établit à 223 pour 100 000, soit à moins de 5 % des 233 de la revue. La mortalité infantile (52,8 → 39 pour 1 000) correspond à l'estimation nationale issue d'enquêtes ; les séries modélisées internationales de mortalité infantile sont plus élevées : les deux familles d'estimations sont donc explicitement libellées et jamais mêlées sur un même axe. À noter également : le taux de pauvreté d'environ 68,2 % est corroboré par l'ENDE 2025-2044, qui fixe la cible à vingt ans de le ramener à 27,7 %."
      } }
  ]
});
