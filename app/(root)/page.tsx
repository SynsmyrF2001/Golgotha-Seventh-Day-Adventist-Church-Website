import type { Metadata } from "next";
import Script from "next/script";
import { routing } from "@/i18n/routing";

const target = `/${routing.defaultLocale}/`;

export const metadata: Metadata = {
  title: "Golgotha SDA Church",
  robots: { index: false },
};

export default function RootRedirect() {
  return (
    <main className="grid min-h-screen place-items-center bg-surface p-8 text-center text-ink">
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <Script id="locale-redirect" strategy="beforeInteractive">
        {`(function(){var l=(navigator.language||"").toLowerCase();var t=l.indexOf("ht")===0?"/ht/":l.indexOf("en")===0?"/en/":"${target}";window.location.replace(t);})();`}
      </Script>
      <p>
        <a className="underline" href={target}>
          Golgotha SDA Church
        </a>
      </p>
    </main>
  );
}
