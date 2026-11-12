"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ministries } from "@/content/ministries";
import { routes } from "@/lib/nav";
import { MinistryCard } from "@/components/ui/MinistryCard";
import { PillButton } from "@/components/ui/PillButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MinistryCarousel() {
  const t = useTranslations("home");
  const tc = useTranslations("cta");
  const tcat = useTranslations("common.categories");
  const tcom = useTranslations("common");
  const locale = useLocale();
  const track = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.8, 420), behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-surface py-24 sm:py-32">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow={t("ministriesEyebrow")} title={t("ministriesTitle")} intro={t("ministriesIntro")} />
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label={tcom("previous")}
            className="grid size-12 place-items-center rounded-none border border-onyx/25 text-onyx transition-colors hover:bg-onyx hover:text-paper"
          >
            <ArrowLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label={tcom("next")}
            className="grid size-12 place-items-center rounded-none border border-onyx/25 text-onyx transition-colors hover:bg-onyx hover:text-paper"
          >
            <ArrowRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto scroll-smooth px-5 pb-6 sm:scroll-px-8 sm:px-8 xl:scroll-px-[max(3rem,calc((100vw-88rem)/2+3rem))] xl:px-[max(3rem,calc((100vw-88rem)/2+3rem))]"
      >
        {ministries.map((m) => (
          <li key={m.slug} className="w-[78vw] max-w-sm shrink-0 snap-start sm:w-80">
            <MinistryCard ministry={m} locale={locale} categoryLabel={tcat(m.category)} />
          </li>
        ))}
      </ul>

      <div className="container-page mt-8">
        <PillButton href={routes.ministries} variant="outline">
          {tc("allMinistries")}
        </PillButton>
      </div>
    </section>
  );
}
