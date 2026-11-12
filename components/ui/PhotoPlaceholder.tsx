import { cn } from "@/lib/cn";

type Tone = "onyx" | "maroon" | "gold" | "onyx-soft";

const tones: Record<Tone, string> = {
  onyx: "from-onyx via-onyx-soft to-onyx-deep text-paper",
  maroon: "from-maroon via-maroon-dark to-onyx-deep text-paper",
  gold: "from-gold via-gold-soft to-mist text-onyx-deep",
  "onyx-soft": "from-onyx-soft via-onyx to-maroon-dark text-paper",
};

/**
 * Stands in for a photograph until real images are added to /public/images.
 * Pass `src` once a photo exists and it will be shown instead.
 */
export function PhotoPlaceholder({
  label,
  tone = "onyx",
  className,
  src,
  alt = "",
  children,
}: {
  label?: string;
  tone?: Tone;
  className?: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} loading="lazy" className={cn("h-full w-full object-cover", className)} />
    );
  }

  return (
    <div className={cn("relative isolate overflow-hidden bg-linear-to-br", tones[tone], className)}>
      <div aria-hidden className="grain absolute inset-0 opacity-60" />
      <svg aria-hidden viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full opacity-[0.14]">
        <path d="M-20 300 C 80 170, 160 140, 200 140 S 320 170, 420 300 Z" fill="currentColor" />
        <path d="M200 30 V 140 M 170 62 H 230" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
        <circle cx="330" cy="70" r="26" fill="currentColor" opacity="0.6" />
      </svg>
      {children}
      {label && (
        <span className="absolute bottom-3 left-3 rounded-none bg-black/25 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
