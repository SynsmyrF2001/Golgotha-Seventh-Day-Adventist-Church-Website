import { getLocale, getTranslations } from "next-intl/server";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contactPage } from "@/content/pages";
import { directionsUrl, fullAddress, mapsEmbedUrl, sabbathSchedule, site } from "@/content/site";
import { loc } from "@/content/types";
import { formatTime } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SmartForm } from "@/components/ui/SmartForm";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function generateMetadata() {
  return pageMetadata("contact", "/contact");
}

export default async function ContactPage() {
  const locale = await getLocale();
  const t = await getTranslations("forms");
  const tf = await getTranslations("footer");
  const tc = await getTranslations("cta");
  const p = contactPage;

  const cards = [
    { icon: Phone, label: tc("call"), value: site.phone, href: site.phoneHref },
    { icon: Mail, label: tc("writeUs"), value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: tc("directions"), value: fullAddress, href: directionsUrl },
  ];

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} watermark="Allô" />

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <ul className="grid gap-4 md:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal as="li" key={c.label} delay={i * 0.08}>
                <a
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col gap-6 rounded-3xl bg-card p-8 ring-1 ring-onyx/10 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-onyx/10"
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-onyx text-gold transition-colors group-hover:bg-maroon group-hover:text-paper">
                    <c.icon className="size-6" aria-hidden />
                  </span>
                  <span>
                    <span className="eyebrow block text-maroon">{c.label}</span>
                    <span className="mt-2 block text-lg font-semibold break-words text-onyx">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <Reveal>
              <SmartForm
                formId={site.forms.contact}
                subject={t("contactSubject")}
                fields={[
                  { name: "name", label: t("name"), type: "text", required: true },
                  { name: "email", label: t("email"), type: "email", required: true, half: true },
                  { name: "phone", label: t("phone"), type: "tel", half: true },
                  {
                    name: "subject",
                    label: t("subject"),
                    type: "select",
                    options: (["general", "visit", "studies", "baptism", "pastor", "other"] as const).map((k) => ({
                      value: k,
                      label: t(`subjects.${k}`),
                    })),
                  },
                  { name: "message", label: t("message"), type: "textarea", required: true },
                ]}
              />
            </Reveal>

            <Reveal delay={0.1} className="space-y-8">
              <div className="overflow-hidden rounded-3xl ring-1 ring-onyx/10">
                <iframe src={mapsEmbedUrl} title={fullAddress} loading="lazy" className="aspect-square w-full grayscale-[30%]" />
              </div>
              <div className="rounded-3xl bg-onyx p-8 text-paper">
                <p className="eyebrow mb-4 flex items-center gap-2 text-gold">
                  <Clock className="size-4" aria-hidden />
                  {tf("services")}
                </p>
                <ul className="space-y-2">
                  {sabbathSchedule.map((s) => (
                    <li key={s.id} className="flex justify-between gap-4">
                      <span>{loc(s.title, locale)}</span>
                      <span className="font-semibold">{formatTime(s.time, locale)}</span>
                    </li>
                  ))}
                </ul>
                <SocialIcons className="mt-6" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
