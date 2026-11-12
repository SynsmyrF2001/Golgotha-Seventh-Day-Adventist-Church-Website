"use client";

import { useLocale, useTranslations } from "next-intl";
import { site } from "@/content/site";
import { formatInstant } from "@/lib/format";
import { getSabbathStatus, splitDuration } from "@/lib/sabbath";
import { useNowSeconds } from "@/lib/useClient";
import { cn } from "@/lib/cn";

export function SabbathCountdown() {
  const t = useTranslations("countdown");
  const locale = useLocale();
  const now = useNowSeconds();

  const status = now ? getSabbathStatus(now, site.geo.lat, site.geo.lng, site.timeZone) : null;
  const target = status ? (status.inSabbath ? status.end : status.start) : null;
  const parts = target ? splitDuration(target.getTime() - now) : null;

  const units = [
    { key: "days", value: parts?.days },
    { key: "hours", value: parts?.hours },
    { key: "minutes", value: parts?.minutes },
    { key: "seconds", value: parts?.seconds },
  ] as const;

  return (
    <section
      aria-labelledby="sabbath-countdown"
      className={cn(
        "relative isolate overflow-hidden py-20 text-paper transition-colors duration-700 sm:py-28",
        status?.inSabbath ? "bg-maroon-dark" : "bg-onyx-deep",
      )}
    >
      <div aria-hidden className="grain absolute inset-0 -z-10 opacity-40" />
      <div
        aria-hidden
        className="absolute -bottom-[60%] left-1/2 -z-10 aspect-square w-[120%] -translate-x-1/2 rounded-full bg-linear-to-t from-gold/40 via-maroon/20 to-transparent blur-2xl"
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div className="max-w-xl">
          <p className="eyebrow mb-4 text-gold">{t("eyebrow")}</p>
          <h2 id="sabbath-countdown" className="headline text-[clamp(2.25rem,5vw,4.25rem)]">
            {status?.inSabbath ? t("endsIn") : t("startsIn")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-paper/80">{t("note")}</p>
          <p className="mt-4 font-serif text-lg text-gold-soft italic">{t("verse")}</p>
        </div>

        <div>
          <ol className="grid grid-cols-4 gap-2 sm:gap-4" aria-live="off">
            {units.map((u) => (
              <li key={u.key} className="flex flex-col items-center rounded-2xl border border-paper/15 bg-paper/5 px-3 py-5 backdrop-blur sm:min-w-28 sm:px-5 sm:py-7">
                <span className="headline text-[clamp(2.5rem,7vw,5rem)] tabular-nums">
                  {u.value === undefined ? "--" : String(u.value).padStart(2, "0")}
                </span>
                <span className="mt-2 text-[0.65rem] font-semibold tracking-[0.18em] text-paper/70 uppercase sm:text-xs">
                  {t(u.key)}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-col gap-1 text-sm text-paper/75 sm:flex-row sm:justify-between sm:gap-6">
            <p>{t("sunsetFriday", { time: status ? formatInstant(status.start, locale, site.timeZone) : "--" })}</p>
            <p>{t("sunsetSaturday", { time: status ? formatInstant(status.end, locale, site.timeZone) : "--" })}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
