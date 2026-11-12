"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Plus, X } from "lucide-react";
import { beliefCategories, beliefs, type BeliefCategory } from "@/content/beliefs";
import { loc } from "@/content/types";
import { formatRef } from "@/lib/bible";
import { cn } from "@/lib/cn";

const categoryTone: Record<BeliefCategory, string> = {
  god: "bg-onyx text-paper",
  humanity: "bg-gold text-onyx-deep",
  salvation: "bg-maroon text-paper",
  church: "bg-onyx-soft text-paper",
  living: "bg-card text-onyx ring-1 ring-onyx/15",
  restoration: "bg-onyx-deep text-paper",
};

export function BeliefsGrid({ hint }: { hint: string }) {
  const locale = useLocale();
  const t = useTranslations("common");
  const [category, setCategory] = useState<BeliefCategory | "all">("all");
  const [open, setOpen] = useState<number | null>(null);

  const visible = beliefs.filter((b) => category === "all" || b.category === category);
  const filters: { id: BeliefCategory | "all"; label: string }[] = [
    { id: "all", label: t("all") },
    ...beliefCategories.map((c) => ({ id: c.id, label: loc(c.name, locale) })),
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={category === f.id}
            onClick={() => {
              setCategory(f.id);
              setOpen(null);
            }}
            className={cn(
              "rounded-none px-4 py-2 text-sm font-semibold transition-colors",
              category === f.id ? "bg-onyx text-paper" : "bg-card text-onyx ring-1 ring-onyx/15 hover:ring-onyx",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink/72">{hint}</p>

      <LayoutGroup>
        <motion.ul layout className="mt-10 grid grid-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((b) => {
              const isOpen = open === b.n;
              const panelId = `belief-${b.n}`;
              return (
                <motion.li
                  layout
                  key={b.n}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={cn("overflow-hidden rounded-3xl", categoryTone[b.category], isOpen && "sm:col-span-2")}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : b.n)}
                    className={cn("flex w-full flex-col justify-between gap-6 p-6 text-left", !isOpen && "h-full min-h-44")}
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span className="headline text-5xl opacity-40">{String(b.n).padStart(2, "0")}</span>
                      {isOpen ? <X className="size-5 shrink-0" aria-hidden /> : <Plus className="size-5 shrink-0" aria-hidden />}
                    </span>
                    <span className="headline text-2xl">{loc(b.title, locale)}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.15 }}
                        className="px-6 pb-8"
                      >
                        <p className="text-lg leading-relaxed opacity-90">{loc(b.summary, locale)}</p>
                        <p className="mt-5 text-xs font-bold tracking-[0.2em] uppercase opacity-70">{t("keyVerse")}</p>
                        <p className="mt-1 font-serif text-xl">{formatRef(b.ref, locale)}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </div>
  );
}
