"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { sortedEvents } from "@/content/events";
import { getMinistry } from "@/content/ministries";
import { site } from "@/content/site";
import { loc } from "@/content/types";
import { cn } from "@/lib/cn";
import { isUpcoming } from "@/lib/dates";
import { useToday } from "@/lib/useClient";
import { EventCard } from "@/components/ui/EventCard";

export function EventList({ buildDate }: { buildDate: string }) {
  const locale = useLocale();
  const t = useTranslations("common");
  const today = useToday(site.timeZone, buildDate);
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [ministry, setMinistry] = useState<string>("all");

  const all = sortedEvents();
  const inTab = all.filter((e) => (tab === "upcoming" ? isUpcoming(e, today) : !isUpcoming(e, today)));
  const list = (tab === "past" ? [...inTab].reverse() : inTab).filter((e) => ministry === "all" || e.ministry === ministry);
  const ministrySlugs = [...new Set(all.map((e) => e.ministry).filter((m): m is string => Boolean(m)))];

  return (
    <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
      <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
        <div role="tablist" className="inline-flex rounded-none bg-card p-1 ring-1 ring-onyx/15">
          {(["upcoming", "past"] as const).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={tab === k}
              onClick={() => setTab(k)}
              className={cn(
                "rounded-none px-5 py-2.5 text-sm font-semibold transition-colors",
                tab === k ? "bg-onyx text-paper" : "text-onyx hover:text-maroon",
              )}
            >
              {t(k)}
            </button>
          ))}
        </div>

        <ul className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
          {["all", ...ministrySlugs].map((slug) => {
            const m = slug === "all" ? undefined : getMinistry(slug);
            return (
              <li key={slug}>
                <button
                  type="button"
                  aria-pressed={ministry === slug}
                  onClick={() => setMinistry(slug)}
                  className={cn(
                    "rounded-none px-4 py-2 text-sm font-semibold transition-colors",
                    ministry === slug ? "bg-maroon text-paper" : "text-onyx ring-1 ring-onyx/15 hover:ring-onyx",
                  )}
                >
                  {m ? loc(m.name, locale) : t("all")}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div role="tabpanel" className="space-y-4">
        {list.length === 0 && <p className="rounded-3xl bg-card p-8 text-lg text-ink/70 ring-1 ring-onyx/10">{t("noEvents")}</p>}
        {list.map((e) => (
          <EventCard key={e.id} event={e} past={tab === "past"} />
        ))}
      </div>
    </div>
  );
}
