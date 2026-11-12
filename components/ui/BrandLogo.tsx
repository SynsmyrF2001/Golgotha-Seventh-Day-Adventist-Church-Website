import Image from "next/image";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * The church's own full-color logo (transparent background, made for dark sections).
 * Source file: /public/images/golgotha-logo.png
 */
export function BrandLogo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/images/golgotha-logo.png"
      alt={site.name}
      width={572}
      height={359}
      priority={priority}
      className={cn("h-auto select-none", className)}
    />
  );
}
