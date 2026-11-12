import { getLocale, getTranslations } from "next-intl/server";
import { ministriesPage } from "@/content/pages";
import { loc } from "@/content/types";
import { routes } from "@/lib/nav";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { MinistriesGrid } from "@/components/sections/MinistriesGrid";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

export function generateMetadata() {
  return pageMetadata("ministries", "/ministries");
}

export default async function MinistriesPage() {
  const locale = await getLocale();
  const tc = await getTranslations("cta");
  const p = ministriesPage;

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} watermark={loc(p.hero.eyebrow, locale)} />
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <MinistriesGrid />
        </div>
      </section>
      <section className="bg-maroon py-20 text-paper">
        <Reveal className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="headline text-[clamp(2.25rem,5vw,4rem)]">{loc(p.joinTitle, locale)}</h2>
            <p className="mt-4 text-lg text-paper/85">{loc(p.joinText, locale)}</p>
          </div>
          <PillButton href={routes.contact} variant="light" size="lg">
            {tc("contactUs")}
          </PillButton>
        </Reveal>
      </section>
    </>
  );
}
