import { getTimes } from "suncalc";

const DAY = 86_400_000;

function calendarDateIn(timeZone: string, at: Date) {
  const [y, m, d] = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" })
    .format(at)
    .split("-")
    .map(Number);
  return { y, m, d };
}

/** Sunset on a calendar day (given as a UTC midnight Date) at the given location. */
function sunsetOn(calendarDay: Date, lat: number, lng: number): Date {
  const aroundLocalNoon = new Date(calendarDay.getTime() + 17 * 3_600_000);
  return getTimes(aroundLocalNoon, lat, lng).sunset ?? new Date(calendarDay.getTime() + 23 * 3_600_000);
}

export type SabbathStatus = {
  inSabbath: boolean;
  start: Date;
  end: Date;
};

/** The current Sabbath (if we are in it) or the next one, from Friday sunset to Saturday sunset. */
export function getSabbathStatus(nowMs: number, lat: number, lng: number, timeZone: string): SabbathStatus {
  const { y, m, d } = calendarDateIn(timeZone, new Date(nowMs));

  for (let offset = -1; offset <= 8; offset++) {
    const day = new Date(Date.UTC(y, m - 1, d + offset));
    if (day.getUTCDay() !== 5) continue;
    const start = sunsetOn(day, lat, lng);
    const end = sunsetOn(new Date(day.getTime() + DAY), lat, lng);
    if (nowMs < end.getTime()) {
      return { inSabbath: nowMs >= start.getTime(), start, end };
    }
  }
  throw new Error("Unable to compute the Sabbath window");
}

export function splitDuration(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86_400),
    hours: Math.floor((total % 86_400) / 3_600),
    minutes: Math.floor((total % 3_600) / 60),
    seconds: total % 60,
  };
}
