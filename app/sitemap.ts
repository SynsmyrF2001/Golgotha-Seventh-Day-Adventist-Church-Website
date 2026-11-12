import type { MetadataRoute } from "next";
import { localeNames, locales } from "@/i18n/routing";
import { ministries } from "@/content/ministries";
import { site } from "@/content/site";
import { localizedPath } from "@/lib/metadata";
import { routes } from "@/lib/nav";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...Object.values(routes), ...ministries.map((m) => `/ministries/${m.slug}`)];
  const absolute = (path: string) => new URL(path, site.url).toString();

  return paths.flatMap((path) => {
    const languages = Object.fromEntries(locales.map((l) => [localeNames[l].htmlLang, absolute(localizedPath(l, path))]));
    return locales.map((locale) => ({
      url: absolute(localizedPath(locale, path)),
      changeFrequency: path === "/" || path === "/events" || path === "/media" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/visit" ? 0.9 : 0.7,
      alternates: { languages },
    }));
  });
}
