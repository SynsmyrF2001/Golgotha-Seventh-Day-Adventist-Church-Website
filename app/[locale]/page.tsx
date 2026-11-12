import { site } from "@/content/site";
import { todayIn, weekIndex } from "@/lib/dates";
import { pageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { ServiceTimes } from "@/components/sections/ServiceTimes";
import { SabbathCountdown } from "@/components/sections/SabbathCountdown";
import { Mission } from "@/components/sections/Mission";
import { MinistryCarousel } from "@/components/sections/MinistryCarousel";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { VerseOfWeek } from "@/components/sections/VerseOfWeek";
import { LatestSermon } from "@/components/sections/LatestSermon";
import { HeritageTeaser } from "@/components/sections/HeritageTeaser";
import { FindUs } from "@/components/sections/FindUs";

export function generateMetadata() {
  return pageMetadata(null, "/");
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceTimes />
      <SabbathCountdown />
      <Mission />
      <MinistryCarousel />
      <UpcomingEvents buildDate={todayIn(site.timeZone)} />
      <VerseOfWeek buildWeek={weekIndex()} />
      <LatestSermon />
      <HeritageTeaser />
      <FindUs />
    </>
  );
}
