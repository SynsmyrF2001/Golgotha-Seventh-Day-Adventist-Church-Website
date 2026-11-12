import { getLocale, getTranslations } from "next-intl/server";
import { beliefsPage } from "@/content/pages";
import { site } from "@/content/site";
import { loc } from "@/content/types";
import { routes } from "@/lib/nav";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { BeliefsGrid } from "@/components/sections/BeliefsGrid";
import { PillButton } from "@/components/ui/PillButton";

export function generateMetadata() {
  return pageMetadata("beliefs", "/about/beliefs");
}

export default async function BeliefsPage() {
  const locale = await getLocale();
  const tc = await getTranslations("cta");
  const p = beliefsPage;

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} watermark="28" />
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <BeliefsGrid hint={loc(p.hint, locale)} />
          <div className="mt-14 flex flex-wrap gap-3">
            <PillButton href={`${site.adventistUrl}beliefs/`} variant="outline">
              {loc(p.source, locale)}
            </PillButton>
            <PillButton href={routes.visit}>{tc("planVisit")}</PillButton>
          </div>
        </div>
      </section>
    </>
  );
}
