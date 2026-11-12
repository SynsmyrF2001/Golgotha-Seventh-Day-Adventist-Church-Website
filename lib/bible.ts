import type { Locale } from "@/i18n/routing";

/** English book name -> [French, Haitian Creole] */
const books: Record<string, [string, string]> = {
  Genesis: ["Genèse", "Jenèz"],
  Exodus: ["Exode", "Egzòd"],
  Leviticus: ["Lévitique", "Levitik"],
  Deuteronomy: ["Deutéronome", "Detewonòm"],
  Joshua: ["Josué", "Jozye"],
  Psalm: ["Psaume", "Sòm"],
  Psalms: ["Psaumes", "Sòm"],
  Proverbs: ["Proverbes", "Pwovèb"],
  Ecclesiastes: ["Ecclésiaste", "Eklezyas"],
  Isaiah: ["Ésaïe", "Ezayi"],
  Jeremiah: ["Jérémie", "Jeremi"],
  Lamentations: ["Lamentations", "Lamantasyon"],
  Daniel: ["Daniel", "Danyèl"],
  Joel: ["Joël", "Jowèl"],
  Micah: ["Michée", "Miche"],
  Zephaniah: ["Sophonie", "Sofoni"],
  Zechariah: ["Zacharie", "Zakari"],
  Malachi: ["Malachie", "Malachi"],
  Matthew: ["Matthieu", "Matye"],
  Mark: ["Marc", "Mak"],
  Luke: ["Luc", "Lik"],
  John: ["Jean", "Jan"],
  Acts: ["Actes", "Travay"],
  Romans: ["Romains", "Women"],
  "1 Corinthians": ["1 Corinthiens", "1 Korentyen"],
  "2 Corinthians": ["2 Corinthiens", "2 Korentyen"],
  Galatians: ["Galates", "Galat"],
  Ephesians: ["Éphésiens", "Efezyen"],
  Philippians: ["Philippiens", "Filipyen"],
  Colossians: ["Colossiens", "Kolosyen"],
  "1 Thessalonians": ["1 Thessaloniciens", "1 Tesalonisyen"],
  "1 Timothy": ["1 Timothée", "1 Timote"],
  "2 Timothy": ["2 Timothée", "2 Timote"],
  Titus: ["Tite", "Tit"],
  Hebrews: ["Hébreux", "Ebre"],
  James: ["Jacques", "Jak"],
  "1 Peter": ["1 Pierre", "1 Pyè"],
  "2 Peter": ["2 Pierre", "2 Pyè"],
  "1 John": ["1 Jean", "1 Jan"],
  "3 John": ["3 Jean", "3 Jan"],
  Revelation: ["Apocalypse", "Revelasyon"],
};

/** "Psalm 119:105" -> "Psaume 119:105" (fr) / "Sòm 119:105" (ht) */
export function formatRef(ref: string, locale: Locale): string {
  if (locale === "en") return ref;
  const match = ref.match(/^(.+?)\s+(\d[\d:;,\-\s–]*)$/);
  if (!match) return ref;
  const [, book, rest] = match;
  const names = books[book];
  if (!names) return ref;
  return `${locale === "fr" ? names[0] : names[1]} ${rest}`;
}
