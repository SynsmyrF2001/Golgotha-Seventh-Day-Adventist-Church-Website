import { getTranslations } from "next-intl/server";
import { directionsUrl, fullAddress, mapsEmbedUrl, site } from "@/content/site";
import { routes } from "@/lib/nav";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

export async function FindUs() {
  const t = await getTranslations("home");
  const tc = await getTranslations("cta");

  return (
    <section className="relative isolate bg-onyx-deep">
      <iframe
        src={mapsEmbedUrl}
        title={fullAddress}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 -z-10 h-full w-full opacity-60 grayscale-[60%] contrast-[1.1]"
      />
      <div className="container-page pointer-events-none flex min-h-[36rem] items-center py-20">
        <Reveal className="pointer-events-auto max-w-md rounded-3xl bg-card p-8 shadow-2xl sm:p-10">
          <p className="eyebrow mb-3 text-maroon">{t("findUsEyebrow")}</p>
          <h2 className="headline text-5xl text-onyx">{t("findUsTitle")}</h2>
          <p className="mt-4 text-lg font-semibold text-onyx">{fullAddress}</p>
          <p className="mt-2 leading-relaxed text-ink/70">{t("findUsText")}</p>
          <p className="mt-4 text-sm text-ink/70">
            <a href={site.phoneHref} className="font-semibold text-onyx hover:text-maroon">
              {site.phone}
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PillButton href={directionsUrl}>{tc("directions")}</PillButton>
            <PillButton href={routes.visit} variant="outline">
              {tc("planVisit")}
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
