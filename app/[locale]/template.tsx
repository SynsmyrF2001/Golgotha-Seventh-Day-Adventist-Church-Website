"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { commitLocale, navMode } from "@/lib/nav-state";

/**
 * Re-mounts on every navigation (that is what a template is for), which lets us
 * give each page change a soft entrance instead of an abrupt swap:
 * - first load: no extra animation (the hero has its own)
 * - page change: the new page glides up into place
 * - language switch: content stays where it is with only a slight lift
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  // Decided once per mount so the class never flips (which would replay animations).
  const [mode] = useState(() => navMode(locale));

  useEffect(() => {
    commitLocale(locale);
  }, [locale]);

  if (mode === "page") return <div className="page-rise">{children}</div>;
  if (mode === "lang") return <div className="page-rise-lang lang-switched">{children}</div>;
  return <div>{children}</div>;
}
