"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { headerLinks, routes } from "@/lib/nav";
import { Logo } from "@/components/ui/Logo";
import { LanguageToggle } from "./LanguageToggle";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("cta");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  // Set when the logo is taking us home from another page, so we can land at the top.
  const returnHome = useRef(false);

  const scrollToTop = (behavior: ScrollBehavior) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : behavior });
  };

  const onLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Already home: the link points at the current page, so nothing would happen.
    if (pathname === routes.home) {
      event.preventDefault();
      scrollToTop("smooth");
      return;
    }
    returnHome.current = true;
  };

  useEffect(() => {
    if (!returnHome.current || pathname !== routes.home) return;
    returnHome.current = false;
    scrollToTop("instant");
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-onyx-deep/90 py-3 shadow-lg shadow-onyx-deep/20 backdrop-blur-md" : "py-5",
        )}
      >
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 text-paper lg:flex-nowrap">
          <Link href="/" aria-label="Golgotha SDA Church" onClick={onLogoClick} className="shrink-0 transition-opacity hover:opacity-85">
            <Logo subtitle={t("logoSubtitle")} />
          </Link>

          {/* On tablets the links drop to their own bar under the logo row; inline from lg up */}
          <nav
            aria-label={t("primary")}
            className="order-last mt-3 hidden basis-full border-t border-paper/15 pt-3 md:block lg:order-none lg:mt-0 lg:basis-auto lg:border-0 lg:pt-0"
          >
            <ul className="flex items-center gap-6 text-sm font-medium lg:gap-5 xl:gap-7">
              {headerLinks.map((key) => {
                const href = routes[key];
                const active = pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <li key={key}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative py-1 whitespace-nowrap transition-colors hover:text-gold",
                        "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100",
                        active && "text-gold after:scale-x-100",
                      )}
                    >
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle className="hidden sm:flex" />
            <Link
              href={routes.visit}
              className="hidden rounded-none bg-maroon px-4 py-2.5 text-sm font-semibold whitespace-nowrap lowercase transition-colors hover:bg-maroon-dark md:inline-flex"
            >
              [ {tc("planVisit")} ]
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              aria-label={t("openMenu")}
              className="group grid size-11 place-items-center rounded-none border border-paper/40 transition-colors hover:bg-card hover:text-onyx"
            >
              <span aria-hidden className="flex w-5 flex-col gap-1.5">
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-3/4 bg-current transition-all group-hover:w-full" />
              </span>
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>{menuOpen && <MenuOverlay onClose={closeMenu} />}</AnimatePresence>
    </>
  );
}
