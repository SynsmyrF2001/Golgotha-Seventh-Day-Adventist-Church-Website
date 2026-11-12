import type { Localized, ScheduleItem } from "./types";

/**
 * Core church information used across the whole site.
 * Leave a link as "" to hide it until it is ready.
 */
export const site = {
  shortName: "Golgotha",
  name: "Golgotha SDA Church",
  fullName: {
    fr: "Église Adventiste du Septième Jour Golgotha",
    ht: "Legliz Advantis Setyèm Jou Golgota",
    en: "Golgotha Seventh-day Adventist Church",
  } satisfies Localized,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://golgotha-sda.vercel.app",

  pastor: "Antoine Nyobe Nyobe",

  address: {
    street: "351 Depot St",
    city: "South Easton",
    region: "MA",
    postalCode: "02375",
    country: "US",
  },
  /** Used for the Sabbath sunset countdown */
  geo: { lat: 42.031, lng: -71.1 },
  timeZone: "America/New_York",

  phone: "508-297-1658",
  phoneHref: "tel:+15082971658",
  email: "golgothasdachurch.secretariat@gmail.com",

  social: {
    youtube: "",
    facebook: "",
    instagram: "",
  },
  /** YouTube channel live link, e.g. "https://www.youtube.com/@yourchannel/live" */
  liveStreamUrl: "",
  givingUrl: "https://adventistgiving.org/",

  /**
   * Mobile payment accounts shown on the Give page.
   * - cashApp: the $Cashtag, e.g. "$GolgothaSDA"
   * - zelle: the email address or phone number registered with Zelle
   * Until filled in, each card tells visitors to contact the secretary.
   */
  giving: {
    cashApp: "",
    zelle: "",
  },
  adventistUrl: "https://www.adventist.org/",

  /**
   * Formspree form IDs (the part after formspree.io/f/).
   * While empty, forms open the visitor's email app addressed to the church secretary.
   */
  forms: {
    visit: "",
    prayer: "",
    contact: "",
  },
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
const mapsQuery = encodeURIComponent(fullAddress);
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

/** The Sabbath (Saturday) schedule. Add afternoon or midweek programs here when confirmed. */
export const sabbathSchedule: ScheduleItem[] = [
  {
    id: "sabbath-school",
    time: "09:30",
    title: { fr: "École du Sabbat", ht: "Lekòl Saba", en: "Sabbath School" },
    description: {
      fr: "Étude biblique interactive en classes pour tous les âges : enfants, jeunes et adultes.",
      ht: "Etid biblik an klas pou tout laj : timoun, jèn ak granmoun.",
      en: "Interactive Bible study in classes for every age: children, youth, and adults.",
    },
  },
  {
    id: "divine-service",
    time: "11:00",
    title: { fr: "Service de culte", ht: "Sèvis adorasyon", en: "Divine Worship" },
    description: {
      fr: "Louange, chorales, prière et prédication de la Parole de Dieu.",
      ht: "Lwanj, koral, lapriyè ak predikasyon Pawòl Bondye a.",
      en: "Praise, choirs, prayer, and the preaching of God's Word.",
    },
  },
];

export const heroWords: Localized[] = [
  { fr: "Venez.", ht: "Vini.", en: "Come." },
  { fr: "Adorez.", ht: "Adore.", en: "Worship." },
  { fr: "Grandissez.", ht: "Grandi.", en: "Grow." },
  { fr: "Servez.", ht: "Sèvi.", en: "Serve." },
];

export const heroTagline: Localized = {
  fr: "Une famille de foi franco-haïtienne à South Easton, enracinée dans la Parole et tournée vers le retour de Jésus.",
  ht: "Yon fanmi lafwa franko-ayisyen nan South Easton, ki anrasinen nan Pawòl la epi k ap tann retou Jezi.",
  en: "A Franco-Haitian family of faith in South Easton, rooted in the Word and looking forward to Jesus' return.",
};

export const missionStatement: Localized = {
  fr: "Golgotha existe pour faire connaître l'amour de Christ, former des disciples et préparer un peuple pour son retour.",
  ht: "Golgota egziste pou fè moun konnen lanmou Kris, fòme disip epi prepare yon pèp pou retou li.",
  en: "Golgotha exists to share the love of Christ, make disciples, and prepare a people for His return.",
};

export const marqueeWords: Localized[] = [
  { fr: "Bienvenue", ht: "Byenvini", en: "Welcome" },
  { fr: "Bon sabbat", ht: "Bon saba", en: "Happy Sabbath" },
  { fr: "Jésus revient", ht: "Jezi ap tounen", en: "Jesus is coming" },
  { fr: "Une famille", ht: "Yon fanmi", en: "One family" },
  { fr: "Espérance", ht: "Esperans", en: "Hope" },
];
