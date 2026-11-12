import type { Locale } from "@/i18n/routing";
import { sabbathSchedule, site } from "@/content/site";
import { loc } from "@/content/types";
import { localizedPath } from "@/lib/metadata";

/** schema.org structured data so search engines can show address, hours, and contact details. */
export function ChurchJsonLd({ locale }: { locale: Locale }) {
  const url = new URL(localizedPath(locale, "/"), site.url).toString();
  const sameAs = Object.values(site.social).filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: loc(site.fullName, locale),
    alternateName: site.name,
    url,
    telephone: "+1-" + site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "https://schema.org/Saturday",
      opens: sabbathSchedule[0]?.time,
      closes: "14:00",
    },
    event: sabbathSchedule.map((s) => ({
      "@type": "Event",
      name: loc(s.title, locale),
      description: loc(s.description, locale),
      eventSchedule: {
        "@type": "Schedule",
        byDay: "https://schema.org/Saturday",
        repeatFrequency: "P1W",
        startTime: s.time,
        scheduleTimezone: site.timeZone,
      },
      location: { "@type": "Place", name: site.name, address: `${site.address.street}, ${site.address.city}, ${site.address.region}` },
    })),
    employee: { "@type": "Person", name: site.pastor, jobTitle: "Pastor" },
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
