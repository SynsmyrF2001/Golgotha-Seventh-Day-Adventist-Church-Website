import { getLocale, getTranslations } from "next-intl/server";
import { MapPin } from "lucide-react";
import { directionsUrl, fullAddress, sabbathSchedule } from "@/content/site";
import { loc } from "@/content/types";
import { formatTime } from "@/lib/format";
import { Reveal } from "@/components/ui/Reveal";

export async function ServiceTimes() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const tc = await getTranslations("cta");

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4 text-maroon">
            <span aria-hidden className="mr-2 inline-block h-px w-8 translate-y-[-3px] bg-current align-middle" />
            {t("scheduleEyebrow")}
          </p>
          <h2 className="headline text-[clamp(2.5rem,6vw,5rem)] text-onyx">{t("scheduleTitle")}</h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-onyx/10 md:grid-cols-3">
          {sabbathSchedule.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1} className="bg-card p-8 sm:p-10">
              <p className="headline text-[clamp(3.5rem,7vw,6rem)] text-maroon">{formatTime(item.time, locale)}</p>
              <h3 className="mt-4 text-2xl font-bold text-onyx">{loc(item.title, locale)}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{loc(item.description, locale)}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2} className="flex flex-col justify-between gap-6 bg-onyx p-8 text-paper sm:p-10">
            <MapPin className="size-10 text-gold" aria-hidden />
            <div>
              <p className="text-2xl font-bold">{fullAddress}</p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold lowercase text-gold underline-offset-4 hover:underline"
              >
                [ {tc("directions")} ] ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
