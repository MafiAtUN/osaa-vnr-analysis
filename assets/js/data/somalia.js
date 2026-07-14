/* Somalia — VNR 2022 → 2026 (second review). Source factsheet authored in English.
   Fact-checked against data/factsheets.txt (lines 1171–1246), the IMF/World Bank HIPC completion-point
   announcement of 13 December 2023, UN Security Council resolution 2714 (2023), the Somalia National
   Bureau of Statistics poverty reporting, and the IPC Somalia acute food insecurity analysis of 2026.
   See `factcheck` at the bottom. */
window.VNR.register({
  slug: "somalia",
  iso: "SO",
  name: { en: "Somalia", fr: "Somalie" },
  region: "east",
  vnrPrev: 2022,
  vnrCycles: [2022, 2026],
  langs: ["EN", "SO"],
  sourceLang: "en",
  factsheetPdf: "factsheets/somalia.pdf",

  tagline: {
    en: "A transition from fragility to resilience and sustainable development under the National Transformation Plan 2025–2029.",
    fr: "Passer de la fragilité à la résilience et au développement durable, dans le cadre du Plan national de transformation 2025-2029."
  },

  themes: [
    { sdg: 1,
      title: { en: "Poverty on a Downward Path", fr: "Une pauvreté en recul" },
      text: {
        en: "The national poverty rate fell from 69% in 2017 to 54.4% by 2022, though it stays acute among nomadic (81.5%) and rural (74.3%) communities.",
        fr: "Le taux de pauvreté national est passé de 69 % en 2017 à 54,4 % en 2022, tout en restant aigu parmi les communautés nomades (81,5 %) et rurales (74,3 %)."
      } },
    { sdg: 4,
      title: { en: "Investing in Human Capital", fr: "Investir dans le capital humain" },
      text: {
        en: "The education budget rose to 9.4% of the federal budget and 3,000 teachers are joining the payroll, despite heavy reliance on donor funding.",
        fr: "Le budget de l'éducation a atteint 9,4 % du budget fédéral et 3 000 enseignants intègrent la fonction publique, malgré une forte dépendance à l'égard des financements des donateurs."
      } },
    { sdg: 6,
      title: { en: "Widening Access to Safe Water", fr: "Élargir l'accès à l'eau potable" },
      text: {
        en: "Households using an improved drinking-water source rose from 67% in 2019 to 77.7% in 2022, during the rainy season, building drought resilience.",
        fr: "La part des ménages utilisant une source d'eau de boisson améliorée est passée de 67 % en 2019 à 77,7 % en 2022, en saison des pluies, renforçant la résilience à la sécheresse."
      } },
    { sdg: 13,
      title: { en: "Confronting Climate Shocks", fr: "Faire face aux chocs climatiques" },
      text: {
        en: "A deepening 2026 drought has caused crop failure, livestock losses and displacement, with 40% facing high acute food insecurity (IPC Phase 3+).",
        fr: "L'aggravation de la sécheresse de 2026 a entraîné pertes de récoltes, mortalité du bétail et déplacements de population, 40 % de la population étant en situation d'insécurité alimentaire aiguë élevée (phase 3 ou plus de l'IPC)."
      } },
    { sdg: 16,
      title: { en: "Security & Sovereignty Restored", fr: "Sécurité et souveraineté rétablies" },
      text: {
        en: "The 31-year arms embargo was lifted under UN Resolution 2714 and Somali National Army offensives weakened Al Shabaab; Somalia now sits on the UN Security Council for 2025–2026.",
        fr: "L'embargo sur les armes, en vigueur depuis 31 ans, a été levé par la résolution 2714 des Nations Unies et les offensives de l'Armée nationale somalienne ont affaibli les Chabab ; la Somalie siège désormais au Conseil de sécurité pour 2025-2026."
      } },
    { sdg: 17,
      title: { en: "Debt Relief & Fiscal Recovery", fr: "Allègement de la dette et redressement budgétaire" },
      text: {
        en: "Completing the HIPC Initiative secured over $4.5bn in debt relief, cutting external debt from 64% of GDP in 2018 to 12.4% by 2025.",
        fr: "L'achèvement de l'initiative PPTE a permis d'obtenir plus de 4,5 milliards de dollars d'allègement de dette, ramenant la dette extérieure de 64 % du PIB en 2018 à 12,4 % en 2025."
      } }
  ],

  continuity: [
    { prev: { en: "First VNR & 9th National Development Plan", fr: "Premier RNV et 9e Plan national de développement" },
      status: "sustained",
      now: { en: "National Transformation Plan 2025–2029", fr: "Plan national de transformation 2025-2029" } },
    { prev: { en: "HIPC Reform Process Underway", fr: "Processus de réforme PPTE engagé" },
      status: "evolved",
      now: { en: "HIPC Completed — $4.5bn Debt Relief", fr: "PPTE achevée — 4,5 milliards de dollars d'allègement" } },
    { prev: { en: "Rebuilding Security Institutions", fr: "Reconstruction des institutions de sécurité" },
      status: "evolved",
      now: { en: "Arms Embargo Lifted & UNSC Seat", fr: "Embargo sur les armes levé et siège au Conseil de sécurité" } },
    { prev: { en: "Poverty Reduction & Baxnaano Transfers", fr: "Réduction de la pauvreté et transferts Baxnaano" },
      status: "sustained",
      now: { en: "Absolute Poverty Down to 54.4% from 69%", fr: "Pauvreté absolue ramenée de 69 % à 54,4 %" } },
    { prev: { en: "SDG Data Dashboard & Goal Tracker", fr: "Tableau de bord des données ODD et outil de suivi des objectifs" },
      status: "evolved",
      now: { en: "SDG Data Availability 39% → 70%", fr: "Disponibilité des données ODD : de 39 % à 70 %" } }
  ],

  concepts: {
    caption: {
      en: "Somalia's message centres on restored security, debt relief and a transition from fragility to resilience under the NTP 2025–2029.",
      fr: "Le message de la Somalie s'articule autour de la sécurité rétablie, de l'allègement de la dette et du passage de la fragilité à la résilience, dans le cadre du Plan national de transformation 2025-2029."
    },
    items: [
      { label: { en: "security", fr: "sécurité" }, value: 15 },
      { label: { en: "human capital", fr: "capital humain" }, value: 13 },
      { label: { en: "data & statistics", fr: "données et statistiques" }, value: 10 },
      { label: { en: "institutional development", fr: "développement institutionnel" }, value: 9 },
      { label: { en: "economic reform", fr: "réforme économique" }, value: 8 },
      { label: { en: "climate & drought", fr: "climat et sécheresse" }, value: 7 },
      { label: { en: "debt relief", fr: "allègement de la dette" }, value: 7 },
      { label: { en: "fiscal budget", fr: "budget de l'État" }, value: 7 },
      { label: { en: "domestic revenue", fr: "recettes intérieures" }, value: 3 }
    ]
  },

  indicators: [
    { id: "debt_gdp", sdg: 17,
      label: { en: "External debt, % of GDP (2025)", fr: "Dette extérieure, en % du PIB (2025)" },
      value: 12.4, unit: "%",
      note: { en: "Down from 64% in 2018. The IMF and World Bank estimated the ratio would fall below 6% at the HIPC completion point (end-2023); the 2025 level reflects new concessional borrowing since then.",
              fr: "Contre 64 % en 2018. Le FMI et la Banque mondiale estimaient que ce ratio tomberait sous les 6 % au point d'achèvement PPTE (fin 2023) ; le niveau de 2025 reflète les nouveaux emprunts concessionnels contractés depuis." },
      source: "VNR 2026 · IMF/World Bank HIPC completion-point announcement, 13 December 2023" },
    { id: "debt_relief", sdg: 17,
      label: { en: "Debt relief secured at HIPC completion", fr: "Allègement de dette obtenu au point d'achèvement PPTE" },
      value: 4.5, unit: "USD bn",
      note: { en: "Somalia became the 37th country to reach the HIPC completion point, in December 2023. Relief came from the IMF, IDA, the African Development Fund, other multilaterals, and bilateral and commercial creditors.",
              fr: "La Somalie est devenue le 37e pays à atteindre le point d'achèvement PPTE, en décembre 2023. L'allègement provient du FMI, de l'IDA, du Fonds africain de développement, d'autres institutions multilatérales et de créanciers bilatéraux et commerciaux." },
      source: "IMF/World Bank, 13 December 2023 · VNR 2026" },
    { id: "poverty", sdg: 1,
      label: { en: "National poverty rate (2022)", fr: "Taux de pauvreté national (2022)" },
      value: 54.4, unit: "%",
      note: { en: "Down from 69% in 2017 — but 81.5% among nomadic communities and 74.3% in rural areas. The national average is not the experience of most poor Somalis.",
              fr: "Contre 69 % en 2017 — mais 81,5 % parmi les communautés nomades et 74,3 % en zone rurale. La moyenne nationale ne reflète pas la réalité vécue par la plupart des Somaliens pauvres." },
      source: "VNR 2026 · Somalia National Bureau of Statistics, SIHBS 2022" },
    { id: "food_insecurity", sdg: 13,
      label: { en: "Population facing acute food insecurity, IPC Phase 3+ (2026 drought)", fr: "Population en insécurité alimentaire aiguë, phase 3 ou plus de l'IPC (sécheresse de 2026)" },
      value: 40, unit: "%",
      note: { en: "The review's own figure for the deepening 2026 drought. The IPC's April–June 2026 projection puts it at 6.0 million people, 31% of the analysed population, after 6.5 million in February–March.",
              fr: "Chiffre propre à l'examen pour la sécheresse qui s'aggrave en 2026. La projection de l'IPC pour avril-juin 2026 l'établit à 6,0 millions de personnes, soit 31 % de la population analysée, après 6,5 millions en février-mars." },
      source: "VNR 2026 · IPC Somalia, Acute Food Insecurity Projection Update, April–June 2026" },
    { id: "water_improved", sdg: 6,
      label: { en: "Households using an improved drinking-water source (2022, rainy season)", fr: "Ménages utilisant une source d'eau de boisson améliorée (2022, saison des pluies)" },
      value: 77.7, unit: "%",
      note: { en: "Up from 67% in 2019. An improved source is not the same as safely managed water, which stands at 63.2% in the rainy season and 60.1% in the dry season.",
              fr: "Contre 67 % en 2019. Une source améliorée n'équivaut pas à une eau gérée en toute sécurité, dont la part s'établit à 63,2 % en saison des pluies et à 60,1 % en saison sèche." },
      source: "VNR 2026 · SDG indicator 6.1.1" },
    { id: "education_budget", sdg: 4,
      label: { en: "Education share of the federal budget", fr: "Part de l'éducation dans le budget fédéral" },
      value: 9.4, unit: "%",
      note: { en: "3,000 teachers are joining the public payroll. The review is explicit that the sector still relies heavily on donor funding.",
              fr: "3 000 enseignants intègrent la fonction publique. L'examen indique explicitement que le secteur demeure fortement tributaire des financements des donateurs." },
      source: "VNR 2026" },
    { id: "sdg_data", sdg: 17,
      label: { en: "SDG indicators with available data (2026)", fr: "Indicateurs ODD disposant de données (2026)" },
      value: 70, unit: "%",
      note: { en: "Up from 39% at the 2022 VNR — the fastest statistical capacity gain reported by any country in this cohort, and the reason the rest of this page can be written at all.",
              fr: "Contre 39 % lors du RNV de 2022 — le gain de capacité statistique le plus rapide déclaré par un pays de ce groupe, et la raison même pour laquelle le reste de cette page peut être rédigé." },
      source: "VNR 2026 · Somalia National Bureau of Statistics" }
  ],

  charts: [
    { id: "debt", type: "gap", sdg: 17,
      title: { en: "External public debt, % of GDP: before HIPC, at completion, and today",
               fr: "Dette publique extérieure, en % du PIB : avant la PPTE, au point d'achèvement, et aujourd'hui" },
      unit: "%",
      items: [
        { label: { en: "2018, before relief", fr: "2018, avant allègement" }, value: 64, emphasis: false },
        { label: { en: "End-2023, at HIPC completion (IMF: below 6%)", fr: "Fin 2023, au point d'achèvement PPTE (FMI : moins de 6 %)" }, value: 6, emphasis: false },
        { label: { en: "2025", fr: "2025" }, value: 12.4, emphasis: true }
      ],
      insight: {
        en: "This is the most dramatic single data story in the 2026 cohort. In 2018 Somalia owed 64% of its GDP to creditors it had been in arrears to for three decades and was locked out of concessional finance entirely. The HIPC completion point in December 2023 wrote off over USD 4.5 billion and the ratio collapsed to below 6% of GDP. The 12.4% recorded in 2025 is not a relapse: it is the sound of a country borrowing again, on concessional terms, because it can. Read the three bars together and they describe the return of a state to the international financial system — a debt burden cut by four-fifths in seven years, and the beginning of a normal one.",
        fr: "C'est l'histoire chiffrée la plus spectaculaire du groupe 2026. En 2018, la Somalie devait 64 % de son PIB à des créanciers envers lesquels elle était en arriérés depuis trois décennies, et se trouvait totalement exclue du financement concessionnel. Le point d'achèvement PPTE, en décembre 2023, a effacé plus de 4,5 milliards de dollars et le ratio s'est effondré sous les 6 % du PIB. Les 12,4 % enregistrés en 2025 ne constituent pas une rechute : ils traduisent le fait qu'un pays emprunte de nouveau, à des conditions concessionnelles, parce qu'il le peut. Lues ensemble, les trois barres racontent le retour d'un État dans le système financier international : un fardeau de la dette réduit de quatre cinquièmes en sept ans, et l'amorce d'un endettement normal."
      },
      source: "VNR 2026 · IMF/World Bank HIPC completion-point announcement, 13 December 2023" },

    { id: "poverty_trend", type: "line", sdg: 1,
      title: { en: "National poverty rate, % of the population", fr: "Taux de pauvreté national, en % de la population" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "poverty", label: { en: "National poverty rate", fr: "Taux de pauvreté national" },
          points: [{ x: "2017", y: 69 }, { x: "2022", y: 54.4 }] }
      ],
      insight: {
        en: "Nearly fifteen points of poverty removed in five years, in a country simultaneously fighting an insurgency and a sequence of droughts. It is the strongest evidence in the review that progress does not have to wait for stability. It is also a two-point line: Somalia had no comparable measurement before the 2017 and 2022 household surveys, which is itself part of the story told by the jump in data availability from 39% to 70%.",
        fr: "Près de quinze points de pauvreté en moins en cinq ans, dans un pays qui affronte simultanément une insurrection et une succession de sécheresses. C'est la preuve la plus solide, dans cet examen, que le progrès n'a pas à attendre la stabilité. C'est aussi une courbe à deux points : la Somalie ne disposait d'aucune mesure comparable avant les enquêtes auprès des ménages de 2017 et 2022 — ce qui participe du récit que raconte le bond de la disponibilité des données, de 39 % à 70 %."
      },
      source: "VNR 2026 · Somalia National Bureau of Statistics, SIHBS 2022 · SDG indicator 1.2.1" },

    { id: "poverty_gap", type: "gap", sdg: 1,
      title: { en: "Poverty by way of life, 2022, % of the population", fr: "Pauvreté selon le mode de vie, 2022, en % de la population" },
      unit: "%",
      items: [
        { label: { en: "Nomadic communities", fr: "Communautés nomades" }, value: 81.5, emphasis: true },
        { label: { en: "Rural communities", fr: "Communautés rurales" }, value: 74.3, emphasis: false },
        { label: { en: "National average", fr: "Moyenne nationale" }, value: 54.4, emphasis: false }
      ],
      insight: {
        en: "The national rate fell; the poverty did not move evenly. Four in five nomadic Somalis and three in four rural Somalis remain poor, against a national average of 54.4%. The gap is not a rounding detail — it means the measured improvement is concentrated in settled and urban populations, while the pastoral communities most exposed to the 2026 drought are the ones the average is least describing. Showing the national figure alone would misrepresent who the review is about.",
        fr: "Le taux national a reculé ; la pauvreté, elle, ne s'est pas déplacée uniformément. Quatre Somaliens nomades sur cinq et trois Somaliens ruraux sur quatre demeurent pauvres, contre une moyenne nationale de 54,4 %. Cet écart n'est pas un détail d'arrondi : il signifie que l'amélioration mesurée se concentre dans les populations sédentaires et urbaines, tandis que les communautés pastorales, les plus exposées à la sécheresse de 2026, sont précisément celles que la moyenne décrit le moins. Ne présenter que le chiffre national reviendrait à travestir le sujet même de cet examen."
      },
      source: "VNR 2026 · Somalia National Bureau of Statistics, SIHBS 2022" },

    { id: "water_ladder", type: "gap", sdg: 6,
      title: { en: "Water: an improved source is not safely managed water, 2022",
               fr: "Eau : une source améliorée n'est pas une eau gérée en toute sécurité, 2022" },
      unit: "%",
      items: [
        { label: { en: "Improved drinking-water source (rainy season)", fr: "Source d'eau de boisson améliorée (saison des pluies)" }, value: 77.7, emphasis: false },
        { label: { en: "Safely managed water (rainy season)", fr: "Eau gérée en toute sécurité (saison des pluies)" }, value: 63.2, emphasis: false },
        { label: { en: "Safely managed water (dry season)", fr: "Eau gérée en toute sécurité (saison sèche)" }, value: 60.1, emphasis: false },
        { label: { en: "Safely managed water, nomadic households (dry season)", fr: "Eau gérée en toute sécurité, ménages nomades (saison sèche)" }, value: 14.2, emphasis: true }
      ],
      insight: {
        en: "Four figures, one ladder, and the whole distance between a headline and a household. 77.7% of Somalis use an improved water source in the rainy season; 63.2% have safely managed water; in the dry season that falls to 60.1%; and for nomadic households in the dry season it is 14.2%. Each step down is a real loss of service, and the last one is a collapse. Somalia's water system is rain-dependent by design, which is exactly why a drought year like 2026 translates so directly into displacement.",
        fr: "Quatre chiffres, une même échelle, et toute la distance qui sépare un titre d'un ménage. 77,7 % des Somaliens utilisent une source d'eau améliorée en saison des pluies ; 63,2 % disposent d'une eau gérée en toute sécurité ; en saison sèche, cette part tombe à 60,1 % ; et pour les ménages nomades en saison sèche, elle n'est plus que de 14,2 %. Chaque marche descendue correspond à une perte réelle de service, et la dernière est un effondrement. Le système hydrique somalien dépend structurellement des pluies : c'est précisément pourquoi une année de sécheresse comme 2026 se traduit aussi directement par des déplacements de population."
      },
      source: "VNR 2026 · SDG indicators 6.1.1 & 6.2.1" },

    { id: "sdg_data", type: "gap", sdg: 17,
      title: { en: "SDG indicators with available data, % of the framework", fr: "Indicateurs ODD disposant de données, en % du cadre" },
      unit: "%",
      items: [
        { label: { en: "At the 2022 VNR", fr: "Lors du RNV de 2022" }, value: 39, emphasis: false },
        { label: { en: "At the 2026 VNR", fr: "Lors du RNV de 2026" }, value: 70, emphasis: true }
      ],
      insight: {
        en: "The least visible achievement in the review and arguably the one that makes the rest possible. Somalia went from being able to report on around two SDG indicators in five to seven in ten in a single cycle. Every other number on this page — the poverty fall, the water ladder, the debt trajectory — exists because a statistical system was rebuilt to produce it. Data capacity is not a footnote to the 2030 Agenda in a post-conflict state; it is the precondition for it.",
        fr: "C'est l'acquis le moins visible de l'examen, et sans doute celui qui rend tous les autres possibles. En un seul cycle, la Somalie est passée de la capacité à renseigner environ deux indicateurs ODD sur cinq à sept sur dix. Chacun des chiffres de cette page — le recul de la pauvreté, l'échelle de l'eau, la trajectoire de la dette — n'existe que parce qu'un système statistique a été reconstruit pour le produire. Dans un État sortant d'un conflit, la capacité statistique n'est pas une note de bas de page de l'Agenda 2030 : elle en est la condition préalable."
      },
      source: "VNR 2026 · Somalia National Bureau of Statistics" }
  ],

  instruments: [
    { name: { en: "Centennial Vision 2060 & the National Transformation Plan", fr: "Vision centennale 2060 et Plan national de transformation" },
      kicker: { en: "NTP I, 2025–2029", fr: "PNT I, 2025-2029" },
      text: {
        en: "Centennial Vision 2060 sets the horizon — a peaceful, stable, middle-income Somalia by its centenary — and the National Transformation Plan (2025–2029) is its first medium-term instrument, succeeding the 9th National Development Plan. Its first pillar is Transformational Governance: peace, rule of law and institutional performance are treated as the precondition for every other goal, not as a sector alongside them. Somalia runs no separate SDG tracker; the NTP is the reporting line.",
        fr: "La Vision centennale 2060 fixe l'horizon — une Somalie pacifiée, stable et à revenu intermédiaire pour son centenaire — et le Plan national de transformation (2025-2029) en constitue le premier instrument de moyen terme, succédant au 9e Plan national de développement. Son premier pilier est la gouvernance transformatrice : la paix, l'état de droit et la performance institutionnelle y sont traités comme la condition préalable de tous les autres objectifs, et non comme un secteur parmi d'autres. La Somalie ne tient pas de dispositif de suivi distinct des ODD : le Plan national de transformation en est la chaîne de reporting."
      },
      source: "VNR 2026" },
    { name: { en: "HIPC completion", fr: "Achèvement de l'initiative PPTE" },
      kicker: { en: "USD 4.5bn, December 2023", fr: "4,5 milliards de dollars, décembre 2023" },
      text: {
        en: "Somalia reached the completion point of the Heavily Indebted Poor Countries Initiative on 13 December 2023 — the 37th country to do so — securing over USD 4.5 billion in relief from the IMF, IDA, the African Development Fund, other multilateral creditors and bilateral and commercial creditors. External debt fell from 64% of GDP in 2018 to below 6% at completion, and stands at 12.4% in 2025 as concessional borrowing resumes. It is the single act that reopened development financing to the country.",
        fr: "La Somalie a atteint le point d'achèvement de l'initiative en faveur des pays pauvres très endettés le 13 décembre 2023 — 37e pays à y parvenir — obtenant plus de 4,5 milliards de dollars d'allègement de la part du FMI, de l'IDA, du Fonds africain de développement, d'autres créanciers multilatéraux ainsi que de créanciers bilatéraux et commerciaux. La dette extérieure est passée de 64 % du PIB en 2018 à moins de 6 % au point d'achèvement, et s'établit à 12,4 % en 2025 à mesure que reprennent les emprunts concessionnels. C'est l'acte qui, à lui seul, a rouvert au pays l'accès au financement du développement."
      },
      source: "IMF/World Bank, 13 December 2023 · VNR 2026" },
    { name: { en: "Security transition and UN Security Council resolution 2714", fr: "Transition sécuritaire et résolution 2714 du Conseil de sécurité" },
      kicker: { en: "31-year embargo lifted", fr: "un embargo de 31 ans levé" },
      text: {
        en: "On 1 December 2023 the Security Council unanimously adopted resolution 2714, lifting the arms embargo imposed on Somalia by resolution 733 of 1992 — after 31 years — while maintaining it on Al-Shabaab and other non-state actors. Somali National Army offensives have weakened Al-Shabaab, and Somalia took a seat on the Security Council itself for 2025–2026. The condition attached is strict weapons and ammunition management, which the National Transformation Plan carries as a governance commitment.",
        fr: "Le 1er décembre 2023, le Conseil de sécurité a adopté à l'unanimité la résolution 2714, levant l'embargo sur les armes imposé à la Somalie par la résolution 733 de 1992 — après 31 ans — tout en le maintenant à l'égard des Chabab et des autres acteurs non étatiques. Les offensives de l'Armée nationale somalienne ont affaibli les Chabab, et la Somalie siège elle-même au Conseil de sécurité pour 2025-2026. La condition posée est une gestion rigoureuse des armes et des munitions, que le Plan national de transformation porte comme un engagement de gouvernance."
      },
      source: "UN Security Council resolution 2714 (2023) · VNR 2026" },
    { name: { en: "Domestic revenue mobilisation", fr: "Mobilisation des ressources intérieures" },
      kicker: { en: "Treasury Single Account & SFMIS", fr: "compte unique du Trésor et SFMIS" },
      text: {
        en: "Tax administration modernisation, customs reform, digital revenue systems and a broadened tax base are reported to have lifted federal domestic revenue from about USD 263 million in 2022 to an estimated USD 415 million in 2025, underpinned by a Treasury Single Account and the Somalia Financial Management Information System. The base remains very low relative to need, and \"domestic revenue\" is the least-invoked concept in the review's own key messages — three mentions.",
        fr: "La modernisation de l'administration fiscale, la réforme douanière, la dématérialisation des systèmes de recouvrement et l'élargissement de l'assiette auraient porté les recettes intérieures fédérales d'environ 263 millions de dollars en 2022 à quelque 415 millions en 2025, avec l'appui d'un compte unique du Trésor et du système d'information de gestion des finances publiques (SFMIS). La base demeure très étroite au regard des besoins, et les « recettes intérieures » constituent le concept le moins invoqué des messages clés de l'examen : trois occurrences."
      },
      source: "VNR 2026" },
    { name: { en: "National WASH Sector Policy & Strategic Plan", fr: "Politique et plan stratégique nationaux du secteur EAH" },
      kicker: { en: "rural water rehabilitation", fr: "réhabilitation de l'eau en milieu rural" },
      text: {
        en: "The WASH policy rehabilitates rural water systems, expands solar-powered boreholes and strengthens groundwater mapping, alongside a national water resources strategy built on integrated water resources management. Its declared frontier is the nomadic population: 14.2% safely managed water in the dry season, and open defecation still at 85.9%, against 16.8% nationally.",
        fr: "La politique EAH réhabilite les systèmes d'eau ruraux, développe les forages solaires et renforce la cartographie des eaux souterraines, aux côtés d'une stratégie nationale des ressources en eau fondée sur la gestion intégrée. Sa frontière déclarée est la population nomade : 14,2 % d'eau gérée en toute sécurité en saison sèche et une défécation à l'air libre encore à 85,9 %, contre 16,8 % à l'échelle nationale."
      },
      source: "VNR 2026" },
    { name: { en: "National Employment Policy (2024)", fr: "Politique nationale de l'emploi (2024)" },
      kicker: { en: "50,000 placements a year", fr: "50 000 placements par an" },
      text: {
        en: "Approved by the Council of Ministers and embedded in the National Transformation Plan, the policy centres on a National Youth Employment Programme targeting 50,000 job placements a year and expanded technical and vocational training — set against a labour market in which the great majority of work is informal.",
        fr: "Approuvée par le Conseil des ministres et intégrée au Plan national de transformation, cette politique s'articule autour d'un Programme national pour l'emploi des jeunes visant 50 000 placements par an et un élargissement de la formation technique et professionnelle — dans un marché du travail où la grande majorité des emplois relèvent de l'informel."
      },
      source: "VNR 2026" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        en: "The old dashboard headlined \"External Debt / GDP — below 6%\" (end-2023) in five separate places, while the factsheet reports external debt at 12.4% of GDP by 2025. Side by side, the site would have shown two different debt levels for the same country.",
        fr: "L'ancien tableau de bord affichait « Dette extérieure / PIB — moins de 6 % » (fin 2023) à cinq endroits distincts, alors que la fiche indique une dette extérieure à 12,4 % du PIB en 2025. Présentés côte à côte, ces chiffres auraient donné deux niveaux d'endettement différents pour un même pays."
      },
      resolution: {
        en: "Both are correct, for different dates. The IMF and World Bank announced on 13 December 2023 that external debt would fall from 64% of GDP in 2018 to below 6% at the HIPC completion point. The factsheet's 12.4% is the 2025 level, after Somalia resumed concessional borrowing from the institutions that relief reopened to it. The dashboard presented a completion-point estimate as a current figure. All three points are now plotted together, and the rise from 6% to 12.4% is explained rather than hidden.",
        fr: "Les deux chiffres sont exacts, à des dates différentes. Le FMI et la Banque mondiale ont annoncé, le 13 décembre 2023, que la dette extérieure tomberait de 64 % du PIB en 2018 à moins de 6 % au point d'achèvement PPTE. Les 12,4 % de la fiche correspondent au niveau de 2025, après la reprise par la Somalie des emprunts concessionnels auprès des institutions que l'allègement lui a rouvertes. Le tableau de bord présentait une estimation au point d'achèvement comme un chiffre courant. Les trois points sont désormais tracés ensemble, et la remontée de 6 % à 12,4 % est expliquée plutôt que masquée."
      } },
    { severity: "mislabel",
      issue: {
        en: "Somalia's poverty data — 54.4% in 2022, down from 69.0% in 2017 — was displayed under a panel headed \"SDG 11 · Sustainable Cities and Communities\" and cited to SDG indicator 1.2.1 in the same breath.",
        fr: "Les données de pauvreté de la Somalie — 54,4 % en 2022, contre 69,0 % en 2017 — figuraient sous un panneau intitulé « ODD 11 · Villes et communautés durables » tout en étant rattachées à l'indicateur ODD 1.2.1."
      },
      resolution: {
        en: "The panel's own citation gave it away: 1.2.1 is an SDG 1 indicator. Poverty is the first of Somalia's six factsheet themes and is now reported under SDG 1, with the nomadic (81.5%) and rural (74.3%) rates shown next to the national average rather than replaced by it.",
        fr: "La citation du panneau le trahissait elle-même : 1.2.1 est un indicateur relevant de l'ODD 1. La pauvreté constitue le premier des six thèmes de la fiche somalienne ; elle est désormais rattachée à l'ODD 1, les taux nomade (81,5 %) et rural (74,3 %) étant présentés à côté de la moyenne nationale et non à sa place."
      } },
    { severity: "mislabel",
      issue: {
        en: "Several of the dashboard's line charts did not plot their own numbers. On the electricity chart, drawn on a 0–80% axis, the 2025 value of 76% was placed at the height of about 68% and the 2022 value of 69% at about 59%. On the WASH chart, safely managed water at 63.2% was drawn at the height of about 44%, while the open-defecation series on the same chart was drawn correctly. On the debt chart, 64% of GDP in 2018 was drawn at about 50%.",
        fr: "Plusieurs courbes du tableau de bord ne traçaient pas leurs propres valeurs. Sur le graphique de l'électricité, dessiné sur un axe de 0 à 80 %, la valeur de 76 % pour 2025 était placée à la hauteur d'environ 68 %, et celle de 69 % pour 2022 à environ 59 %. Sur le graphique EAH, l'eau gérée en toute sécurité à 63,2 % était tracée à la hauteur d'environ 44 %, alors que la série de la défécation à l'air libre, sur le même graphique, était correctement positionnée. Sur le graphique de la dette, les 64 % du PIB de 2018 étaient tracés à environ 50 %."
      },
      resolution: {
        en: "The polylines were drawn by hand rather than derived from the data, so the geometry understated the very gains the captions claimed. Every chart on this page is now generated from the values in this file: a point cannot sit anywhere other than where its number puts it.",
        fr: "Les polylignes avaient été tracées à la main plutôt que dérivées des données : la géométrie minorait donc les progrès mêmes que les légendes revendiquaient. Chaque graphique de cette page est désormais généré à partir des valeurs de ce fichier : un point ne peut se situer ailleurs que là où son chiffre le place."
      } },
    { severity: "unverified",
      issue: {
        en: "The dashboard reported \"Remittances — $4.8B received in 2024, up 11.9% from 2023\" as a headline financing figure in four panels.",
        fr: "Le tableau de bord présentait « Envois de fonds — 4,8 milliards de dollars reçus en 2024, en hausse de 11,9 % par rapport à 2023 » comme un chiffre de financement de premier plan, dans quatre panneaux."
      },
      resolution: {
        en: "The figure could not be corroborated. World Bank and Central Bank of Somalia reporting puts remittance inflows in the region of USD 1.7–2.2 billion a year; USD 4.8 billion would be a very large share of an economy of roughly USD 12 billion and no source was found for it or for the 11.9% increase. It has been dropped rather than shown with an invented citation. Remittances remain economically decisive for Somalia — that claim does not depend on this number.",
        fr: "Ce chiffre n'a pu être corroboré. Les données de la Banque mondiale et de la Banque centrale de Somalie situent les envois de fonds autour de 1,7 à 2,2 milliards de dollars par an ; 4,8 milliards représenteraient une part très élevée d'une économie d'environ 12 milliards, et aucune source n'a été trouvée pour ce montant ni pour la hausse de 11,9 %. Il a été retiré plutôt que présenté avec une citation inventée. Les envois de fonds demeurent économiquement déterminants pour la Somalie — cette affirmation ne dépend pas de ce chiffre."
      } },
    { severity: "mislabel",
      issue: {
        en: "A panel titled \"Mobile money vs. formal banking access\" set 81.8% against 8.8% as though they measured the same thing. They do not: 81.8% is a share of households with mobile-money access, 8.8% is a share of adults with a formal bank account.",
        fr: "Un panneau intitulé « Argent mobile et accès bancaire formel » opposait 81,8 % à 8,8 % comme s'il s'agissait de la même mesure. Ce n'est pas le cas : 81,8 % représente la part des ménages ayant accès à l'argent mobile, 8,8 % la part des adultes détenant un compte bancaire formel."
      },
      resolution: {
        en: "Two different denominators cannot be put on the same bar without saying so. The contrast is real and remarkable, but it is now stated with its bases: households for mobile money, adults for bank accounts. This is the same class of error as the poverty average — a comparison that only works if nobody asks what is being counted.",
        fr: "Deux dénominateurs différents ne peuvent figurer sur une même barre sans que cela soit dit. Le contraste est réel et remarquable, mais il est désormais énoncé avec ses bases : les ménages pour l'argent mobile, les adultes pour les comptes bancaires. Il s'agit de la même famille d'erreurs que la moyenne de pauvreté : une comparaison qui ne tient que si personne ne demande ce que l'on compte."
      } },
    { severity: "corrected",
      issue: {
        en: "Four of the six themes on Somalia's factsheet had no presence on the dashboard at all: SDG 16 (the lifting of the 31-year arms embargo and the Security Council seat), SDG 4 (education at 9.4% of the federal budget, 3,000 teachers joining the payroll), SDG 13 (the 2026 drought and 40% of the population in IPC Phase 3+), and the rise in SDG data availability from 39% to 70%. The dashboard's five focus goals were 6, 7, 9, 11 and 17 — inherited from the template, not from Somalia's review.",
        fr: "Quatre des six thèmes de la fiche somalienne étaient totalement absents du tableau de bord : l'ODD 16 (levée de l'embargo sur les armes après 31 ans et siège au Conseil de sécurité), l'ODD 4 (éducation à 9,4 % du budget fédéral, 3 000 enseignants intégrant la fonction publique), l'ODD 13 (sécheresse de 2026 et 40 % de la population en phase 3 ou plus de l'IPC), ainsi que la progression de la disponibilité des données ODD de 39 % à 70 %. Les cinq objectifs prioritaires du tableau de bord — 6, 7, 9, 11 et 17 — étaient hérités du gabarit, non de l'examen somalien."
      },
      resolution: {
        en: "All four are restored. The security and data-capacity themes are, on the review's own word-frequency counts, the two most-invoked concepts in its key messages (\"security\" 15 mentions, \"data & statistics\" 10) — a dashboard that omitted both was not describing Somalia's review.",
        fr: "Les quatre thèmes sont rétablis. Selon les décomptes de fréquence de l'examen lui-même, la sécurité et la capacité statistique constituent les deux concepts les plus invoqués de ses messages clés (« sécurité », 15 occurrences ; « données et statistiques », 10) — un tableau de bord qui les omettait tous deux ne décrivait pas l'examen de la Somalie."
      } },
    { severity: "unverified",
      issue: {
        en: "The factsheet reports 40% of the population facing high acute food insecurity (IPC Phase 3+) in the 2026 drought.",
        fr: "La fiche indique que 40 % de la population est confrontée à une insécurité alimentaire aiguë élevée (phase 3 ou plus de l'IPC) lors de la sécheresse de 2026."
      },
      resolution: {
        en: "The IPC's own analysis for Somalia projects 6.0 million people — 31% of the analysed population — in Phase 3 or above for April–June 2026, following 6.5 million in February–March. The review's 40% is retained as its own figure and shown as such, with the IPC projection stated alongside it so that the reader can see which body is counting what. The direction and the severity are not in dispute; the denominator is.",
        fr: "L'analyse de l'IPC pour la Somalie projette 6,0 millions de personnes — 31 % de la population analysée — en phase 3 ou plus pour avril-juin 2026, après 6,5 millions en février-mars. Les 40 % de l'examen sont conservés comme chiffre propre à celui-ci et présentés comme tel, la projection de l'IPC étant indiquée à côté afin que le lecteur voie quelle institution compte quoi. Ni le sens de l'évolution ni la gravité ne sont contestés ; c'est le dénominateur qui l'est."
      } }
  ]
});
