"use client";

import { useTranslations } from "next-intl";
import { sortedEvents } from "@/content/events";
import { site } from "@/content/site";
import { isUpcoming } from "@/lib/dates";
import { routes } from "@/lib/nav";
import { useToday } from "@/lib/useClient";
import { EventCard } from "@/components/ui/EventCard";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function UpcomingEvents({ buildDate }: { buildDate: string }) {
  const t = useTranslations("home");
  const tc = useTranslations("cta");
  const tcom = useTranslations("common");
  const today = useToday(site.timeZone, buildDate);
  const upcoming = sortedEvents().filter((e) => isUpcoming(e, today)).slice(0, 3);

  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow={t("eventsEyebrow")} title={t("eventsTitle")} />
          <Reveal delay={0.1} className="mt-8">
            <PillButton href={routes.events} variant="outline">
              {tc("allEvents")}
            </PillButton>
          </Reveal>
        </div>
        <div className="space-y-4">
          {upcoming.length === 0 && <p className="text-lg text-ink/70">{tcom("noEvents")}</p>}
          {upcoming.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.08}>
              <EventCard event={event} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
