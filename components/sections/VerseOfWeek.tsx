"use client";

import { useLocale, useTranslations } from "next-intl";
import { weeklyVerses } from "@/content/heritage";
import { loc } from "@/content/types";
import { formatRef } from "@/lib/bible";
import { useWeekIndex } from "@/lib/useClient";
import { Reveal } from "@/components/ui/Reveal";

export function VerseOfWeek({ buildWeek }: { buildWeek: number }) {
  const t = useTranslations("home");
  const locale = useLocale();
  const week = useWeekIndex(buildWeek);
  const verse = weeklyVerses[((week % weeklyVerses.length) + weeklyVerses.length) % weeklyVerses.length];

  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 font-serif text-[22rem] leading-none text-gold/15 select-none"
      >
        &ldquo;
      </span>
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-8 text-maroon">{t("verseEyebrow")}</p>
          <blockquote>
            <p className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.2] text-onyx italic">
              {loc(verse.text, locale)}
            </p>
            <footer className="mt-8">
              <cite className="headline text-2xl text-maroon not-italic">{formatRef(verse.ref, locale)}</cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
