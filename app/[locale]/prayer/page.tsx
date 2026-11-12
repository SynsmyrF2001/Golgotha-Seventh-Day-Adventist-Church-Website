import { getLocale, getTranslations } from "next-intl/server";
import { Phone } from "lucide-react";
import { prayerPage } from "@/content/pages";
import { site } from "@/content/site";
import { loc } from "@/content/types";
import { formatRef } from "@/lib/bible";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SmartForm } from "@/components/ui/SmartForm";

export function generateMetadata() {
  return pageMetadata("prayer", "/prayer");
}

export default async function PrayerPage() {
  const locale = await getLocale();
  const t = await getTranslations("forms");
  const p = prayerPage;

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} watermark="Amen" />

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <SmartForm
              formId={site.forms.prayer}
              subject={t("prayerSubject")}
              fields={[
                { name: "name", label: t("name"), type: "text", half: true },
                { name: "email", label: t("email"), type: "email", half: true },
                { name: "request", label: t("request"), type: "textarea", required: true },
                { name: "confidential", label: t("confidential"), type: "checkbox", help: t("confidentialHelp") },
              ]}
            />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl bg-onyx p-8 text-paper sm:p-10">
              <span aria-hidden className="absolute -top-10 -right-4 font-serif text-[12rem] leading-none text-gold/20">
                &ldquo;
              </span>
              <blockquote className="relative font-serif text-2xl leading-snug">{loc(p.verse.text, locale)}</blockquote>
              <p className="relative mt-5 font-bold text-gold">{formatRef(p.verse.ref, locale)}</p>
            </Reveal>
            <Reveal delay={0.15} className="rounded-3xl bg-maroon p-8 text-paper sm:p-10">
              <h2 className="headline text-3xl">{loc(p.urgentTitle, locale)}</h2>
              <p className="mt-3 text-paper/85">{loc(p.urgentText, locale)}</p>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-none bg-card px-5 py-3 font-semibold text-maroon transition-colors hover:bg-gold hover:text-onyx-deep"
              >
                <Phone className="size-4" aria-hidden />
                {site.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
