import { getLocale, getTranslations } from "next-intl/server";
import { sortedSermons } from "@/content/sermons";
import { loc } from "@/content/types";
import { formatRef } from "@/lib/bible";
import { formatDate } from "@/lib/format";
import { routes } from "@/lib/nav";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export async function LatestSermon() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const tc = await getTranslations("cta");
  const tcom = await getTranslations("common");
  const sermon = sortedSermons()[0];
  if (!sermon) return null;
  const title = loc(sermon.title, locale);

  return (
    <section className="bg-onyx py-24 text-paper sm:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="overflow-hidden rounded-3xl shadow-2xl shadow-black/30">
          <YouTubeEmbed id={sermon.youtubeId} title={title} soonLabel={tcom("videoSoon")} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow mb-4 text-gold">{t("sermonEyebrow")}</p>
          <h2 className="headline text-[clamp(2.5rem,5vw,4.5rem)]">{title}</h2>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-paper/60">{tcom("passage")}</dt>
              <dd className="mt-1 font-semibold">{formatRef(sermon.passage, locale)}</dd>
            </div>
            <div>
              <dt className="text-paper/60">{tcom("speaker")}</dt>
              <dd className="mt-1 font-semibold">{sermon.speaker}</dd>
            </div>
          </dl>
          <p className="mt-6 text-lg leading-relaxed text-paper/80">{loc(sermon.summary, locale)}</p>
          <p className="mt-3 text-sm text-paper/60 first-letter:uppercase">{formatDate(sermon.date, locale, { weekday: true, year: true })}</p>
          <div className="mt-8">
            <PillButton href={routes.media} variant="light">
              {tc("allSermons")}
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
