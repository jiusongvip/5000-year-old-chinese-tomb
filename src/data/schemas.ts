import { SITE } from "./siteMeta";
import type { Site } from "./sites";

function absolute(path: string): string {
  return new URL(path, SITE.url).href;
}

const CONTEXT = "https://schema.org";

export function organizationSchema() {
  return {
    "@context": CONTEXT,
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    logo: absolute("/favicon.svg"),
    founder: { "@type": "Person", name: SITE.author },
  };
}

export function personSchema() {
  return {
    "@context": CONTEXT,
    "@type": "Person",
    name: SITE.author,
    jobTitle: "Independent Travel Writer",
    url: SITE.url,
    knowsAbout: [
      "Chinese Archaeology",
      "Ancient Chinese History",
      "China Travel",
      "Museum Booking",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "en",
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export interface Crumb {
  name: string;
  item: string;
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absolute(c.item),
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  canonicalURL: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  type?: "Article" | "BlogPosting";
}) {
  return {
    "@context": CONTEXT,
    "@type": opts.type ?? "Article",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.canonicalURL },
    author: { "@type": "Person", name: opts.author },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    image: absolute(opts.image),
  };
}

export function touristAttractionSchema(site: Site, opts?: { streetAddress?: string }) {
  return {
    "@context": CONTEXT,
    "@type": "TouristAttraction",
    name: site.name,
    description: site.description,
    url: absolute(`/${site.slug}`),
    image: absolute(site.image),
    touristType: "Archaeology enthusiasts, History lovers, Museum visitors",
    ...(site.ticketLow === 0 ? { isAccessibleForFree: true } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.province,
      addressCountry: "CN",
      ...(opts?.streetAddress ? { streetAddress: opts.streetAddress } : {}),
    },
    ...(site.lat && site.lng
      ? { geo: { "@type": "GeoCoordinates", latitude: site.lat, longitude: site.lng } }
      : {}),
    openingHours: site.hours,
    ...(site.ticketLow > 0
      ? {
          offers: {
            "@type": "Offer",
            price: site.ticketLow === site.ticketHigh ? String(site.ticketLow) : `${site.ticketLow}-${site.ticketHigh}`,
            priceCurrency: "CNY",
          },
        }
      : {}),
  };
}

export function faqSchema(questions: { q: string; a: string }[]) {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: questions.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}