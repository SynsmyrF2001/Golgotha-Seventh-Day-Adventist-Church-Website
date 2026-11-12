import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { aboutPage } from "@/content/pages";
import { leaders } from "@/content/leadership";
import { site } from "@/content/site";
import { loc } from "@/content/types";
import { routes } from "@/lib/nav";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateMetadata() {
  return pageMetadata("about", "/about");
}

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations("common");
  const tn = await getTranslations("nav");
  const tm = await getTranslations("meta.pages");
  const tc = await getTranslations("cta");
  const p = aboutPage;

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} watermark="Golgotha" />

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading title={loc(p.story.title, locale)} />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
              {p.story.paragraphs.map((para, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{loc(para, locale)}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1} className="relative">
            <PhotoPlaceholder tone="onyx" label={t("photoSoon")} className="aspect-[4/5] rounded-3xl" />
            <PhotoPlaceholder
              tone="maroon"
              className="absolute -bottom-8 -left-6 hidden aspect-square w-44 rounded-3xl ring-8 ring-surface sm:block"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-onyx-deep py-24 text-paper sm:py-36">
        <div aria-hidden className="grain absolute inset-0 -z-10 opacity-40" />
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5 text-gold">{loc(p.name.eyebrow, locale)}</p>
            <h2 className="headline text-[clamp(2.75rem,7vw,6rem)]">{loc(p.name.title, locale)}</h2>
            <p className="mt-8 font-serif text-[clamp(1.25rem,2.4vw,1.75rem)] leading-relaxed text-paper/85">{loc(p.name.text, locale)}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <BrandLogo className="mx-auto w-full max-w-sm lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-page">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.values.map((v, i) => (
              <Reveal as="li" key={i} delay={i * 0.08} className="rounded-3xl bg-card p-8 ring-1 ring-onyx/10">
                <span className="headline text-6xl text-maroon">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="headline mt-6 text-3xl text-onyx">{loc(v.title, locale)}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{loc(v.text, locale)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={site.shortName} title={loc(p.leadershipTitle, locale)} />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, i) => (
              <Reveal as="li" key={i} delay={(i % 3) * 0.08} className="group">
                <PhotoPlaceholder
                  src={leader.photo}
                  alt={leader.name}
                  tone={i === 0 ? "maroon" : i % 2 ? "onyx" : "onyx-soft"}
                  className="aspect-[4/5] rounded-3xl"
                >
                  {!leader.photo && (
                    <span aria-hidden className="headline absolute inset-0 grid place-items-center text-8xl opacity-30">
                      {leader.name ? leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("") : "?"}
                    </span>
                  )}
                </PhotoPlaceholder>
                <p className="eyebrow mt-5 text-maroon">{loc(leader.role, locale)}</p>
                <h3 className="mt-1 text-2xl font-bold text-onyx">{leader.name || t("toConfirm")}</h3>
                {leader.bio && <p className="mt-2 leading-relaxed text-ink/70">{loc(leader.bio, locale)}</p>}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="headline text-[clamp(2.25rem,5vw,4rem)] text-onyx">{loc(p.adventist.title, locale)}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">{loc(p.adventist.text, locale)}</p>
            <div className="mt-8">
              <PillButton href={site.adventistUrl} variant="outline">
                adventist.org
              </PillButton>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {(["beliefs", "heritage"] as const).map((key, i) => (
              <Reveal key={key} delay={i * 0.1}>
                <Link
                  href={routes[key]}
                  className="group flex items-center justify-between gap-6 rounded-3xl bg-onyx p-8 text-paper transition-colors hover:bg-maroon sm:p-10"
                >
                  <span>
                    <span className="headline block text-4xl">{tn(key)}</span>
                    <span className="mt-2 block text-paper/75">{tm(`${key}.description`)}</span>
                  </span>
                  <ArrowUpRight className="size-8 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <PillButton href={routes.visit}>{tc("planVisit")}</PillButton>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
