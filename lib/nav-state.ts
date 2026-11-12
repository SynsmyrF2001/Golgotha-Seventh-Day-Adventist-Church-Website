/**
 * Tiny client-side memory of "where we just came from", so transitions can tell
 * apart a first load, a normal page change, and a language switch.
 *
 * All reads are pure (safe to call during render, including React StrictMode's
 * double render); the locale is only recorded after commit via `commitLocale`.
 * On the server nothing is ever committed, so server output is always "initial".
 */
export type NavMode = "initial" | "page" | "lang";

let committedLocale: string | null = null;

export function navMode(locale: string): NavMode {
  if (committedLocale === null) return "initial";
  return committedLocale === locale ? "page" : "lang";
}

export function commitLocale(locale: string) {
  committedLocale = locale;
}
