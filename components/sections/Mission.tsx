import { getLocale, getTranslations } from "next-intl/server";
import { missionStatement } from "@/content/site";
import { loc } from "@/content/types";
import { routes } from "@/lib/nav";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

export async function Mission() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const tc = await getTranslations("cta");

  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="container-page grid gap-10 lg:grid-cols-[14rem_1fr]">
        <Reveal>
          <p className="eyebrow text-maroon">{t("missionEyebrow")}</p>
        </Reveal>
        <div>
          <Reveal>
            <p className="font-serif text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.15] text-onyx">
              {loc(missionStatement, locale)}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
            <PillButton href={routes.about} variant="outline">
              {tc("aboutUs")}
            </PillButton>
            <PillButton href={routes.beliefs} variant="outline">
              {tc("exploreBeliefs")}
            </PillButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
