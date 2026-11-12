import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { isLocale, locales } from "@/i18n/routing";
import { fullAddress, heroTagline, site } from "@/content/site";
import { loc } from "@/content/types";

export const alt = "Golgotha Seventh-day Adventist Church";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "fr";
  const logo = await readFile(join(process.cwd(), "public/images/golgotha-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #060606 0%, #111111 55%, #3a0912 100%)",
          color: "#fdfcfa",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 520 }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 5, textTransform: "uppercase", color: "#e8d28a" }}>
            {loc(site.fullName, locale)}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 36, lineHeight: 1.35, color: "rgba(253,252,250,0.9)" }}>
            {loc(heroTagline, locale)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 40, fontSize: 24, color: "rgba(253,252,250,0.8)" }}>
            <div style={{ display: "flex", width: 48, height: 8, background: "#7b1626", borderRadius: 4 }} />
            {fullAddress}
          </div>
        </div>
        <img src={logoSrc} width={520} height={326} alt="" />
      </div>
    ),
    size,
  );
}
