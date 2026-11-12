import type { Localized } from "./types";

export type BeliefCategory = "god" | "humanity" | "salvation" | "church" | "living" | "restoration";

export type Belief = {
  n: number;
  category: BeliefCategory;
  title: Localized;
  summary: Localized;
  /** English book name, translated automatically */
  ref: string;
};

export const beliefCategories: { id: BeliefCategory; name: Localized }[] = [
  { id: "god", name: { fr: "Dieu", ht: "Bondye", en: "God" } },
  { id: "humanity", name: { fr: "L'être humain", ht: "Lèzòm", en: "Humanity" } },
  { id: "salvation", name: { fr: "Le salut", ht: "Delivrans", en: "Salvation" } },
  { id: "church", name: { fr: "L'Église", ht: "Legliz la", en: "The Church" } },
  { id: "living", name: { fr: "La vie chrétienne", ht: "Lavi kretyen", en: "Christian Living" } },
  { id: "restoration", name: { fr: "Les derniers temps", ht: "Dènye tan yo", en: "Last Things" } },
];

export const beliefs: Belief[] = [
  {
    n: 1, category: "god", ref: "2 Timothy 3:16-17",
    title: { fr: "Les Saintes Écritures", ht: "Sent Ekriti yo", en: "The Holy Scriptures" },
    summary: {
      fr: "La Bible est la Parole de Dieu écrite, inspirée par le Saint-Esprit. Elle est la règle infaillible de notre foi et de notre vie.",
      ht: "Bib la se Pawòl Bondye ekri, Sentespri enspire l. Li se règ ki pa janm twonpe pou lafwa nou ak lavi nou.",
      en: "The Bible is God's written Word, inspired by the Holy Spirit. It is the infallible standard for our faith and life.",
    },
  },
  {
    n: 2, category: "god", ref: "Matthew 28:19",
    title: { fr: "La Trinité", ht: "Trinite a", en: "The Trinity" },
    summary: {
      fr: "Il y a un seul Dieu : le Père, le Fils et le Saint-Esprit, trois personnes éternelles unies dans l'amour.",
      ht: "Gen yon sèl Bondye : Papa a, Pitit la ak Sentespri a, twa pèsòn etènèl ki ini nan lanmou.",
      en: "There is one God: Father, Son, and Holy Spirit, three eternal persons united in love.",
    },
  },
  {
    n: 3, category: "god", ref: "John 3:16",
    title: { fr: "Dieu le Père", ht: "Bondye Papa a", en: "The Father" },
    summary: {
      fr: "Le Père éternel est Créateur et Source de toute vie. Il est juste, saint et plein de compassion.",
      ht: "Papa etènèl la se Kreyatè ak Sous tout lavi. Li jis, li sen epi li plen konpasyon.",
      en: "God the eternal Father is the Creator and Source of all life, just and holy, full of compassion.",
    },
  },
  {
    n: 4, category: "god", ref: "John 1:1-3",
    title: { fr: "Dieu le Fils", ht: "Bondye Pitit la", en: "The Son" },
    summary: {
      fr: "Jésus-Christ, vrai Dieu et vrai homme, a vécu sans péché, est mort pour nous, est ressuscité et intercède pour nous.",
      ht: "Jezikri, vrè Bondye ak vrè moun, te viv san peche, li mouri pou nou, li resisite epi l ap entèsede pou nou.",
      en: "Jesus Christ, fully God and fully human, lived without sin, died for us, rose again, and intercedes for us.",
    },
  },
  {
    n: 5, category: "god", ref: "John 14:16-18",
    title: { fr: "Dieu le Saint-Esprit", ht: "Bondye Sentespri a", en: "The Holy Spirit" },
    summary: {
      fr: "Le Saint-Esprit nous attire à Christ, renouvelle notre cœur, nous guide dans la vérité et accorde des dons à l'Église.",
      ht: "Sentespri a rale nou vin jwenn Kris, li renouvle kè nou, li gide nou nan verite a epi li bay Legliz la don.",
      en: "The Holy Spirit draws us to Christ, renews our hearts, guides us into truth, and gives gifts to the church.",
    },
  },
  {
    n: 6, category: "humanity", ref: "Genesis 1:1",
    title: { fr: "La création", ht: "Kreyasyon an", en: "Creation" },
    summary: {
      fr: "Dieu a créé le monde en six jours et s'est reposé le septième, instituant le sabbat comme mémorial de son œuvre.",
      ht: "Bondye te kreye mond lan nan sis jou epi li repoze setyèm jou a, li etabli saba a pou nou sonje travay li.",
      en: "God created the world in six days and rested on the seventh, establishing the Sabbath as a memorial of His work.",
    },
  },
  {
    n: 7, category: "humanity", ref: "Genesis 1:26-27",
    title: { fr: "La nature humaine", ht: "Nati moun", en: "The Nature of Humanity" },
    summary: {
      fr: "Créés à l'image de Dieu, nous formons une unité indivisible de corps, d'âme et d'esprit, appelés à l'aimer et à prendre soin de la terre.",
      ht: "Bondye kreye nou nan pòtre li, nou se yon sèl inite kò, nanm ak lespri, ki rele pou renmen l epi pran swen latè.",
      en: "Created in God's image, we are an indivisible unity of body, mind, and spirit, called to love Him and care for the earth.",
    },
  },
  {
    n: 8, category: "salvation", ref: "Revelation 12:7-9",
    title: { fr: "La grande controverse", ht: "Gwo konfli a", en: "The Great Controversy" },
    summary: {
      fr: "L'humanité est impliquée dans un conflit cosmique entre Christ et Satan au sujet du caractère de Dieu. Christ a déjà remporté la victoire.",
      ht: "Limanite nan mitan yon gwo batay ant Kris ak Satan sou karaktè Bondye. Kris deja genyen batay la.",
      en: "Humanity is caught in a cosmic conflict between Christ and Satan over God's character. Christ has already won the victory.",
    },
  },
  {
    n: 9, category: "salvation", ref: "1 Corinthians 15:3-4",
    title: { fr: "Vie, mort et résurrection de Christ", ht: "Lavi, lanmò ak rezirèksyon Kris", en: "The Life, Death, and Resurrection of Christ" },
    summary: {
      fr: "Par sa vie d'obéissance parfaite, sa mort expiatoire et sa résurrection, Christ a pourvu au seul moyen de réconciliation avec Dieu.",
      ht: "Atravè lavi l ki te obeyi nèt, lanmò l pou peche nou ak rezirèksyon l, Kris bay sèl chemen pou nou rekonsilye ak Bondye.",
      en: "Through His perfect obedience, atoning death, and resurrection, Christ provided the only way of reconciliation with God.",
    },
  },
  {
    n: 10, category: "salvation", ref: "Ephesians 2:8-10",
    title: { fr: "L'expérience du salut", ht: "Eksperyans delivrans lan", en: "The Experience of Salvation" },
    summary: {
      fr: "Le salut est un don gratuit, reçu par la foi en Jésus. Il nous pardonne, nous adopte comme enfants de Dieu et nous transforme.",
      ht: "Delivrans se yon kado gratis, nou resevwa l pa lafwa nan Jezi. Li padone nou, li fè nou tounen pitit Bondye epi li transfòme nou.",
      en: "Salvation is a free gift received by faith in Jesus. It forgives us, adopts us as God's children, and transforms us.",
    },
  },
  {
    n: 11, category: "salvation", ref: "Colossians 2:6",
    title: { fr: "Grandir en Christ", ht: "Grandi nan Kris", en: "Growing in Christ" },
    summary: {
      fr: "Par sa victoire, Jésus nous libère des puissances du mal. Nous grandissons en lui par la prière, la Parole et le service.",
      ht: "Avèk viktwa l, Jezi libere nou anba pouvwa mal la. Nou grandi nan li atravè lapriyè, Pawòl la ak sèvis.",
      en: "By His victory, Jesus frees us from the powers of evil. We grow in Him through prayer, the Word, and service.",
    },
  },
  {
    n: 12, category: "church", ref: "Ephesians 2:19-22",
    title: { fr: "L'Église", ht: "Legliz la", en: "The Church" },
    summary: {
      fr: "L'Église est la communauté de ceux qui confessent Jésus comme Seigneur, réunis pour adorer, fraterniser et proclamer l'Évangile.",
      ht: "Legliz la se kominote moun ki konfese Jezi kòm Seyè, ki reyini pou adore, viv an fratènite epi anonse Bòn Nouvèl la.",
      en: "The church is the community of those who confess Jesus as Lord, gathered to worship, fellowship, and proclaim the gospel.",
    },
  },
  {
    n: 13, category: "church", ref: "Revelation 14:6-12",
    title: { fr: "Le reste et sa mission", ht: "Rès la ak misyon li", en: "The Remnant and Its Mission" },
    summary: {
      fr: "Dans les derniers jours, Dieu appelle un peuple à garder ses commandements et la foi de Jésus, et à annoncer les messages des trois anges.",
      ht: "Nan dènye jou yo, Bondye rele yon pèp pou kenbe kòmandman l yo ak lafwa Jezi, epi anonse mesaj twa zanj yo.",
      en: "In the last days, God calls a people to keep His commandments and the faith of Jesus, and to proclaim the three angels' messages.",
    },
  },
  {
    n: 14, category: "church", ref: "Galatians 3:27-29",
    title: { fr: "L'unité dans le corps de Christ", ht: "Inite nan kò Kris la", en: "Unity in the Body of Christ" },
    summary: {
      fr: "En Christ, toutes les nations, langues et cultures forment une seule famille. Nos différences deviennent une richesse.",
      ht: "Nan Kris, tout nasyon, lang ak kilti fòme yon sèl fanmi. Diferans nou yo tounen yon richès.",
      en: "In Christ, every nation, language, and culture forms one family. Our differences become a blessing.",
    },
  },
  {
    n: 15, category: "church", ref: "Romans 6:1-6",
    title: { fr: "Le baptême", ht: "Batèm", en: "Baptism" },
    summary: {
      fr: "Par le baptême par immersion, nous confessons notre foi en la mort et la résurrection de Jésus et entrons dans sa famille.",
      ht: "Atravè batèm pa imèsyon, nou konfese lafwa nou nan lanmò ak rezirèksyon Jezi epi nou antre nan fanmi li.",
      en: "Through baptism by immersion, we confess our faith in Jesus' death and resurrection and join His family.",
    },
  },
  {
    n: 16, category: "church", ref: "1 Corinthians 11:23-26",
    title: { fr: "La Sainte Cène", ht: "Sentsèn", en: "The Lord's Supper" },
    summary: {
      fr: "La Sainte Cène, précédée du lavement des pieds, rappelle le sacrifice de Jésus et annonce son retour.",
      ht: "Sentsèn nan, ki vini apre lave pye, fè nou sonje sakrifis Jezi epi li anonse retou li.",
      en: "The Lord's Supper, preceded by foot washing, remembers Jesus' sacrifice and proclaims His return.",
    },
  },
  {
    n: 17, category: "church", ref: "1 Corinthians 12:7-11",
    title: { fr: "Les dons spirituels", ht: "Don espirityèl yo", en: "Spiritual Gifts and Ministries" },
    summary: {
      fr: "Dieu accorde à chaque membre des dons pour servir l'Église et l'humanité.",
      ht: "Bondye bay chak manm don pou sèvi Legliz la ak limanite.",
      en: "God gives every member gifts to serve the church and humanity.",
    },
  },
  {
    n: 18, category: "church", ref: "Joel 2:28-29",
    title: { fr: "Le don de prophétie", ht: "Don pwofesi a", en: "The Gift of Prophecy" },
    summary: {
      fr: "La prophétie est un don de l'Esprit. Il s'est manifesté dans le ministère d'Ellen G. White, dont les écrits nous orientent toujours vers la Bible.",
      ht: "Pwofesi se yon don Lespri a. Li te parèt nan ministè Ellen G. White, ki ekri pou toujou mennen nou vè Bib la.",
      en: "Prophecy is a gift of the Spirit. It was manifested in the ministry of Ellen G. White, whose writings always point us to the Bible.",
    },
  },
  {
    n: 19, category: "living", ref: "John 14:15",
    title: { fr: "La loi de Dieu", ht: "Lalwa Bondye", en: "The Law of God" },
    summary: {
      fr: "Les Dix Commandements expriment l'amour et la volonté de Dieu. Nous y obéissons non pour être sauvés, mais parce que nous sommes sauvés.",
      ht: "Dis Kòmandman yo eksprime lanmou ak volonte Bondye. Nou obeyi yo pa pou nou sove, men paske nou deja sove.",
      en: "The Ten Commandments express God's love and will. We obey not to be saved, but because we are saved.",
    },
  },
  {
    n: 20, category: "living", ref: "Exodus 20:8-11",
    title: { fr: "Le sabbat", ht: "Saba a", en: "The Sabbath" },
    summary: {
      fr: "Du vendredi soir au samedi soir, le sabbat est un temps de repos, d'adoration et de communion avec Dieu et les autres.",
      ht: "Depi vandredi swa rive samdi swa, saba a se yon tan pou repoze, adore epi viv an kominyon ak Bondye ak lòt moun.",
      en: "From Friday sunset to Saturday sunset, the Sabbath is a time of rest, worship, and fellowship with God and others.",
    },
  },
  {
    n: 21, category: "living", ref: "Malachi 3:8-12",
    title: { fr: "La gestion chrétienne", ht: "Jesyon kretyen", en: "Stewardship" },
    summary: {
      fr: "Nous sommes les gestionnaires de notre temps, de nos talents, de nos biens et de la terre. Dîmes et offrandes en sont l'expression.",
      ht: "Nou se jeran tan nou, talan nou, byen nou ak latè. Ladim ak ofrann se fason nou montre sa.",
      en: "We are stewards of our time, talents, possessions, and the earth. Tithes and offerings express this trust.",
    },
  },
  {
    n: 22, category: "living", ref: "1 Corinthians 10:31",
    title: { fr: "La conduite chrétienne", ht: "Konpòtman kretyen", en: "Christian Behavior" },
    summary: {
      fr: "Nous voulons honorer Dieu dans tout ce que nous faisons : nos choix, nos loisirs, notre santé et notre manière de vivre.",
      ht: "Nou vle onore Bondye nan tout sa nou fè : chwa nou, distraksyon nou, sante nou ak jan nou viv.",
      en: "We seek to honor God in all we do: our choices, entertainment, health, and way of life.",
    },
  },
  {
    n: 23, category: "living", ref: "Genesis 2:18-25",
    title: { fr: "Le mariage et la famille", ht: "Maryaj ak fanmi", en: "Marriage and the Family" },
    summary: {
      fr: "Le mariage, institué par Dieu en Éden, est une union à vie. La famille est le lieu où l'on apprend à aimer comme Christ.",
      ht: "Maryaj, Bondye te etabli l nan Edenn, se yon inyon pou lavi. Fanmi se kote nou aprann renmen tankou Kris.",
      en: "Marriage, established by God in Eden, is a lifelong union. The family is where we learn to love as Christ loves.",
    },
  },
  {
    n: 24, category: "restoration", ref: "Hebrews 8:1-2",
    title: { fr: "Le ministère de Christ dans le sanctuaire céleste", ht: "Ministè Kris nan tanp syèl la", en: "Christ's Ministry in the Heavenly Sanctuary" },
    summary: {
      fr: "Jésus, notre Grand Prêtre, intercède pour nous dans le sanctuaire céleste et achève l'œuvre de rédemption avant son retour.",
      ht: "Jezi, Granprèt nou, ap entèsede pou nou nan tanp syèl la epi l ap fin travay redanmsyon an anvan l tounen.",
      en: "Jesus, our High Priest, ministers for us in the heavenly sanctuary, completing the work of redemption before His return.",
    },
  },
  {
    n: 25, category: "restoration", ref: "John 14:1-3",
    title: { fr: "Le retour de Christ", ht: "Retou Kris", en: "The Second Coming of Christ" },
    summary: {
      fr: "Jésus reviendra de manière visible, personnelle et glorieuse. C'est la bienheureuse espérance de l'Église.",
      ht: "Jezi ap tounen yon fason tout moun ap wè, an pèsòn epi ak glwa. Se esperans beni Legliz la.",
      en: "Jesus will return visibly, personally, and gloriously. This is the blessed hope of the church.",
    },
  },
  {
    n: 26, category: "restoration", ref: "1 Thessalonians 4:13-17",
    title: { fr: "La mort et la résurrection", ht: "Lanmò ak rezirèksyon", en: "Death and Resurrection" },
    summary: {
      fr: "La mort est un sommeil inconscient. Au retour de Jésus, les justes ressusciteront pour recevoir la vie éternelle.",
      ht: "Lanmò se tankou yon dòmi kote moun pa konnen anyen. Lè Jezi tounen, moun ki jis yo pral resisite pou yo resevwa lavi etènèl.",
      en: "Death is an unconscious sleep. At Jesus' return, the righteous will be raised to receive eternal life.",
    },
  },
  {
    n: 27, category: "restoration", ref: "Revelation 20:1-6",
    title: { fr: "Le millénium et la fin du péché", ht: "Milenyòm nan ak lafen peche", en: "The Millennium and the End of Sin" },
    summary: {
      fr: "Après mille ans avec Christ au ciel, le péché et les pécheurs seront définitivement détruits, et l'univers sera purifié.",
      ht: "Apre mil ane ak Kris nan syèl la, peche ak moun ki nan peche yo pral detwi nèt, epi linivè a pral pirifye.",
      en: "After a thousand years with Christ in heaven, sin and sinners will be destroyed forever, and the universe made clean.",
    },
  },
  {
    n: 28, category: "restoration", ref: "Revelation 21:1-5",
    title: { fr: "La nouvelle terre", ht: "Nouvo latè a", en: "The New Earth" },
    summary: {
      fr: "Dieu créera une nouvelle terre où il habitera avec son peuple. Il n'y aura plus ni larmes, ni douleur, ni mort.",
      ht: "Bondye pral kreye yon nouvo latè kote l ap rete ak pèp li. P ap gen dlo nan je, ni doulè, ni lanmò ankò.",
      en: "God will create a new earth where He will dwell with His people. There will be no more tears, pain, or death.",
    },
  },
];
