import { getLocale, getTranslations } from "next-intl/server";
import { Radio } from "lucide-react";
import { mediaPage } from "@/content/pages";
import { site } from "@/content/site";
import { loc } from "@/content/types";
import { routes } from "@/lib/nav";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { SermonGrid } from "@/components/sections/SermonGrid";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateMetadata() {
  return pageMetadata("media", "/media");
}

export default async function MediaPage() {
  const locale = await getLocale();
  const tc = await getTranslations("cta");
  const p = mediaPage;
  const live = site.liveStreamUrl;

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} watermark="Live" />

      <section className="bg-onyx-deep py-16 text-paper">
        <div className="container-page">
          <Reveal className="flex flex-col items-start gap-8 rounded-3xl border border-paper/10 bg-paper/5 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="relative mt-1 grid size-14 shrink-0 place-items-center rounded-none bg-maroon">
                {live && <span className="absolute inset-0 animate-ping rounded-none bg-maroon/60" aria-hidden />}
                <Radio className="relative size-6" aria-hidden />
              </span>
              <div>
                <h2 className="headline text-4xl">{loc(p.liveTitle, locale)}</h2>
                <p className="mt-2 max-w-xl text-lg text-paper/80">{loc(live ? p.liveText : p.liveSoon, locale)}</p>
              </div>
            </div>
            {live ? (
              <PillButton href={live} size="lg">
                {tc("watchLive")}
              </PillButton>
            ) : (
              <PillButton href={routes.visit} variant="light" size="lg">
                {tc("planVisit")}
              </PillButton>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title={loc(p.archiveTitle, locale)} />
          <div className="mt-10">
            <SermonGrid />
          </div>
          {site.social.youtube && (
            <div className="mt-14">
              <PillButton href={site.social.youtube} variant="outline">
                YouTube
              </PillButton>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
