import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | Golgotha SDA Church",
};

const copy = [
  { lang: "fr", title: "Page introuvable", cta: "Retour à l'accueil" },
  { lang: "ht", title: "Paj la pa egziste", cta: "Retounen lakay" },
  { lang: "en", title: "Page not found", cta: "Back to home" },
];

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={fontVariables}>
      <body className="bg-onyx text-paper">
        <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-10 px-6 py-24">
          <p className="font-display text-[clamp(6rem,22vw,16rem)] leading-none text-gold">404</p>
          <ul className="grid gap-6 sm:grid-cols-3">
            {copy.map((c) => (
              <li key={c.lang} lang={c.lang} className="border-t border-paper/20 pt-4">
                <p className="font-display text-2xl uppercase">{c.title}</p>
                <a href={`/${c.lang}/`} className="mt-3 inline-block text-sm underline underline-offset-4 hover:text-gold">
                  {c.cta}
                </a>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
