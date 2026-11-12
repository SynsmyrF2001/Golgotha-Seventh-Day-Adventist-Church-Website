import { getLocale, getTranslations } from "next-intl/server";
import { heritagePage } from "@/content/pages";
import { heritagePillars, proverbs } from "@/content/heritage";
import { loc } from "@/content/types";
import { formatRef } from "@/lib/bible";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/nav";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { PillButton } from "@/components/ui/PillButton";
import { ProverbCard } from "@/components/ui/ProverbCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateMetadata() {
  return pageMetadata("heritage", "/about/heritage");
}

export default async function HeritagePage() {
  const locale = await getLocale();
  const t = await getTranslations("common");
  const tc = await getTranslations("cta");
  const p = heritagePage;

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} tone="maroon" watermark="Ayiti" />

      <div aria-hidden className="flex h-3">
        <span className="flex-1 bg-onyx" />
        <span className="flex-1 bg-maroon" />
      </div>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-page space-y-20 sm:space-y-28">
          {heritagePillars.map((pillar, i) => (
            <div key={pillar.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
                <PhotoPlaceholder tone={pillar.accent} label={t("photoSoon")} className="aspect-[5/4] rounded-3xl">
                  <span aria-hidden className="headline absolute top-6 left-6 text-8xl opacity-25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </PhotoPlaceholder>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="headline text-[clamp(2.5rem,5vw,4.5rem)] text-onyx">{loc(pillar.title, locale)}</h2>
                <p className="mt-6 text-lg leading-relaxed text-ink/75">{loc(pillar.text, locale)}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={loc(p.proverbsEyebrow, locale)} title={loc(p.proverbsTitle, locale)} intro={loc(p.proverbsIntro, locale)} />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proverbs.map((pr, i) => (
              <Reveal as="li" key={pr.kreyol} delay={(i % 3) * 0.08}>
                <ProverbCard
                  index={i}
                  kreyol={pr.kreyol}
                  meaning={locale === "ht" ? undefined : loc(pr.meaning, locale)}
                  verse={loc(pr.verse, locale)}
                  reference={formatRef(pr.ref, locale)}
                  flipLabel={loc(p.flip, locale)}
                  backLabel={loc(p.flipBack, locale)}
                />
              </Reveal>
            ))}
          </ul>
          <div className="mt-14">
            <PillButton href={routes.visit}>{tc("planVisit")}</PillButton>
          </div>
        </div>
      </section>
    </>
  );
}
