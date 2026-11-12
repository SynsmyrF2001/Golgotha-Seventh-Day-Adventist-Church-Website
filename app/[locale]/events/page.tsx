import { getLocale } from "next-intl/server";
import { eventsPage } from "@/content/pages";
import { site } from "@/content/site";
import { loc } from "@/content/types";
import { todayIn } from "@/lib/dates";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { EventList } from "@/components/sections/EventList";

export function generateMetadata() {
  return pageMetadata("events", "/events");
}

export default async function EventsPage() {
  const locale = await getLocale();
  const p = eventsPage;

  return (
    <>
      <PageHero eyebrow={loc(p.hero.eyebrow, locale)} title={loc(p.hero.title, locale)} intro={loc(p.hero.intro, locale)} watermark={new Date().getFullYear().toString()} />
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <EventList buildDate={todayIn(site.timeZone)} />
        </div>
      </section>
    </>
  );
}
