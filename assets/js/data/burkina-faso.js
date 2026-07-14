/* Burkina Faso — VNR 2023 → 2026. Source factsheet authored in French; the French
   wording is the source, the English is a translation.
   Fact-checked against data/factsheets.txt (p.3 of the OSAA factsheet pack), the old
   "Burkina Faso Dashboard.dc.html", the World Bank Burkina Faso Economic Update
   (July 2025), the World Bank Macro Poverty Outlook, World Bank electricity-access
   data (EG.ELC.ACCS.ZS) and the SP-CONASUR IDP registration of 31 March 2023.
   See `factcheck` at the bottom — the old dashboard was substantially mislabelled. */
window.VNR.register({
  slug: "burkina-faso",
  iso: "BF",
  name: { en: "Burkina Faso", fr: "Burkina Faso" },
  region: "west",
  vnrPrev: 2023,
  vnrCycles: [2023, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/burkina-faso.pdf",

  tagline: {
    en: "A 2026 VNR framed by the reconquest of national territory, the refounding of the State and the assertion of sovereignty.",
    fr: "Un RNV 2026 sous le signe de la reconquête du territoire, de la refondation de l'État et de la souveraineté."
  },

  themes: [
    { sdg: 6,
      title: { en: "Expanded Water Access", fr: "Accès à l'eau élargi" },
      text: {
        en: "The drinking-water access rate rose from 72.4% (2016) to 78.9% (2025), driven by the “zéro corvée d'eau” campaign to end the daily water-fetching chore.",
        fr: "Le taux d'accès à l'eau potable est passé de 72,4 % (2016) à 78,9 % (2025), grâce à l'opération « zéro corvée d'eau »."
      } },
    { sdg: 7,
      title: { en: "Energy Sovereignty", fr: "Souveraineté énergétique" },
      text: {
        en: "Electricity coverage reached 53.33% in 2024, with renewables at 29.70%, reflecting the country's commitment to the transition.",
        fr: "La couverture électrique a atteint 53,33 % en 2024, avec une part de renouvelables de 29,70 %, traduisant l'engagement pour la transition."
      } },
    { sdg: 8,
      title: { en: "Economic Resilience & Sovereignty", fr: "Résilience et souveraineté économique" },
      text: {
        en: "Against a backdrop of territorial reconquest, growth rose from 1.5% of GDP (2022) to 5.3% (2025), carried by reform and a revival of productive activity.",
        fr: "Dans un contexte de reconquête du territoire, la croissance est passée de 1,5 % du PIB (2022) à 5,3 % (2025), portée par les réformes et la relance productive."
      } },
    { sdg: 9,
      title: { en: "Digital & Industry", fr: "Numérique et industrie" },
      text: {
        en: "Mobile internet penetration of 82.1% (2024) and a manufacturing recovery (11.3% of GDP), despite a degraded road network.",
        fr: "Pénétration de l'internet mobile de 82,1 % (2024) et reprise manufacturière (11,3 % du PIB), malgré un patrimoine routier dégradé."
      } },
    { sdg: 11,
      title: { en: "An Uneven Infrastructure Record", fr: "Infrastructures contrastées" },
      text: {
        en: "Performance on SDGs 9 and 11 remains uneven: the digital sector is accelerating while the road network requires investment.",
        fr: "Les performances des ODD 9 et 11 demeurent contrastées : le numérique s'accélère tandis que le réseau routier nécessite des investissements."
      } },
    { sdg: 16,
      title: { en: "Refounding the State", fr: "Refondation de l'État" },
      text: {
        en: "The 2026 VNR is set within a drive to reconquer national territory, refound the State and consolidate national sovereignty.",
        fr: "Le RNV 2026 s'inscrit dans une dynamique de reconquête du territoire, de refondation de l'État et de consolidation de la souveraineté nationale."
      } }
  ],

  continuity: [
    { prev: { en: "National resilience and the refounding of the State", fr: "Résilience nationale et refondation de l'État" },
      status: "sustained",
      now: { en: "Reconquest, refounding & sovereignty", fr: "Reconquête, refondation & souveraineté" } },
    { prev: { en: "Security & humanitarian crisis (1.99 million displaced)", fr: "Crise sécuritaire & humanitaire (1,99 M de déplacés)" },
      status: "evolved",
      now: { en: "Growth accelerating to 5.3% (2025)", fr: "Croissance accélérée à 5,3 % (2025)" } },
    { prev: { en: "Shocks: COVID-19 & the war in Ukraine", fr: "Chocs : COVID-19 & guerre en Ukraine" },
      status: "evolved",
      now: { en: "Drinking water 72.4% → 78.9%", fr: "Eau potable 72,4 % → 78,9 %" } },
    { prev: { en: "Economic resilience (5.2% over 2016–2022)", fr: "Résilience économique (5,2 % en 2016-2022)" },
      status: "sustained",
      now: { en: "Coverage 53.33%, renewables 29.7%", fr: "Couverture 53,33 %, renouvelables 29,7 %" } },
    { prev: { en: "Political governance in transition", fr: "Gouvernance politique en transition" },
      status: "evolved",
      now: { en: "Mobile internet 82.1%, degraded roads", fr: "Internet mobile 82,1 %, routes dégradées" } }
  ],

  concepts: {
    caption: {
      en: "Burkina Faso's message centres on economic resilience, water and sovereign energy.",
      fr: "Le Burkina Faso met l'accent sur la résilience économique, l'eau et l'énergie souveraine."
    },
    items: [
      { label: { en: "refounding & the State", fr: "refondation & État" }, value: 9 },
      { label: { en: "water & social services", fr: "eau & services sociaux" }, value: 8 },
      { label: { en: "growth & sovereignty", fr: "croissance & souveraineté" }, value: 7 },
      { label: { en: "digital & infrastructure", fr: "numérique & infrastructure" }, value: 6 },
      { label: { en: "energy & renewables", fr: "énergie & renouvelables" }, value: 5 },
      { label: { en: "transition & climate", fr: "transition & climat" }, value: 4 },
      { label: { en: "investment", fr: "investissement" }, value: 3 },
      { label: { en: "industry", fr: "industrie" }, value: 2 },
      { label: { en: "partnerships", fr: "partenariats" }, value: 1 }
    ]
  },

  indicators: [
    { id: "water_access", sdg: 6,
      label: { en: "Drinking-water access rate (national sector indicator)", fr: "Taux d'accès à l'eau potable (indicateur sectoriel national)" },
      value: 78.9, unit: "%",
      note: {
        en: "Up from 72.4% in 2016, under the “zéro corvée d'eau” campaign. This is Burkina Faso's own water-sector measure; the WHO/UNICEF JMP applies different criteria and its figures are not comparable with this one.",
        fr: "Contre 72,4 % en 2016, dans le cadre de l'opération « zéro corvée d'eau ». Il s'agit de l'indicateur du secteur burkinabè de l'eau ; le JMP OMS/UNICEF applique d'autres critères et ses chiffres ne sont pas comparables à celui-ci."
      },
      source: "VNR 2026 factsheet · Burkina Faso national water-sector access rate" },

    { id: "elec_coverage", sdg: 7,
      label: { en: "Electricity coverage rate (reach of the network)", fr: "Taux de couverture électrique (desserte du réseau)" },
      value: 53.33, unit: "%",
      note: {
        en: "2024. Coverage measures how much of the country the network reaches. It is NOT the share of people who have electricity: World Bank data put access to electricity at about 19% of the population (2021).",
        fr: "2024. La couverture mesure l'étendue du territoire desservi par le réseau. Ce n'est PAS la part de la population disposant de l'électricité : les données de la Banque mondiale situent l'accès à l'électricité autour de 19 % de la population (2021)."
      },
      source: "VNR 2026 factsheet · Ministry of Energy, Mines and Quarries · World Bank, Access to electricity (EG.ELC.ACCS.ZS)" },

    { id: "renewables", sdg: 7,
      label: { en: "Renewables share reported in the review", fr: "Part des renouvelables citée dans la revue" },
      value: 29.7, unit: "%",
      note: {
        en: "2024, given as 29.70% in the factsheet. The review does not state whether the base is installed capacity or generation; solar parks and off-grid mini-grids are named as the drivers.",
        fr: "2024, chiffre de 29,70 % retenu par la fiche. La revue ne précise pas si la base est la capacité installée ou la production ; les parcs solaires et les mini-réseaux hors réseau en sont désignés comme les moteurs."
      },
      source: "VNR 2026 factsheet" },

    { id: "gdp_growth", sdg: 8,
      label: { en: "Real GDP growth", fr: "Croissance du PIB réel" },
      value: 5.3, unit: "%",
      note: {
        en: "2025, up from a security-driven trough of 1.5% in 2022 and just above the 2016–2022 pre-crisis average of 5.2%. Corroborated by the World Bank.",
        fr: "2025, après un creux de 1,5 % en 2022 lié à l'insécurité, et légèrement au-dessus de la moyenne d'avant-crise de 5,2 % (2016-2022). Chiffre corroboré par la Banque mondiale."
      },
      source: "VNR 2026 factsheet · World Bank Macro Poverty Outlook, Burkina Faso" },

    { id: "mobile_internet", sdg: 9,
      label: { en: "Mobile internet penetration", fr: "Pénétration de l'internet mobile" },
      value: 82.1, unit: "%",
      note: {
        en: "2024. The strongest single result in the review, and it advanced while the physical road network deteriorated.",
        fr: "2024. Le résultat le plus fort de la revue, obtenu alors même que le réseau routier physique se dégradait."
      },
      source: "VNR 2026 factsheet" },

    { id: "manufacturing", sdg: 9,
      label: { en: "Manufacturing value added, % of GDP", fr: "Valeur ajoutée manufacturière, en % du PIB" },
      value: 11.3, unit: "% of GDP",
      note: {
        en: "Described in the review as a manufacturing recovery, associated with the “Produire local” import-substitution doctrine.",
        fr: "Présentée dans la revue comme une reprise manufacturière, associée à la doctrine de substitution aux importations « Produire local »."
      },
      source: "VNR 2026 factsheet" },

    { id: "idp", sdg: 16,
      label: { en: "Internally displaced persons", fr: "Personnes déplacées internes" },
      value: 1.99, unit: "million",
      note: {
        en: "A 2023 figure, carried forward by the review. The last official registration by SP-CONASUR (31 March 2023) counted 2,062,534 people; no official count has been published since. Roughly one person in ten.",
        fr: "Chiffre de 2023, repris par la revue. Le dernier enregistrement officiel du SP-CONASUR (31 mars 2023) dénombrait 2 062 534 personnes ; aucun décompte officiel n'a été publié depuis. Soit environ une personne sur dix."
      },
      source: "VNR 2026 factsheet · SP-CONASUR IDP registration, 31 March 2023 · IOM DTM" }
  ],

  charts: [
    { id: "elec_coverage_vs_access", type: "gap", sdg: 7,
      title: { en: "Network coverage is not the same as electricity access",
               fr: "La couverture du réseau n'est pas l'accès à l'électricité" },
      unit: "%",
      items: [
        { label: { en: "Electricity coverage rate, 2024 (reach of the network)", fr: "Taux de couverture électrique, 2024 (desserte du réseau)" }, value: 53.33, emphasis: false },
        { label: { en: "Population with access to electricity, 2021 (World Bank)", fr: "Population ayant accès à l'électricité, 2021 (Banque mondiale)" }, value: 19.0, emphasis: true }
      ],
      insight: {
        en: "This is the single most consequential correction on this page. Burkina Faso's headline energy number — 53.33% — is a coverage rate: it measures how much of the national territory the grid reaches. The old dashboard printed it under the label “electricity access”, which is a different indicator entirely. Fewer than one Burkinabè in five actually has electricity. Reporting coverage as access overstates the achievement by more than a factor of two, and it hides the fact that the network arriving in a locality and a household being connected to it are separated, here, by an enormous distance.",
        fr: "C'est la correction la plus lourde de conséquences de cette page. Le chiffre phare de l'énergie au Burkina Faso — 53,33 % — est un taux de couverture : il mesure l'étendue du territoire desservi par le réseau. L'ancien tableau de bord l'affichait sous l'intitulé « accès à l'électricité », qui désigne un tout autre indicateur. Moins d'un Burkinabè sur cinq dispose réellement de l'électricité. Présenter la couverture comme un accès surestime le résultat de plus du double et masque le fait que, ici, l'arrivée du réseau dans une localité et le raccordement effectif d'un ménage sont séparés par une distance considérable."
      },
      source: "VNR 2026 factsheet (coverage) · World Bank, Access to electricity, % of population, EG.ELC.ACCS.ZS (access)" },

    { id: "gdp_growth", type: "line", sdg: 8,
      title: { en: "Real GDP growth, 2022–2025", fr: "Croissance du PIB réel, 2022-2025" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "growth", label: { en: "Real GDP growth", fr: "Croissance du PIB réel" },
          points: [{ x: "2022", y: 1.5 }, { x: "2023", y: 3.0 }, { x: "2024", y: 4.9 }, { x: "2025", y: 5.3 }] }
      ],
      insight: {
        en: "Growth has climbed back from the 2022 security trough of 1.5% to 5.3%, marginally above the 5.2% pre-crisis average of 2016–2022. The recovery is real, but it should be read for what it is: an aggregate figure produced by a war economy. Output resumed while roughly two million people remained displaced, and extraordinary security spending continues to crowd out the water, energy and social investment the SDGs require. A national growth rate says nothing about whether the displaced were reached.",
        fr: "La croissance est remontée du creux sécuritaire de 1,5 % en 2022 à 5,3 %, soit légèrement au-dessus de la moyenne d'avant-crise de 5,2 % (2016-2022). La reprise est réelle, mais il faut la lire pour ce qu'elle est : un agrégat produit par une économie de guerre. L'activité a repris alors que près de deux millions de personnes demeuraient déplacées, et les dépenses sécuritaires exceptionnelles continuent d'évincer les investissements dans l'eau, l'énergie et le social qu'exigent les ODD. Un taux de croissance national ne dit rien de la question de savoir si les déplacés ont été atteints."
      },
      source: "VNR 2026 factsheet (2022, 2025) · World Bank Burkina Faso Economic Update, July 2025 (2023, 2024) · World Bank Macro Poverty Outlook" },

    { id: "water_access", type: "line", sdg: 6,
      title: { en: "Drinking-water access rate, 2016–2025", fr: "Taux d'accès à l'eau potable, 2016-2025" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "water", label: { en: "Drinking-water access rate", fr: "Taux d'accès à l'eau potable" },
          points: [{ x: "2016", y: 72.4 }, { x: "2025", y: 78.9 }] }
      ],
      insight: {
        en: "Six and a half points in nine years — about 0.7 points a year — is steady but slow, and at that pace universal access lies decades away. The interest of “zéro corvée d'eau” is not the coverage number but what it targets: the water-fetching chore itself, borne almost entirely by women and girls. It is an SDG 6 programme designed to pay an SDG 5 dividend. The residual 21.1% is concentrated in the same Sahelian and conflict-affected areas that hold most of the displaced.",
        fr: "Six virgule cinq points en neuf ans — environ 0,7 point par an — c'est régulier mais lent, et à ce rythme l'accès universel se situe à des décennies. L'intérêt de « zéro corvée d'eau » ne tient pas au chiffre de couverture mais à sa cible : la corvée d'eau elle-même, supportée presque entièrement par les femmes et les filles. C'est un programme ODD 6 conçu pour produire un dividende ODD 5. Les 21,1 % restants se concentrent dans les zones sahéliennes et affectées par le conflit, celles-là mêmes qui accueillent l'essentiel des déplacés."
      },
      source: "VNR 2026 factsheet · Burkina Faso national water-sector access rate" },

    { id: "displacement", type: "gap", sdg: 16,
      title: { en: "Displacement: the last official count dates from March 2023",
               fr: "Déplacement : le dernier décompte officiel remonte à mars 2023" },
      unit: "million people",
      items: [
        { label: { en: "Figure carried by the 2026 review (2023 vintage)", fr: "Chiffre repris par la revue 2026 (millésime 2023)" }, value: 1.99, emphasis: false },
        { label: { en: "Last official SP-CONASUR registration, 31 March 2023", fr: "Dernier enregistrement officiel du SP-CONASUR, 31 mars 2023" }, value: 2.06, emphasis: true }
      ],
      insight: {
        en: "Close to one Burkinabè in ten is displaced. That single fact conditions every other number in this review: it is why the road network decayed, why growth collapsed in 2022, why water and health points must be rebuilt rather than merely extended. The honest caveat is that both figures are already three years old — SP-CONASUR's last published registration was 2,062,534 people on 31 March 2023 and no official count has been issued since. These are floors, not current estimates, and a dashboard that prints 1.99M as today's figure is printing a 2023 number.",
        fr: "Près d'un Burkinabè sur dix est déplacé. Ce seul fait conditionne tous les autres chiffres de la revue : il explique la dégradation du réseau routier, l'effondrement de la croissance en 2022, la nécessité de reconstruire les points d'eau et de santé plutôt que de simplement les étendre. L'honnêteté commande de préciser que les deux chiffres ont déjà trois ans : le dernier enregistrement publié par le SP-CONASUR faisait état de 2 062 534 personnes au 31 mars 2023 et aucun décompte officiel n'a été diffusé depuis. Ce sont des planchers, non des estimations actuelles, et un tableau de bord qui affiche 1,99 M comme le chiffre du jour affiche en réalité un chiffre de 2023."
      },
      source: "VNR 2026 factsheet · SP-CONASUR IDP registration, 31 March 2023 · IOM Displacement Tracking Matrix" }
  ],

  instruments: [
    { name: { en: "“Zéro corvée d'eau”", fr: "« Zéro corvée d'eau »" },
      kicker: { en: "72.4% → 78.9%", fr: "72,4 % → 78,9 %" },
      text: {
        en: "The national campaign that carries the water result. Rather than counting water points alone, it targets the chore itself: boreholes, solar pumping and reservoirs sited close enough to households that the daily fetching of water — a task falling almost entirely on women and girls — disappears. It is the clearest instance in this review of a single instrument serving SDG 6 and SDG 5 together.",
        fr: "L'opération nationale qui porte le résultat sur l'eau. Plutôt que de compter les seuls points d'eau, elle vise la corvée elle-même : forages, pompage solaire et retenues implantés assez près des ménages pour que la collecte quotidienne — tâche qui incombe presque entièrement aux femmes et aux filles — disparaisse. C'est, dans cette revue, l'exemple le plus net d'un instrument unique servant à la fois l'ODD 6 et l'ODD 5."
      },
      source: "VNR 2026 factsheet" },

    { name: { en: "Sovereign energy transition", fr: "Transition énergétique souveraine" },
      kicker: { en: "53.33% coverage · 29.7% renewables", fr: "53,33 % de couverture · 29,7 % de renouvelables" },
      text: {
        en: "Solar parks and off-grid mini-grids are presented not as a climate policy but as a sovereignty policy: every megawatt generated at home is a litre of imported diesel not bought on a disrupted supply chain. The result to date is a coverage rate of 53.33% and a renewables share of 29.7%. What the review does not claim, and what the old dashboard invented, is a 50% renewables target for 2030.",
        fr: "Les parcs solaires et les mini-réseaux hors réseau sont présentés non comme une politique climatique mais comme une politique de souveraineté : chaque mégawatt produit sur place est un litre de gazole importé que l'on n'achète pas sur une chaîne d'approvisionnement perturbée. Le résultat à ce jour est un taux de couverture de 53,33 % et une part de renouvelables de 29,7 %. Ce que la revue n'affirme pas — et que l'ancien tableau de bord avait inventé — c'est un objectif de 50 % de renouvelables à l'horizon 2030."
      },
      source: "VNR 2026 factsheet" },

    { name: { en: "“Produire local”", fr: "« Produire local »" },
      kicker: { en: "manufacturing at 11.3% of GDP", fr: "industrie manufacturière à 11,3 % du PIB" },
      text: {
        en: "The import-substitution doctrine behind the productive revival: local-content requirements in public procurement, support to agro-processing, textiles and construction materials. It answers two problems at once — foreign-exchange exposure in a disrupted trade environment, and the need to create livelihoods for returning displaced populations.",
        fr: "La doctrine de substitution aux importations qui sous-tend la relance productive : exigences de contenu local dans la commande publique, soutien à l'agro-industrie, au textile et aux matériaux de construction. Elle répond à deux problèmes à la fois — l'exposition au risque de change dans un environnement commercial perturbé et la nécessité de créer des moyens de subsistance pour les populations déplacées qui reviennent."
      },
      source: "VNR 2026 factsheet" },

    { name: { en: "PNDES II", fr: "PNDES II" },
      kicker: { en: "national implementation framework", fr: "cadre national de mise en œuvre" },
      text: {
        en: "The second National Economic and Social Development Plan is the vehicle through which the 2030 Agenda and Agenda 2063 are translated into sector ministry plans and the national budget. Burkina Faso operates no separate SDG tracker: the SDGs are followed through PNDES II indicators, adapted under the transition to keep central coordination while extending delivery to the communes.",
        fr: "Le second Plan national de développement économique et social est le véhicule par lequel l'Agenda 2030 et l'Agenda 2063 sont traduits en plans ministériels sectoriels et en budget national. Le Burkina Faso ne tient pas de dispositif de suivi distinct des ODD : ceux-ci sont suivis à travers les indicateurs du PNDES II, adaptés sous la transition afin de maintenir la coordination centrale tout en étendant la prestation de services aux communes."
      },
      source: "VNR 2026 factsheet" },

    { name: { en: "Reconquest of territory & refounding of the State", fr: "Reconquête du territoire et refondation de l'État" },
      kicker: { en: "the precondition", fr: "la condition préalable" },
      text: {
        en: "The review is unusually direct about sequencing: security is not one goal among seventeen but the condition of the other sixteen. Retaking territory is what allows schools, clinics and water points to reopen. Stated plainly, this is the most honest sentence in Burkina Faso's submission — and the one that should govern how every other figure on this page is read.",
        fr: "La revue est d'une franchise inhabituelle sur l'ordre des priorités : la sécurité n'est pas un objectif parmi dix-sept, mais la condition des seize autres. Reprendre le territoire, c'est permettre la réouverture des écoles, des centres de santé et des points d'eau. Formulée sans détour, c'est la phrase la plus honnête de la contribution burkinabè — et celle qui devrait commander la lecture de tous les autres chiffres de cette page."
      },
      source: "VNR 2026 factsheet" },

    { name: { en: "Emergency response for displaced people", fr: "Réponse d'urgence aux personnes déplacées" },
      kicker: { en: "1.99M displaced · the LNOB test", fr: "1,99 M de déplacés · le test « ne laisser personne de côté »" },
      text: {
        en: "Food assistance, water trucking and mobile health units for close to two million internally displaced people, with reconstruction plans intended to fold them back into formal service delivery as territory is stabilised. The review names displacement as the most urgent obstacle to SDG implementation — Burkina Faso's leave-no-one-behind test in its most literal form.",
        fr: "Aide alimentaire, approvisionnement en eau par camion-citerne et unités sanitaires mobiles pour près de deux millions de personnes déplacées internes, les plans de reconstruction visant à les réintégrer dans le dispositif formel de services à mesure que le territoire se stabilise. La revue désigne le déplacement comme l'obstacle le plus urgent à la mise en œuvre des ODD — le test burkinabè du « ne laisser personne de côté » dans son acception la plus littérale."
      },
      source: "VNR 2026 factsheet" }
  ],

  factcheck: [
    { severity: "mislabel",
      issue: {
        en: "The old dashboard headlined 53.3% as “Couverture électrique” but plotted and labelled it as “Accès électricité (%)”, and its English strings called it “national electricity coverage” and “Electricity coverage” interchangeably with access.",
        fr: "L'ancien tableau de bord affichait 53,3 % sous l'intitulé « Couverture électrique » mais le traçait et le libellait comme « Accès électricité (%) », ses chaînes anglaises parlant indifféremment de « national electricity coverage » et d'accès."
      },
      resolution: {
        en: "The factsheet figure (53.33%, 2024) is a coverage rate — the share of the country reached by the network. It is not electricity access: World Bank data put the share of Burkinabè with access to electricity at about 19% of the population (2021), and the coverage series itself is documented rising from 34% (2016) to 49.29% (2021), consistent with 53.33% in 2024. Both are now shown, each explicitly labelled, and the gap between them is presented as the finding.",
        fr: "Le chiffre de la fiche (53,33 %, 2024) est un taux de couverture — la part du territoire desservie par le réseau. Ce n'est pas l'accès à l'électricité : les données de la Banque mondiale situent la part des Burkinabè ayant accès à l'électricité autour de 19 % de la population (2021), et la série de couverture est elle-même documentée en progression de 34 % (2016) à 49,29 % (2021), ce qui est cohérent avec 53,33 % en 2024. Les deux sont désormais présentés, explicitement libellés, et l'écart entre eux est exposé comme un résultat."
      } },

    { severity: "mislabel",
      issue: {
        en: "A chart titled “Industrie manufacturière (% PIB) et pénétration d'internet mobile” carried the legend “Couverture électrique / Renouvelables / Eau potable” and its data points were public-revenue figures (total revenue 13.4% of GDP in 2015 rising to 17.7% in 2024; internally-raised revenue 7.8% rising to 10.6%).",
        fr: "Un graphique intitulé « Industrie manufacturière (% PIB) et pénétration d'internet mobile » portait la légende « Couverture électrique / Renouvelables / Eau potable » et ses points de données étaient des chiffres de recettes publiques (recettes totales de 13,4 % du PIB en 2015 à 17,7 % en 2024 ; recettes levées en interne de 7,8 % à 10,6 %)."
      },
      resolution: {
        en: "Title, legend and data disagreed three ways — the signature of a template cloned across countries without its content being changed. None of the three sets of figures could be reconciled, and none of the revenue figures appears in the factsheet or could be traced to a citable source. The chart has been removed rather than relabelled.",
        fr: "Titre, légende et données se contredisaient sur trois plans — la signature d'un gabarit cloné d'un pays à l'autre sans que son contenu soit modifié. Aucun des trois jeux de chiffres n'a pu être réconcilié, et aucune des données de recettes ne figure dans la fiche ni n'a pu être rattachée à une source citable. Le graphique a été supprimé plutôt que réétiqueté."
      } },

    { severity: "mislabel",
      issue: {
        en: "A chart titled “Exportations d'or et position budgétaire, 2019–2025” carried the legend “Croissance du PIB (%) / Inflation (%)” and plotted neither: its tooltips reported internal versus external financing shares and a debt-service figure of 10.9% of exports. Separately, the SDG 8 growth chart carried the legend “Recettes fiscales (% du PIB)”, and the overview chart labelled its renewables series “Eau urbaine (%)”.",
        fr: "Un graphique intitulé « Exportations d'or et position budgétaire, 2019-2025 » portait la légende « Croissance du PIB (%) / Inflation (%) » et ne traçait ni l'une ni l'autre : ses infobulles rapportaient des parts de financement interne et externe ainsi qu'un service de la dette de 10,9 % des exportations. Par ailleurs, le graphique de croissance de l'ODD 8 portait la légende « Recettes fiscales (% du PIB) », et le graphique de synthèse libellait sa série sur les renouvelables « Eau urbaine (%) »."
      },
      resolution: {
        en: "Every chart legend in the old file was checked against the data underneath it. Four were wrong. No gold-export series existed anywhere in the file despite a chart title promising one. All labels on this page are now generated from the bilingual data layer, so a chart cannot display a legend that does not belong to its own series.",
        fr: "Chaque légende de graphique de l'ancien fichier a été confrontée aux données qu'elle surmontait. Quatre étaient fausses. Aucune série sur les exportations d'or ne figurait dans le fichier, alors même qu'un titre de graphique en promettait une. Toutes les étiquettes de cette page sont désormais générées depuis la couche de données bilingue : un graphique ne peut plus afficher une légende qui n'appartient pas à sa propre série."
      } },

    { severity: "contradiction",
      issue: {
        en: "5.2% was used two ways in the same file: the factsheet gives it as the 2016–2022 pre-crisis average, while the dashboard plotted it as the annual growth value for 2020 (“2020, GDP growth ~5.2%”).",
        fr: "5,2 % était employé de deux manières dans le même fichier : la fiche en fait la moyenne d'avant-crise 2016-2022, tandis que le tableau de bord le traçait comme la valeur annuelle de croissance pour 2020 (« 2020, GDP growth ~5.2% »)."
      },
      resolution: {
        en: "5.2% is a seven-year average, not an annual observation. Plotting it on the 2020 tick presented a smoothed benchmark as if it were measured growth in the COVID year — precisely the year the average is designed to smooth away. The growth chart now shows only observed annual values (1.5% in 2022, 3.0% in 2023, 4.9% in 2024, 5.3% in 2025), and the 5.2% average is described in the text as what it is: a benchmark, not a data point.",
        fr: "5,2 % est une moyenne sur sept ans, non une observation annuelle. Le tracer sur la graduation de 2020 revenait à présenter un repère lissé comme s'il s'agissait de la croissance mesurée de l'année COVID — précisément l'année que la moyenne a pour effet de lisser. Le graphique de croissance ne présente plus que des valeurs annuelles observées (1,5 % en 2022, 3,0 % en 2023, 4,9 % en 2024, 5,3 % en 2025), et la moyenne de 5,2 % est décrite dans le texte pour ce qu'elle est : un repère, non un point de donnée."
      } },

    { severity: "unverified",
      issue: {
        en: "The dashboard presented “Objectif 2030 : 50 %+” as a renewables target for Burkina Faso, alongside a claim that partners had committed exactly $1,507,171,475 to 2035.",
        fr: "Le tableau de bord présentait un « Objectif 2030 : 50 %+ » comme une cible de renouvelables pour le Burkina Faso, aux côtés d'une affirmation selon laquelle les partenaires auraient engagé exactement 1 507 171 475 $ jusqu'en 2035."
      },
      resolution: {
        en: "Neither figure appears in the factsheet. The 50% target that does exist in Burkinabè policy is a rural electrification rate (National Rural Electrification Strategy, 50% by 2028; 95% urban / 50% rural access by 2030) — not a renewables share. The two were conflated. The dollar total could not be traced to any source, and the dashboard attached it to two mutually contradictory sector rankings under the same citation. Both have been dropped.",
        fr: "Aucun de ces chiffres ne figure dans la fiche. L'objectif de 50 % qui existe effectivement dans la politique burkinabè est un taux d'électrification rurale (Stratégie nationale d'électrification rurale, 50 % à l'horizon 2028 ; accès de 95 % en urbain et 50 % en rural d'ici 2030) — et non une part de renouvelables. Les deux ont été confondus. Le montant en dollars n'a pu être rattaché à aucune source, et le tableau de bord l'assortissait de deux classements sectoriels mutuellement contradictoires sous la même citation. Les deux ont été supprimés."
      } },

    { severity: "contradiction",
      issue: {
        en: "Two charts in the old dashboard ranked sector investment priorities under the same citation (“RNV 2026, p.122, Graphique 74”) with different and incompatible content: one listed Reconquest, Water, Energy, Health, Local production, Education, IDP response; the other Decent jobs, Industrialisation, Energy, Health, Hunger, Education, Poverty.",
        fr: "Deux graphiques de l'ancien tableau de bord classaient les priorités sectorielles d'investissement sous la même citation (« RNV 2026, p. 122, Graphique 74 ») avec des contenus différents et incompatibles : l'un citait Reconquête, Eau, Énergie, Santé, Production locale, Éducation, Réponse aux PDI ; l'autre Emplois décents, Industrialisation, Énergie, Santé, Faim, Éducation, Pauvreté."
      },
      resolution: {
        en: "One source cannot support two contradictory rankings. Neither list is present in the factsheet and the underlying VNR is not yet public, so neither could be adjudicated. Both charts have been dropped; nothing has been substituted for them.",
        fr: "Une même source ne peut étayer deux classements contradictoires. Aucune des deux listes ne figure dans la fiche et la RNV sous-jacente n'est pas encore publique : aucune n'a donc pu être arbitrée. Les deux graphiques ont été supprimés, sans être remplacés."
      } },

    { severity: "unverified",
      issue: {
        en: "The 1.99M displacement figure was presented as current, and the 78.9% water figure was cited to the WHO/UNICEF Joint Monitoring Programme — on a chart that was actually plotting GDP growth.",
        fr: "Le chiffre de 1,99 M de déplacés était présenté comme actuel, et celui de 78,9 % pour l'eau était attribué au Programme commun de suivi OMS/UNICEF — sur un graphique qui traçait en réalité la croissance du PIB."
      },
      resolution: {
        en: "1.99M is a 2023 figure and is retained as such, explicitly dated: SP-CONASUR's last official registration (31 March 2023) counted 2,062,534 people and no official count has been published since, so both numbers are floors rather than current estimates. The 78.9% water rate is Burkina Faso's national sector indicator, whose criteria differ from the JMP's “basic drinking water service”; the two are not interchangeable and the JMP attribution has been removed.",
        fr: "1,99 M est un chiffre de 2023, conservé comme tel et explicitement daté : le dernier enregistrement officiel du SP-CONASUR (31 mars 2023) dénombrait 2 062 534 personnes et aucun décompte officiel n'a été publié depuis ; les deux chiffres sont donc des planchers et non des estimations actuelles. Le taux de 78,9 % est l'indicateur du secteur national burkinabè de l'eau, dont les critères diffèrent du « service élémentaire d'eau potable » du JMP ; les deux ne sont pas interchangeables et l'attribution au JMP a été retirée."
      } },

    { severity: "mislabel",
      issue: {
        en: "The French dashboard was riddled with untranslated English template strings (“Reconquest Operations”, “Health”, “Energy”, “1.99M displaced · LNOB priority”, entire English paragraphs), rendered the country name as “le le Burkina Faso”, cited SDG indicators 9.1.1 and 9.c.1 under an SDG 8 panel, 11.1.1 under an SDG 9 panel and 17.1.1/17.4.1 under an SDG 16 panel, and contradicted itself on the review history — the header cites “VNRs 2023 & 2026”, the footer calls 2020 the first VNR, and a third panel claims “3 VNR cycles since 2019”.",
        fr: "Le tableau de bord français était truffé de chaînes anglaises non traduites issues du gabarit (« Reconquest Operations », « Health », « Energy », « 1.99M displaced · LNOB priority », des paragraphes entiers en anglais), affichait le nom du pays sous la forme « le le Burkina Faso », citait les indicateurs ODD 9.1.1 et 9.c.1 sous un panneau ODD 8, 11.1.1 sous un panneau ODD 9 et 17.1.1/17.4.1 sous un panneau ODD 16, et se contredisait sur l'historique des revues — l'en-tête cite « RNV 2023 & 2026 », le pied de page qualifie 2020 de première RNV, et un troisième panneau affirme « 3 cycles RNV depuis 2019 »."
      },
      resolution: {
        en: "All of it is template residue from a dashboard cloned across nineteen countries. Text is now held once, bilingually, in the data layer. Following the factsheet, this page records two cycles — 2023 and 2026 — and every SDG citation has been matched to the panel it sits under or removed.",
        fr: "Il s'agit en totalité de résidus du gabarit d'un tableau de bord cloné sur dix-neuf pays. Le texte est désormais stocké une seule fois, en version bilingue, dans la couche de données. Conformément à la fiche, cette page retient deux cycles — 2023 et 2026 — et chaque citation d'indicateur ODD a été rattachée au panneau qui la porte ou supprimée."
      } }
  ]
});
