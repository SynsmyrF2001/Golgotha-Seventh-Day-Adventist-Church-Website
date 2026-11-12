"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CalendarPlus, Check, Clock, Share2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getMinistry } from "@/content/ministries";
import { fullAddress, site } from "@/content/site";
import type { ChurchEvent } from "@/content/types";
import { loc } from "@/content/types";
import { cn } from "@/lib/cn";
import { formatDate, formatMonthShort, formatTime, parseDay } from "@/lib/format";
import { buildIcs, downloadIcs } from "@/lib/ics";

export function EventCard({ event, compact = false, past = false }: { event: ChurchEvent; compact?: boolean; past?: boolean }) {
  const locale = useLocale();
  const t = useTranslations("cta");
  const [copied, setCopied] = useState(false);
  const title = loc(event.title, locale);
  const description = loc(event.description, locale);
  const ministry = event.ministry ? getMinistry(event.ministry) : undefined;
  const { d } = parseDay(event.date);

  const dateLabel = event.endDate
    ? `${formatDate(event.date, locale, { month: "long" })} – ${formatDate(event.endDate, locale, { month: "long", year: true })}`
    : formatDate(event.date, locale, { weekday: true, year: true });

  const url = () => `${window.location.origin}/${locale}/events/#${event.id}`;

  const addToCalendar = () => {
    const ics = buildIcs(event, {
      title: `${title} | Golgotha`,
      description,
      location: event.location ?? `Golgotha SDA Church, ${fullAddress}`,
      url: url(),
      timeZone: site.timeZone,
    });
    downloadIcs(`${event.id}.ics`, ics);
  };

  const share = async () => {
    const data = { title, text: description, url: url() };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        /* dismissed */
      }
      return;
    }
    await navigator.clipboard.writeText(data.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      id={event.id}
      className={cn(
        "group relative flex scroll-mt-28 gap-5 rounded-3xl bg-card p-5 ring-1 ring-onyx/10 transition-shadow hover:shadow-xl hover:shadow-onyx/10 sm:gap-7 sm:p-7",
        past && "opacity-70",
      )}
    >
      <div
        className={cn(
          "flex w-20 shrink-0 flex-col items-center justify-center self-start rounded-2xl py-4 sm:w-24",
          event.featured && !past ? "bg-maroon text-paper" : "bg-onyx text-paper",
        )}
      >
        <span className="headline text-5xl sm:text-6xl">{d}</span>
        <span className="mt-1 text-xs font-bold tracking-[0.2em] uppercase">{formatMonthShort(event.date, locale)}</span>
      </div>

      <div className="min-w-0 flex-1">
        {ministry && (
          <Link
            href={`/ministries/${ministry.slug}`}
            className="eyebrow relative z-10 text-maroon hover:underline"
          >
            {loc(ministry.name, locale)}
          </Link>
        )}
        <h3 className="mt-1 text-xl font-bold text-onyx sm:text-2xl">{title}</h3>
        <p className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-ink/72">
          <Clock className="size-4" aria-hidden />
          <span className="first-letter:uppercase">{dateLabel}</span>
          <span aria-hidden>·</span>
          <span>
            {formatTime(event.start, locale)} – {formatTime(event.end, locale)}
          </span>
        </p>
        {!compact && <p className="mt-3 leading-relaxed text-ink/75">{description}</p>}

        {!past && (
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={addToCalendar}
              className="inline-flex items-center gap-2 rounded-none border border-onyx/20 px-4 py-2 text-sm font-semibold text-onyx transition-colors hover:border-onyx hover:bg-onyx hover:text-paper"
            >
              <CalendarPlus className="size-4" aria-hidden />
              {t("addToCalendar")}
            </button>
            <button
              type="button"
              onClick={share}
              className="inline-flex items-center gap-2 rounded-none border border-onyx/20 px-4 py-2 text-sm font-semibold text-onyx transition-colors hover:border-onyx hover:bg-onyx hover:text-paper"
            >
              {copied ? <Check className="size-4" aria-hidden /> : <Share2 className="size-4" aria-hidden />}
              <span aria-live="polite">{copied ? t("copied") : t("share")}</span>
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
