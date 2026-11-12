"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = { question: string; answer: string };

export function Accordion({ items, tone = "dark" }: { items: AccordionItem[]; tone?: "dark" | "light" }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className={cn("divide-y border-y", tone === "dark" ? "divide-onyx/15 border-onyx/15" : "divide-paper/15 border-paper/15")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <li key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold transition-colors sm:text-xl",
                  tone === "dark" ? "text-onyx hover:text-maroon" : "text-paper hover:text-gold",
                )}
              >
                {item.question}
                <Plus
                  aria-hidden
                  className={cn("size-6 shrink-0 transition-transform duration-300", isOpen && "rotate-45")}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={cn("max-w-3xl pb-6 leading-relaxed", tone === "dark" ? "text-ink/75" : "text-paper/75")}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
