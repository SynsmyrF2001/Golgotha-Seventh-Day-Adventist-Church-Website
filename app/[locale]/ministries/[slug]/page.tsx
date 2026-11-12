import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, CalendarClock, Check, UserRound } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getMinistry, ministries } from "@/content/ministries";
import { site } from "@/content/site";
import { loc } from "@/content/types";
import { formatRef } from "@/lib/bible";
import { todayIn } from "@/lib/dates";
import { routes } from "@/lib/nav";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedEvents } from "@/components/sections/RelatedEvents";
import { MinistryCard } from "@/components/ui/MinistryCard";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return ministries.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/ministries/[slug]">) {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  if (!ministry) return {};
  const locale = await getLocale();
  return pageMetadata(null, `/ministries/${slug}`, {
    title: loc(ministry.name, locale),
    description: loc(ministry.tagline, locale),
  });
}

export default async function MinistryPage({ params }: PageProps<"/[locale]/ministries/[slug]">) {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  if (!ministry) notFound();

  const locale = await getLocale();
  const t = await getTranslations("common");
  const tc = await getTranslations("cta");
  const tn = await getTranslations("nav");
  const others = ministries.filter((m) => m.slug !== slug && m.category === ministry.category).concat(
    ministries.filter((m) => m.slug !== slug && m.category !== ministry.category),
  ).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={t(`categories.${ministry.category}`)}
        title={loc(ministry.name, locale)}
        intro={loc(ministry.tagline, locale)}
        tone={ministry.accent === "maroon" ? "maroon" : "onyx"}
        watermark={loc(ministry.name, locale).split(" ")[0]}
      >
        <Link href={routes.ministries} className="inline-flex items-center gap-2 text-sm font-semibold text-paper/80 hover:text-gold">
          <ArrowLeft className="size-4" aria-hidden />
          {tc("backToMinistries")}
        </Link>
      </PageHero>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <PhotoPlaceholder tone={ministry.accent} label={t("photoSoon")} className="aspect-[16/9] rounded-3xl" />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-12 text-xl leading-relaxed text-ink/80">{loc(ministry.description, locale)}</p>
            </Reveal>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {ministry.highlights.map((h, i) => (
                <Reveal as="li" key={i} delay={i * 0.06} className="flex items-start gap-3 rounded-2xl bg-card p-5 ring-1 ring-onyx/10">
                  <span className="grid size-7 shrink-0 place-items-center rounded-none bg-maroon text-paper">
                    <Check className="size-4" aria-hidden />
                  </span>
                  <span className="font-semibold text-onyx">{loc(h, locale)}</span>
                </Reveal>
              ))}
            </ul>
            <RelatedEvents ministry={ministry.slug} buildDate={todayIn(site.timeZone)} />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="rounded-3xl bg-onyx p-8 text-paper">
              <dl className="space-y-6">
                <div className="flex gap-4">
                  <CalendarClock className="size-6 shrink-0 text-gold" aria-hidden />
                  <div>
                    <dt className="eyebrow text-gold">{t("meets")}</dt>
                    <dd className="mt-1 text-lg font-semibold">{loc(ministry.meets, locale)}</dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <UserRound className="size-6 shrink-0 text-gold" aria-hidden />
                  <div>
                    <dt className="eyebrow text-gold">{t("leader")}</dt>
                    <dd className="mt-1 text-lg font-semibold">{ministry.leader || t("toConfirm")}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-8">
                <PillButton href={routes.contact} variant="gold">
                  {tc("contactUs")}
                </PillButton>
              </div>
            </Reveal>
            <Reveal delay={0.1} as="section" className="rounded-3xl bg-gold p-8 text-onyx-deep">
              <p className="eyebrow">{t("keyVerse")}</p>
              <blockquote className="mt-4 font-serif text-2xl leading-snug">{loc(ministry.verse.text, locale)}</blockquote>
              <p className="mt-4 font-bold">{formatRef(ministry.verse.ref, locale)}</p>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <h2 className="headline text-[clamp(2.25rem,5vw,4rem)] text-onyx">{tn("ministries")}</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((m, i) => (
              <Reveal as="li" key={m.slug} delay={i * 0.08}>
                <MinistryCard ministry={m} locale={locale} categoryLabel={t(`categories.${m.category}`)} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
