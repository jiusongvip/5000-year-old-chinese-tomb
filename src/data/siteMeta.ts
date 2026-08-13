export const SITE = {
  name: "Ancient China Travel",
  url: "https://5000-year-old-chinese-tomb.com",
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
  "/5000-year-old-chinese-tomb": { label: "The 5,000-Year-Old Chinese Tomb", lastmod: "2026-08-04", og: "/og-tomb.webp" },
  "/about": { label: "About & Contact", lastmod: "2026-08-04", og: "/og-default.webp" },
  "/privacy": { label: "Privacy Policy", lastmod: "2026-08-04", og: "/og-default.webp" },

  "/liangzhu-ancient-city": { label: "Liangzhu Ancient City", lastmod: "2026-08-04", og: "/og-liangzhu.webp" },
  "/sanxingdui": { label: "Sanxingdui", lastmod: "2026-08-04", og: "/og-sanxingdui.webp" },
  "/yin-xu-anyang": { label: "Yin Xu, Anyang", lastmod: "2026-08-04", og: "/og-yinxu.webp" },
  "/terracotta-warriors": { label: "Terracotta Warriors", lastmod: "2026-08-04", og: "/og-terracotta.webp" },
  "/dawenkou-site": { label: "Dawenkou Site", lastmod: "2026-08-04", og: "/og-dawenkou.webp" },
  "/han-yangling-mausoleum": { label: "Han Yangling Mausoleum", lastmod: "2026-08-04", og: "/og-yangling.webp" },
  "/mawangdui-han-tombs": { label: "Mawangdui Han Tombs", lastmod: "2026-08-04", og: "/og-mawangdui.webp" },
  "/qianling-mausoleum": { label: "Qianling Mausoleum", lastmod: "2026-08-04", og: "/og-qianling.webp" },

  "/ancient-china-10-day-itinerary": { label: "Ancient China in 10 Days", lastmod: "2026-08-04", og: "/og-itinerary.webp" },
  "/xian-chengdu-ancient-sites": { label: "Xi'an & Chengdu Ancient Sites", lastmod: "2026-08-04", og: "/og-xianchengdu.webp" },
  "/henan-archaeology-tour": { label: "Henan Archaeology Tour", lastmod: "2026-08-04", og: "/og-henan.webp" },

  "/sanxingdui-museum-booking": { label: "Sanxingdui Booking Guide", lastmod: "2026-08-04", og: "/og-booking-sanxingdui.webp" },
  "/henan-museum-booking": { label: "Henan Museum Booking Guide", lastmod: "2026-08-04", og: "/og-booking-henan.webp" },
  "/shaanxi-history-museum-booking": { label: "Shaanxi History Museum Booking Guide", lastmod: "2026-08-04", og: "/og-booking-shaanxi.webp" },
  "/china-museum-booking-guide": { label: "How to Book Chinese Museum Tickets", lastmod: "2026-08-04", og: "/og-default.webp" },

  "/china-240-hour-transit-visa": { label: "China 240-Hour Transit Visa", lastmod: "2026-08-04", og: "/og-visa.webp" },
  "/how-to-buy-train-tickets-china": { label: "Buying Train Tickets in China", lastmod: "2026-08-04", og: "/og-train.webp" },
  "/china-sim-card-tourist": { label: "China SIM Card for Tourists", lastmod: "2026-08-04", og: "/og-sim.webp" },
  "/china-tour-guide-worth-it": { label: "Is a China Tour Guide Worth It?", lastmod: "2026-08-04", og: "/og-guide.webp" },

  "/best-time-to-visit-china": { label: "Best Time to Visit Chinese Ancient Sites", lastmod: "2026-08-04", og: "/og-default.webp" },
  "/faq": { label: "FAQ", lastmod: "2026-08-04", og: "/og-default.webp" },

  "/blog": { label: "Blog", lastmod: "2026-08-04", og: "/og-home.webp" },
  "/blog/chinese-neolithic-jade-guide": { label: "A Foreigner's Guide to Neolithic Chinese Jade", lastmod: "2026-08-04", og: "/og-liangzhu.webp" },
  "/blog/liangzhu-vs-sanxingdui": { label: "Liangzhu vs Sanxingdui", lastmod: "2026-08-04", og: "/og-sanxingdui.webp" },
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