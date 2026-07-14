/* Guinée-Bissau — RNV 2022 → 2026. Fiche source rédigée en FRANÇAIS ; l'anglais est
   ici une traduction. Vérifiée contre data/factsheets.txt (lignes 640–708), le rapport
   FMI au titre de l'article IV 2025, la Banque mondiale, la BAD et le système national
   d'aires protégées.

   AVERTISSEMENT MAJEUR : la fiche de la Guinée-Bissau contient une erreur de
   copier-coller — son texte ODD 8 décrit la Vision 2040 et le Programme Simandou 2040
   de la GUINÉE, pas de la Guinée-Bissau. Le thème ODD 8 a été réécrit sur la base du
   récit macroéconomique réel du pays. Voir `factcheck`. */
window.VNR.register({
  slug: "guinea-bissau",
  iso: "GW",
  name: { en: "Guinea-Bissau", fr: "Guinée-Bissau" },
  region: "west",
  vnrPrev: 2022,
  vnrCycles: [2022, 2026],
  langs: ["FR", "PT"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/guinea-bissau.pdf",

  tagline: {
    fr: "Le Plan national de développement 2026-2035 : un pays pacifique, bien gouverné et prospère d'ici 2035.",
    en: "The National Development Plan 2026–2035: a peaceful, well-governed and prosperous country by 2035."
  },

  themes: [
    { sdg: 4,
      title: { fr: "Investir dans le capital humain", en: "Investing in Human Capital" },
      text: {
        fr: "Le capital humain, la recherche scientifique et l'innovation technologique sont au cœur de la croissance endogène visée par le PND 2026-2035.",
        en: "Human capital, scientific research and technological innovation are at the heart of the endogenous growth the NDP 2026–2035 is aiming for."
      } },
    { sdg: 7,
      title: { fr: "Intégration énergétique régionale", en: "Regional Energy Integration" },
      text: {
        fr: "Amélioration significative des indicateurs énergétiques grâce aux projets d'intégration hydroélectrique régionale de l'Organisation pour la mise en valeur du fleuve Gambie (OMVG).",
        en: "A significant improvement in energy indicators, driven by the regional hydropower integration projects of the Gambia River Basin Development Organization (OMVG)."
      } },
    { sdg: 8,
      title: { fr: "Stabilisation macroéconomique", en: "Macroeconomic Stabilisation" },
      text: {
        fr: "La désinflation — de 7,2 % en 2023 à 3,8 % en 2024 — et une croissance maintenue autour de 5 % dans le cadre monétaire de l'UEMOA constituent la base sur laquelle le PND 2026-2035 est bâti ; la mobilisation des recettes intérieures reste la contrainte à lever.",
        en: "Disinflation — from 7.2% in 2023 to 3.8% in 2024 — and growth held near 5% within the WAEMU monetary framework are the foundation the NDP 2026–2035 is built on; mobilising domestic revenue remains the constraint to be lifted."
      } },
    { sdg: 9,
      title: { fr: "Infrastructures et diversification", en: "Infrastructure & Diversification" },
      text: {
        fr: "Réseau routier de 2 755 km (27,5 % asphalté) et modernisation de l'unique aéroport international, appuyant la diversification économique.",
        en: "A 2,755 km road network (27.5% paved) and the modernisation of the country's only international airport, supporting economic diversification."
      } },
    { sdg: 13,
      title: { fr: "Résilience climatique et biodiversité", en: "Climate Resilience & Biodiversity" },
      text: {
        fr: "Plus de 26,3 % du territoire est protégé ; la résilience face au changement climatique et aux catastrophes est une priorité du PND.",
        en: "More than 26.3% of the territory is under protection; resilience to climate change and disasters is a priority of the NDP."
      } },
    { sdg: 16,
      title: { fr: "Gouvernance et réformes", en: "Governance & Reform" },
      text: {
        fr: "Réformes ciblées de la gouvernance et du système fiscal ; le PND vise un pays pacifique, bien gouverné et prospère d'ici 2035.",
        en: "Targeted reforms of governance and the tax system; the NDP aims for a peaceful, well-governed and prosperous country by 2035."
      } }
  ],

  continuity: [
    { prev: { fr: "Paix, capital naturel et développement humain inclusif", en: "Peace, natural capital and inclusive human development" },
      status: "sustained",
      now: { fr: "PND 2026-2035 et Vision 2035", en: "NDP 2026–2035 & Vision 2035" } },
    { prev: { fr: "Financement, défi majeur du développement", en: "Financing, the central development challenge" },
      status: "evolved",
      now: { fr: "Stabilisation macroéconomique et croissance", en: "Macroeconomic stabilisation & growth" } },
    { prev: { fr: "Investissements dans le secteur productif", en: "Investment in the productive sector" },
      status: "evolved",
      now: { fr: "Intégration hydroélectrique (OMVG)", en: "Hydropower integration (OMVG)" } },
    { prev: { fr: "Santé, éducation et capital humain", en: "Health, education and human capital" },
      status: "sustained",
      now: { fr: "Capital humain et innovation au cœur du PND", en: "Human capital & innovation at the core of the NDP" } },
    { prev: { fr: "Planification durable et résilience climatique", en: "Sustainable planning and climate resilience" },
      status: "evolved",
      now: { fr: "Cadre de suivi à renforcer", en: "A monitoring framework still to be strengthened" } }
  ],

  concepts: {
    caption: {
      fr: "La Guinée-Bissau articule sa revue autour de la croissance, du capital humain et du climat.",
      en: "Guinea-Bissau builds its review around growth, human capital and climate."
    },
    items: [
      { label: { fr: "climat et biodiversité", en: "climate & biodiversity" }, value: 10 },
      { label: { fr: "capital humain", en: "human capital" }, value: 9 },
      { label: { fr: "croissance et PIB", en: "growth & GDP" }, value: 9 },
      { label: { fr: "données et suivi", en: "data & monitoring" }, value: 7 },
      { label: { fr: "financement", en: "financing" }, value: 7 },
      { label: { fr: "gouvernance", en: "governance" }, value: 6 },
      { label: { fr: "diversification", en: "diversification" }, value: 5 },
      { label: { fr: "infrastructure", en: "infrastructure" }, value: 3 },
      { label: { fr: "investissement", en: "investment" }, value: 2 }
    ]
  },

  indicators: [
    { id: "protected", sdg: 13,
      label: { fr: "Territoire national sous protection", en: "National territory under protection" },
      value: 26.3, unit: "%",
      note: { fr: "Système national d'aires protégées : 13,9 % terrestre et 12,4 % marin. À ne pas confondre avec la couverture des zones clés pour la biodiversité, bien plus élevée.",
              en: "The national protected-area system: 13.9% terrestrial and 12.4% marine. Not to be confused with coverage of Key Biodiversity Areas, which is far higher." },
      source: "Fiche RNV 2026 · Système national d'aires protégées (IBAP)" },
    { id: "elec", sdg: 7,
      label: { fr: "Accès à l'électricité, national", en: "Access to electricity, national" },
      value: 43.7, unit: "%",
      note: { fr: "Contre 37,4 % en 2022. La Banque mondiale relève 40,5 % en 2023, cohérent avec cette trajectoire. À distinguer de l'accès rural, qui reste à 24,9 %.",
              en: "Up from 37.4% in 2022. The World Bank records 40.5% for 2023, consistent with this trajectory. Distinct from rural access, which remains at 24.9%." },
      source: "Base de données ODD des Nations Unies, indicateur 7.1.1" },
    { id: "roads_paved", sdg: 9,
      label: { fr: "Part bitumée du réseau routier", en: "Share of the road network that is paved" },
      value: 27.5, unit: "%",
      note: { fr: "Sur un réseau que la fiche établit à 2 755 km, soit environ 758 km bitumés. La part est corroborée par des sources externes ; la longueur du réseau ne l'est pas.",
              en: "On a network the factsheet puts at 2,755 km — roughly 758 km paved. The share is corroborated by external sources; the network length is not." },
      source: "Fiche RNV 2026" },
    { id: "water_basic", sdg: 6,
      label: { fr: "Accès à l'eau potable de base", en: "Access to basic drinking water" },
      value: 52.6, unit: "%",
      note: { fr: "Le niveau « géré en toute sécurité » n'est que de 24,0 %. L'eau de base et l'eau gérée en toute sécurité sont deux indicateurs distincts et ne doivent pas être employés l'un pour l'autre.",
              en: "The \"safely managed\" level is only 24.0%. Basic water and safely managed water are two distinct indicators and must not be used for one another." },
      source: "Base de données ODD des Nations Unies, indicateurs 6.1.1 et 6.2.1" },
    { id: "inflation", sdg: 8,
      label: { fr: "Inflation, moyenne annuelle (2024)", en: "Inflation, annual average (2024)" },
      value: 3.8, unit: "%",
      note: { fr: "Contre 7,2 % en 2023, sous le plafond de convergence de 3 % de l'UEMOA en fin de période. Le FMI projette environ 2 % en 2025.",
              en: "Down from 7.2% in 2023, approaching WAEMU's 3% convergence ceiling. The IMF projects around 2% for 2025." },
      source: "FMI, consultation au titre de l'article IV 2025 (Rapport pays 25/168)" },
    { id: "debt", sdg: 17,
      label: { fr: "Dette publique, en % du PIB", en: "Public debt, % of GDP" },
      value: 82.3, unit: "% du PIB",
      note: { fr: "Reflète des besoins de financement élevés et le durcissement des conditions sur le marché régional. À distinguer de la dette extérieure, mesurée en % du RNB.",
              en: "Reflects elevated financing needs and tighter conditions on the regional market. Distinct from external debt, which is measured as a share of GNI." },
      source: "FMI, consultation au titre de l'article IV 2025 · Banque mondiale" }
  ],

  charts: [
    { id: "protected", type: "gap", sdg: 13,
      title: { fr: "Aires protégées, en % du territoire national", en: "Protected areas, % of national territory" },
      unit: "%",
      items: [
        { label: { fr: "Aires protégées terrestres", en: "Terrestrial protected areas" }, value: 13.9, emphasis: false },
        { label: { fr: "Aires protégées marines", en: "Marine protected areas" }, value: 12.4, emphasis: false },
        { label: { fr: "Total du territoire protégé", en: "Total territory protected" }, value: 26.3, emphasis: true }
      ],
      insight: {
        fr: "Ce qui rend le chiffre de 26,3 % remarquable, c'est sa composition : près de la moitié de la protection est marine. Pour un pays dont l'archipel des Bijagós est classé réserve de biosphère de l'UNESCO, le capital naturel est autant maritime que terrestre — et c'est précisément ce que masque la présentation d'un chiffre unique. C'est aussi ce que masquait l'ancien tableau de bord, qui annonçait 59,5 % de « territoire protégé » : un chiffre qui mesure en réalité la couverture des zones clés pour la biodiversité, et non la part du territoire national.",
        en: "What makes the 26.3% figure remarkable is its composition: nearly half of the protection is marine. For a country whose Bijagós Archipelago is a UNESCO Biosphere Reserve, natural capital is as much maritime as terrestrial — and that is exactly what a single headline number hides. It is also what the old dashboard hid when it announced 59.5% of \"protected territory\": a figure that actually measures coverage of Key Biodiversity Areas, not the share of the national territory."
      },
      source: "Fiche RNV 2026 · Système national d'aires protégées (IBAP)" },

    { id: "elec_gap", type: "gap", sdg: 7,
      title: { fr: "Accès à l'électricité : le réseau régional n'a pas atteint les ménages ruraux, 2024", en: "Access to electricity: the regional grid has not reached rural households, 2024" },
      unit: "%",
      items: [
        { label: { fr: "Accès urbain", en: "Urban access" }, value: 65.6, emphasis: false },
        { label: { fr: "Accès national", en: "National access" }, value: 43.7, emphasis: false },
        { label: { fr: "Accès rural", en: "Rural access" }, value: 24.9, emphasis: true }
      ],
      insight: {
        fr: "L'accès national est passé de 37,4 % à 43,7 % en deux ans, porté par l'intégration hydroélectrique de l'OMVG que la fiche met en avant. Mais l'intégration régionale relie des réseaux, pas des ménages : les trois quarts de la population rurale demeurent sans électricité, et la cuisson propre reste quasi inexistante. Citer le seul chiffre national de 43,7 % donnerait de la trajectoire une image que la géographie de l'accès ne soutient pas.",
        en: "National access rose from 37.4% to 43.7% in two years, driven by the OMVG hydropower integration the factsheet foregrounds. But regional integration connects grids, not households: three-quarters of the rural population remain without electricity, and clean cooking is close to non-existent. Quoting the national 43.7% alone would give the trajectory a shape the geography of access does not support."
      },
      source: "Base de données ODD des Nations Unies, indicateur 7.1.1 · Banque mondiale" },

    { id: "inflation", type: "line", sdg: 8,
      title: { fr: "Inflation, moyenne annuelle, en %", en: "Inflation, annual average, %" },
      unit: "%",
      xLabel: { fr: "Année", en: "Year" },
      series: [
        { key: "cpi", label: { fr: "Inflation (moyenne annuelle)", en: "Inflation (annual average)" },
          points: [
            { x: "2023", y: 7.2 },
            { x: "2024", y: 3.8 },
            { x: "2025", y: 2.0 }
          ] }
      ],
      insight: {
        fr: "C'est la stabilisation macroéconomique dont la fiche aurait dû parler sous l'ODD 8. L'inflation a été ramenée de 7,2 % à 3,8 % en une seule année, et le FMI la projette autour de 2 % en 2025 — sous le plafond de convergence de 3 % de l'UEMOA. La Guinée-Bissau n'a pas de politique monétaire propre : l'ancrage au franc CFA fait de la discipline budgétaire et de la mobilisation des recettes les seuls leviers réellement disponibles. La désinflation est donc un résultat budgétaire autant que monétaire.",
        en: "This is the macroeconomic stabilisation the factsheet should have described under SDG 8. Inflation was brought down from 7.2% to 3.8% in a single year, and the IMF projects around 2% for 2025 — below WAEMU's 3% convergence ceiling. Guinea-Bissau has no monetary policy of its own: the CFA franc peg makes fiscal discipline and revenue mobilisation the only levers genuinely available. The disinflation is therefore a fiscal result as much as a monetary one."
      },
      source: "FMI, consultation au titre de l'article IV 2025 (Rapport pays 25/168)" },

    { id: "wash", type: "gap", sdg: 6,
      title: { fr: "Eau et assainissement : trois mesures souvent confondues, 2024", en: "Water and sanitation: three measures often confused, 2024" },
      unit: "%",
      items: [
        { label: { fr: "Eau potable de base", en: "Basic drinking water" }, value: 52.6, emphasis: false },
        { label: { fr: "Assainissement de base", en: "Basic sanitation" }, value: 28.9, emphasis: false },
        { label: { fr: "Eau gérée en toute sécurité", en: "Safely managed drinking water" }, value: 24.0, emphasis: true }
      ],
      insight: {
        fr: "La Guinée-Bissau est l'un des pays les plus abondants en eau d'Afrique de l'Ouest — les bassins du Geba, du Cacheu et du Corubal font que le stress hydrique y est quasi nul. Le déficit n'est donc pas celui de la ressource mais celui du service : à peine un quart de la population dispose d'une eau gérée en toute sécurité, et l'assainissement de base plafonne à moins de 29 %. Dans un pays où la ressource est là, l'écart entre 52,6 % et 24,0 % est un problème d'infrastructure et d'institutions, pas d'hydrologie.",
        en: "Guinea-Bissau is among the most water-abundant countries in West Africa — the Geba, Cacheu and Corubal basins leave water stress close to zero. The deficit is therefore not one of resource but of service: barely a quarter of the population has safely managed water, and basic sanitation stalls below 29%. In a country where the resource is present, the distance between 52.6% and 24.0% is a problem of infrastructure and institutions, not of hydrology."
      },
      source: "Base de données ODD des Nations Unies, indicateurs 6.1.1 et 6.2.1" },

    { id: "roads", type: "gap", sdg: 9,
      title: { fr: "Réseau routier : part bitumée et part non bitumée", en: "Road network: paved and unpaved shares" },
      unit: "%",
      items: [
        { label: { fr: "Routes bitumées", en: "Paved roads" }, value: 27.5, emphasis: true },
        { label: { fr: "Routes non bitumées", en: "Unpaved roads" }, value: 72.5, emphasis: false }
      ],
      insight: {
        fr: "Sur les 2 755 km que la fiche attribue au réseau, quelque 758 km sont bitumés. Chaque saison des pluies rend une large part des 72,5 % restants impraticable — ce qui fait de la diversification économique que l'ODD 9 met en avant une ambition tributaire d'une infrastructure saisonnière. La part bitumée est corroborée par des sources externes, qui relèvent environ 27,9 % ; la longueur du réseau, elle, ne l'est pas : les mêmes sources font état de 3 455 km.",
        en: "Of the 2,755 km the factsheet attributes to the network, some 758 km are paved. Every rainy season renders much of the remaining 72.5% impassable — which makes the economic diversification SDG 9 foregrounds an ambition dependent on seasonal infrastructure. The paved share is corroborated externally, at roughly 27.9%; the network length is not — the same sources report 3,455 km."
      },
      source: "Fiche RNV 2026 · Base de données ODD des Nations Unies, indicateur 9.1.1" }
  ],

  instruments: [
    { name: { fr: "PND 2026-2035 et Vision 2035", en: "NDP 2026–2035 & Vision 2035" },
      kicker: { fr: "plan national unique", en: "a single national plan" },
      text: {
        fr: "Le Plan national de développement porte à lui seul les ODD, l'Agenda 2063 et la vision de long terme du pays : un État pacifique, bien gouverné et prospère d'ici 2035. La Guinée-Bissau ne tient pas de dispositif de suivi distinct des ODD ; la fiche reconnaît d'ailleurs que le cadre de suivi reste à renforcer, ce qui est l'aveu le plus utile de la revue.",
        en: "The National Development Plan carries the SDGs, Agenda 2063 and the country's long-term vision on its own: a peaceful, well-governed and prosperous state by 2035. Guinea-Bissau runs no separate SDG tracker; the factsheet openly concedes that the monitoring framework still needs strengthening, which is the review's most useful admission."
      },
      source: "Fiche RNV 2026" },
    { name: { fr: "Intégration hydroélectrique de l'OMVG", en: "OMVG hydropower integration" },
      kicker: { fr: "37,4 % → 43,7 % d'accès", en: "37.4% → 43.7% access" },
      text: {
        fr: "L'Organisation pour la mise en valeur du fleuve Gambie relie la Guinée-Bissau à l'hydroélectricité partagée du bassin. C'est le principal moteur de l'amélioration des indicateurs énergétiques citée par la fiche — mais l'interconnexion régionale raccorde des réseaux, non des ménages : l'accès rural n'atteint que 24,9 %.",
        en: "The Gambia River Basin Development Organization links Guinea-Bissau to shared basin hydropower. It is the main driver of the improvement in energy indicators the factsheet cites — but regional interconnection connects grids, not households: rural access reaches only 24.9%."
      },
      source: "Fiche RNV 2026" },
    { name: { fr: "Système national d'aires protégées", en: "National protected-area system" },
      kicker: { fr: "26,3 % du territoire", en: "26.3% of the territory" },
      text: {
        fr: "Parcs nationaux de Cacheu et de Cantanhez, archipel des Bijagós classé réserve de biosphère de l'UNESCO : 13,9 % du territoire terrestre et 12,4 % du domaine marin sont protégés. C'est l'actif que le PND entend convertir en financement — écotourisme, REDD+, licences de pêche durable — plutôt qu'en simple ligne de conservation.",
        en: "The Cacheu and Cantanhez national parks and the Bijagós Archipelago, a UNESCO Biosphere Reserve: 13.9% of the land and 12.4% of the marine domain are protected. This is the asset the NDP intends to convert into financing — eco-tourism, REDD+, sustainable fishing licences — rather than leave as a conservation line item."
      },
      source: "Fiche RNV 2026 · IBAP" },
    { name: { fr: "Ancrage UEMOA et réforme fiscale", en: "WAEMU anchor & tax reform" },
      kicker: { fr: "inflation 7,2 % → 3,8 %", en: "inflation 7.2% → 3.8%" },
      text: {
        fr: "Le franc CFA prive la Guinée-Bissau de politique monétaire autonome ; en contrepartie, il lui fournit la stabilité des prix qu'elle vient d'obtenir. La réforme fiscale, adossée à la taxation de la filière noix de cajou, est en conséquence le seul levier de politique économique réellement à la main du gouvernement — et la condition de tout le reste du PND.",
        en: "The CFA franc deprives Guinea-Bissau of an independent monetary policy; in exchange, it supplies the price stability the country has just achieved. Tax reform, anchored on taxing the cashew trade, is therefore the only economic-policy lever genuinely in the government's hands — and the precondition for everything else in the NDP."
      },
      source: "FMI, consultation au titre de l'article IV 2025" },
    { name: { fr: "Modernisation des routes et de l'aéroport", en: "Road and airport modernisation" },
      kicker: { fr: "2 755 km · 27,5 % bitumés", en: "2,755 km · 27.5% paved" },
      text: {
        fr: "La réhabilitation du réseau routier et la modernisation de l'unique aéroport international du pays sont les deux chantiers d'infrastructure que la fiche rattache explicitement à la diversification économique. Avec un peu plus d'un quart du réseau bitumé, l'ampleur de la tâche est le fait dominant de l'ODD 9.",
        en: "Rehabilitating the road network and modernising the country's only international airport are the two infrastructure programmes the factsheet explicitly ties to economic diversification. With barely more than a quarter of the network paved, the scale of the task is the dominant fact of SDG 9."
      },
      source: "Fiche RNV 2026" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        fr: "La fiche de la Guinée-Bissau décrit, sous l'ODD 8, « La Vision 2040 et le Programme Simandou 2040, exploitation du plus grand gisement de fer d'Afrique avec 650 km de chemin de fer », qui « ancrent l'ambition de transformation industrielle de la Guinée ». Le texte nomme lui-même la Guinée. Simandou est un gisement de minerai de fer situé en Guinée ; la Guinée-Bissau n'a ni gisement de fer, ni chemin de fer, ni Programme Simandou.",
        en: "Under SDG 8, Guinea-Bissau's factsheet describes \"Vision 2040 and the Simandou 2040 Programme, exploitation of Africa's largest iron ore deposit with 650 km of railway\", which \"anchor the industrial transformation ambition of Guinea\". The text names Guinea itself. Simandou is an iron ore deposit in Guinea; Guinea-Bissau has no iron deposit, no railway, and no Simandou Programme."
      },
      resolution: {
        fr: "Il s'agit d'un copier-coller depuis la fiche de la Guinée — deux pays voisins, deux noms proches, deux économies sans rapport. Le thème ODD 8 a été entièrement réécrit sur le récit macroéconomique réel de la Guinée-Bissau, celui que sa propre continuité thématique désigne d'ailleurs (« Financement, défi majeur du développement » → « Stabilisation macroéconomique et croissance ») : désinflation de 7,2 % à 3,8 %, croissance maintenue autour de 5 % sous ancrage UEMOA, et mobilisation des recettes intérieures comme contrainte restante. Aucun élément du texte d'origine n'a été conservé. C'est précisément le type d'erreur que ce site existe pour détecter.",
        en: "This is a copy-paste from Guinea's factsheet — two neighbouring countries, two similar names, two unrelated economies. The SDG 8 theme has been rewritten entirely around Guinea-Bissau's actual macroeconomic narrative, which its own theme-continuity row already points to (\"Financing, the central development challenge\" → \"Macroeconomic stabilisation & growth\"): disinflation from 7.2% to 3.8%, growth held near 5% under the WAEMU anchor, and domestic revenue mobilisation as the remaining constraint. No element of the original text has been retained. This is exactly the kind of error this site exists to catch."
      } },
    { severity: "contradiction",
      issue: {
        fr: "L'ancien tableau de bord affichait « Territoire protégé — 59,5 % » comme indicateur de tête, le répétait dans le panneau ODD 13, dans la barre « capital naturel » du cadre 4P et dans la section financement (« REDD+ lié à 59,5 % de territoire protégé »). La fiche indique 26,3 %.",
        en: "The old dashboard headlined \"Protected territory — 59.5%\", repeated it in the SDG 13 panel, in the \"natural capital\" bar of the 4P framework and in the financing section (\"REDD+ tied to 59.5% protected territory\"). The factsheet says 26.3%."
      },
      resolution: {
        fr: "26,3 % est le chiffre exact : le système national d'aires protégées couvre 13,9 % du territoire terrestre et 12,4 % du domaine marin. Le chiffre de 59,5 % provient de l'indicateur ODD 15.1.2 — la proportion moyenne des zones clés pour la biodiversité couvertes par des aires protégées — qui mesure tout autre chose et ne se rapporte pas au territoire national. Le tableau de bord citait d'ailleurs l'indicateur 15.1.2 dans une info-bulle et l'indicateur 11.1.1 (population des quartiers informels) dans le bloc de sources du même panneau : trois indicateurs pour un seul chiffre. Le 59,5 % a été retiré.",
        en: "26.3% is the correct figure: the national protected-area system covers 13.9% of the land and 12.4% of the marine domain. The 59.5% figure comes from SDG indicator 15.1.2 — the mean proportion of Key Biodiversity Areas covered by protected areas — which measures something else entirely and is not a share of national territory. The dashboard in fact cited indicator 15.1.2 in a tooltip and indicator 11.1.1 (slum population) in the source block of the same panel: three indicators for one number. The 59.5% figure has been removed."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Le graphique « Accès à l'électricité, national vs rural » portait une légende à deux entrées : « Accès électricité ( %) » et « Croissance du PIB ( %) ». Aucune donnée de croissance ne figurait sur ce graphique ; la seconde série était l'accès rural à l'électricité.",
        en: "The chart \"Access to electricity, national vs rural\" carried a two-entry legend: \"Electricity access (%)\" and \"GDP growth (%)\". No growth data appeared on the chart; the second series was rural electricity access."
      },
      resolution: {
        fr: "Légende recyclée du gabarit commun. Les données sont désormais présentées en graphique d'écart à trois valeurs — urbain 65,6 %, national 43,7 %, rural 24,9 % — chacune libellée par ce qu'elle mesure, sur une seule unité et un seul axe.",
        en: "A legend recycled from the shared template. The data are now shown as a three-value gap chart — urban 65.6%, national 43.7%, rural 24.9% — each labelled with what it measures, on a single unit and a single axis."
      } },
    { severity: "mislabel",
      issue: {
        fr: "Le graphique « Stock de dette extérieure, % du RNB » — une série unique — portait une légende à deux entrées : « Croissance du PIB ( %) » et « Inflation ( %) ». Ni l'une ni l'autre ne correspondait aux données tracées.",
        en: "The chart \"External debt stock, % of GNI\" — a single series — carried a two-entry legend: \"GDP growth (%)\" and \"Inflation (%)\". Neither matched the data plotted."
      },
      resolution: {
        fr: "Deux légendes fausses sur un graphique à une seule courbe. Cette page en comptait au moins cinq autres du même ordre : « Recettes fiscales ( % du PIB) » posée sur un graphique de routes bitumées et de couverture 4G ; « Priorités d'investissement (rang) » posée sur le score GIRE (0-100) ; « Recettes internes ( %) » et « Financement externe ( %) » posées sur un graphique de service de la dette extérieure ; les mêmes deux légendes reposées sur un graphique de recettes publiques. Toutes les légendes sont désormais générées depuis la couche de données : un graphique ne peut plus afficher une légende étrangère à ses données.",
        en: "Two false legends on a single-line chart. The same page carried at least five more of the same kind: \"Tax revenue (% of GDP)\" sitting over a chart of paved roads and 4G coverage; \"Investment priorities (rank)\" sitting over the IWRM score (0–100); \"Domestic revenue (%)\" and \"External financing (%)\" sitting over a chart of external debt service; and those same two legends reused over a chart of government revenue. All legends are now generated from the data layer: a chart can no longer display a legend foreign to its data."
      } },
    { severity: "contradiction",
      issue: {
        fr: "La section « eau » de l'ancien tableau de bord évoquait la restauration des « zones tampons autour des lacs Tanganyika et Cohoha ».",
        en: "The water section of the old dashboard referred to restoring \"buffer zones around Lakes Tanganyika and Cohoha\"."
      },
      resolution: {
        fr: "Ni l'un ni l'autre ne se trouve en Guinée-Bissau : le lac Tanganyika borde la Tanzanie, la RDC, le Burundi et la Zambie, et le lac Cohoha est burundais. C'est un second copier-coller, depuis le tableau de bord du Burundi. Le passage a été supprimé. Les eaux de la Guinée-Bissau sont celles des bassins du Geba, du Cacheu et du Corubal.",
        en: "Neither is in Guinea-Bissau: Lake Tanganyika borders Tanzania, the DRC, Burundi and Zambia, and Lake Cohoha is Burundian. This is a second copy-paste, this time from the Burundi dashboard. The passage has been removed. Guinea-Bissau's waters are those of the Geba, Cacheu and Corubal basins."
      } },
    { severity: "contradiction",
      issue: {
        fr: "L'ancien tableau de bord traçait une croissance du PIB de 5,5 % (2022), 5,8 % (2023) et 4,2 % (2024), et une inflation de 9,4 % (2022) et 7,1 % (2023).",
        en: "The old dashboard plotted GDP growth of 5.5% (2022), 5.8% (2023) and 4.2% (2024), and inflation of 9.4% (2022) and 7.1% (2023)."
      },
      resolution: {
        fr: "Aucun de ces chiffres de croissance ne correspond aux sources faisant autorité : la BAD relève 4,2 % (2022) et 4,3 % (2023), et le FMI 4,8 % pour 2024 — soit une croissance en accélération là où le tableau de bord montrait un ralentissement. Le sens même de la courbe était inversé. L'inflation de 2023 est de 7,2 % et non 7,1 %. Devant l'écart entre sources sur la croissance, la série de croissance a été retirée et seule l'inflation — pour laquelle le FMI fournit une série cohérente (7,2 % → 3,8 % → environ 2 %) — est tracée, avec une source unique.",
        en: "None of the growth figures matches an authoritative source: the AfDB records 4.2% (2022) and 4.3% (2023), and the IMF 4.8% for 2024 — growth accelerating where the dashboard showed it slowing. The very direction of the line was inverted. Inflation in 2023 was 7.2%, not 7.1%. Given the spread between sources on growth, the growth series has been withdrawn and only inflation — for which the IMF supplies a coherent series (7.2% → 3.8% → about 2%) — is plotted, from a single source."
      } },
    { severity: "unverified",
      issue: {
        fr: "La fiche donne un réseau routier de 2 755 km bitumé à 27,5 %.",
        en: "The factsheet gives a 2,755 km road network, 27.5% paved."
      },
      resolution: {
        fr: "La part bitumée est corroborée : des sources externes de 2025 font état de 965 km bitumés sur un réseau national, soit environ 27,9 %. Mais ces mêmes sources établissent le réseau à 3 455 km, et non 2 755 km. Les deux chiffres ne peuvent être exacts simultanément. La part de 27,5 % est conservée, car c'est elle qui est corroborée et c'est elle qui porte le message ; la longueur du réseau est présentée comme le chiffre de la fiche, explicitement signalé comme non corroboré.",
        en: "The paved share is corroborated: external sources from 2025 report 965 km of paved road on the national network, roughly 27.9%. But those same sources put the network at 3,455 km, not 2,755 km. Both figures cannot be right at once. The 27.5% share is retained, because it is the one that is corroborated and the one that carries the message; the network length is presented as the factsheet's own figure, explicitly flagged as uncorroborated."
      } },
    { severity: "unverified",
      issue: {
        fr: "L'ancien tableau de bord présentait un cadre de suivi « 4P » auto-évalué (44 % en progression, 18 % partiel, 38 % cadre en construction ; capital humain 52 %, diversification 44 %, capital naturel 59,5 %, gouvernance 40 %), un engagement des partenaires de 1 507 171 475 $, des pénétrations mobile de 71,0 %, internet de 29,3 % et monnaie mobile de 62,1 %, ainsi qu'un « Compact national sur l'énergie » de 3,49 Md$.",
        en: "The old dashboard presented a self-assessed \"4P\" monitoring framework (44% advancing, 18% partial, 38% framework under construction; human capital 52%, diversification 44%, natural capital 59.5%, governance 40%), a partner commitment of $1,507,171,475, mobile penetration of 71.0%, internet 29.3% and mobile money 62.1%, and a $3.49bn \"National Energy Compact\"."
      },
      resolution: {
        fr: "Aucun de ces chiffres n'est traçable à la fiche, et la barre « capital naturel » du cadre 4P valait exactement 59,5 % — la valeur du chiffre erroné sur les aires protégées, réemployée comme pourcentage de progrès. Une auto-évaluation dont l'une des quatre barres est un chiffre importé d'un autre indicateur n'est pas une auto-évaluation. L'engagement au dollar près (1 507 171 475 $) affiche une précision que sa source, un « Graphique 74 » d'une RNV non publiée, ne peut soutenir. L'ensemble a été retiré.",
        en: "None of these can be traced to the factsheet, and the \"natural capital\" bar of the 4P framework was worth exactly 59.5% — the value of the erroneous protected-areas figure, reused as a progress percentage. A self-assessment in which one of four bars is a number imported from a different indicator is not a self-assessment. The dollar-precise commitment ($1,507,171,475) claims an accuracy its source — a \"Figure 74\" in an unpublished VNR — cannot support. All of it has been dropped."
      } },
    { severity: "mislabel",
      issue: {
        fr: "L'ancien tableau de bord mêlait français, anglais et fragments hybrides dans une même phrase : « 4,4 % pratiquant encoreing open defecation », « Delivery runs through dedicated finance institutions, the Impulse, Guarantee et Support Fund », « Au sein de l'UEMOA/BCEAO monetary framework », et libellait ses panneaux « SDG 6 » ou « SDG 13 » là où le reste de la page disait « ODD ».",
        en: "The old dashboard mixed French, English and hybrid fragments within single sentences: \"4.4% pratiquant encoreing open defecation\", \"Delivery runs through dedicated finance institutions, the Impulse, Guarantee et Support Fund\", \"Au sein de l'UEMOA/BCEAO monetary framework\", and labelled panels \"SDG 6\" or \"SDG 13\" where the rest of the page said \"ODD\"."
      },
      resolution: {
        fr: "Les traces d'une traduction automatique appliquée à un gabarit anglais, où « and » a été remplacé par « et » y compris à l'intérieur de phrases anglaises. Chaque chaîne provient désormais d'une paire {en, fr} explicite, le français étant la langue source pour la Guinée-Bissau et l'anglais une traduction ; un mélange de langues à l'intérieur d'une phrase n'est structurellement plus possible.",
        en: "The traces of machine translation applied to an English template, in which \"and\" was replaced by \"et\" even inside English sentences. Every string now comes from an explicit {en, fr} pair, with French the source language for Guinea-Bissau and English a translation; a mid-sentence language mix is no longer structurally possible."
      } }
  ]
});
