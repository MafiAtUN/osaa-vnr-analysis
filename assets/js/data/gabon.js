/* Gabon — ENV 2022 → 2026. Rapport soumis en FRANÇAIS : le français est la langue
   source, l'anglais une traduction.

   SOURCE FAISANT AUTORITÉ : le rapport intégral ENV 2026 (165 p.), y compris sa
   propre section « Messages clés » et ses annexes statistiques 1 et 2.
   Le PDF « Main Messages » autonome — et donc la fiche OSAA qui en dérive — a publié
   les PROJECTIONS 2025 comme si elles étaient les valeurs courantes (92,8 / 26,9 /
   7,1 / 27 / 4,6 / 20,1 / 285) et a avancé pour l'eau des chiffres (30 % / 60 % /
   50 000 m³ par jour) qui ne figurent nulle part dans le rapport. Partout, le
   RAPPORT prime ; toute projection affichée est étiquetée comme telle.

   Corrections appliquées : PNCD (et non « PNDC ») ; électrification 92,5 % (2024) ;
   rurale 26,3 % ; eau rurale 57 % / urbaine 83 % ; VA manufacturière 6,8 % ;
   accès routier rural 26,5 % ; transports publics 19,5 % ; 295 sinistrés pour
   100 000 hab. en 2024 (aggravation depuis 245 en 2022) ; couverture forestière
   88 % ; recettes publiques 23,7 % du PIB ; cinq ODD moteurs (6, 7, 9, 11, 17) ;
   projets hydroélectriques Kinguélé Aval, Ngoulmendjim, Dibwangui — Grand Poubara
   n'apparaît nulle part dans le rapport. */
window.VNR.register({
  slug: "gabon",
  iso: "GA",
  name: { en: "Gabon", fr: "Gabon" },
  region: "central",
  vnrPrev: 2022,
  vnrCycles: [2022, 2026],
  langs: ["FR"],
  sourceLang: "fr",
  factsheetPdf: "factsheets/gabon.pdf",

  tagline: {
    fr: "L’ENV 2026 s’arrime à la Vision GABON-2050 et au PNCD pour une croissance inclusive et résiliente, sans laisser personne de côté.",
    en: "The 2026 review anchors itself in the GABON-2050 Vision and in the National Growth and Development Plan (PNCD), in pursuit of inclusive, resilient growth that leaves no one behind."
  },

  themes: [
    { sdg: 6,
      title: { fr: "Un stress hydrique paradoxal", en: "A paradox of water stress" },
      text: {
        fr: "Le Grand Libreville subit un déficit structurel, tandis que l’accès rural à l’eau potable s’établit à 57 %, contre 83 % en ville — un niveau urbain strictement stable depuis 2020. Priorité : professionnaliser la maintenance locale, moderniser l’assainissement, étendre les forages solaires.",
        en: "Greater Libreville runs a structural deficit, while rural access to drinking water stands at 57%, against 83% in the cities — an urban level that has not moved since 2020. The priority: professionalise local maintenance, modernise sanitation, extend solar boreholes."
      } },
    { sdg: 7,
      title: { fr: "Électrification et fracture rurale", en: "Electrification and the rural divide" },
      text: {
        fr: "L’électrification atteint 92,5 % en 2024 avec un mix renouvelable de 91,2 %, mais l’accès rural plafonne à 26,3 %. L’hydroélectricité (Kinguélé Aval, Ngoulmendjim, Dibwangui) et l’hybridation solaire sont les accélérateurs.",
        en: "Electrification reached 92.5% in 2024 with a 91.2% renewable mix, but rural access is capped at 26.3%. Hydropower (Kinguélé Aval, Ngoulmendjim, Dibwangui) and solar hybridisation are the accelerators."
      } },
    { sdg: 8,
      title: { fr: "Croissance inclusive et résiliente", en: "Inclusive and resilient growth" },
      text: {
        fr: "ODD transversal dans l’ENV 2026 : la croissance ne crée pas encore d’emplois. Chômage 20,0 %, emploi informel 47,0 %, jeunes NEET 36,2 % — alors que 53,4 % des Gabonais placent l’emploi des jeunes en priorité absolue.",
        en: "A cross-cutting goal in the 2026 review: growth is not yet creating jobs. Unemployment 20.0%, informal employment 47.0%, youth NEET 36.2% — while 53.4% of Gabonese name youth jobs their single highest priority."
      } },
    { sdg: 9,
      title: { fr: "Industrie, innovation et infrastructures", en: "Industry, innovation and infrastructure" },
      text: {
        fr: "Les Zones d’Investissement Spéciales portent la valeur ajoutée manufacturière à 6,8 % du PIB en 2024, mais la fracture logistique (26,5 % d’accès routier rural) limite encore l’impact sur l’emploi manufacturier (4,5 %).",
        en: "The Special Investment Zones lifted manufacturing value added to 6.8% of GDP in 2024, but the logistics divide (26.5% rural road access) still caps the impact on manufacturing employment (4.5%)."
      } },
    { sdg: 11,
      title: { fr: "Villes vulnérables, fracture territoriale", en: "Vulnerable cities, a territorial fracture" },
      text: {
        fr: "Avec une urbanisation supérieure à 90 %, les villes concentrent les vulnérabilités : 295 sinistrés pour 100 000 habitants en 2024 — une aggravation — et 19,5 % seulement d’accès aisé aux transports publics.",
        en: "With urbanisation above 90%, the cities concentrate vulnerability: 295 disaster-affected people per 100,000 inhabitants in 2024 — a worsening — and easy access to public transport for just 19.5%."
      } },
    { sdg: 17,
      title: { fr: "Souveraineté budgétaire et partenariats", en: "Fiscal sovereignty and partnerships" },
      text: {
        fr: "Les recettes publiques passent de 17,6 % à 23,7 % du PIB, mais le service de la dette absorbe 17 % du budget (14,5 % des exportations) et l’APD stagne à 0,4 % du RNB. La captation de la finance verte est l’accélérateur revendiqué.",
        en: "Government revenue rose from 17.6% to 23.7% of GDP, but debt service absorbs 17% of the budget (14.5% of exports) and ODA is stuck at 0.4% of GNI. Capturing green finance is the stated accelerator."
      } }
  ],

  continuity: [
    { prev: { fr: "Contraintes : pétrole & COVID-19", en: "Constraints: oil and COVID-19" },
      status: "sustained",
      now: { fr: "Vision GABON-2050 & PNCD", en: "GABON-2050 Vision and the PNCD" } },
    { prev: { fr: "Capital vert et transformation structurelle", en: "Green capital and structural transformation" },
      status: "evolved",
      now: { fr: "Forages solaires & gouvernance locale", en: "Solar boreholes and local governance" } },
    { prev: { fr: "Éducation : scolarisation 88 %, parité genre", en: "Education: 88% enrolment, gender parity" },
      status: "evolved",
      now: { fr: "92,5 % d’accès à l’électricité, mix renouvelable 91,2 %", en: "92.5% electricity access, 91.2% renewable mix" } },
    { prev: { fr: "Avancées environnementales", en: "Environmental progress" },
      status: "sustained",
      now: { fr: "Industrie, innovation & diversification", en: "Industry, innovation and diversification" } },
    { prev: { fr: "Défis sociaux, prospérité & paix", en: "Social challenges, prosperity and peace" },
      status: "evolved",
      now: { fr: "Réduction de la fracture rurale-urbaine", en: "Narrowing the rural–urban divide" } }
  ],

  concepts: {
    caption: {
      fr: "Le Gabon met l’accent sur l’eau, l’énergie et la réduction des fractures territoriales.",
      en: "Gabon's review emphasises water, energy and the closing of territorial divides."
    },
    items: [
      { label: { fr: "croissance & PIB", en: "growth & GDP" }, value: 8 },
      { label: { fr: "inclusion sociale", en: "social inclusion" }, value: 8 },
      { label: { fr: "investissement", en: "investment" }, value: 7 },
      { label: { fr: "gouvernance", en: "governance" }, value: 6 },
      { label: { fr: "infrastructure", en: "infrastructure" }, value: 5 },
      { label: { fr: "énergie", en: "energy" }, value: 5 },
      { label: { fr: "environnement", en: "environment" }, value: 4 },
      { label: { fr: "diversification", en: "diversification" }, value: 3 },
      { label: { fr: "partenariats", en: "partnerships" }, value: 1 }
    ]
  },

  dashboard: {
    tabs: [

      /* ═══════════ 1. APERÇU ET TENDANCES ═══════════ */
      { id: "overview",
        label: { fr: "Aperçu et tendances", en: "Overview & Trends" },
        intro: {
          fr: "Toutes les valeurs sont celles du rapport intégral ENV 2026 pour l’année 2024. Le PDF « Messages clés » autonome, et la fiche qui en dérive, ont publié les projections 2025 comme s’il s’agissait de valeurs courantes : ce tableau de bord rétablit les chiffres du rapport et signale explicitement toute projection. Sélectionnez une vignette pour en déplier la lecture.",
          en: "Every figure here is the 2024 value carried by the full 2026 VNR report. The standalone Main Messages PDF — and the fact sheet derived from it — published Gabon's 2025 projections as if they were current values; this dashboard restores the report's figures and labels every projection as such. Select a tile to open its reading."
        },
        blocks: [

          { type: "metrics", items: [

            { sdg: 7,
              label: { fr: "Accès à l’électricité", en: "Electricity access" },
              value: 92.5, unit: "%",
              sub: { fr: "2024 · mais 26,3 % en zone rurale (proj. 2025 : 92,8 %)",
                     en: "2024 · but 26.3% in rural areas (proj. 2025: 92.8%)" },
              panel: {
                sdg: 7,
                title: { fr: "Accès à l’électricité : la moyenne nationale et le pays réel, 2020-2024",
                         en: "Electricity access: the national average and the real country, 2020–2024" },
                chart: {
                  type: "line", sdg: 7, unit: "%",
                  title: { fr: "Accès à l’électricité, ensemble et milieu rural",
                           en: "Electricity access, national and rural" },
                  series: [
                    { key: "all", label: { fr: "Ensemble du pays", en: "National" },
                      points: [{ x: "2020", y: 91.1 }, { x: "2021", y: 91.8 }, { x: "2022", y: 92.0 }, { x: "2023", y: 92.2 }, { x: "2024", y: 92.5 }] },
                    { key: "rural", label: { fr: "Milieu rural", en: "Rural" },
                      points: [{ x: "2020", y: 24.7 }, { x: "2021", y: 25.0 }, { x: "2022", y: 25.4 }, { x: "2023", y: 25.8 }, { x: "2024", y: 26.3 }] }
                  ],
                  source: "ENV 2026 · annexe 1 — ODD 7.1.1 (BM/WDI · SEEG · INSTAT)"
                },
                text: {
                  fr: "Deux courbes, un seul pays. La ligne haute est celle que citent les documents de synthèse ; la ligne basse est celle où vivent les campagnes gabonaises. En cinq ans, l’accès rural n’a gagné que 1,6 point — de 24,7 % à 26,3 % — pendant que la moyenne nationale se rapprochait de la saturation. L’écart n’est pas un artefact statistique : l’accès urbain atteint 98,2 % en 2024. Le rapport ne donne nulle part 92,8 % comme valeur 2024 : c’est la projection 2025.",
                  en: "Two lines, one country. The upper line is the one the summary documents quote; the lower line is where rural Gabon actually lives. In five years rural access gained just 1.6 points — from 24.7% to 26.3% — while the national average approached saturation. The gap is not a statistical artefact: urban access reached 98.2% in 2024. The report nowhere gives 92.8% as a 2024 value: that is the 2025 projection."
                },
                source: "ENV 2026 · Messages clés (rapport intégral) · annexe 1, ODD 7.1.1"
              } },

            { sdg: 6,
              label: { fr: "Eau potable — milieu rural", en: "Drinking water — rural" },
              value: 57, unit: "%",
              sub: { fr: "2024 · contre 83 % en ville, stable depuis 2020",
                     en: "2024 · against 83% in the cities, flat since 2020" },
              panel: {
                sdg: 6,
                title: { fr: "Services d’eau de base : la ville immobile, la campagne qui monte lentement, 2020-2024",
                         en: "Basic water services: the city stands still, the countryside inches up, 2020–2024" },
                chart: {
                  type: "line", sdg: 6, unit: "%",
                  title: { fr: "Population utilisant au moins les services d’eau de base",
                           en: "Population using at least basic drinking-water services" },
                  series: [
                    { key: "urb", label: { fr: "Urbain", en: "Urban" },
                      points: [{ x: "2020", y: 83 }, { x: "2021", y: 83 }, { x: "2022", y: 83 }, { x: "2023", y: 83 }, { x: "2024", y: 83 }] },
                    { key: "nat", label: { fr: "Ensemble du pays", en: "National" },
                      points: [{ x: "2020", y: 70 }, { x: "2021", y: 71 }, { x: "2022", y: 71 }, { x: "2023", y: 72 }, { x: "2024", y: 74 }] },
                    { key: "rur", label: { fr: "Rural", en: "Rural" },
                      points: [{ x: "2020", y: 53 }, { x: "2021", y: 54 }, { x: "2022", y: 55 }, { x: "2023", y: 56 }, { x: "2024", y: 57 }] }
                  ],
                  source: "ENV 2026 · annexe 1 — ODD 6.1.1 (OMS/UNICEF, JMP)"
                },
                text: {
                  fr: "La fiche de synthèse annonçait une eau rurale « stagnant à 30 % » contre « 60 % en ville ». Aucun de ces deux chiffres n’existe dans le rapport. Le rapport donne 57 % en milieu rural — en hausse continue depuis 53 % en 2020 — et 83 % en ville. La stagnation est réelle, mais elle est urbaine : la courbe des villes n’a pas bougé d’un point en cinq ans. Elle est réelle ailleurs aussi : les équipements de lavage des mains plafonnent à 48,2 % depuis 2022 — le rapport parle lui-même d’un « palier de stagnation préoccupant » — et la défécation à l’air libre reste figée à 8 % en zone rurale.",
                  en: "The summary sheet announced rural water \"stuck at 30%\" against \"60% in the cities\". Neither figure exists in the report. The report gives 57% rural — climbing steadily from 53% in 2020 — and 83% urban. The stagnation is real, but it is urban: the city line has not moved a single point in five years. It is real elsewhere too: handwashing facilities have been stuck at 48.2% since 2022 — the report itself speaks of a \"worrying plateau\" — and rural open defecation remains frozen at 8%."
                },
                source: "ENV 2026 · annexe 1 — ODD 6.1.1 et 6.2.1 (OMS/UNICEF, JMP)"
              } },

            { sdg: 1,
              label: { fr: "Pauvreté — milieu rural", en: "Poverty — rural" },
              value: 80.1, unit: "%",
              sub: { fr: "seuil national, 2023 · contre 39,6 % en ville",
                     en: "national poverty line, 2023 · against 39.6% urban" },
              panel: {
                sdg: 1,
                title: { fr: "Pauvreté au seuil national : le chiffre le plus dur du rapport",
                         en: "Poverty at the national line: the hardest number in the report" },
                chart: {
                  type: "gap", sdg: 1, unit: "%",
                  title: { fr: "Taux de pauvreté au seuil national, 2023",
                           en: "Poverty rate at the national line, 2023" },
                  items: [
                    { label: { fr: "Milieu urbain", en: "Urban" }, value: 39.6, emphasis: false },
                    { label: { fr: "Ensemble du pays", en: "National" }, value: 45.0, emphasis: false },
                    { label: { fr: "Milieu rural", en: "Rural" }, value: 80.1, emphasis: true }
                  ],
                  source: "ENV 2026 · annexe 2 — ODD 1.2.1 (INSTAT, EGEP II)"
                },
                text: {
                  fr: "Huit ruraux sur dix vivent sous le seuil national de pauvreté, contre quatre citadins sur dix. Ce chiffre est enfoui dans l’annexe 2 du rapport ; il n’apparaît dans aucun message clé, dans aucune fiche. C’est pourtant la preuve chiffrée de tout le reste : l’électricité, l’eau, la route, la santé et l’école ne se distribuent pas au hasard sur le territoire — elles se distribuent le long de cette ligne. La moyenne nationale de 45 % ne décrit personne.",
                  en: "Eight rural people in ten live below the national poverty line, against four city-dwellers in ten. The figure is buried in Annex 2 of the report; it appears in no key message and on no fact sheet. Yet it is the arithmetic proof of everything else: electricity, water, roads, health and schooling are not distributed at random across the territory — they are distributed along this line. The 45% national average describes nobody."
                },
                source: "ENV 2026 · annexe 2 — ODD 1.2.1 (INSTAT, EGEP II / RGEF Estuaire 2023)"
              } },

            { sdg: 9,
              label: { fr: "VA manufacturière", en: "Manufacturing value added" },
              value: 6.8, unit: "%",
              sub: { fr: "du PIB, 2024 · contre 5,5 % en 2020 (proj. 2025 : 7,1 %)",
                     en: "of GDP, 2024 · up from 5.5% in 2020 (proj. 2025: 7.1%)" },
              panel: {
                sdg: 9,
                title: { fr: "La croissance industrielle, et l’emploi qui ne suit pas, 2020-2024",
                         en: "Industrial growth, and the employment that does not follow, 2020–2024" },
                chart: {
                  type: "line", sdg: 9, unit: "%",
                  title: { fr: "Valeur ajoutée manufacturière (% du PIB) et emploi manufacturier (% de l’emploi total)",
                           en: "Manufacturing value added (% of GDP) and manufacturing employment (% of total employment)" },
                  series: [
                    { key: "va", label: { fr: "VA manufacturière / PIB", en: "Manufacturing VA / GDP" },
                      points: [{ x: "2020", y: 5.5 }, { x: "2021", y: 6.0 }, { x: "2022", y: 6.2 }, { x: "2023", y: 6.5 }, { x: "2024", y: 6.8 }] },
                    { key: "emp", label: { fr: "Emploi manufacturier / emploi total", en: "Manufacturing employment / total employment" },
                      points: [{ x: "2020", y: 4.2 }, { x: "2021", y: 4.3 }, { x: "2022", y: 4.4 }, { x: "2023", y: 4.5 }, { x: "2024", y: 4.5 }] }
                  ],
                  source: "ENV 2026 · annexe 1 — ODD 9.2.1 et 9.2.2 (DGEPF · BM)"
                },
                text: {
                  fr: "La diversification produit de la valeur ajoutée : +1,3 point de PIB en quatre ans, portée par les Zones d’Investissement Spéciales. Elle ne produit pas encore d’emplois : la part de l’emploi manufacturier n’a gagné que 0,3 point sur la même période, et elle est plate depuis 2023. C’est la définition d’une croissance sans emploi — à confronter au chômage de 20,0 %, à l’emploi informel de 47,0 % et aux 36,2 % de jeunes ni en emploi, ni en études, ni en formation.",
                  en: "Diversification is producing value added: +1.3 points of GDP in four years, driven by the Special Investment Zones. It is not yet producing jobs: manufacturing's share of employment gained only 0.3 points over the same period, and has been flat since 2023. This is the definition of jobless growth — set it against 20.0% unemployment, 47.0% informal employment and the 36.2% of young people not in employment, education or training."
                },
                source: "ENV 2026 · annexes 1 et 2 — ODD 9.2.1, 9.2.2, 8.3.1, 8.5.2, 8.6.1"
              } },

            { sdg: 11,
              label: { fr: "Sinistrés de catastrophes", en: "Disaster-affected people" },
              value: 295, unit: "",
              sub: { fr: "pour 100 000 hab., 2024 · 245 en 2022 — une aggravation",
                     en: "per 100,000 inhabitants, 2024 · 245 in 2022 — a worsening" },
              panel: {
                sdg: 11,
                title: { fr: "Personnes décédées, disparues ou directement touchées par une catastrophe, 2020-2024",
                         en: "People dead, missing or directly affected by disaster, 2020–2024" },
                chart: {
                  type: "line", sdg: 11, unit: "",
                  title: { fr: "Sinistrés de catastrophes, pour 100 000 habitants",
                           en: "Disaster-affected people, per 100,000 inhabitants" },
                  series: [
                    { key: "aff", label: { fr: "Sinistrés pour 100 000 hab.", en: "Affected per 100,000" },
                      points: [{ x: "2020", y: 185 }, { x: "2021", y: 210 }, { x: "2022", y: 245 }, { x: "2023", y: 280 }, { x: "2024", y: 295 }] }
                  ],
                  source: "ENV 2026 · annexe 1 — ODD 11.5.1 (UNDRR)"
                },
                text: {
                  fr: "C’est l’une des rares courbes du rapport qui va dans le mauvais sens : +60 % de sinistrés en quatre ans. La fiche de synthèse annonçait « 285 sinistrés en 2023 » — doublement inexact : 2023 vaut 280, et 285 est la projection 2025. Surtout, elle présentait un constat statique là où le rapport décrit une aggravation. Le contexte : 30,8 % des Gabonais vivent en zone inondable, 76,2 % se déclarent exposés aux risques liés aux grandes pluies, et 90 % jugent l’accès à un logement décent hors de portée.",
                  en: "This is one of the few curves in the report heading the wrong way: 60% more disaster-affected people in four years. The summary sheet announced \"285 affected in 2023\" — wrong twice over: 2023 is 280, and 285 is the 2025 projection. Above all, it offered a static observation where the report describes a deterioration. The context: 30.8% of Gabonese live in flood-prone areas, 76.2% report exposure to heavy-rainfall hazards, and 90% consider decent housing out of reach."
                },
                source: "ENV 2026 · annexe 1 — ODD 11.5.1 (UNDRR) · ENP GABON-2050"
              } },

            { sdg: 17,
              label: { fr: "Recettes publiques / PIB", en: "Government revenue / GDP" },
              value: 23.7, unit: "%",
              sub: { fr: "2024 · contre 17,6 % en 2020 — la vraie réussite macro",
                     en: "2024 · up from 17.6% in 2020 — the genuine macro success" },
              panel: {
                sdg: 17,
                title: { fr: "Total des recettes publiques, en pourcentage du PIB, 2020-2024",
                         en: "Total government revenue as a share of GDP, 2020–2024" },
                chart: {
                  type: "line", sdg: 17, unit: "%",
                  title: { fr: "Recettes publiques totales, en % du PIB",
                           en: "Total government revenue, % of GDP" },
                  series: [
                    { key: "rev", label: { fr: "Recettes publiques / PIB", en: "Government revenue / GDP" },
                      points: [{ x: "2020", y: 17.6 }, { x: "2021", y: 15.3 }, { x: "2022", y: 21.1 }, { x: "2023", y: 24.6 }, { x: "2024", y: 23.7 }] }
                  ],
                  source: "ENV 2026 · annexe 1 — ODD 17.1.1 (DGEPF/TOFE · FMI)"
                },
                text: {
                  fr: "Du creux post-COVID de 15,3 % en 2021 au pic de 24,6 % en 2023, les recettes publiques ont gagné plus de neuf points de PIB en deux ans, avant de se stabiliser à 23,7 %. C’est le socle du plaidoyer gabonais à New York : un pays qui a consenti l’effort domestique et qui demande de l’investissement, non de l’assistance. L’ancien tableau de bord affichait « 15,2 % » — un chiffre sans contrepartie dans le rapport, vraisemblablement confondu avec la valeur 2021 (15,3 %) ou avec les dépenses de préservation du patrimoine (15,2 $ US par habitant).",
                  en: "From the post-COVID trough of 15.3% in 2021 to the 24.6% peak of 2023, government revenue gained more than nine points of GDP in two years before settling at 23.7%. This is the bedrock of Gabon's case in New York: a country that has made the domestic effort and is asking for investment, not assistance. The old dashboard displayed \"15.2%\" — a figure with no counterpart in the report, most likely confused with the 2021 value (15.3%) or with heritage-preservation spending (US$ 15.2 per capita)."
                },
                source: "ENV 2026 · annexe 1 — ODD 17.1.1 (DGEPF/TOFE · FMI)"
              } }
          ] },

          { type: "table",
            title: { fr: "Indicateurs de tête — de la référence 2020 au dernier relevé 2024",
                     en: "Headline indicators — from the 2020 baseline to the latest 2024 reading" },
            rows: [
              { label: { fr: "Accès à l’électricité — ensemble", en: "Electricity access — national" },
                from: 91.1, fromYear: "2020", to: 92.5, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "Quasi-saturation urbaine (98,2 %) ; la marge restante est presque entièrement rurale.",
                          en: "Urban access is near saturation (98.2%); the remaining gap is almost entirely rural." } },
              { label: { fr: "Accès à l’électricité — milieu rural", en: "Electricity access — rural" },
                from: 24.7, fromYear: "2020", to: 26.3, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "+1,6 point en cinq ans. À ce rythme, l’accès universel rural n’est pas en vue.",
                          en: "+1.6 points in five years. At this pace, universal rural access is not in sight." } },
              { label: { fr: "Eau de base — milieu rural", en: "Basic water — rural" },
                from: 53, fromYear: "2020", to: 57, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "Progression réelle et continue — l’inverse de la « stagnation à 30 % » annoncée par la fiche.",
                          en: "Real, continuous progress — the opposite of the \"stuck at 30%\" claimed by the fact sheet." } },
              { label: { fr: "Eau de base — milieu urbain", en: "Basic water — urban" },
                from: 83, fromYear: "2020", to: 83, toYear: "2024", unit: "%", dir: "flat",
                status: { fr: "Strictement immobile depuis 2020 : c’est ici que la stagnation est réelle.",
                          en: "Strictly unchanged since 2020: this is where the stagnation actually is." } },
              { label: { fr: "Équipements de lavage des mains (eau + savon)", en: "Handwashing facilities (water + soap)" },
                from: 48.0, fromYear: "2020", to: 48.2, toYear: "2024", unit: "%", dir: "flat",
                status: { fr: "Le rapport parle d’un « palier de stagnation préoccupant » : un ménage sur deux reste sans dispositif.",
                          en: "The report calls it a \"worrying plateau\": one household in two still has no facility." } },
              { label: { fr: "Assainissement amélioré", en: "Improved sanitation" },
                from: 54.2, fromYear: "2020", to: 57.4, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "Amélioration lente ; la défécation à l’air libre reste figée à 8 % en milieu rural.",
                          en: "Slow improvement; rural open defecation remains frozen at 8%." } },
              { label: { fr: "VA manufacturière / PIB", en: "Manufacturing VA / GDP" },
                from: 5.5, fromYear: "2020", to: 6.8, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "La diversification produit de la valeur (proj. 2025 : 7,1 %).",
                          en: "Diversification is creating value (proj. 2025: 7.1%)." } },
              { label: { fr: "Emploi manufacturier / emploi total", en: "Manufacturing employment / total employment" },
                from: 4.2, fromYear: "2020", to: 4.5, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "…mais pas encore d’emplois : +0,3 point, et plat depuis 2023.",
                          en: "…but not yet jobs: +0.3 points, and flat since 2023." } },
              { label: { fr: "Accès routier rural (< 2 km d’une route praticable)", en: "Rural road access (within 2 km of an all-season road)" },
                from: 25, fromYear: "2020", to: 26.5, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "La fracture logistique. Les routes sont la 2ᵉ priorité absolue des Gabonais (18,2 %).",
                          en: "The logistics divide. Roads are Gabonese citizens' second-highest priority (18.2%)." } },
              { label: { fr: "Population urbaine en quartiers précaires", en: "Urban population in slums or inadequate housing" },
                from: 40.0, fromYear: "2020", to: 38.5, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "Recul marginal : −1,5 point en cinq ans, alors que 90 % jugent le logement décent inaccessible.",
                          en: "Marginal decline: −1.5 points in five years, while 90% find decent housing unattainable." } },
              { label: { fr: "Accès aisé aux transports publics", en: "Easy access to public transport" },
                from: 18.0, fromYear: "2020", to: 19.5, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "Quatre citadins sur cinq restent hors d’atteinte (proj. 2025 : 20,1 %).",
                          en: "Four city-dwellers in five remain out of reach (proj. 2025: 20.1%)." } },
              { label: { fr: "Sinistrés de catastrophes (pour 100 000 hab.)", en: "Disaster-affected people (per 100,000)" },
                from: 185, fromYear: "2020", to: 295, toYear: "2024", unit: "", dir: "up",
                status: { fr: "Aggravation nette : la courbe qui va dans le mauvais sens.",
                          en: "A clear deterioration: the curve heading the wrong way." } },
              { label: { fr: "Recettes publiques / PIB", en: "Government revenue / GDP" },
                from: 17.6, fromYear: "2020", to: 23.7, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "La réussite macroéconomique du cycle, après un creux à 15,3 % en 2021.",
                          en: "The macroeconomic success of the cycle, after a 15.3% trough in 2021." } },
              { label: { fr: "Part du budget financée par l’impôt intérieur", en: "Share of the budget financed by domestic taxes" },
                from: 43.5, fromYear: "2020", to: 53.7, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "Dématérialisation des régies (e-t@x, Sydonia World) : plus de dix points gagnés.",
                          en: "Digitalised revenue administration (e-t@x, Sydonia World): more than ten points gained." } },
              { label: { fr: "APD nette / RNB", en: "Net ODA / GNI" },
                from: 0.7, fromYear: "2020", to: 0.4, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "L’aide se retire et ne revient pas : plate à 0,4 % depuis 2022.",
                          en: "Aid has withdrawn and is not returning: flat at 0.4% since 2022." } },
              { label: { fr: "IDE nets / PIB", en: "Net FDI / GDP" },
                from: 11.2, fromYear: "2020", to: 5.5, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "Divisés par deux. Le rapport les dit « plafonnant de manière endémique ».",
                          en: "Halved. The report calls them \"endemically capped\"." } },
              { label: { fr: "Taux de chômage", en: "Unemployment rate" },
                from: 21.0, fromYear: "2020", to: 20.0, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "Un point en cinq ans, avec 47,0 % d’emploi informel. 53,4 % des citoyens en font la priorité n° 1.",
                          en: "One point in five years, with 47.0% informal employment. 53.4% of citizens make it priority number one." } },
              { label: { fr: "Jeunes de 15-24 ans ni en emploi, ni en études (NEET)", en: "Youth 15–24 not in employment, education or training" },
                from: 38.5, fromYear: "2020", to: 36.2, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "Plus d’un jeune sur trois. Le dividende démographique s’évapore.",
                          en: "More than one young person in three. The demographic dividend is evaporating." } },
              { label: { fr: "Part des renouvelables dans l’énergie finale", en: "Renewables in final energy consumption" },
                from: 91.4, fromYear: "2020", to: 91.2, toYear: "2024", unit: "%", dir: "flat",
                status: { fr: "L’un des mix les plus propres du continent, et stable.",
                          en: "One of the cleanest energy mixes on the continent, and stable." } },
              { label: { fr: "Couverture forestière", en: "Forest cover" },
                from: 88.0, fromYear: "2020", to: 88.0, toYear: "2024", unit: "%", dir: "flat",
                status: { fr: "Constante sur toute la série. La fiche indiquait 85 % ; le rapport dit 88 %, trois fois.",
                          en: "Constant across the whole series. The fact sheet said 85%; the report says 88%, three times over." } }
            ],
            source: "ENV 2026 · annexes statistiques 1 et 2 (séries 2020-2024)" },

          { type: "stats", items: [
            { sdg: 8, label: { fr: "Taux de chômage", en: "Unemployment rate" }, value: 20.0, unit: "%",
              note: { fr: "2024 · 21,0 % en 2020", en: "2024 · 21.0% in 2020" },
              source: "ENV 2026 · ODD 8.5.2" },
            { sdg: 8, label: { fr: "Emploi informel", en: "Informal employment" }, value: 47.0, unit: "%",
              note: { fr: "de l’emploi total, 2024", en: "of total employment, 2024" },
              source: "ENV 2026 · ODD 8.3.1" },
            { sdg: 8, label: { fr: "Jeunes NEET (15-24 ans)", en: "Youth NEET (15–24)" }, value: 36.2, unit: "%",
              note: { fr: "ni en emploi, ni en études, ni en formation", en: "not in employment, education or training" },
              source: "ENV 2026 · ODD 8.6.1" },
            { sdg: 8, label: { fr: "L’emploi des jeunes, priorité n° 1", en: "Youth jobs, the top priority" }, value: 53.4, unit: "%",
              note: { fr: "des Gabonais interrogés le citent en priorité absolue", en: "of Gabonese surveyed name it their single highest priority" },
              source: "ENV 2026 · Enquête Nationale Prospective 2024" }
          ] },

          { type: "chart", chart: {
            type: "bars", sdg: 4, unit: "%",
            title: { fr: "L’entonnoir éducatif : ce qu’il reste d’une cohorte, 2024",
                     en: "The education funnel: what survives of a cohort, 2024" },
            items: [
              { label: { fr: "Scolarisation nette au primaire", en: "Net primary enrolment" }, value: 94.8, emphasis: false },
              { label: { fr: "Achèvement du primaire", en: "Primary completion" }, value: 67.5, emphasis: false },
              { label: { fr: "Achèvement du 1ᵉʳ cycle du secondaire", en: "Lower-secondary completion" }, value: 61.0, emphasis: false },
              { label: { fr: "Achèvement du 2ᵈ cycle du secondaire", en: "Upper-secondary completion" }, value: 30.2, emphasis: true }
            ],
            insight: {
              fr: "Presque tous les enfants gabonais entrent à l’école : la scolarisation nette au primaire atteint 94,8 %. Deux sur trois achèvent le primaire ; trois sur dix seulement achèvent le second cycle du secondaire. C’est par ce trou que fuit le dividende démographique — et c’est lui qui alimente les 36,2 % de jeunes NEET et les 47 % d’emploi informel. L’« adéquation formation-emploi », que le rapport érige en accélérateur de l’ODD 9, commence ici.",
              en: "Almost every Gabonese child starts school: net primary enrolment reaches 94.8%. Two in three complete primary; only three in ten complete upper secondary. This is the hole through which the demographic dividend drains — and it is what feeds the 36.2% NEET rate and 47% informality. The \"training-to-jobs alignment\" that the report names as an SDG 9 accelerator begins here."
            },
            source: "ENV 2026 · annexe 2 — ODD 4 (taux d’achèvement et de scolarisation, 2024)"
          } }
        ] },

      /* ═══════════ 2. LES CINQ MOTEURS ═══════════ */
      { id: "drivers",
        label: { fr: "Les cinq moteurs", en: "The Five Drivers" },
        intro: {
          fr: "Le rapport retient cinq « ODD moteurs » — 6, 7, 9, 11 et 17 — présentés comme « l’ossature physique, logistique et financière du développement national ». Les douze autres ODD sont traités comme transversaux, l’ODD 8 compris — contrairement à la fiche OSAA, qui comptait six thèmes. Chaque moteur est exposé dans la structure du Gabon lui-même : Le contraste, L’enjeu, L’accélérateur. Le français est le texte du rapport ; l’anglais en est la traduction.",
          en: "The report selects five \"driver goals\" — SDG 6, 7, 9, 11 and 17 — described as \"the physical, logistical and financial backbone of national development\". The other twelve SDGs are treated as cross-cutting, SDG 8 among them — contrary to the OSAA fact sheet, which counted six themes. Each driver is set out in Gabon's own structure: The contrast, What is at stake, The accelerator. The French is the report's own wording; the English is its translation."
        },
        blocks: [
          { type: "triptych", items: [

            { sdg: 6,
              headline: { fr: "Le paradoxe hydrique d’un pays équatorial",
                          en: "The water paradox of an equatorial country" },
              chart: {
                type: "gap", sdg: 6, unit: "%",
                title: { fr: "Population utilisant au moins les services d’eau de base, 2024",
                         en: "Population using at least basic drinking-water services, 2024" },
                items: [
                  { label: { fr: "Milieu urbain", en: "Urban" }, value: 83, emphasis: false },
                  { label: { fr: "Ensemble du pays", en: "National" }, value: 74, emphasis: false },
                  { label: { fr: "Milieu rural", en: "Rural" }, value: 57, emphasis: true }
                ],
                insight: {
                  fr: "Le rapport ne chiffre pas le déficit du Grand Libreville : il le qualifie de « structurel ». Les 50 000 m³ par jour, les 30 % ruraux et les 60 % urbains de la fiche de synthèse n’apparaissent nulle part dans ses 165 pages. À l’échelle du pays, 71 % des ménages n’ont pas d’adduction dans le logement, et 52 % de ceux qui sont raccordés jugent l’eau « mauvaise » ou « très mauvaise ».",
                  en: "The report puts no number on Greater Libreville's deficit: it calls it \"structural\". The 50,000 m³ a day, the 30% rural and the 60% urban figures of the summary sheet appear nowhere in its 165 pages. Nationally, 71% of households have no piped water in the home, and 52% of those connected rate the water \"poor\" or \"very poor\"."
                },
                source: "ENV 2026 · annexe 1 — ODD 6.1.1 (OMS/UNICEF, JMP) · ENP GABON-2050"
              },
              contrast: {
                fr: "Le Gabon affronte un stress hydrique paradoxal ; le Grand Libreville subit un déficit structurel, tandis que l’accès rural à l’eau potable s’établit à 57 %, contre 83 % en ville.",
                en: "Gabon faces a paradoxical water stress: Greater Libreville runs a structural deficit, while rural access to drinking water stands at 57%, against 83% in the cities."
              },
              stake: {
                fr: "Ce décalage est accentué par des infrastructures d’assainissement souvent précaires, menaçant la santé publique et la dignité des populations vulnérables.",
                en: "This gap is compounded by often-precarious sanitation infrastructure, threatening public health and the dignity of vulnerable populations."
              },
              accelerator: {
                fr: "La priorité est de professionnaliser la maintenance locale, de moderniser les réseaux d’assainissement et d’étendre les forages solaires pour garantir un accès universel, équitable et durable, sécurisé par une gouvernance locale pérenne des infrastructures.",
                en: "The priority is to professionalise local maintenance, modernise sanitation networks and extend solar boreholes, so as to secure universal, equitable and lasting access, underpinned by durable local governance of the infrastructure."
              },
              source: "ENV 2026 · Messages clés (rapport intégral)" },

            { sdg: 7,
              headline: { fr: "Un succès national qui masque une fracture territoriale majeure",
                          en: "A national success that masks a major territorial divide" },
              chart: {
                type: "gap", sdg: 7, unit: "%",
                title: { fr: "Accès à l’électricité, 2024", en: "Electricity access, 2024" },
                items: [
                  { label: { fr: "Milieu urbain", en: "Urban" }, value: 98.2, emphasis: false },
                  { label: { fr: "Ensemble du pays", en: "National" }, value: 92.5, emphasis: false },
                  { label: { fr: "Milieu rural", en: "Rural" }, value: 26.3, emphasis: true }
                ],
                insight: {
                  fr: "Soixante-douze points séparent la ville du village — le plus grand écart du rapport, et l’image même de la fracture territoriale. S’y ajoute la question de la qualité : 57,3 % des personnes raccordées jugent la fourniture mauvaise, et 55,2 % des ruraux cuisinent encore au bois de coupe familiale. (Le rapport comporte une coquille : l’accès urbain 2022 y est saisi à 25,4 % dans une série 97,0 · 97,5 · … · 98,0 ; ce point n’est pas tracé.)",
                  en: "Seventy-two points separate city from village — the widest gap in the report, and the very image of the territorial fracture. Quality compounds it: 57.3% of connected households rate supply as poor, and 55.2% of rural people still cook with self-cut firewood. (The report contains a typo: 2022 urban access is entered as 25.4% in a series running 97.0 · 97.5 · … · 98.0; that point is not plotted.)"
                },
                source: "ENV 2026 · annexe 1 — ODD 7.1.1 (BM/WDI · SEEG · INSTAT) · ENP GABON-2050"
              },
              contrast: {
                fr: "Si le taux d’électrification atteint 92,5 % en 2024 avec un mix renouvelable exemplaire dépassant 91 % (établi à 91,2 %), ce succès national masque une fracture territoriale majeure, l’accès rural plafonnant à 26,3 %.",
                en: "While the electrification rate reaches 92.5% in 2024, with an exemplary renewable mix above 91% (at 91.2%), this national success masks a major territorial divide: rural access is capped at 26.3%."
              },
              stake: {
                fr: "L’instabilité du service en zone rurale bride la productivité économique et freine l’inclusion des territoires.",
                en: "Unreliable service in rural areas holds back economic productivity and stalls the inclusion of the territories."
              },
              accelerator: {
                fr: "Conformément à l’Agenda 2030, l’accélération des projets hydroélectriques et de l’hybridation solaire est l’accélérateur décisif pour sécuriser une énergie verte et fiable pour tous, accélérant ainsi la transition vers une économie bas-carbone.",
                en: "In line with the 2030 Agenda, accelerating hydropower projects and solar hybridisation is the decisive accelerator for securing green, reliable energy for all — speeding the shift to a low-carbon economy."
              },
              source: "ENV 2026 · Messages clés (rapport intégral)" },

            { sdg: 9,
              headline: { fr: "Le corridor avance, les villages restent enclavés",
                          en: "The corridor moves; the villages stay cut off" },
              chart: {
                type: "line", sdg: 9, unit: " Mt",
                title: { fr: "Fret ferroviaire du Transgabonais, en millions de tonnes",
                         en: "Transgabonais rail freight, million tonnes" },
                series: [
                  { key: "freight", label: { fr: "Fret ferroviaire (SETRAG)", en: "Rail freight (SETRAG)" },
                    points: [{ x: "2020", y: 8.9 }, { x: "2022", y: 10.3 }, { x: "2024", y: 11.2 }] }
                ],
                insight: {
                  fr: "Le Plan de Remise à Niveau du Transgabonais, conduit en PPP avec la SETRAG, a porté le fret de 8,9 à 11,2 millions de tonnes en quatre ans : le manganèse et le bois sortent mieux du pays. La route, elle, ne bouge pas : 26,5 % seulement de la population rurale vit à moins de deux kilomètres d’une route praticable toute l’année. Le Gabon a un corridor d’exportation ; il n’a pas encore un réseau de désenclavement. Seuls les trois points documentés sont tracés.",
                  en: "The Transgabonais upgrade programme, run as a PPP with SETRAG, lifted freight from 8.9 to 11.2 million tonnes in four years: manganese and timber leave the country more easily. The roads have not moved: just 26.5% of the rural population lives within two kilometres of an all-season road. Gabon has an export corridor; it does not yet have a network that opens up the hinterland. Only the three documented points are plotted."
                },
                source: "ENV 2026 · corps du rapport — ODD 9.1 (SETRAG · Ministère des Transports) et ODD 9.1.1"
              },
              contrast: {
                fr: "Le Gabon accélère sa diversification via les Zones d’Investissement Spéciales, portant la valeur ajoutée manufacturière à 6,8 % du PIB en 2024.",
                en: "Gabon is accelerating diversification through its Special Investment Zones, lifting manufacturing value added to 6.8% of GDP in 2024."
              },
              stake: {
                fr: "Sous l’impulsion des hautes autorités, des réformes structurelles majeures sont engagées pour transformer le climat des affaires, bien que la fracture logistique (26,5 % d’accès routier rural) limite encore l’impact sur l’emploi manufacturier (4,5 %).",
                en: "Under the impetus of the highest authorities, major structural reforms are under way to transform the business climate — yet the logistics divide (26.5% rural road access) still caps the impact on manufacturing employment (4.5%)."
              },
              accelerator: {
                fr: "Le désenclavement des territoires et l’adéquation formation-emploi sont les leviers impératifs pour propulser des champions nationaux et valoriser l’économie circulaire, appuyés par le déploiement effectif des réformes structurelles engagées.",
                en: "Opening up the hinterland and aligning training with jobs are the imperative levers to propel national champions and monetise the circular economy, backed by effective rollout of the reforms already launched."
              },
              source: "ENV 2026 · Messages clés (rapport intégral)" },

            { sdg: 11,
              headline: { fr: "Une urbanisation supérieure à 90 %, des services qui ne suivent pas",
                          en: "Urbanisation above 90%, services that do not keep up" },
              chart: {
                type: "line", sdg: 11, unit: "%",
                title: { fr: "Les services urbains, 2020-2024", en: "Urban services, 2020–2024" },
                series: [
                  { key: "waste", label: { fr: "Déchets solides régulièrement collectés", en: "Solid waste regularly collected" },
                    points: [{ x: "2020", y: 40 }, { x: "2021", y: 45 }, { x: "2022", y: 45 }, { x: "2023", y: 45 }, { x: "2024", y: 48 }] },
                  { key: "slums", label: { fr: "Population urbaine en quartiers précaires", en: "Urban population in slums" },
                    points: [{ x: "2020", y: 40.0 }, { x: "2021", y: 39.0 }, { x: "2022", y: 39.0 }, { x: "2023", y: 39.0 }, { x: "2024", y: 38.5 }] },
                  { key: "transp", label: { fr: "Accès aisé aux transports publics", en: "Easy access to public transport" },
                    points: [{ x: "2020", y: 18.0 }, { x: "2021", y: 18.2 }, { x: "2022", y: 18.5 }, { x: "2023", y: 19.0 }, { x: "2024", y: 19.5 }] }
                ],
                insight: {
                  fr: "Trois services, une même inertie. La collecte des déchets progresse par paliers, alors que 64,1 % des habitants notent l’absence d’aménagements pour le dépôt des ordures ; la part des quartiers précaires ne recule que d’un point et demi en cinq ans, quand 90 % des Gabonais jugent le logement décent hors de portée ; l’accès aisé aux transports publics reste sous les 20 %, avec 74 % d’usagers insatisfaits. Le rapport ne donne aucun taux d’urbanisation exact : il écrit « supérieure à 90 % » — aucun chiffre plus précis n’est étayé.",
                  en: "Three services, one shared inertia. Waste collection improves in steps, while 64.1% of residents report no facilities for depositing refuse; the slum share falls by just a point and a half in five years, while 90% of Gabonese find decent housing out of reach; easy access to public transport stays below 20%, with 74% of users dissatisfied. The report gives no exact urbanisation rate: it says \"above 90%\" — no more precise figure is supported."
                },
                source: "ENV 2026 · annexe 1 — ODD 11.1.1, 11.2.1, 11.6.1 (ONU-Habitat · INSTAT) · ENP GABON-2050"
              },
              contrast: {
                fr: "Avec une urbanisation supérieure à 90 %, les villes gabonaises concentrent les vulnérabilités, notamment pour les ménages précaires installés en zones inconstructibles.",
                en: "With urbanisation above 90%, Gabon's cities concentrate vulnerability — above all for precarious households settled on unbuildable land."
              },
              stake: {
                fr: "En 2024, le pays enregistre une aggravation avec 295 sinistrés pour 100 000 habitants, alors que la mobilité urbaine pâtit d’un accès restreint aux transports publics (19,5 %).",
                en: "In 2024 the country records a worsening: 295 disaster-affected people per 100,000 inhabitants, while urban mobility suffers from restricted access to public transport (19.5%)."
              },
              accelerator: {
                fr: "La régularisation foncière massive et la modernisation des réseaux de drainage sont indispensables pour bâtir des espaces de vie résilients face aux risques climatiques, intégrés dans une planification urbaine plus inclusive et préventive.",
                en: "Mass land-tenure regularisation and modernisation of drainage networks are indispensable to build living spaces resilient to climate risk, embedded in more inclusive, preventive urban planning."
              },
              source: "ENV 2026 · Messages clés (rapport intégral)" },

            { sdg: 17,
              headline: { fr: "Une souveraineté budgétaire reconquise, un étau extérieur qui se referme",
                          en: "Fiscal sovereignty regained, an external vice closing in" },
              chart: {
                type: "line", sdg: 17, unit: "%",
                title: { fr: "Les trois contraintes du financement extérieur, 2020-2024",
                         en: "The three constraints on external financing, 2020–2024" },
                series: [
                  { key: "debt", label: { fr: "Service de la dette / exportations", en: "Debt service / exports" },
                    points: [{ x: "2020", y: 20.5 }, { x: "2021", y: 15.4 }, { x: "2022", y: 9.5 }, { x: "2023", y: 12.2 }, { x: "2024", y: 14.5 }] },
                  { key: "fdi", label: { fr: "IDE nets / PIB", en: "Net FDI / GDP" },
                    points: [{ x: "2020", y: 11.2 }, { x: "2021", y: 7.9 }, { x: "2022", y: 5.4 }, { x: "2023", y: 5.7 }, { x: "2024", y: 5.5 }] },
                  { key: "oda", label: { fr: "APD nette / RNB", en: "Net ODA / GNI" },
                    points: [{ x: "2020", y: 0.7 }, { x: "2021", y: 0.5 }, { x: "2022", y: 0.4 }, { x: "2023", y: 0.4 }, { x: "2024", y: 0.4 }] }
                ],
                insight: {
                  fr: "Après le point bas de 2022, le service de la dette remonte : 14,5 % des exportations en 2024, et 17,0 % projetés pour 2025. Les investissements directs étrangers ont été divisés par deux depuis 2020 et l’aide publique est figée à 0,4 % du RNB. Les trois lignes racontent la même histoire : l’espace de financement extérieur se referme au moment précis où le Gabon a le plus besoin d’investir. Le rapport ajoute que le service de la dette absorbe 17 % du budget national.",
                  en: "After bottoming out in 2022, debt service is climbing again: 14.5% of exports in 2024, and a projected 17.0% for 2025. Foreign direct investment has halved since 2020 and official aid is frozen at 0.4% of GNI. The three lines tell one story: external financing space is closing at the very moment Gabon most needs to invest. The report adds that debt service absorbs 17% of the national budget."
                },
                source: "ENV 2026 · annexe 1 — ODD 17.3.1 et 17.4.1 (BM · OCDE · CNUCED)"
              },
              contrast: {
                fr: "Le Gabon renforce sa souveraineté budgétaire en diversifiant son économie, mais le service de la dette (qui représente 17 % du budget national, soit 14,5 % des exportations en 2024) et une aide publique stagnante (0,4 % du RNB) maintiennent une forte vulnérabilité aux chocs.",
                en: "Gabon is strengthening fiscal sovereignty by diversifying its economy, but debt service (17% of the national budget — that is, 14.5% of exports in 2024) and stagnant official aid (0.4% of GNI) keep the country highly exposed to shocks."
              },
              stake: {
                fr: "La dépendance aux ressources extractives expose le financement du développement aux aléas des marchés mondiaux.",
                en: "Dependence on extractive resources leaves development finance hostage to world-market swings."
              },
              accelerator: {
                fr: "L’élargissement de l’assiette fiscale hors pétrole et la captation stratégique de la finance verte sont les piliers nécessaires pour garantir le financement souverain d’une croissance inclusive, optimisant ainsi la mobilisation des ressources domestiques de l’État.",
                en: "Broadening the non-oil tax base and strategically capturing green finance are the pillars needed to secure sovereign financing of inclusive growth, thereby optimising the State's domestic resource mobilisation."
              },
              source: "ENV 2026 · Messages clés (rapport intégral)" }
          ] },

          { type: "prose",
            title: { fr: "Perspective", en: "Outlook" },
            text: {
              fr: "« La réussite des accélérateurs identifiés repose sur la captation stratégique des financements verts. En parallèle, la localisation de l’ENV assure une appropriation territoriale de l’Agenda 2030, traduisant les orientations nationales en bénéfices concrets pour chaque citoyen. »\n\nCette phrase, qui clôt les Messages clés du rapport, contient les deux demandes du Gabon au Forum politique de haut niveau : de la finance verte, et la reconnaissance de l’échelon territorial comme lieu réel de la mise en œuvre.",
              en: "\"The success of the identified accelerators rests on the strategic capture of green finance. In parallel, localising the VNR ensures territorial ownership of the 2030 Agenda, translating national orientations into concrete benefits for every citizen.\"\n\nThat closing sentence of the report's key messages contains Gabon's two asks of the High-Level Political Forum: green finance, and recognition of the territorial level as the place where implementation actually happens."
            },
            source: "ENV 2026 · Messages clés (rapport intégral)" }
        ] },

      /* ═══════════ 3. LA FRACTURE TERRITORIALE ═══════════ */
      { id: "divide",
        label: { fr: "La fracture territoriale", en: "The Territorial Divide" },
        intro: {
          fr: "C’est le message unique du rapport, et celui que les moyennes nationales effacent. Le Gabon n’a pas un problème de niveau : il a un problème de distribution. Le chiffre qui le prouve est enfoui dans l’annexe 2 et n’a jamais été mis en avant.",
          en: "This is the report's single message, and the one the national averages erase. Gabon does not have a level problem; it has a distribution problem. The number that proves it is buried in Annex 2 and has never been brought forward."
        },
        blocks: [

          { type: "prose",
            title: { fr: "Huit ruraux sur dix vivent sous le seuil de pauvreté",
                     en: "Eight rural people in ten live below the poverty line" },
            text: {
              fr: "Le taux de pauvreté au seuil national atteint 80,1 % en milieu rural, contre 39,6 % en milieu urbain. Ce chiffre ne figure ni dans les Messages clés, ni dans la fiche OSAA, ni dans l’ancien tableau de bord : il faut aller le chercher dans l’annexe 2 du rapport, sous l’indicateur 1.2.1, source INSTAT (EGEP II). Il est pourtant la clé de lecture de tout le reste.\n\nCar toutes les autres fractures s’alignent sur celle-là. L’électricité : 98,2 % en ville, 26,3 % à la campagne — soixante-douze points d’écart. L’eau potable : 83 % contre 57 %. L’accès routier rural : 26,5 % de la population rurale à moins de deux kilomètres d’une route praticable toute l’année. Les accouchements assistés : 96,3 % en ville, 76,0 % en zone rurale. Le paludisme frappe à 515 cas pour 1 000 habitants en milieu rural, contre 290 en ville. La mortalité des moins de cinq ans est de 35,4 ‰ en ville et de 54,2 ‰ à la campagne. La défécation à l’air libre est de 1 % en ville et de 8 % en zone rurale — figée depuis 2020.\n\nLa moyenne nationale, elle, ne décrit personne. Un taux d’électrification de 92,5 % est authentique et il est trompeur : dans un pays urbanisé à plus de 90 %, il mesure surtout les villes. C’est précisément ce que le rapport dit, et c’est précisément ce que la lecture par moyennes efface.",
              en: "The poverty rate at the national line reaches 80.1% in rural areas, against 39.6% in urban areas. The figure appears in neither the key messages, nor the OSAA fact sheet, nor the old dashboard: it has to be dug out of Annex 2, under indicator 1.2.1, sourced to INSTAT (EGEP II). It is nonetheless the key to everything else.\n\nBecause every other divide lines up behind it. Electricity: 98.2% in the cities, 26.3% in the countryside — seventy-two points apart. Drinking water: 83% against 57%. Rural road access: 26.5% of rural people live within two kilometres of an all-season road. Skilled birth attendance: 96.3% urban, 76.0% rural. Malaria strikes at 515 cases per 1,000 people in rural areas, against 290 in the cities. Under-five mortality is 35.4 per 1,000 in the cities and 54.2 in the countryside. Open defecation is 1% urban and 8% rural — unchanged since 2020.\n\nThe national average describes nobody. An electrification rate of 92.5% is genuine and it is misleading: in a country more than 90% urban, it mostly measures the cities. That is exactly what the report says — and exactly what reading by averages erases."
            },
            source: "ENV 2026 · annexe 2 — ODD 1.2.1, 3.1.2, 3.2.1, 3.3.3 · annexe 1 — ODD 6.1.1, 7.1.1, 9.1.1" },

          { type: "chart", chart: {
            type: "gap", sdg: 1, unit: "%",
            title: { fr: "Le même pays, deux réalités — milieu urbain et milieu rural",
                     en: "One country, two realities — urban and rural" },
            items: [
              { label: { fr: "Pauvreté (seuil national) — urbain", en: "Poverty (national line) — urban" }, value: 39.6, emphasis: false },
              { label: { fr: "Pauvreté (seuil national) — rural", en: "Poverty (national line) — rural" }, value: 80.1, emphasis: true },
              { label: { fr: "Électricité — urbain", en: "Electricity — urban" }, value: 98.2, emphasis: false },
              { label: { fr: "Électricité — rural", en: "Electricity — rural" }, value: 26.3, emphasis: true },
              { label: { fr: "Eau potable — urbain", en: "Drinking water — urban" }, value: 83, emphasis: false },
              { label: { fr: "Eau potable — rural", en: "Drinking water — rural" }, value: 57, emphasis: true },
              { label: { fr: "Accouchements assistés — urbain", en: "Skilled birth attendance — urban" }, value: 96.3, emphasis: false },
              { label: { fr: "Accouchements assistés — rural", en: "Skilled birth attendance — rural" }, value: 76.0, emphasis: true }
            ],
            insight: {
              fr: "Quatre paires, une seule ligne de partage. La pauvreté rurale (80,1 %, seuil national, 2023) est le seul indicateur du rapport où le milieu rural dépasse le milieu urbain — parce que c’est le seul où la valeur haute est la mauvaise. Partout ailleurs, l’écart va dans le même sens. Les valeurs de pauvreté datent de 2023 (EGEP II) ; les autres, de 2024.",
              en: "Four pairs, one dividing line. Rural poverty (80.1%, national line, 2023) is the only indicator in the report on which rural exceeds urban — because it is the only one where the high value is the bad one. Everywhere else, the gap runs the same way. Poverty figures are for 2023 (EGEP II); the others for 2024."
            },
            source: "ENV 2026 · annexe 2 — ODD 1.2.1 et 3.1.2 (INSTAT · EDSG) · annexe 1 — ODD 6.1.1 et 7.1.1"
          } },

          { type: "chart", chart: {
            type: "gap", sdg: 3, unit: "",
            title: { fr: "Incidence du paludisme, pour 1 000 habitants, 2024",
                     en: "Malaria incidence, per 1,000 people, 2024" },
            items: [
              { label: { fr: "Milieu urbain", en: "Urban" }, value: 290, emphasis: false },
              { label: { fr: "Ensemble du pays", en: "National" }, value: 335, emphasis: false },
              { label: { fr: "Milieu rural", en: "Rural" }, value: 515, emphasis: true }
            ],
            insight: {
              fr: "L’incidence du paludisme recule partout — de 358 à 335 pour 1 000 habitants entre 2020 et 2024 — mais elle reste 1,8 fois plus élevée en zone rurale qu’en ville. La fracture ne se limite donc pas aux infrastructures : elle se lit dans les corps. Même écart pour la mortalité des moins de cinq ans (54,2 ‰ en milieu rural contre 35,4 ‰ en ville) et pour la natalité des adolescentes (145 ‰ contre 76,2 ‰).",
              en: "Malaria incidence is falling everywhere — from 358 to 335 per 1,000 between 2020 and 2024 — but it remains 1.8 times higher in rural areas than in the cities. The fracture is not confined to infrastructure: it is legible in people's bodies. The same gap holds for under-five mortality (54.2 per 1,000 rural against 35.4 urban) and for adolescent births (145 per 1,000 against 76.2)."
            },
            source: "ENV 2026 · annexe 2 — ODD 3.3.3, 3.2.1, 3.7.2 (OMS · EDSG)"
          } },

          { type: "stats", items: [
            { sdg: 6, label: { fr: "Ménages sans eau courante au domicile", en: "Households with no piped water at home" },
              value: 71, unit: "%",
              note: { fr: "seuls 29 % sont raccordés au réseau formel ; 52 % d’entre eux jugent l’eau « mauvaise » ou « très mauvaise »",
                      en: "only 29% are connected to the formal network; 52% of those rate the water \"poor\" or \"very poor\"" },
              source: "ENV 2026 · ENP GABON-2050" },
            { sdg: 7, label: { fr: "Fourniture d’électricité jugée de mauvaise qualité", en: "Electricity supply rated poor" },
              value: 57.3, unit: "%",
              note: { fr: "des personnes raccordées, en raison des coupures récurrentes",
                      en: "of connected households, because of recurrent outages" },
              source: "ENV 2026 · ENP 2024" },
            { sdg: 7, label: { fr: "Ruraux cuisinant au bois de coupe familiale", en: "Rural people cooking with self-cut firewood" },
              value: 55.2, unit: "%",
              note: { fr: "moins de 40 % des ménages ruraux utilisent le gaz butane, contre environ 97 % en ville",
                      en: "fewer than 40% of rural households use LPG, against about 97% in the cities" },
              source: "ENV 2026 · ENP 2024" },
            { sdg: 9, label: { fr: "Usagers insatisfaits du transport local", en: "Users dissatisfied with local transport" },
              value: 74, unit: "%",
              note: { fr: "tarifs jugés « chers » par 46 % et « très chers » par 29 %",
                      en: "fares rated \"expensive\" by 46% and \"very expensive\" by 29%" },
              source: "ENV 2026 · ENP GABON-2050" },
            { sdg: 11, label: { fr: "Logement décent jugé hors de portée", en: "Decent housing judged out of reach" },
              value: 90, unit: "%",
              note: { fr: "des Gabonais ; 42,7 % attendent d’abord la viabilisation des terrains",
                      en: "of Gabonese; 42.7% ask first for serviced land" },
              source: "ENV 2026 · ENP GABON-2050" },
            { sdg: 13, label: { fr: "Population vivant en zone inondable", en: "Population living in flood-prone areas" },
              value: 30.8, unit: "%",
              note: { fr: "76,2 % se déclarent exposés aux risques liés aux grandes pluies",
                      en: "76.2% report exposure to heavy-rainfall hazards" },
              source: "ENV 2026 · ENP GABON-2050" }
          ] },

          { type: "prose",
            title: { fr: "Ce que la fracture coûte, en pratique",
                     en: "What the divide costs, in practice" },
            text: {
              fr: "Le rapport documente la fracture jusqu’au niveau des localités, ce qu’aucune fiche de synthèse ne fait. À Fougamou, sur 25 bornes-fontaines installées en 1997, une seule reste opérationnelle. À Léconi et Bakoumba, les réseaux hérités des exploitations minières fonctionnent depuis plus de trente ans sans relève ; le départ de la Comilog a laissé Bakoumba avec des infrastructures vieillissantes et une dotation communale annuelle de 43 millions de FCFA. À Bitam, quatre cantons sur sept sont dans l’obscurité ; à Gamba, le taux de fonctionnalité de l’éclairage public avoisine 10 % ; à Lékoni-Lékori, 90 % du parc de lampadaires est obsolète.\n\nC’est pourquoi l’accélérateur que le Gabon retient n’est pas d’abord la construction, mais la gouvernance : « professionnaliser la maintenance locale » et sécuriser « une gouvernance locale pérenne des infrastructures ». Construire ne suffit pas si la commune ne peut ni exploiter ni entretenir. La décentralisation est d’ailleurs le premier des trois leviers de la « doctrine de rupture » exposée en partie III du rapport.",
              en: "The report documents the divide down to the level of individual towns — something no summary sheet does. In Fougamou, of 25 standpipes installed in 1997, exactly one still works. In Léconi and Bakoumba, networks inherited from the mining companies have run for more than thirty years with no replacement; Comilog's departure left Bakoumba with ageing infrastructure and an annual municipal allocation of 43 million CFA francs. In Bitam, four of seven cantons are in darkness; in Gamba, street lighting functions at around 10%; in Lékoni-Lékori, 90% of the lamp stock is obsolete.\n\nThis is why the accelerator Gabon names is not construction first, but governance: \"professionalise local maintenance\" and secure \"durable local governance of the infrastructure\". Building is not enough if the commune can neither operate nor maintain. Decentralisation is, accordingly, the first of the three levers of the \"doctrine of rupture\" set out in Part III of the report."
            },
            source: "ENV 2026 · consultations des collectivités locales · partie III" }
        ] },

      /* ═══════════ 4. VISION GABON-2050 & PNCD ═══════════ */
      { id: "vision",
        label: { fr: "Vision GABON-2050 & PNCD", en: "GABON-2050 Vision & PNCD" },
        intro: {
          fr: "Le plan s’appelle PNCD — Plan National de Croissance et de Développement. La fiche OSAA et l’ancien tableau de bord écrivaient « PNDC » : une inversion de lettres, propagée depuis le PDF des Messages clés. Le rapport, lui, écrit PNCD dans sa liste des sigles et une dizaine de fois dans le corps du texte.",
          en: "The plan is the PNCD — Plan National de Croissance et de Développement (National Growth and Development Plan). The OSAA fact sheet and the old dashboard wrote \"PNDC\": a letter inversion, propagated from the Main Messages PDF. The report writes PNCD in its list of acronyms and roughly ten times in the body."
        },
        blocks: [

          { type: "prose",
            title: { fr: "De la stabilisation à l’accélération opérationnelle",
                     en: "From stabilisation to operational acceleration" },
            text: {
              fr: "« Quatre ans après l’ENV 2022, axé sur la stabilisation, l’ENV 2026 marque la transition vers l’accélération opérationnelle. » C’est en ces termes que le rapport situe le cycle.\n\nL’architecture est simple. La Vision GABON-2050 fixe l’horizon : une économie diversifiée au-delà du pétrole, la résorption des fractures territoriales, et la conversion du capital naturel en prospérité partagée. Le PNCD en est « la première phase opérationnelle » : c’est le plan de mise en œuvre auquel l’ENV 2026 s’arrime explicitement. Autour d’eux gravitent les instruments programmatiques sectoriels — PNDT, PAT 2021-2023, Plan Directeur de l’Électricité, PAN-GIRE, SDAGE et Code de l’Eau, PASBAP, Plan National Climat, SNDS et PDSG.\n\nLe rapport opère ensuite une sélection : cinq « ODD moteurs » — 6, 7, 9, 11 et 17 — qualifiés d’« ossature physique, logistique et financière du développement national » et de « piliers de notre transformation pour briser les clivages spatiaux et sociaux ». Les douze autres ODD, y compris l’ODD 8, sont traités comme transversaux : ils forment « la matrice structurelle, humaine et environnementale » du pays. La fiche OSAA annonçait six thèmes en y ajoutant l’ODD 8 : le rapport en compte cinq.",
              en: "\"Four years after the 2022 review, which focused on stabilisation, the 2026 VNR marks the transition to operational acceleration.\" That is how the report situates the cycle.\n\nThe architecture is straightforward. The GABON-2050 Vision sets the horizon: an economy diversified beyond oil, the closing of territorial divides, and the conversion of natural capital into shared prosperity. The PNCD is \"its first operational phase\": the implementation plan to which the 2026 VNR explicitly anchors itself. Around them sit the sectoral programming instruments — PNDT, PAT 2021-2023, the Electricity Master Plan, PAN-GIRE, SDAGE and the Water Code, PASBAP, the National Climate Plan, the SNDS and the PDSG.\n\nThe report then makes a selection: five \"driver goals\" — SDG 6, 7, 9, 11 and 17 — described as \"the physical, logistical and financial backbone of national development\" and as \"the pillars of our transformation, to break spatial and social cleavages\". The other twelve SDGs, SDG 8 included, are treated as cross-cutting: they form the country's \"structural, human and environmental matrix\". The OSAA fact sheet announced six themes by adding SDG 8: the report counts five."
            },
            source: "ENV 2026 · Mot de la Ministre · parties I à III" },

          { type: "cards", items: [

            { name: { fr: "Vision GABON-2050", en: "GABON-2050 Vision" },
              kicker: { fr: "l’horizon national", en: "the national horizon" },
              text: {
                fr: "Cadre de prospective à long terme de la République gabonaise, décrit par le rapport comme la « vision collective pour un Gabon prospère et durable à l’horizon 2050 ». Trois ambitions : une économie diversifiée après le pétrole, la résorption des fractures territoriales, et la conversion du capital naturel — 88 % de couverture forestière, un statut de puits de carbone net — en prospérité partagée. Les ENV 2022 et 2026 en sont deux jalons.",
                en: "The Republic's long-term foresight framework, described by the report as the \"collective vision for a prosperous, sustainable Gabon by 2050\". Three ambitions: an economy diversified beyond oil, the closing of territorial divides, and the conversion of natural capital — 88% forest cover, certified net-carbon-sink status — into shared prosperity. The 2022 and 2026 reviews are two milestones within it."
              },
              source: "ENV 2026 · Mot de la Ministre" },

            { name: { fr: "PNCD — Plan National de Croissance et de Développement", en: "PNCD — National Growth and Development Plan" },
              kicker: { fr: "la première phase opérationnelle", en: "the first operational phase" },
              text: {
                fr: "Le PNCD est « la première phase opérationnelle » de la Vision GABON-2050 : le plan de mise en œuvre auquel l’ENV 2026 s’arrime pour identifier les leviers d’une croissance inclusive et résiliente. Attention à l’acronyme : le rapport écrit PNCD (Croissance et Développement) ; la fiche OSAA et l’ancien tableau de bord écrivaient « PNDC ». C’est la même chose, mal orthographiée.",
                en: "The PNCD is \"the first operational phase\" of the GABON-2050 Vision: the implementation plan to which the 2026 VNR anchors itself in identifying the levers of inclusive, resilient growth. Mind the acronym: the report writes PNCD (Croissance et Développement); the OSAA fact sheet and the old dashboard wrote \"PNDC\". Same plan, misspelt."
              },
              source: "ENV 2026 · liste des sigles" },

            { name: { fr: "Le pilotage : Planification et Prospective", en: "Steering: Planning and Foresight" },
              kicker: { fr: "sous l’autorité de la Présidence", en: "under the authority of the Presidency" },
              text: {
                fr: "L’ENV 2026 est placé sous l’autorité du Président de la République, Brice Clotaire Oligui Nguema, qui en signe la préface. Il est porté par le Ministère de la Planification et de la Prospective, dont la Direction Générale de la Prospective est la cheville ouvrière. Le rapport consacre, selon ses propres termes, « une coordination stratégique et une gouvernance renforcée », issues d’un dialogue participatif entre l’État, le secteur privé et la société civile.",
                en: "The 2026 VNR sits under the authority of the President of the Republic, Brice Clotaire Oligui Nguema, who signs its preface. It is led by the Ministry of Planning and Foresight, with the Directorate-General for Foresight as its working arm. In the report's own words, it establishes \"strategic coordination and strengthened governance\", born of a participatory dialogue between the State, the private sector and civil society."
              },
              source: "ENV 2026 · préface présidentielle · Mot de la Ministre" },

            { name: { fr: "Les cinq ODD moteurs", en: "The five driver goals" },
              kicker: { fr: "ODD 6, 7, 9, 11 et 17", en: "SDG 6, 7, 9, 11 and 17" },
              stats: [{ label: { fr: "ODD moteurs", en: "driver goals" }, value: 5, unit: "" },
                      { label: { fr: "ODD transversaux", en: "cross-cutting goals" }, value: 12, unit: "" }],
              text: {
                fr: "Le rapport se structure en trois axes : partie I, l’état des lieux des ODD transversaux (acquis institutionnels, contraintes de l’économie réelle, leviers) ; partie II, la dynamique des cinq ODD moteurs, chacun exposé en quatre temps — progrès depuis l’ENV 2022, défis, opportunités, recommandations ; partie III, la trajectoire stratégique 2030. L’ODD 8 relève de la partie I : c’est un ODD d’appui, non un moteur.",
                en: "The report is built on three axes: Part I, a stocktake of the cross-cutting SDGs (institutional gains, real-economy constraints, levers); Part II, the dynamics of the five driver goals, each set out in four movements — progress since the 2022 review, challenges, opportunities, recommendations; Part III, the strategic trajectory to 2030. SDG 8 belongs to Part I: it is a supporting goal, not a driver."
              },
              source: "ENV 2026 · architecture du rapport" },

            { name: { fr: "Le processus : quatre piliers de consultation", en: "The process: four pillars of consultation" },
              kicker: { fr: "une approche ascendante", en: "a bottom-up approach" },
              text: {
                fr: "Premièrement, l’écoute de la Nation : l’Enquête Nationale Prospective (ENP) GABON-2050 fournit la quasi-totalité des données de perception du rapport et sert de « boussole pour aligner les priorités des ODD sur les attentes réelles des citoyens ». Deuxièmement, la voix des collectivités locales, recueillie par guide d’entretien sur tout le territoire — Fougamou, Bakoumba, Léconi, Iboundji, Mayumba, Minvoul, Bitam, Gamba, Mékambo, Franceville. Troisièmement, le partenariat avec la Fédération des Entreprises du Gabon. Quatrièmement, l’engagement de la société civile.",
                en: "First, listening to the nation: the National Foresight Survey (ENP) GABON-2050 supplies almost all of the report's perception data and serves as a \"compass for aligning SDG priorities with what citizens actually expect\". Second, the voice of local authorities, gathered through a dedicated interview guide across the territory — Fougamou, Bakoumba, Léconi, Iboundji, Mayumba, Minvoul, Bitam, Gamba, Mékambo, Franceville. Third, partnership with the Federation of Gabonese Enterprises. Fourth, the engagement of civil society."
              },
              source: "ENV 2026 · méthodologie participative" },

            { name: { fr: "La doctrine de rupture (partie III)", en: "The doctrine of rupture (Part III)" },
              kicker: { fr: "trois leviers pour 2030", en: "three levers to 2030" },
              text: {
                fr: "La trajectoire stratégique 2030 repose sur trois leviers. La décentralisation, d’abord, comme moteur de l’équité territoriale — c’est la réponse directe à la fracture que tout le rapport décrit. La diversification inclusive et le dividende démographique, ensuite, pour transformer la croissance en emplois. La diplomatie financière et climatique souveraine, enfin : « basculer d’une diplomatie de plaidoyer vers une ingénierie financière offensive » et faire valoir le statut de « créancier écologique global » du Gabon.",
                en: "The strategic trajectory to 2030 rests on three levers. Decentralisation first, as the engine of territorial equity — the direct answer to the fracture the whole report describes. Inclusive diversification and the demographic dividend next, to turn growth into jobs. And sovereign financial and climate diplomacy: \"shifting from a diplomacy of advocacy to offensive financial engineering\" and asserting Gabon's standing as a \"global ecological creditor\"."
              },
              source: "ENV 2026 · partie III — trajectoire stratégique 2030" }
          ] }
        ] },

      /* MORE */
    ]
  }
});
