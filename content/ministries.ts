import type { Ministry } from "./types";

/**
 * Church ministries. Each one gets its own page at /ministries/<slug>.
 * Fill in `leader` (shown as "to be confirmed" while empty) and update `meets` with real times.
 */
export const ministries: Ministry[] = [
  {
    slug: "sabbath-school",
    category: "adults",
    accent: "onyx",
    name: { fr: "École du Sabbat", ht: "Lekòl Saba", en: "Sabbath School" },
    tagline: {
      fr: "Étudier la Bible ensemble, chaque semaine.",
      ht: "Etidye Bib la ansanm, chak semèn.",
      en: "Studying the Bible together, every week.",
    },
    description: {
      fr: "Le cœur de notre sabbat matin. En petites classes, nous étudions la leçon trimestrielle, partageons nos témoignages et prions les uns pour les autres. Il y a une classe pour chaque âge, des tout-petits aux adultes, ainsi qu'une classe pour les nouveaux venus et les amis curieux.",
      ht: "Se kè saba maten nou. An ti klas, nou etidye leson trimès la, nou pataje temwayaj epi nou priye youn pou lòt. Gen yon klas pou chak laj, depi tou piti rive granmoun, ak yon klas pou moun ki fèk vini ak zanmi ki gen kiryozite.",
      en: "The heart of our Sabbath morning. In small classes we study the quarterly lesson, share testimonies, and pray for one another. There is a class for every age, from toddlers to adults, plus a class for newcomers and curious friends.",
    },
    meets: { fr: "Chaque sabbat, 9 h 30", ht: "Chak saba, 9:30 AM", en: "Every Sabbath, 9:30 AM" },
    leader: "",
    verse: {
      ref: "Psalm 119:105",
      text: {
        fr: "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.",
        ht: "Pawòl ou se yon lanp pou pye m, se yon limyè k ap klere chemen m.",
        en: "Your word is a lamp to my feet and a light to my path.",
      },
    },
    highlights: [
      { fr: "Classes pour enfants, jeunes et adultes", ht: "Klas pou timoun, jèn ak granmoun", en: "Classes for children, youth, and adults" },
      { fr: "Classe d'accueil pour les visiteurs", ht: "Klas akèy pou vizitè yo", en: "Welcome class for visitors" },
      { fr: "Rapport missionnaire mondial", ht: "Rapò misyonè mondyal", en: "Worldwide mission spotlight" },
    ],
  },
  {
    slug: "adventist-youth",
    category: "youth",
    accent: "maroon",
    name: { fr: "Jeunesse Adventiste", ht: "Jenès Advantis", en: "Adventist Youth" },
    tagline: {
      fr: "Une génération qui sert, chante et témoigne.",
      ht: "Yon jenerasyon ki sèvi, chante epi temwaye.",
      en: "A generation that serves, sings, and shares its faith.",
    },
    description: {
      fr: "La Jeunesse Adventiste (JA) rassemble les adolescents et jeunes adultes autour de programmes vivants : études bibliques, débats, concours bibliques, chorales, sorties et projets missionnaires. C'est un espace sûr pour poser ses questions et développer ses dons.",
      ht: "Jenès Advantis (JA) rasanble adolesan ak jèn granmoun nan pwogram ki vivan : etid biblik, deba, konkou biblik, koral, sòti ak pwojè misyonè. Se yon espas an sekirite pou poze kesyon epi devlope don ou.",
      en: "Adventist Youth (AY) gathers teens and young adults for lively programs: Bible studies, discussions, Bible bowls, choirs, outings, and mission projects. It is a safe space to ask questions and develop your gifts.",
    },
    meets: { fr: "Horaire à confirmer", ht: "Orè pou konfime", en: "Schedule to be confirmed" },
    leader: "",
    verse: {
      ref: "1 Timothy 4:12",
      text: {
        fr: "Que personne ne méprise ta jeunesse; mais sois un modèle pour les fidèles.",
        ht: "Pa kite pesonn meprize ou poutèt ou jenn. Men, se pou ou sèvi yon egzanp pou moun ki kwè yo.",
        en: "Don't let anyone look down on you because you are young, but set an example for the believers.",
      },
    },
    highlights: [
      { fr: "Programmes JA du sabbat après-midi", ht: "Pwogram JA saba aprèmidi", en: "Sabbath afternoon AY programs" },
      { fr: "Concours bibliques et chorale des jeunes", ht: "Konkou biblik ak koral jèn yo", en: "Bible bowls and youth choir" },
      { fr: "Projets de service et retraites", ht: "Pwojè sèvis ak retrèt", en: "Service projects and retreats" },
    ],
  },
  {
    slug: "pathfinders",
    category: "youth",
    accent: "gold",
    name: { fr: "Éclaireurs", ht: "Eklerè yo", en: "Pathfinders" },
    tagline: {
      fr: "Aventure, discipline et foi pour les 10-15 ans.",
      ht: "Avanti, disiplin ak lafwa pou timoun 10 a 15 an.",
      en: "Adventure, discipline, and faith for ages 10 to 15.",
    },
    description: {
      fr: "Le club des Éclaireurs forme les jeunes de 10 à 15 ans à travers le camping, les spécialités (nature, secourisme, arts), la marche au pas et le service communautaire. Ils apprennent à aimer Dieu, la création et leur prochain.",
      ht: "Klib Eklerè yo fòme jèn 10 a 15 an atravè kanpin, espesyalite (lanati, premye swen, atizay), mach o pa ak sèvis kominotè. Yo aprann renmen Bondye, kreyasyon an ak pwochen yo.",
      en: "The Pathfinder club trains young people ages 10 to 15 through camping, honors (nature, first aid, arts), drill and marching, and community service. They learn to love God, His creation, and their neighbor.",
    },
    meets: { fr: "Horaire à confirmer", ht: "Orè pou konfime", en: "Schedule to be confirmed" },
    leader: "",
    verse: {
      ref: "Proverbs 22:6",
      text: {
        fr: "Instruis l'enfant selon la voie qu'il doit suivre; et quand il sera vieux, il ne s'en détournera pas.",
        ht: "Moutre timoun chemen pou l pran, lè l granmoun li p ap janm kite l.",
        en: "Train up a child in the way he should go; even when he is old he will not depart from it.",
      },
    },
    highlights: [
      { fr: "Camporees et sorties nature", ht: "Kanpore ak sòti nan lanati", en: "Camporees and nature outings" },
      { fr: "Spécialités et classes progressives", ht: "Espesyalite ak klas pwogresif", en: "Honors and progressive classes" },
      { fr: "Marche au pas et fanfare", ht: "Mach o pa ak fanfa", en: "Drill team and drum corps" },
    ],
  },
  {
    slug: "adventurers",
    category: "children",
    accent: "onyx-soft",
    name: { fr: "Aventuriers", ht: "Avantirye yo", en: "Adventurers" },
    tagline: {
      fr: "Découvrir Jésus en s'amusant, de 4 à 9 ans.",
      ht: "Dekouvri Jezi pandan w ap amize w, 4 a 9 an.",
      en: "Discovering Jesus through play, ages 4 to 9.",
    },
    description: {
      fr: "Le club des Aventuriers accueille les enfants de 4 à 9 ans et leurs parents. Activités manuelles, chants, histoires bibliques et petites spécialités aident les enfants à grandir dans l'amour de Dieu, en famille.",
      ht: "Klib Avantirye yo resevwa timoun 4 a 9 an ak paran yo. Aktivite manyèl, chante, istwa biblik ak ti espesyalite ede timoun yo grandi nan lanmou Bondye, an fanmi.",
      en: "The Adventurer club welcomes children ages 4 to 9 and their parents. Crafts, songs, Bible stories, and beginner awards help kids grow in God's love, together with their families.",
    },
    meets: { fr: "Horaire à confirmer", ht: "Orè pou konfime", en: "Schedule to be confirmed" },
    leader: "",
    verse: {
      ref: "Mark 10:14",
      text: {
        fr: "Laissez venir à moi les petits enfants, et ne les en empêchez pas.",
        ht: "Kite timoun piti yo vin jwenn mwen, pa anpeche yo.",
        en: "Let the little children come to me, and do not hinder them.",
      },
    },
    highlights: [
      { fr: "Activités parents-enfants", ht: "Aktivite paran ak timoun", en: "Parent-and-child activities" },
      { fr: "Histoires bibliques et chants", ht: "Istwa biblik ak chante", en: "Bible stories and songs" },
      { fr: "Écussons et cérémonies d'investiture", ht: "Badj ak seremoni envestiti", en: "Awards and investiture ceremonies" },
    ],
  },
  {
    slug: "music",
    category: "worship",
    accent: "maroon",
    name: { fr: "Musique et chorales", ht: "Mizik ak koral", en: "Music & Choirs" },
    tagline: {
      fr: "Louer Dieu avec excellence et avec joie.",
      ht: "Louwe Bondye ak ekselans epi ak kè kontan.",
      en: "Praising God with excellence and joy.",
    },
    description: {
      fr: "Des grands chœurs aux groupes vocaux, nos chorales sont au cœur de notre culte. Nous chantons les cantiques de Chants d'Espérance en français et en créole, ainsi que des chants contemporains. Musiciens et chanteurs de tous niveaux sont les bienvenus.",
      ht: "Depi gwo koral rive nan ti gwoup vokal, koral nou yo nan kè sèvis adorasyon nou. Nou chante kantik Chants d'Espérance an fransè ak an kreyòl, ansanm ak chante kontanporen. Mizisyen ak chantè tout nivo byenvini.",
      en: "From full choirs to vocal ensembles, our choirs are at the heart of worship. We sing hymns from Chants d'Espérance in French and Creole, along with contemporary songs. Musicians and singers of every level are welcome.",
    },
    meets: { fr: "Répétitions : horaire à confirmer", ht: "Repetisyon : orè pou konfime", en: "Rehearsals: schedule to be confirmed" },
    leader: "",
    verse: {
      ref: "Psalm 100:1-2",
      text: {
        fr: "Poussez vers l'Éternel des cris de joie, vous tous, habitants de la terre! Servez l'Éternel avec joie.",
        ht: "Nou tout ki sou latè, rele fò pou Seyè a ak kè kontan! Sèvi Seyè a ak kè kontan.",
        en: "Make a joyful noise to the Lord, all the earth! Serve the Lord with gladness.",
      },
    },
    highlights: [
      { fr: "Chorale adulte et chorale des jeunes", ht: "Koral granmoun ak koral jèn", en: "Adult and youth choirs" },
      { fr: "Équipe de louange", ht: "Ekip lwanj", en: "Praise team" },
      { fr: "Concerts et cantates", ht: "Konsè ak kantat", en: "Concerts and cantatas" },
    ],
  },
  {
    slug: "women",
    category: "adults",
    accent: "gold",
    name: { fr: "Ministère des femmes", ht: "Ministè fanm yo", en: "Women's Ministries" },
    tagline: {
      fr: "Des femmes fortes dans la foi, qui se soutiennent.",
      ht: "Fanm ki fò nan lafwa, ki sipòte youn lòt.",
      en: "Women strong in faith, lifting each other up.",
    },
    description: {
      fr: "Le Ministère des femmes encourage chaque femme à grandir spirituellement et à exercer ses dons. Petits déjeuners de prière, retraites, mentorat et actions solidaires tissent des liens d'amitié entre générations.",
      ht: "Ministè fanm yo ankouraje chak fanm grandi espirityèlman epi itilize don li. Dejene lapriyè, retrèt, mantora ak aksyon solidarite fè lyen zanmitay ant jenerasyon yo.",
      en: "Women's Ministries encourages every woman to grow spiritually and use her gifts. Prayer breakfasts, retreats, mentoring, and outreach build friendships across generations.",
    },
    meets: { fr: "Horaire à confirmer", ht: "Orè pou konfime", en: "Schedule to be confirmed" },
    leader: "",
    verse: {
      ref: "Proverbs 31:25",
      text: {
        fr: "Elle est revêtue de force et de gloire, et elle se rit de l'avenir.",
        ht: "Li gen fòs ak respè sou li tankou rad, li pa pè sa ki gen pou rive demen.",
        en: "Strength and dignity are her clothing, and she laughs at the time to come.",
      },
    },
    highlights: [
      { fr: "Matinées de prière", ht: "Maten lapriyè", en: "Prayer mornings" },
      { fr: "Retraite annuelle", ht: "Retrèt chak ane", en: "Annual retreat" },
      { fr: "Mentorat entre générations", ht: "Mantora ant jenerasyon", en: "Mentoring across generations" },
    ],
  },
  {
    slug: "men",
    category: "adults",
    accent: "onyx",
    name: { fr: "Ministère des hommes", ht: "Ministè gason yo", en: "Men's Ministries" },
    tagline: {
      fr: "Des hommes de prière, de service et d'intégrité.",
      ht: "Gason ki priye, ki sèvi epi ki gen entegrite.",
      en: "Men of prayer, service, and integrity.",
    },
    description: {
      fr: "Le Ministère des hommes équipe les hommes à être des leaders serviteurs dans leur foyer, à l'église et dans la communauté, à travers des déjeuners de prière, des études bibliques et des projets pratiques.",
      ht: "Ministè gason yo ekipe gason pou yo vin lidè k ap sèvi lakay yo, nan legliz ak nan kominote a, atravè dejene lapriyè, etid biblik ak pwojè pratik.",
      en: "Men's Ministries equips men to be servant leaders at home, at church, and in the community through prayer breakfasts, Bible studies, and hands-on projects.",
    },
    meets: { fr: "Horaire à confirmer", ht: "Orè pou konfime", en: "Schedule to be confirmed" },
    leader: "",
    verse: {
      ref: "Joshua 24:15",
      text: {
        fr: "Moi et ma maison, nous servirons l'Éternel.",
        ht: "Mwen menm ak tout moun lakay mwen, nou pral sèvi Seyè a.",
        en: "As for me and my house, we will serve the Lord.",
      },
    },
    highlights: [
      { fr: "Déjeuners de prière", ht: "Dejene lapriyè", en: "Prayer breakfasts" },
      { fr: "Projets d'entretien et d'entraide", ht: "Pwojè antretyen ak antrèd", en: "Maintenance and help projects" },
      { fr: "Paternité et leadership", ht: "Wòl papa ak lidèchip", en: "Fatherhood and leadership" },
    ],
  },
  {
    slug: "health",
    category: "service",
    accent: "onyx-soft",
    name: { fr: "Ministère de la santé", ht: "Ministè sante", en: "Health Ministries" },
    tagline: {
      fr: "Corps, âme et esprit : la santé selon Dieu.",
      ht: "Kò, nanm ak lespri : sante jan Bondye vle l.",
      en: "Body, mind, and spirit: health God's way.",
    },
    description: {
      fr: "Les adventistes croient que prendre soin de son corps est un acte d'adoration. Notre ministère de la santé propose des ateliers de cuisine végétarienne, des conférences, des dépistages et des marches communautaires, inspirés des huit remèdes naturels.",
      ht: "Advantis yo kwè pran swen kò ou se yon fason pou adore Bondye. Ministè sante nou an òganize atelye kizin vejetaryen, konferans, tès depistaj ak mache kominotè, enspire pa uit remèd natirèl yo.",
      en: "Adventists believe caring for our bodies is an act of worship. Our health ministry offers vegetarian cooking classes, seminars, screenings, and community walks inspired by the eight natural remedies.",
    },
    meets: { fr: "Horaire à confirmer", ht: "Orè pou konfime", en: "Schedule to be confirmed" },
    leader: "",
    verse: {
      ref: "3 John 1:2",
      text: {
        fr: "Bien-aimé, je souhaite que tu prospères à tous égards et sois en bonne santé, comme prospère l'état de ton âme.",
        ht: "Mezanmi, mwen swete pou tout bagay mache byen pou ou, pou ou gen bon sante, menm jan nanm ou an bon sante.",
        en: "Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul.",
      },
    },
    highlights: [
      { fr: "Ateliers de cuisine saine", ht: "Atelye kizin ki an sante", en: "Healthy cooking workshops" },
      { fr: "Foires de santé et dépistages", ht: "Fwa sante ak depistaj", en: "Health fairs and screenings" },
      { fr: "Les 8 remèdes naturels", ht: "8 remèd natirèl yo", en: "The 8 natural remedies" },
    ],
  },
  {
    slug: "community-services",
    category: "service",
    accent: "maroon",
    name: { fr: "Service communautaire (Dorcas)", ht: "Sèvis kominotè (Dòkas)", en: "Community Services (Dorcas)" },
    tagline: {
      fr: "L'amour de Dieu, en actes concrets.",
      ht: "Lanmou Bondye, an aksyon konkrè.",
      en: "God's love, in practical action.",
    },
    description: {
      fr: "Inspirée de Dorcas, « riche en bonnes œuvres » (Actes 9:36), notre équipe de service communautaire distribue nourriture et vêtements, visite les malades et les aînés, et répond aux besoins de nos voisins à South Easton et au-delà.",
      ht: "Enspire pa Dòkas, ki « te konn fè anpil byen » (Travay 9:36), ekip sèvis kominotè nou an distribye manje ak rad, vizite moun malad ak granmoun aje, epi reponn bezwen vwazen nou yo nan South Easton ak pi lwen.",
      en: "Inspired by Dorcas, \"full of good works\" (Acts 9:36), our community services team distributes food and clothing, visits the sick and elderly, and meets the needs of our neighbors in South Easton and beyond.",
    },
    meets: { fr: "Horaire à confirmer", ht: "Orè pou konfime", en: "Schedule to be confirmed" },
    leader: "",
    verse: {
      ref: "Matthew 25:40",
      text: {
        fr: "Toutes les fois que vous avez fait ces choses à l'un de ces plus petits de mes frères, c'est à moi que vous les avez faites.",
        ht: "Chak fwa nou te fè sa pou youn nan pi piti frè m yo, se pou mwen menm nou te fè l.",
        en: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
      },
    },
    highlights: [
      { fr: "Banque alimentaire et vestiaire", ht: "Bank manje ak rad", en: "Food pantry and clothing closet" },
      { fr: "Visites aux malades et aux aînés", ht: "Vizit bay moun malad ak granmoun", en: "Visits to the sick and elderly" },
      { fr: "Aide d'urgence", ht: "Èd ijans", en: "Emergency assistance" },
    ],
  },
  {
    slug: "family",
    category: "adults",
    accent: "gold",
    name: { fr: "Ministère de la famille", ht: "Ministè fanmi", en: "Family Ministries" },
    tagline: {
      fr: "Des foyers où Christ est au centre.",
      ht: "Fwaye kote Kris nan mitan.",
      en: "Homes with Christ at the center.",
    },
    description: {
      fr: "Couples, parents, célibataires ou familles recomposées : le Ministère de la famille offre des séminaires, des soirées couples, de l'accompagnement et des ressources pour bâtir des relations solides et pleines de grâce.",
      ht: "Koup, paran, moun ki selibatè oswa fanmi rekonpoze : Ministè fanmi an ofri seminè, aswè pou koup, akonpayman ak resous pou bati relasyon ki solid epi ki plen gras.",
      en: "Couples, parents, singles, or blended families: Family Ministries offers seminars, date nights, counseling, and resources to build strong, grace-filled relationships.",
    },
    meets: { fr: "Horaire à confirmer", ht: "Orè pou konfime", en: "Schedule to be confirmed" },
    leader: "",
    verse: {
      ref: "Psalm 127:1",
      text: {
        fr: "Si l'Éternel ne bâtit la maison, ceux qui la bâtissent travaillent en vain.",
        ht: "Si se pa Seyè a ki bati kay la, moun k ap bati l yo ap travay pou gremesi.",
        en: "Unless the Lord builds the house, those who build it labor in vain.",
      },
    },
    highlights: [
      { fr: "Semaine de la famille chrétienne", ht: "Semèn fanmi kretyen", en: "Christian Family Week" },
      { fr: "Soirées couples", ht: "Aswè pou koup", en: "Couples' evenings" },
      { fr: "Ressources pour parents", ht: "Resous pou paran", en: "Parenting resources" },
    ],
  },
];

export function getMinistry(slug: string) {
  return ministries.find((m) => m.slug === slug);
}
