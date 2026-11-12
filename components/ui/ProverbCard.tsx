"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";
import { cn } from "@/lib/cn";

export function ProverbCard({
  kreyol,
  meaning,
  verse,
  reference,
  flipLabel,
  backLabel,
  index,
}: {
  kreyol: string;
  meaning?: string;
  verse: string;
  reference: string;
  flipLabel: string;
  backLabel: string;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const front = index % 2 === 0 ? "bg-card text-onyx" : "bg-onyx text-paper";

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group block h-80 w-full text-left [perspective:1200px]"
    >
      <span
        className={cn(
          "relative block h-full w-full transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        <span className={cn("absolute inset-0 flex flex-col justify-between rounded-3xl p-8 shadow-xl [backface-visibility:hidden]", front)}>
          <span className="eyebrow text-maroon">Kreyòl</span>
          <span>
            <span lang="ht" className="headline block text-4xl sm:text-5xl">
              {kreyol}
            </span>
            {meaning && <span className="mt-3 block italic opacity-70">{meaning}</span>}
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold opacity-80">
            <RotateCw className="size-4 transition-transform duration-500 group-hover:rotate-180" aria-hidden />
            {flipLabel}
          </span>
        </span>

        <span className="absolute inset-0 flex flex-col justify-between rounded-3xl bg-maroon p-8 text-paper shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="eyebrow text-gold">{reference}</span>
          <span className="font-serif text-2xl leading-snug">{verse}</span>
          <span className="flex items-center gap-2 text-sm font-semibold opacity-80">
            <RotateCw className="size-4" aria-hidden />
            {backLabel}
          </span>
        </span>
      </span>
    </button>
  );
}
