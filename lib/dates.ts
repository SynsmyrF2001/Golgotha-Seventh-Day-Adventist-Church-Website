import type { ChurchEvent } from "@/content/types";

/** Today's date (YYYY-MM-DD) in the given time zone. */
export function todayIn(timeZone: string, at = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(at);
}

export function isUpcoming(event: ChurchEvent, today: string): boolean {
  return (event.endDate ?? event.date) >= today;
}

/** Week number since a fixed epoch, used to rotate content weekly. */
export function weekIndex(at = new Date()): number {
  return Math.floor((at.getTime() - Date.UTC(2024, 0, 6)) / (7 * 86_400_000));
}
