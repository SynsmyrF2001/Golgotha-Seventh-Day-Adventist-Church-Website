import type { Sermon } from "./types";

/**
 * Sermon archive, newest first is not required (the site sorts by date).
 * Paste the YouTube video ID into `youtubeId` once the recording is online.
 *
 * SAMPLE DATA: replace these with real sermons.
 */
export const sermons: Sermon[] = [
  {
    id: "2026-10-31",
    title: { fr: "Une espérance qui ne déçoit pas", ht: "Yon esperans ki pa janm desevwa", en: "A Hope That Does Not Disappoint" },
    speaker: "Antoine Nyobe Nyobe",
    date: "2026-10-31",
    series: { fr: "Bienheureuse espérance", ht: "Esperans beni a", en: "The Blessed Hope" },
    passage: "Romans 5:1-5",
    summary: {
      fr: "Comment l'espérance du retour de Christ transforme nos épreuves d'aujourd'hui.",
      ht: "Kijan esperans retou Kris la chanje eprèv nou jodi a.",
      en: "How the hope of Christ's return transforms our trials today.",
    },
    youtubeId: "",
  },
  {
    id: "2026-10-24",
    title: { fr: "Le repos qui guérit", ht: "Repo ki geri", en: "The Rest That Heals" },
    speaker: "Antoine Nyobe Nyobe",
    date: "2026-10-24",
    series: { fr: "Bienheureuse espérance", ht: "Esperans beni a", en: "The Blessed Hope" },
    passage: "Matthew 11:28-30",
    summary: {
      fr: "Le sabbat, un rendez-vous hebdomadaire avec Celui qui donne le vrai repos.",
      ht: "Saba a, yon randevou chak semèn ak Sila a ki bay vrè repo a.",
      en: "The Sabbath, a weekly appointment with the One who gives true rest.",
    },
    youtubeId: "",
  },
  {
    id: "2026-10-17",
    title: { fr: "Debout sur la montagne", ht: "Kanpe sou mòn nan", en: "Standing on the Mountain" },
    speaker: "Antoine Nyobe Nyobe",
    date: "2026-10-17",
    passage: "Psalm 121:1-2",
    summary: {
      fr: "« Dèyè mòn gen mòn » : quand les difficultés se succèdent, d'où vient notre secours ?",
      ht: "« Dèyè mòn gen mòn » : lè difikilte yo youn dèyè lòt, ki bò sekou nou soti ?",
      en: "\"Beyond mountains, more mountains\": when hardships keep coming, where does our help come from?",
    },
    youtubeId: "",
  },
  {
    id: "2026-10-10",
    title: { fr: "Main dans la main", ht: "Men nan men", en: "Hand in Hand" },
    speaker: "Antoine Nyobe Nyobe",
    date: "2026-10-10",
    series: { fr: "L'Église que Dieu rêve", ht: "Legliz Bondye reve a", en: "The Church God Dreams Of" },
    passage: "Galatians 6:2",
    summary: {
      fr: "« Men anpil, chay pa lou » : porter les fardeaux les uns des autres.",
      ht: "« Men anpil, chay pa lou » : pote chay youn lòt.",
      en: "\"Many hands make the load light\": bearing one another's burdens.",
    },
    youtubeId: "",
  },
];

export function sortedSermons() {
  return [...sermons].sort((a, b) => b.date.localeCompare(a.date));
}
