import type { ChurchEvent } from "./types";

/**
 * Church calendar. Past events move to the "Past" tab automatically.
 * `ministry` is optional and must match a slug from ministries.ts.
 *
 * SAMPLE DATA: replace these with the church's real calendar.
 */
export const events: ChurchEvent[] = [
  {
    id: "investiture-2026",
    title: { fr: "Investiture des Éclaireurs et Aventuriers", ht: "Envestiti Eklerè ak Avantirye yo", en: "Pathfinder & Adventurer Investiture" },
    description: {
      fr: "Célébrons nos jeunes qui ont complété leurs classes et spécialités cette année.",
      ht: "Ann selebre jèn nou yo ki fini klas ak espesyalite yo ane sa a.",
      en: "Celebrating our young people who completed their classes and honors this year.",
    },
    date: "2026-10-24",
    start: "15:00",
    end: "17:00",
    ministry: "pathfinders",
  },
  {
    id: "week-of-prayer-2026",
    title: { fr: "Semaine de prière", ht: "Semèn lapriyè", en: "Week of Prayer" },
    description: {
      fr: "Huit soirées de méditation, de témoignages et de prière pour clôturer l'année dans la présence de Dieu.",
      ht: "Uit swa meditasyon, temwayaj ak lapriyè pou nou fèmen ane a nan prezans Bondye.",
      en: "Eight evenings of devotion, testimony, and prayer to close the year in God's presence.",
    },
    date: "2026-11-07",
    endDate: "2026-11-14",
    start: "19:00",
    end: "20:30",
    featured: true,
  },
  {
    id: "communion-nov-2026",
    title: { fr: "Service de Sainte Cène", ht: "Sèvis Sentsèn", en: "Communion Service" },
    description: {
      fr: "Service d'humilité (lavement des pieds) et Sainte Cène pendant le culte. Tous les croyants sont invités à la table du Seigneur.",
      ht: "Sèvis imilite (lave pye) ak Sentsèn pandan sèvis adorasyon an. Tout kwayan envite sou tab Seyè a.",
      en: "Ordinance of humility (foot washing) and the Lord's Supper during worship. All believers are invited to the Lord's table.",
    },
    date: "2026-11-14",
    start: "11:00",
    end: "13:30",
  },
  {
    id: "food-baskets-2026",
    title: { fr: "Distribution de paniers de Thanksgiving", ht: "Distribisyon panyen Thanksgiving", en: "Thanksgiving Food Basket Drive" },
    description: {
      fr: "Préparons et distribuons des paniers garnis pour les familles de notre quartier. Bénévoles bienvenus !",
      ht: "Ann prepare epi distribye panyen manje pou fanmi nan katye nou an. Volontè byenvini !",
      en: "Packing and delivering food baskets for families in our neighborhood. Volunteers welcome!",
    },
    date: "2026-11-22",
    start: "10:00",
    end: "14:00",
    ministry: "community-services",
  },
  {
    id: "christmas-cantata-2026",
    title: { fr: "Cantate de Noël", ht: "Kantat Nwèl", en: "Christmas Cantata" },
    description: {
      fr: "Nos chorales célèbrent la naissance du Sauveur en musique, en français, en créole et en anglais. Invitez vos amis !",
      ht: "Koral nou yo selebre nesans Sovè a an mizik, an fransè, an kreyòl ak an angle. Envite zanmi ou yo !",
      en: "Our choirs celebrate the Savior's birth in song, in French, Creole, and English. Bring your friends!",
    },
    date: "2026-12-19",
    start: "16:00",
    end: "18:30",
    ministry: "music",
    featured: true,
  },
  {
    id: "new-year-2027",
    title: { fr: "Culte du Nouvel An et soupe joumou", ht: "Sèvis Nouvèl Ane ak soup joumou", en: "New Year's Service & Soup Joumou" },
    description: {
      fr: "Commençons 2027 dans la louange, puis partageons la traditionnelle soupe joumou en souvenir de l'indépendance d'Haïti et de la liberté que nous avons en Christ.",
      ht: "Ann kòmanse 2027 nan lwanj, epi pataje soup joumou tradisyonèl la pou nou sonje endepandans Ayiti ak libète nou genyen nan Kris.",
      en: "Let's begin 2027 in praise, then share traditional soup joumou in memory of Haiti's independence and the freedom we have in Christ.",
    },
    date: "2027-01-01",
    start: "10:00",
    end: "13:00",
    featured: true,
  },
  {
    id: "couples-night-2027",
    title: { fr: "Soirée des couples", ht: "Aswè koup yo", en: "Couples' Night" },
    description: {
      fr: "Un dîner, des échanges et un message pour fortifier votre couple.",
      ht: "Yon dine, yon ti pale ak yon mesaj pou fòtifye koup ou.",
      en: "Dinner, conversation, and a message to strengthen your marriage.",
    },
    date: "2027-02-14",
    start: "18:00",
    end: "21:00",
    ministry: "family",
  },
  {
    id: "youth-week-of-prayer-2027",
    title: { fr: "Semaine de prière de la jeunesse", ht: "Semèn lapriyè jèn yo", en: "Youth Week of Prayer" },
    description: {
      fr: "Nos jeunes prêchent, chantent et prient. Une semaine pour toute l'église.",
      ht: "Jèn nou yo preche, chante epi priye. Yon semèn pou tout legliz la.",
      en: "Our young people preach, sing, and pray. A week for the whole church.",
    },
    date: "2027-03-20",
    endDate: "2027-03-27",
    start: "19:00",
    end: "20:30",
    ministry: "adventist-youth",
  },
];

export function sortedEvents() {
  return [...events].sort((a, b) => a.date.localeCompare(b.date));
}
