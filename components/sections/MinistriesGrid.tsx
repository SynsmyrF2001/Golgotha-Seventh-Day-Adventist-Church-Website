"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ministries } from "@/content/ministries";
import type { MinistryCategory } from "@/content/types";
import { cn } from "@/lib/cn";
import { MinistryCard } from "@/components/ui/MinistryCard";

const categories: MinistryCategory[] = ["children", "youth", "adults", "worship", "service"];

export function MinistriesGrid() {
  const locale = useLocale();
  const t = useTranslations("common");
  const tcat = useTranslations("common.categories");
  const [active, setActive] = useState<MinistryCategory | "all">("all");
  const visible = ministries.filter((m) => active === "all" || m.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["all", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-none px-5 py-2.5 text-sm font-semibold transition-colors",
              active === c ? "bg-onyx text-paper" : "bg-card text-onyx ring-1 ring-onyx/15 hover:ring-onyx",
            )}
          >
            {c === "all" ? t("all") : tcat(c)}
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((m) => (
            <motion.li
              layout
              key={m.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <MinistryCard ministry={m} locale={locale} categoryLabel={tcat(m.category)} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
