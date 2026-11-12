export type NavKey =
  | "home"
  | "visit"
  | "about"
  | "beliefs"
  | "heritage"
  | "ministries"
  | "events"
  | "media"
  | "give"
  | "prayer"
  | "contact";

export const routes: Record<NavKey, string> = {
  home: "/",
  visit: "/visit",
  about: "/about",
  beliefs: "/about/beliefs",
  heritage: "/about/heritage",
  ministries: "/ministries",
  events: "/events",
  media: "/media",
  give: "/give",
  prayer: "/prayer",
  contact: "/contact",
};

export const menuGroups: { key: "discover" | "grow" | "engage"; items: NavKey[] }[] = [
  { key: "discover", items: ["visit", "about", "beliefs", "heritage"] },
  { key: "grow", items: ["ministries", "events", "media"] },
  { key: "engage", items: ["give", "prayer", "contact"] },
];

export const headerLinks: NavKey[] = ["about", "ministries", "events", "media"];
