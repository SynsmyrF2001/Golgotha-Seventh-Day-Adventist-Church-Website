import { getLocale, getTranslations } from "next-intl/server";
import { proverbs } from "@/content/heritage";
import { loc } from "@/content/types";
import { formatRef } from "@/lib/bible";
import { routes } from "@/lib/nav";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

export async function HeritageTeaser() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const tc = await getTranslations("cta");
  const proverb = proverbs[0];

  return (
    <section className="relative isolate overflow-hidden bg-maroon-dark py-24 text-paper sm:py-32">
      <div aria-hidden className="grain absolute inset-0 -z-10 opacity-40" />
      <div aria-hidden className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-linear-to-l from-onyx/60 to-transparent" />
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4 text-gold">{t("heritageEyebrow")}</p>
          <h2 className="headline text-[clamp(2.75rem,6vw,5.5rem)]">{t("heritageTitle")}</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/85">{t("heritageText")}</p>
          <div className="mt-8">
            <PillButton href={routes.heritage} variant="gold">
              {tc("exploreHeritage")}
            </PillButton>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <figure className="relative rotate-1 rounded-3xl bg-card p-8 text-onyx shadow-2xl shadow-black/30 transition-transform duration-500 hover:rotate-0 sm:p-12">
            <span aria-hidden className="absolute -top-5 left-8 rounded-none bg-gold px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-onyx-deep uppercase">
              Kreyòl
            </span>
            <blockquote lang="ht" className="headline text-[clamp(2.5rem,5vw,4rem)] text-maroon">
              {proverb.kreyol}
            </blockquote>
            {locale !== "ht" && <p className="mt-4 text-lg text-ink/70 italic">{loc(proverb.meaning, locale)}</p>}
            <figcaption className="mt-8 border-t border-onyx/15 pt-6">
              <p className="font-serif text-xl leading-snug">{loc(proverb.verse, locale)}</p>
              <p className="mt-3 font-semibold text-maroon">{formatRef(proverb.ref, locale)}</p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
