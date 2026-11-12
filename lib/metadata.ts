import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { localeNames, locales, type Locale } from "@/i18n/routing";
import { site } from "@/content/site";

export type PageKey = "visit" | "about" | "beliefs" | "heritage" | "ministries" | "events" | "media" | "give" | "prayer" | "contact";

export function localizedPath(locale: Locale, path: string): string {
  return `/${locale}${path === "/" ? "" : path}/`;
}

const ogLocale: Record<Locale, string> = { fr: "fr_FR", ht: "ht_HT", en: "en_US" };

export async function pageMetadata(
  key: PageKey | null,
  path: string,
  override?: { title?: string; description?: string },
): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("meta");
  const title = override?.title ?? (key ? t(`pages.${key}.title`) : t("title"));
  const description = override?.description ?? (key ? t(`pages.${key}.description`) : t("description"));

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [localeNames[l].htmlLang, localizedPath(l, path)]),
  );
  languages["x-default"] = localizedPath("fr", path);
  const image = { url: `/${locale}/opengraph-image`, width: 1200, height: 630, type: "image/png", alt: site.name };

  return {
    title: key || override?.title ? title : { absolute: title },
    description,
    alternates: { canonical: localizedPath(locale, path), languages },
    openGraph: {
      title,
      description,
      url: localizedPath(locale, path),
      siteName: site.name,
      locale: ogLocale[locale],
      type: "website",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
