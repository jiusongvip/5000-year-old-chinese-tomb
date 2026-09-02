export const SITE = {
  name: "Ancient China Travel",
  url: "https://www.5000-year-old-chinese-tomb.com",
  description:
    "Step-by-step guides to visit ancient Chinese archaeological sites — ticket prices, museum booking instructions, and itineraries for foreign travelers.",
  author: "Alex Chen",
  email: "hello@ancientchinatravel.com",
  defaultOg: "/og-default.webp",
  ogWidth: 1200,
  ogHeight: 630,
} as const;

export interface PageMeta {
  label: string;
  lastmod: string;
  og?: string;
}

export const pageMeta: Record<string, PageMeta> = {
  "/": { label: "Home", lastmod: "2026-08-04", og: "/og-home.webp" },
  "/about/": { label: "About", lastmod: "2026-09-02" },
  "/privacy/": { label: "Privacy Policy", lastmod: "2026-09-02" },
  "/terms/": { label: "Terms of Use", lastmod: "2026-09-02" },
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function humanDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${monthNames[m - 1]} ${d}, ${y}`;
}

export function lastUpdatedFor(pathname: string): string {
  const path = pathname.replace(/\/$/, "");
  const meta = pageMeta[path] ?? pageMeta[pathname] ?? pageMeta["/"];
  return humanDate(meta.lastmod);
}

export function ogFor(pathname: string): string {
  const path = pathname.replace(/\/$/, "");
  const meta = pageMeta[path] ?? pageMeta[pathname];
  return meta?.og ?? SITE.defaultOg;
}