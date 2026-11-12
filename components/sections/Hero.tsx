import { getLocale, getTranslations } from "next-intl/server";
import { heroTagline, heroWords, marqueeWords, sabbathSchedule, site } from "@/content/site";
import { loc } from "@/content/types";
import { formatTime } from "@/lib/format";
import { routes } from "@/lib/nav";
import { PillButton } from "@/components/ui/PillButton";

export async function Hero() {
  const locale = await getLocale();
  const t = await getTranslations("cta");
  const tn = await getTranslations("countdown");
  const words = heroWords.map((w) => loc(w, locale));
  const marquee = marqueeWords.map((w) => loc(w, locale));

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-onyx text-paper">
      <div aria-hidden className="grain absolute inset-0 -z-10 opacity-50" />
      <div aria-hidden className="absolute top-1/4 -right-1/4 -z-10 size-[60rem] rounded-full bg-gold/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-1/3 -left-1/4 -z-10 size-[50rem] rounded-full bg-maroon/20 blur-3xl" />
      <div className="container-page flex flex-1 flex-col justify-end pt-36 pb-14 sm:pb-20">
        <p className="eyebrow mb-8 animate-fade-up text-gold [animation-delay:150ms]">
          {tn("eyebrow")} <span className="mx-2 opacity-50">{"//"}</span>
          {sabbathSchedule.map((s) => formatTime(s.time, locale)).join("  //  ")}
        </p>

        <h1
          aria-label={words.join(" ")}
          className="headline flex flex-col text-[clamp(3.5rem,15vw,9.5rem)] sm:flex-row sm:flex-wrap sm:gap-x-[0.22em] sm:text-[clamp(3.5rem,8.6vw,9.5rem)]"
        >
          {words.map((word, i) => (
            <span key={word} aria-hidden className="block overflow-hidden pb-[0.04em]">
              <span
                className={`block animate-rise ${i === words.length - 1 ? "text-gold" : i % 2 === 1 ? "text-transparent [-webkit-text-stroke:2px_var(--color-paper)]" : ""}`}
                style={{ animationDelay: `${250 + i * 140}ms` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl animate-fade-up text-lg leading-relaxed text-paper/85 [animation-delay:900ms] sm:text-xl">
            {loc(heroTagline, locale)}
          </p>
          <div className="flex animate-fade-up flex-wrap gap-3 [animation-delay:1050ms]">
            <PillButton href={routes.visit} size="lg">
              {t("planVisit")}
            </PillButton>
            <PillButton href={site.liveStreamUrl || routes.media} variant="light" size="lg">
              {t("watchLive")}
            </PillButton>
          </div>
        </div>
      </div>

      <div aria-hidden className="overflow-hidden border-t border-paper/10 bg-maroon py-4">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0">
              {[...marquee, ...marquee].map((word, i) => (
                <li key={`${copy}-${i}`} className="headline flex items-center px-6 text-2xl text-paper sm:text-3xl">
                  {word}
                  <svg viewBox="0 0 12 16" className="ml-12 h-4 w-3 text-gold" fill="currentColor">
                    <path d="M5 0h2v5h5v2H7v9H5V7H0V5h5z" />
                  </svg>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
