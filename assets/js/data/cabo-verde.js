/* Cabo Verde — VNR 2021 → 2026. Source factsheet authored in ENGLISH; the French
   here is a translation. Fact-checked against data/factsheets.txt (lines 255–326),
   the IMF 2025 Article IV / ECF-RSF reviews, the World Economics Governance Index
   2026 and World Bank / AfDB national accounts. The previous "Cabo Verde Dashboard"
   was a clone of a French template and is contradicted on almost every headline
   number; see `factcheck` at the bottom. */
window.VNR.register({
  slug: "cabo-verde",
  iso: "CV",
  name: { en: "Cabo Verde", fr: "Cabo Verde" },
  region: "west",
  vnrPrev: 2021,
  vnrCycles: [2021, 2026],
  langs: ["EN", "PT"],
  sourceLang: "en",
  factsheetPdf: "factsheets/cabo-verde.pdf",

  tagline: {
    en: "Translating ambition into results under Ambition 2030: growth, governance and resilience.",
    fr: "Traduire l'ambition en résultats dans le cadre d'Ambition 2030 : croissance, gouvernance et résilience."
  },

  themes: [
    { sdg: 4,
      title: { en: "Human Capital & the Demographic Dividend", fr: "Capital humain et dividende démographique" },
      text: {
        en: "In its third demographic transition, Cabo Verde needs a new population policy that values human capital to sustain productivity gains.",
        fr: "Engagé dans sa troisième transition démographique, Cabo Verde a besoin d'une nouvelle politique de population qui valorise le capital humain pour pérenniser les gains de productivité."
      } },
    { sdg: 6,
      title: { en: "Near-Universal Water Access", fr: "Un accès à l'eau quasi universel" },
      text: {
        en: "Cabo Verde is close to universal access to potable water (94.8%) and sanitation, though irrigation efficiency remains low.",
        fr: "Cabo Verde est proche de l'accès universel à l'eau potable (94,8 %) et à l'assainissement, même si l'efficience de l'irrigation reste faible."
      } },
    { sdg: 8,
      title: { en: "Strong, Shared Growth", fr: "Une croissance forte et partagée" },
      text: {
        en: "Average annual growth of 8.4% (2021–2025) reduced unemployment, absolute poverty and regional asymmetries, expanding shared prosperity.",
        fr: "Une croissance annuelle moyenne de 8,4 % (2021-2025) a fait reculer le chômage, la pauvreté absolue et les asymétries régionales, élargissant la prospérité partagée."
      } },
    { sdg: 13,
      title: { en: "Rising Climate Pressure", fr: "Une pression climatique croissante" },
      text: {
        en: "Prolonged droughts, saltwater intrusion and external shocks threaten water and sanitation, requiring investment in wastewater treatment and reuse.",
        fr: "Sécheresses prolongées, intrusion saline et chocs externes menacent l'eau et l'assainissement, ce qui exige d'investir dans le traitement et la réutilisation des eaux usées."
      } },
    { sdg: 16,
      title: { en: "Focus on Governance", fr: "La gouvernance au premier plan" },
      text: {
        en: "Cabo Verde ranks as Africa's best-governed country (World Economics Governance Index 2026), with solid institutions, rigorous public finance management and high transparency.",
        fr: "Cabo Verde est le pays le mieux gouverné d'Afrique (Indice de gouvernance World Economics 2026), avec des institutions solides, une gestion rigoureuse des finances publiques et une transparence élevée."
      } },
    { sdg: 17,
      title: { en: "Fiscal Self-Reliance", fr: "Autonomie budgétaire" },
      text: {
        en: "90% of the State Budget is financed from internal resources, demonstrating growing fiscal resilience, with civil society aligned to Ambition 2030.",
        fr: "90 % du budget de l'État est financé sur ressources internes, signe d'une résilience budgétaire croissante, la société civile étant alignée sur Ambition 2030."
      } }
  ],

  continuity: [
    { prev: { en: "Sustainable recovery agenda (2021)", fr: "Programme de relance durable (2021)" },
      status: "sustained",
      now: { en: "Ambition 2030 & Shared Prosperity", fr: "Ambition 2030 et prospérité partagée" } },
    { prev: { en: "Recession — 14.8% GDP contraction", fr: "Récession — contraction du PIB de 14,8 %" },
      status: "evolved",
      now: { en: "8.4% average GDP growth (2021–2025)", fr: "Croissance moyenne du PIB de 8,4 % (2021-2025)" } },
    { prev: { en: "Gender parity & strong institutions", fr: "Parité de genre et institutions solides" },
      status: "evolved",
      now: { en: "Africa's best-governed country (World Economics Governance Index)", fr: "Pays le mieux gouverné d'Afrique (Indice de gouvernance World Economics)" } },
    { prev: { en: "Emergency budget & fiscal response", fr: "Budget d'urgence et réponse budgétaire" },
      status: "sustained",
      now: { en: "90% of the budget from internal resources", fr: "90 % du budget sur ressources internes" } },
    { prev: { en: "Drought & climate pressure", fr: "Sécheresse et pression climatique" },
      status: "evolved",
      now: { en: "94.8% water access under continuing climate pressure", fr: "94,8 % d'accès à l'eau sous une pression climatique persistante" } }
  ],

  concepts: {
    caption: {
      en: "Cabo Verde's review centres on strong growth, top-ranked governance and fiscal self-reliance.",
      fr: "La revue de Cabo Verde s'articule autour d'une croissance forte, d'une gouvernance de premier rang et de l'autonomie budgétaire."
    },
    items: [
      { label: { en: "climate & water", fr: "climat et eau" }, value: 14 },
      { label: { en: "governance", fr: "gouvernance" }, value: 9 },
      { label: { en: "growth & prosperity", fr: "croissance et prospérité" }, value: 8 },
      { label: { en: "fiscal resilience", fr: "résilience budgétaire" }, value: 7 },
      { label: { en: "poverty & inclusion", fr: "pauvreté et inclusion" }, value: 7 },
      { label: { en: "productivity & demographics", fr: "productivité et démographie" }, value: 6 },
      { label: { en: "tourism & private sector", fr: "tourisme et secteur privé" }, value: 3 },
      { label: { en: "civil society", fr: "société civile" }, value: 2 },
      { label: { en: "infrastructure", fr: "infrastructures" }, value: 2 }
    ]
  },

  indicators: [
    { id: "growth_avg", sdg: 8,
      label: { en: "Average annual real GDP growth, 2021–2025", fr: "Croissance annuelle moyenne du PIB réel, 2021-2025" },
      value: 8.4, unit: "%",
      note: { en: "A five-year average, not a single year. It is inflated by the 17.7% tourism rebound of 2022; growth in 2025 was 5.2%.",
              fr: "Une moyenne sur cinq ans, et non un chiffre annuel. Elle est gonflée par le rebond touristique de 17,7 % en 2022 ; la croissance de 2025 s'établit à 5,2 %." },
      source: "VNR 2026 factsheet · IMF WEO / AfDB national accounts" },
    { id: "water_access", sdg: 6,
      label: { en: "Access to potable water", fr: "Accès à l'eau potable" },
      value: 94.8, unit: "%",
      note: { en: "The national figure for access to potable water. It is not the same as the JMP \"safely managed\" measure, and it says nothing about irrigation, where efficiency remains low.",
              fr: "Chiffre national de l'accès à l'eau potable. À distinguer de la mesure « gérée en toute sécurité » du JMP ; il ne dit rien de l'irrigation, dont l'efficience reste faible." },
      source: "VNR 2026 factsheet · SDG indicator 6.1.1" },
    { id: "budget_internal", sdg: 17,
      label: { en: "State Budget financed from internal resources", fr: "Budget de l'État financé sur ressources internes" },
      value: 90, unit: "%",
      note: { en: "A flow measure of self-reliance. It coexists with a debt stock still above 100% of GDP — the two are not in contradiction.",
              fr: "Mesure d'autonomie en termes de flux. Elle coexiste avec un encours de dette encore supérieur à 100 % du PIB — les deux ne se contredisent pas." },
      source: "VNR 2026 factsheet" },
    { id: "governance", sdg: 16,
      label: { en: "World Economics Governance Index 2026 score", fr: "Score à l'Indice de gouvernance World Economics 2026" },
      value: 74.0, unit: "/100",
      note: { en: "First in Africa, ahead of Mauritius (68.4), and 29th worldwide. Driven by political rights (95.2) and press freedom (77.6).",
              fr: "Premier rang africain, devant Maurice (68,4), et 29e rang mondial. Porté par les droits politiques (95,2) et la liberté de la presse (77,6)." },
      source: "World Economics Governance Index 2026" },
    { id: "debt", sdg: 17,
      label: { en: "Public debt, % of GDP (2025)", fr: "Dette publique, en % du PIB (2025)" },
      value: 103.7, unit: "% of GDP",
      note: { en: "Down from a pandemic peak near 141% in 2020. Still the binding constraint on SDG investment despite the 90% budget self-reliance figure.",
              fr: "En recul par rapport au pic pandémique proche de 141 % en 2020. Demeure la contrainte majeure sur l'investissement ODD, malgré les 90 % d'autonomie budgétaire." },
      source: "IMF 2025 Article IV · ECF/RSF reviews" }
  ],

  charts: [
    { id: "growth", type: "line", sdg: 8,
      title: { en: "Real GDP growth, % per year", fr: "Croissance du PIB réel, en % par an" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "gdp", label: { en: "Real GDP growth", fr: "Croissance du PIB réel" },
          points: [
            { x: "2019", y: 5.7 },
            { x: "2020", y: -14.8 },
            { x: "2021", y: 7.0 },
            { x: "2022", y: 17.7 },
            { x: "2023", y: 5.1 },
            { x: "2024", y: 7.3 },
            { x: "2025", y: 5.2 }
          ] }
      ],
      insight: {
        en: "This series is the arithmetic behind the factsheet's headline: 7.0, 17.7, 5.1, 7.3 and 5.2 average out to 8.4% — the figure Cabo Verde reports for 2021–2025. Shown as a line rather than a single number, it reads differently. Nearly half the average is the 2022 tourism rebound off a −14.8% pandemic floor; the underlying pace, once the base effect washes out, is closer to 5–7%. That is still strong for a small island state, but it is not 8.4% a year.",
        fr: "Cette série est l'arithmétique qui sous-tend le chiffre phare de la fiche : 7,0, 17,7, 5,1, 7,3 et 5,2 donnent une moyenne de 8,4 % — le chiffre annoncé par Cabo Verde pour 2021-2025. Présentée en courbe plutôt qu'en valeur unique, elle se lit autrement. Près de la moitié de cette moyenne tient au rebond touristique de 2022, après un plancher pandémique de −14,8 % ; le rythme sous-jacent, une fois l'effet de base dissipé, avoisine plutôt 5 à 7 %. C'est déjà remarquable pour un petit État insulaire, mais ce n'est pas 8,4 % par an."
      },
      source: "VNR 2026 factsheet · IMF WEO · AfDB Cabo Verde Economic Outlook · World Bank MPO" },

    { id: "debt", type: "line", sdg: 17,
      title: { en: "Public debt, % of GDP", fr: "Dette publique, en % du PIB" },
      unit: "%",
      xLabel: { en: "Year", fr: "Année" },
      series: [
        { key: "debt", label: { en: "Public debt", fr: "Dette publique" },
          points: [
            { x: "2022", y: 123.7 },
            { x: "2023", y: 113.8 },
            { x: "2024", y: 109.2 },
            { x: "2025", y: 103.7 }
          ] }
      ],
      insight: {
        en: "Twenty points of GDP shed in three years, from a pandemic peak close to 141% in 2020 — the fastest deleveraging Cabo Verde has managed, and the reason the IMF now calls the debt sustainable. It is also the number that qualifies the celebration: a country financing 90% of its budget at home is still carrying a debt stock larger than its annual output, and the authorities' own medium-term anchor is only around 70% of GDP by 2034.",
        fr: "Vingt points de PIB effacés en trois ans, depuis un pic pandémique proche de 141 % en 2020 — le désendettement le plus rapide jamais réalisé par Cabo Verde, et la raison pour laquelle le FMI juge désormais la dette soutenable. C'est aussi le chiffre qui tempère la célébration : un pays qui finance 90 % de son budget sur ressources propres porte encore un encours de dette supérieur à sa production annuelle, et l'ancrage à moyen terme retenu par les autorités n'est que d'environ 70 % du PIB à l'horizon 2034."
      },
      source: "IMF 2025 Article IV · ECF/RSF reviews (Country Reports 24/257, 25/43, 26/53)" },

    { id: "budget_mix", type: "gap", sdg: 17,
      title: { en: "How the State Budget is financed", fr: "Financement du budget de l'État" },
      unit: "%",
      items: [
        { label: { en: "Internal resources", fr: "Ressources internes" }, value: 90, emphasis: true },
        { label: { en: "External resources", fr: "Ressources externes" }, value: 10, emphasis: false }
      ],
      insight: {
        en: "Nine in every ten escudos the State spends are raised at home. For comparison, Tanzania — a much larger economy that makes fiscal self-reliance its headline claim — reports 78%. Cabo Verde's dependence has shifted from the aid it receives to the debt it has already contracted: the flow is self-financed, the stock is not.",
        fr: "Neuf escudos sur dix dépensés par l'État sont levés sur le territoire national. À titre de comparaison, la Tanzanie — économie bien plus vaste qui fait de l'autonomie budgétaire son argument principal — déclare 78 %. La dépendance de Cabo Verde s'est déplacée de l'aide reçue vers la dette déjà contractée : le flux est autofinancé, l'encours ne l'est pas."
      },
      source: "VNR 2026 factsheet" },

    { id: "governance", type: "bars", sdg: 16,
      title: { en: "World Economics Governance Index 2026, score out of 100", fr: "Indice de gouvernance World Economics 2026, score sur 100" },
      unit: "/100",
      items: [
        { label: { en: "Cabo Verde", fr: "Cabo Verde" }, value: 74.0, emphasis: true },
        { label: { en: "Mauritius", fr: "Maurice" }, value: 68.4 },
        { label: { en: "Namibia", fr: "Namibie" }, value: 65.0 },
        { label: { en: "South Africa", fr: "Afrique du Sud" }, value: 62.3 }
      ],
      insight: {
        en: "Cabo Verde overtook Mauritius to top the continent in 2026, and ranks 29th of all countries assessed — ahead of economies many times its size. The index is built from corruption control, rule of law, press freedom and political rights; Cabo Verde's lead comes almost entirely from the last two (95.2 and 77.6). Governance is the one asset an archipelago of half a million people can accumulate without scale, and the VNR treats it as the country's principal comparative advantage rather than a background condition.",
        fr: "Cabo Verde a devancé Maurice pour prendre la tête du continent en 2026 et se classe 29e de l'ensemble des pays évalués — devant des économies plusieurs fois plus grandes. L'indice combine contrôle de la corruption, État de droit, liberté de la presse et droits politiques ; l'avance de Cabo Verde tient presque entièrement aux deux derniers (95,2 et 77,6). La gouvernance est le seul actif qu'un archipel d'un demi-million d'habitants peut accumuler sans effet de taille, et la RNV en fait le principal avantage comparatif du pays plutôt qu'une simple toile de fond."
      },
      source: "World Economics Governance Index 2026" }
  ],

  instruments: [
    { name: { en: "Ambition 2030", fr: "Ambition 2030" },
      kicker: { en: "national framework", fr: "cadre national" },
      text: {
        en: "The frame the whole review is written against: translating ambition into results across growth, governance and resilience. The factsheet's distinguishing claim is not the ambition itself but its ownership — civil society is reported as aligned to it, and the SDG agenda is carried inside it rather than tracked separately.",
        fr: "Le cadre de référence de toute la revue : traduire l'ambition en résultats en matière de croissance, de gouvernance et de résilience. L'élément distinctif de la fiche n'est pas l'ambition elle-même mais son appropriation — la société civile y est déclarée alignée, et l'agenda ODD est porté à l'intérieur de ce cadre plutôt que suivi séparément."
      },
      source: "VNR 2026 factsheet" },
    { name: { en: "Fiscal self-reliance", fr: "Autonomie budgétaire" },
      kicker: { en: "90% of the budget", fr: "90 % du budget" },
      text: {
        en: "Ninety per cent of the State Budget is now financed from internal resources. The 2021 review reported an emergency budget and a crisis fiscal response; five years on, the same theme reappears as a claim of resilience. The unfinished half of the story is the debt stock the emergency left behind.",
        fr: "Quatre-vingt-dix pour cent du budget de l'État sont désormais financés sur ressources internes. La revue de 2021 faisait état d'un budget d'urgence et d'une réponse budgétaire de crise ; cinq ans plus tard, le même thème réapparaît comme une affirmation de résilience. La moitié inachevée de l'histoire, c'est l'encours de dette laissé par l'urgence."
      },
      source: "VNR 2026 factsheet" },
    { name: { en: "IMF ECF & Resilience and Sustainability Facility", fr: "FEC du FMI et Facilité pour la résilience et la durabilité" },
      kicker: { en: "141% → 103.7% of GDP", fr: "141 % → 103,7 % du PIB" },
      text: {
        en: "The programme under which the debt reduction was delivered. The Extended Credit Facility anchored fiscal consolidation while the Resilience and Sustainability Facility tied disbursement to climate reform — the instrument through which Cabo Verde's debt problem and its climate problem are being handled as one file.",
        fr: "Le programme au titre duquel la réduction de la dette a été réalisée. La Facilité élargie de crédit a servi d'ancrage à la consolidation budgétaire, tandis que la Facilité pour la résilience et la durabilité a conditionné les décaissements à des réformes climatiques — l'instrument par lequel le problème de dette et le problème climatique de Cabo Verde sont traités comme un seul dossier."
      },
      source: "IMF 2025 Article IV · ECF/RSF reviews" },
    { name: { en: "A new population policy", fr: "Une nouvelle politique de population" },
      kicker: { en: "third demographic transition", fr: "troisième transition démographique" },
      text: {
        en: "The one theme in the review with no number attached, and arguably the most consequential. Cabo Verde is entering its third demographic transition, and the factsheet states plainly that a new population policy valuing human capital is required if the productivity gains behind the growth figures are to be sustained.",
        fr: "Le seul thème de la revue auquel aucun chiffre n'est attaché, et sans doute le plus lourd de conséquences. Cabo Verde entre dans sa troisième transition démographique, et la fiche indique clairement qu'une nouvelle politique de population valorisant le capital humain est nécessaire pour pérenniser les gains de productivité qui sous-tendent les chiffres de croissance."
      },
      source: "VNR 2026 factsheet" },
    { name: { en: "Wastewater treatment and reuse", fr: "Traitement et réutilisation des eaux usées" },
      kicker: { en: "the irrigation gap", fr: "le déficit d'irrigation" },
      text: {
        en: "Access to potable water is close to universal at 94.8%; irrigation efficiency is not. Prolonged drought and saltwater intrusion make treated wastewater the marginal source of supply, and the factsheet names investment in treatment and reuse — not new abstraction — as the response.",
        fr: "L'accès à l'eau potable est quasi universel, à 94,8 % ; l'efficience de l'irrigation ne l'est pas. Sécheresses prolongées et intrusion saline font des eaux usées traitées la ressource d'appoint, et la fiche désigne l'investissement dans le traitement et la réutilisation — et non de nouveaux prélèvements — comme la réponse."
      },
      source: "VNR 2026 factsheet" }
  ],

  factcheck: [
    { severity: "contradiction",
      issue: {
        en: "The old dashboard headlined \"GDP growth — 4.1%\" (2024) and plotted a series of 7.0 (2021), 17.7 (2022), 4.5 (2023) and 4.1 (2024). The factsheet reports average annual growth of 8.4% over 2021–2025.",
        fr: "L'ancien tableau de bord affichait « croissance du PIB — 4,1 % » (2024) et traçait une série de 7,0 (2021), 17,7 (2022), 4,5 (2023) et 4,1 (2024). La fiche indique une croissance annuelle moyenne de 8,4 % sur 2021-2025."
      },
      resolution: {
        en: "The factsheet is right and the dashboard's last two points are wrong. Cabo Verde grew 5.1% in 2023 and 7.3% in 2024 (not 4.5% and 4.1%), and 5.2% in 2025. With 7.0 and 17.7 for 2021–22, the five-year mean is 8.46% — which is exactly the factsheet's 8.4%. The corrected series is now plotted in full, and the insight states openly that the average is carried by the 2022 rebound.",
        fr: "La fiche a raison et les deux derniers points du tableau de bord sont faux. Cabo Verde a crû de 5,1 % en 2023 et de 7,3 % en 2024 (et non de 4,5 % et 4,1 %), puis de 5,2 % en 2025. Avec 7,0 et 17,7 pour 2021-2022, la moyenne quinquennale s'établit à 8,46 % — soit exactement les 8,4 % de la fiche. La série corrigée est désormais tracée intégralement, et l'analyse indique franchement que la moyenne est portée par le rebond de 2022."
      } },
    { severity: "contradiction",
      issue: {
        en: "The old dashboard headlined public debt at 128% of GDP for 2024, with a peak of 155% in 2020, and repeated the 128% figure across four separate panels.",
        fr: "L'ancien tableau de bord affichait une dette publique de 128 % du PIB en 2024, avec un pic de 155 % en 2020, et répétait ce chiffre de 128 % dans quatre panneaux distincts."
      },
      resolution: {
        en: "Both figures are wrong. The IMF puts public debt at 123.7% of GDP in 2022, 113.8% in 2023, 109.2% in 2024 and 103.7% in 2025; the pandemic peak was around 141% in 2020, not 155%. The dashboard was showing a 2024 value that Cabo Verde had already passed two years earlier. The IMF series is now plotted, and the 128% and 155% figures have been dropped.",
        fr: "Les deux chiffres sont faux. Le FMI établit la dette publique à 123,7 % du PIB en 2022, 113,8 % en 2023, 109,2 % en 2024 et 103,7 % en 2025 ; le pic pandémique s'est situé autour de 141 % en 2020, et non 155 %. Le tableau de bord affichait pour 2024 une valeur que Cabo Verde avait déjà dépassée deux ans plus tôt. La série du FMI est désormais tracée, et les chiffres de 128 % et 155 % ont été supprimés."
      } },
    { severity: "mislabel",
      issue: {
        en: "The chart titled \"GDP growth and tourist arrivals, 2019–2024\" plotted only GDP growth. Its legend read \"GDP growth (%)\" alongside a second entry, \"Coc de la COVID-19\" — a misspelling of \"Choc\" used to label a single red data point as though it were a data series.",
        fr: "Le graphique intitulé « Croissance du PIB et arrivées touristiques, 2019-2024 » ne traçait que la croissance du PIB. Sa légende indiquait « Croissance du PIB ( %) » aux côtés d'une seconde entrée, « Coc de la COVID-19 » — une faute de frappe pour « Choc », employée pour légender un unique point rouge comme s'il s'agissait d'une série."
      },
      resolution: {
        en: "There were never any tourist-arrival data on the chart. The title has been corrected to what is actually plotted — real GDP growth — and the COVID point is now handled in the insight text rather than smuggled into the legend. No arrivals figure that could be traced to a citable source was found, so none is shown.",
        fr: "Aucune donnée d'arrivées touristiques n'a jamais figuré sur ce graphique. Le titre a été corrigé pour désigner ce qui est effectivement tracé — la croissance du PIB réel — et le point COVID est désormais traité dans le texte d'analyse plutôt que glissé dans la légende. Aucun chiffre d'arrivées rattachable à une source citable n'a été trouvé ; aucun n'est donc affiché."
      } },
    { severity: "contradiction",
      issue: {
        en: "The old dashboard's water panel reported urban water access at 92% and rural at 80%. The factsheet reports access to potable water at 94.8%, close to universal.",
        fr: "Le panneau « eau » de l'ancien tableau de bord indiquait 92 % d'accès en zone urbaine et 80 % en zone rurale. La fiche indique un accès à l'eau potable de 94,8 %, proche de l'universalité."
      },
      resolution: {
        en: "The 94.8% national figure is retained as the factsheet's own. The 92%/80% urban–rural split could not be traced to the factsheet, to the WHO/UNICEF JMP or to any citable national source, and its rural value is not compatible with a 94.8% national average on any plausible population weighting. The split has been dropped. Note that 94.8% is access to potable water and is not the JMP \"safely managed\" measure, which is considerably lower — the two must not be used interchangeably.",
        fr: "Le chiffre national de 94,8 % est conservé comme donnée propre à la fiche. La ventilation urbain-rural de 92 %/80 % n'a pu être rattachée ni à la fiche, ni au JMP OMS/UNICEF, ni à aucune source nationale citable, et sa valeur rurale n'est compatible avec une moyenne nationale de 94,8 % sous aucune pondération démographique plausible. Cette ventilation a été supprimée. À noter : 94,8 % correspond à l'accès à l'eau potable et non à la mesure « gérée en toute sécurité » du JMP, sensiblement inférieure — les deux ne doivent pas être employées indifféremment."
      } },
    { severity: "unverified",
      issue: {
        en: "The old dashboard headlined electricity access at 92% and renewables at 28% of the mix, and built a whole SDG 7 section, a PNAER panel and an energy-water nexus narrative on top of them. Neither figure appears anywhere on the factsheet.",
        fr: "L'ancien tableau de bord affichait 92 % d'accès à l'électricité et 28 % de renouvelables dans le mix, et bâtissait sur ces chiffres toute une section ODD 7, un panneau PNAER et un récit sur le nexus énergie-eau. Aucun des deux chiffres ne figure sur la fiche."
      },
      resolution: {
        en: "Both are also stale. The World Bank puts Cabo Verde's electricity access at 98.6% in 2023 — with rural access at 100% — not 92%, and the renewable share of generation at roughly 24%, not 28%. More fundamentally, SDG 7 is not one of the six themes Cabo Verde's review is built on: those are SDGs 4, 6, 8, 13, 16 and 17. The energy section has been removed rather than re-based on figures the country's own review does not put forward.",
        fr: "Les deux chiffres sont en outre périmés. La Banque mondiale situe l'accès à l'électricité de Cabo Verde à 98,6 % en 2023 — avec 100 % en zone rurale — et non 92 %, et la part des renouvelables dans la production à environ 24 %, et non 28 %. Plus fondamentalement, l'ODD 7 ne fait pas partie des six thèmes structurant la revue de Cabo Verde : ceux-ci sont les ODD 4, 6, 8, 13, 16 et 17. La section énergie a été retirée plutôt que reconstruite sur des chiffres que la revue du pays elle-même n'avance pas."
      } },
    { severity: "unverified",
      issue: {
        en: "The old dashboard presented tourism at ~28% of GDP, remittances at ~15% of GDP, tax revenue at 23% of GDP, an EEZ of 734,000 km² with 24% under protection, external debt service at ~25% of exports, internet access at 72%, three submarine cables, and €400M of investment needed for the renewables target — none of it on the factsheet, all of it hedged with a tilde or an \"approximately\".",
        fr: "L'ancien tableau de bord présentait un tourisme à ~28 % du PIB, des transferts à ~15 % du PIB, des recettes fiscales à 23 % du PIB, une ZEE de 734 000 km² protégée à 24 %, un service de la dette extérieure à ~25 % des exportations, un accès à Internet de 72 %, trois câbles sous-marins et 400 M€ d'investissement nécessaires pour l'objectif renouvelables — rien de tout cela ne figure sur la fiche, et tout est assorti d'un tilde ou d'un « environ »."
      },
      resolution: {
        en: "None of these could be traced to the factsheet or to a citable source at the precision claimed. Following the rule that it is better to show fewer, solid numbers, all have been dropped. The dashboard now carries five headline indicators instead of a dozen, and every one of them has a source.",
        fr: "Aucun de ces chiffres n'a pu être rattaché à la fiche ou à une source citable au degré de précision affiché. Conformément à la règle voulant qu'il vaut mieux présenter moins de chiffres, mais solides, tous ont été supprimés. Le tableau de bord porte désormais cinq indicateurs de tête au lieu d'une douzaine, et chacun est sourcé."
      } },
    { severity: "corrected",
      issue: {
        en: "The factsheet credits Cabo Verde's first-in-Africa governance ranking to \"World Economic Governance 2026\", an organisation of that name does not exist.",
        fr: "La fiche attribue le premier rang africain de Cabo Verde en matière de gouvernance à « World Economic Governance 2026 » ; aucune organisation de ce nom n'existe."
      },
      resolution: {
        en: "The source is the World Economics Governance Index 2026, which scores Cabo Verde 74.0 out of 100 — first in Africa, ahead of Mauritius (68.4), Namibia (65.0) and South Africa (62.3), and 29th worldwide. The claim is correct; only the name of the index was wrong, and it has been corrected throughout.",
        fr: "La source est l'Indice de gouvernance World Economics 2026, qui attribue à Cabo Verde un score de 74,0 sur 100 — premier rang africain, devant Maurice (68,4), la Namibie (65,0) et l'Afrique du Sud (62,3), et 29e rang mondial. L'affirmation est exacte ; seul le nom de l'indice était erroné et il a été corrigé partout."
      } },
    { severity: "mislabel",
      issue: {
        en: "The entire Cabo Verde dashboard was written in French, including its navigation, chart legends and every panel of prose. Cabo Verde's factsheet is authored in English and the country's official language is Portuguese.",
        fr: "L'intégralité du tableau de bord de Cabo Verde était rédigée en français, y compris sa navigation, ses légendes de graphiques et tous ses paragraphes. La fiche de Cabo Verde est rédigée en anglais et la langue officielle du pays est le portugais."
      },
      resolution: {
        en: "A residue of the French template every dashboard in this set was cloned from — the same template that left \"IWRM score (/100)\" sitting over tax-revenue data on other countries' pages. All text now comes from a bilingual data layer in which English is the source wording for Cabo Verde and French is a translation, so a panel can no longer display a language its source document was not written in.",
        fr: "Un résidu du gabarit français dont tous les tableaux de bord de cette série ont été clonés — le même gabarit qui laissait « score GIRE (/100) » au-dessus de données de recettes fiscales sur les pages d'autres pays. Tout le texte provient désormais d'une couche de données bilingue dans laquelle l'anglais est la langue source pour Cabo Verde et le français une traduction ; un panneau ne peut donc plus s'afficher dans une langue qui n'est pas celle de son document source."
      } },
    { severity: "unverified",
      issue: {
        en: "The old dashboard cited VNR page ranges — \"p.45–52\", \"p.85–95\", \"p.20–28\" — for a 2026 review that had not been published when the dashboard was built.",
        fr: "L'ancien tableau de bord citait des plages de pages de la RNV — « p. 45-52 », « p. 85-95 », « p. 20-28 » — pour une revue 2026 non encore publiée au moment de sa réalisation."
      },
      resolution: {
        en: "These citations cannot be checked and appear to have been generated rather than read. All source fields have been reduced to the document actually consulted — the VNR 2026 factsheet, which is itself marked as a consultation draft — plus the external database or report where an external figure was used.",
        fr: "Ces citations sont invérifiables et semblent avoir été générées plutôt que relevées. Tous les champs de source ont été ramenés au document effectivement consulté — la fiche RNV 2026, elle-même signalée comme projet soumis à consultation — auquel s'ajoute la base ou le rapport externe lorsqu'un chiffre externe est utilisé."
      } }
  ]
});
