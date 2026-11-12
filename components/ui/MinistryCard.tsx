import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Ministry } from "@/content/types";
import { loc } from "@/content/types";
import { cn } from "@/lib/cn";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function MinistryCard({
  ministry,
  locale,
  categoryLabel,
  className,
}: {
  ministry: Ministry;
  locale: Locale;
  categoryLabel: string;
  className?: string;
}) {
  const name = loc(ministry.name, locale);
  return (
    <Link
      href={`/ministries/${ministry.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-onyx/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-onyx/10",
        className,
      )}
    >
      <PhotoPlaceholder tone={ministry.accent} className="aspect-[4/3]">
        <span
          aria-hidden
          className="headline absolute -right-2 -bottom-6 text-[9rem] opacity-20 transition-transform duration-700 group-hover:scale-110"
        >
          {name.charAt(0)}
        </span>
        <span className="absolute top-4 left-4 rounded-none bg-black/25 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] uppercase backdrop-blur">
          {categoryLabel}
        </span>
      </PhotoPlaceholder>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="headline text-3xl text-onyx">{name}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink/70">{loc(ministry.tagline, locale)}</p>
        <span className="mt-6 inline-flex size-11 items-center justify-center self-end rounded-none border border-onyx/20 text-onyx transition-colors group-hover:border-maroon group-hover:bg-maroon group-hover:text-paper">
          <ArrowUpRight className="size-5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
