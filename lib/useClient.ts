"use client";

import { useSyncExternalStore } from "react";
import { todayIn, weekIndex } from "./dates";

const noopSubscribe = () => () => {};

/** Today's date in the church time zone; `fallback` (the build date) is used while prerendering. */
export function useToday(timeZone: string, fallback: string): string {
  return useSyncExternalStore(noopSubscribe, () => todayIn(timeZone), () => fallback);
}

export function useWeekIndex(fallback: number): number {
  return useSyncExternalStore(noopSubscribe, () => weekIndex(), () => fallback);
}

function subscribeSeconds(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}

/** Current time, ticking once per second. Returns 0 while prerendering. */
export function useNowSeconds(): number {
  return useSyncExternalStore(subscribeSeconds, () => Math.floor(Date.now() / 1000) * 1000, () => 0);
}
