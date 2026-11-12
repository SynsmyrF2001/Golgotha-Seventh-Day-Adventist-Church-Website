import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  tone?: "onyx" | "maroon";
  watermark?: string;
};

/** The dark opening band used at the top of every inner page. */
export function PageHero({ eyebrow, title, intro, children, tone = "onyx", watermark }: Props) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden pt-40 pb-20 text-paper sm:pt-48 sm:pb-28",
        tone === "onyx" ? "bg-onyx" : "bg-maroon-dark",
      )}
    >
      <div aria-hidden className="grain absolute inset-0 -z-10 opacity-50" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 -z-10 size-[36rem] rounded-full bg-gold/10 blur-3xl"
      />
      {watermark && (
        <p
          aria-hidden
          className="headline pointer-events-none absolute right-0 -bottom-6 -z-10 text-[clamp(6rem,20vw,18rem)] text-paper/[0.05] select-none"
        >
          {watermark}
        </p>
      )}
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-5 text-gold">
            <span aria-hidden className="mr-2 inline-block h-px w-8 translate-y-[-3px] bg-current align-middle" />
            {eyebrow}
          </p>
          <h1 className="headline max-w-5xl text-[clamp(3rem,9vw,8rem)]">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 sm:text-xl">{intro}</p>}
        </Reveal>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
