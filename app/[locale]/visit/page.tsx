import { getLocale, getTranslations } from "next-intl/server";
import { Accessibility, Baby, Languages, Shirt } from "lucide-react";
import { visitPage } from "@/content/pages";
import { directionsUrl, fullAddress, mapsEmbedUrl, marqueeWords, sabbathSchedule, site } from "@/content/site";
import { loc } from "@/content/types";
import { formatTime } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartForm } from "@/components/ui/SmartForm";

export function generateMetadata() {
  return pageMetadata("visit", "/visit");
}

const detailIcons = [Baby, Languages, Shirt, Accessibility];

export default async function VisitPage() {
  const locale = await getLocale();
  const t = await getTranslations("forms");
  const tc = await getTranslations("cta");
  const p = visitPage;

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} watermark={loc(marqueeWords[0], locale)}>
        <ul className="flex flex-wrap gap-3">
          {sabbathSchedule.map((s) => (
            <li key={s.id} className="rounded-none border border-paper/25 bg-paper/5 px-5 py-2.5 text-sm backdrop-blur">
              <span className="font-bold text-gold">{formatTime(s.time, locale)}</span>
              <span className="mx-2 opacity-40">·</span>
              {loc(s.title, locale)}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-page">
          <ol className="grid gap-px overflow-hidden rounded-3xl bg-onyx/10 md:grid-cols-2 lg:grid-cols-4">
            {p.steps.map((step, i) => (
              <Reveal as="li" key={i} delay={i * 0.08} className="relative bg-card p-8 sm:p-10">
                <span aria-hidden className="headline text-7xl text-transparent [-webkit-text-stroke:1.5px_var(--color-maroon)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-6 text-2xl font-bold text-onyx">{loc(step.title, locale)}</h2>
                <p className="mt-3 leading-relaxed text-ink/70">{loc(step.text, locale)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {p.details.map((d, i) => {
            const Icon = detailIcons[i % detailIcons.length];
            return (
              <Reveal key={i} delay={(i % 2) * 0.08} className="flex gap-6 rounded-3xl bg-card p-8 ring-1 ring-onyx/10 sm:p-10">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-onyx text-gold">
                  <Icon className="size-7" aria-hidden />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-onyx">{loc(d.title, locale)}</h2>
                  <p className="mt-2 leading-relaxed text-ink/70">{loc(d.text, locale)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading eyebrow="FAQ" title={loc(p.faqTitle, locale)} />
          <Reveal>
            <Accordion items={p.faq.map((f) => ({ question: loc(f.question, locale), answer: loc(f.answer, locale) }))} />
          </Reveal>
        </div>
      </section>

      <section id="form" className="bg-onyx py-24 text-paper sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading tone="light" eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.formTitle, locale)} intro={loc(p.formIntro, locale)} />
            <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-3xl ring-1 ring-paper/15">
              <iframe src={mapsEmbedUrl} title={fullAddress} loading="lazy" className="aspect-[4/3] w-full grayscale-[40%]" />
            </Reveal>
            <Reveal delay={0.15} className="mt-6 flex flex-wrap items-center gap-4">
              <PillButton href={directionsUrl} variant="gold">
                {tc("directions")}
              </PillButton>
              <a href={site.phoneHref} className="font-semibold hover:text-gold">
                {site.phone}
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <SmartForm
              tone="dark"
              formId={site.forms.visit}
              subject={t("visitSubject")}
              fields={[
                { name: "name", label: t("name"), type: "text", required: true },
                { name: "email", label: t("email"), type: "email", required: true, half: true },
                { name: "phone", label: t("phone"), type: "tel", half: true },
                { name: "date", label: t("visitDate"), type: "date", half: true },
                { name: "party", label: t("partySize"), type: "number", half: true },
                { name: "children", label: t("children"), type: "text" },
                { name: "message", label: t("questions"), type: "textarea" },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
