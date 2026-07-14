/* Algérie — RNV 2019 → 2026. Fiche source rédigée en français : le français fait foi,
   l'anglais est une traduction. Vérifié contre data/factsheets.txt (p. 2 de la compilation
   OSAA), la Banque mondiale, l'ONS algérienne, le ministère de l'Énergie et des Énergies
   renouvelables et le programme national de dessalement. Voir `factcheck` en bas de fichier.

   Algeria — VNR 2019 → 2026. Source factsheet authored in French: French is authoritative,
   English is a translation. Fact-checked against data/factsheets.txt (p.2 of the OSAA
   compilation), the World Bank, Algeria's ONS, the Ministry of Energy and Renewable Energies
   and the national desalination programme. See `factcheck` at the bottom. */
window.VNR.register({
  slug: "algeria",
  iso: "DZ",
  name: { en: "Algeria", fr: "Algérie" },
  region: "north",
  vnrPrev: 2019,
  vnrCycles: [2019, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/algeria.pdf",

  tagline: {
    en: "Towards a future of sustainability, social inclusion and innovation, anchored in sovereignty over development pathways.",
    fr: "Vers un avenir de durabilité, d'inclusion sociale et d'innovation, ancré dans la souveraineté sur les voies de développement."
  },

  themes: [
    { sdg: 5,
      title: { en: "Social inclusion and women's empowerment", fr: "Inclusion sociale et autonomisation des femmes" },
      text: {
        en: "Gender equality is mainstreamed across all public policies, with programmes supporting the economic empowerment of rural women through training and finance.",
        fr: "L'égalité des sexes est intégrée dans toutes les politiques publiques, avec des programmes soutenant l'autonomisation économique des femmes en milieu rural par la formation et le financement."
      } },
    { sdg: 6,
      title: { en: "Near-universal access to water", fr: "Accès à l'eau quasi universel" },
      text: {
        en: "Connection to the public drinking-water networks exceeds 98%, with transport and water infrastructure as key pillars of Algeria's growth policy.",
        fr: "Le raccordement aux réseaux d'eau potable publics dépasse 98 %, avec les infrastructures de transport et d'eau comme piliers clés de la politique de croissance de l'Algérie."
      } },
    { sdg: 7,
      title: { en: "Energy diversification", fr: "Diversification énergétique" },
      text: {
        en: "A USD 60 billion plan (2025–2029), green hydrogen and solar projects are steering Algeria towards renewable energy, with near-universal access to electricity and gas.",
        fr: "Un plan de 60 milliards USD (2025-2029), l'hydrogène vert et les projets solaires orientent l'Algérie vers les énergies renouvelables, avec un accès quasi universel à l'électricité et au gaz."
      } },
    { sdg: 8,
      title: { en: "Youth empowerment and jobs", fr: "Autonomisation des jeunes et emplois" },
      text: {
        en: "Initiatives empower young people through vocational training, entrepreneurship and the digital economy, strengthening the education-to-employment ecosystem.",
        fr: "Des initiatives autonomisent la jeunesse par la formation professionnelle, l'entrepreneuriat et l'économie numérique, renforçant l'écosystème éducation-emploi."
      } },
    { sdg: 9,
      title: { en: "Infrastructure and digital sovereignty", fr: "Infrastructure et souveraineté numérique" },
      text: {
        en: "Large-scale infrastructure, railway expansion and digital transformation, financed to the tune of nearly DZD 6,000 billion, are advancing industry and digital sovereignty.",
        fr: "Des infrastructures à grande échelle, l'expansion ferroviaire et la transformation numérique financées à près de 6 000 milliards DZD font progresser l'industrie et la souveraineté numérique."
      } },
    { sdg: 17,
      title: { en: "South-South cooperation", fr: "Coopération Sud-Sud" },
      text: {
        en: "Domestic public resources are the main pillar of SDG financing, complemented by South-South cooperation and technology transfer across Africa and the Arab world.",
        fr: "Les ressources publiques intérieures constituent le principal pilier du financement des ODD, complétées par la coopération Sud-Sud et le transfert de technologie en Afrique et dans le monde arabe."
      } }
  ],

  continuity: [
    { prev: { en: "Foundations of inclusive and diversified development", fr: "Fondements d'un développement inclusif et diversifié" },
      status: "sustained",
      now: { en: "2026: inclusion, growth and innovation", fr: "2026 : inclusion, croissance et innovation" } },
    { prev: { en: "Inclusive social protection", fr: "Protection sociale inclusive" },
      status: "evolved",
      now: { en: "Gender equality across all policies", fr: "Égalité des sexes dans toutes les politiques" } },
    { prev: { en: "Roll-out of basic infrastructure", fr: "Déploiement des infrastructures de base" },
      status: "evolved",
      now: { en: "Energy diversification and water at 98%", fr: "Diversification énergétique et eau à 98 %" } },
    { prev: { en: "Economic diversification objective", fr: "Objectif de diversification économique" },
      status: "sustained",
      now: { en: "Non-hydrocarbon growth and industry", fr: "Croissance et industrie hors hydrocarbures" } },
    { prev: { en: "Inter-ministerial coordination on the SDGs", fr: "Coordination interministérielle des ODD" },
      status: "evolved",
      now: { en: "Domestic resources and South-South cooperation", fr: "Ressources intérieures et coopération Sud-Sud" } }
  ],

  concepts: {
    caption: {
      en: "Algeria's review turns on social inclusion, diversified growth and innovation.",
      fr: "L'examen de l'Algérie porte sur l'inclusion sociale, la croissance diversifiée et l'innovation."
    },
    items: [
      { label: { en: "inclusion & gender", fr: "inclusion et genre" }, value: 10 },
      { label: { en: "industry & growth", fr: "industrie et croissance" }, value: 9 },
      { label: { en: "energy & hydrogen", fr: "énergie et hydrogène" }, value: 7 },
      { label: { en: "institutions", fr: "institutions" }, value: 6 },
      { label: { en: "environment & water", fr: "environnement et eau" }, value: 5 },
      { label: { en: "investment & resources", fr: "investissement et ressources" }, value: 5 },
      { label: { en: "digital economy", fr: "économie numérique" }, value: 5 },
      { label: { en: "cooperation", fr: "coopération" }, value: 4 },
      { label: { en: "infrastructure", fr: "infrastructure" }, value: 4 }
    ]
  },

  indicators: [
    { id: "water_network", sdg: 6,
      label: { en: "Households connected to the public drinking-water network", fr: "Ménages raccordés au réseau public d'eau potable" },
      value: 98, unit: "%",
      note: {
        en: "The factsheet reports \"above 98%\". This measures connection to the network, not the availability of the resource — Algeria remains one of the most water-scarce countries in the region.",
        fr: "La fiche indique « dépasse 98 % ». Il s'agit du raccordement au réseau, non de la disponibilité de la ressource : l'Algérie demeure l'un des pays les plus pauvres en eau de la région."
      },
      source: "Fiche RNV 2026 (OSAA) · RNV 2026" },
    { id: "elec_access", sdg: 7,
      label: { en: "Access to electricity", fr: "Accès à l'électricité" },
      value: 100, unit: "%",
      note: {
        en: "Access to electricity and to gas is effectively universal. Algeria's energy frontier is therefore decarbonisation, not connection.",
        fr: "L'accès à l'électricité et au gaz est de fait universel. La frontière énergétique de l'Algérie est donc la décarbonation, non le raccordement."
      },
      source: "Banque mondiale, EG.ELC.ACCS.ZS (2023) · ODD 7.1.1" },
    { id: "energy_plan", sdg: 7,
      label: { en: "Energy transition investment plan, 2025–2029", fr: "Plan d'investissement pour la transition énergétique, 2025-2029" },
      value: 60, unit: "billion USD",
      note: {
        en: "Named in the factsheet. It carries the solar programme and the green-hydrogen export strategy.",
        fr: "Nommé dans la fiche. Il porte le programme solaire et la stratégie d'exportation d'hydrogène vert."
      },
      source: "Fiche RNV 2026 (OSAA)" },
    { id: "infra_plan", sdg: 9,
      label: { en: "Financing for infrastructure and digital transformation", fr: "Financement des infrastructures et de la transformation numérique" },
      value: 6000, unit: "billion DZD",
      note: {
        en: "\"Nearly DZD 6,000 billion\" per the factsheet, covering large-scale works, railway expansion and the digital-sovereignty agenda.",
        fr: "« Près de 6 000 milliards DZD » selon la fiche, couvrant les grands travaux, l'expansion ferroviaire et l'agenda de souveraineté numérique."
      },
      source: "Fiche RNV 2026 (OSAA)" },
    { id: "gdp_growth", sdg: 8,
      label: { en: "Real GDP growth, 2024", fr: "Croissance du PIB réel, 2024" },
      value: 3.7, unit: "%",
      note: {
        en: "The 4.1% figure the old dashboard attached to 2024 is in fact the 2023 outturn. See the fact-check ledger.",
        fr: "Le chiffre de 4,1 % que l'ancien tableau de bord rattachait à 2024 correspond en réalité au résultat 2023. Voir le registre de vérification."
      },
      source: "Banque mondiale, NY.GDP.MKTP.KD.ZG (2024)" },
    { id: "hydro_exports", sdg: 8,
      label: { en: "Hydrocarbons' share of export earnings", fr: "Part des hydrocarbures dans les recettes d'exportation" },
      value: 90, unit: "%",
      note: {
        en: "Approximately 90% on ONS figures — not the ~95% carried by the old dashboard. This is the share of exports, not of the budget: hydrocarbons fund roughly 47% of fiscal revenue.",
        fr: "Environ 90 % selon l'ONS — et non les quelque 95 % avancés par l'ancien tableau de bord. Il s'agit de la part des exportations, non du budget : les hydrocarbures financent environ 47 % des recettes fiscales."
      },
      source: "Office national des statistiques (ONS) · Banque mondiale, Algeria Economic Update" }
  ],

  charts: [
    { id: "water_source", type: "gap", sdg: 6,
      title: {
        en: "Coverage was solved; the source of the water is changing",
        fr: "La couverture est acquise ; c'est l'origine de l'eau qui change"
      },
      unit: "%",
      items: [
        { label: { en: "Households connected to the drinking-water network", fr: "Ménages raccordés au réseau d'eau potable" }, value: 98, emphasis: false },
        { label: { en: "Share of drinking water from desalination, end-2025", fr: "Part de l'eau potable issue du dessalement, fin 2025" }, value: 42, emphasis: true },
        { label: { en: "Share of drinking water from desalination, before the 2024–25 plants", fr: "Part de l'eau potable issue du dessalement, avant les usines de 2024-2025" }, value: 18, emphasis: false }
      ],
      insight: {
        en: "Algeria's SDG 6 story is routinely told as a coverage story, and on coverage it was already won: more than 98% of households are connected. The change worth reporting is upstream of the tap. Five new seawater plants commissioned in 2024–25 took desalination from roughly 18% to around 42% of the country's potable supply in about two years, and the programme targets 60% by 2030. A country that has effectively decided to manufacture half its drinking water is making a very different bet from one that is still laying pipe.",
        fr: "Le récit de l'ODD 6 en Algérie est habituellement un récit de couverture — et, sur la couverture, la partie était déjà gagnée : plus de 98 % des ménages sont raccordés. Le changement qui mérite d'être rapporté se situe en amont du robinet. Cinq nouvelles usines de dessalement d'eau de mer mises en service en 2024-2025 ont porté le dessalement d'environ 18 % à quelque 42 % de l'approvisionnement en eau potable en deux ans à peine, le programme visant 60 % d'ici 2030. Un pays qui choisit de fabriquer la moitié de son eau potable fait un pari radicalement différent de celui qui pose encore des canalisations."
      },
      source: "Fiche RNV 2026 (OSAA) · Programme national de dessalement, ministère des Ressources en eau (2025)" },

    { id: "renew_target", type: "gap", sdg: 7,
      title: {
        en: "The renewable-energy target that is actually in force",
        fr: "L'objectif d'énergies renouvelables réellement en vigueur"
      },
      unit: "MW",
      items: [
        { label: { en: "Superseded 2011 programme target (by 2030)", fr: "Objectif du programme de 2011, désormais caduc (à 2030)" }, value: 22000, emphasis: false },
        { label: { en: "Operative target: renewable capacity by 2035", fr: "Objectif en vigueur : capacité renouvelable à 2035" }, value: 15000, emphasis: true },
        { label: { en: "First phase, in commissioning", fr: "Première phase, en cours de mise en service" }, value: 3000, emphasis: false }
      ],
      insight: {
        en: "The headline \"22,000 MW by 2030\" that circulated on the old dashboard is a target from the 2011 national renewables programme; it has since been revised. The operative commitment is 15,000 MW — a 30% renewable share — by 2035, of which a first phase of 3,000 MW is being commissioned across twelve wilayas. Showing the superseded figure alongside the live one is the honest way to present an ambition that has been re-based rather than abandoned.",
        fr: "L'objectif phare de « 22 000 MW d'ici 2030 » qui circulait sur l'ancien tableau de bord provient du programme national des énergies renouvelables de 2011 ; il a depuis été révisé. L'engagement en vigueur porte sur 15 000 MW — soit une part de 30 % de renouvelables — à l'horizon 2035, dont une première phase de 3 000 MW est en cours de mise en service dans douze wilayas. Présenter le chiffre caduc à côté du chiffre actuel est la manière honnête d'exposer une ambition qui a été recalibrée, et non abandonnée."
      },
      source: "Ministère de l'Énergie et des Énergies renouvelables · Programme national de développement des énergies renouvelables (révision 2024-2025)" },

    { id: "growth", type: "line", sdg: 8,
      title: { en: "Real GDP growth, % per year", fr: "Croissance du PIB réel, en % par an" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "gdp", label: { en: "Real GDP growth", fr: "Croissance du PIB réel" },
          points: [
            { x: "2020", y: -5.1 },
            { x: "2021", y: 3.8 },
            { x: "2022", y: 3.6 },
            { x: "2023", y: 4.1 },
            { x: "2024", y: 3.7 }
          ] }
      ],
      insight: {
        en: "Algeria recovered fully from a 5.1% contraction in 2020 and has since settled into a narrow band of 3.5–4% growth. The point is the flatness, not the level: four consecutive years within half a point of each other, in an economy that is trying to change its structure. The old dashboard reported 4.1% as the 2024 figure — it is the 2023 one, and 2024 came in slightly lower at 3.7%. Growth is steady; it is not yet accelerating on the back of diversification.",
        fr: "L'Algérie s'est entièrement relevée d'une contraction de 5,1 % en 2020 et s'est depuis installée dans une bande étroite de 3,5 à 4 % de croissance. Le fait marquant est cette planéité, non le niveau : quatre années consécutives à moins d'un demi-point d'écart, dans une économie qui cherche à changer de structure. L'ancien tableau de bord donnait 4,1 % pour 2024 — c'est le chiffre de 2023, et 2024 s'établit légèrement plus bas, à 3,7 %. La croissance est régulière ; elle n'accélère pas encore sous l'effet de la diversification."
      },
      source: "Banque mondiale, NY.GDP.MKTP.KD.ZG" },

    { id: "hydro_dependence", type: "gap", sdg: 8,
      title: {
        en: "Hydrocarbon dependence is sharper in trade than in the budget",
        fr: "La dépendance aux hydrocarbures est plus marquée dans le commerce que dans le budget"
      },
      unit: "%",
      items: [
        { label: { en: "Hydrocarbons as a share of export earnings", fr: "Hydrocarbures en part des recettes d'exportation" }, value: 90, emphasis: true },
        { label: { en: "Hydrocarbons as a share of fiscal revenue", fr: "Hydrocarbures en part des recettes fiscales" }, value: 47, emphasis: false }
      ],
      insight: {
        en: "Two shares that are often merged into a single claim about \"dependence\" behave quite differently. Around 90% of what Algeria sells abroad is oil and gas, but under half of what the State collects comes from them — the non-hydrocarbon tax base has already grown into the budget in a way it has not into the export basket. Diversification is therefore, first and above all, an export problem: the fiscal cushion buys time that the balance of payments does not.",
        fr: "Deux parts que l'on fond souvent en une seule affirmation sur la « dépendance » se comportent en réalité très différemment. Environ 90 % de ce que l'Algérie vend à l'étranger est constitué de pétrole et de gaz, mais moins de la moitié de ce que l'État perçoit en provient : l'assiette fiscale hors hydrocarbures s'est déjà installée dans le budget comme elle ne l'a pas fait dans le panier d'exportation. La diversification est donc d'abord et avant tout un problème d'exportation : le coussin budgétaire achète un temps que la balance des paiements n'accorde pas."
      },
      source: "Office national des statistiques (ONS) · Banque mondiale, Algeria Economic Update (2025)" }
  ],

  instruments: [
    { name: { en: "USD 60 billion energy transition plan", fr: "Plan de transition énergétique de 60 milliards USD" },
      kicker: { en: "2025–2029", fr: "2025-2029" },
      text: {
        en: "The centrepiece of Algeria's 2026 review. It funds the solar build-out, wind capacity and a green-hydrogen production and export chain aimed at Europe and sub-Saharan Africa. It is presented in the Key Messages as the country's principal contribution to SDG 7, SDG 13 and to economic diversification at once.",
        fr: "La pièce maîtresse de la revue algérienne de 2026. Il finance le déploiement solaire, la capacité éolienne et une filière de production et d'exportation d'hydrogène vert à destination de l'Europe et de l'Afrique subsaharienne. Les Messages clés le présentent comme la principale contribution du pays à l'ODD 7, à l'ODD 13 et à la diversification économique, simultanément."
      },
      source: "Fiche RNV 2026 (OSAA)" },
    { name: { en: "National renewable energy development programme", fr: "Programme national de développement des énergies renouvelables" },
      kicker: { en: "15,000 MW by 2035", fr: "15 000 MW d'ici 2035" },
      text: {
        en: "Algeria's renewables framework, originally adopted in 2011 and re-based since. The operative target is 15,000 MW — a 30% renewable share of generation — by 2035, with a first phase of 3,000 MW spread across twelve wilayas now in commissioning. It should not be confused with the older 22,000 MW-by-2030 figure, which is no longer the working target.",
        fr: "Le cadre algérien des renouvelables, adopté en 2011 puis recalibré. L'objectif en vigueur est de 15 000 MW — soit 30 % de la production — à l'horizon 2035, avec une première phase de 3 000 MW répartie sur douze wilayas actuellement en mise en service. À ne pas confondre avec l'ancien chiffre de 22 000 MW d'ici 2030, qui n'est plus l'objectif de travail."
      },
      source: "Ministère de l'Énergie et des Énergies renouvelables (2025)" },
    { name: { en: "National seawater desalination programme", fr: "Programme national de dessalement de l'eau de mer" },
      kicker: { en: "≈42% of drinking water", fr: "≈42 % de l'eau potable" },
      text: {
        en: "Five large seawater plants were commissioned in 2024–25 at El Tarf, Boumerdès, Tipaza, Oran and Béjaïa, bringing the country to nineteen operational plants and lifting desalination from roughly 18% to around 42% of potable supply. Seven further plants are planned to 2030, when desalination is intended to cover 60% of drinking water. It is the practical answer to a water balance that network coverage alone cannot fix.",
        fr: "Cinq grandes usines de dessalement d'eau de mer ont été mises en service en 2024-2025 à El Tarf, Boumerdès, Tipaza, Oran et Béjaïa, portant le pays à dix-neuf usines opérationnelles et le dessalement d'environ 18 % à quelque 42 % de l'approvisionnement en eau potable. Sept usines supplémentaires sont prévues d'ici 2030, horizon auquel le dessalement doit couvrir 60 % de l'eau potable. C'est la réponse concrète à un bilan hydrique que la seule couverture du réseau ne peut redresser."
      },
      source: "Ministère des Ressources en eau · programme national de dessalement (2025)" },
    { name: { en: "Gender equality mainstreamed across public policy", fr: "Égalité des sexes intégrée dans les politiques publiques" },
      kicker: { en: "SDG 5 · the most frequent concept", fr: "ODD 5 · le concept le plus fréquent" },
      text: {
        en: "\"Inclusion and gender\" is the single most frequent concept in Algeria's Key Messages, cited ten times — more than industry, energy or infrastructure. Gender equality is presented not as a standalone programme but as a cross-cutting requirement of all public policy, carried in practice by schemes for the economic empowerment of rural women through vocational training and access to finance.",
        fr: "« Inclusion et genre » est le concept le plus fréquent des Messages clés algériens, cité dix fois — davantage que l'industrie, l'énergie ou les infrastructures. L'égalité des sexes n'y est pas présentée comme un programme autonome mais comme une exigence transversale de toute politique publique, portée concrètement par des dispositifs d'autonomisation économique des femmes rurales par la formation professionnelle et l'accès au financement."
      },
      source: "Fiche RNV 2026 (OSAA), sections 1 et 3" },
    { name: { en: "Infrastructure and digital sovereignty", fr: "Infrastructures et souveraineté numérique" },
      kicker: { en: "≈DZD 6,000 billion", fr: "≈6 000 milliards DZD" },
      text: {
        en: "Large-scale civil works, railway expansion and the digital transformation of public services are financed to the tune of nearly DZD 6,000 billion. The review frames this less as a construction programme than as a sovereignty one: domestic control of transport, water and digital infrastructure is treated as a precondition for industrial diversification.",
        fr: "Les grands travaux, l'expansion ferroviaire et la transformation numérique des services publics sont financés à hauteur de près de 6 000 milliards DZD. La revue y voit moins un programme de construction qu'un programme de souveraineté : la maîtrise nationale des infrastructures de transport, d'eau et du numérique est traitée comme une condition préalable à la diversification industrielle."
      },
      source: "Fiche RNV 2026 (OSAA)" },
    { name: { en: "South-South cooperation and technology transfer", fr: "Coopération Sud-Sud et transfert de technologie" },
      kicker: { en: "SDG 17 · no aid dependence", fr: "ODD 17 · sans dépendance à l'aide" },
      text: {
        en: "Algeria finances the SDGs primarily from domestic public resources; South-South cooperation and technology transfer across Africa and the Arab world are the complement, not the base. The review is explicit that this is a sovereignty position as much as a financing one — Algeria appears in it as a provider of cooperation as well as a recipient.",
        fr: "L'Algérie finance les ODD principalement sur ressources publiques intérieures ; la coopération Sud-Sud et le transfert de technologie en Afrique et dans le monde arabe en sont le complément, non le socle. La revue est explicite : il s'agit d'une position de souveraineté autant que d'un choix de financement — l'Algérie y figure comme pourvoyeuse de coopération autant que bénéficiaire."
      },
      source: "Fiche RNV 2026 (OSAA)" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        en: "The old dashboard headlined \"GDP growth — 4.1%, 2024\" and repeated the figure in the SDG 8 panel.",
        fr: "L'ancien tableau de bord affichait « croissance du PIB — 4,1 %, 2024 » et reprenait ce chiffre dans le panneau ODD 8."
      },
      resolution: {
        en: "4.1% is Algeria's 2023 growth rate. The 2024 outturn is 3.7% (World Bank), with 2025 estimated at 3.4%. The year label was wrong, not the number; both years are now shown in a single time series so the confusion cannot recur.",
        fr: "4,1 % correspond à la croissance algérienne de 2023. Le résultat 2024 s'établit à 3,7 % (Banque mondiale), 2025 étant estimé à 3,4 %. C'était l'année qui était fausse, non le chiffre ; les deux années figurent désormais dans une même série temporelle, ce qui rend la confusion impossible."
      } },
    { severity: "corrected",
      issue: {
        en: "The dashboard presented \"22,000 MW of solar by 2030\" as Algeria's live renewable target, in a headline tile, a chart, two goal panels and an instrument card.",
        fr: "Le tableau de bord présentait « 22 000 MW de solaire d'ici 2030 » comme l'objectif renouvelable en vigueur de l'Algérie, dans une tuile de tête, un graphique, deux panneaux d'objectifs et une fiche d'instrument."
      },
      resolution: {
        en: "22,000 MW by 2030 is the target of the 2011 national renewables programme and has been superseded. The operative commitment is 15,000 MW — a 30% renewable share — by 2035, with a first phase of 3,000 MW in commissioning. Both figures are now shown together and the older one is explicitly labelled as superseded.",
        fr: "22 000 MW d'ici 2030 est l'objectif du programme national des renouvelables de 2011 ; il est caduc. L'engagement en vigueur porte sur 15 000 MW — soit 30 % de renouvelables — à l'horizon 2035, avec une première phase de 3 000 MW en mise en service. Les deux chiffres sont désormais présentés ensemble et l'ancien est explicitement signalé comme caduc."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard stated in three places that Algeria has \"27 desalination plants supplying ~17% of potable water\".",
        fr: "Le tableau de bord affirmait à trois reprises que l'Algérie compte « 27 usines de dessalement fournissant ~17 % de l'eau potable »."
      },
      resolution: {
        en: "Both numbers are wrong and in opposite directions. Following the commissioning of five large seawater plants in 2024–25, Algeria has nineteen operational plants, and desalination now covers around 42% of potable supply — up from roughly 18%. The plant count was inflated and the supply share was badly understated; the correct figures make the point far more strongly than the wrong ones did.",
        fr: "Les deux chiffres sont faux, et en sens inverse. Après la mise en service de cinq grandes usines d'eau de mer en 2024-2025, l'Algérie compte dix-neuf usines opérationnelles, et le dessalement couvre désormais environ 42 % de l'approvisionnement en eau potable, contre quelque 18 % auparavant. Le nombre d'usines était surestimé et la part de l'approvisionnement gravement sous-estimée ; les chiffres exacts servent le propos bien mieux que les chiffres erronés."
      } },
    { severity: "mislabel",
      issue: {
        en: "The chart titled \"Accès à l'électricité et développement des énergies renouvelables, 2015–2030\" has a y-axis in MW, plots solar capacity, and carries a legend reading \"Part renouvelables (%)\" and \"Part hydrocarbures (%)\" — a two-series percentage legend over a single-series megawatt chart.",
        fr: "Le graphique intitulé « Accès à l'électricité et développement des énergies renouvelables, 2015-2030 » porte un axe des ordonnées en MW, trace la capacité solaire, et affiche une légende « Part renouvelables (%) » et « Part hydrocarbures (%) » — soit une légende en pourcentage à deux séries sur un graphique à une seule série en mégawatts."
      },
      resolution: {
        en: "The legend belongs to a different chart in the French template these dashboards were cloned from. Titles, legends and axes are now generated from the same bilingual data object, so a chart cannot display a unit or a series that is not in its own data.",
        fr: "Cette légende appartient à un autre graphique du gabarit français dont ces tableaux de bord ont été clonés. Titres, légendes et axes sont désormais générés à partir du même objet de données bilingue : un graphique ne peut plus afficher une unité ou une série absente de ses propres données."
      } },
    { severity: "mislabel",
      issue: {
        en: "The chart titled \"Croissance du PIB et part des revenus des hydrocarbures, 2015–2024\" in fact plots total government revenue (13.4% → 17.7% of GDP) and internally-raised revenue (7.8% → 10.6%), under the legend \"Capacité solaire (MW) · réel puis objectif\".",
        fr: "Le graphique intitulé « Croissance du PIB et part des revenus des hydrocarbures, 2015-2024 » trace en réalité les recettes publiques totales (13,4 % → 17,7 % du PIB) et les recettes levées en interne (7,8 % → 10,6 %), sous la légende « Capacité solaire (MW) · réel puis objectif »."
      },
      resolution: {
        en: "Title, legend and data disagree three ways: the title promises growth and hydrocarbons, the legend promises megawatts, the data show revenue ratios. None of the four revenue points could be traced to the factsheet or to a citable series, so the chart has been dropped rather than relabelled. Growth is now shown on its own, from World Bank data.",
        fr: "Le titre, la légende et les données se contredisent sur trois plans : le titre annonce la croissance et les hydrocarbures, la légende annonce des mégawatts, les données montrent des ratios de recettes. Aucun des quatre points de recettes n'a pu être rattaché à la fiche ni à une série citable ; le graphique a donc été supprimé plutôt que réétiqueté. La croissance est désormais présentée seule, à partir des données de la Banque mondiale."
      } },
    { severity: "contradiction",
      issue: {
        en: "The external-debt panel asserted in prose that Algeria's external debt is \"below 3% of GDP\", while the chart beside it plotted a rising series peaking at 10.9% and carried the legend \"Croissance du PIB (%)\" and \"Inflation (%)\".",
        fr: "Le panneau sur la dette extérieure affirmait en toutes lettres que la dette extérieure de l'Algérie est « inférieure à 3 % du PIB », tandis que le graphique voisin traçait une série croissante culminant à 10,9 % sous la légende « Croissance du PIB (%) » et « Inflation (%) »."
      },
      resolution: {
        en: "The 10.9% figure is SDG indicator 17.4.1 — debt service as a share of exports — not debt as a share of GDP. Two different indicators were presented as one, under a legend belonging to a third. Algeria's external debt is indeed very low, but no figure for it could be traced to the factsheet, so the panel has been dropped entirely rather than rebuilt on an untraceable number.",
        fr: "Le chiffre de 10,9 % correspond à l'indicateur ODD 17.4.1 — le service de la dette en part des exportations — et non à la dette en part du PIB. Deux indicateurs distincts étaient présentés comme un seul, sous une légende appartenant à un troisième. La dette extérieure algérienne est effectivement très faible, mais aucun chiffre n'a pu être rattaché à la fiche : le panneau a donc été entièrement supprimé plutôt que reconstruit sur une donnée non traçable."
      } },
    { severity: "contradiction",
      issue: {
        en: "Two ranked bar charts, both cited to \"RNV 2026, p.122 (Graphique 74)\", showed different sector lists in the same dashboard — Renewable energy / Diversification / Water on the Overview tab, and Decent jobs / Industrialization / Hunger / Poverty on the Financing tab — alongside a total of \"1 507 171 475 $\" and prose describing it as \"$1.5 billion\", while also stating that bar lengths express rank rather than money.",
        fr: "Deux graphiques à barres classées, tous deux référencés « RNV 2026, p. 122 (Graphique 74) », affichaient des listes de secteurs différentes dans le même tableau de bord — Énergie renouvelable / Diversification / Eau dans l'onglet Aperçu, et Emplois décents / Industrialisation / Faim / Pauvreté dans l'onglet Financement — aux côtés d'un total de « 1 507 171 475 $ » et d'un texte parlant de « 1,5 milliard de dollars », tout en affirmant que la longueur des barres exprime un rang et non un montant."
      },
      resolution: {
        en: "The same cited figure cannot support two different sector rankings, and a total quoted to the dollar cannot sit under bars that are said not to encode money. Neither list, nor the total, could be traced to the factsheet or to any citable Algerian source. Both charts have been dropped.",
        fr: "Une même référence ne peut fonder deux classements sectoriels différents, et un total cité au dollar près ne peut accompagner des barres dont on affirme qu'elles n'encodent pas de montants. Ni les listes, ni le total n'ont pu être rattachés à la fiche ou à une source algérienne citable. Les deux graphiques ont été supprimés."
      } },
    { severity: "mislabel",
      issue: {
        en: "The SDG 9 panel displayed a donut reading \"~80%\" for internet penetration, whose tooltip described \"34.3% of the urban population in informal settlements\" and whose source cited SDG indicator 11.1.1, under a legend reading \"Couverture énergétique (%)\". Separately, the goal buttons keyed s9, s11 and s17 rendered SDG badges 8, 9 and 13.",
        fr: "Le panneau ODD 9 affichait un anneau indiquant « ~80 % » de pénétration d'Internet, dont l'infobulle décrivait « 34,3 % de la population urbaine dans des établissements informels » et dont la source citait l'indicateur ODD 11.1.1, sous une légende « Couverture énergétique (%) ». Par ailleurs, les boutons d'objectifs codés s9, s11 et s17 affichaient les pastilles ODD 8, 9 et 13."
      },
      resolution: {
        en: "A single graphic carried a number, a tooltip, an indicator citation and a legend that referred to four different things. Neither the ~80% internet figure nor the 34.3% informal-settlement figure could be traced to the factsheet, and both have been dropped. The SDG mapping is now taken directly from the factsheet's six themes — SDGs 5, 6, 7, 8, 9 and 17.",
        fr: "Un seul graphique portait un chiffre, une infobulle, une citation d'indicateur et une légende renvoyant à quatre réalités distinctes. Ni le chiffre de ~80 % pour Internet ni celui de 34,3 % pour les établissements informels n'ont pu être rattachés à la fiche ; les deux ont été supprimés. La cartographie ODD reprend désormais directement les six thèmes de la fiche — ODD 5, 6, 7, 8, 9 et 17."
      } },
    { severity: "mislabel",
      issue: {
        en: "SDG 5 — gender equality and women's empowerment — is one of Algeria's six factsheet themes and, as \"inclusion & gender\" (10 mentions), the single most frequent concept in its Key Messages. It appeared nowhere in the old dashboard, which showed SDG 13 in its place.",
        fr: "L'ODD 5 — égalité des sexes et autonomisation des femmes — est l'un des six thèmes de la fiche algérienne et, sous l'intitulé « inclusion et genre » (10 occurrences), le concept le plus fréquent de ses Messages clés. Il ne figurait nulle part dans l'ancien tableau de bord, qui affichait l'ODD 13 à sa place."
      },
      resolution: {
        en: "This is the most consequential error in the file: the dashboard omitted the theme Algeria itself foregrounds most, and substituted one the factsheet does not list. SDG 5 is restored as a theme and as a policy instrument; SDG 13 is covered through the energy-transition material where the factsheet actually places it, under SDG 7.",
        fr: "C'est l'erreur la plus lourde du dossier : le tableau de bord omettait le thème que l'Algérie met elle-même le plus en avant, et lui substituait un thème absent de la fiche. L'ODD 5 est rétabli comme thème et comme instrument de politique publique ; l'ODD 13 est traité à travers la transition énergétique, là où la fiche le situe effectivement, sous l'ODD 7."
      } },
    { severity: "unverified",
      issue: {
        en: "The dashboard repeatedly cited a water-stress withdrawal rate of \"~70% of renewable freshwater\", an internet penetration of \"~80%\", a hydrocarbon export share of \"~95%\", a \"Vision Algérie 2035\" framework and a national renewables plan called \"PENREE\".",
        fr: "Le tableau de bord citait de façon répétée un taux de prélèvement de « ~70 % des ressources en eau douce renouvelables », une pénétration d'Internet de « ~80 % », une part des hydrocarbures dans les exportations de « ~95 % », un cadre « Vision Algérie 2035 » et un plan national des renouvelables nommé « PENREE »."
      },
      resolution: {
        en: "The ~70% water-stress rate and the ~80% internet figure could not be traced to the factsheet or to FAO AQUASTAT / ITU country series, and have been dropped. The export share is closer to 90% on ONS figures and has been corrected. \"Vision Algérie 2035\" appears in no Algerian source we could find and has been removed. \"PENREE\" is a corruption of the Programme national de développement des énergies renouvelables, which is named correctly here.",
        fr: "Le taux de stress hydrique de ~70 % et le chiffre de ~80 % pour Internet n'ont pu être rattachés à la fiche ni aux séries pays de la FAO AQUASTAT ou de l'UIT : ils ont été supprimés. La part des exportations est plus proche de 90 % selon l'ONS et a été corrigée. « Vision Algérie 2035 » ne figure dans aucune source algérienne que nous ayons pu identifier et a été retirée. « PENREE » est une déformation du Programme national de développement des énergies renouvelables, nommé correctement ici."
      } },
    { severity: "mislabel",
      issue: {
        en: "Throughout the French dashboard, English fragments were spliced mid-sentence into French prose — for example \"l'Algérie withdraws more than 70% of its renewable freshwater supply\", \"hydrogène vertrogen positioned as\", \"la longueur des barres reflètent l'importance relativegths show rank order\" — and the footer and water tab cited a \"RNV 2020\" while the header and the factsheet both date Algeria's first review to 2019.",
        fr: "Dans l'ensemble du tableau de bord français, des fragments anglais étaient insérés en milieu de phrase dans la prose française — par exemple « l'Algérie withdraws more than 70% of its renewable freshwater supply », « hydrogène vertrogen positioned as », « la longueur des barres reflètent l'importance relativegths show rank order » — et le pied de page ainsi que l'onglet Eau citaient une « RNV 2020 » alors que l'en-tête et la fiche datent tous deux la première revue algérienne de 2019."
      },
      resolution: {
        en: "These are artefacts of a partial find-and-replace over an English template, and a mis-dated citation. Every string in this file exists as a matched {en, fr} pair generated from a single source, so a language cannot leak across, and the review cycle is recorded once (2019 → 2026) rather than inconsistently in three places.",
        fr: "Ce sont les séquelles d'un rechercher-remplacer partiel sur un gabarit anglais, et d'une citation mal datée. Chaque chaîne de ce fichier existe sous forme de paire {en, fr} appariée, issue d'une source unique : une langue ne peut plus fuir dans l'autre, et le cycle de revue est consigné une seule fois (2019 → 2026) au lieu de l'être de façon divergente à trois endroits."
      } }
  ]
});
