import { getLocale, getTranslations } from "next-intl/server";
import { HandHeart, Laptop, Mail } from "lucide-react";
import { givePage } from "@/content/pages";
import { fullAddress, site } from "@/content/site";
import { loc } from "@/content/types";
import { formatRef } from "@/lib/bible";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { GiveDigital } from "@/components/sections/GiveDigital";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

export function generateMetadata() {
  return pageMetadata("give", "/give");
}

const wayIcons = [Laptop, HandHeart, Mail];

export default async function GivePage() {
  const locale = await getLocale();
  const tc = await getTranslations("cta");
  const p = givePage;

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} watermark="10%">
        <div className="flex flex-wrap gap-4">
          <PillButton href={site.givingUrl} variant="gold" size="lg">
            {tc("giveOnline")}
          </PillButton>
          <PillButton href="#digital" variant="light" size="lg" external>
            {loc(p.digital.eyebrow, locale)}
          </PillButton>
        </div>
      </PageHero>

      <section className="bg-surface py-24 sm:py-32">
        <Reveal className="container-page max-w-4xl text-center">
          <blockquote className="font-serif text-[clamp(1.6rem,3.5vw,2.75rem)] leading-snug text-onyx italic">
            {loc(p.verse.text, locale)}
          </blockquote>
          <p className="headline mt-6 text-2xl text-maroon">{formatRef(p.verse.ref, locale)}</p>
        </Reveal>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {p.kinds.map((k, i) => (
            <Reveal key={i} delay={i * 0.1} className={i === 0 ? "rounded-3xl bg-onyx p-10 text-paper sm:p-14" : "rounded-3xl bg-maroon p-10 text-paper sm:p-14"}>
              <h2 className="headline text-5xl sm:text-6xl">{loc(k.title, locale)}</h2>
              <p className="mt-6 text-lg leading-relaxed text-paper/85">{loc(k.text, locale)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-page">
          <ol className="grid gap-6 lg:grid-cols-3">
            {p.ways.map((w, i) => {
              const Icon = wayIcons[i % wayIcons.length];
              return (
                <Reveal as="li" key={i} delay={i * 0.08} className="flex flex-col rounded-3xl bg-card p-8 ring-1 ring-onyx/10 sm:p-10">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gold text-onyx-deep">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="headline mt-6 text-3xl text-onyx">{loc(w.title, locale)}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink/70">{loc(w.text, locale)}</p>
                  {i === 0 && (
                    <div className="mt-6">
                      <PillButton href={site.givingUrl}>{tc("giveOnline")}</PillButton>
                    </div>
                  )}
                  {i === 2 && <p className="mt-6 font-semibold text-onyx">{fullAddress}</p>}
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <GiveDigital />
    </>
  );
}
