import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, intro, tone = "dark", align = "left", className, as = "h2" }: Props) {
  const Heading = as;
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4", tone === "dark" ? "text-maroon" : "text-gold")}>
          <span aria-hidden className="mr-2 inline-block h-px w-8 translate-y-[-3px] bg-current align-middle" />
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "headline text-[clamp(2.5rem,6vw,5rem)]",
          tone === "dark" ? "text-onyx" : "text-paper",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "dark" ? "text-ink/75" : "text-paper/80")}>{intro}</p>
      )}
    </Reveal>
  );
}
