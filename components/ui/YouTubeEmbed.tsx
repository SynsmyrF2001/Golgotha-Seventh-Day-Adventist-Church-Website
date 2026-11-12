"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/cn";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function YouTubeEmbed({
  id,
  title,
  soonLabel,
  className,
}: {
  id: string;
  title: string;
  soonLabel: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (!id) {
    return (
      <PhotoPlaceholder tone="onyx" className={cn("aspect-video", className)}>
        <div className="absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="grid size-16 place-items-center rounded-none border border-paper/30">
              <Play className="size-6 translate-x-0.5" aria-hidden />
            </span>
            <span className="text-sm font-semibold">{soonLabel}</span>
          </div>
        </div>
      </PhotoPlaceholder>
    );
  }

  if (playing) {
    return (
      <iframe
        className={cn("aspect-video w-full", className)}
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={title}
      className={cn("group relative block aspect-video w-full overflow-hidden bg-onyx", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 grid place-items-center bg-onyx-deep/30 transition-colors group-hover:bg-onyx-deep/10">
        <span className="grid size-20 place-items-center rounded-none bg-maroon text-paper shadow-2xl transition-transform group-hover:scale-110">
          <Play className="size-8 translate-x-0.5" fill="currentColor" aria-hidden />
        </span>
      </span>
    </button>
  );
}
