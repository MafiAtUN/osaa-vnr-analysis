/* Cameroun — RNV 2022 → 2026. Fiche source rédigée en français : le `fr` est le
   texte source, l'`en` en est la traduction.
   Fact-checké contre data/factsheets.txt (l. 329–407), l'ancien tableau de bord
   « Cameroon Dashboard.dc.html », la Banque mondiale (WDI), le FMI, la BAD
   (Perspectives économiques 2025) et l'INS Cameroun. Voir `factcheck` en bas. */
window.VNR.register({
  slug: "cameroon",
  iso: "CM",
  name: { en: "Cameroon", fr: "Cameroun" },
  region: "central",
  vnrPrev: 2022,
  vnrCycles: [2022, 2026],
  langs: ["FR", "EN"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/cameroon.pdf",

  tagline: {
    fr: "La Stratégie nationale de développement (SND30) au service d'une croissance inclusive et durable.",
    en: "The National Development Strategy (SND30) in the service of inclusive and sustainable growth."
  },

  themes: [
    { sdg: 6,
      title: { fr: "Accès à l'eau en progrès", en: "Water Access Improving" },
      text: {
        fr: "L'accès à l'eau potable s'améliore, mais l'assainissement reste confronté à des défis structurels nécessitant davantage d'investissements.",
        en: "Access to drinking water is improving, but sanitation still faces structural challenges that call for greater investment."
      } },
    { sdg: 7,
      title: { fr: "Transition énergétique", en: "Energy Transition" },
      text: {
        fr: "Des progrès sur l'accès à l'électricité et la cuisson propre ; la part élevée des renouvelables constitue un atout pour la transition.",
        en: "Progress on electricity access and clean cooking; the high share of renewables is an asset for the transition."
      } },
    { sdg: 8,
      title: { fr: "Reprise et stabilité macroéconomique", en: "Recovery and Macroeconomic Stability" },
      text: {
        fr: "Après une contraction de 0,5 % en 2020, la croissance a atteint 3,9 % en 2025 et l'inflation a reculé de 6,3 % (2022) à 3,4 % (2025).",
        en: "After a contraction of 0.5% in 2020, growth reached 3.9% in 2025 and inflation fell from 6.3% (2022) to 3.4% (2025)."
      } },
    { sdg: 9,
      title: { fr: "Transformation structurelle", en: "Structural Transformation" },
      text: {
        fr: "Le Cameroun renforce les bases de sa transformation économique, malgré une contribution encore limitée de l'industrie manufacturière au PIB.",
        en: "Cameroon is strengthening the foundations of its economic transformation, despite manufacturing's still-limited contribution to GDP."
      } },
    { sdg: 13,
      title: { fr: "Résilience face aux chocs", en: "Resilience to Shocks" },
      text: {
        fr: "Face aux crises sanitaires, sécuritaires et climatiques, le Cameroun a démontré une résilience notable et renforce sa gestion des risques.",
        en: "In the face of health, security and climate crises, Cameroon has shown notable resilience and is strengthening its risk management."
      } },
    { sdg: 17,
      title: { fr: "SND30, cadre de référence", en: "SND30 as the Reference Framework" },
      text: {
        fr: "La SND30 (2020-2030) intègre les ODD comme cadre des politiques publiques pour une croissance inclusive, équitable et durable.",
        en: "The SND30 (2020–2030) embeds the SDGs as the framework for public policy, in the service of inclusive, equitable and sustainable growth."
      } }
  ],

  continuity: [
    { prev: { fr: "Développement inclusif et capital humain au sein de la SND30", en: "Inclusive development and human capital within the SND30" },
      status: "sustained",
      now: { fr: "SND30 & croissance inclusive", en: "SND30 & inclusive growth" } },
    { prev: { fr: "Conjoncture post-COVID difficile", en: "A difficult post-COVID economic climate" },
      status: "evolved",
      now: { fr: "Croissance 3,9 %, inflation 3,4 %", en: "Growth 3.9%, inflation 3.4%" } },
    { prev: { fr: "Éducation & enseignement à distance", en: "Education & distance learning" },
      status: "evolved",
      now: { fr: "Eau potable & assainissement en progrès", en: "Drinking water & sanitation improving" } },
    { prev: { fr: "Capital humain de qualité", en: "Quality human capital" },
      status: "sustained",
      now: { fr: "Transition énergétique & cuisson propre", en: "Energy transition & clean cooking" } },
    { prev: { fr: "Suivi participatif des cibles ODD", en: "Participatory monitoring of the SDG targets" },
      status: "evolved",
      now: { fr: "Transformation structurelle de l'économie", en: "Structural transformation of the economy" } }
  ],

  concepts: {
    caption: {
      fr: "Le Cameroun articule sa revue autour de la croissance, de l'énergie et de la transformation structurelle.",
      en: "Cameroon builds its review around growth, energy and structural transformation."
    },
    items: [
      { label: { fr: "croissance & macro", en: "growth & macroeconomy" }, value: 11 },
      { label: { fr: "gouvernance & SND30", en: "governance & SND30" }, value: 7 },
      { label: { fr: "énergie", en: "energy" }, value: 7 },
      { label: { fr: "climat & transition", en: "climate & transition" }, value: 6 },
      { label: { fr: "industrialisation", en: "industrialization" }, value: 5 },
      { label: { fr: "infrastructure", en: "infrastructure" }, value: 4 },
      { label: { fr: "investissement", en: "investment" }, value: 4 },
      { label: { fr: "services sociaux", en: "social services" }, value: 4 },
      { label: { fr: "partenariats", en: "partnerships" }, value: 3 }
    ]
  },

  indicators: [
    { id: "gdp_growth", sdg: 8,
      label: { fr: "Croissance du PIB réel, 2025", en: "Real GDP growth, 2025" },
      value: 3.9, unit: "%",
      note: {
        fr: "Chiffre national repris dans la fiche RNV 2026. La BAD situe la croissance 2025 à 3,7 % et retient 3,9 % comme moyenne 2025-2028 ; l'ordre de grandeur est le même, la reprise est réelle mais reste en deçà de la cible de 6,6 % de la SND30.",
        en: "The national figure carried in the 2026 VNR factsheet. The AfDB puts 2025 growth at 3.7% and treats 3.9% as the 2025–2028 average; the order of magnitude is the same. The recovery is real but still falls short of the SND30's 6.6% target."
      },
      source: "RNV 2026 · BAD, Perspectives économiques au Cameroun (2025)" },
    { id: "inflation", sdg: 8,
      label: { fr: "Inflation, moyenne annuelle 2025", en: "Inflation, 2025 annual average" },
      value: 3.4, unit: "%",
      note: {
        fr: "Contre 6,3 % en 2022. Le pic n'a pas été atteint en 2022 mais en 2023, à 7,4 % (INS Cameroun) ; l'inflation revient aujourd'hui vers le plafond de convergence de la CEMAC (3 %).",
        en: "Down from 6.3% in 2022. The peak was not 2022 but 2023, at 7.4% (INS Cameroon); inflation is now returning towards the CEMAC convergence ceiling of 3%."
      },
      source: "RNV 2026 · INS Cameroun · BAD (2025)" },
    { id: "elec_national", sdg: 7,
      label: { fr: "Accès à l'électricité, ensemble du pays", en: "Electricity access, national" },
      value: 72, unit: "%",
      note: {
        fr: "Toutes sources confondues (réseau, mini-réseaux, solaire hors réseau), contre 41 % en 2000. À ne pas confondre avec le raccordement rural.",
        en: "All sources combined (grid, mini-grid, off-grid solar), up from 41% in 2000. Not to be confused with rural access."
      },
      source: "Banque mondiale, WDI 2023 · Base de données ODD des Nations Unies, indicateur 7.1.1" },
    { id: "elec_rural", sdg: 7,
      label: { fr: "Accès à l'électricité en milieu rural", en: "Rural electricity access" },
      value: 26, unit: "%",
      note: {
        fr: "Le chiffre décisif, et le plus souvent omis : environ un rural sur quatre a l'électricité, contre près de trois urbains sur quatre à l'échelle nationale.",
        en: "The decisive figure, and the one most often left out: roughly one rural resident in four has electricity, against almost three in four nationally."
      },
      source: "Banque mondiale, WDI 2023 (EG.ELC.ACCS.RU.ZS)" },
    { id: "water_basic", sdg: 6,
      label: { fr: "Accès à un service élémentaire d'eau potable", en: "Basic drinking-water service" },
      value: 71.4, unit: "%",
      note: {
        fr: "Contre 55,8 % en 2000. Le cycle JMP 2022 de l'OMS/UNICEF donne environ 70 % pour le Cameroun, ce qui corrobore l'ordre de grandeur.",
        en: "Up from 55.8% in 2000. The WHO/UNICEF JMP 2022 round gives around 70% for Cameroon, corroborating the order of magnitude."
      },
      source: "RNV 2026 · Programme commun OMS/UNICEF (JMP) · Base de données ODD, indicateur 6.1.1" },
    { id: "sanitation_basic", sdg: 6,
      label: { fr: "Accès à un service élémentaire d'assainissement", en: "Basic sanitation service" },
      value: 47.1, unit: "%",
      note: {
        fr: "Moins d'un Camerounais sur deux. C'est le « défi structurel » que la fiche RNV désigne explicitement, et l'écart avec l'eau (71,4 %) est de 24 points.",
        en: "Fewer than one Cameroonian in two. This is the \"structural challenge\" the VNR factsheet names explicitly, and the gap with water (71.4%) is 24 points."
      },
      source: "RNV 2026 · Programme commun OMS/UNICEF (JMP) · Base de données ODD, indicateur 6.2.1" },
    { id: "manuf_gdp", sdg: 9,
      label: { fr: "Valeur ajoutée manufacturière, en % du PIB", en: "Manufacturing value added, % of GDP" },
      value: 13.6, unit: "%",
      note: {
        fr: "La Banque mondiale donne 13,9 % pour 2024 : les deux sources concordent. La part est stable depuis deux décennies — c'est précisément ce que la fiche RNV appelle « une contribution encore limitée ».",
        en: "The World Bank gives 13.9% for 2024: the two sources agree. The share has been flat for two decades — exactly what the VNR factsheet calls a \"still-limited contribution\"."
      },
      source: "RNV 2026 · Banque mondiale, WDI 2024 (NV.IND.MANF.ZS) · Base de données ODD, indicateur 9.2.1" }
  ],

  charts: [
    { id: "inflation_path", type: "line", sdg: 8,
      title: { fr: "Inflation, moyenne annuelle, en %", en: "Inflation, annual average, %" },
      unit: "%",
      xLabel: { fr: "Année", en: "Year" },
      series: [
        { key: "cpi", label: { fr: "Inflation (IPC)", en: "Inflation (CPI)" },
          points: [{ x: "2022", y: 6.3 }, { x: "2023", y: 7.4 }, { x: "2024", y: 4.5 }, { x: "2025", y: 3.4 }] }
      ],
      insight: {
        fr: "La fiche résume l'épisode par « de 6,3 % à 3,4 % », ce qui laisse croire à une décrue continue. Elle ne l'a pas été : l'inflation a d'abord grimpé à 7,4 % en 2023 sous l'effet des prix alimentaires et énergétiques importés, avant de refluer à 4,5 % puis 3,4 %. Le choc cumulé sur 2022-2024 dépasse 19 % — les prix ne sont pas redescendus, seule leur progression a ralenti. C'est la désinflation, non la déflation, et le pouvoir d'achat perdu n'a pas été récupéré.",
        en: "The factsheet compresses the episode into \"6.3% down to 3.4%\", which reads like a steady decline. It was not: inflation first climbed to 7.4% in 2023 on imported food and energy prices, before easing to 4.5% and then 3.4%. Cumulative inflation over 2022–2024 exceeds 19% — prices have not come back down, only their rate of increase has slowed. This is disinflation, not deflation, and the purchasing power lost has not been recovered."
      },
      source: "INS Cameroun, notes de conjoncture sur l'inflation · BAD, Perspectives économiques (2025) · RNV 2026" },

    { id: "elec_gap", type: "gap", sdg: 7,
      title: { fr: "Accès à l'électricité : le chiffre national et le chiffre rural, 2023", en: "Electricity access: the national figure and the rural figure, 2023" },
      unit: "%",
      items: [
        { label: { fr: "Ensemble du pays", en: "National" }, value: 72, emphasis: false },
        { label: { fr: "Milieu rural", en: "Rural areas" }, value: 26, emphasis: true }
      ],
      insight: {
        fr: "Le Cameroun a gagné plus de trente points d'accès à l'électricité depuis 2000, et le mix reste très largement renouvelable — deux atouts que la SND30 revendique à juste titre. Mais la moyenne nationale de 72 % masque un pays coupé en deux : en milieu rural, l'accès plafonne autour de 26 %. Tant que la transition énergétique se mesure au chiffre national, elle se mesure surtout à l'électrification des villes.",
        en: "Cameroon has added more than thirty points of electricity access since 2000, and the generation mix remains overwhelmingly renewable — two assets the SND30 rightly claims. But the national average of 72% conceals a country split in two: in rural areas, access stalls at around 26%. As long as the energy transition is measured by the national figure, it is mostly measuring the electrification of the cities."
      },
      source: "Banque mondiale, WDI 2023 (EG.ELC.ACCS.ZS, EG.ELC.ACCS.RU.ZS) · Base de données ODD, indicateur 7.1.1" },

    { id: "wash_ladder", type: "gap", sdg: 6,
      title: { fr: "De l'eau à l'hygiène : trois marches, un décrochage", en: "From water to hygiene: three rungs, one drop" },
      unit: "%",
      items: [
        { label: { fr: "Service élémentaire d'eau potable", en: "Basic drinking-water service" }, value: 71.4, emphasis: false },
        { label: { fr: "Service élémentaire d'assainissement", en: "Basic sanitation service" }, value: 47.1, emphasis: false },
        { label: { fr: "Installations élémentaires de lavage des mains", en: "Basic handwashing facilities" }, value: 37.8, emphasis: true }
      ],
      insight: {
        fr: "L'eau progresse, l'assainissement suit mal, l'hygiène décroche. Ne montrer que le chiffre de l'eau — 71,4 %, en hausse de près de 16 points depuis 2000 — donnerait une image flatteuse et fausse. Le Cameroun ne prélève qu'environ 1,6 % de ses ressources en eau douce renouvelables : la contrainte n'est pas la ressource, elle est l'infrastructure et l'investissement. Dans une Année africaine de la gestion durable de l'eau, la marche à franchir pour le Cameroun est celle de l'assainissement.",
        en: "Water is advancing, sanitation is lagging, hygiene falls away. Showing the water figure alone — 71.4%, up nearly 16 points since 2000 — would give a flattering and false picture. Cameroon withdraws only about 1.6% of its renewable freshwater resources: the constraint is not the resource, it is infrastructure and investment. In an African Year of Sustainable Water Management, the rung Cameroon has to climb is sanitation."
      },
      source: "RNV 2026 · Programme commun OMS/UNICEF (JMP) · Base de données ODD, indicateurs 6.1.1 et 6.2.1" },

    { id: "iwrm", type: "line", sdg: 6,
      title: { fr: "Degré de mise en œuvre de la gestion intégrée des ressources en eau (GIRE), sur 100", en: "Degree of integrated water resources management (IWRM) implementation, out of 100" },
      unit: "/100",
      xLabel: { fr: "Année", en: "Year" },
      series: [
        { key: "iwrm", label: { fr: "Score GIRE", en: "IWRM score" },
          points: [{ x: "2017", y: 28 }, { x: "2023", y: 49 }] }
      ],
      insight: {
        fr: "Le score de gouvernance de l'eau a presque doublé en six ans, sans atteindre la moitié du barème. La question la plus sensible est transfrontalière : l'Extrême-Nord borde un lac Tchad qui se rétracte, avec pour conséquences des déplacements, l'insécurité alimentaire et des conflits d'usage. Le score progresse là où le Cameroun légifère et coopère ; il ne dit encore rien du robinet.",
        en: "The water-governance score has almost doubled in six years, without reaching half the scale. The hardest questions are transboundary: the Far North borders a shrinking Lake Chad, with displacement, food insecurity and conflict over water use as the consequences. The score rises where Cameroon legislates and cooperates; it still says nothing about the tap."
      },
      source: "Base de données ODD des Nations Unies, indicateur 6.5.1 (2017, 2023)" }
  ],

  instruments: [
    { name: { fr: "SND30 (2020-2030)", en: "SND30 (2020–2030)" },
      kicker: { fr: "cadre de référence unique", en: "the single reference framework" },
      text: {
        fr: "La Stratégie nationale de développement 2020-2030 est la décennie opérationnelle de la Vision 2035. Elle intègre les ODD et l'Agenda 2063 dans un cadre unique — le Cameroun ne tient pas de dispositif de suivi distinct — et s'organise autour de quatre piliers : transformation structurelle, capital humain, emploi et gouvernance. Le RNV 2026 en marque le point médian.",
        en: "The 2020–2030 National Development Strategy is the operational decade of Vision 2035. It embeds the SDGs and Agenda 2063 in a single framework — Cameroon runs no separate SDG tracker — and is organised around four pillars: structural transformation, human capital, employment and governance. The 2026 VNR marks its mid-point."
      },
      source: "RNV 2026 · Fiche RNV 2026" },
    { name: { fr: "Vision 2035", en: "Vision 2035" },
      kicker: { fr: "horizon d'émergence", en: "the emergence horizon" },
      text: {
        fr: "L'horizon générationnel : un pays émergent, démocratique et uni à l'horizon 2035, atteint par stratégies décennales successives — le DSCE pour 2010-2019, la SND30 pour 2020-2030. Chaque revue nationale volontaire lit les progrès du pays au regard de ce cadre long, et non d'un plan ODD séparé.",
        en: "The generational horizon: an emerging, democratic and united country by 2035, reached through successive ten-year strategies — the DSCE for 2010–2019, the SND30 for 2020–2030. Each voluntary national review reads national progress against this long framework rather than a separate SDG plan."
      },
      source: "RNV 2026" },
    { name: { fr: "Politique de substitution aux importations", en: "Import-substitution policy" },
      kicker: { fr: "« produire et consommer local »", en: "\"produce and consume local\"" },
      text: {
        fr: "Le pilier industriel de la SND30 : exigences de contenu local, structuration des chaînes de valeur agro-industrielles et financement des petits producteurs. C'est la réponse politique directe au constat de la fiche — une contribution encore limitée de l'industrie manufacturière au PIB — et elle ancre la seconde moitié de la stratégie.",
        en: "The industrial pillar of the SND30: local-content requirements, agro-industrial value-chain development and financing for small producers. It is the direct policy answer to the factsheet's own finding — manufacturing's still-limited contribution to GDP — and it anchors the second half of the strategy."
      },
      source: "RNV 2026" },
    { name: { fr: "Couverture santé universelle", en: "Universal health coverage" },
      kicker: { fr: "phase 1 lancée en 2023", en: "phase 1 launched in 2023" },
      text: {
        fr: "Le fer de lance du pilier capital humain : un régime de couverture santé universelle déployé par phases, la première ciblant les mères, les enfants de moins de cinq ans, la dialyse, le VIH et la tuberculose. C'est le principal véhicule d'extension de la protection sociale dans un pays où le socle reste étroit.",
        en: "The spearhead of the human-capital pillar: a universal health coverage scheme rolled out in phases, the first targeting mothers, children under five, dialysis, HIV and tuberculosis. It is the main vehicle for extending social protection in a country where the floor remains narrow."
      },
      source: "RNV 2026" },
    { name: { fr: "Décentralisation", en: "Decentralisation" },
      kicker: { fr: "Code général de 2019", en: "the 2019 General Code" },
      text: {
        fr: "Le Code général des collectivités territoriales décentralisées (2019) a consolidé la décentralisation : conseils régionaux élus depuis 2020, transferts aux communes, statut spécial pour les régions du Nord-Ouest et du Sud-Ouest. Il est à la fois la réponse de gouvernance à la crise anglophone et le mécanisme de territorialisation des ODD.",
        en: "The 2019 General Code of Decentralised Territorial Authorities consolidated decentralisation: regional councils elected since 2020, transfers to communes, and special status for the North-West and South-West regions. It is at once the governance answer to the anglophone crisis and the mechanism for localising the SDGs."
      },
      source: "RNV 2026 · Loi n° 2019/024 portant Code général des collectivités territoriales décentralisées" },
    { name: { fr: "Plan de reconstruction du Nord-Ouest et du Sud-Ouest", en: "North-West / South-West reconstruction plan" },
      kicker: { fr: "deux régions en crise", en: "two regions in crisis" },
      text: {
        fr: "Programme présidentiel de reconstruction et de développement pour les régions où le conflit a déplacé des communautés et détruit des infrastructures : écoles, centres de santé et marchés, restauration des moyens de subsistance et cohésion sociale. C'est le volet « ne laisser personne de côté » que le Cameroun ne peut pas traiter comme un chapitre technique.",
        en: "A presidential reconstruction and development programme for the regions where conflict has displaced communities and destroyed infrastructure: schools, health centres and markets, livelihood restoration and social cohesion. It is the \"leave no one behind\" chapter Cameroon cannot treat as a technical one."
      },
      source: "RNV 2026" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        fr: "La fiche RNV 2026 et l'ancien tableau de bord affirment tous deux « une contraction de 0,5 % en 2020 ».",
        en: "Both the 2026 VNR factsheet and the old dashboard state \"a contraction of 0.5% in 2020\"."
      },
      resolution: {
        fr: "Les données de la Banque mondiale (NY.GDP.MKTP.KD.ZG) et du FMI donnent au Cameroun une croissance réelle d'environ +0,5 % en 2020 : le pays n'est pas entré en récession, il a évité de justesse la contraction — un fait remarquable dans une année où la quasi-totalité de l'Afrique subsaharienne s'est contractée. Le signe a très probablement été inversé lors de la mise en page. Le PIB par habitant, lui, a bien reculé (croissance démographique d'environ 2,6 %). Le texte de la fiche est conservé tel quel, car il est la source ; le chiffre n'est pas repris comme point de série et n'est pas tracé.",
        en: "World Bank (NY.GDP.MKTP.KD.ZG) and IMF data put Cameroon's real growth at roughly +0.5% in 2020: the country did not enter recession, it narrowly avoided contraction — remarkable in a year when almost all of sub-Saharan Africa shrank. The sign was in all likelihood flipped in layout. GDP per capita did fall (population growth of about 2.6%). The factsheet wording is preserved because it is the source; the figure is not carried into any data series and is not plotted."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Le graphique « Adultes titulaires d'un compte financier, 2011-2024 » ne trace pas l'inclusion financière : ses points sont des recettes publiques (13,4 % du PIB en 2015 → 17,7 % en 2024 ; 7,8 % → 10,6 % pour les recettes levées en interne), son axe est gradué de 0 à 20 % et sa légende annonce « National » et « Rural ».",
        en: "The chart \"Adults with a financial account, 2011–2024\" does not plot financial inclusion: its points are government revenues (13.4% of GDP in 2015 → 17.7% in 2024; 7.8% → 10.6% for domestically raised revenue), its axis runs 0–20% and its legend reads \"National\" and \"Rural\"."
      },
      resolution: {
        fr: "Titre, données, axe et légende désignaient quatre choses différentes. Ces séries de recettes sont par ailleurs identiques, chiffre pour chiffre, à celles du tableau de bord de la Guinée (voir ci-dessous) : ce sont des données de gabarit, non des données camerounaises. Le graphique est supprimé, et aucun chiffre de recettes publiques n'est repris tant qu'il n'est pas traçable à une source camerounaise.",
        en: "Title, data, axis and legend named four different things. These revenue series are moreover identical, digit for digit, to those in Guinea's dashboard (see below): they are template data, not Cameroonian data. The chart is removed, and no public-revenue figure is carried over until it can be traced to a Cameroonian source."
      } },
    { severity: "contradiction",
      issue: {
        fr: "L'ancien tableau de bord donnait l'accès rural à l'électricité à 42,7 % (et l'urbain à « ~96 % »), sans source vérifiable.",
        en: "The old dashboard put rural electricity access at 42.7% (and urban at \"~96%\"), with no verifiable source."
      },
      resolution: {
        fr: "La Banque mondiale (EG.ELC.ACCS.RU.ZS) situe l'accès rural du Cameroun à environ 26 % en 2023, pour un accès national de 72 % — chiffre que le tableau de bord reprenait par ailleurs correctement. Le 42,7 % surestime l'électrification rurale de seize points et atténue précisément l'écart que le graphique était censé montrer. Le chiffre de la Banque mondiale est retenu.",
        en: "The World Bank (EG.ELC.ACCS.RU.ZS) puts Cameroon's rural access at about 26% in 2023, against a national figure of 72% — which the dashboard otherwise reported correctly. The 42.7% overstates rural electrification by sixteen points and softens precisely the gap the chart was meant to show. The World Bank figure is used."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Sept graphiques du tableau de bord camerounais portaient une légende sans rapport avec leurs données, résidu du gabarit dont les tableaux de bord ont été clonés : « Eau sécurisée (%) » sur la série d'accès rural à l'électricité ; « Croissance du PIB (%) » et « Inflation (%) » sur la dette extérieure ; « Recettes fiscales (% du PIB) » sur la valeur ajoutée manufacturière (panneau ODD 9) ; « Part recettes propres (%) » sur la population des quartiers informels (panneau ODD 11) ; « Recettes internes (%) » et « Financement externe (%) » sur la dette extérieure (section Dette et revenus) ; « Recettes nationales (%) » et « Financement externe (%) » sur un graphique intitulé « Inflation maîtrisée — 2022-2025 » qui traçait en réalité des recettes ; « Priorités d'investissement (rang) » sur le score GIRE, gradué sur 100.",
        en: "Seven charts in the Cameroon dashboard carried a legend unrelated to their data — leftovers from the template the dashboards were cloned from: \"Safe water (%)\" over the rural electricity-access series; \"GDP growth (%)\" and \"Inflation (%)\" over external debt; \"Tax revenue (% of GDP)\" over manufacturing value added (SDG 9 panel); \"Own-revenue share (%)\" over informal-settlement population (SDG 11 panel); \"Domestic revenue (%)\" and \"External financing (%)\" over external debt (Debt and revenue section); \"Domestic revenue (%)\" and \"External financing (%)\" over a chart titled \"Inflation contained — 2022–2025\" that in fact plotted revenues; and \"Investment priorities (rank)\" over the IWRM score, which is graded out of 100."
      },
      resolution: {
        fr: "Aucune de ces légendes ne décrivait la série qu'elle surmontait, et plusieurs affichaient une unité que le graphique ne portait pas. Toutes les étiquettes sont désormais générées depuis la couche de données bilingue : un graphique ne peut plus afficher une légende, une unité ou une langue qui ne correspond pas à ses données.",
        en: "None of these legends described the series it sat on, and several announced a unit the chart did not carry. All labels are now generated from the bilingual data layer, so a chart can no longer display a legend, a unit or a language that does not match its data."
      } },
    { severity: "contradiction",
      issue: {
        fr: "Le panneau ODD 11 annonçait « 32,7 % de la population urbaine en établissements informels (2024) » tandis que son propre point de données indiquait « 34,3 % (2020, indicateur 11.1.1) ».",
        en: "The SDG 11 panel headlined \"32.7% of the urban population in informal settlements (2024)\" while its own data point read \"34.3% (2020, indicator 11.1.1)\"."
      },
      resolution: {
        fr: "Deux millésimes différents présentés comme un seul chiffre, et un panneau ODD 11 qui ne correspond à aucun des six thèmes de la fiche du Cameroun (ODD 6, 7, 8, 9, 13 et 17). Le panneau est retiré : ni la fiche ni une source vérifiable ne permettent de trancher entre 32,7 % et 34,3 %.",
        en: "Two different vintages presented as one figure, in an SDG 11 panel that matches none of the six themes on Cameroon's factsheet (SDGs 6, 7, 8, 9, 13 and 17). The panel is removed: neither the factsheet nor a verifiable source settles 32.7% against 34.3%."
      } },
    { severity: "mislabel",
      issue: {
        fr: "La fiche résume l'inflation par « de 6,3 % (2022) à 3,4 % (2025) », ce qui se lit comme une décrue continue.",
        en: "The factsheet summarises inflation as \"from 6.3% (2022) to 3.4% (2025)\", which reads as a steady decline."
      },
      resolution: {
        fr: "Les deux chiffres sont exacts (INS Cameroun ; BAD 2025) mais la trajectoire ne l'est pas : l'inflation a culminé à 7,4 % en 2023 avant de revenir à 4,5 % (2024) puis 3,4 % (2025). Le graphique d'inflation trace désormais les quatre années, pic compris.",
        en: "Both figures are correct (INS Cameroon; AfDB 2025) but the path is not: inflation peaked at 7.4% in 2023 before falling back to 4.5% (2024) and 3.4% (2025). The inflation chart now plots all four years, peak included."
      } },
    { severity: "unverified",
      issue: {
        fr: "L'ancien tableau de bord chiffrait les engagements des partenaires de financement à « 1 507 171 475 $ jusqu'en 2035 » et affichait une liste sectorielle (Emplois décents ODD 8, Industrialization ODD 9, Energy ODD 7, Health ODD 3, Hunger ODD 2, Education ODD 4, Poverty ODD 1) attribuée au « Graphique 74, p. 122 ».",
        en: "The old dashboard put financing-partner commitments at \"$1,507,171,475 to 2035\" and displayed a sector list (Decent jobs SDG 8, Industrialization SDG 9, Energy SDG 7, Health SDG 3, Hunger SDG 2, Education SDG 4, Poverty SDG 1) attributed to \"Figure 74, p. 122\"."
      },
      resolution: {
        fr: "Le montant au dollar près, la liste sectorielle et la citation de page sont strictement identiques dans le tableau de bord de la Guinée — deux pays, un seul chiffre. Un total présenté à l'unité près sans intervalle ni ventilation ne peut pas être vérifié. L'ensemble du bloc de financement est supprimé plutôt que reconduit sous une fausse précision.",
        en: "The dollar-exact total, the sector list and the page citation are strictly identical in Guinea's dashboard — two countries, one number. A total presented to the dollar with no range and no breakdown cannot be verified. The whole financing block is dropped rather than carried forward under false precision."
      } },
    { severity: "corrected",
      issue: {
        fr: "Le tableau de bord annonçait « Troisième RNV » et « 3 cycles RNV : 2019, 2022, 2026 » dans son corps, mais citait en pied de page « Deuxième Revue nationale volontaire 2026 » et « Première Revue nationale volontaire 2020 ». Il renvoyait par ailleurs à un « RNV 2020, p. 85-86 » inexistant.",
        en: "The dashboard announced \"Third VNR\" and \"3 VNR cycles: 2019, 2022, 2026\" in its body, but cited \"Second Voluntary National Review 2026\" and \"First Voluntary National Review 2020\" in its footer. It also referenced a non-existent \"VNR 2020, pp. 85–86\"."
      },
      resolution: {
        fr: "La fiche ne nomme que deux cycles, 2022 et 2026, et c'est ce que retient cette page. Les citations « p. 2627-2631 » et autres numéros de page à quatre chiffres relevés dans la même famille de tableaux de bord sont des décalages d'extraction, non des références : toutes les citations ont été ramenées au document et, lorsqu'elle est connue, à la source statistique.",
        en: "The factsheet names only two cycles, 2022 and 2026, and that is what this page carries. The four-digit page citations found across this family of dashboards are extraction offsets, not references: all citations have been reduced to the document and, where known, the statistical source."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Le tableau de bord francophone était parsemé d'anglais non traduit — « Energy SDG 7 », « Health SDG 3 », « Lagging », « Strong », « 4 pillars », « Domestic taxes », « SME credit », « already achieved. » — et d'au moins une phrase mêlant les deux langues : « la couverture de protection sociale reste faible à ~10 % of the population ». Un paragraphe apparaissait dupliqué et tronqué (« …atout majeur de transition.ie cette base renouvelable d'atout majeur de transition.ase a major transition asset… »). La liste des priorités sectorielles contenait deux fois l'énergie (« Accès à l'énergie SDG 7 » et « Energy SDG 7 »).",
        en: "The French-language dashboard was littered with untranslated English — \"Energy SDG 7\", \"Health SDG 3\", \"Lagging\", \"Strong\", \"4 pillars\", \"Domestic taxes\", \"SME credit\", \"already achieved.\" — and at least one sentence mixing both languages: \"la couverture de protection sociale reste faible à ~10 % of the population\". One paragraph appeared duplicated and truncated. The sector-priority list carried energy twice (\"Accès à l'énergie SDG 7\" and \"Energy SDG 7\")."
      },
      resolution: {
        fr: "Le Cameroun a soumis en français : le français est désormais la langue source de chaque chaîne et l'anglais en est la traduction, sans exception. Le texte dupliqué et l'entrée en double ont disparu avec le bloc qui les portait.",
        en: "Cameroon submitted in French: French is now the source language of every string and English its translation, without exception. The duplicated text and the duplicate entry disappeared with the block that carried them."
      } }
  ]
});
