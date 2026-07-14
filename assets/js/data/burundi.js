/* Burundi — VNR 2020 → 2026 (second review). Source factsheet authored in FRENCH:
   the `fr` strings are the source wording, `en` is the translation.
   Fact-checked against factsheets.pdf p.4, the old "Burundi Dashboard v4", the World Bank
   SDG 7.1.1 electrification dataset and WHO/UNICEF JMP. See `factcheck` at the bottom.
   Guiding principle: Burundi's own headline finding is that 35% of SDG targets cannot be
   assessed for lack of data. The data gap is reported as the finding — not papered over. */
window.VNR.register({
  slug: "burundi",
  iso: "BI",
  name: { en: "Burundi", fr: "Burundi" },
  region: "east",
  vnrPrev: 2020,
  vnrCycles: [2020, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/burundi.pdf",

  tagline: {
    en: "Burundi's second VNR reaffirms its commitment to the 2030 Agenda under the principle of leaving no one behind.",
    fr: "Le deuxième RNV confirme l'engagement du Burundi pour l'Agenda 2030, sous le principe « ne laisser personne de côté »."
  },

  themes: [
    { sdg: 3,
      title: { en: "Free Health Care", fr: "Gratuité des soins" },
      text: {
        en: "Free health care and schooling for children under five and for pregnant women has been maintained for 20 years.",
        fr: "La gratuité des soins de santé et de la scolarité pour les enfants de moins de 5 ans et les femmes enceintes se poursuit depuis 20 ans."
      } },
    { sdg: 4,
      title: { en: "Human Capital Development", fr: "Développement du capital humain" },
      text: {
        en: "The review integrates human capital development and equality of opportunity in access to social services.",
        fr: "Le rapport intègre le développement du capital humain et l'égalité des chances dans l'accès aux services sociaux."
      } },
    { sdg: 5,
      title: { en: "Empowering Women and Young People", fr: "Autonomisation des femmes et des jeunes" },
      text: {
        en: "Youth and women's banks have been created to finance their economic empowerment, with women, young people and children cast as agents of change.",
        fr: "Création de banques des jeunes et des femmes finançant leur autonomisation économique, avec femmes, jeunes et enfants comme acteurs du changement."
      } },
    { sdg: 13,
      title: { en: "Climate Resilience", fr: "Résilience climatique" },
      text: {
        en: "The environmental pillar is advancing, with room to strengthen both the data and climate resilience itself.",
        fr: "Le pilier environnemental progresse, avec des marges pour renforcer les données et la résilience climatique."
      } },
    { sdg: 16,
      title: { en: "Governance, Peace and Partnerships", fr: "Gouvernance, paix et partenariats" },
      text: {
        en: "Significant progress in governance, peace and partnerships; 49% of SDG targets have been improving since 2015.",
        fr: "Des progrès significatifs en gouvernance, paix et partenariats ; 49 % des cibles ODD sont en amélioration depuis 2015."
      } },
    { sdg: 17,
      title: { en: "Data and Monitoring & Evaluation", fr: "Données et suivi-évaluation" },
      text: {
        en: "A substantial data deficit — 35% of targets cannot be assessed — calls for stronger statistical and monitoring and evaluation systems.",
        fr: "Un déficit important de données (35 % de cibles non évaluables) appelle à renforcer les systèmes statistiques et de suivi-évaluation."
      } }
  ],

  continuity: [
    { prev: { en: "Inclusive development and structural transformation", fr: "Développement inclusif et transformation structurelle" },
      status: "sustained",
      now: { en: "Second VNR — 49% of targets improving", fr: "Deuxième RNV — 49 % des cibles en hausse" } },
    { prev: { en: "Social services & social well-being", fr: "Services sociaux & bien-être social" },
      status: "evolved",
      now: { en: "Free health care & schooling (20 years)", fr: "Gratuité santé & scolarité (20 ans)" } },
    { prev: { en: "Prioritisation: 49 targets, 101 indicators", fr: "Priorisation : 49 cibles, 101 indicateurs" },
      status: "evolved",
      now: { en: "Youth and women's banks", fr: "Banques des jeunes et des femmes" } },
    { prev: { en: "Structural transformation & decent jobs", fr: "Transformation structurelle & emplois décents" },
      status: "sustained",
      now: { en: "Structural transformation of the economy", fr: "Transformation structurelle de l'économie" } },
    { prev: { en: "The data availability challenge", fr: "Défi de disponibilité des données" },
      status: "evolved",
      now: { en: "35% of targets not assessable (data challenge)", fr: "35 % de cibles non évaluables (défi data)" } }
  ],

  concepts: {
    caption: {
      en: "Burundi's message centres on governance, health and the empowerment of women and young people.",
      fr: "Le Burundi met l'accent sur la gouvernance, la santé et l'autonomisation des femmes et des jeunes."
    },
    items: [
      { label: { en: "data & monitoring", fr: "données & suivi" }, value: 12 },
      { label: { en: "social inclusion", fr: "inclusion sociale" }, value: 12 },
      { label: { en: "inclusive growth", fr: "croissance inclusive" }, value: 11 },
      { label: { en: "climate resilience", fr: "résilience climatique" }, value: 8 },
      { label: { en: "youth & women's banks", fr: "banques jeunes & femmes" }, value: 6 },
      { label: { en: "governance & peace", fr: "gouvernance & paix" }, value: 5 },
      { label: { en: "basic services", fr: "services de base" }, value: 5 },
      { label: { en: "human capital", fr: "capital humain" }, value: 4 },
      { label: { en: "financing", fr: "financement" }, value: 3 }
    ]
  },

  indicators: [
    { id: "targets_improving", sdg: 16,
      label: { en: "SDG targets improving since 2015", fr: "Cibles ODD en amélioration depuis 2015" },
      value: 49, unit: "%",
      note: { en: "Burundi's own assessment in its second VNR. The review does not state whether the denominator is all SDG targets or only those it was able to measure.",
              fr: "Auto-évaluation du Burundi dans son deuxième RNV. Le rapport ne précise pas si le dénominateur correspond à l'ensemble des cibles ODD ou aux seules cibles mesurables." },
      source: "VNR 2026 (self-assessed)" },
    { id: "targets_unassessable", sdg: 17,
      label: { en: "SDG targets that cannot be assessed for lack of data", fr: "Cibles ODD non évaluables faute de données" },
      value: 35, unit: "%",
      note: { en: "The headline finding of the review. More than a third of the 2030 Agenda is, for Burundi, statistically invisible.",
              fr: "Le principal constat de la revue. Plus d'un tiers de l'Agenda 2030 est, pour le Burundi, statistiquement invisible." },
      source: "VNR 2026" },
    { id: "prioritised", sdg: 17,
      label: { en: "SDG targets prioritised for national monitoring", fr: "Cibles ODD priorisées pour le suivi national" },
      value: 49, unit: "targets",
      note: { en: "Tracked through 101 indicators. The prioritisation carried over from the 2020 VNR and remains the backbone of the monitoring framework.",
              fr: "Suivies au moyen de 101 indicateurs. Cette priorisation, héritée du RNV 2020, demeure l'ossature du dispositif de suivi." },
      source: "VNR 2026 · VNR 2020" },
    { id: "free_care", sdg: 3,
      label: { en: "Free health care and schooling — years sustained", fr: "Gratuité des soins et de la scolarité — années de continuité" },
      value: 20, unit: "years",
      note: { en: "For children under five and pregnant women. The longest-running social policy commitment in the review.",
              fr: "Pour les enfants de moins de 5 ans et les femmes enceintes. L'engagement de politique sociale le plus ancien de la revue." },
      source: "VNR 2026" },
    { id: "revenue", sdg: 17,
      label: { en: "Total public revenue, % of GDP (2024)", fr: "Recettes publiques totales, en % du PIB (2024)" },
      value: 17.7, unit: "%",
      note: { en: "Up from 13.4% in 2015. Distinct from internally-raised revenue, which reached 10.6% of GDP.",
              fr: "Contre 13,4 % en 2015. À distinguer des recettes levées en interne, qui atteignent 10,6 % du PIB." },
      source: "VNR 2026 · SDG indicator 17.1.1" },
    { id: "elec_access", sdg: 7,
      label: { en: "Electricity access — national figure (2025)", fr: "Accès à l'électricité — chiffre national (2025)" },
      value: 25.9, unit: "%",
      note: { en: "Burundi's own figure. The World Bank's SDG 7.1.1 electrification dataset puts Burundi at 11.6% in 2023 — the two cannot be reconciled. Read alongside the chart below.",
              fr: "Chiffre déclaré par le Burundi. La série d'électrification ODD 7.1.1 de la Banque mondiale situe le Burundi à 11,6 % en 2023 — les deux sont irréconciliables. À lire avec le graphique ci-dessous." },
      source: "VNR 2026 (self-reported) · contrast with World Bank SDG 7.1.1" }
  ],

  charts: [
    { id: "data_gap", type: "gap", sdg: 17,
      title: { en: "What Burundi can measure, and what it cannot",
               fr: "Ce que le Burundi peut mesurer, et ce qu'il ne peut pas" },
      unit: "%",
      items: [
        { label: { en: "SDG targets improving since 2015", fr: "Cibles ODD en amélioration depuis 2015" }, value: 49, emphasis: false },
        { label: { en: "SDG targets not assessable for lack of data", fr: "Cibles ODD non évaluables faute de données" }, value: 35, emphasis: true }
      ],
      insight: {
        en: "This is the most important chart on the page, and the two bars must not be added together. Burundi reports that 49% of targets are improving and that 35% cannot be assessed at all — but the review never states whether the 49% is a share of all targets or only of those it managed to measure. If it is the latter, then the encouraging headline rests on a base that excludes a third of the agenda. Burundi is unusually candid about this; the honest reading is that the country's most reliable finding is the size of its own blind spot.",
        fr: "C'est le graphique le plus important de cette page, et les deux barres ne doivent pas être additionnées. Le Burundi indique que 49 % des cibles s'améliorent et que 35 % ne sont pas évaluables — mais la revue ne précise jamais si ces 49 % se rapportent à l'ensemble des cibles ou aux seules cibles qu'elle est parvenue à mesurer. Dans la seconde hypothèse, un titre encourageant repose sur une base qui exclut un tiers de l'agenda. Le Burundi fait preuve d'une franchise rare sur ce point : la lecture honnête est que son résultat le mieux établi est l'étendue même de son angle mort."
      },
      source: "VNR 2026 · Key Messages" },

    { id: "elec_two_numbers", type: "gap", sdg: 7,
      title: { en: "One indicator, two irreconcilable numbers: electricity access",
               fr: "Un indicateur, deux chiffres irréconciliables : l'accès à l'électricité" },
      unit: "%",
      items: [
        { label: { en: "National figure, VNR 2026 (2025)", fr: "Chiffre national, RNV 2026 (2025)" }, value: 25.9, emphasis: false },
        { label: { en: "World Bank SDG 7.1.1 dataset (2023)", fr: "Série ODD 7.1.1 de la Banque mondiale (2023)" }, value: 11.6, emphasis: true }
      ],
      insight: {
        en: "Burundi reports electricity access at 25.9%. The World Bank's SDG 7.1.1 electrification dataset — the series used for international comparison — records 11.6% for 2023, up from 10.3% in 2022. A jump from 11.6% to 25.9% in two years is not physically plausible, so the two figures are almost certainly measuring different things, and neither source says which. Rather than pick a winner, both are shown: this gap is precisely the kind of statistical weakness the review itself identifies under SDG 17.",
        fr: "Le Burundi déclare un accès à l'électricité de 25,9 %. La série d'électrification ODD 7.1.1 de la Banque mondiale — celle qui sert aux comparaisons internationales — enregistre 11,6 % en 2023, contre 10,3 % en 2022. Un passage de 11,6 % à 25,9 % en deux ans n'est pas physiquement plausible : les deux chiffres mesurent presque certainement des réalités différentes, et aucune des deux sources ne dit lesquelles. Plutôt que de trancher, les deux sont présentés : cet écart illustre exactement la faiblesse statistique que la revue elle-même pointe au titre de l'ODD 17."
      },
      source: "VNR 2026 · World Bank SDG 7.1.1 electrification dataset" },

    { id: "water_gap", type: "gap", sdg: 6,
      title: { en: "Access to an improved water source, urban vs. rural, 2024",
               fr: "Accès à une source d'eau améliorée, urbain et rural, 2024" },
      unit: "%",
      items: [
        { label: { en: "Urban", fr: "Urbain" }, value: 97.4, emphasis: false },
        { label: { en: "National", fr: "National" }, value: 86.3, emphasis: false },
        { label: { en: "Rural", fr: "Rural" }, value: 84.4, emphasis: true }
      ],
      insight: {
        en: "All three figures measure access to an improved water source — not the stricter \"basic drinking water service\", which additionally requires a round trip of under 30 minutes and which stands far lower, at roughly 62% nationally. Read with that label attached, the picture is a near-universal urban network and a rural figure that has drifted down from its 2020 peak of 85.6%. Rural water is where the remaining gain lies, and the gap is one of distance, not of infrastructure alone.",
        fr: "Ces trois chiffres mesurent l'accès à une source d'eau améliorée — et non le « service d'eau potable de base », plus exigeant, qui impose en outre un trajet aller-retour de moins de 30 minutes et se situe bien plus bas, autour de 62 % au niveau national. Lue avec cette étiquette, l'image est celle d'un réseau urbain quasi universel et d'un taux rural qui a reflué depuis son pic de 85,6 % en 2020. C'est en milieu rural que se trouve la marge de progrès restante, et l'écart tient à la distance, non aux seules infrastructures."
      },
      source: "VNR 2026 · WHO/UNICEF Joint Monitoring Programme 2024 · SDG indicator 6.1.1" },

    { id: "pillars_4p", type: "bars", sdg: 17,
      title: { en: "Share of measured targets improving, by \"4P\" pillar",
               fr: "Part des cibles mesurées en amélioration, par pilier « 4P »" },
      unit: "%",
      items: [
        { label: { en: "Peace & Partnerships", fr: "Paix et partenariats" }, value: 70 },
        { label: { en: "Prosperity", fr: "Prospérité" }, value: 58.3 },
        { label: { en: "Population", fr: "Population" }, value: 51.5 },
        { label: { en: "Planet", fr: "Planète" }, value: 21.4 }
      ],
      insight: {
        en: "Burundi groups all 17 goals under four pillars — Population, Prosperity, Planet, Peace & Partnerships — rather than running a separate SDG tracker. Governance and partnerships are the strongest performer at 70%; the environment is the weakest by a wide margin at 21.4%. That ordering matches the factsheet's own wording, which credits \"significant progress in governance, peace and partnerships\" while conceding that the environmental pillar still has \"room to strengthen the data and climate resilience\". The Planet figure should be read with care: a low score and a thin evidence base are hard to tell apart.",
        fr: "Le Burundi regroupe les 17 objectifs sous quatre piliers — Population, Prospérité, Planète, Paix et partenariats — plutôt que de tenir un dispositif de suivi distinct des ODD. La gouvernance et les partenariats affichent la meilleure performance, à 70 % ; l'environnement est de loin le plus faible, à 21,4 %. Ce classement recoupe le libellé même de la fiche, qui salue des « progrès significatifs en gouvernance, paix et partenariats » tout en admettant que le pilier environnemental conserve « des marges pour renforcer les données et la résilience climatique ». Le score du pilier Planète appelle la prudence : un mauvais résultat et une base statistique lacunaire sont difficiles à distinguer."
      },
      source: "VNR 2026 · \"4P\" monitoring framework (self-assessed)" },

    { id: "revenue", type: "line", sdg: 17,
      title: { en: "Public revenue, % of GDP", fr: "Recettes publiques, en % du PIB" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "total", label: { en: "Total public revenue", fr: "Recettes publiques totales" },
          points: [{ x: "2015", y: 13.4 }, { x: "2024", y: 17.7 }] },
        { key: "internal", label: { en: "Internally-raised revenue", fr: "Recettes levées en interne" },
          points: [{ x: "2016", y: 7.8 }, { x: "2024", y: 10.6 }] }
      ],
      insight: {
        en: "Only the published end-points are plotted. The old dashboard filled the years between them with invented waypoints — \"~15% (trajectory)\" — that were never measured; they have been removed. What survives is solid and still tells the story: total public revenue rose 4.3 points of GDP in a decade, driven by the digitalisation of tax and customs collection, while the narrower internally-raised revenue climbed from 7.8% to 10.6%. Both remain below the level Burundi needs to finance its own plan.",
        fr: "Seuls les points publiés sont tracés. L'ancien tableau de bord comblait les années intermédiaires par des jalons inventés — « ~15 % (trajectoire) » — qui n'ont jamais été mesurés ; ils ont été supprimés. Ce qui subsiste est solide et raconte l'essentiel : les recettes publiques totales ont progressé de 4,3 points de PIB en une décennie, portées par la numérisation de la collecte fiscale et douanière, tandis que les recettes levées en interne, plus étroites, sont passées de 7,8 % à 10,6 %. Les unes comme les autres restent en deçà du niveau nécessaire pour financer le plan national."
      },
      source: "VNR 2026 · SDG indicator 17.1.1" }
  ],

  instruments: [
    { name: { en: "National Energy Compact", fr: "Compact national sur l'énergie" },
      kicker: { en: "US$3.49bn · 2024", fr: "3,49 Md$ · 2024" },
      text: {
        en: "Established under the revised 2024 electricity law, which opens the sector to private participation. It mobilises US$3.49 billion in public and private investment and targets 70% electricity access by 2030 (30% by 2027) and 40% of households using clean cooking. It is anchored on the Kabu 16, Ruzibazi and Jiji-Murembwe hydropower plants and the Mubuga solar plant, alongside grid extension, off-grid rural electrification and biogas.",
        fr: "Établi en vertu de la loi révisée de 2024 sur l'électricité, qui ouvre le secteur à la participation privée. Il mobilise 3,49 milliards de dollars d'investissements publics et privés et vise 70 % d'accès à l'électricité d'ici 2030 (30 % d'ici 2027) et 40 % des ménages recourant à la cuisson propre. Il s'appuie sur les centrales hydroélectriques de Kabu 16, Ruzibazi et Jiji-Murembwe et sur la centrale solaire de Mubuga, en parallèle de l'extension du réseau, de l'électrification rurale hors réseau et du biogaz."
      },
      source: "VNR 2026" },
    { name: { en: "Youth and women's investment banks", fr: "Banques d'investissement des jeunes et des femmes" },
      kicker: { en: "BIJE · BIDF · FIGA", fr: "BIJE · BIDF · FIGA" },
      text: {
        en: "Three dedicated public financial institutions: the Youth Investment Bank (BIJE), the Women's Investment and Development Bank (BIDF), and the Guarantee and Support Fund (FIGA), which provides credit guarantees to youth- and women-led businesses. The factsheet places them at the centre of SDG 5, casting women, young people and children as agents of change rather than beneficiaries.",
        fr: "Trois institutions financières publiques dédiées : la Banque d'investissement pour la jeunesse (BIJE), la Banque d'investissement et de développement des femmes (BIDF) et le Fonds d'impulsion, de garantie et d'accompagnement (FIGA), qui apporte des garanties de crédit aux entreprises portées par les jeunes et les femmes. La fiche les place au cœur de l'ODD 5, faisant des femmes, des jeunes et des enfants des acteurs du changement plutôt que des bénéficiaires."
      },
      source: "VNR 2026" },
    { name: { en: "Integrated National Financing Framework", fr: "Cadre national intégré de financement" },
      kicker: { en: "US$1.507bn tracked to 2035", fr: "1,507 Md$ suivis jusqu'en 2035" },
      text: {
        en: "Burundi's single plan for financing its development, with a roadmap adopted in 2024 and aligned to the 2025 Sevilla Commitment on financing for development. It tracks US$1,507,171,475 in commitments from bilateral and multilateral development partners through 2035, and is designed to shift the country from unpredictable external aid towards diversified, structured and explicitly \"deeply green\" financing.",
        fr: "Le plan unique du Burundi pour le financement de son développement, doté d'une feuille de route adoptée en 2024 et aligné sur l'Engagement de Séville 2025 sur le financement du développement. Il suit 1 507 171 475 dollars d'engagements de partenaires de développement bilatéraux et multilatéraux jusqu'en 2035 et vise à faire passer le pays d'une aide extérieure imprévisible à un financement diversifié, structuré et explicitement « profondément vert »."
      },
      source: "VNR 2026" },
    { name: { en: "National Development Plan 2018–2027 & Vision Burundi 2040–2060", fr: "Plan national de développement 2018-2027 et Vision Burundi 2040-2060" },
      kicker: { en: "one plan, four pillars", fr: "un plan, quatre piliers" },
      text: {
        en: "Burundi runs no separate tracker for the SDGs and the African Union's Agenda 2063. Both are embedded directly in national planning documents, and all 17 goals are grouped under a \"4P\" monitoring framework — Population, Prosperity, Planet, Peace & Partnerships. Vision Burundi 2040–2060 sets the long horizon: emerging economy by 2040, developed country by 2060.",
        fr: "Le Burundi ne tient pas de dispositif de suivi distinct pour les ODD et l'Agenda 2063 de l'Union africaine. Les deux sont directement intégrés dans les documents de planification nationaux, et les 17 objectifs sont regroupés dans un cadre de suivi « 4P » — Population, Prospérité, Planète, Paix et partenariats. La Vision Burundi 2040-2060 fixe l'horizon long : économie émergente en 2040, pays développé en 2060."
      },
      source: "VNR 2026" },
    { name: { en: "Public services digitalisation master plan 2023–2027", fr: "Plan directeur de numérisation des services publics 2023-2027" },
      kicker: { en: "the statistical fix", fr: "la réponse au déficit statistique" },
      text: {
        en: "COMGOV, the shared government network, links more than 100 public institutions; BERNET, the national education and research network, connects 14 universities. Services already live include a digitised civil register, hospital records systems and online municipal taxation and business registration. This is the most direct answer Burundi has to its own finding that 35% of targets cannot be assessed — although the review itself flags that public-sector ICT staffing fell 4.4% a year between 2018 and 2022.",
        fr: "COMGOV, le réseau administratif partagé du gouvernement, relie plus de 100 institutions publiques ; BERNET, le réseau national d'éducation et de recherche, connecte 14 universités. Parmi les services déjà opérationnels figurent un registre civil numérisé, des systèmes de dossiers hospitaliers, ainsi que l'imposition communale et l'enregistrement des entreprises en ligne. C'est la réponse la plus directe du Burundi à son propre constat de 35 % de cibles non évaluables — même si la revue signale elle-même que les effectifs TIC du secteur public ont reculé de 4,4 % par an entre 2018 et 2022."
      },
      source: "VNR 2026" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        en: "The old dashboard's \"2026 priority goals\" tab presented Burundi's review as covering SDGs 6, 7, 9, 11 and 17. Burundi's factsheet names six entirely different themes: SDGs 3, 4, 5, 13, 16 and 17.",
        fr: "L'onglet « Objectifs prioritaires 2026 » de l'ancien tableau de bord présentait la revue du Burundi comme portant sur les ODD 6, 7, 9, 11 et 17. La fiche du Burundi retient six thèmes tout à fait différents : les ODD 3, 4, 5, 13, 16 et 17."
      },
      resolution: {
        en: "SDGs 6/7/9/11/17 are the goals under in-depth review at HLPF 2026 — they are not Burundi's own themes, and the dashboard silently substituted one for the other. The six factsheet themes are now restored as the country's themes; energy, water and revenue data are still shown, but tagged to their own goals rather than presented as Burundi's priorities.",
        fr: "Les ODD 6, 7, 9, 11 et 17 sont les objectifs faisant l'objet d'un examen approfondi au FPHN 2026 : ce ne sont pas les thèmes propres au Burundi, et le tableau de bord substituait les uns aux autres sans le dire. Les six thèmes de la fiche sont rétablis comme thèmes du pays ; les données sur l'énergie, l'eau et les recettes restent affichées, mais rattachées à leurs objectifs respectifs plutôt que présentées comme les priorités du Burundi."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard headlined electricity access at 25.9% (2025), showed 9.3% for 2017, and asserted in passing that the UN SDG Database records 20.1% for 2024.",
        fr: "Le tableau de bord affichait un accès à l'électricité de 25,9 % (2025) et de 9,3 % en 2017, tout en affirmant au passage que la Base de données ODD des Nations Unies enregistre 20,1 % pour 2024."
      },
      resolution: {
        en: "The World Bank's SDG 7.1.1 electrification dataset puts Burundi at 11.6% in 2023 and 10.3% in 2022 — nowhere near either figure, and a rise from 11.6% to 25.9% within two years is not credible. The 20.1% claim could not be corroborated in any source and has been dropped. The national figure is retained but explicitly labelled as self-reported and charted directly against the World Bank series, so the reader sees the disagreement instead of inheriting it.",
        fr: "La série d'électrification ODD 7.1.1 de la Banque mondiale situe le Burundi à 11,6 % en 2023 et 10,3 % en 2022 — loin de l'un comme de l'autre chiffre, et une progression de 11,6 % à 25,9 % en deux ans n'est pas crédible. L'affirmation des 20,1 % n'a pu être corroborée par aucune source et a été retirée. Le chiffre national est conservé mais explicitement présenté comme auto-déclaré et confronté graphiquement à la série de la Banque mondiale, afin que le lecteur voie le désaccord au lieu d'en hériter."
      } },
    { severity: "mislabel",
      issue: {
        en: "Chart legends did not match the data underneath them, throughout. The debt-service chart carried the legend \"Croissance du PIB (%) / Inflation (%)\"; the all-season roads chart carried \"Recettes fiscales (% du PIB)\"; the informal-settlements figure carried \"Part recettes propres (%)\"; the electricity chart declared a second series, \"Population urbaine (%)\", that does not exist in its data.",
        fr: "Les légendes des graphiques ne correspondaient pas aux données qu'elles surmontaient, et ce de bout en bout. Le graphique du service de la dette portait la légende « Croissance du PIB (%) / Inflation (%) » ; celui des routes en état toutes saisons, « Recettes fiscales (% du PIB) » ; le chiffre des établissements informels, « Part recettes propres (%) » ; le graphique de l'électricité annonçait une seconde série, « Population urbaine (%) », absente de ses données."
      },
      resolution: {
        en: "These are residues of the single French template from which all the country dashboards were cloned. Every label is now generated from this bilingual data layer, so a chart cannot render a legend that does not belong to its own series.",
        fr: "Ce sont des résidus du gabarit français unique à partir duquel tous les tableaux de bord pays ont été clonés. Chaque étiquette est désormais générée depuis cette couche de données bilingue : un graphique ne peut plus afficher une légende qui n'appartient pas à ses propres séries."
      } },
    { severity: "contradiction",
      issue: {
        en: "The same debt-service chart appeared twice, under the same title, with two different — and both wrong — sets of legends: \"Croissance du PIB (%) / Inflation (%)\" on the overview tab, and \"Recettes internes (%) / Financement externe (%)\" on the debt tab.",
        fr: "Le même graphique du service de la dette apparaissait deux fois, sous le même titre, avec deux jeux de légendes différents — et faux tous les deux : « Croissance du PIB (%) / Inflation (%) » dans l'onglet Aperçu, et « Recettes internes (%) / Financement externe (%) » dans l'onglet Dette."
      },
      resolution: {
        en: "The underlying series was Burundi's external and domestic debt service, of which only one point is actually published: external debt service at 10.9% of exports in 2023 (SDG indicator 17.4.1). A two-line chart cannot be built from one point, so the chart has been removed entirely and the single published figure is not paraded as a trend.",
        fr: "La série sous-jacente correspondait au service de la dette extérieure et intérieure du Burundi, dont un seul point est réellement publié : le service de la dette extérieure à 10,9 % des exportations en 2023 (indicateur ODD 17.4.1). On ne construit pas un graphique à deux courbes à partir d'un seul point : le graphique a donc été entièrement supprimé, et le chiffre publié n'est pas exhibé comme une tendance."
      } },
    { severity: "unverified",
      issue: {
        en: "Several plotted points were labelled, in the dashboard's own tooltips, as \"(VNR trajectory)\", \"(trajectory)\" or \"(trajectoire indicative)\": electricity at ~12% in 2020 and ~18% in 2022, revenue at ~15% in 2020, and the entire 2017 starting position of both debt-service lines (~11% internal, ~5% external).",
        fr: "Plusieurs points tracés étaient qualifiés, dans les propres infobulles du tableau de bord, de « (VNR trajectory) », « (trajectory) » ou « (trajectoire indicative) » : l'électricité à ~12 % en 2020 et ~18 % en 2022, les recettes à ~15 % en 2020, ainsi que toute la position de départ 2017 des deux courbes du service de la dette (~11 % en interne, ~5 % à l'externe)."
      },
      resolution: {
        en: "These were not measurements; they were shapes drawn between published end-points and then given tooltips, which lends invented figures the appearance of data. All of them have been deleted. The charts here plot published values only, even where that leaves a line with just two points.",
        fr: "Il ne s'agissait pas de mesures mais de formes tracées entre des points publiés, puis dotées d'infobulles — ce qui donne à des chiffres inventés l'apparence de données. Tous ont été supprimés. Les graphiques présentés ici ne tracent que des valeurs publiées, quitte à ne laisser qu'une courbe à deux points."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard reported that the all-season road network fell from ~78% in 2020–21 to 32.2% in 2023, and made this \"the report's flagship infrastructure priority\".",
        fr: "Le tableau de bord indiquait que le réseau routier en état toutes saisons était passé de ~78 % en 2020-2021 à 32,2 % en 2023, et en faisait « la priorité infrastructurelle phare du rapport »."
      },
      resolution: {
        en: "A 46-point collapse in two years cannot describe a single indicator measured consistently; the two numbers are almost certainly different measures (the 78% is flagged \"~\" in the source and is not traceable). Neither could be verified, so the claim has been dropped rather than presented as a dramatic finding.",
        fr: "Un effondrement de 46 points en deux ans ne peut pas décrire un indicateur unique mesuré de façon cohérente ; les deux chiffres relèvent presque certainement de mesures différentes (le 78 % est signalé « ~ » dans la source et n'est pas traçable). Aucun n'a pu être vérifié : l'affirmation a donc été retirée plutôt que présentée comme un constat spectaculaire."
      } },
    { severity: "mislabel",
      issue: {
        en: "Water access was reported as 86.3% under the heading \"Eau améliorée\", and used interchangeably with drinking-water service coverage.",
        fr: "L'accès à l'eau était présenté à 86,3 % sous l'intitulé « Eau améliorée », et employé indifféremment avec la couverture en service d'eau potable."
      },
      resolution: {
        en: "86.3% is access to an improved water source. The stricter SDG measure — a basic drinking water service, which also requires a round trip under 30 minutes — is far lower, around 62% nationally per the World Bank/JMP. Both are correct; they are not the same indicator. Every water figure on this page now states which definition it uses.",
        fr: "86,3 % correspond à l'accès à une source d'eau améliorée. La mesure ODD plus stricte — le service d'eau potable de base, qui exige en outre un trajet aller-retour de moins de 30 minutes — est bien plus basse, autour de 62 % au niveau national selon la Banque mondiale et le JMP. Les deux sont exacts ; ce ne sont pas le même indicateur. Chaque chiffre relatif à l'eau précise désormais la définition retenue."
      } },
    { severity: "unverified",
      issue: {
        en: "A cluster of headline figures could not be traced to the factsheet or to any citable source: sanitation at 12.9%, informal settlements at 34.3% of the urban population, mobile money at 62.1%, a Corruption Perceptions Index score given as the range \"17–20\", and fish stocks of 24,400–27,200 tonnes plotted under the legend \"Priorités d'investissement (rang)\".",
        fr: "Un ensemble de chiffres de tête n'a pu être rattaché ni à la fiche ni à une source citable : l'assainissement à 12,9 %, les établissements informels à 34,3 % de la population urbaine, le mobile money à 62,1 %, un score à l'Indice de perception de la corruption donné sous forme de fourchette « 17-20 », et des stocks halieutiques de 24 400 à 27 200 tonnes tracés sous la légende « Priorités d'investissement (rang) »."
      },
      resolution: {
        en: "All have been dropped. Burundi's own review says 35% of SDG targets cannot be assessed for lack of data; filling that hole with untraceable figures would contradict the review's central message. Fewer solid numbers, honestly sourced, is the correct response to a data-poor factsheet.",
        fr: "Tous ont été retirés. La revue du Burundi indique elle-même que 35 % des cibles ODD ne sont pas évaluables faute de données ; combler ce vide par des chiffres non traçables contredirait le message central du rapport. Face à une fiche pauvre en données, la réponse juste consiste à retenir moins de chiffres, mais solides et sourcés."
      } },
    { severity: "corrected",
      issue: {
        en: "The factsheet reports \"49% of SDG targets improving since 2015\" while the dashboard rendered the same figure as \"49% of measured targets improving\" — a materially different claim, given that 35% of targets are not measurable at all.",
        fr: "La fiche indique « 49 % des cibles ODD en amélioration depuis 2015 » tandis que le tableau de bord rendait le même chiffre par « 49 % des cibles mesurées en amélioration » — une affirmation sensiblement différente, dès lors que 35 % des cibles ne sont pas mesurables."
      },
      resolution: {
        en: "The two wordings imply two different denominators and the VNR does not settle which is right, so the 49% and the 35% cannot simply be added or netted against each other. Both are reported at face value, with the ambiguity stated on the chart rather than resolved by assumption.",
        fr: "Les deux formulations impliquent deux dénominateurs distincts et le RNV ne tranche pas : les 49 % et les 35 % ne peuvent donc être ni additionnés ni compensés. Les deux sont rapportés tels quels, l'ambiguïté étant signalée sur le graphique plutôt que levée par hypothèse."
      } }
  ]
});
