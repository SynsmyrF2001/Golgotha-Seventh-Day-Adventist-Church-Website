import type { Localized } from "./types";

export type HeritagePillar = {
  id: string;
  title: Localized;
  text: Localized;
  accent: "onyx" | "maroon" | "gold" | "onyx-soft";
};

export const heritagePillars: HeritagePillar[] = [
  {
    id: "hymns",
    accent: "maroon",
    title: { fr: "Chants d'Espérance", ht: "Chants d'Espérance", en: "Chants d'Espérance" },
    text: {
      fr: "Le recueil Chants d'Espérance accompagne des générations de croyants haïtiens. Ses cantiques en français et en créole, chantés de tout cœur, résonnent dans nos cultes comme un héritage vivant.",
      ht: "Liv Chants d'Espérance la akonpaye plizyè jenerasyon kwayan ayisyen. Kantik li yo an fransè ak an kreyòl, nou chante yo ak tout kè nou, yo sonnen nan sèvis nou yo tankou yon eritaj ki vivan.",
      en: "The Chants d'Espérance hymnal has carried generations of Haitian believers. Its hymns in French and Creole, sung with full hearts, fill our services as a living heritage.",
    },
  },
  {
    id: "language",
    accent: "onyx",
    title: { fr: "Deux langues, un seul cœur", ht: "De lang, yon sèl kè", en: "Two Languages, One Heart" },
    text: {
      fr: "Nous adorons en français et en créole haïtien, et nous accueillons avec joie nos amis anglophones. La Parole de Dieu parle toutes les langues du cœur.",
      ht: "Nou adore an fransè ak an kreyòl ayisyen, epi nou resevwa zanmi ki pale angle yo ak kè kontan. Pawòl Bondye pale tout lang kè a.",
      en: "We worship in French and Haitian Creole, and gladly welcome our English-speaking friends. God's Word speaks every language of the heart.",
    },
  },
  {
    id: "freedom",
    accent: "gold",
    title: { fr: "Soupe joumou et liberté", ht: "Soup joumou ak libète", en: "Soup Joumou & Freedom" },
    text: {
      fr: "Chaque 1er janvier, la soupe joumou célèbre l'indépendance d'Haïti. Pour nous, elle rappelle aussi une liberté plus grande encore : celle que Christ nous offre (Galates 5:1).",
      ht: "Chak 1ye janvye, soup joumou selebre endepandans Ayiti. Pou nou, li fè nou sonje yon libète ki pi gran toujou : sa Kris ofri nou an (Galat 5:1).",
      en: "Every January 1st, soup joumou celebrates Haiti's independence. For us, it also recalls an even greater freedom: the one Christ gives us (Galatians 5:1).",
    },
  },
  {
    id: "fellowship",
    accent: "onyx-soft",
    title: { fr: "L'hospitalité à l'haïtienne", ht: "Akèy ayisyen", en: "Haitian Hospitality" },
    text: {
      fr: "Un repas partagé, une poignée de main chaleureuse, un « Bon sabbat ! » à la porte : chez nous, chaque visiteur est reçu comme un membre de la famille.",
      ht: "Yon manje nou pataje, yon bèl lanmen, yon « Bon saba ! » nan pòt la : lakay nou, chak vizitè resevwa tankou yon manm fanmi.",
      en: "A shared meal, a warm handshake, a \"Happy Sabbath!\" at the door: here, every visitor is welcomed like family.",
    },
  },
];

export type Proverb = {
  kreyol: string;
  meaning: Localized;
  ref: string;
  verse: Localized;
};

export const proverbs: Proverb[] = [
  {
    kreyol: "Men anpil, chay pa lou.",
    meaning: { fr: "Avec beaucoup de mains, le fardeau n'est pas lourd.", ht: "Lè anpil men mete ansanm, chay la pa lou.", en: "With many hands, the load is not heavy." },
    ref: "Galatians 6:2",
    verse: {
      fr: "Portez les fardeaux les uns des autres, et vous accomplirez ainsi la loi de Christ.",
      ht: "Se pou nou yonn ede lòt pote chay yo. Se konsa n a fè sa lalwa Kris la mande.",
      en: "Bear one another's burdens, and so fulfill the law of Christ.",
    },
  },
  {
    kreyol: "Dèyè mòn gen mòn.",
    meaning: { fr: "Derrière les montagnes, il y a encore des montagnes.", ht: "Lè ou fin travèse yon mòn, gen lòt mòn ankò.", en: "Beyond the mountains, there are more mountains." },
    ref: "Psalm 121:1-2",
    verse: {
      fr: "Je lève mes yeux vers les montagnes… D'où me viendra le secours? Le secours me vient de l'Éternel.",
      ht: "M ap leve je m gade mòn yo. Kote sekou m ap soti? Sekou m soti nan Seyè a.",
      en: "I lift up my eyes to the hills. From where does my help come? My help comes from the Lord.",
    },
  },
  {
    kreyol: "Piti piti, zwazo fè nich li.",
    meaning: { fr: "Petit à petit, l'oiseau fait son nid.", ht: "Ti kras pa ti kras, zwazo a fè nich li.", en: "Little by little, the bird builds its nest." },
    ref: "Zechariah 4:10",
    verse: {
      fr: "Car ceux qui méprisaient le jour des faibles commencements se réjouiront.",
      ht: "Moun ki te meprize jou ti kòmansman yo pral kontan.",
      en: "Do not despise these small beginnings, for the Lord rejoices to see the work begin.",
    },
  },
  {
    kreyol: "Bondye bon.",
    meaning: { fr: "Dieu est bon, en toute circonstance.", ht: "Bondye bon nan tout sitiyasyon.", en: "God is good, in every circumstance." },
    ref: "Psalm 34:8",
    verse: {
      fr: "Sentez et voyez combien l'Éternel est bon! Heureux l'homme qui cherche en lui son refuge!",
      ht: "Goute pou nou wè jan Seyè a bon! Benediksyon pou moun ki kouri al kache anba zèl li!",
      en: "Taste and see that the Lord is good; blessed is the one who takes refuge in Him.",
    },
  },
  {
    kreyol: "Lespwa fè viv.",
    meaning: { fr: "C'est l'espérance qui fait vivre.", ht: "Se esperans ki kenbe moun vivan.", en: "Hope is what keeps us alive." },
    ref: "Romans 15:13",
    verse: {
      fr: "Que le Dieu de l'espérance vous remplisse de toute joie et de toute paix dans la foi.",
      ht: "Se pou Bondye ki bay esperans lan ba nou tout kè kontan ak kè poze nan lafwa.",
      en: "May the God of hope fill you with all joy and peace in believing.",
    },
  },
  {
    kreyol: "Sak vid pa kanpe.",
    meaning: { fr: "Un sac vide ne tient pas debout.", ht: "Yon sak ki vid pa ka kanpe.", en: "An empty sack cannot stand up." },
    ref: "John 6:35",
    verse: {
      fr: "Je suis le pain de vie. Celui qui vient à moi n'aura jamais faim.",
      ht: "Se mwen menm ki pen ki bay lavi a. Moun ki vin jwenn mwen p ap janm grangou.",
      en: "I am the bread of life; whoever comes to me shall not hunger.",
    },
  },
];

/** Rotates weekly on the home page. */
export const weeklyVerses: { ref: string; text: Localized }[] = [
  {
    ref: "Isaiah 40:31",
    text: {
      fr: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles.",
      ht: "Men moun ki mete konfyans yo nan Seyè a ap jwenn fòs ankò. Y ap pran vole tankou malfini.",
      en: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
    },
  },
  {
    ref: "John 14:3",
    text: {
      fr: "Je reviendrai, et je vous prendrai avec moi, afin que là où je suis vous y soyez aussi.",
      ht: "M ap tounen vin chache nou pou nou ka la avè m kote m ye a.",
      en: "I will come again and will take you to myself, that where I am you may be also.",
    },
  },
  {
    ref: "Matthew 11:28",
    text: {
      fr: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.",
      ht: "Vin jwenn mwen, nou tout ki bouke, ki anba chay, m a ban nou repo.",
      en: "Come to me, all who labor and are heavy laden, and I will give you rest.",
    },
  },
  {
    ref: "Jeremiah 29:11",
    text: {
      fr: "Car je connais les projets que j'ai formés sur vous, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.",
      ht: "Mwen konnen sa m gen nan tèt mwen pou nou : se byen m vle pou nou, se pa malè. M ap ban nou yon avni ak yon esperans.",
      en: "For I know the plans I have for you, plans for welfare and not for evil, to give you a future and a hope.",
    },
  },
  {
    ref: "Psalm 46:1",
    text: {
      fr: "Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.",
      ht: "Bondye se kote nou kache, se li ki ban nou fòs. Li toujou la pou ede nou lè nou nan tray.",
      en: "God is our refuge and strength, a very present help in trouble.",
    },
  },
  {
    ref: "Revelation 21:4",
    text: {
      fr: "Il essuiera toute larme de leurs yeux, et la mort ne sera plus.",
      ht: "Li pral siye tout dlo nan je yo. P ap gen lanmò ankò.",
      en: "He will wipe away every tear from their eyes, and death shall be no more.",
    },
  },
  {
    ref: "Lamentations 3:22-23",
    text: {
      fr: "Les bontés de l'Éternel ne sont pas épuisées; elles se renouvellent chaque matin. Oh! que ta fidélité est grande!",
      ht: "Renmen Seyè a pa janm fini. Chak maten li renouvle. Jan ou fidèl, se pa pale!",
      en: "The steadfast love of the Lord never ceases; His mercies are new every morning. Great is your faithfulness.",
    },
  },
  {
    ref: "Micah 6:8",
    text: {
      fr: "Ce que l'Éternel demande de toi, c'est que tu pratiques la justice, que tu aimes la miséricorde, et que tu marches humblement avec ton Dieu.",
      ht: "Men sa Seyè a mande ou : se pou ou fè sa ki dwat, se pou ou renmen fè favè, se pou ou mache ak Bondye ou san lògèy.",
      en: "What does the Lord require of you but to do justice, to love kindness, and to walk humbly with your God?",
    },
  },
];
