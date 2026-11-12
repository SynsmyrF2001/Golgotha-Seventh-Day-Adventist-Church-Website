"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { localeNames, locales } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LanguageToggle({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const pathname = usePathname();
  const current = useLocale();
  const t = useTranslations("nav");

  return (
    <nav aria-label={t("language")} className={cn("flex items-center rounded-none p-1 text-xs font-bold", tone === "light" ? "bg-paper/10" : "bg-onyx/10", className)}>
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            scroll={false}
            lang={localeNames[locale].htmlLang}
            hrefLang={localeNames[locale].htmlLang}
            aria-current={active ? "true" : undefined}
            title={localeNames[locale].long}
            className={cn(
              "rounded-none px-2.5 py-1.5 tracking-wider transition-colors",
              active
                ? tone === "light"
                  ? "bg-card text-onyx"
                  : "bg-onyx text-paper"
                : tone === "light"
                  ? "text-paper/80 hover:text-paper"
                  : "text-onyx/70 hover:text-onyx",
            )}
          >
            {localeNames[locale].short}
          </Link>
        );
      })}
    </nav>
  );
}
