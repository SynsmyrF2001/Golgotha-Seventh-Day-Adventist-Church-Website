import type { Leader } from "./types";

/**
 * Church leadership shown on the About page.
 * Leave `name` empty to show "to be confirmed". Add a `photo` path like "/images/leaders/pastor.jpg".
 */
export const leaders: Leader[] = [
  {
    name: "Antoine Nyobe Nyobe",
    role: { fr: "Pasteur", ht: "Pastè", en: "Pastor" },
    bio: {
      fr: "Le pasteur Nyobe Nyobe a à cœur de voir chaque membre grandir dans la Parole et servir avec joie.",
      ht: "Pastè Nyobe Nyobe gen anvi wè chak manm grandi nan Pawòl la epi sèvi ak kè kontan.",
      en: "Pastor Nyobe Nyobe's heart is to see every member grow in the Word and serve with joy.",
    },
  },
  { name: "", role: { fr: "Premier ancien", ht: "Premye ansyen", en: "Head Elder" } },
  { name: "", role: { fr: "Secrétaire de l'église", ht: "Sekretè legliz la", en: "Church Clerk" } },
  { name: "", role: { fr: "Trésorier", ht: "Trezorye", en: "Treasurer" } },
  { name: "", role: { fr: "Directeur de l'École du Sabbat", ht: "Direktè Lekòl Saba", en: "Sabbath School Superintendent" } },
  { name: "", role: { fr: "Directeur de la jeunesse", ht: "Direktè jèn yo", en: "Youth Director" } },
];
