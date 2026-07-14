/* DR Congo — VNR 2020 · 2023 → 2026 (third review). Source factsheet authored in FRENCH:
   the `fr` strings are the source wording, `en` is the translation.
   Fact-checked against factsheets.pdf p.14, the old "DRC Dashboard", the HLPF VNR register,
   the World Bank / AfDB macro series, DRC's electricity regulator (ARE) and UNICEF DRC.
   The old DRC dashboard was a clone of Burundi's and carried Burundi's numbers throughout;
   see `factcheck` at the bottom. Where a figure could not be verified it was dropped. */
window.VNR.register({
  slug: "drc",
  iso: "CD",
  name: { en: "DR Congo", fr: "RD Congo" },
  region: "central",
  vnrPrev: 2023,
  vnrCycles: [2020, 2023, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/drc.pdf",

  tagline: {
    en: "Implementing the SDGs in spite of the crises, with a focus on energy, water and partnerships.",
    fr: "La mise en œuvre des ODD malgré les crises, avec un accent sur l'énergie, l'eau et les partenariats."
  },

  themes: [
    { sdg: 6,
      title: { en: "Water Sector Reform", fr: "Réforme du secteur de l'eau" },
      text: {
        en: "Progress on drinking water, with an institutional framework being finalised to extend access to services.",
        fr: "Des avancées dans l'eau potable, avec un cadre institutionnel en cours de finalisation pour étendre l'accès aux services."
      } },
    { sdg: 7,
      title: { en: "The Electricity Sector Takes Off", fr: "Essor du secteur électrique" },
      text: {
        en: "Thanks to liberalisation, installed capacity has grown by 20% since 2020; with 3,282 MW under construction, the country will double its capacity by 2030.",
        fr: "Grâce à la libéralisation, la puissance installée a crû de 20 % depuis 2020 ; 3 282 MW en construction, le pays doublera sa capacité d'ici 2030."
      } },
    { sdg: 9,
      title: { en: "Infrastructure and Innovation", fr: "Infrastructures et innovation" },
      text: {
        en: "DR Congo is investing in industry, infrastructure and innovation as levers of economic transformation.",
        fr: "La RDC investit dans l'industrie, les infrastructures et l'innovation comme leviers de transformation économique."
      } },
    { sdg: 11,
      title: { en: "Sustainable Cities", fr: "Villes durables" },
      text: {
        en: "The 2026 VNR places the emphasis on sustainable cities and communities, despite the pressures of multiple, interlocking crises.",
        fr: "Le VNR 2026 met l'accent sur des villes et communautés durables, malgré les pressions des crises multiples et imbriquées."
      } },
    { sdg: 16,
      title: { en: "Reform in the Face of Crisis", fr: "Réformes face aux crises" },
      text: {
        en: "Despite the resurgence of conflict in the east, reforms have improved well-being and reduced inequality.",
        fr: "Malgré la résurgence des conflits à l'est, des réformes ont amélioré le bien-être et réduit les inégalités."
      } },
    { sdg: 17,
      title: { en: "Partnerships Under Strain", fr: "Partenariats sous tension" },
      text: {
        en: "In an unprecedented global crisis in official development assistance, DR Congo is strengthening its partnerships for the SDGs.",
        fr: "Dans une crise mondiale sans précédent de l'aide publique au développement, la RDC renforce les partenariats pour les ODD."
      } }
  ],

  continuity: [
    { prev: { en: "Social reforms and post-conflict reconstruction", fr: "Réformes sociales et reconstruction post-conflit" },
      status: "sustained",
      now: { en: "VNR 2026 — all 17 SDGs, focus on 6/7/9/11/17", fr: "VNR 2026 — 17 ODD, focus 6/7/9/11/17" } },
    { prev: { en: "Alignment of the National Strategic Development Plan (PNSD) & sectoral strategies", fr: "Alignement du Plan National Stratégique de Développement (PNSD) & stratégies sectorielles" },
      status: "evolved",
      now: { en: "Installed capacity +20% since 2020", fr: "Puissance installée +20 % depuis 2020" } },
    { prev: { en: "Subnational localisation of the SDGs", fr: "Localisation infranationale des ODD" },
      status: "evolved",
      now: { en: "Institutional reform of the water sector", fr: "Réforme institutionnelle de l'eau" } },
    { prev: { en: "Indicator framework & data", fr: "Cadre d'indicateurs & données" },
      status: "sustained",
      now: { en: "Resilience and pro-well-being reforms", fr: "Résilience et réformes pro-bien-être" } },
    { prev: { en: "National public perception survey on SDG implementation", fr: "Enquête nationale de perception de la population sur la mise en œuvre des ODD" },
      status: "evolved",
      now: { en: "Partnerships amid the global development aid crisis", fr: "Partenariats sous crise mondiale de l'Aide pour le Développement" } }
  ],

  concepts: {
    caption: {
      en: "DR Congo is advancing on energy, water and infrastructure despite the conflict in the east.",
      fr: "La RDC progresse sur l'énergie, l'eau et les infrastructures malgré les conflits à l'est."
    },
    items: [
      { label: { en: "well-being & inequality", fr: "bien-être & inégalités" }, value: 4 },
      { label: { en: "growth & the economy", fr: "croissance & économie" }, value: 4 },
      { label: { en: "water & sanitation", fr: "eau & assainissement" }, value: 4 },
      { label: { en: "governance", fr: "gouvernance" }, value: 4 },
      { label: { en: "sustainable cities", fr: "villes durables" }, value: 4 },
      { label: { en: "energy & electricity", fr: "énergie & électricité" }, value: 4 },
      { label: { en: "financing", fr: "financement" }, value: 3 },
      { label: { en: "infrastructure", fr: "infrastructure" }, value: 3 },
      { label: { en: "partnerships", fr: "partenariats" }, value: 2 }
    ]
  },

  indicators: [
    { id: "cap_growth", sdg: 7,
      label: { en: "Growth in installed electricity capacity since 2020", fr: "Croissance de la puissance électrique installée depuis 2020" },
      value: 20, unit: "%",
      note: { en: "Attributed by the review to the liberalisation of the sector, which brought in private investors. This is the flagship achievement of the 2026 cycle.",
              fr: "Attribuée par la revue à la libéralisation du secteur, qui a fait entrer des investisseurs privés. C'est la réalisation phare du cycle 2026." },
      source: "VNR 2026" },
    { id: "under_construction", sdg: 7,
      label: { en: "New generation capacity under construction", fr: "Nouvelle capacité de production en construction" },
      value: 3282, unit: "MW",
      note: { en: "Set against an installed base of 2,980.7 MW recorded by the electricity regulator (ARE) for 2022, this pipeline makes the claim of doubling capacity by 2030 arithmetically coherent.",
              fr: "Rapporté à une base installée de 2 980,7 MW relevée par l'Autorité de régulation de l'électricité (ARE) pour 2022, ce portefeuille rend arithmétiquement cohérente l'annonce d'un doublement de la capacité d'ici 2030." },
      source: "VNR 2026 · ARE Annual Report 2022" },
    { id: "hydro_potential", sdg: 7,
      label: { en: "Technical hydropower potential", fr: "Potentiel hydroélectrique technique" },
      value: 100000, unit: "MW",
      note: { en: "The second-largest in the world, concentrated on the Congo River at Inga. It is the gap between this potential and actual access that defines DR Congo's energy story.",
              fr: "Le deuxième au monde, concentré sur le fleuve Congo à Inga. C'est l'écart entre ce potentiel et l'accès réel qui définit la question énergétique congolaise." },
      source: "VNR 2026 · World Bank / ESMAP" },
    { id: "elec_access", sdg: 7,
      label: { en: "Electricity access, national (approximate)", fr: "Accès à l'électricité, national (approximatif)" },
      value: 20, unit: "%",
      note: { en: "Reported as \"about 20%\" and carried here as an approximation, not a measurement: roughly four Congolese in five have no electricity. Rural access is close to nil.",
              fr: "Donné comme « environ 20 % » et repris ici comme un ordre de grandeur, non comme une mesure : environ quatre Congolais sur cinq n'ont pas l'électricité. L'accès rural est proche de zéro." },
      source: "VNR 2026 · World Bank / ESMAP Tracking SDG 7" },
    { id: "gdp_2023", sdg: 8,
      label: { en: "Real GDP growth, 2023", fr: "Croissance du PIB réel, 2023" },
      value: 7.8, unit: "%",
      note: { en: "Corrected: the old dashboard reported 6.2%. The World Bank records 7.8% for 2023 and 8.5% for 2022, driven by mining. Growth held up through the conflict and the aid contraction.",
              fr: "Corrigé : l'ancien tableau de bord indiquait 6,2 %. La Banque mondiale retient 7,8 % pour 2023 et 8,5 % pour 2022, portés par les mines. La croissance s'est maintenue malgré le conflit et la contraction de l'aide." },
      source: "World Bank / AfDB Economic Outlook" },
    { id: "water_improved", sdg: 6,
      label: { en: "Population using an improved water source", fr: "Population utilisant une source d'eau améliorée" },
      value: 52, unit: "%",
      note: { en: "Improved sanitation reaches 29%. In a country holding roughly 30% of Africa's freshwater runoff, the binding constraint is governance and infrastructure, not the resource.",
              fr: "L'assainissement amélioré atteint 29 %. Dans un pays qui concentre près de 30 % du ruissellement d'eau douce africain, la contrainte est la gouvernance et l'infrastructure, non la ressource." },
      source: "UNICEF DR Congo · WHO/UNICEF JMP" }
  ],

  charts: [
    { id: "capacity", type: "gap", sdg: 7,
      title: { en: "Installed capacity and the construction pipeline, MW",
               fr: "Puissance installée et portefeuille en construction, en MW" },
      unit: "MW",
      items: [
        { label: { en: "Installed capacity, 2022 (ARE)", fr: "Puissance installée, 2022 (ARE)" }, value: 2980.7, emphasis: false },
        { label: { en: "Capacity under construction", fr: "Capacité en construction" }, value: 3282, emphasis: true }
      ],
      insight: {
        en: "The single claim in DR Congo's factsheet that can be independently checked, and it holds. The electricity regulator recorded 2,980.7 MW installed in 2022; the review reports 3,282 MW under construction. The pipeline is slightly larger than everything built in the country's history, which is exactly what \"doubling capacity by 2030\" requires — so the target is coherent rather than rhetorical. What the chart cannot show is delivery: capacity under construction is not capacity generating, and roughly 80% of the population still has no electricity.",
        fr: "C'est la seule affirmation de la fiche congolaise qui puisse être vérifiée de façon indépendante, et elle tient. Le régulateur de l'électricité a relevé 2 980,7 MW installés en 2022 ; la revue fait état de 3 282 MW en construction. Le portefeuille dépasse légèrement tout ce qui a été construit dans l'histoire du pays, ce qu'exige précisément un « doublement de la capacité d'ici 2030 » : l'objectif est donc cohérent et non rhétorique. Ce que le graphique ne montre pas, c'est la livraison : une capacité en construction n'est pas une capacité qui produit, et près de 80 % de la population reste sans électricité."
      },
      source: "VNR 2026 · ARE (electricity regulator) Annual Report 2022" },

    { id: "gdp", type: "line", sdg: 8,
      title: { en: "Real GDP growth, % per year", fr: "Croissance du PIB réel, en % par an" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "gdp", label: { en: "Real GDP growth", fr: "Croissance du PIB réel" },
          points: [{ x: "2022", y: 8.5 }, { x: "2023", y: 7.8 }, { x: "2024", y: 6.1 }] }
      ],
      insight: {
        en: "The old dashboard reported this series at 5.9% and 6.2% — understating it by more than two points. The verified figures are stronger, and also more ambiguous: growth of 8.5% and 7.8% was carried by mining, above all cobalt, in which DR Congo holds the world's largest reserves. That is an enclave, not a broad-based economy. The review's own claim that reforms \"reduced inequality\" during these years is not something a growth line can support or refute, and no data in the factsheet tests it.",
        fr: "L'ancien tableau de bord donnait cette série à 5,9 % et 6,2 % — la sous-estimant de plus de deux points. Les chiffres vérifiés sont plus élevés, mais aussi plus ambigus : une croissance de 8,5 % puis 7,8 % a été portée par les mines, et d'abord par le cobalt, dont la RDC détient les premières réserves mondiales. C'est une enclave, non une économie à base large. L'affirmation de la revue selon laquelle les réformes auraient « réduit les inégalités » durant ces années n'est ni confirmée ni infirmée par une courbe de croissance, et aucune donnée de la fiche ne permet de la tester."
      },
      source: "World Bank · AfDB Economic Outlook (SDG indicator 8.1.1)" },

    { id: "wash", type: "gap", sdg: 6,
      title: { en: "Water and sanitation coverage — improved facilities",
               fr: "Couverture en eau et assainissement — installations améliorées" },
      unit: "%",
      items: [
        { label: { en: "Improved water source", fr: "Source d'eau améliorée" }, value: 52, emphasis: false },
        { label: { en: "Improved sanitation", fr: "Assainissement amélioré" }, value: 29, emphasis: true }
      ],
      insight: {
        en: "Both bars use the same definition — improved facilities — so they can honestly be compared, which was not true of the old dashboard's figures. Roughly half the population has an improved water source and fewer than a third have improved sanitation, in the country that carries about 30% of Africa's freshwater runoff. Water is not scarce in DR Congo; delivery is. That is why the review's flagship on SDG 6 is an institutional reform rather than an investment number — and why the sanitation bar, not the water bar, is the harder problem.",
        fr: "Les deux barres reposent sur la même définition — les installations améliorées — et peuvent donc être honnêtement comparées, ce qui n'était pas le cas des chiffres de l'ancien tableau de bord. Environ la moitié de la population dispose d'une source d'eau améliorée et moins d'un tiers d'un assainissement amélioré, dans le pays qui concentre près de 30 % du ruissellement d'eau douce africain. L'eau n'est pas rare en RDC : c'est sa distribution qui l'est. D'où le fait que la mesure phare de la revue au titre de l'ODD 6 soit une réforme institutionnelle plutôt qu'un montant d'investissement — et que la barre de l'assainissement, et non celle de l'eau, désigne le problème le plus difficile."
      },
      source: "UNICEF DR Congo · WHO/UNICEF Joint Monitoring Programme (SDG indicators 6.1.1 & 6.2.1)" }
  ],

  instruments: [
    { name: { en: "Liberalisation of the electricity sector", fr: "Libéralisation du secteur électrique" },
      kicker: { en: "+20% capacity · 3,282 MW pipeline", fr: "+20 % de capacité · 3 282 MW en construction" },
      text: {
        en: "The flagship of the 2026 reporting cycle. Law 14/011 of 2014 ended the state monopoly, created the electricity regulator (ARE) and the rural electrification agency (ANSER), and opened generation and distribution to private capital. The review credits this with 20% growth in installed capacity since 2020 and 3,282 MW now under construction, largely hydro and solar on the Congo River. Private capital replacing public aid is explicitly presented as the model for the rest of the SDG financing agenda.",
        fr: "La réalisation phare du cycle 2026. La loi 14/011 de 2014 a mis fin au monopole d'État, créé l'Autorité de régulation de l'électricité (ARE) et l'Agence nationale de l'électrification (ANSER), et ouvert la production et la distribution aux capitaux privés. La revue lui attribue une croissance de 20 % de la puissance installée depuis 2020 et 3 282 MW aujourd'hui en construction, pour l'essentiel hydroélectriques et solaires sur le fleuve Congo. Le remplacement de l'aide publique par le capital privé est explicitement présenté comme le modèle à suivre pour le reste du financement des ODD."
      },
      source: "VNR 2026 · ARE" },
    { name: { en: "Institutional reform of the water sector", fr: "Réforme institutionnelle du secteur de l'eau" },
      kicker: { en: "framework being finalised", fr: "cadre en cours de finalisation" },
      text: {
        en: "The SDG 6 flagship is deliberately institutional rather than financial: an as-yet unfinished governance framework intended to extend water services across 26 provinces and hundreds of health zones, many of them conflict-affected or extremely remote. The review is candid that the framework is not yet complete, which is why this page reports no target figure for it.",
        fr: "La mesure phare de l'ODD 6 est délibérément institutionnelle et non financière : un cadre de gouvernance encore inachevé, destiné à étendre les services d'eau aux 26 provinces et à des centaines de zones de santé, dont beaucoup sont touchées par le conflit ou extrêmement éloignées. La revue reconnaît franchement que ce cadre n'est pas finalisé, raison pour laquelle aucune valeur cible ne lui est associée ici."
      },
      source: "VNR 2026" },
    { name: { en: "National Strategic Development Plan (PNSD)", fr: "Plan national stratégique de développement (PNSD)" },
      kicker: { en: "all 17 SDGs, one plan", fr: "les 17 ODD, un seul plan" },
      text: {
        en: "The PNSD embeds all 17 SDGs and the African Union's Agenda 2063 in national planning, with sectoral ministry plans aligned to it. The 2026 review reports against the full agenda while concentrating on five goals — 6, 7, 9, 11 and 17 — which are the goals under in-depth review at HLPF 2026.",
        fr: "Le PNSD intègre les 17 ODD et l'Agenda 2063 de l'Union africaine dans la planification nationale, les plans sectoriels des ministères lui étant alignés. La revue 2026 rend compte de l'ensemble de l'agenda tout en se concentrant sur cinq objectifs — 6, 7, 9, 11 et 17 — qui sont ceux faisant l'objet d'un examen approfondi au FPHN 2026."
      },
      source: "VNR 2026" },
    { name: { en: "Subnational SDG localisation", fr: "Localisation infranationale des ODD" },
      kicker: { en: "26 provinces", fr: "26 provinces" },
      text: {
        en: "Carried over from the 2023 VNR, which prioritised extending SDG implementation to the provinces and health zones. The work continues in 2026 through provincial development plans. In a territory larger than Western Europe, with conflict cutting off parts of the east, localisation is also the precondition for the national statistical system ever producing complete SDG data.",
        fr: "Héritée du RNV 2023, qui avait fait de l'extension de la mise en œuvre des ODD aux provinces et aux zones de santé une priorité. Le travail se poursuit en 2026 par les plans provinciaux de développement. Sur un territoire plus vaste que l'Europe occidentale, dont une partie de l'est est coupée par le conflit, la localisation est aussi la condition pour que le système statistique national produise un jour des données ODD complètes."
      },
      source: "VNR 2026 · VNR 2023" },
    { name: { en: "National public perception survey on SDG implementation", fr: "Enquête nationale de perception de la population sur la mise en œuvre des ODD" },
      kicker: { en: "citizens as a data source", fr: "les citoyens comme source de données" },
      text: {
        en: "Named on the factsheet as one of the five threads carried between review cycles. In a country where administrative statistics are thin and large areas are inaccessible, asking the population directly is not a supplement to official data — in places it is the only data. It is the mechanism behind the review's claim that reforms improved well-being and reduced inequality.",
        fr: "Citée dans la fiche comme l'un des cinq fils conducteurs entre les cycles de revue. Dans un pays où les statistiques administratives sont lacunaires et où de vastes zones sont inaccessibles, interroger directement la population n'est pas un complément aux données officielles : par endroits, c'est la seule donnée disponible. C'est le mécanisme qui sous-tend l'affirmation de la revue selon laquelle les réformes ont amélioré le bien-être et réduit les inégalités."
      },
      source: "VNR 2026 · VNR 2020" },
    { name: { en: "Strengthening partnerships under the aid crisis", fr: "Renforcement des partenariats sous la crise de l'aide" },
      kicker: { en: "SDG 17 under strain", fr: "l'ODD 17 sous tension" },
      text: {
        en: "The review's framing of SDG 17 is unusually blunt: DR Congo must strengthen its partnerships precisely as traditional donors withdraw, in what the factsheet calls an unprecedented global crisis in official development assistance. The proposed answers — South-South cooperation, blended finance, private-sector engagement, Congo Basin forest carbon — are named as directions rather than costed instruments, and this page does not attach numbers to them that the review does not provide.",
        fr: "La revue formule l'ODD 17 avec une franchise inhabituelle : la RDC doit renforcer ses partenariats au moment précis où les bailleurs traditionnels se retirent, dans ce que la fiche qualifie de crise mondiale sans précédent de l'aide publique au développement. Les réponses avancées — coopération Sud-Sud, financement mixte, engagement du secteur privé, carbone forestier du bassin du Congo — sont énoncées comme des orientations et non comme des instruments chiffrés, et cette page ne leur attribue aucun montant que la revue ne fournit pas."
      },
      source: "VNR 2026" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        en: "The old DR Congo dashboard was a clone of Burundi's and still carried Burundi's data. Its revenue chart plotted 13.4% → 17.7% of GDP and 7.8% → 10.6%; its debt chart plotted external debt service at 10.9% of exports; its financing tab reported a total of US$1,507,171,475 in partner commitments \"to 2035\" and listed Burundi's sectors (decent jobs, industrialisation, energy, health, hunger, education, poverty). Every one of these is a Burundi figure.",
        fr: "L'ancien tableau de bord de la RD Congo était un clone de celui du Burundi et en portait encore les données. Son graphique des recettes traçait 13,4 % → 17,7 % du PIB et 7,8 % → 10,6 % ; son graphique de la dette, un service de la dette extérieure à 10,9 % des exportations ; son onglet financement affichait un total de 1 507 171 475 dollars d'engagements de partenaires « jusqu'en 2035 » et énumérait les secteurs du Burundi (emplois décents, industrialisation, énergie, santé, faim, éducation, pauvreté). Tous ces chiffres sont ceux du Burundi."
      },
      resolution: {
        en: "All of it has been removed. None of these figures describes DR Congo, and no equivalent published figures exist in the DR Congo factsheet, so nothing has been substituted for them: the dashboard now carries no revenue, debt-service or partner-commitment numbers at all. An empty space is the correct representation of data that does not exist.",
        fr: "L'ensemble a été supprimé. Aucun de ces chiffres ne décrit la RDC, et la fiche congolaise ne publie pas d'équivalents : rien ne leur a donc été substitué. Le tableau de bord ne comporte désormais aucun chiffre de recettes, de service de la dette ou d'engagements de partenaires. Une case vide est la juste représentation d'une donnée qui n'existe pas."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard headlined real GDP growth of 6.2% for 2023 and 5.9% for 2022, and built a stat tile and a narrative around \"sustained growth above 5%\".",
        fr: "Le tableau de bord affichait une croissance du PIB réel de 6,2 % en 2023 et de 5,9 % en 2022, et bâtissait une tuile et tout un récit autour d'une « croissance soutenue supérieure à 5 % »."
      },
      resolution: {
        en: "Both figures are wrong, and wrong in the direction that understates DR Congo's performance. The World Bank records 8.5% growth in 2022 and 7.8% in 2023, with the African Development Bank putting 2024 at 6.1%. The corrected series is now plotted, and the insight notes what the growth line does not prove — that it was carried by mining, not by a broad-based economy.",
        fr: "Les deux chiffres sont faux, et faux dans le sens qui sous-estime la performance congolaise. La Banque mondiale retient 8,5 % de croissance en 2022 et 7,8 % en 2023, la Banque africaine de développement situant 2024 à 6,1 %. La série corrigée est désormais tracée, et l'analyse précise ce que la courbe ne démontre pas : cette croissance a été portée par les mines, non par une économie à base large."
      } },
    { severity: "mislabel",
      issue: {
        en: "The chart titled \"Croissance du PIB, 2019–2024\" plotted revenue data (Burundi's) under the legends \"Accès à l'électricité\" and \"Capacité installée (indexée)\". Title, data and legend each described a different indicator.",
        fr: "Le graphique intitulé « Croissance du PIB, 2019-2024 » traçait des données de recettes (celles du Burundi) sous les légendes « Accès à l'électricité » et « Capacité installée (indexée) ». Le titre, les données et la légende désignaient chacun un indicateur différent."
      },
      resolution: {
        en: "A three-way mismatch, and the clearest evidence that the dashboards were cloned from one template without their data layer being changed. The chart has been rebuilt from verified World Bank growth figures, with its legend generated from the series it actually plots.",
        fr: "Une discordance à trois niveaux, et la preuve la plus nette que les tableaux de bord ont été clonés depuis un gabarit unique sans que leur couche de données soit modifiée. Le graphique a été reconstruit à partir des chiffres de croissance vérifiés de la Banque mondiale, sa légende étant générée depuis la série qu'il trace réellement."
      } },
    { severity: "mislabel",
      issue: {
        en: "The electricity chart carried the legends \"Eau de base (%)\" and \"Assainissement de base (%)\", and plotted an access percentage and an indexed capacity figure against a single y-axis. The SDG 9 chart carried the legend \"Recettes fiscales (% du PIB)\" over GDP-growth data; the water-trend chart on the water tab was labelled \"Priorités d'investissement (rang)\".",
        fr: "Le graphique de l'électricité portait les légendes « Eau de base (%) » et « Assainissement de base (%) », et traçait un pourcentage d'accès et une capacité indexée sur un axe unique. Le graphique de l'ODD 9 portait la légende « Recettes fiscales (% du PIB) » sur des données de croissance du PIB ; la courbe de l'eau, dans l'onglet correspondant, était étiquetée « Priorités d'investissement (rang) »."
      },
      resolution: {
        en: "Beyond the wrong legends, the electricity chart broke the cardinal rule by putting two units on one axis — a percentage and an index are not comparable magnitudes and the reader cannot see where one ends and the other begins. Access and capacity are now reported separately, capacity in MW on its own chart. No chart on this page carries two units.",
        fr: "Au-delà des légendes erronées, le graphique de l'électricité enfreignait la règle cardinale en plaçant deux unités sur un même axe : un pourcentage et un indice ne sont pas des grandeurs comparables et le lecteur ne peut voir où l'un s'arrête et où l'autre commence. L'accès et la capacité sont désormais présentés séparément, la capacité en MW sur son propre graphique. Aucun graphique de cette page ne porte deux unités."
      } },
    { severity: "contradiction",
      issue: {
        en: "The SDG 11 panel displayed 75.8% of the urban population living in informal settlements, under the legend \"Accès eau de base (%)\", while its own tooltip on the same panel read \"34.3% of the urban population in informal settlements (2020)\".",
        fr: "Le panneau ODD 11 affichait 75,8 % de la population urbaine vivant dans des établissements informels, sous la légende « Accès eau de base (%) », tandis que son infobulle, sur le même panneau, indiquait « 34,3 % de la population urbaine dans des établissements informels (2020) »."
      },
      resolution: {
        en: "The panel contradicted itself by a factor of more than two, and the 34.3% is in fact Burundi's figure, left behind by the clone. Neither number could be verified against the World Bank slum series, so both have been dropped and SDG 11 carries no headline figure. The factsheet's own SDG 11 entry is purely qualitative, and the dashboard now matches it.",
        fr: "Le panneau se contredisait lui-même dans un rapport de plus du double, et les 34,3 % sont en réalité le chiffre du Burundi, laissé là par le clonage. Aucune des deux valeurs n'a pu être vérifiée face à la série de la Banque mondiale sur les quartiers informels : les deux ont donc été retirées et l'ODD 11 ne porte aucun chiffre de tête. L'entrée ODD 11 de la fiche est purement qualitative, et le tableau de bord s'y conforme désormais."
      } },
    { severity: "corrected",
      issue: {
        en: "The dashboard's footer described the 2026 review as DR Congo's \"Deuxième Revue nationale volontaire\", while its own body text said this was the third submission (2020, 2023, 2026). The factsheet's continuity table compares 2026 against 2020, skipping 2023 entirely.",
        fr: "Le pied de page du tableau de bord décrivait la revue 2026 comme la « Deuxième Revue nationale volontaire » de la RDC, tandis que le corps du texte affirmait qu'il s'agissait de la troisième soumission (2020, 2023, 2026). Le tableau de continuité de la fiche compare 2026 à 2020, en omettant complètement 2023."
      },
      resolution: {
        en: "The HLPF register confirms DR Congo presented VNRs in 2020 and in 2023, so 2026 is its third. The previous cycle is recorded here as 2023 and all three cycles are listed. The factsheet's 2020 baseline is retained in the continuity table as published, but it should be read as a comparison with the first review, not the last one.",
        fr: "Le registre du FPHN confirme que la RDC a présenté des RNV en 2020 et en 2023 : 2026 est donc sa troisième. Le cycle précédent est enregistré ici comme étant 2023 et les trois cycles sont listés. La base 2020 de la fiche est conservée telle que publiée dans le tableau de continuité, mais elle doit se lire comme une comparaison avec la première revue, non avec la dernière."
      } },
    { severity: "corrected",
      issue: {
        en: "The factsheet's two headline energy claims — installed capacity up 20% since 2020, and 3,282 MW under construction — needed checking before being placed at the centre of the dashboard.",
        fr: "Les deux affirmations énergétiques phares de la fiche — une puissance installée en hausse de 20 % depuis 2020 et 3 282 MW en construction — devaient être vérifiées avant d'être placées au cœur du tableau de bord."
      },
      resolution: {
        en: "Both stand up. DR Congo's electricity regulator (ARE) recorded 2,980.7 MW of installed capacity in its 2022 annual report, of which 97.5% hydro. A 3,282 MW pipeline against that base makes the \"doubling by 2030\" claim arithmetically coherent rather than aspirational, and independent reporting confirms the pipeline is around 91% hydro and solar. This is the one part of DR Congo's factsheet that is fully corroborated, and the dashboard now leads with it.",
        fr: "Les deux résistent à l'examen. L'Autorité de régulation de l'électricité (ARE) a relevé 2 980,7 MW de puissance installée dans son rapport annuel 2022, dont 97,5 % d'hydroélectricité. Un portefeuille de 3 282 MW rapporté à cette base rend l'annonce d'un « doublement d'ici 2030 » arithmétiquement cohérente et non simplement ambitieuse, et des sources indépendantes confirment que ce portefeuille est composé à environ 91 % d'hydroélectrique et de solaire. C'est la seule partie de la fiche congolaise qui soit pleinement corroborée, et le tableau de bord la met désormais en avant."
      } },
    { severity: "unverified",
      issue: {
        en: "The dashboard reported basic water access at \"~40%\" and basic sanitation at \"~22%\", both cited to the UN SDG Database, and mobile penetration at \"~49%\" cited to the telecoms regulator ARCT for Q2 2025 — the same citation the Burundi dashboard used for its own, different, figures.",
        fr: "Le tableau de bord indiquait un accès à l'eau de base d'« environ 40 % » et un assainissement de base d'« environ 22 % », tous deux attribués à la Base de données ODD des Nations Unies, ainsi qu'une pénétration mobile d'« environ 49 % » attribuée au régulateur des télécoms ARCT pour le deuxième trimestre 2025 — la citation même que le tableau de bord du Burundi utilisait pour ses propres chiffres, différents."
      },
      resolution: {
        en: "None could be traced. The ARCT citation is a Burundi source and does not regulate DR Congo's telecoms market at all, so the mobile figure has been dropped outright. For water and sanitation, UNICEF DR Congo's published figures — 52% improved water, 29% improved sanitation — are used instead, on a single stated definition, so the two bars can honestly be compared.",
        fr: "Aucun n'a pu être tracé. La citation de l'ARCT renvoie à une source burundaise, qui ne régule nullement le marché télécom congolais : le chiffre du mobile a donc été purement et simplement retiré. Pour l'eau et l'assainissement, ce sont les chiffres publiés par l'UNICEF RD Congo — 52 % d'eau améliorée, 29 % d'assainissement amélioré — qui sont retenus, sur une définition unique et explicite, afin que les deux barres puissent être honnêtement comparées."
      } },
    { severity: "mislabel",
      issue: {
        en: "The country's name was misspelled as \"RD Congogo\" in the page footer, the title block and the source line, and one narrative block ended in the corrupted string \"contractionraction\". Several blocks mixed untranslated English into the French page.",
        fr: "Le nom du pays était mal orthographié « RD Congogo » dans le pied de page, le bloc de titre et la ligne de sources, et un bloc narratif se terminait par la chaîne corrompue « contractionraction ». Plusieurs blocs mêlaient de l'anglais non traduit à la page française."
      },
      resolution: {
        en: "Cosmetic next to the data errors, but the same root cause: text was edited by hand, in place, on a cloned page. Every string on this page now comes from a bilingual data layer with one entry per language, so a half-translated or duplicated name cannot survive.",
        fr: "Anodin au regard des erreurs de données, mais de même origine : le texte avait été édité à la main, sur place, sur une page clonée. Chaque chaîne de cette page provient désormais d'une couche de données bilingue comportant une entrée par langue : un nom à demi traduit ou dupliqué ne peut plus subsister."
      } }
  ]
});
