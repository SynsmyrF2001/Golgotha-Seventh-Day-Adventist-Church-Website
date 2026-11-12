"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { sortedSermons } from "@/content/sermons";
import { loc } from "@/content/types";
import { formatRef } from "@/lib/bible";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function SermonGrid() {
  const locale = useLocale();
  const t = useTranslations("common");
  const sermons = sortedSermons();
  const [series, setSeries] = useState("all");
  const [speaker, setSpeaker] = useState("all");

  const seriesOptions = [...new Map(sermons.filter((s) => s.series).map((s) => [s.series!.fr, loc(s.series!, locale)])).entries()];
  const speakers = [...new Set(sermons.map((s) => s.speaker))];
  const visible = sermons.filter((s) => (series === "all" || s.series?.fr === series) && (speaker === "all" || s.speaker === speaker));

  const selectClass = "rounded-none bg-card px-4 py-2.5 text-sm font-semibold text-onyx ring-1 ring-onyx/15 outline-none focus:ring-onyx";

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {seriesOptions.length > 0 && (
          <label className="flex items-center gap-2 text-sm text-ink/70">
            {t("series")}
            <select value={series} onChange={(e) => setSeries(e.target.value)} className={selectClass}>
              <option value="all">{t("all")}</option>
              {seriesOptions.map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        )}
        {speakers.length > 1 && (
          <label className="flex items-center gap-2 text-sm text-ink/70">
            {t("speaker")}
            <select value={speaker} onChange={(e) => setSpeaker(e.target.value)} className={selectClass}>
              <option value="all">{t("all")}</option>
              {speakers.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s, i) => {
          const title = loc(s.title, locale);
          return (
            <li key={s.id} className={cn("flex flex-col", i === 0 && series === "all" && speaker === "all" && "sm:col-span-2 lg:col-span-2 lg:row-span-2")}>
              <div className="overflow-hidden rounded-3xl">
                <YouTubeEmbed id={s.youtubeId} title={title} soonLabel={t("videoSoon")} />
              </div>
              <div className="mt-5">
                <p className="eyebrow text-maroon">
                  {s.series ? loc(s.series, locale) : formatRef(s.passage, locale)}
                </p>
                <h3 className="headline mt-2 text-3xl text-onyx">{title}</h3>
                <p className="mt-2 text-sm text-ink/72">
                  <span className="first-letter:uppercase">{formatDate(s.date, locale, { year: true })}</span>
                  <span className="mx-2">·</span>
                  {s.speaker}
                  <span className="mx-2">·</span>
                  {formatRef(s.passage, locale)}
                </p>
                <p className="mt-3 leading-relaxed text-ink/75">{loc(s.summary, locale)}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
