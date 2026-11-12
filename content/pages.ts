import type { Localized } from "./types";

type Hero = { eyebrow: Localized; title: Localized; intro: Localized };
type Block = { title: Localized; text: Localized };
type Faq = { question: Localized; answer: Localized };

/* ------------------------------------------------------------------ */
/* Plan your visit                                                     */
/* ------------------------------------------------------------------ */

export const visitPage = {
  hero: {
    eyebrow: { fr: "Planifiez votre visite", ht: "Planifye vizit ou", en: "Plan your visit" },
    title: { fr: "Votre premier sabbat", ht: "Premye saba ou", en: "Your first Sabbath" },
    intro: {
      fr: "Que vous soyez adventiste depuis toujours ou simplement curieux, vous êtes chez vous ici. Voici à quoi vous attendre.",
      ht: "Kit ou se advantis depi lontan, kit ou annik gen kiryozite, ou lakay ou isit la. Men sa pou w tann.",
      en: "Whether you've been Adventist all your life or are simply curious, you belong here. Here's what to expect.",
    },
  } satisfies Hero,

  steps: [
    {
      title: { fr: "Arrivée", ht: "Rive", en: "Arrive" },
      text: {
        fr: "Garez-vous gratuitement sur place. Notre équipe d'accueil vous recevra à la porte avec un « Bon sabbat ! » et vous aidera à vous orienter.",
        ht: "Pake gratis sou plas. Ekip akèy nou an ap resevwa w nan pòt la ak yon « Bon saba ! » epi l ap ede w jwenn chemen w.",
        en: "Park for free on site. Our welcome team will greet you at the door with a \"Happy Sabbath!\" and help you find your way.",
      },
    },
    {
      title: { fr: "École du Sabbat · 9 h 30", ht: "Lekòl Saba · 9:30", en: "Sabbath School · 9:30" },
      text: {
        fr: "Rejoignez une classe d'étude biblique. Les enfants ont leurs propres classes animées, adaptées à leur âge.",
        ht: "Antre nan yon klas etid biblik. Timoun yo gen pwòp klas pa yo, ki adapte ak laj yo.",
        en: "Join a Bible study class. Children have their own lively classes designed for their age.",
      },
    },
    {
      title: { fr: "Culte · 11 h", ht: "Sèvis · 11:00", en: "Worship · 11:00" },
      text: {
        fr: "Louange, chorales, prière et prédication biblique. Le culte dure environ une heure et demie.",
        ht: "Lwanj, koral, lapriyè ak predikasyon biblik. Sèvis la dire anviwon inè edmi.",
        en: "Praise, choirs, prayer, and Bible preaching. The service lasts about an hour and a half.",
      },
    },
    {
      title: { fr: "Fraternité", ht: "Fratènite", en: "Fellowship" },
      text: {
        fr: "Restez après le culte pour faire connaissance. Nous aimerions apprendre à vous connaître !",
        ht: "Rete apre sèvis la pou nou fè konesans. Nou ta renmen konnen w !",
        en: "Stay after the service to meet people. We'd love to get to know you!",
      },
    },
  ] satisfies Block[],

  details: [
    {
      title: { fr: "Enfants", ht: "Timoun", en: "Kids" },
      text: {
        fr: "Les enfants participent à l'École du Sabbat dans des classes par âge, avec des moniteurs attentionnés. Ils sont aussi les bienvenus pendant le culte.",
        ht: "Timoun yo patisipe nan Lekòl Saba nan klas selon laj yo, ak monitè ki pran swen yo. Yo byenvini tou pandan sèvis la.",
        en: "Children join age-based Sabbath School classes with caring teachers. They're also welcome during the worship service.",
      },
    },
    {
      title: { fr: "Langues", ht: "Lang", en: "Languages" },
      text: {
        fr: "Nos cultes se déroulent principalement en français et en créole haïtien. Les visiteurs anglophones sont les bienvenus : n'hésitez pas à demander de l'aide à l'accueil.",
        ht: "Sèvis nou yo fèt sitou an fransè ak an kreyòl ayisyen. Vizitè ki pale angle byenvini : pa ezite mande ekip akèy la èd.",
        en: "Our services are mainly in French and Haitian Creole. English-speaking visitors are welcome: just ask our greeters for help.",
      },
    },
    {
      title: { fr: "Tenue", ht: "Rad", en: "What to wear" },
      text: {
        fr: "Beaucoup portent leurs habits du dimanche… pour le sabbat ! Mais venez tels que vous êtes : c'est vous que Dieu attend.",
        ht: "Anpil moun mete bèl rad saba yo. Men, vini jan ou ye a : se ou menm Bondye ap tann.",
        en: "Many people wear their Sabbath best, but come as you are: it's you God is waiting for.",
      },
    },
    {
      title: { fr: "Accessibilité", ht: "Aksè", en: "Accessibility" },
      text: {
        fr: "Vous avez un besoin particulier ? Écrivez-nous avant votre visite et nous nous préparerons à vous accueillir.",
        ht: "Ou gen yon bezwen espesyal ? Ekri nou anvan vizit ou epi n ap prepare nou pou n resevwa w.",
        en: "Have a specific need? Let us know before your visit and we'll be ready to welcome you.",
      },
    },
  ] satisfies Block[],

  faq: [
    {
      question: { fr: "Pourquoi adorez-vous le samedi ?", ht: "Poukisa nou adore samdi ?", en: "Why do you worship on Saturday?" },
      answer: {
        fr: "Le sabbat biblique est le septième jour de la semaine (Genèse 2:2-3; Exode 20:8-11). Jésus lui-même l'observait. Nous le vivons du coucher du soleil vendredi au coucher du soleil samedi comme un cadeau de repos et de communion avec Dieu.",
        ht: "Saba biblik la se setyèm jou semèn nan (Jenèz 2:2-3; Egzòd 20:8-11). Jezi limenm te konn kenbe l. Nou viv li depi solèy kouche vandredi rive solèy kouche samdi kòm yon kado repo ak kominyon ak Bondye.",
        en: "The biblical Sabbath is the seventh day of the week (Genesis 2:2-3; Exodus 20:8-11). Jesus Himself kept it. We observe it from Friday sunset to Saturday sunset as a gift of rest and communion with God.",
      },
    },
    {
      question: { fr: "Dois-je être adventiste pour venir ?", ht: "Èske m bezwen advantis pou m vini ?", en: "Do I need to be Adventist to come?" },
      answer: {
        fr: "Pas du tout ! Tout le monde est bienvenu, quelle que soit votre histoire ou votre foi. Vous pouvez simplement observer, chanter et écouter.",
        ht: "Ditou ! Tout moun byenvini, kèlkeswa istwa w oswa lafwa w. Ou ka annik gade, chante epi koute.",
        en: "Not at all! Everyone is welcome, whatever your story or faith. Feel free to simply observe, sing along, and listen.",
      },
    },
    {
      question: { fr: "Combien de temps dure le programme ?", ht: "Konbyen tan pwogram nan dire ?", en: "How long is the program?" },
      answer: {
        fr: "L'École du Sabbat commence à 9 h 30 et le culte à 11 h. Le culte se termine généralement vers 12 h 30 ou 13 h.",
        ht: "Lekòl Saba kòmanse a 9:30 epi sèvis la a 11:00. Sèvis la konn fini anviwon 12:30 oswa 1:00.",
        en: "Sabbath School begins at 9:30 AM and worship at 11:00 AM. The service usually ends around 12:30 or 1:00 PM.",
      },
    },
    {
      question: { fr: "Devrai-je donner de l'argent ?", ht: "Èske m ap oblije bay lajan ?", en: "Will I be expected to give?" },
      answer: {
        fr: "Non. Une offrande est recueillie pendant le culte, mais les visiteurs ne sont jamais obligés d'y participer. Vous êtes notre invité.",
        ht: "Non. Gen yon ofrann pandan sèvis la, men vizitè yo pa janm oblije bay. Ou se envite nou.",
        en: "No. An offering is collected during worship, but visitors are never expected to give. You are our guest.",
      },
    },
    {
      question: { fr: "Puis-je étudier la Bible ou demander le baptême ?", ht: "Èske m ka etidye Bib la oswa mande batèm ?", en: "Can I study the Bible or ask about baptism?" },
      answer: {
        fr: "Avec joie ! Notre pasteur et nos instructeurs offrent des études bibliques personnelles, gratuites et sans engagement. Écrivez-nous via la page Contact.",
        ht: "Ak kè kontan ! Pastè nou ak enstriktè nou yo ofri etid biblik pèsonèl, gratis, san okenn angajman. Ekri nou nan paj Kontak la.",
        en: "Gladly! Our pastor and Bible workers offer free, personal Bible studies with no strings attached. Reach out through the Contact page.",
      },
    },
  ] satisfies Faq[],

  faqTitle: { fr: "Bonnes questions", ht: "Bon kesyon", en: "Good questions" } satisfies Localized,

  formTitle: { fr: "Prévenez-nous de votre visite", ht: "Fè nou konnen w ap vini", en: "Let us know you're coming" } satisfies Localized,
  formIntro: {
    fr: "Nous vous réserverons un accueil personnalisé et répondrons à vos questions avant le sabbat.",
    ht: "N ap prepare yon akèy espesyal pou ou epi n ap reponn kesyon w yo anvan saba a.",
    en: "We'll prepare a personal welcome and answer any questions before Sabbath.",
  } satisfies Localized,
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutPage = {
  hero: {
    eyebrow: { fr: "À propos", ht: "Konsènan nou", en: "About us" },
    title: { fr: "Une église au pied de la croix", ht: "Yon legliz nan pye lakwa", en: "A church at the foot of the cross" },
    intro: {
      fr: "Adventistes du septième jour de culture franco-haïtienne, nous sommes une famille qui aime Jésus, la Parole et son prochain.",
      ht: "Nou se Advantis Setyèm Jou ki gen kilti franko-ayisyen, yon fanmi ki renmen Jezi, Pawòl la ak pwochen li.",
      en: "Seventh-day Adventists of Franco-Haitian culture, we are a family that loves Jesus, His Word, and our neighbors.",
    },
  } satisfies Hero,

  story: {
    title: { fr: "Notre histoire", ht: "Istwa nou", en: "Our story" },
    paragraphs: [
      {
        fr: "Golgotha est une communauté adventiste du septième jour établie à South Easton, dans le Massachusetts. Nos racines plongent dans la foi des familles haïtiennes et francophones de la région, qui ont voulu adorer Dieu dans la langue de leur cœur.",
        ht: "Golgota se yon kominote advantis setyèm jou ki etabli nan South Easton, Massachusetts. Rasin nou soti nan lafwa fanmi ayisyen ak frankofòn nan zòn nan, ki te vle adore Bondye nan lang kè yo.",
        en: "Golgotha is a Seventh-day Adventist community in South Easton, Massachusetts. Our roots are in the faith of Haitian and French-speaking families in the area who longed to worship God in the language of their hearts.",
      },
      {
        fr: "Aujourd'hui, nous accueillons toutes les générations et toutes les origines. Ensemble, nous étudions la Bible, gardons le sabbat, servons notre ville et attendons avec joie le retour de Jésus.",
        ht: "Jodi a, nou resevwa tout jenerasyon ak tout orijin. Ansanm, nou etidye Bib la, nou kenbe saba a, nou sèvi vil nou an epi nou tann retou Jezi ak kè kontan.",
        en: "Today we welcome every generation and every background. Together we study the Bible, keep the Sabbath, serve our town, and joyfully await Jesus' return.",
      },
    ] satisfies Localized[],
  },

  name: {
    eyebrow: { fr: "Pourquoi « Golgotha » ?", ht: "Poukisa « Golgota » ?", en: "Why \"Golgotha\"?" },
    title: { fr: "Tout commence à la croix", ht: "Tout bagay kòmanse nan lakwa", en: "Everything begins at the cross" },
    text: {
      fr: "Golgotha, « le lieu du crâne », est la colline où Jésus a été crucifié (Matthieu 27:33). Notre nom nous rappelle chaque semaine que notre espérance repose sur son sacrifice, et que c'est au pied de la croix que tous sont égaux et accueillis.",
      ht: "Golgota, « kote ki rele Zo Tèt la », se mòn kote yo te kloure Jezi sou kwa a (Matye 27:33). Non nou fè nou sonje chak semèn ke esperans nou chita sou sakrifis li, e se nan pye lakwa tout moun egal epi tout moun byenvini.",
      en: "Golgotha, \"the place of the skull,\" is the hill where Jesus was crucified (Matthew 27:33). Our name reminds us each week that our hope rests on His sacrifice, and that at the foot of the cross everyone is equal and welcome.",
    },
  },

  values: [
    {
      title: { fr: "La Parole", ht: "Pawòl la", en: "The Word" },
      text: { fr: "La Bible guide notre foi et notre vie.", ht: "Bib la gide lafwa nou ak lavi nou.", en: "The Bible guides our faith and life." },
    },
    {
      title: { fr: "Le sabbat", ht: "Saba a", en: "The Sabbath" },
      text: { fr: "Un rendez-vous hebdomadaire de repos en Dieu.", ht: "Yon randevou chak semèn pou repoze nan Bondye.", en: "A weekly appointment to rest in God." },
    },
    {
      title: { fr: "L'espérance", ht: "Esperans", en: "Hope" },
      text: { fr: "Jésus revient bientôt, et cela change tout.", ht: "Jezi ap tounen byento, e sa chanje tout bagay.", en: "Jesus is coming soon, and that changes everything." },
    },
    {
      title: { fr: "Le service", ht: "Sèvis", en: "Service" },
      text: { fr: "Aimer notre prochain en actes concrets.", ht: "Renmen pwochen nou an aksyon konkrè.", en: "Loving our neighbors in practical ways." },
    },
  ] satisfies Block[],

  adventist: {
    title: { fr: "Les adventistes du septième jour", ht: "Advantis setyèm jou yo", en: "Seventh-day Adventists" },
    text: {
      fr: "L'Église adventiste du septième jour est une église protestante présente dans plus de 200 pays, avec plus de 22 millions de membres. Elle est connue pour son attachement à la Bible, au sabbat, à l'espérance du retour de Christ, ainsi que pour ses écoles, ses hôpitaux et son action humanitaire (ADRA).",
      ht: "Legliz Advantis Setyèm Jou a se yon legliz pwotestan ki nan plis pase 200 peyi, ak plis pase 22 milyon manm. Moun konnen l pou atachman l ak Bib la, saba a, esperans retou Kris la, ansanm ak lekòl li yo, lopital li yo ak travay imanitè li (ADRA).",
      en: "The Seventh-day Adventist Church is a Protestant church in more than 200 countries with over 22 million members. It is known for its commitment to the Bible, the Sabbath, and the hope of Christ's return, as well as its schools, hospitals, and humanitarian work (ADRA).",
    },
  },

  leadershipTitle: { fr: "Notre équipe", ht: "Ekip nou", en: "Our leadership" } satisfies Localized,
};

/* ------------------------------------------------------------------ */
/* Beliefs & heritage                                                  */
/* ------------------------------------------------------------------ */

export const beliefsPage = {
  hero: {
    eyebrow: { fr: "Nos croyances", ht: "Kwayans nou", en: "Our beliefs" },
    title: { fr: "28 vérités, un seul Sauveur", ht: "28 verite, yon sèl Sovè", en: "28 truths, one Savior" },
    intro: {
      fr: "Les adventistes n'ont qu'un seul credo : la Bible. Les 28 croyances fondamentales résument notre compréhension des Écritures, toutes centrées sur Jésus.",
      ht: "Advantis yo gen yon sèl kredo : Bib la. 28 kwayans fondamantal yo rezime jan nou konprann Ekriti yo, e yo tout santre sou Jezi.",
      en: "Adventists have one creed: the Bible. The 28 Fundamental Beliefs summarize our understanding of Scripture, all centered on Jesus.",
    },
  } satisfies Hero,
  hint: {
    fr: "Touchez une croyance pour en lire le résumé et le verset clé.",
    ht: "Peze sou yon kwayans pou li rezime a ak vèsè kle a.",
    en: "Tap a belief to read its summary and key verse.",
  } satisfies Localized,
  source: {
    fr: "Texte complet sur adventist.org",
    ht: "Tèks konplè a sou adventist.org",
    en: "Read the full text at adventist.org",
  } satisfies Localized,
};

export const heritagePage = {
  hero: {
    eyebrow: { fr: "Notre héritage", ht: "Eritaj nou", en: "Our heritage" },
    title: { fr: "La foi, avec l'accent d'Haïti", ht: "Lafwa, ak aksan Ayiti", en: "Faith, with a Haitian accent" },
    intro: {
      fr: "Notre culture franco-haïtienne colore notre façon de chanter, de prier, de recevoir et de vivre l'Évangile.",
      ht: "Kilti franko-ayisyen nou an bay koulè ak jan nou chante, priye, resevwa moun epi viv Bòn Nouvèl la.",
      en: "Our Franco-Haitian culture colors how we sing, pray, welcome, and live out the gospel.",
    },
  } satisfies Hero,
  proverbsEyebrow: { fr: "Sagesse kreyòl", ht: "Sajès kreyòl", en: "Kreyòl wisdom" } satisfies Localized,
  proverbsTitle: { fr: "Proverbes et Parole", ht: "Pwovèb ak Pawòl", en: "Proverbs & Scripture" } satisfies Localized,
  proverbsIntro: {
    fr: "Les proverbes haïtiens portent une sagesse que l'on retrouve souvent dans la Bible. Retournez une carte pour découvrir le verset qui lui répond.",
    ht: "Pwovèb ayisyen yo pote yon sajès nou jwenn souvan nan Bib la. Vire yon kat pou dekouvri vèsè ki reponn li.",
    en: "Haitian proverbs carry wisdom often echoed in the Bible. Flip a card to discover the verse that answers it.",
  } satisfies Localized,
  flip: { fr: "Voir le verset", ht: "Wè vèsè a", en: "See the verse" } satisfies Localized,
  flipBack: { fr: "Retour au proverbe", ht: "Retounen nan pwovèb la", en: "Back to the proverb" } satisfies Localized,
};

/* ------------------------------------------------------------------ */
/* Ministries, events, media                                           */
/* ------------------------------------------------------------------ */

export const ministriesPage = {
  hero: {
    eyebrow: { fr: "Ministères", ht: "Ministè", en: "Ministries" },
    title: { fr: "Trouvez votre place", ht: "Jwenn plas ou", en: "Find your place" },
    intro: {
      fr: "Dieu a donné à chacun des dons pour servir. Découvrez où vous pouvez grandir, vous faire des amis et faire une différence.",
      ht: "Bondye bay chak moun don pou sèvi. Dekouvri kote ou ka grandi, fè zanmi epi fè yon diferans.",
      en: "God has given everyone gifts to serve. Discover where you can grow, make friends, and make a difference.",
    },
  } satisfies Hero,
  joinTitle: { fr: "Envie de vous impliquer ?", ht: "Ou vle patisipe ?", en: "Want to get involved?" } satisfies Localized,
  joinText: {
    fr: "Écrivez-nous et nous vous mettrons en contact avec le responsable du ministère.",
    ht: "Ekri nou epi n ap mete w an kontak ak responsab ministè a.",
    en: "Send us a note and we'll connect you with the ministry leader.",
  } satisfies Localized,
};

export const eventsPage = {
  hero: {
    eyebrow: { fr: "Événements", ht: "Evènman", en: "Events" },
    title: { fr: "Ce qui se passe à Golgotha", ht: "Sa k ap pase nan Golgota", en: "What's happening at Golgotha" },
    intro: {
      fr: "Programmes spéciaux, célébrations et occasions de servir. Ajoutez-les à votre calendrier et invitez vos proches.",
      ht: "Pwogram espesyal, selebrasyon ak okazyon pou sèvi. Ajoute yo nan kalandriye w epi envite moun ou renmen yo.",
      en: "Special programs, celebrations, and chances to serve. Add them to your calendar and invite your loved ones.",
    },
  } satisfies Hero,
};

export const mediaPage = {
  hero: {
    eyebrow: { fr: "Sermons et direct", ht: "Prèch ak dirèk", en: "Sermons & live" },
    title: { fr: "La Parole, où que vous soyez", ht: "Pawòl la, kote w ye a", en: "The Word, wherever you are" },
    intro: {
      fr: "Suivez nos cultes en ligne et revoyez les messages récents pour continuer à grandir pendant la semaine.",
      ht: "Swiv sèvis nou yo sou entènèt epi gade dènye mesaj yo ankò pou w kontinye grandi pandan semèn nan.",
      en: "Join our services online and revisit recent messages to keep growing throughout the week.",
    },
  } satisfies Hero,
  liveTitle: { fr: "En direct chaque sabbat", ht: "An dirèk chak saba", en: "Live every Sabbath" } satisfies Localized,
  liveText: {
    fr: "Retrouvez le culte en direct le samedi dès 11 h.",
    ht: "Swiv sèvis la an dirèk samdi apati 11:00.",
    en: "Watch worship live on Saturdays from 11:00 AM.",
  } satisfies Localized,
  liveSoon: {
    fr: "La diffusion en direct arrive bientôt. En attendant, venez nous voir en personne !",
    ht: "Emisyon an dirèk la ap vini byento. Pandan n ap tann, vin wè nou an pèsòn !",
    en: "Live streaming is coming soon. In the meantime, come see us in person!",
  } satisfies Localized,
  archiveTitle: { fr: "Messages récents", ht: "Dènye mesaj yo", en: "Recent messages" } satisfies Localized,
};

/* ------------------------------------------------------------------ */
/* Give, prayer, contact                                               */
/* ------------------------------------------------------------------ */

export const givePage = {
  hero: {
    eyebrow: { fr: "Dons", ht: "Bay", en: "Give" },
    title: { fr: "Donner avec joie", ht: "Bay ak kè kontan", en: "Give cheerfully" },
    intro: {
      fr: "Vos dîmes et offrandes soutiennent l'annonce de l'Évangile ici à South Easton et jusqu'aux extrémités de la terre.",
      ht: "Ladim ak ofrann ou soutni anons Bòn Nouvèl la isit la nan South Easton rive jouk nan dènye bout latè.",
      en: "Your tithes and offerings support the gospel here in South Easton and to the ends of the earth.",
    },
  } satisfies Hero,
  verse: {
    ref: "2 Corinthians 9:7",
    text: {
      fr: "Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte; car Dieu aime celui qui donne avec joie.",
      ht: "Se pou chak moun bay sa yo te deside nan kè yo, san lapenn, san yo pa santi yo fòse. Paske Bondye renmen moun ki bay ak kè kontan.",
      en: "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.",
    },
  },
  kinds: [
    {
      title: { fr: "La dîme", ht: "Ladim", en: "Tithe" },
      text: {
        fr: "Dix pour cent de nos revenus, rendus à Dieu en reconnaissance qu'il est le propriétaire de tout. La dîme soutient le ministère pastoral et la mission mondiale.",
        ht: "Dis pousan sa nou touche, nou remèt Bondye pou nou rekonèt se li ki mèt tout bagay. Ladim soutni ministè pastoral la ak misyon mondyal la.",
        en: "Ten percent of our income, returned to God in recognition that He owns everything. Tithe supports pastoral ministry and the worldwide mission.",
      },
    },
    {
      title: { fr: "Les offrandes", ht: "Ofrann yo", en: "Offerings" },
      text: {
        fr: "Des dons libres, selon notre cœur, pour le budget de l'église locale, nos ministères, l'entretien du bâtiment et les projets missionnaires.",
        ht: "Kado lib, jan kè nou di nou, pou bidjè legliz lokal la, ministè nou yo, antretyen bilding lan ak pwojè misyonè yo.",
        en: "Freewill gifts from the heart for the local church budget, our ministries, building upkeep, and mission projects.",
      },
    },
  ] satisfies Block[],
  ways: [
    {
      title: { fr: "En ligne", ht: "Sou entènèt", en: "Online" },
      text: {
        fr: "Sur Adventist Giving, la plateforme officielle et sécurisée de l'Église. Recherchez « Golgotha » à South Easton, MA.",
        ht: "Sou Adventist Giving, platfòm ofisyèl ak an sekirite Legliz la. Chèche « Golgotha » nan South Easton, MA.",
        en: "Through Adventist Giving, the Church's official, secure platform. Search for \"Golgotha\" in South Easton, MA.",
      },
    },
    {
      title: { fr: "Pendant le culte", ht: "Pandan sèvis la", en: "During worship" },
      text: {
        fr: "Utilisez une enveloppe de dîme et d'offrande disponible à l'entrée et déposez-la lors de l'offrande.",
        ht: "Pran yon anvlòp ladim ak ofrann nan antre a epi mete l lè ofrann nan ap fèt.",
        en: "Use a tithe and offering envelope from the entrance and place it in the offering.",
      },
    },
    {
      title: { fr: "Par la poste", ht: "Pa lapòs", en: "By mail" },
      text: {
        fr: "Envoyez un chèque à l'ordre de Golgotha SDA Church à l'adresse de l'église.",
        ht: "Voye yon chèk sou non Golgotha SDA Church nan adrès legliz la.",
        en: "Mail a check payable to Golgotha SDA Church to the church address.",
      },
    },
  ] satisfies Block[],
  /** "Other ways to give": mobile payment apps. The account IDs live in content/site.ts (`giving`). */
  digital: {
    eyebrow: { fr: "Autres façons de donner", ht: "Lòt fason pou bay", en: "Other ways to give" },
    title: { fr: "Donner depuis votre téléphone", ht: "Bay depi nan telefòn ou", en: "Give from your phone" },
    intro: {
      fr: "Pas de chéquier ? Envoyez votre dîme ou votre offrande en quelques secondes avec l'une de ces applications.",
      ht: "Pa gen chèkbook ? Voye ladim oswa ofrann ou nan kèk segonn ak youn nan aplikasyon sa yo.",
      en: "No checkbook? Send your tithe or offering in seconds with one of these apps.",
    },
    steps: {
      cashApp: {
        fr: "Ouvrez Cash App, touchez « $ », saisissez le montant, puis envoyez à l'identifiant ci-dessous.",
        ht: "Louvri Cash App, peze « $ », mete montan an, epi voye l bay idantifyan ki anba a.",
        en: "Open Cash App, tap “$”, enter the amount, and send to the tag below.",
      },
      zelle: {
        fr: "Dans l'application de votre banque, choisissez Zelle et envoyez à l'adresse courriel ou au numéro ci-dessous.",
        ht: "Nan aplikasyon labank ou, chwazi Zelle epi voye l bay imèl oswa nimewo ki anba a.",
        en: "In your bank's app, choose Zelle and send to the email or phone number below.",
      },
    },
    pending: {
      fr: "Les coordonnées seront bientôt disponibles. Contactez le secrétariat pour les obtenir.",
      ht: "Enfòmasyon yo ap vini talè konsa. Kontakte sekretarya a pou w jwenn yo.",
      en: "Details are coming soon. Please contact the church secretary to get them.",
    },
    contact: { fr: "contacter le secrétariat", ht: "kontakte sekretarya a", en: "contact the secretary" },
    copy: { fr: "Copier", ht: "Kopye", en: "Copy" },
    copied: { fr: "Copié !", ht: "Kopye !", en: "Copied!" },
    open: { fr: "Ouvrir", ht: "Louvri", en: "Open" },
    memo: {
      title: { fr: "N'oubliez pas la mention", ht: "Pa bliye nòt la", en: "Don't forget the note" },
      text: {
        fr: "Indiquez « Dîme » ou « Offrande » (et votre nom) dans la note pour que votre don soit bien enregistré. Pour un relevé de dons, contactez le secrétariat.",
        ht: "Ekri « Ladim » oswa « Ofrann » (ak non ou) nan nòt la pou yo anrejistre don ou kòrèkteman. Pou jwenn yon relve don, kontakte sekretarya a.",
        en: "Write “Tithe” or “Offering” (and your name) in the note so your gift is recorded correctly. For a giving statement, contact the secretary.",
      },
    },
  },
};

export const prayerPage = {
  hero: {
    eyebrow: { fr: "Requêtes de prière", ht: "Demann lapriyè", en: "Prayer requests" },
    title: { fr: "Vous n'êtes pas seul", ht: "Ou pa poukont ou", en: "You are not alone" },
    intro: {
      fr: "Quelle que soit votre situation, partagez-la avec nous. Notre équipe de prière portera votre requête devant Dieu.",
      ht: "Kèlkeswa sa w ap travèse, pataje l ak nou. Ekip lapriyè nou an pral pote demann ou devan Bondye.",
      en: "Whatever you're facing, share it with us. Our prayer team will bring your request before God.",
    },
  } satisfies Hero,
  verse: {
    ref: "Philippians 4:6-7",
    text: {
      fr: "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. Et la paix de Dieu gardera vos cœurs.",
      ht: "Pa enkyete nou pou anyen. Men, nan tout bagay, lè n ap lapriyè, mande Bondye sa nou bezwen, epi di l mèsi. Konsa, kè poze Bondye a pral pwoteje kè nou.",
      en: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God will guard your hearts.",
    },
  },
  urgentTitle: { fr: "Besoin de parler maintenant ?", ht: "Ou bezwen pale kounye a ?", en: "Need to talk right now?" } satisfies Localized,
  urgentText: {
    fr: "Appelez l'église et laissez un message : un membre de l'équipe pastorale vous rappellera.",
    ht: "Rele legliz la epi kite yon mesaj : yon manm ekip pastoral la ap rele w.",
    en: "Call the church and leave a message: someone from the pastoral team will call you back.",
  } satisfies Localized,
};

export const contactPage = {
  hero: {
    eyebrow: { fr: "Contact", ht: "Kontak", en: "Contact" },
    title: { fr: "Parlons ensemble", ht: "Ann pale", en: "Let's talk" },
    intro: {
      fr: "Une question, une demande d'étude biblique ou simplement envie de dire bonjour ? Nous serons ravis de vous lire.",
      ht: "Yon kesyon, yon demann etid biblik oswa ou annik vle di bonjou ? N ap kontan li w.",
      en: "A question, a Bible study request, or just want to say hello? We'd love to hear from you.",
    },
  } satisfies Hero,
};
