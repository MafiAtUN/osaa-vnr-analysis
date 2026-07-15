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
        fr: "Le Grand Libreville subit un déficit structurel, tandis que l’accès rural à l’eau potable s’établit à 57 %, contre 83 % en ville — un niveau urbain strictement stable depuis 2020. Priorité : professionnaliser la maintenance locale, moderniser l’assainissement, étendre les forages solaires.",
        en: "Greater Libreville runs a structural deficit, while rural access to drinking water stands at 57%, against 83% in the cities — an urban level that has not moved since 2020. The priority: professionalise local maintenance, modernise sanitation, extend solar boreholes."
      } },
    { sdg: 7,
      title: { fr: "Électrification et fracture rurale", en: "Electrification and the rural divide" },
      text: {
        fr: "L’électrification atteint 92,5 % en 2024 avec un mix renouvelable de 91,2 %, mais l’accès rural plafonne à 26,3 %. L’hydroélectricité (Kinguélé Aval, Ngoulmendjim, Dibwangui) et l’hybridation solaire sont les accélérateurs.",
        en: "Electrification reached 92.5% in 2024 with a 91.2% renewable mix, but rural access is capped at 26.3%. Hydropower (Kinguélé Aval, Ngoulmendjim, Dibwangui) and solar hybridisation are the accelerators."
      } },
    { sdg: 8,
      title: { fr: "Croissance inclusive et résiliente", en: "Inclusive and resilient growth" },
      text: {
        fr: "ODD transversal dans l’ENV 2026 : la croissance ne crée pas encore d’emplois. Chômage 20,0 %, emploi informel 47,0 %, jeunes NEET 36,2 % — alors que 53,4 % des Gabonais placent l’emploi des jeunes en priorité absolue.",
        en: "A cross-cutting goal in the 2026 review: growth is not yet creating jobs. Unemployment 20.0%, informal employment 47.0%, youth NEET 36.2% — while 53.4% of Gabonese name youth jobs their single highest priority."
      } },
    { sdg: 9,
      title: { fr: "Industrie, innovation et infrastructures", en: "Industry, innovation and infrastructure" },
      text: {
        fr: "Les Zones d’Investissement Spéciales portent la valeur ajoutée manufacturière à 6,8 % du PIB en 2024, mais la fracture logistique (26,5 % d’accès routier rural) limite encore l’impact sur l’emploi manufacturier (4,5 %).",
        en: "The Special Investment Zones lifted manufacturing value added to 6.8% of GDP in 2024, but the logistics divide (26.5% rural road access) still caps the impact on manufacturing employment (4.5%)."
      } },
    { sdg: 11,
      title: { fr: "Urbanisation, services et risques", en: "Urbanisation, services and risk" },
      text: {
        fr: "Avec une urbanisation supérieure à 90 %, les enjeux se concentrent en ville : 295 sinistrés pour 100 000 habitants en 2024 (245 en 2022) et 19,5 % d’accès aisé aux transports publics.",
        en: "With urbanisation above 90%, most issues are concentrated in the cities: 295 disaster-affected people per 100,000 inhabitants in 2024 (245 in 2022) and easy access to public transport at 19.5%."
      } },
    { sdg: 17,
      title: { fr: "Souveraineté budgétaire et partenariats", en: "Fiscal sovereignty and partnerships" },
      text: {
        fr: "Les recettes publiques passent de 17,6 % à 23,7 % du PIB, mais le service de la dette absorbe 17 % du budget (14,5 % des exportations) et l’APD stagne à 0,4 % du RNB. La captation de la finance verte est l’accélérateur revendiqué.",
        en: "Government revenue rose from 17.6% to 23.7% of GDP, but debt service absorbs 17% of the budget (14.5% of exports) and ODA is stuck at 0.4% of GNI. Capturing green finance is the stated accelerator."
      } }
  ],

  continuity: [
    { prev: { fr: "Contraintes : pétrole & COVID-19", en: "Constraints: oil and COVID-19" },
      status: "sustained",
      now: { fr: "Vision GABON-2050 & PNCD", en: "GABON-2050 Vision and the PNCD" } },
    { prev: { fr: "Capital vert et transformation structurelle", en: "Green capital and structural transformation" },
      status: "evolved",
      now: { fr: "Forages solaires & gouvernance locale", en: "Solar boreholes and local governance" } },
    { prev: { fr: "Éducation : scolarisation 88 %, parité genre", en: "Education: 88% enrolment, gender parity" },
      status: "evolved",
      now: { fr: "92,5 % d’accès à l’électricité, mix renouvelable 91,2 %", en: "92.5% electricity access, 91.2% renewable mix" } },
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
          fr: "Toutes les valeurs sont celles du rapport intégral ENV 2026 pour l’année 2024. Toute projection y est signalée comme telle. Sélectionnez une vignette pour en déplier la lecture.",
          en: "Every figure here is the 2024 value carried by the full 2026 VNR report. Where a value is a projection, it is labelled as such. Select a tile to open its reading."
        },
        blocks: [

          { type: "metrics", items: [

            { sdg: 7,
              label: { fr: "Accès à l’électricité", en: "Electricity access" },
              value: 92.5, unit: "%",
              sub: { fr: "2024 · mais 26,3 % en zone rurale (proj. 2025 : 92,8 %)",
                     en: "2024 · but 26.3% in rural areas (proj. 2025: 92.8%)" },
              panel: {
                sdg: 7,
                title: { fr: "Accès à l’électricité : moyenne nationale et milieu rural, 2020-2024",
                         en: "Electricity access: national average and rural areas, 2020–2024" },
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
                  fr: "Deux courbes, un seul pays. La moyenne nationale approche la saturation, tandis que l'accès rural a gagné 1,6 point de pourcentage en cinq ans — de 24,7 % en 2020 à 26,3 % en 2024. L’accès urbain atteint 98,2 % en 2024. La valeur 2024 est de 92,5 % ; 92,8 % est la projection 2025.",
                  en: "Two lines, one country. The national average is close to saturation, while rural access gained 1.6 percentage points in five years — from 24.7% in 2020 to 26.3% in 2024. Urban access reached 98.2% in 2024. The 2024 value is 92.5%; 92.8% is the 2025 projection."
                },
                source: "ENV 2026 · Messages clés (rapport intégral) · annexe 1, ODD 7.1.1"
              } },

            { sdg: 6,
              label: { fr: "Eau potable — milieu rural", en: "Drinking water — rural" },
              value: 57, unit: "%",
              sub: { fr: "2024 · contre 83 % en ville, stable depuis 2020",
                     en: "2024 · against 83% in the cities, flat since 2020" },
              panel: {
                sdg: 6,
                title: { fr: "Services d’eau de base : milieu urbain et rural, 2020-2024",
                         en: "Basic water services: urban and rural, 2020–2024" },
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
                  fr: "Le rapport donne 57 % en milieu rural — en hausse continue depuis 53 % en 2020 — et 83 % en ville, stable depuis 2020. Les équipements de lavage des mains se maintiennent à 48,2 % depuis 2022, et la défécation à l’air libre reste à 8 % en zone rurale.",
                  en: "The report gives 57% rural — climbing steadily from 53% in 2020 — and 83% urban, unchanged since 2020. Handwashing facilities have held at 48.2% since 2022, and rural open defecation remains at 8%."
                },
                source: "ENV 2026 · annexe 1 — ODD 6.1.1 et 6.2.1 (OMS/UNICEF, JMP)"
              } },

            { sdg: 1,
              label: { fr: "Pauvreté — milieu rural", en: "Poverty — rural" },
              value: 80.1, unit: "%",
              sub: { fr: "seuil national, 2023 · contre 39,6 % en ville",
                     en: "national poverty line, 2023 · against 39.6% urban" },
              panel: {
                sdg: 1,
                title: { fr: "Pauvreté au seuil national : milieu urbain et rural, 2023",
                         en: "Poverty at the national line: urban and rural, 2023" },
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
                  fr: "Huit ruraux sur dix vivent sous le seuil national de pauvreté (80,1 %), contre quatre citadins sur dix (39,6 %) ; la moyenne nationale est de 45,0 % (annexe 2, indicateur 1.2.1, INSTAT/EGEP II). Le même écart rural-urbain se retrouve pour l’électricité, l’eau, la route, la santé et l’école.",
                  en: "Eight rural people in ten live below the national poverty line (80.1%), against four city-dwellers in ten (39.6%); the national average is 45.0% (Annex 2, indicator 1.2.1, INSTAT/EGEP II). The same rural–urban pattern runs through electricity, water, roads, health and schooling."
                },
                source: "ENV 2026 · annexe 2 — ODD 1.2.1 (INSTAT, EGEP II / RGEF Estuaire 2023)"
              } },

            { sdg: 9,
              label: { fr: "VA manufacturière", en: "Manufacturing value added" },
              value: 6.8, unit: "%",
              sub: { fr: "du PIB, 2024 · contre 5,5 % en 2020 (proj. 2025 : 7,1 %)",
                     en: "of GDP, 2024 · up from 5.5% in 2020 (proj. 2025: 7.1%)" },
              panel: {
                sdg: 9,
                title: { fr: "Valeur ajoutée manufacturière et emploi, 2020-2024",
                         en: "Manufacturing value added and employment, 2020–2024" },
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
                  fr: "La diversification produit de la valeur ajoutée : +1,3 point de pourcentage du PIB en quatre ans, portée par les Zones d’Investissement Spéciales. La part de l'emploi manufacturier a gagné 0,3 point de pourcentage sur la même période et reste stable depuis 2023, aux côtés d’un chômage de 20,0 %, d’un emploi informel de 47,0 % et de 36,2 % de jeunes ni en emploi, ni en études, ni en formation.",
                  en: "Diversification is adding value: +1.3 percentage points of GDP in four years, driven by the Special Investment Zones. Manufacturing's share of employment gained 0.3 percentage points over the same period and has been flat since 2023, alongside 20.0% unemployment, 47.0% informal employment and 36.2% of young people not in employment, education or training."
                },
                source: "ENV 2026 · annexes 1 et 2 — ODD 9.2.1, 9.2.2, 8.3.1, 8.5.2, 8.6.1"
              } },

            { sdg: 11,
              label: { fr: "Sinistrés de catastrophes", en: "Disaster-affected people" },
              value: 295, unit: "",
              sub: { fr: "pour 100 000 hab., 2024 · 245 en 2022",
                     en: "per 100,000 inhabitants, 2024 · 245 in 2022" },
              panel: {
                sdg: 11,
                title: { fr: "Personnes décédées, disparues ou directement touchées par une catastrophe, 2020-2024",
                         en: "People dead, missing or directly affected by disaster, 2020–2024" },
                chart: {
                  type: "line", sdg: 11, unit: "",
                  title: { fr: "Sinistrés de catastrophes, pour 100 000 habitants",
                           en: "Disaster-affected people, per 100,000 inhabitants" },
                  unit: "",
                  series: [
                    { key: "aff", label: { fr: "Sinistrés pour 100 000 hab.", en: "Affected per 100,000" },
                      points: [{ x: "2020", y: 185 }, { x: "2021", y: 210 }, { x: "2022", y: 245 }, { x: "2023", y: 280 }, { x: "2024", y: 295 }] }
                  ],
                  source: "ENV 2026 · annexe 1 — ODD 11.5.1 (UNDRR)"
                },
                text: {
                  fr: "Les sinistrés de catastrophes passent de 185 pour 100 000 habitants en 2020 à 295 en 2024 (245 en 2022). Le contexte : 30,8 % des Gabonais vivent en zone inondable, 76,2 % se déclarent exposés aux risques liés aux grandes pluies, et 90 % jugent l’accès à un logement décent hors de portée. (285 est la projection 2025 ; la valeur 2023 est de 280.)",
                  en: "Disaster-affected people rose from 185 per 100,000 in 2020 to 295 in 2024 (245 in 2022). The context: 30.8% of Gabonese live in flood-prone areas, 76.2% report exposure to heavy-rainfall hazards, and 90% consider decent housing out of reach. (285 is the 2025 projection; the 2023 value is 280.)"
                },
                source: "ENV 2026 · annexe 1 — ODD 11.5.1 (UNDRR) · ENP GABON-2050"
              } },

            { sdg: 17,
              label: { fr: "Recettes publiques / PIB", en: "Government revenue / GDP" },
              value: 23.7, unit: "%",
              sub: { fr: "2024 · contre 17,6 % en 2020",
                     en: "2024 · up from 17.6% in 2020" },
              panel: {
                sdg: 17,
                title: { fr: "Total des recettes publiques, en pourcentage du PIB, 2020-2024",
                         en: "Total government revenue as a share of GDP, 2020–2024" },
                chart: {
                  type: "line", sdg: 17, unit: "%",
                  title: { fr: "Recettes publiques totales, en % du PIB",
                           en: "Total government revenue, % of GDP" },
                  series: [
                    { key: "rev", label: { fr: "Recettes publiques / PIB", en: "Government revenue / GDP" },
                      points: [{ x: "2020", y: 17.6 }, { x: "2021", y: 15.3 }, { x: "2022", y: 21.1 }, { x: "2023", y: 24.6 }, { x: "2024", y: 23.7 }] }
                  ],
                  source: "ENV 2026 · annexe 1 — ODD 17.1.1 (DGEPF/TOFE · FMI)"
                },
                text: {
                  fr: "Du creux post-COVID de 15,3 % en 2021 au pic de 24,6 % en 2023, les recettes publiques ont gagné plus de neuf points de pourcentage du PIB en deux ans, avant de se stabiliser à 23,7 %. C’est le socle du plaidoyer gabonais à New York : l’investissement plutôt que l’assistance.",
                  en: "From the post-COVID trough of 15.3% in 2021 to the 24.6% peak of 2023, government revenue gained more than nine percentage points of GDP in two years before settling at 23.7%. This underpins Gabon’s case in New York: investment rather than assistance."
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
                status: { fr: "Quasi-saturation urbaine (98,2 %) ; la marge restante est presque entièrement rurale.",
                          en: "Urban access is near saturation (98.2%); the remaining gap is almost entirely rural." } },
              { label: { fr: "Accès à l’électricité — milieu rural", en: "Electricity access — rural" },
                from: 24.7, fromYear: "2020", to: 26.3, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "+1,6 point de pourcentage en cinq ans.",
                          en: "+1.6 percentage points in five years." } },
              { label: { fr: "Eau de base — milieu rural", en: "Basic water — rural" },
                from: 53, fromYear: "2020", to: 57, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "Progression continue depuis 2020 (+4 points de pourcentage).",
                          en: "Continuous progress since 2020 (+4 percentage points)." } },
              { label: { fr: "Eau de base — milieu urbain", en: "Basic water — urban" },
                from: 83, fromYear: "2020", to: 83, toYear: "2024", unit: "%", dir: "flat",
                status: { fr: "Stable depuis 2020.",
                          en: "Unchanged since 2020." } },
              { label: { fr: "Équipements de lavage des mains (eau + savon)", en: "Handwashing facilities (water + soap)" },
                from: 48.0, fromYear: "2020", to: 48.2, toYear: "2024", unit: "%", dir: "flat",
                status: { fr: "Un ménage sur deux reste sans dispositif.",
                          en: "One household in two still has no facility." } },
              { label: { fr: "Assainissement amélioré", en: "Improved sanitation" },
                from: 54.2, fromYear: "2020", to: 57.4, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "Amélioration depuis 2020 ; la défécation à l’air libre reste à 8 % en milieu rural.",
                          en: "Improvement since 2020; rural open defecation remains at 8%." } },
              { label: { fr: "VA manufacturière / PIB", en: "Manufacturing VA / GDP" },
                from: 5.5, fromYear: "2020", to: 6.8, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "La diversification produit de la valeur (proj. 2025 : 7,1 %).",
                          en: "Diversification is creating value (proj. 2025: 7.1%)." } },
              { label: { fr: "Emploi manufacturier / emploi total", en: "Manufacturing employment / total employment" },
                from: 4.2, fromYear: "2020", to: 4.5, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "+0,3 point de pourcentage, et stable depuis 2023.",
                          en: "+0.3 percentage points, and flat since 2023." } },
              { label: { fr: "Accès routier rural (< 2 km d’une route praticable)", en: "Rural road access (within 2 km of an all-season road)" },
                from: 25, fromYear: "2020", to: 26.5, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "Les routes sont la 2ᵉ priorité des Gabonais (18,2 %).",
                          en: "Roads are citizens’ second-highest priority (18.2%)." } },
              { label: { fr: "Population urbaine en quartiers précaires", en: "Urban population in slums or inadequate housing" },
                from: 40.0, fromYear: "2020", to: 38.5, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "−1,5 point de pourcentage en cinq ans ; 90 % jugent le logement décent hors de portée.",
                          en: "−1.5 percentage points in five years; 90% find decent housing out of reach." } },
              { label: { fr: "Accès aisé aux transports publics", en: "Easy access to public transport" },
                from: 18.0, fromYear: "2020", to: 19.5, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "19,5 % d’accès aisé en 2024 (proj. 2025 : 20,1 %).",
                          en: "19.5% with easy access in 2024 (proj. 2025: 20.1%)." } },
              { label: { fr: "Sinistrés de catastrophes (pour 100 000 hab.)", en: "Disaster-affected people (per 100,000)" },
                from: 185, fromYear: "2020", to: 295, toYear: "2024", unit: "", dir: "up",
                status: { fr: "En hausse depuis 185 pour 100 000 en 2020.",
                          en: "Up from 185 per 100,000 in 2020." } },
              { label: { fr: "Recettes publiques / PIB", en: "Government revenue / GDP" },
                from: 17.6, fromYear: "2020", to: 23.7, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "En hausse de plus de six points de pourcentage depuis 2020, après un creux à 15,3 % en 2021.",
                          en: "Up more than six percentage points since 2020, after a 15.3% trough in 2021." } },
              { label: { fr: "Part du budget financée par l’impôt intérieur", en: "Share of the budget financed by domestic taxes" },
                from: 43.5, fromYear: "2020", to: 53.7, toYear: "2024", unit: "%", dir: "up",
                status: { fr: "Dématérialisation des régies (e-t@x, Sydonia World) : plus de dix points de pourcentage gagnés.",
                          en: "Digitalised revenue administration (e-t@x, Sydonia World): more than ten percentage points gained." } },
              { label: { fr: "APD nette / RNB", en: "Net ODA / GNI" },
                from: 0.7, fromYear: "2020", to: 0.4, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "Stable à 0,4 % depuis 2022.",
                          en: "Flat at 0.4% since 2022." } },
              { label: { fr: "IDE nets / PIB", en: "Net FDI / GDP" },
                from: 11.2, fromYear: "2020", to: 5.5, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "En recul, de 11,2 % à 5,5 % depuis 2020.",
                          en: "Down from 11.2% to 5.5% since 2020." } },
              { label: { fr: "Taux de chômage", en: "Unemployment rate" },
                from: 21.0, fromYear: "2020", to: 20.0, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "Un point de pourcentage en cinq ans, avec 47,0 % d'emploi informel. 53,4 % des citoyens en font la priorité n° 1.",
                          en: "One percentage point in five years, with 47.0% informal employment. 53.4% of citizens make it priority number one." } },
              { label: { fr: "Jeunes de 15-24 ans ni en emploi, ni en études (NEET)", en: "Youth 15–24 not in employment, education or training" },
                from: 38.5, fromYear: "2020", to: 36.2, toYear: "2024", unit: "%", dir: "down",
                status: { fr: "Plus d’un jeune sur trois.",
                          en: "More than one young person in three." } },
              { label: { fr: "Part des renouvelables dans l’énergie finale", en: "Renewables in final energy consumption" },
                from: 91.4, fromYear: "2020", to: 91.2, toYear: "2024", unit: "%", dir: "flat",
                status: { fr: "Mix à 91,2 % renouvelable, stable sur la série.",
                          en: "91.2% renewable, stable across the series." } },
              { label: { fr: "Couverture forestière", en: "Forest cover" },
                from: 88.0, fromYear: "2020", to: 88.0, toYear: "2024", unit: "%", dir: "flat",
                status: { fr: "Constante sur toute la série, à 88 %.",
                          en: "Constant across the whole series, at 88%." } }
            ],
            source: "ENV 2026 · annexes statistiques 1 et 2 (séries 2020-2024)" },

          { type: "stats", items: [
            { sdg: 8, label: { fr: "Taux de chômage", en: "Unemployment rate" }, value: 20.0, unit: "%",
              note: { fr: "2024 · 21,0 % en 2020", en: "2024 · 21.0% in 2020" },
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
            title: { fr: "Éducation : de la scolarisation à l’achèvement, 2024",
                     en: "Education: from enrolment to completion, 2024" },
            items: [
              { label: { fr: "Scolarisation nette au primaire", en: "Net primary enrolment" }, value: 94.8, emphasis: false },
              { label: { fr: "Achèvement du primaire", en: "Primary completion" }, value: 67.5, emphasis: false },
              { label: { fr: "Achèvement du 1ᵉʳ cycle du secondaire", en: "Lower-secondary completion" }, value: 61.0, emphasis: false },
              { label: { fr: "Achèvement du 2ᵈ cycle du secondaire", en: "Upper-secondary completion" }, value: 30.2, emphasis: true }
            ],
            insight: {
              fr: "Presque tous les enfants gabonais entrent à l’école : la scolarisation nette au primaire atteint 94,8 %. Deux sur trois achèvent le primaire ; trois sur dix achèvent le second cycle du secondaire. Ce constat rejoint les 36,2 % de jeunes NEET et les 47 % d’emploi informel. Le rapport retient l’« adéquation formation-emploi » comme accélérateur de l’ODD 9.",
              en: "Almost every Gabonese child starts school: net primary enrolment reaches 94.8%. Two in three complete primary; three in ten complete upper secondary. This links to the 36.2% NEET rate and 47% informality. The report names training-to-jobs alignment as an SDG 9 accelerator."
            },
            source: "ENV 2026 · annexe 2 — ODD 4 (taux d’achèvement et de scolarisation, 2024)"
          } }
        ] },

      /* ═══════════ 2. LES CINQ MOTEURS ═══════════ */
      { id: "drivers",
        label: { fr: "Les cinq moteurs", en: "The Five Drivers" },
        intro: {
          fr: "Le rapport retient cinq « ODD moteurs » — 6, 7, 9, 11 et 17 — présentés comme « l’ossature physique, logistique et financière du développement national ». Les douze autres ODD sont traités comme transversaux, l’ODD 8 compris. Chaque moteur est exposé dans la structure du Gabon lui-même : Le contraste, L’enjeu, L’accélérateur. Le français est le texte du rapport ; l’anglais en est la traduction.",
          en: "The report selects five \"driver goals\" — SDG 6, 7, 9, 11 and 17 — described as \"the physical, logistical and financial backbone of national development\". The other twelve SDGs are treated as cross-cutting, SDG 8 among them. Each driver is set out in Gabon's own structure: The contrast, What is at stake, The accelerator. The French is the report's own wording; the English is its translation."
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
                  fr: "Le rapport ne chiffre pas le déficit du Grand Libreville : il le qualifie de « structurel ». À l’échelle du pays, 71 % des ménages n’ont pas d’adduction dans le logement, et 52 % de ceux qui sont raccordés jugent l’eau « mauvaise » ou « très mauvaise ».",
                  en: "The report puts no number on Greater Libreville’s deficit: it calls it \"structural\". Nationally, 71% of households have no piped water in the home, and 52% of those connected rate the water \"poor\" or \"very poor\"."
                },
                source: "ENV 2026 · annexe 1 — ODD 6.1.1 (OMS/UNICEF, JMP) · ENP GABON-2050"
              },
              contrast: {
                fr: "Le Gabon affronte un stress hydrique paradoxal ; le Grand Libreville subit un déficit structurel, tandis que l’accès rural à l’eau potable s’établit à 57 %, contre 83 % en ville.",
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
              headline: { fr: "Un taux national élevé, un écart rural marqué",
                          en: "A high national rate, a wide rural gap" },
              chart: {
                type: "gap", sdg: 7, unit: "%",
                title: { fr: "Accès à l’électricité, 2024", en: "Electricity access, 2024" },
                items: [
                  { label: { fr: "Milieu urbain", en: "Urban" }, value: 98.2, emphasis: false },
                  { label: { fr: "Ensemble du pays", en: "National" }, value: 92.5, emphasis: false },
                  { label: { fr: "Milieu rural", en: "Rural" }, value: 26.3, emphasis: true }
                ],
                insight: {
                  fr: "Soixante-douze points de pourcentage séparent l'accès urbain (98,2 %) de l'accès rural (26,3 %). Sur la qualité : 57,3 % des personnes raccordées jugent la fourniture mauvaise, et 55,2 % des ruraux cuisinent encore au bois de coupe familiale.",
                  en: "Seventy-two percentage points separate urban access (98.2%) from rural access (26.3%). On quality: 57.3% of connected households rate supply as poor, and 55.2% of rural people still cook with self-cut firewood."
                },
                source: "ENV 2026 · annexe 1 — ODD 7.1.1 (BM/WDI · SEEG · INSTAT) · ENP GABON-2050"
              },
              contrast: {
                fr: "Le taux d’électrification atteint 92,5 % en 2024 avec un mix renouvelable supérieur à 91 % (établi à 91,2 %) ; l’accès rural s’établit à 26,3 %.",
                en: "The electrification rate reaches 92.5% in 2024, with a renewable mix above 91% (at 91.2%); rural access stands at 26.3%."
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
              headline: { fr: "Le fret ferroviaire progresse, l’accès routier rural reste limité",
                          en: "Rail freight rises; rural road access stays limited" },
              chart: {
                type: "line", sdg: 9, unit: " Mt",
                title: { fr: "Fret ferroviaire du Transgabonais, en millions de tonnes",
                         en: "Transgabonais rail freight, million tonnes" },
                series: [
                  { key: "freight", label: { fr: "Fret ferroviaire (SETRAG)", en: "Rail freight (SETRAG)" },
                    points: [{ x: "2020", y: 8.9 }, { x: "2022", y: 10.3 }, { x: "2024", y: 11.2 }] }
                ],
                insight: {
                  fr: "Le Plan de Remise à Niveau du Transgabonais, conduit en PPP avec la SETRAG, a porté le fret de 8,9 à 11,2 millions de tonnes en quatre ans : le manganèse et le bois sortent mieux du pays. La route, elle, ne bouge pas : 26,5 % seulement de la population rurale vit à moins de deux kilomètres d’une route praticable toute l’année. Le Gabon a un corridor d’exportation ; il n’a pas encore un réseau de désenclavement. Seuls les trois points documentés sont tracés.",
                  en: "The Transgabonais upgrade programme, run as a PPP with SETRAG, lifted freight from 8.9 to 11.2 million tonnes in four years: manganese and timber leave the country more easily. The roads have not moved: just 26.5% of the rural population lives within two kilometres of an all-season road. Gabon has an export corridor; it does not yet have a network that opens up the hinterland. Only the three documented points are plotted."
                },
                source: "ENV 2026 · corps du rapport — ODD 9.1 (SETRAG · Ministère des Transports) et ODD 9.1.1"
              },
              contrast: {
                fr: "Le Gabon accélère sa diversification via les Zones d’Investissement Spéciales, portant la valeur ajoutée manufacturière à 6,8 % du PIB en 2024.",
                en: "Gabon is accelerating diversification through its Special Investment Zones, lifting manufacturing value added to 6.8% of GDP in 2024."
              },
              stake: {
                fr: "Sous l’impulsion des hautes autorités, des réformes structurelles majeures sont engagées pour transformer le climat des affaires, bien que la fracture logistique (26,5 % d’accès routier rural) limite encore l’impact sur l’emploi manufacturier (4,5 %).",
                en: "Under the impetus of the highest authorities, major structural reforms are under way to transform the business climate — yet the logistics divide (26.5% rural road access) still caps the impact on manufacturing employment (4.5%)."
              },
              accelerator: {
                fr: "Le désenclavement des territoires et l’adéquation formation-emploi sont les leviers impératifs pour propulser des champions nationaux et valoriser l’économie circulaire, appuyés par le déploiement effectif des réformes structurelles engagées.",
                en: "Opening up the hinterland and aligning training with jobs are the imperative levers to propel national champions and monetise the circular economy, backed by effective rollout of the reforms already launched."
              },
              source: "ENV 2026 · Messages clés (rapport intégral)" },

            { sdg: 11,
              headline: { fr: "Une urbanisation supérieure à 90 % et la couverture des services urbains",
                          en: "Urbanisation above 90% and urban service coverage" },
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
                  fr: "Trois services urbains. La collecte des déchets progresse par paliers, alors que 64,1 % des habitants notent l’absence d’aménagements pour le dépôt des ordures ; la part des quartiers précaires recule de 1,5 point de pourcentage en cinq ans, quand 90 % des Gabonais jugent le logement décent hors de portée ; l’accès aisé aux transports publics reste sous les 20 %, avec 74 % d’usagers insatisfaits. Le rapport donne une urbanisation « supérieure à 90 % ».",
                  en: "Three urban services. Waste collection improves in steps, while 64.1% of residents report no facilities for depositing refuse; the slum share falls by 1.5 percentage points in five years, while 90% of Gabonese find decent housing out of reach; easy access to public transport stays below 20%, with 74% of users dissatisfied. The report gives urbanisation as \"above 90%\"."
                },
                source: "ENV 2026 · annexe 1 — ODD 11.1.1, 11.2.1, 11.6.1 (ONU-Habitat · INSTAT) · ENP GABON-2050"
              },
              contrast: {
                fr: "Avec une urbanisation supérieure à 90 %, les villes gabonaises regroupent l’essentiel de la population, y compris des ménages précaires installés en zones inconstructibles.",
                en: "With urbanisation above 90%, Gabon’s cities are home to most of the population, including precarious households settled on unbuildable land."
              },
              stake: {
                fr: "En 2024, le pays enregistre 295 sinistrés pour 100 000 habitants (245 en 2022), et l’accès aisé aux transports publics s’établit à 19,5 %.",
                en: "In 2024 the country records 295 disaster-affected people per 100,000 inhabitants (245 in 2022), and easy access to public transport stands at 19.5%."
              },
              accelerator: {
                fr: "La régularisation foncière massive et la modernisation des réseaux de drainage sont indispensables pour bâtir des espaces de vie résilients face aux risques climatiques, intégrés dans une planification urbaine plus inclusive et préventive.",
                en: "Mass land-tenure regularisation and modernisation of drainage networks are indispensable to build living spaces resilient to climate risk, embedded in more inclusive, preventive urban planning."
              },
              source: "ENV 2026 · Messages clés (rapport intégral)" },

            { sdg: 17,
              headline: { fr: "Des recettes intérieures en hausse, un financement extérieur plus contraint",
                          en: "Rising domestic revenue, tighter external financing" },
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
                  fr: "Après le point bas de 2022, le service de la dette remonte : 14,5 % des exportations en 2024, et 17,0 % projetés pour 2025. Les investissements directs étrangers ont reculé de moitié depuis 2020 et l’aide publique se maintient à 0,4 % du RNB. Le rapport ajoute que le service de la dette absorbe 17 % du budget national.",
                  en: "After bottoming out in 2022, debt service is climbing again: 14.5% of exports in 2024, and a projected 17.0% for 2025. Foreign direct investment has fallen by half since 2020 and official aid holds at 0.4% of GNI. The report adds that debt service absorbs 17% of the national budget."
                },
                source: "ENV 2026 · annexe 1 — ODD 17.3.1 et 17.4.1 (BM · OCDE · CNUCED)"
              },
              contrast: {
                fr: "Le Gabon renforce sa souveraineté budgétaire en diversifiant son économie, mais le service de la dette (qui représente 17 % du budget national, soit 14,5 % des exportations en 2024) et une aide publique stagnante (0,4 % du RNB) maintiennent une forte vulnérabilité aux chocs.",
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
              fr: "« La réussite des accélérateurs identifiés repose sur la captation stratégique des financements verts. En parallèle, la localisation de l’ENV assure une appropriation territoriale de l’Agenda 2030, traduisant les orientations nationales en bénéfices concrets pour chaque citoyen. »\n\nCette phrase, qui clôt les Messages clés du rapport, contient les deux demandes du Gabon au Forum politique de haut niveau : de la finance verte, et la reconnaissance de l’échelon territorial comme lieu réel de la mise en œuvre.",
              en: "\"The success of the identified accelerators rests on the strategic capture of green finance. In parallel, localising the VNR ensures territorial ownership of the 2030 Agenda, translating national orientations into concrete benefits for every citizen.\"\n\nThat closing sentence of the report's key messages contains Gabon's two asks of the High-Level Political Forum: green finance, and recognition of the territorial level as the place where implementation actually happens."
            },
            source: "ENV 2026 · Messages clés (rapport intégral)" }
        ] },

      /* ═══════════ 3. LA FRACTURE TERRITORIALE ═══════════ */
      { id: "divide",
        label: { fr: "Écarts territoriaux", en: "Urban–Rural Gaps" },
        intro: {
          fr: "Le rapport met en avant les écarts entre les moyennes nationales et les niveaux ruraux et urbains. La pauvreté rurale au seuil national (80,1 %, annexe 2, indicateur 1.2.1) en est une illustration.",
          en: "The report highlights differences between national averages and rural and urban levels. Rural poverty at the national line (80.1%, Annex 2, indicator 1.2.1) illustrates the pattern."
        },
        blocks: [

          { type: "prose",
            title: { fr: "Huit ruraux sur dix vivent sous le seuil de pauvreté",
                     en: "Eight rural people in ten live below the poverty line" },
            text: {
              fr: "Le taux de pauvreté au seuil national atteint 80,1 % en milieu rural, contre 39,6 % en milieu urbain. Ce chiffre figure dans l’annexe 2 du rapport, sous l’indicateur 1.2.1, source INSTAT (EGEP II).\n\nLe même écart rural-urbain se retrouve sur d’autres indicateurs. L’électricité : 98,2 % en ville, 26,3 % à la campagne — soixante-douze points de pourcentage d'écart. L’eau potable : 83 % contre 57 %. L’accès routier rural : 26,5 % de la population rurale à moins de deux kilomètres d’une route praticable toute l’année. Les accouchements assistés : 96,3 % en ville, 76,0 % en zone rurale. Le paludisme frappe à 515 cas pour 1 000 habitants en milieu rural, contre 290 en ville. La mortalité des moins de cinq ans est de 35,4 ‰ en ville et de 54,2 ‰ à la campagne. La défécation à l’air libre est de 1 % en ville et de 8 % en zone rurale — figée depuis 2020.\n\nLe pays étant urbanisé à plus de 90 %, le taux national d’électrification de 92,5 % reflète surtout les villes. La lecture séparée des niveaux ruraux et urbains, telle que le rapport la présente, fait apparaître les écarts.",
              en: "The poverty rate at the national line reaches 80.1% in rural areas, against 39.6% in urban areas. The figure is in Annex 2, under indicator 1.2.1, sourced to INSTAT (EGEP II).\n\nThe same rural–urban pattern runs across other indicators. Electricity: 98.2% in the cities, 26.3% in the countryside — seventy-two percentage points apart. Drinking water: 83% against 57%. Rural road access: 26.5% of rural people live within two kilometres of an all-season road. Skilled birth attendance: 96.3% urban, 76.0% rural. Malaria strikes at 515 cases per 1,000 people in rural areas, against 290 in the cities. Under-five mortality is 35.4 per 1,000 in the cities and 54.2 in the countryside. Open defecation is 1% urban and 8% rural — unchanged since 2020.\n\nBecause the country is more than 90% urban, the 92.5% national electrification rate mainly reflects the cities. Reading rural and urban levels separately, as the report does, shows where the gaps lie."
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
              fr: "Quatre paires, une même ligne de partage. La pauvreté rurale (80,1 %, seuil national, 2023) est le seul indicateur où la valeur rurale dépasse la valeur urbaine ; pour les autres, les valeurs urbaines sont plus élevées. Les valeurs de pauvreté datent de 2023 (EGEP II) ; les autres, de 2024.",
              en: "Four pairs, one dividing line. Rural poverty (80.1%, national line, 2023) is the only indicator here on which the rural value exceeds the urban value; for the others, urban values are higher. Poverty figures are for 2023 (EGEP II); the others for 2024."
            },
            source: "ENV 2026 · annexe 2 — ODD 1.2.1 et 3.1.2 (INSTAT · EDSG) · annexe 1 — ODD 6.1.1 et 7.1.1"
          } },

          { type: "chart", chart: {
            type: "gap", sdg: 3, unit: "",
            title: { fr: "Incidence du paludisme, pour 1 000 habitants, 2024",
                     en: "Malaria incidence, per 1,000 people, 2024" },
            unit: "",
            items: [
              { label: { fr: "Milieu urbain", en: "Urban" }, value: 290, emphasis: false },
              { label: { fr: "Ensemble du pays", en: "National" }, value: 335, emphasis: false },
              { label: { fr: "Milieu rural", en: "Rural" }, value: 515, emphasis: true }
            ],
            insight: {
              fr: "L’incidence du paludisme recule — de 358 à 335 pour 1 000 habitants entre 2020 et 2024 — mais reste 1,8 fois plus élevée en zone rurale qu’en ville. Le même écart rural-urbain apparaît pour la mortalité des moins de cinq ans (54,2 ‰ en milieu rural contre 35,4 ‰ en ville) et pour la natalité des adolescentes (145 ‰ contre 76,2 ‰).",
              en: "Malaria incidence is falling — from 358 to 335 per 1,000 between 2020 and 2024 — but remains 1.8 times higher in rural areas than in the cities. The same rural–urban gap appears in under-five mortality (54.2 per 1,000 rural against 35.4 urban) and adolescent births (145 per 1,000 against 76.2)."
            },
            source: "ENV 2026 · annexe 2 — ODD 3.3.3, 3.2.1, 3.7.2 (OMS · EDSG)"
          } },

          { type: "stats", items: [
            { sdg: 6, label: { fr: "Ménages sans eau courante au domicile", en: "Households with no piped water at home" },
              value: 71, unit: "%",
              note: { fr: "seuls 29 % sont raccordés au réseau formel ; 52 % d’entre eux jugent l’eau « mauvaise » ou « très mauvaise »",
                      en: "only 29% are connected to the formal network; 52% of those rate the water \"poor\" or \"very poor\"" },
              source: "ENV 2026 · ENP GABON-2050" },
            { sdg: 7, label: { fr: "Fourniture d’électricité jugée de mauvaise qualité", en: "Electricity supply rated poor" },
              value: 57.3, unit: "%",
              note: { fr: "des personnes raccordées, en raison des coupures récurrentes",
                      en: "of connected households, because of recurrent outages" },
              source: "ENV 2026 · ENP 2024" },
            { sdg: 7, label: { fr: "Ruraux cuisinant au bois de coupe familiale", en: "Rural people cooking with self-cut firewood" },
              value: 55.2, unit: "%",
              note: { fr: "moins de 40 % des ménages ruraux utilisent le gaz butane, contre environ 97 % en ville",
                      en: "fewer than 40% of rural households use LPG, against about 97% in the cities" },
              source: "ENV 2026 · ENP 2024" },
            { sdg: 9, label: { fr: "Usagers insatisfaits du transport local", en: "Users dissatisfied with local transport" },
              value: 74, unit: "%",
              note: { fr: "tarifs jugés « chers » par 46 % et « très chers » par 29 %",
                      en: "fares rated \"expensive\" by 46% and \"very expensive\" by 29%" },
              source: "ENV 2026 · ENP GABON-2050" },
            { sdg: 11, label: { fr: "Logement décent jugé hors de portée", en: "Decent housing judged out of reach" },
              value: 90, unit: "%",
              note: { fr: "des Gabonais ; 42,7 % attendent d’abord la viabilisation des terrains",
                      en: "of Gabonese; 42.7% ask first for serviced land" },
              source: "ENV 2026 · ENP GABON-2050" },
            { sdg: 13, label: { fr: "Population vivant en zone inondable", en: "Population living in flood-prone areas" },
              value: 30.8, unit: "%",
              note: { fr: "76,2 % se déclarent exposés aux risques liés aux grandes pluies",
                      en: "76.2% report exposure to heavy-rainfall hazards" },
              source: "ENV 2026 · ENP GABON-2050" }
          ] },

          { type: "prose",
            title: { fr: "Les services locaux sur le terrain",
                     en: "Local services on the ground" },
            text: {
              fr: "Le rapport documente les conditions jusqu’au niveau des localités. À Fougamou, sur 25 bornes-fontaines installées en 1997, une seule reste opérationnelle. À Léconi et Bakoumba, les réseaux hérités des exploitations minières fonctionnent depuis plus de trente ans sans relève ; le départ de la Comilog a laissé Bakoumba avec des infrastructures vieillissantes et une dotation communale annuelle de 43 millions de FCFA. À Bitam, quatre cantons sur sept sont sans électricité ; à Gamba, le taux de fonctionnalité de l’éclairage public avoisine 10 % ; à Lékoni-Lékori, 90 % du parc de lampadaires est obsolète.\n\nC’est pourquoi l’accélérateur que le Gabon retient n’est pas d’abord la construction, mais la gouvernance : « professionnaliser la maintenance locale » et sécuriser « une gouvernance locale pérenne des infrastructures ». Construire ne suffit pas si la commune ne peut ni exploiter ni entretenir. La décentralisation est d’ailleurs le premier des « trois leviers de rupture » exposés en partie III du rapport.",
              en: "The report documents conditions down to the level of individual towns. In Fougamou, of 25 standpipes installed in 1997, exactly one still works. In Léconi and Bakoumba, networks inherited from the mining companies have run for more than thirty years with no replacement; Comilog's departure left Bakoumba with ageing infrastructure and an annual municipal allocation of 43 million CFA francs. In Bitam, four of seven cantons are without electricity; in Gamba, street lighting functions at around 10%; in Lékoni-Lékori, 90% of the lamp stock is obsolete.\n\nThis is why the accelerator Gabon names is not construction first, but governance: \"professionalise local maintenance\" and secure \"durable local governance of the infrastructure\". Building is not enough if the commune can neither operate nor maintain. Decentralisation is, accordingly, the first of the \"three levers of rupture\" set out in Part III of the report."
            },
            source: "ENV 2026 · consultations des collectivités locales · partie III" }
        ] },

      /* ═══════════ 4. VISION GABON-2050 & PNCD ═══════════ */
      { id: "vision",
        label: { fr: "Vision GABON-2050 & PNCD", en: "GABON-2050 Vision & PNCD" },
        intro: {
          fr: "Le plan s’appelle PNCD — Plan National de Croissance et de Développement. Le rapport écrit PNCD dans sa liste des sigles et tout au long du texte.",
          en: "The plan is the PNCD — Plan National de Croissance et de Développement (National Growth and Development Plan). The report writes PNCD in its list of acronyms and throughout the body of the text."
        },
        blocks: [

          { type: "prose",
            title: { fr: "De la stabilisation à l’accélération opérationnelle",
                     en: "From stabilisation to operational acceleration" },
            text: {
              fr: "« Quatre ans après l’ENV 2022, axé sur la stabilisation, l’ENV 2026 marque la transition vers l’accélération opérationnelle. » C’est en ces termes que le rapport situe le cycle.\n\nL’architecture est simple. La Vision GABON-2050 fixe l’horizon : une économie diversifiée au-delà du pétrole, la résorption des fractures territoriales, et la conversion du capital naturel en prospérité partagée. Le PNCD en est « la première phase opérationnelle » : c’est le plan de mise en œuvre auquel l’ENV 2026 s’arrime explicitement. Autour d’eux gravitent les instruments programmatiques sectoriels — PNDT, PAT 2021-2023, Plan Directeur de l’Électricité, PAN-GIRE, SDAGE et Code de l’Eau, PASBAP, Plan National Climat, SNDS et PDSG.\n\nLe rapport opère ensuite une sélection : cinq « ODD moteurs » — 6, 7, 9, 11 et 17 — qualifiés d’« ossature physique, logistique et financière du développement national » et de « piliers de notre transformation pour briser les clivages spatiaux et sociaux ». Les douze autres ODD, y compris l’ODD 8, sont traités comme transversaux : ils forment « la matrice structurelle, humaine et environnementale » du pays. Le rapport compte cinq ODD moteurs, l’ODD 8 relevant des ODD transversaux.",
              en: "\"Four years after the 2022 review, which focused on stabilisation, the 2026 VNR marks the transition to operational acceleration.\" That is how the report situates the cycle.\n\nThe architecture is straightforward. The GABON-2050 Vision sets the horizon: an economy diversified beyond oil, the closing of territorial divides, and the conversion of natural capital into shared prosperity. The PNCD is \"its first operational phase\": the implementation plan to which the 2026 VNR explicitly anchors itself. Around them sit the sectoral programming instruments — PNDT, PAT 2021-2023, the Electricity Master Plan, PAN-GIRE, SDAGE and the Water Code, PASBAP, the National Climate Plan, the SNDS and the PDSG.\n\nThe report then makes a selection: five \"driver goals\" — SDG 6, 7, 9, 11 and 17 — described as \"the physical, logistical and financial backbone of national development\" and as \"the pillars of our transformation, to break spatial and social cleavages\". The other twelve SDGs, SDG 8 included, are treated as cross-cutting: they form the country's \"structural, human and environmental matrix\". The report counts five driver goals, with SDG 8 among the cross-cutting goals."
            },
            source: "ENV 2026 · Mot de la Ministre · parties I à III" },

          { type: "cards", items: [

            { name: { fr: "Vision GABON-2050", en: "GABON-2050 Vision" },
              kicker: { fr: "l’horizon national", en: "the national horizon" },
              text: {
                fr: "Cadre de prospective à long terme de la République gabonaise, décrit par le rapport comme la « vision collective pour un Gabon prospère et durable à l’horizon 2050 ». Trois ambitions : une économie diversifiée après le pétrole, la résorption des fractures territoriales, et la conversion du capital naturel — 88 % de couverture forestière, un statut de puits de carbone net — en prospérité partagée. Les ENV 2022 et 2026 en sont deux jalons.",
                en: "The Republic's long-term foresight framework, described by the report as the \"collective vision for a prosperous, sustainable Gabon by 2050\". Three ambitions: an economy diversified beyond oil, the closing of territorial divides, and the conversion of natural capital — 88% forest cover, certified net-carbon-sink status — into shared prosperity. The 2022 and 2026 reviews are two milestones within it."
              },
              source: "ENV 2026 · Mot de la Ministre" },

            { name: { fr: "PNCD — Plan National de Croissance et de Développement", en: "PNCD — National Growth and Development Plan" },
              kicker: { fr: "la première phase opérationnelle", en: "the first operational phase" },
              text: {
                fr: "Le PNCD est « la première phase opérationnelle » de la Vision GABON-2050 : le plan de mise en œuvre auquel l’ENV 2026 s’arrime pour identifier les leviers d’une croissance inclusive et résiliente. Le rapport écrit PNCD (Croissance et Développement) dans sa liste des sigles et tout au long du texte.",
                en: "The PNCD is \"the first operational phase\" of the GABON-2050 Vision: the implementation plan to which the 2026 VNR anchors itself in identifying the levers of inclusive, resilient growth. The report writes PNCD (Croissance et Développement) in its list of acronyms and throughout."
              },
              source: "ENV 2026 · liste des sigles" },

            { name: { fr: "Le pilotage : Planification et Prospective", en: "Steering: Planning and Foresight" },
              kicker: { fr: "sous l’autorité de la Présidence", en: "under the authority of the Presidency" },
              text: {
                fr: "L’ENV 2026 est placé sous l’autorité du Président de la République, Brice Clotaire Oligui Nguema, qui en signe la préface. Il est porté par le Ministère de la Planification et de la Prospective, dont la Direction Générale de la Prospective est la cheville ouvrière. Le rapport consacre, selon ses propres termes, « une coordination stratégique et une gouvernance renforcée », issues d’un dialogue participatif entre l’État, le secteur privé et la société civile.",
                en: "The 2026 VNR sits under the authority of the President of the Republic, Brice Clotaire Oligui Nguema, who signs its preface. It is led by the Ministry of Planning and Foresight, with the Directorate-General for Foresight as its working arm. In the report's own words, it establishes \"strategic coordination and strengthened governance\", born of a participatory dialogue between the State, the private sector and civil society."
              },
              source: "ENV 2026 · préface présidentielle · Mot de la Ministre" },

            { name: { fr: "Les cinq ODD moteurs", en: "The five driver goals" },
              kicker: { fr: "ODD 6, 7, 9, 11 et 17", en: "SDG 6, 7, 9, 11 and 17" },
              stats: [{ label: { fr: "ODD moteurs", en: "driver goals" }, value: 5, unit: "" },
                      { label: { fr: "ODD transversaux", en: "cross-cutting goals" }, value: 12, unit: "" }],
              text: {
                fr: "Le rapport se structure en trois axes : partie I, l’état des lieux des ODD transversaux (acquis institutionnels, contraintes de l’économie réelle, leviers) ; partie II, la dynamique des cinq ODD moteurs, chacun exposé en quatre temps — progrès depuis l’ENV 2022, défis, opportunités, recommandations ; partie III, la trajectoire stratégique 2030. L’ODD 8 relève de la partie I : c’est un ODD d’appui, non un moteur.",
                en: "The report is built on three axes: Part I, a stocktake of the cross-cutting SDGs (institutional gains, real-economy constraints, levers); Part II, the dynamics of the five driver goals, each set out in four movements — progress since the 2022 review, challenges, opportunities, recommendations; Part III, the strategic trajectory to 2030. SDG 8 belongs to Part I: it is a supporting goal, not a driver."
              },
              source: "ENV 2026 · architecture du rapport" },

            { name: { fr: "Le processus : quatre piliers de consultation", en: "The process: four pillars of consultation" },
              kicker: { fr: "une approche ascendante", en: "a bottom-up approach" },
              text: {
                fr: "Premièrement, l’écoute de la Nation : l’Enquête Nationale Prospective (ENP) GABON-2050 fournit la quasi-totalité des données de perception du rapport et sert de « boussole pour aligner les priorités des ODD sur les attentes réelles des citoyens ». Deuxièmement, la voix des collectivités locales, recueillie par guide d’entretien sur tout le territoire — Fougamou, Bakoumba, Léconi, Iboundji, Mayumba, Minvoul, Bitam, Gamba, Mékambo, Franceville. Troisièmement, le partenariat avec la Fédération des Entreprises du Gabon. Quatrièmement, l’engagement de la société civile.",
                en: "First, listening to the nation: the National Foresight Survey (ENP) GABON-2050 supplies almost all of the report's perception data and serves as a \"compass for aligning SDG priorities with what citizens actually expect\". Second, the voice of local authorities, gathered through a dedicated interview guide across the territory — Fougamou, Bakoumba, Léconi, Iboundji, Mayumba, Minvoul, Bitam, Gamba, Mékambo, Franceville. Third, partnership with the Federation of Gabonese Enterprises. Fourth, the engagement of civil society."
              },
              source: "ENV 2026 · méthodologie participative" },

            { name: { fr: "Les trois leviers de rupture (partie III)", en: "The three levers of rupture (Part III)" },
              kicker: { fr: "trois leviers pour 2030", en: "three levers to 2030" },
              text: {
                fr: "La trajectoire stratégique 2030 repose sur trois leviers. La décentralisation, d’abord, comme moteur de l’équité territoriale — c’est la réponse directe aux écarts rural-urbain que le rapport décrit. La diversification inclusive et le dividende démographique, ensuite, pour transformer la croissance en emplois. La diplomatie financière et climatique souveraine, enfin : « basculer d’une diplomatie de plaidoyer vers une ingénierie financière offensive » et faire valoir le statut de « créancier écologique global » du Gabon.",
                en: "The strategic trajectory to 2030 rests on three levers. Decentralisation first, as the engine of territorial equity — the direct answer to the rural–urban gaps the report describes. Inclusive diversification and the demographic dividend next, to turn growth into jobs. And sovereign financial and climate diplomacy: \"shifting from a diplomacy of advocacy to offensive financial engineering\" and asserting Gabon's standing as a \"global ecological creditor\"."
              },
              source: "ENV 2026 · partie III — trajectoire stratégique 2030" }
          ] }
        ] },

      /* ═══════════ 5. RÉPONSES POLITIQUES ═══════════ */
      { id: "responses",
        label: { fr: "Réponses politiques", en: "Policy Responses" },
        intro: {
          fr: "Les projets hydroélectriques du cycle sont Kinguélé Aval, Ngoulmendjim et Dibwangui.",
          en: "The hydropower projects of this cycle are Kinguélé Aval, Ngoulmendjim and Dibwangui."
        },
        blocks: [

          { type: "chart", chart: {
            type: "bars", sdg: 7, unit: " MW",
            title: { fr: "Le portefeuille hydroélectrique de l’ENV 2026",
                     en: "The hydropower pipeline of the 2026 VNR" },
            items: [
              { label: { fr: "Ngoulmendjim", en: "Ngoulmendjim" }, value: 73, emphasis: false },
              { label: { fr: "Kinguélé Aval (PPP)", en: "Kinguélé Aval (PPP)" }, value: 35, emphasis: true },
              { label: { fr: "Dibwangui", en: "Dibwangui" }, value: 15, emphasis: false }
            ],
            insight: {
              fr: "Cent vingt-trois mégawatts au total. Kinguélé Aval, mené en partenariat public-privé, est le plus avancé. Ces trois aménagements, complétés par le programme d’hybridation solaire (Ndjolé, Ovan, Booué, Bitam), constituent l’accélérateur que le rapport retient pour l’ODD 7 : sécuriser « une énergie verte et fiable pour tous ». Ils ne suffiront pas à eux seuls à combler l'écart de 72 points de pourcentage entre la ville et le village, mais ils sont ce que le pays a mis sur la table.",
              en: "One hundred and twenty-three megawatts in all. Kinguélé Aval, delivered as a public-private partnership, is the furthest advanced. Together with the solar hybridisation programme (Ndjolé, Ovan, Booué, Bitam), these three schemes constitute the accelerator the report names for SDG 7: securing \"green, reliable energy for all\". They will not on their own close the 72-percentage-point gap between city and village, but they are what the country has put on the table."
            },
            source: "ENV 2026 · corps du rapport, ODD 7 (Plan Directeur de l’Électricité)"
          } },

          { type: "cards", items: [

            { name: { fr: "Kinguélé Aval", en: "Kinguélé Aval" },
              kicker: { fr: "35 MW · en PPP", en: "35 MW · PPP" },
              stats: [{ label: { fr: "puissance", en: "capacity" }, value: 35, unit: " MW" }],
              text: {
                fr: "Aménagement hydroélectrique conduit en partenariat public-privé, en aval du complexe existant de Kinguélé. Il s’inscrit dans l’accélérateur ODD 7 du rapport : porter une électricité renouvelable, fiable et abordable, dans un pays dont le mix est déjà renouvelable à 91,2 % mais dont 26,3 % seulement des ruraux sont raccordés.",
                en: "A hydropower scheme delivered as a public-private partnership, downstream of the existing Kinguélé complex. It sits within the report's SDG 7 accelerator: delivering renewable, reliable, affordable electricity in a country whose mix is already 91.2% renewable but where only 26.3% of rural people are connected."
              },
              source: "ENV 2026 · ODD 7" },

            { name: { fr: "Ngoulmendjim", en: "Ngoulmendjim" },
              kicker: { fr: "73 MW · programmé", en: "73 MW · planned" },
              stats: [{ label: { fr: "puissance", en: "capacity" }, value: 73, unit: " MW" }],
              text: {
                fr: "Le plus important des trois aménagements programmés : 73 MW, soit près de 60 % du portefeuille hydroélectrique du cycle. Sa mise en service conditionne la capacité du réseau national à absorber la demande industrielle des Zones d’Investissement Spéciales tout en étendant le service aux territoires.",
                en: "The largest of the three planned schemes: 73 MW, close to 60% of the cycle's hydropower pipeline. Its commissioning conditions the national grid's ability to absorb industrial demand from the Special Investment Zones while extending service to the territories."
              },
              source: "ENV 2026 · ODD 7" },

            { name: { fr: "Dibwangui", en: "Dibwangui" },
              kicker: { fr: "15 MW · programmé", en: "15 MW · planned" },
              stats: [{ label: { fr: "puissance", en: "capacity" }, value: 15, unit: " MW" }],
              text: {
                fr: "Le plus petit des trois, et le plus directement territorial. C’est le type d’ouvrage qui déplace la courbe rurale — celle qui n'a gagné que 1,6 point de pourcentage en cinq ans, de 24,7 % à 26,3 %.",
                en: "The smallest of the three, and the most directly territorial. This is the kind of scheme that moves the rural curve — the one that has gained just 1.6 percentage points in five years, from 24.7% to 26.3%."
              },
              source: "ENV 2026 · ODD 7" },

            { name: { fr: "Forages solaires et hydraulique villageoise", en: "Solar boreholes and village water supply" },
              kicker: { fr: "le nexus eau-énergie", en: "the water–energy nexus" },
              text: {
                fr: "Explicitement retenus comme accélérateur de l’ODD 6 : « étendre les forages solaires ». Pilotés par le CNEE, ils couplent panneaux solaires et pompes immergées, supprimant le coût du gazole et servant des villages hors réseau — un seul investissement qui fait progresser l’ODD 6 et l’ODD 7. Le rapport note aussi les enjeux de maintenance : à Fougamou, une seule des 25 bornes-fontaines installées en 1997 fonctionne encore. D’où l’insistance sur la maintenance et la gouvernance locales, autant que sur l’équipement.",
                en: "Explicitly named as the SDG 6 accelerator: \"extend solar boreholes\". Run by the CNEE, they pair solar panels with submersible pumps, removing diesel costs and serving off-grid villages — a single investment that advances SDG 6 and SDG 7 at once. The report also notes maintenance gaps: in Fougamou, just one of the 25 standpipes installed in 1997 still works. Hence the insistence on local maintenance and governance as much as on hardware."
              },
              source: "ENV 2026 · ODD 6 (CNEE)" },

            { name: { fr: "PIEPAL — eau et assainissement du Grand Libreville", en: "PIEPAL — water and sanitation for Greater Libreville" },
              kicker: { fr: "cofinancé par la BAD", en: "co-financed by the AfDB" },
              text: {
                fr: "Programme Intégré pour l’Alimentation en Eau Potable et l’Assainissement de Libreville : renouvellement et extension des réseaux de la capitale, avec une composante assainissement. Il vise le « déficit structurel » du Grand Libreville, que le rapport qualifie ainsi sans le chiffrer. Il est complété par le PABV, projet d’aménagement des bassins versants de la Ntzem et de Mbomo.",
                en: "The Integrated Programme for Drinking Water Supply and Sanitation in Libreville: renewal and extension of the capital's networks, with a sanitation component. It targets Greater Libreville’s \"structural deficit\", which the report describes without quantifying. It is complemented by PABV, the watershed development project for the Ntzem and Mbomo basins."
              },
              source: "ENV 2026 · ODD 6 (BAD)" },

            { name: { fr: "ZERP de Nkok et les Zones d’Investissement Spéciales", en: "Nkok SEZ and the Special Investment Zones" },
              kicker: { fr: "VA manufacturière 6,8 % du PIB", en: "manufacturing VA 6.8% of GDP" },
              stats: [{ label: { fr: "intensité carbone de l’industrie", en: "manufacturing carbon intensity" }, value: 0.14, unit: " kg CO₂/$" }],
              text: {
                fr: "Zone à Régime Privilégié de Nkok : succès pilote de la transformation locale du bois, alimentée en hydroélectricité du réseau national — d’où son statut « carbone neutre » et une intensité carbone de l’industrie manufacturière de 0,14 kg de CO₂ par dollar. Le modèle est désormais dupliqué : ZES d’Ikolo (Moyen-Ogooué), ZES de Mpassa-Lebombi (Haut-Ogooué). C’est le dispositif qui a porté la valeur ajoutée manufacturière de 5,5 % à 6,8 % du PIB — sans encore déplacer l’emploi manufacturier, resté à 4,5 %.",
                en: "The Nkok Special Economic Zone: the pilot success of domestic timber processing, powered by hydroelectricity from the national grid — hence its \"carbon neutral\" status and a manufacturing carbon intensity of 0.14 kg CO₂ per dollar. The model is now being replicated: the Ikolo SEZ (Moyen-Ogooué) and the Mpassa-Lebombi SEZ (Haut-Ogooué). This is the instrument that lifted manufacturing value added from 5.5% to 6.8% of GDP — without yet moving manufacturing employment, still at 4.5%."
              },
              source: "ENV 2026 · ODD 9" },

            { name: { fr: "Transgabonais — Plan de Remise à Niveau", en: "Transgabonais — the upgrade programme" },
              kicker: { fr: "fret 8,9 → 11,2 Mt", en: "freight 8.9 → 11.2 Mt" },
              stats: [{ label: { fr: "fret 2024", en: "freight 2024" }, value: 11.2, unit: " Mt" }],
              text: {
                fr: "Remise à niveau du chemin de fer, en PPP entre l’État et la SETRAG : évacuation du manganèse et du bois vers le port en eau profonde d’Owendo. Le fret est passé de 8,9 millions de tonnes en 2020 à 11,2 en 2024 (11,8 projetés en 2025). C’est la moitié réussie du désenclavement ; l’autre moitié — la route rurale, à 26,5 % — reste à faire.",
                en: "The rail upgrade programme, a State–SETRAG PPP: moving manganese and timber to the deep-water port of Owendo. Freight rose from 8.9 million tonnes in 2020 to 11.2 in 2024 (11.8 projected for 2025). This is the successful half of opening up the country; the other half — the rural road network, at 26.5% — remains to be done."
              },
              source: "ENV 2026 · ODD 9 (SETRAG)" },

            { name: { fr: "SGG et Okoumé Capital — dérisquer le crédit aux PME", en: "SGG and Okoumé Capital — de-risking SME credit" },
              kicker: { fr: "PME avec prêt : 13 % → 16 %", en: "SMEs with a loan: 13% → 16%" },
              stats: [{ label: { fr: "PME ayant obtenu un prêt (2024)", en: "SMEs with a loan (2024)" }, value: 16, unit: "%" }],
              text: {
                fr: "La Société de Garantie du Gabon dérisque le crédit bancaire aux PME et PMI ; Okoumé Capital prend des participations en amorçage. La part des PME ayant contracté un prêt est passée de 13 % en 2022 à 16 % en 2024. L’obstacle demeure : la Fédération des Entreprises du Gabon documente des exigences de nantissement bancaire de 30 % à 120 % de la valeur du prêt.",
                en: "The Gabonese Guarantee Company de-risks bank lending to SMEs; Okoumé Capital takes early-stage equity stakes. The share of SMEs holding a loan rose from 13% in 2022 to 16% in 2024. The obstacle remains: the Federation of Gabonese Enterprises documents collateral requirements of 30% to 120% of the loan's value."
              },
              source: "ENV 2026 · ODD 9 (SGG · FEG)" },

            { name: { fr: "Réforme de la gouvernance locale", en: "Local governance reform" },
              kicker: { fr: "l’infrastructure qui dure", en: "infrastructure that lasts" },
              text: {
                fr: "Le premier des trois leviers de rupture : la décentralisation comme moteur de l’équité territoriale. Construire ne suffit pas si la commune ne peut ni exploiter ni entretenir — Bakoumba, avec une dotation annuelle de 43 millions de FCFA, en est l’illustration. Le rapport en fait la condition de tout le reste : « une gouvernance locale pérenne des infrastructures », et une « localisation de l’ENV » qui assure « une appropriation territoriale de l’Agenda 2030 ».",
                en: "The first of the three levers of rupture: decentralisation as the engine of territorial equity. Building is not enough if the commune can neither operate nor maintain — Bakoumba, with an annual allocation of 43 million CFA francs, is the illustration. The report makes it the condition of everything else: \"durable local governance of the infrastructure\", and a \"localisation of the VNR\" that secures \"territorial ownership of the 2030 Agenda\"."
              },
              source: "ENV 2026 · ODD 6, ODD 11 · partie III" }
          ] }
        ] },

      /* ═══════════ 6. FINANCEMENT ═══════════ */
      { id: "financing",
        label: { fr: "Financement", en: "Financing" },
        intro: {
          fr: "Deux dynamiques simultanées. Les recettes publiques passent de 17,6 % à 23,7 % du PIB et l’impôt intérieur finance désormais 53,7 % du budget. Dans le même temps, le service de la dette absorbe 17 % du budget, l’aide se maintient à 0,4 % du RNB et les IDE ont été divisés par deux. C’est de cette tension que naît la demande gabonaise de finance verte.",
          en: "Two trends at once. Government revenue rose from 17.6% to 23.7% of GDP, and domestic taxes now finance 53.7% of the budget. At the same time, debt service absorbs 17% of the budget, aid holds at 0.4% of GNI, and FDI has halved. It is out of that tension that Gabon’s demand for green finance arises."
        },
        blocks: [

          { type: "stats", items: [
            { sdg: 17, label: { fr: "Recettes publiques / PIB", en: "Government revenue / GDP" }, value: 23.7, unit: "%",
              note: { fr: "2024 · contre 17,6 % en 2020",
                      en: "2024 · up from 17.6% in 2020" },
              source: "ENV 2026 · ODD 17.1.1" },
            { sdg: 17, label: { fr: "Budget financé par l’impôt intérieur", en: "Budget financed by domestic taxes" }, value: 53.7, unit: "%",
              note: { fr: "2024 · contre 43,5 % en 2020", en: "2024 · up from 43.5% in 2020" },
              source: "ENV 2026 · ODD 17.1.2" },
            { sdg: 17, label: { fr: "Service de la dette / budget national", en: "Debt service / national budget" }, value: 17, unit: "%",
              note: { fr: "2024 · un franc sur six sort du budget avant toute dépense",
                      en: "2024 · one franc in six leaves the budget before any spending" },
              source: "ENV 2026 · corps du rapport, ODD 17" },
            { sdg: 17, label: { fr: "Service de la dette / exportations", en: "Debt service / exports" }, value: 14.5, unit: "%",
              note: { fr: "2024 · 9,5 % en 2022 · 17,0 % projetés en 2025",
                      en: "2024 · 9.5% in 2022 · 17.0% projected for 2025" },
              source: "ENV 2026 · ODD 17.4.1" },
            { sdg: 17, label: { fr: "APD nette / RNB", en: "Net ODA / GNI" }, value: 0.4, unit: "%",
              note: { fr: "2024 · stable depuis 2022",
                      en: "2024 · unchanged since 2022" },
              source: "ENV 2026 · ODD 17.3.1" },
            { sdg: 17, label: { fr: "IDE nets / PIB", en: "Net FDI / GDP" }, value: 5.5, unit: "%",
              note: { fr: "2024 · contre 11,2 % en 2020",
                      en: "2024 · down from 11.2% in 2020" },
              source: "ENV 2026 · ODD 17.3.1" }
          ] },

          { type: "chart", chart: {
            type: "line", sdg: 17, unit: "%",
            title: { fr: "La reconquête budgétaire : recettes et impôt intérieur, 2020-2024",
                     en: "The fiscal recovery: revenue and domestic taxation, 2020–2024" },
            series: [
              { key: "tax", label: { fr: "Part du budget financée par l’impôt intérieur", en: "Share of the budget financed by domestic taxes" },
                points: [{ x: "2020", y: 43.5 }, { x: "2021", y: 46.2 }, { x: "2022", y: 49.8 }, { x: "2023", y: 51.4 }, { x: "2024", y: 53.7 }] },
              { key: "rev", label: { fr: "Recettes publiques totales / PIB", en: "Total government revenue / GDP" },
                points: [{ x: "2020", y: 17.6 }, { x: "2021", y: 15.3 }, { x: "2022", y: 21.1 }, { x: "2023", y: 24.6 }, { x: "2024", y: 23.7 }] }
            ],
            insight: {
              fr: "Après le creux de 2021 (15,3 % du PIB), les recettes publiques ont atteint 24,6 % en 2023 puis se sont stabilisées à 23,7 %. Dans le même temps, la part du budget financée par l'impôt intérieur a gagné plus de dix points de pourcentage, portée par la dématérialisation des régies — e-t@x à la DGI, Sydonia World aux Douanes. C’est le fondement du plaidoyer gabonais pour « l’investissement stratégique » plutôt que « l’assistance traditionnelle ».",
              en: "After the 2021 trough (15.3% of GDP), government revenue rose to 24.6% in 2023 and settled at 23.7%. Over the same period, the share of the budget financed by domestic taxes gained more than ten percentage points, driven by the digitalisation of revenue administration — e-t@x at the tax directorate, Sydonia World at customs. This is the foundation of Gabon’s case for \"strategic investment\" rather than \"traditional assistance\"."
            },
            source: "ENV 2026 · annexe 1 — ODD 17.1.1 et 17.1.2 (DGEPF/TOFE · DGI · DGDDI · FMI)"
          } },

          { type: "cards", items: [

            { name: { fr: "Obligations vertes souveraines et obligations bleues", en: "Sovereign green bonds and blue bonds" },
              kicker: { fr: "la demande centrale au HLPF", en: "the central ask at the HLPF" },
              text: {
                fr: "Le levier de financement principal du rapport. Le Gabon entend « basculer d’une diplomatie de plaidoyer vers une ingénierie financière offensive » en convertissant son leadership environnemental « en liquidités réelles ». Objectif macroéconomique explicite : dégager « un espace budgétaire non inflationniste… sans dégrader la viabilité de la dette publique ». Les obligations bleues adossent le même raisonnement aux 26 % de territoire maritime protégé.",
                en: "The report's principal financing lever. Gabon intends to \"shift from a diplomacy of advocacy to offensive financial engineering\", converting its environmental leadership \"into real liquidity\". The stated macroeconomic objective: to open up \"non-inflationary fiscal space… without degrading public-debt sustainability\". Blue bonds apply the same reasoning to the 26% of marine territory under protection."
              },
              source: "ENV 2026 · ODD 17 · partie III" },

            { name: { fr: "Crédits carbone souverains certifiés", en: "Certified sovereign carbon credits" },
              kicker: { fr: "88 % de couverture forestière", en: "88% forest cover" },
              stats: [{ label: { fr: "couverture forestière", en: "forest cover" }, value: 88, unit: "%" }],
              text: {
                fr: "Le Gabon dispose d’un statut de puits de carbone net certifié, avec 88 % du territoire couvert de forêt et des émissions nettes de gaz à effet de serre négatives sur toute la série 2020-2026. Le rapport en tire une revendication : le pays doit « faire valoir son statut de créancier écologique global ». Les crédits carbone souverains sont l’instrument par lequel ce crédit écologique devient une recette budgétaire.",
                en: "Gabon holds certified net-carbon-sink status, with 88% of the territory under forest and net greenhouse-gas emissions negative across the whole 2020–2026 series. The report draws a claim from it: the country must \"assert its standing as a global ecological creditor\". Sovereign carbon credits are the instrument by which that ecological credit becomes budget revenue."
              },
              source: "ENV 2026 · ODD 13 et 15 · partie III" },

            { name: { fr: "Conversion de dette contre nature", en: "Debt-for-nature swaps" },
              kicker: { fr: "la dette : 17 % du budget", en: "debt: 17% of the budget" },
              text: {
                fr: "Demande explicite du Gabon à ses partenaires, aux côtés de l’amplification des PPP, du transfert de technologies, du contenu local et du renforcement des capacités statistiques. La logique est arithmétique : si le service de la dette absorbe 17 % du budget national et 14,5 % des exportations — 17,0 % projetés en 2025 — chaque point de dette converti en dépense de conservation est un point d’espace budgétaire reconquis.",
                en: "An explicit ask of Gabon's partners, alongside scaled-up PPPs, technology transfer, local content and statistical capacity-building. The logic is arithmetic: if debt service absorbs 17% of the national budget and 14.5% of exports — 17.0% projected for 2025 — then every point of debt converted into conservation spending is a point of fiscal space regained."
              },
              source: "ENV 2026 · positionnement vis-à-vis des partenaires" },

            { name: { fr: "Élargissement de l’assiette hors pétrole", en: "Broadening the non-oil tax base" },
              kicker: { fr: "e-t@x et Sydonia World", en: "e-t@x and Sydonia World" },
              text: {
                fr: "La dématérialisation des régies financières — e-t@x à la Direction Générale des Impôts, Sydonia World aux Douanes — est le moteur documenté de la hausse des recettes : de 21,1 % à 23,7 % du PIB, et de 49,8 % à 53,7 % du budget financé par l’impôt intérieur. À noter : le rapport ne quantifie nulle part la part du pétrole dans le PIB ou dans les recettes. Il ne qualifie la dépendance que par ses effets — l’exposition « aux chocs exogènes liés à la volatilité des marchés des hydrocarbures ».",
                en: "Digitalising revenue administration — e-t@x at the tax directorate, Sydonia World at customs — is the documented engine of the revenue rise: from 21.1% to 23.7% of GDP, and from 49.8% to 53.7% of the budget financed by domestic taxes. Note: the report nowhere quantifies oil's share of GDP or of revenue. It characterises the dependence only through its effects — exposure \"to exogenous shocks linked to the volatility of hydrocarbon markets\"."
              },
              source: "ENV 2026 · ODD 17 (DGI · DGDDI)" },

            { name: { fr: "Discipline budgétaire et recouvrement d’avoirs", en: "Fiscal discipline and asset recovery" },
              kicker: { fr: "350 milliards FCFA recouvrés", en: "350 billion CFA francs recovered" },
              stats: [{ label: { fr: "exécution budgétaire (2024)", en: "budget execution (2024)" }, value: 95, unit: "%" },
                      { label: { fr: "prêts improductifs", en: "non-performing loans" }, value: 6.8, unit: "%" }],
              text: {
                fr: "Les avoirs illicites recouvrés par l’État atteignent 350 milliards de FCFA en 2024, contre 50 milliards en 2022. L’exécution budgétaire — dépenses primaires rapportées au budget approuvé — s’élève à 95 %, et les prêts improductifs reculent de 8,5 % à 6,8 % du total. Les subventions aux combustibles fossiles descendent à 1,2 % du PIB, après un pic à 2,0 % en 2022. La conclusion d’un programme économique et financier avec le FMI est attendue d’ici fin 2026.",
                en: "Illicit assets recovered by the State reached 350 billion CFA francs in 2024, against 50 billion in 2022. Budget execution — primary spending against the approved budget — stands at 95%, and non-performing loans fell from 8.5% to 6.8% of the total. Fossil-fuel subsidies are down to 1.2% of GDP, after a 2.0% peak in 2022. An economic and financial programme with the IMF is expected to be concluded by the end of 2026."
              },
              source: "ENV 2026 · ODD 16.4.1 et 16.6.1 · ODD 10.5.1 · ODD 12.c.1" },

            { name: { fr: "Ce que le secteur privé demande", en: "What the private sector asks for" },
              kicker: { fr: "Fédération des Entreprises du Gabon", en: "Federation of Gabonese Enterprises" },
              text: {
                fr: "La FEG, associée au processus ENV comme troisième pilier de consultation, formule deux demandes précises : l’exonération de TVA et de droits de douane sur les équipements solaires, la biomasse et le stockage ; et une déduction fiscale pour les investissements verts. Elle documente aussi le principal frein au crédit : des exigences de nantissement de 30 % à 120 % de la valeur du prêt.",
                en: "The FEG, brought into the VNR process as the third pillar of consultation, makes two precise asks: VAT and customs-duty exemption on solar equipment, biomass and storage; and a tax deduction for green investment. It also documents the main brake on credit: collateral requirements of 30% to 120% of the loan's value."
              },
              source: "ENV 2026 · consultation du secteur privé (FEG)" }
          ] },

          { type: "prose",
            title: { fr: "« Un investissement stratégique, non une assistance »",
                     en: "\"Strategic investment, not assistance\"" },
            text: {
              fr: "Le message diplomatique du rapport est direct : « Face aux limites des modèles d’assistance traditionnelle, la République Gabonaise appelle à une refonte du partenariat international… la réponse des mécanismes multilatéraux n’a pas été totalement proportionnelle aux efforts consentis… il est impératif de passer d’une logique de soutien ponctuel et d’assistance traditionnelle à une dynamique d’investissement stratégique et durable. »\n\nLes chiffres donnent à cette phrase sa force. Un pays qui a porté ses recettes de 17,6 % à 23,7 % du PIB en quatre ans, qui finance 53,7 % de son budget par l’impôt intérieur, qui exécute 95 % de sa loi de finances et qui a recouvré 350 milliards de FCFA d’avoirs illicites — et qui voit néanmoins l’aide se figer à 0,4 % du RNB et les IDE tomber à 5,5 % du PIB — a un argument à faire valoir à New York.",
              en: "The report's diplomatic message is direct: \"Faced with the limits of traditional assistance models, the Gabonese Republic calls for a redesign of international partnership… the response of multilateral mechanisms has not been wholly proportionate to the efforts made… it is imperative to move from a logic of one-off support and traditional assistance to one of strategic, lasting investment.\"\n\nThe figures give the sentence its force. A country that has lifted revenue from 17.6% to 23.7% of GDP in four years, that finances 53.7% of its budget from domestic taxes, that executes 95% of its budget law and has recovered 350 billion CFA francs in illicit assets — and that nonetheless watches aid freeze at 0.4% of GNI and FDI fall to 5.5% of GDP — has an argument to make in New York."
            },
            source: "ENV 2026 · positionnement vis-à-vis des partenaires · partie III" }
        ] },

      /* ═══════════ 7. LE PARADOXE VERT ═══════════ */
      { id: "green",
        label: { fr: "Le paradoxe vert", en: "The Green Paradox" },
        intro: {
          fr: "Le Gabon est l'un des rares pays dont les émissions nettes de gaz à effet de serre sont négatives. Dans le même temps, l’accès rural à l’électricité est de 26,3 %, et le nombre de sinistrés de catastrophes augmente d’année en année. C’est sur cet écart que repose le plaidoyer international du pays.",
          en: "Gabon is one of the few countries whose net greenhouse-gas emissions are negative. At the same time, rural electricity access is 26.3%, and the number of disaster-affected people has risen year on year. The country’s international case rests on that gap."
        },
        blocks: [

          { type: "chart", chart: {
            type: "gap", sdg: 15, unit: "%",
            title: { fr: "Indicateurs environnementaux et accès rural à l’électricité (2024)", en: "Environmental indicators and rural electricity access (2024)" },
            items: [
              { label: { fr: "Renouvelables dans l’énergie finale", en: "Renewables in final energy" }, value: 91.2, emphasis: false },
              { label: { fr: "Couverture forestière", en: "Forest cover" }, value: 88.0, emphasis: false },
              { label: { fr: "Concessions forestières certifiées", en: "Certified forest concessions" }, value: 70, emphasis: false },
              { label: { fr: "Aires marines protégées", en: "Marine protected areas" }, value: 26, emphasis: false },
              { label: { fr: "Accès rural à l’électricité", en: "Rural electricity access" }, value: 26.3, emphasis: true }
            ],
            insight: {
              fr: "Cinq pourcentages, cinq dénominateurs différents — l’énergie finale, la surface émergée, les concessions forestières, le territoire maritime, la population rurale. Ils ne s’additionnent pas et ne se comparent pas terme à terme. Ensemble, ils illustrent le propos du rapport : de solides indicateurs environnementaux, aux côtés d’un accès rural à l’électricité de 26,3 %.",
              en: "Five percentages, five different denominators — final energy, land area, forest concessions, marine territory, rural population. They do not add up and cannot be compared term for term. Together they show the report’s point: strong environmental indicators alongside 26.3% rural electricity access."
            },
            source: "ENV 2026 · annexe 1 — ODD 7.1.1 et 7.2.1 · annexe 2 — ODD 14.5.1, 15.1.1 et 15.2.1"
          } },

          { type: "prose",
            title: { fr: "Créancier écologique global", en: "A global ecological creditor" },
            text: {
              fr: "La couverture forestière atteint 88 % de la surface émergée — constante sur toute la série 2020-2026, et confirmée à plusieurs reprises dans le rapport. Les émissions nettes de gaz à effet de serre sont négatives : le pays absorbe plus qu’il n’émet. 91,2 % de la consommation finale d’énergie est renouvelable. 26 % du territoire maritime et 21,1 % du territoire terrestre sont protégés. 70 % des concessions forestières sont sous aménagement certifié, avec une cible de 80 % en 2026. L’indice Liste rouge de l’UICN se maintient à 0,924.\n\nEt pourtant. 26,3 % seulement des ruraux ont l’électricité. Les sinistrés de catastrophes passent de 245 pour 100 000 habitants en 2022 à 295 en 2024. Les particules fines urbaines montent de 35,0 à 38,5 µg/m³. Le taux de recyclage national atteint 4 %. 30,8 % des Gabonais vivent en zone inondable, et seules 15 % des collectivités locales sont dotées d’une stratégie de réduction des risques de catastrophe.\n\nC’est ce double constat qui fonde la position gabonaise : le pays doit « faire valoir son statut de créancier écologique global ». Il ne demande pas qu’on le félicite pour sa forêt ; il demande que cette forêt, qui rend un service climatique au monde entier, finance l’électrification de ses propres villages. Obligations vertes souveraines, crédits carbone certifiés, conversion de dette contre nature : le mécanisme importe moins que le principe — convertir un actif écologique mondial en capacité budgétaire nationale.",
              en: "Forest cover stands at 88% of the land area — constant across the whole 2020–2026 series, and confirmed repeatedly in the report. Net greenhouse-gas emissions are negative: the country absorbs more than it emits. 91.2% of final energy consumption is renewable. 26% of the marine territory and 21.1% of the land territory are protected. 70% of forest concessions are under certified management, with an 80% target for 2026. The IUCN Red List Index holds at 0.924.\n\nAnd yet. Only 26.3% of rural people have electricity. Disaster-affected people rose from 245 per 100,000 in 2022 to 295 in 2024. Urban fine particulates climbed from 35.0 to 38.5 µg/m³. The national recycling rate reached 4%. 30.8% of Gabonese live in flood-prone areas, and just 15% of local authorities have a disaster-risk-reduction strategy.\n\nIt is this double reading that grounds Gabon's position: the country must \"assert its standing as a global ecological creditor\". It is not asking to be congratulated on its forest; it is asking that the forest — which renders a climate service to the entire world — finance the electrification of its own villages. Sovereign green bonds, certified carbon credits, debt-for-nature swaps: the mechanism matters less than the principle — converting a global ecological asset into national fiscal capacity."
            },
            source: "ENV 2026 · annexes 1 et 2 — ODD 7, 11, 12, 13, 14, 15 · partie III" },

          { type: "chart", chart: {
            type: "line", sdg: 11, unit: " µg/m³",
            title: { fr: "Particules fines PM 2,5 en milieu urbain, moyenne annuelle",
                     en: "Urban fine particulate matter (PM2.5), annual mean" },
            series: [
              { key: "pm", label: { fr: "PM 2,5 (moyenne annuelle urbaine)", en: "PM2.5 (urban annual mean)" },
                points: [{ x: "2020", y: 35.0 }, { x: "2021", y: 35.8 }, { x: "2022", y: 36.5 }, { x: "2023", y: 38.2 }, { x: "2024", y: 38.5 }] }
            ],
            insight: {
              fr: "La qualité de l’air urbain s’est dégradée sur la période : +3,5 µg/m³ en quatre ans, avec une projection à 39,2 pour 2025. 64,1 % des habitants signalent l’absence d’aménagements pour le dépôt des ordures, et le taux de recyclage national est de 4 %.",
              en: "Urban air quality declined over the period: +3.5 µg/m³ in four years, with a projection of 39.2 for 2025. 64.1% of residents report no facilities for depositing refuse, and the national recycling rate is 4%."
            },
            source: "ENV 2026 · annexe 1 — ODD 11.6.2 (OMS · Conseil National Climat · AGEOS)"
          } },

          { type: "stats", items: [
            { sdg: 14, label: { fr: "Territoire maritime protégé", en: "Marine territory protected" }, value: 26, unit: "%",
              note: { fr: "constant de 2020 à 2026", en: "constant from 2020 to 2026" },
              source: "ENV 2026 · ODD 14.5.1" },
            { sdg: 15, label: { fr: "Concessions forestières certifiées", en: "Certified forest concessions" }, value: 70, unit: "%",
              note: { fr: "2024 · 60 % en 2020 · cible de 80 % en 2026", en: "2024 · 60% in 2020 · 80% target for 2026" },
              source: "ENV 2026 · ODD 15.2.1" },
            { sdg: 15, label: { fr: "Aires terrestres protégées", en: "Terrestrial protected areas" }, value: 21.1, unit: "%",
              note: { fr: "du territoire, constant depuis 2020 ; indice Liste rouge UICN à 0,924",
                      en: "of the territory, constant since 2020; IUCN Red List Index at 0.924" },
              source: "ENV 2026 · ODD 2.5.1 et 2.5.2" },
            { sdg: 12, label: { fr: "Taux de recyclage national", en: "National recycling rate" }, value: 4, unit: "%",
              note: { fr: "2024 · moins de 2 % en 2020 ; 7,5 % des citoyens réclament explicitement le recyclage",
                      en: "2024 · under 2% in 2020; 7.5% of citizens explicitly call for recycling" },
              source: "ENV 2026 · ODD 12.5.1" },
            { sdg: 13, label: { fr: "Collectivités dotées d’une stratégie de RRC", en: "Local authorities with a DRR strategy" }, value: 15, unit: "%",
              note: { fr: "2024 · 0 % en 2020 · cible de 25 % en 2026", en: "2024 · 0% in 2020 · 25% target for 2026" },
              source: "ENV 2026 · ODD 13.1.3" },
            { sdg: 12, label: { fr: "Subventions aux combustibles fossiles", en: "Fossil-fuel subsidies" }, value: 1.2, unit: "%",
              note: { fr: "du PIB, 2024 · après un pic à 2,0 % en 2022 · 0,8 % projetés en 2026",
                      en: "of GDP, 2024 · after a 2.0% peak in 2022 · 0.8% projected for 2026" },
              source: "ENV 2026 · ODD 12.c.1" }
          ] }
        ] }
    ]
  }
});
