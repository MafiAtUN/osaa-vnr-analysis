/* Malawi — VNR 2022 → 2026. Source factsheet authored in English (factsheets.pdf p.12).
   Concept frequencies re-read from the PDF by column position: the text extract separates
   the counts from their labels and carries a stray "4" and "13" that are the SDG 4 and
   SDG 13 theme numerals, not concept frequencies.
   Fact-checked against the 2026 factsheet, the old "Malawi Dashboard.html" prototype,
   the IMF 2025 Article IV, DoDMA/OCHA reporting on Cyclone Freddy and the public record
   on the Kangankunde rare-earth project. See `factcheck` at the bottom. */
window.VNR.register({
  slug: "malawi",
  iso: "MW",
  name: { en: "Malawi", fr: "Malawi" },
  region: "east",
  vnrPrev: 2022,
  vnrCycles: [2022, 2026],
  langs: ["EN"],
  sourceLang: "en",
  factsheetPdf: "factsheets/malawi.pdf",

  tagline: {
    en: "Anchored in Malawi 2063 — pursuing resilience, inclusion and innovation despite recurrent climate shocks.",
    fr: "Ancré dans Malawi 2063 — poursuivre la résilience, l'inclusion et l'innovation malgré des chocs climatiques récurrents."
  },

  themes: [
    { sdg: 1,
      title: { en: "Social Protection & Inclusion", fr: "Protection sociale et inclusion" },
      text: {
        en: "Poverty reduction is supported by expanded social protection — cash transfers and community-based initiatives that strengthen household resilience.",
        fr: "La réduction de la pauvreté s'appuie sur une protection sociale élargie : transferts monétaires et initiatives communautaires qui renforcent la résilience des ménages."
      } },
    { sdg: 4,
      title: { en: "Education & Future Skills", fr: "Éducation et compétences d'avenir" },
      text: {
        en: "Gains in primary enrolment, stronger support for girls' education and new digital learning initiatives prepare youth for a changing labour market.",
        fr: "La progression de la scolarisation primaire, un soutien renforcé à l'éducation des filles et de nouvelles initiatives d'apprentissage numérique préparent les jeunes à un marché du travail en mutation."
      } },
    { sdg: 7,
      title: { en: "Expanding Energy Access", fr: "Élargir l'accès à l'énergie" },
      text: {
        en: "Energy access is expanding through grid electrification, off-grid solar, clean cooking technologies and renewable energy investment.",
        fr: "L'accès à l'énergie s'élargit grâce à l'électrification par le réseau, au solaire hors réseau, aux technologies de cuisson propre et à l'investissement dans les énergies renouvelables."
      } },
    { sdg: 9,
      title: { en: "Infrastructure & Rare Earths", fr: "Infrastructures et terres rares" },
      text: {
        en: "Investment in roads, trade facilitation and digital connectivity advances, with major opportunity from newly discovered world-leading rare earth deposits.",
        fr: "L'investissement dans les routes, la facilitation des échanges et la connectivité numérique progresse, avec une occasion majeure offerte par des gisements de terres rares de tout premier plan mondial nouvellement mis au jour."
      } },
    { sdg: 13,
      title: { en: "Building Climate Resilience", fr: "Construire la résilience climatique" },
      text: {
        en: "After Cyclone Freddy (2023), Malawi integrates resilience into planning through national adaptation strategies and community-based disaster risk management.",
        fr: "Après le cyclone Freddy (2023), le Malawi intègre la résilience dans sa planification au moyen de stratégies nationales d'adaptation et d'une gestion communautaire des risques de catastrophe."
      } },
    { sdg: 17,
      title: { en: "Financing & Means of Implementation", fr: "Financement et moyens de mise en œuvre" },
      text: {
        en: "Malawi strengthens domestic resource mobilisation, partnerships and statistical systems under the Integrated National Financing Strategy.",
        fr: "Le Malawi renforce la mobilisation des ressources intérieures, les partenariats et les systèmes statistiques dans le cadre de la Stratégie nationale intégrée de financement."
      } }
  ],

  continuity: [
    { prev: { en: "Second VNR & Malawi 2063 / MIP-1 (2022)", fr: "Deuxième RNV et Malawi 2063 / MIP-1 (2022)" },
      status: "sustained",
      now: { en: "Resilience, Inclusion & Innovation", fr: "Résilience, inclusion et innovation" } },
    { prev: { en: "Subsidised farm inputs (AIP) & national cash transfers (NSSP II)", fr: "Intrants agricoles subventionnés (AIP) et transferts monétaires nationaux (NSSP II)" },
      status: "evolved",
      now: { en: "Expanded Cash Transfers & Inclusion", fr: "Transferts monétaires élargis et inclusion" } },
    { prev: { en: "Climate vulnerability", fr: "Vulnérabilité climatique" },
      status: "evolved",
      now: { en: "Resilience After Cyclone Freddy", fr: "La résilience après le cyclone Freddy" } },
    { prev: { en: "Health & education gains", fr: "Progrès en santé et en éducation" },
      status: "sustained",
      now: { en: "Digital Learning & Girls' Education", fr: "Apprentissage numérique et éducation des filles" } },
    { prev: { en: "SDG financing & PECG partnerships", fr: "Financement des ODD et partenariats PECG" },
      status: "evolved",
      now: { en: "Integrated National Financing Strategy", fr: "Stratégie nationale intégrée de financement" } }
  ],

  concepts: {
    caption: {
      en: "Malawi's review centres on climate resilience, social protection and a financing push under Malawi 2063.",
      fr: "La revue du Malawi s'articule autour de la résilience climatique, de la protection sociale et d'un effort de financement dans le cadre de Malawi 2063."
    },
    items: [
      { label: { en: "climate resilience", fr: "résilience climatique" }, value: 18 },
      { label: { en: "growth & development", fr: "croissance et développement" }, value: 13 },
      { label: { en: "social protection", fr: "protection sociale" }, value: 11 },
      { label: { en: "energy & clean cooking", fr: "énergie et cuisson propre" }, value: 9 },
      { label: { en: "financing & debt", fr: "financement et dette" }, value: 9 },
      { label: { en: "governance & data", fr: "gouvernance et données" }, value: 9 },
      { label: { en: "industry & mining", fr: "industrie et mines" }, value: 6 },
      { label: { en: "infrastructure", fr: "infrastructures" }, value: 5 },
      { label: { en: "partnerships", fr: "partenariats" }, value: 4 }
    ]
  },

  indicators: [
    { id: "elec_access", sdg: 7,
      label: { en: "Electricity access, national (grid and off-grid)", fr: "Accès à l'électricité, national (réseau et hors réseau)" },
      value: 25.9, unit: "%",
      note: { en: "Up from 10.7% in 2015 — more than doubled. Grid, off-grid solar and solar home systems combined; grid-only series (e.g. World Bank) run substantially lower.",
              fr: "Contre 10,7 % en 2015 : plus du double. Réseau, solaire hors réseau et systèmes solaires domestiques confondus ; les séries limitées au réseau (Banque mondiale, notamment) sont sensiblement inférieures." },
      source: "VNR 2026 · SDG indicator 7.1.1" },
    { id: "elec_rural", sdg: 7,
      label: { en: "Rural electricity access", fr: "Accès rural à l'électricité" },
      value: 5.3, unit: "%",
      note: { en: "Against 56.4% in urban areas. Independent estimates corroborate rural access of about 5%. This, not the national average, is Malawi's energy indicator.",
              fr: "Contre 56,4 % en zone urbaine. Les estimations indépendantes corroborent un accès rural d'environ 5 %. C'est là, et non dans la moyenne nationale, que se situe le véritable indicateur énergétique du Malawi." },
      source: "VNR 2026 · SDG indicator 7.1.1 · World Bank energy access data" },
    { id: "debt_gdp", sdg: 17,
      label: { en: "Public debt, % of GDP", fr: "Dette publique, en % du PIB" },
      value: 91.3, unit: "%",
      note: { en: "The VNR's figure. The IMF's 2025 Article IV puts total public debt at about 88% of GDP at end-2024 and judges it on an unsustainable path. Both readings agree on the diagnosis.",
              fr: "Le chiffre de la RNV. La consultation au titre de l'article IV du FMI (2025) situe la dette publique totale à environ 88 % du PIB fin 2024 et la juge sur une trajectoire insoutenable. Les deux lectures concordent sur le diagnostic." },
      source: "VNR 2026 · SDG indicator 17.4.1 · IMF Country Report 25/226 (2025 Article IV)" },
    { id: "debt_service_rev", sdg: 17,
      label: { en: "Share of domestic revenue absorbed by debt service", fr: "Part des recettes intérieures absorbée par le service de la dette" },
      value: 32, unit: "%",
      note: { en: "About 6.7% of GDP. Debt service is now the single largest line in the budget — the direct constraint on SDG spending.",
              fr: "Soit environ 6,7 % du PIB. Le service de la dette constitue désormais le premier poste du budget : c'est la contrainte directe qui pèse sur les dépenses en faveur des ODD." },
      source: "VNR 2026" },
    { id: "own_taxes", sdg: 17,
      label: { en: "Share of the domestic budget financed by Malawi's own taxes", fr: "Part du budget intérieur financée par les impôts propres du Malawi" },
      value: 54, unit: "%",
      note: { en: "Up from 19.8% in 2015 — nearly tripled, driven by the Msonkho Online digital tax platform. A share of the budget, not of GDP.",
              fr: "Contre 19,8 % en 2015 : un quasi-triplement, porté par la plateforme fiscale numérique Msonkho Online. Il s'agit d'une part du budget, non du PIB." },
      source: "VNR 2026 · SDG indicator 17.1.2" },
    { id: "revenue_gdp", sdg: 17,
      label: { en: "Total government revenue, % of GDP (2023/24)", fr: "Recettes publiques totales, en % du PIB (2023-2024)" },
      value: 15.9, unit: "%",
      note: { en: "Down from 16.5% in 2021/22, constrained by forex shortages, inflation and repeated climate shocks. Tax revenue alone is 13.7% of GDP.",
              fr: "Contre 16,5 % en 2021-2022, sous l'effet de la pénurie de devises, de l'inflation et des chocs climatiques répétés. Les seules recettes fiscales représentent 13,7 % du PIB." },
      source: "VNR 2026, Figures 22–23 · SDG indicator 17.1.1" },
    { id: "mip1_align", sdg: 17,
      label: { en: "MIP-1 alignment with the SDGs", fr: "Alignement du MIP-1 sur les ODD" },
      value: 81.6, unit: "%",
      note: { en: "98.5% at goal level but only 53.5% at indicator level — the alignment is strong where it is declared and thin where it is measured.",
              fr: "98,5 % au niveau des objectifs, mais 53,5 % seulement au niveau des indicateurs : l'alignement est solide là où il se déclare et ténu là où il se mesure." },
      source: "VNR 2026 · MIP-1 alignment assessment" },
    { id: "sanitation", sdg: 6,
      label: { en: "Population with at least basic sanitation", fr: "Population disposant au moins de services d'assainissement élémentaires" },
      value: 40, unit: "%",
      note: { en: "Against 89% with an improved drinking-water source. Open defecation persists, and facilities often fail to meet the needs of women, girls and people with disabilities.",
              fr: "Contre 89 % pour l'accès à une source d'eau potable améliorée. La défécation à l'air libre persiste et les installations répondent souvent mal aux besoins des femmes, des filles et des personnes handicapées." },
      source: "VNR 2026 · WHO/UNICEF JMP / MDHS 2024 · SDG indicator 6.2.1" }
  ],

  charts: [
    { id: "elec_gap", type: "gap", sdg: 7,
      title: { en: "The national electricity figure hides the country, 2024/25",
               fr: "Le chiffre national de l'électricité masque le pays, 2024-2025" },
      unit: "%",
      items: [
        { label: { en: "Urban access", fr: "Accès urbain" }, value: 56.4, emphasis: false },
        { label: { en: "National access", fr: "Accès national" }, value: 25.9, emphasis: false },
        { label: { en: "Rural access", fr: "Accès rural" }, value: 5.3, emphasis: true }
      ],
      insight: {
        en: "Malawi's headline is a genuine achievement — access more than doubled, from 10.7% in 2015 to 25.9%, on grid extension under MAREP plus off-grid solar. But the national average is an artefact of a country where roughly five in six people live rurally: a 51-point gap separates the town from the village, and rural access at 5.3% means that for most Malawians the electrification programme has not yet arrived. Report the national figure alone and you describe a country that does not exist.",
        fr: "Le chiffre phare du Malawi traduit un progrès réel : l'accès a plus que doublé, passant de 10,7 % en 2015 à 25,9 %, grâce à l'extension du réseau au titre du MAREP et au solaire hors réseau. Mais la moyenne nationale est un artefact dans un pays où environ cinq personnes sur six vivent en milieu rural : cinquante et un points séparent la ville du village, et un accès rural de 5,3 % signifie que, pour la plupart des Malawiens, le programme d'électrification n'est pas encore arrivé. Ne présenter que le chiffre national, c'est décrire un pays qui n'existe pas."
      },
      source: "VNR 2026 · SDG indicator 7.1.1" },

    { id: "debt_gap", type: "gap", sdg: 17,
      title: { en: "Public debt against the sustainability benchmark, % of GDP",
               fr: "Dette publique et seuil de soutenabilité, en % du PIB" },
      unit: "% of GDP",
      items: [
        { label: { en: "Public debt (VNR 2026)", fr: "Dette publique (RNV 2026)" }, value: 91.3, emphasis: true },
        { label: { en: "Public debt (IMF, end-2024)", fr: "Dette publique (FMI, fin 2024)" }, value: 88, emphasis: false },
        { label: { en: "Sustainability benchmark", fr: "Seuil de soutenabilité" }, value: 60, emphasis: false }
      ],
      insight: {
        en: "The organising constraint of the entire review. Whether debt is 91.3% of GDP (the VNR) or about 88% (the IMF's 2025 Article IV), it is half again the sustainability benchmark and on a rising path. Debt service now consumes 32% of domestic revenue and is the largest single line in the budget — which is to say that every gain in domestic tax effort shown on the next chart is being run against a headwind of the same order. Malawi's problem is not that it fails to raise money; it is what the money is already committed to.",
        fr: "C'est la contrainte structurante de toute la revue. Que la dette s'établisse à 91,3 % du PIB (la RNV) ou à environ 88 % (l'article IV du FMI de 2025), elle représente une fois et demie le seuil de soutenabilité et suit une trajectoire ascendante. Son service absorbe désormais 32 % des recettes intérieures et constitue le premier poste du budget — autrement dit, chacun des gains d'effort fiscal intérieur qu'illustre le graphique suivant se heurte à un vent contraire du même ordre. Le problème du Malawi n'est pas qu'il ne parvient pas à lever des fonds : c'est ce à quoi ces fonds sont déjà engagés."
      },
      source: "VNR 2026 · IMF Country Report 25/226 (2025 Article IV) · SDG indicator 17.4.1" },

    { id: "own_taxes", type: "line", sdg: 17,
      title: { en: "Share of the domestic budget financed by Malawi's own taxes", fr: "Part du budget intérieur financée par les impôts propres du Malawi" },
      unit: "% of the domestic budget",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "own_taxes", label: { en: "Budget financed by own taxes", fr: "Budget financé par les impôts propres" },
          points: [{ x: "2015", y: 19.8 }, { x: "2024", y: 54 }] }
      ],
      insight: {
        en: "The clearest bright spot in Malawi's public finances, and the one the debt figures should not be allowed to erase. The share of the domestic budget financed by the country's own taxes nearly tripled in a decade, on digitized collection through the Msonkho Online platform, a review of tax incentives and stronger local-government revenue. Note the base: this is a share of the budget, not of GDP — revenue as a share of GDP actually fell over the same period, to 15.9%. Both statements are true, and they are not the same statement.",
        fr: "C'est l'éclaircie la plus nette des finances publiques malawiennes, et les chiffres de la dette ne doivent pas l'effacer. La part du budget intérieur financée par les impôts propres du pays a presque triplé en dix ans, grâce à la numérisation du recouvrement via la plateforme Msonkho Online, à la révision des incitations fiscales et au renforcement des recettes des collectivités locales. Attention à la base : il s'agit d'une part du budget, non du PIB — les recettes rapportées au PIB ont d'ailleurs reculé sur la même période, à 15,9 %. Les deux affirmations sont exactes, et ce ne sont pas les mêmes."
      },
      source: "VNR 2026, p. 113 · SDG indicator 17.1.2" },

    { id: "revenue", type: "line", sdg: 17,
      title: { en: "Total government revenue, % of GDP", fr: "Recettes publiques totales, en % du PIB" },
      unit: "% of GDP",
      xLabel: { en: "Fiscal year", fr: "Exercice budgétaire" },
      series: [
        { key: "revenue", label: { en: "Total government revenue", fr: "Recettes publiques totales" },
          points: [{ x: "2021/22", y: 16.5 }, { x: "2023/24", y: 15.9 }] }
      ],
      insight: {
        en: "The counterweight, and the reason the own-tax chart must never be read alone. Measured against the economy rather than against the budget, revenue effort slipped — forex shortages, inflation and repeated climate shocks all eroded the base faster than reform could rebuild it. Tax revenue is 13.7% of GDP. Malawi is collecting a larger share of a budget that is itself being squeezed.",
        fr: "C'est le contrepoids, et la raison pour laquelle le graphique des impôts propres ne doit jamais être lu seul. Rapporté à l'économie plutôt qu'au budget, l'effort de recettes a reculé : pénurie de devises, inflation et chocs climatiques répétés ont érodé l'assiette plus vite que la réforme ne pouvait la reconstituer. Les recettes fiscales représentent 13,7 % du PIB. Le Malawi prélève une part plus grande d'un budget lui-même sous pression."
      },
      source: "VNR 2026, Figures 22–23 · SDG indicator 17.1.1" },

    { id: "wash_ladder", type: "gap", sdg: 6,
      title: { en: "The water and sanitation ladder, latest year", fr: "L'échelle de l'eau et de l'assainissement, dernière année disponible" },
      unit: "%",
      items: [
        { label: { en: "Improved drinking-water source", fr: "Source d'eau potable améliorée" }, value: 89, emphasis: false },
        { label: { en: "At least basic water service", fr: "Service d'eau au moins élémentaire" }, value: 73, emphasis: false },
        { label: { en: "At least basic sanitation", fr: "Assainissement au moins élémentaire" }, value: 40, emphasis: true }
      ],
      insight: {
        en: "Three rungs of the same ladder, and the distance between them is the finding. An improved water source is available to 89% of Malawians; hold the measure to the stricter standard of a basic service and it falls to 73%; ask about sanitation and it falls to 40%, with open defecation persisting. Water is a relative strength — the review records community reports of sharply lower cholera and diarrhoea, and of women reclaiming hours once spent fetching water. Sanitation is the frontier, and it is where Cyclone Freddy did its damage.",
        fr: "Trois barreaux d'une même échelle, et c'est l'écart entre eux qui constitue le résultat. Une source d'eau améliorée est accessible à 89 % des Malawiens ; appliquez la norme plus stricte d'un service élémentaire et le taux tombe à 73 % ; interrogez l'assainissement et il chute à 40 %, la défécation à l'air libre persistant. L'eau est une force relative — la revue rapporte des témoignages communautaires faisant état d'un net recul du choléra et des diarrhées, et d'heures reconquises par les femmes autrefois consacrées à la corvée d'eau. L'assainissement est la frontière, et c'est là que le cyclone Freddy a frappé."
      },
      source: "VNR 2026, p. 57–59 · WHO/UNICEF JMP / MDHS 2024 · SDG indicators 6.1.1 & 6.2.1" }
  ],

  instruments: [
    { name: { en: "Malawi 2063 & MIP-1", fr: "Malawi 2063 et le MIP-1" },
      kicker: { en: "81.6% SDG alignment", fr: "81,6 % d'alignement sur les ODD" },
      text: {
        en: "Malawi runs no separate SDG tracker. The 2030 Agenda is delivered through the national vision, Malawi 2063, and its First 10-Year Implementation Plan (MIP-1, 2021–2030), with a single results framework tracking 130 indicators across both agendas and the government budget aligned to MIP-1 pillars since 2023/24. Alignment is 98.5% at goal level but 53.5% at indicator level — the gap the measurement reforms are aimed at.",
        fr: "Le Malawi ne tient pas de dispositif de suivi distinct des ODD. L'Agenda 2030 est mis en œuvre par la vision nationale, Malawi 2063, et son premier plan décennal (MIP-1, 2021-2030), un cadre de résultats unique suivant 130 indicateurs pour les deux agendas et le budget de l'État étant aligné sur les piliers du MIP-1 depuis 2023-2024. L'alignement atteint 98,5 % au niveau des objectifs mais 53,5 % au niveau des indicateurs : c'est cet écart que visent les réformes de la mesure."
      },
      source: "VNR 2026, p. 19–20, 28–31" },
    { name: { en: "Climate adaptation & community disaster risk management", fr: "Adaptation climatique et gestion communautaire des risques de catastrophe" },
      kicker: { en: "after Cyclone Freddy, 2023", fr: "après le cyclone Freddy, 2023" },
      text: {
        en: "Cyclone Freddy is the organising fact of Malawian planning, not one item in a risk register. The longest-lived tropical cyclone on record dropped six months of rain in under a week on the Southern Region in March 2023: 679 dead, 537 missing, around 2.3 million people affected and more than 500,000 displaced, with water points, roads and health facilities destroyed and waterborne disease following. Recovery is guided by a Post-Disaster Needs Assessment; national adaptation strategies and community-based disaster risk management are being scaled up so that the next shock does not reverse the same gains twice.",
        fr: "Le cyclone Freddy est le fait structurant de la planification malawienne, et non une ligne parmi d'autres dans un registre des risques. Le cyclone tropical le plus durable jamais enregistré a déversé six mois de pluie en moins d'une semaine sur la région Sud en mars 2023 : 679 morts, 537 disparus, environ 2,3 millions de personnes touchées et plus de 500 000 déplacées, des points d'eau, des routes et des centres de santé détruits, et des maladies hydriques dans leur sillage. Le relèvement s'appuie sur une évaluation des besoins après catastrophe ; les stratégies nationales d'adaptation et la gestion communautaire des risques sont renforcées afin que le prochain choc n'anéantisse pas deux fois les mêmes acquis."
      },
      source: "VNR 2026, p. 21, 129–130 · Malawi DoDMA / OCHA situation reports, March 2023 · IFRC" },
    { name: { en: "Domestic resource mobilisation (Msonkho Online)", fr: "Mobilisation des ressources intérieures (Msonkho Online)" },
      kicker: { en: "19.8% → 54% of the budget", fr: "19,8 % → 54 % du budget" },
      text: {
        en: "The Government digitized tax administration through the Msonkho Online platform, reviewed tax incentives to broaden the base, strengthened local-government revenue collection and reformed state-owned enterprises — nearly tripling the share of the domestic budget financed by Malawi's own taxes since 2015. This is the review's strongest evidence that the financing strategy is more than a document.",
        fr: "Le Gouvernement a numérisé l'administration fiscale au moyen de la plateforme Msonkho Online, révisé les incitations fiscales pour élargir l'assiette, renforcé le recouvrement des recettes locales et réformé les entreprises publiques — faisant presque tripler depuis 2015 la part du budget intérieur financée par les impôts propres du pays. C'est la preuve la plus solide, dans cette revue, que la stratégie de financement est autre chose qu'un document."
      },
      source: "VNR 2026, p. 123–124" },
    { name: { en: "Malawi Rural Electrification Programme (MAREP) & Mpatamanga", fr: "Programme d'électrification rurale du Malawi (MAREP) et Mpatamanga" },
      kicker: { en: "10.7% → 25.9% access", fr: "accès de 10,7 % à 25,9 %" },
      text: {
        en: "MAREP drives grid extension, complemented by off-grid solar and solar home systems; the Mpatamanga hydropower project is under development to lift generation. Access more than doubled in a decade. The binding constraints are unchanged: rural connectivity at 5.3%, and clean cooking, which remains very low.",
        fr: "Le MAREP porte l'extension du réseau, complétée par le solaire hors réseau et les systèmes solaires domestiques ; le projet hydroélectrique de Mpatamanga, en cours de développement, doit accroître la production. L'accès a plus que doublé en dix ans. Les contraintes déterminantes restent les mêmes : une connectivité rurale de 5,3 % et une cuisson propre toujours très peu répandue."
      },
      source: "VNR 2026, p. 63–66" },
    { name: { en: "Kangankunde rare earths", fr: "Terres rares de Kangankunde" },
      kicker: { en: "an opportunity, not yet income", fr: "une perspective, pas encore un revenu" },
      text: {
        en: "The Kangankunde deposit, about 90 km north of Blantyre, is among the world's largest and highest-grade rare-earth resources, and is being developed by Lindian Resources with first production expected in late 2026 — initially some 15,300 tonnes a year, rising to 50,000 in a second phase. Two points of honesty are owed to the reader. \"Newly discovered\" is loose: the carbonatite has been known for decades, and what is new is the 2024 definition of a high-grade, low-thorium resource. And nothing in this review's fiscal figures contains a single dollar of rare-earth revenue. Kangankunde is a real opportunity and a real strategic asset; it is not yet a source of income, and it cannot be spent in advance.",
        fr: "Le gisement de Kangankunde, à environ 90 km au nord de Blantyre, compte parmi les ressources de terres rares les plus vastes et les plus riches au monde ; il est développé par Lindian Resources, avec une première production attendue fin 2026 — de l'ordre de 15 300 tonnes par an dans un premier temps, portées à 50 000 lors d'une seconde phase. Deux précisions s'imposent. « Nouvellement mis au jour » est approximatif : le carbonatite est connu depuis des décennies, et ce qui est nouveau, c'est la définition, en 2024, d'une ressource à haute teneur et à faible teneur en thorium. Par ailleurs, aucun des chiffres budgétaires de cette revue ne contient le moindre dollar de recettes issues des terres rares. Kangankunde est une perspective réelle et un atout stratégique réel ; ce n'est pas encore un revenu, et il ne se dépense pas par anticipation."
      },
      source: "VNR 2026 factsheet · Lindian Resources / Government of Malawi mining disclosures, 2024–2025" },
    { name: { en: "Integrated National Financing Strategy", fr: "Stratégie nationale intégrée de financement" },
      kicker: { en: "financing Malawi 2063", fr: "financer Malawi 2063" },
      text: {
        en: "Adopted in response to fiscal pressure, forex shortages and high debt, the strategy marshals domestic and external, public and private resources behind Malawi 2063 — including concessional finance, FDI and stronger public financial management, coordinated through Pillar and Enabler Coordination Groups, a High-Level Forum and a Technical Secretariat. It is the successor to the 2022 review's SDG-financing and PECG partnerships.",
        fr: "Adoptée face aux tensions budgétaires, à la pénurie de devises et au poids de la dette, la stratégie mobilise des ressources intérieures et extérieures, publiques et privées, au service de Malawi 2063 — financements concessionnels, IDE et renforcement de la gestion des finances publiques —, coordonnées par les groupes de coordination des piliers et des catalyseurs, un forum de haut niveau et un secrétariat technique. Elle prend la suite du financement des ODD et des partenariats PECG de la revue de 2022."
      },
      source: "VNR 2026, p. 123–127" }
  ],

  factcheck: [
    { severity: "mislabel",
      issue: {
        en: "On the dashboard's flagship electricity chart, the line was plotted against a 0–30% scale while the axis was labelled 0%, 10%, 20%, 30% and a blank fifth tick where 40% should be. Every point therefore sat about a third higher than its own axis said: the 2024/25 point was drawn at the height of roughly 34% while labelled 25.9%.",
        fr: "Sur le graphique phare de l'électricité, la courbe était tracée sur une échelle de 0 à 30 % alors que l'axe portait les graduations 0 %, 10 %, 20 %, 30 % et une cinquième graduation vide là où aurait dû figurer 40 %. Chaque point se trouvait donc environ un tiers plus haut que ne l'indiquait son propre axe : le point 2024-2025 était dessiné à la hauteur d'environ 34 % tout en étant libellé 25,9 %."
      },
      resolution: {
        en: "The data was right and the axis was wrong. Read against a 0–30% scale the points recover exactly: 10.7% (2015) and 25.9% (2024/25), which is what the caption and the VNR both say. The empty fifth tick is the tell — the template drew five gridlines for a scale that only needed four. The series has been rebuilt from the data, and the electricity story is now told as an urban–rural gap chart, which is the honest shape of it.",
        fr: "Les données étaient justes, l'axe ne l'était pas. Rapportés à une échelle de 0 à 30 %, les points se rétablissent exactement : 10,7 % (2015) et 25,9 % (2024-2025), ce que la légende comme la RNV affirment. La cinquième graduation vide est l'indice révélateur : le gabarit a tracé cinq lignes de repère pour une échelle qui n'en demandait que quatre. La série a été reconstruite à partir des données, et le récit de l'électricité prend désormais la forme d'un graphique d'écart entre villes et campagnes — sa forme honnête."
      } },
    { severity: "mislabel",
      issue: {
        en: "The own-tax chart's y-axis read 0%, (blank), 40%, (blank), 60% across five evenly spaced gridlines — a scale that is not linear and two labels that are empty strings.",
        fr: "L'axe des ordonnées du graphique des impôts propres affichait 0 %, (vide), 40 %, (vide), 60 % sur cinq lignes de repère régulièrement espacées — une échelle qui n'est pas linéaire et deux étiquettes vides."
      },
      resolution: {
        en: "The line itself was drawn correctly on a 0–60% scale (19.8% in 2015, 54% in 2024), so the \"40%\" label sat where 30% actually falls. Same template defect as the electricity chart: the gridlines and the data were generated by different code. The chart is now a two-point series with correctly derived ticks, and the two figures — 19.8% and 54% — are the ones the VNR states.",
        fr: "La courbe elle-même était correctement tracée sur une échelle de 0 à 60 % (19,8 % en 2015, 54 % en 2024) : l'étiquette « 40 % » se trouvait donc là où tombe en réalité 30 %. Même défaut de gabarit que pour le graphique de l'électricité : les lignes de repère et les données étaient produites par des codes distincts. Le graphique est désormais une série à deux points, aux graduations correctement dérivées, et les deux valeurs — 19,8 % et 54 % — sont celles qu'énonce la RNV."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard presented the IMF Extended Credit Facility as live — \"anchoring reform\", \"the successful negotiation of the IMF Extended Credit Facility provides a framework for continued reform and limited direct budget support\".",
        fr: "Le tableau de bord présentait la facilité élargie de crédit du FMI comme active : « ancre les réformes », « la négociation réussie de la facilité élargie de crédit du FMI offre un cadre de poursuite des réformes et un appui budgétaire direct limité »."
      },
      resolution: {
        en: "The 2023 Extended Credit Facility automatically terminated on 14 May 2025, eighteen months after approval, without a single completed review. Malawi has been without an active IMF programme since. Presenting a lapsed facility as the anchor of the debt strategy is the most consequential error in the old dashboard: it is precisely the reassurance the debt numbers do not support. The instrument has been removed and the debt section now rests on the IMF's 2025 Article IV, which finds public debt at about 88% of GDP and on an unsustainable path.",
        fr: "La facilité élargie de crédit de 2023 a pris fin automatiquement le 14 mai 2025, dix-huit mois après son approbation, sans qu'une seule revue ait été menée à son terme. Le Malawi est depuis lors sans programme actif du FMI. Présenter une facilité caduque comme l'ancre de la stratégie d'endettement est l'erreur la plus lourde de conséquences de l'ancien tableau de bord : c'est précisément la réassurance que les chiffres de la dette ne permettent pas. L'instrument a été retiré et la section sur la dette s'appuie désormais sur l'article IV du FMI de 2025, qui situe la dette publique à environ 88 % du PIB, sur une trajectoire insoutenable."
      } },
    { severity: "mislabel",
      issue: {
        en: "The debt panel printed \"60%\" twice, in two adjacent tiles: once as the debt-sustainability benchmark (60% of GDP) and once as external debt service (60% of exports, 2023).",
        fr: "Le panneau consacré à la dette affichait deux fois « 60 % », dans deux vignettes adjacentes : une fois comme seuil de soutenabilité (60 % du PIB) et une fois comme service de la dette extérieure (60 % des exportations, 2023)."
      },
      resolution: {
        en: "Two different indicators, two different denominators and a coincidence of value, presented side by side with no visual distinction — an invitation to read one as the other. They are now separated: the 60%-of-GDP benchmark appears only on the debt chart, against the debt stock it benchmarks; external debt service (60% of exports against a 10% threshold) is reported in the debt narrative, in its own unit.",
        fr: "Deux indicateurs distincts, deux dénominateurs distincts et une coïncidence de valeur, juxtaposés sans aucune distinction visuelle — une invitation à lire l'un pour l'autre. Ils sont désormais séparés : le seuil de 60 % du PIB ne figure que sur le graphique de la dette, en regard de l'encours qu'il balise ; le service de la dette extérieure (60 % des exportations, contre un seuil de 10 %) est exposé dans le texte, dans son unité propre."
      } },
    { severity: "mislabel",
      issue: {
        en: "The water chart's second series, \"at least basic service\" (73%), was a single 2024 value drawn as a flat dashed line running the full width of the chart from 2015 to 2024.",
        fr: "La seconde série du graphique de l'eau, « service au moins élémentaire » (73 %), était une valeur unique de 2024 tracée comme une ligne horizontale en pointillés courant sur toute la largeur du graphique, de 2015 à 2024."
      },
      resolution: {
        en: "Drawn that way, the chart asserts a decade of perfectly unchanged basic water service — a trend no source provides and the VNR never claims. A single observation is not a series. The comparison that the figure genuinely supports is a ladder at the latest year — improved source 89%, basic service 73%, basic sanitation 40% — and that is how it is now shown.",
        fr: "Ainsi tracé, le graphique affirme une décennie de service d'eau élémentaire parfaitement stable — une tendance qu'aucune source ne fournit et que la RNV ne revendique jamais. Une observation isolée n'est pas une série. La comparaison que ce chiffre autorise réellement est celle d'une échelle à la dernière année disponible — source améliorée 89 %, service élémentaire 73 %, assainissement élémentaire 40 % — et c'est ainsi qu'elle est désormais présentée."
      } },
    { severity: "contradiction",
      issue: {
        en: "The dashboard's \"2026 Focus Goals\" were SDG 6, 7, 9, 11 and 17 — the identical set shown for every other country in the template — while Malawi's six review themes are SDG 1, 4, 7, 9, 13 and 17.",
        fr: "Les « objectifs prioritaires 2026 » du tableau de bord étaient les ODD 6, 7, 9, 11 et 17 — exactement le même jeu que pour tous les autres pays du gabarit — alors que les six thèmes de la revue malawienne sont les ODD 1, 4, 7, 9, 13 et 17."
      },
      resolution: {
        en: "Social protection (SDG 1), education (SDG 4) and climate action (SDG 13) were absent altogether — and climate is the single most frequent concept in Malawi's key messages, cited 18 times, more than any other and nearly double the next. A dashboard that omits Cyclone Freddy, cash transfers, girls' education and the rare-earth opportunity is not a dashboard of Malawi's review. The themes are now taken from the factsheet.",
        fr: "La protection sociale (ODD 1), l'éducation (ODD 4) et l'action climatique (ODD 13) étaient purement et simplement absentes — or le climat est le concept le plus fréquent des messages clés du Malawi, cité 18 fois, plus que tout autre et près du double du suivant. Un tableau de bord qui omet le cyclone Freddy, les transferts monétaires, l'éducation des filles et la perspective des terres rares n'est pas le tableau de bord de la revue malawienne. Les thèmes sont désormais repris de la fiche."
      } },
    { severity: "mislabel",
      issue: {
        en: "The SDG 11 panel showed a 30% dial captioned \"of Malawians are projected to live in urban areas by 2030\" and cited SDG indicator 11.1.1 beneath it.",
        fr: "Le panneau ODD 11 affichait un cadran à 30 % légendé « des Malawiens devraient vivre en zone urbaine d'ici à 2030 » et citait au-dessous l'indicateur ODD 11.1.1."
      },
      resolution: {
        en: "Indicator 11.1.1 measures the proportion of the urban population living in slums or informal settlements — not the urbanization rate, and not a projection. The same dial in the Liberia dashboard does show a slum share, which is how the error travelled. The projection could not be traced to the factsheet, which has no SDG 11 theme at all, so it has been dropped rather than dressed in a citation that contradicts it.",
        fr: "L'indicateur 11.1.1 mesure la proportion de la population urbaine vivant dans des taudis ou des établissements informels — non le taux d'urbanisation, et pas davantage une projection. Le même cadran, dans le tableau de bord du Libéria, affiche bien une part de population en taudis : c'est ainsi que l'erreur a voyagé. La projection n'a pu être rattachée à la fiche, laquelle ne comporte aucun thème relatif à l'ODD 11 ; elle a donc été supprimée plutôt qu'habillée d'une citation qui la contredit."
      } },
    { severity: "corrected",
      issue: {
        en: "Cyclone Freddy was quantified in the dashboard as \"126,511 households affected (2023)\" — a single household-level figure standing in for the whole disaster.",
        fr: "Le cyclone Freddy était quantifié dans le tableau de bord par « 126 511 ménages touchés (2023) » — un chiffre unique, au niveau des ménages, tenant lieu de bilan de la catastrophe."
      },
      resolution: {
        en: "The household figure cannot be the number \"affected\": contemporaneous reporting by Malawi's Department of Disaster Management Affairs, OCHA and the IFRC records 679 dead, 537 missing, 1,724 injured, around 2.3 million people affected and more than 500,000 displaced (about 101,648 households in 534 camps at one point). 126,511 households is of the order of the displaced, not the affected. The people-level figures, which are the ones that can be sourced, are used instead — and Cyclone Freddy is treated as the organising fact of Malawi's planning rather than as one statistic in a policy tile.",
        fr: "Le chiffre des ménages ne peut correspondre aux personnes « touchées » : les rapports de l'époque du Département malawien de la gestion des catastrophes, d'OCHA et de la FICR font état de 679 morts, 537 disparus, 1 724 blessés, environ 2,3 millions de personnes touchées et plus de 500 000 déplacées (environ 101 648 ménages répartis dans 534 camps à un moment donné). 126 511 ménages est un ordre de grandeur de déplacés, non de personnes touchées. Ce sont les chiffres exprimés en personnes, seuls sourçables, qui sont retenus — et le cyclone Freddy est traité comme le fait structurant de la planification malawienne, non comme une statistique dans une vignette."
      } },
    { severity: "unverified",
      issue: {
        en: "The factsheet describes \"newly discovered world-leading rare earth deposits\" as a major opportunity under SDG 9. The old dashboard, remarkably, did not mention rare earths anywhere.",
        fr: "La fiche présente des « gisements de terres rares de tout premier plan mondial nouvellement mis au jour » comme une occasion majeure au titre de l'ODD 9. Fait remarquable, l'ancien tableau de bord ne mentionnait nulle part les terres rares."
      },
      resolution: {
        en: "The deposit is real and the description is close to right, with two qualifications. The Kangankunde carbonatite has been known for decades — what is new is the 2024 feasibility work defining a very high-grade, low-thorium resource, which is why it is now called world-leading. And first production from Lindian Resources' project is expected only in late 2026. The claim is therefore reported as a prospect: no figure anywhere in this file contains rare-earth revenue, because Malawi has not yet earned any.",
        fr: "Le gisement est réel et la description proche de la vérité, sous deux réserves. Le carbonatite de Kangankunde est connu depuis des décennies : ce qui est nouveau, ce sont les études de faisabilité de 2024 définissant une ressource à très haute teneur et à faible teneur en thorium — d'où la qualification de tout premier plan mondial. En outre, la première production du projet de Lindian Resources n'est attendue que fin 2026. L'affirmation est donc rapportée comme une perspective : aucun chiffre de ce fichier ne contient de recettes issues des terres rares, car le Malawi n'en a pas encore perçu."
      } },
    { severity: "corrected",
      issue: {
        en: "In the text extraction of the factsheet, Malawi's nine concept-frequency counts are separated from their labels, and two additional numerals — a \"4\" and a second \"13\" — appear immediately after them.",
        fr: "Dans l'extraction textuelle de la fiche, les neuf fréquences de concepts du Malawi sont séparées de leurs libellés, et deux chiffres supplémentaires — un « 4 » et un second « 13 » — apparaissent immédiatement à leur suite."
      },
      resolution: {
        en: "Those two numerals are not concept counts. Read back from the PDF by position, they are the large SDG theme numerals for SDG 4 (Education & Future Skills) and SDG 13 (Building Climate Resilience), which the extractor emitted at the end of the page instead of beside their headings. The nine counts, recovered by column, are: climate resilience 18, growth & development 13, social protection 11, energy & clean cooking 9, financing & debt 9, governance & data 9, industry & mining 6, infrastructure 5, partnerships 4. Bars are strictly proportional to these.",
        fr: "Ces deux chiffres ne sont pas des fréquences. Relus dans le PDF d'après leur position, ce sont les grands numéros d'objectif de l'ODD 4 (Éducation et compétences d'avenir) et de l'ODD 13 (Construire la résilience climatique), que l'outil d'extraction a rejetés en fin de page au lieu de les placer près de leurs intitulés. Les neuf fréquences, restituées par colonne, sont : résilience climatique 18, croissance et développement 13, protection sociale 11, énergie et cuisson propre 9, financement et dette 9, gouvernance et données 9, industrie et mines 6, infrastructures 5, partenariats 4. Les barres leur sont strictement proportionnelles."
      } }
  ]
});
