"use client";

import { useTranslations } from "next-intl";
import { sortedEvents } from "@/content/events";
import { site } from "@/content/site";
import { isUpcoming } from "@/lib/dates";
import { useToday } from "@/lib/useClient";
import { EventCard } from "@/components/ui/EventCard";

export function RelatedEvents({ ministry, buildDate }: { ministry: string; buildDate: string }) {
  const t = useTranslations("common");
  const today = useToday(site.timeZone, buildDate);
  const related = sortedEvents().filter((e) => e.ministry === ministry && isUpcoming(e, today));
  if (related.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="headline text-4xl text-onyx">{t("relatedEvents")}</h2>
      <div className="mt-6 space-y-4">
        {related.map((e) => (
          <EventCard key={e.id} event={e} compact />
        ))}
      </div>
    </div>
  );
}
