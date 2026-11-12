"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { navMode } from "@/lib/nav-state";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
};

export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Component = motion[as];
  const locale = useLocale();
  // After a language switch the content is already "known" to the visitor:
  // show it in place instead of replaying the scroll-in animation.
  const [skip] = useState(() => navMode(locale) === "lang");
  return (
    <Component
      className={className}
      initial={skip ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
