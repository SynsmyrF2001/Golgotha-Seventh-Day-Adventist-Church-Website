import type { Locale } from "@/i18n/routing";

/** Every piece of editorial text is written in all three languages. */
export type Localized = Record<Locale, string>;

export function loc(value: Localized, locale: Locale): string {
  return value[locale] || value.fr;
}

export type ScheduleItem = {
  id: string;
  /** 24-hour time, e.g. "09:30" */
  time: string;
  title: Localized;
  description: Localized;
};

export type MinistryCategory = "children" | "youth" | "adults" | "service" | "worship";

export type Ministry = {
  slug: string;
  category: MinistryCategory;
  /** Accent color for the card, one of the theme names */
  accent: "onyx" | "maroon" | "gold" | "onyx-soft";
  name: Localized;
  tagline: Localized;
  description: Localized;
  meets: Localized;
  leader: string;
  verse: { ref: string; text: Localized };
  highlights: Localized[];
};

export type ChurchEvent = {
  id: string;
  title: Localized;
  description: Localized;
  /** YYYY-MM-DD */
  date: string;
  /** optional last day for multi-day events, YYYY-MM-DD */
  endDate?: string;
  /** 24-hour times in church local time */
  start: string;
  end: string;
  location?: string;
  ministry?: string;
  featured?: boolean;
};

export type Sermon = {
  id: string;
  title: Localized;
  speaker: string;
  /** YYYY-MM-DD */
  date: string;
  series?: Localized;
  passage: string;
  summary: Localized;
  /** The part after "watch?v=" in a YouTube link. Leave empty until the video is posted. */
  youtubeId: string;
};

export type Leader = {
  name: string;
  role: Localized;
  bio?: Localized;
  photo?: string;
};
