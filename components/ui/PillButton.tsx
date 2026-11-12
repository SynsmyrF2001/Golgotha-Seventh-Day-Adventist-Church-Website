import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "light" | "gold";

const variants: Record<Variant, string> = {
  solid: "bg-maroon text-paper hover:bg-maroon-dark",
  outline: "border border-onyx/80 text-onyx hover:bg-onyx hover:text-paper",
  light: "border border-paper/70 text-paper hover:bg-card hover:text-onyx",
  gold: "bg-gold text-onyx-deep hover:bg-gold-soft",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  size?: "md" | "lg";
};

export function PillButton({ href, children, variant = "solid", external, className, size = "md" }: Props) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-1.5 rounded-none font-semibold lowercase tracking-wide transition-colors duration-300",
    size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm",
    variants[variant],
    className,
  );
  const content = (
    <>
      <span aria-hidden className="opacity-60 transition-transform duration-300 group-hover:-translate-x-0.5">
        [
      </span>
      <span>{children}</span>
      <span aria-hidden className="opacity-60 transition-transform duration-300 group-hover:translate-x-0.5">
        ]
      </span>
    </>
  );

  if (external || /^(https?:|mailto:|tel:)/.test(href)) {
    const isWeb = href.startsWith("http");
    return (
      <a href={href} className={classes} {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
