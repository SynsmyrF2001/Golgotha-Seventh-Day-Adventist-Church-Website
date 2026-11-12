import type { Locale } from "@/i18n/routing";

const htMonths = ["janvye", "fevriye", "mas", "avril", "me", "jen", "jiyè", "out", "septanm", "oktòb", "novanm", "desanm"];
const htDays = ["dimanch", "lendi", "madi", "mèkredi", "jedi", "vandredi", "samdi"];

const intlLocale: Record<Exclude<Locale, "ht">, string> = { fr: "fr-FR", en: "en-US" };

/** Parses "YYYY-MM-DD" as a calendar date (no time zone shifting). */
export function parseDay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d, weekday: new Date(Date.UTC(y, m - 1, d)).getUTCDay() };
}

/** "09:30" -> "9 h 30" (fr), "9:30 AM" (ht, en) */
export function formatTime(time: string, locale: Locale): string {
  const [h, m] = time.split(":").map(Number);
  const mm = String(m).padStart(2, "0");
  if (locale === "fr") return m === 0 ? `${h} h` : `${h} h ${mm}`;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mm} ${h < 12 ? "AM" : "PM"}`;
}

export function formatDate(
  iso: string,
  locale: Locale,
  opts: { weekday?: boolean; year?: boolean; month?: "long" | "short" } = {},
): string {
  const { y, m, d, weekday } = parseDay(iso);
  const month = opts.month ?? "long";

  if (locale === "ht") {
    const monthName = month === "short" ? htMonths[m - 1].slice(0, 3) : htMonths[m - 1];
    const parts = [opts.weekday ? `${htDays[weekday]}` : "", `${d} ${monthName}`, opts.year ? String(y) : ""];
    return parts.filter(Boolean).join(" ");
  }

  const formatted = new Intl.DateTimeFormat(intlLocale[locale], {
    timeZone: "UTC",
    day: "numeric",
    month,
    weekday: opts.weekday ? "long" : undefined,
    year: opts.year ? "numeric" : undefined,
  }).format(new Date(Date.UTC(y, m - 1, d)));
  return locale === "fr" && d === 1 ? formatted.replace(/(^|\s)1(\s)/, "$11er$2") : formatted;
}

export function formatMonthShort(iso: string, locale: Locale): string {
  const { m } = parseDay(iso);
  if (locale === "ht") return htMonths[m - 1].slice(0, 3);
  return new Intl.DateTimeFormat(intlLocale[locale], { month: "short", timeZone: "UTC" })
    .format(new Date(Date.UTC(2000, m - 1, 15)))
    .replace(".", "");
}

/** Formats an absolute instant as a clock time in the church's time zone. */
export function formatInstant(date: Date, locale: Locale, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", minute: "2-digit", hour12: false }).formatToParts(date);
  const h = parts.find((p) => p.type === "hour")?.value ?? "0";
  const m = parts.find((p) => p.type === "minute")?.value ?? "00";
  return formatTime(`${Number(h) % 24}:${m}`, locale);
}
