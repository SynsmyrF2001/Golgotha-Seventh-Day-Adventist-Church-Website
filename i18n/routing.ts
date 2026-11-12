import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "ht", "en"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "fr",
  localePrefix: "always",
});

export const localeNames: Record<Locale, { short: string; long: string; htmlLang: string }> = {
  fr: { short: "FR", long: "Français", htmlLang: "fr" },
  ht: { short: "KR", long: "Kreyòl", htmlLang: "ht" },
  en: { short: "EN", long: "English", htmlLang: "en" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
