"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { fullAddress, sabbathSchedule, site } from "@/content/site";
import { loc } from "@/content/types";
import { formatTime } from "@/lib/format";
import { menuGroups, routes } from "@/lib/nav";
import { LanguageToggle } from "./LanguageToggle";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function MenuOverlay({ onClose }: { onClose: () => void }) {
  const t = useTranslations("nav");
  const tc = useTranslations("cta");
  const locale = useLocale();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={t("menu")}
      initial={{ clipPath: "circle(0% at 100% 0%)" }}
      animate={{ clipPath: "circle(150% at 100% 0%)" }}
      exit={{ clipPath: "circle(0% at 100% 0%)" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-onyx-deep text-paper"
    >
      <div aria-hidden className="grain pointer-events-none fixed inset-0 opacity-50" />
      <div className="container-page relative flex min-h-full flex-col py-6">
        <div className="flex items-center justify-between">
          <LanguageToggle />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t("closeMenu")}
            className="grid size-11 place-items-center rounded-none border border-paper/30 transition-colors hover:bg-card hover:text-onyx"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div className="mt-12 grid flex-1 gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <nav aria-label={t("primary")} className="grid gap-10 md:grid-cols-3">
            {menuGroups.map((group, gi) => (
              <div key={group.key}>
                <p className="eyebrow mb-5 text-gold">{t(group.key)}</p>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + gi * 0.08 + i * 0.05, duration: 0.5 }}
                    >
                      <Link
                        href={routes[item]}
                        onClick={onClose}
                        className="headline block py-1 text-[clamp(2rem,4.5vw,3.5rem)] transition-colors hover:text-gold"
                      >
                        {t(item)}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-8 border-t border-paper/15 pt-8 text-sm lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
          >
            <div>
              <p className="eyebrow mb-3 text-gold">Sabbat · Saba · Sabbath</p>
              <ul className="space-y-2">
                {sabbathSchedule.map((s) => (
                  <li key={s.id} className="flex justify-between gap-4">
                    <span>{loc(s.title, locale)}</span>
                    <span className="font-semibold">{formatTime(s.time, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <address className="space-y-1 not-italic text-paper/80">
              <p>{fullAddress}</p>
              <p>
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                  {site.email}
                </a>
              </p>
            </address>
            <Link
              href={routes.visit}
              onClick={onClose}
              className="inline-flex rounded-none bg-maroon px-5 py-3 font-semibold lowercase transition-colors hover:bg-maroon-dark"
            >
              [ {tc("planVisit")} ]
            </Link>
            <SocialIcons />
          </motion.aside>
        </div>
      </div>
    </motion.div>
  );
}
