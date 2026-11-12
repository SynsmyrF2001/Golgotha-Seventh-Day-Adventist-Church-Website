import { getLocale } from "next-intl/server";
import { Info } from "lucide-react";
import { givePage } from "@/content/pages";
import { site } from "@/content/site";
import { loc, type Localized } from "@/content/types";
import { CopyButton } from "@/components/ui/CopyButton";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

type Method = {
  id: "cashApp" | "zelle";
  name: string;
  badge: string;
  badgeClass: string;
  value: string;
  /** Optional deep link that opens the app or site with the account pre-filled */
  href?: string;
  step: Localized;
};

function buildMethods(): Method[] {
  const g = site.giving;
  const d = givePage.digital;
  const tag = g.cashApp.replace(/^\$?/, "$");

  return [
    {
      id: "cashApp",
      name: "Cash App",
      badge: "$",
      badgeClass: "bg-[#00d632] text-[#052e0f]",
      value: g.cashApp ? tag : "",
      href: g.cashApp ? `https://cash.app/${tag}` : undefined,
      step: d.steps.cashApp,
    },
    {
      id: "zelle",
      name: "Zelle",
      badge: "Z",
      badgeClass: "bg-[#6d1ed4] text-white",
      value: g.zelle,
      step: d.steps.zelle,
    },
  ];
}

export async function GiveDigital() {
  const locale = await getLocale();
  const d = givePage.digital;
  const methods = buildMethods();

  return (
    <section id="digital" className="scroll-mt-24 bg-mist py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-maroon">{loc(d.eyebrow, locale)}</p>
          <h2 className="headline mt-3 text-5xl text-onyx sm:text-6xl">{loc(d.title, locale)}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">{loc(d.intro, locale)}</p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {methods.map((m, i) => (
            <Reveal as="li" key={m.id} delay={i * 0.08} className="flex flex-col rounded-3xl bg-card p-8 ring-1 ring-onyx/10 sm:p-10">
              <div className="flex items-center gap-4">
                <span aria-hidden className={`grid size-14 place-items-center rounded-2xl font-display text-3xl ${m.badgeClass}`}>
                  {m.badge}
                </span>
                <h3 className="headline text-3xl text-onyx">{m.name}</h3>
              </div>

              <p className="mt-5 flex-1 leading-relaxed text-ink/75">{loc(m.step, locale)}</p>

              {m.value ? (
                <>
                  <p className="mt-6 border-l-4 border-gold bg-onyx/5 px-4 py-3 font-mono text-lg font-semibold break-all text-onyx select-all">
                    {m.value}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <CopyButton value={m.value} label={loc(d.copy, locale)} copiedLabel={loc(d.copied, locale)} />
                    {m.href && (
                      <PillButton href={m.href} variant="solid">
                        {loc(d.open, locale)} {m.name}
                      </PillButton>
                    )}
                  </div>
                </>
              ) : (
                <div className="mt-6 border-l-4 border-gold bg-onyx/5 px-4 py-3">
                  <p className="text-ink/80">{loc(d.pending, locale)}</p>
                  <p className="mt-3">
                    <PillButton href="/contact" variant="outline">
                      {loc(d.contact, locale)}
                    </PillButton>
                  </p>
                </div>
              )}
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 flex items-start gap-4 bg-onyx p-6 text-paper sm:p-8">
          <Info className="mt-0.5 size-6 shrink-0 text-gold" aria-hidden />
          <div>
            <p className="headline text-2xl">{loc(d.memo.title, locale)}</p>
            <p className="mt-2 leading-relaxed text-paper/85">{loc(d.memo.text, locale)}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
