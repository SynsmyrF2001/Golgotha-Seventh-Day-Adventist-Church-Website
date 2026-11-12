import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { directionsUrl, fullAddress, sabbathSchedule, site } from "@/content/site";
import { loc } from "@/content/types";
import { formatTime } from "@/lib/format";
import { menuGroups, routes } from "@/lib/nav";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialIcons } from "@/components/ui/SocialIcons";

export async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("cta");

  return (
    <footer className="relative overflow-hidden bg-onyx-deep text-paper">
      <div aria-hidden className="grain absolute inset-0 opacity-40" />
      <div className="container-page relative pt-20 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo className="w-56" />
            <p className="mt-4 max-w-xs text-paper/75">{t("tagline")}</p>
            <SocialIcons className="mt-6" />
          </div>

          <div>
            <h2 className="eyebrow mb-4 text-gold">{t("services")}</h2>
            <ul className="space-y-3">
              {sabbathSchedule.map((s) => (
                <li key={s.id}>
                  <p className="font-semibold">{loc(s.title, locale)}</p>
                  <p className="text-paper/70">{formatTime(s.time, locale)}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4 text-gold">{t("contact")}</h2>
            <address className="space-y-2 not-italic text-paper/80">
              <p>
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {fullAddress}
                </a>
              </p>
              <p>
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <nav aria-label={t("explore")}>
            <h2 className="eyebrow mb-4 text-gold">{t("explore")}</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-paper/80">
              {menuGroups.flatMap((g) => g.items).map((key) => (
                <li key={key}>
                  <Link href={routes[key]} className="hover:text-gold">
                    {tn(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <Link
            href={routes.visit}
            className="rounded-none bg-maroon px-5 py-3 text-sm font-semibold lowercase transition-colors hover:bg-maroon-dark"
          >
            [ {tc("planVisit")} ]
          </Link>
          <Link
            href={routes.give}
            className="rounded-none border border-paper/40 px-5 py-3 text-sm font-semibold lowercase transition-colors hover:bg-card hover:text-onyx"
          >
            [ {tc("giveOnline")} ]
          </Link>
        </div>

        <p aria-hidden className="headline mt-16 text-center text-[clamp(4rem,19vw,17rem)] leading-[0.8] text-paper/[0.07] select-none">
          Golgotha
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {loc(site.fullName, locale)}. {t("rights")}
          </p>
          <a href={site.adventistUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            {t("adventist")} ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
