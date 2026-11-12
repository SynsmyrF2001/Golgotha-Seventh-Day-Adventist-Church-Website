import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { locale as rootLocale } from "next/root-params";
import { isLocale, localeNames, routing } from "@/i18n/routing";
import { fontVariables } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { ChurchJsonLd } from "@/components/layout/ChurchJsonLd";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    metadataBase: new URL(site.url),
    title: { default: t("title"), template: `%s | ${site.name}` },
    description: t("description"),
    applicationName: site.name,
    formatDetection: { telephone: true, address: true, email: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await rootLocale();
  if (!isLocale(locale)) notFound();
  const t = await getTranslations("nav");

  return (
    <html lang={localeNames[locale].htmlLang} className={fontVariables} data-scroll-behavior="smooth">
      <body>
        <NextIntlClientProvider>
          <Providers>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-none focus:bg-gold focus:px-5 focus:py-3 focus:font-semibold focus:text-onyx-deep"
            >
              {t("skip")}
            </a>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
        <ChurchJsonLd locale={locale} />
      </body>
    </html>
  );
}
