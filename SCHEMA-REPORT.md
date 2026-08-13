# Schema Audit Report — 5000-year-old-chinese-tomb.com

Date: 2026-08-13 · Method: manual source review + dist HTML inspection (`npx astro build`)

## Validation summary

| Check | Status |
|---|---|
| `@context` present on every JSON-LD block | ✅ `104/104` blocks across 28 pages |
| Invalid / deprecated type usage | ✅ 0 (`HowTo` removed — deprecated since 2023-09, no rich results) |
| JSON signatures (headline/description/author/date on Article) | ✅ 0 (auto-canonicalized at build) |
| String-vs-array types (`knowsAbout` as array) | ✅ |
| Valid language codes (`inLanguage: "en"`) | ✅ |
| Hreflang consistency | N/A (single-language site, no hreflang emitted) |

## Per-schema findings & changes applied

### Global (BaseLayout) — Organization, Person, WebSite, BreadcrumbList, Article
- Added `@context` to all five helpers in `src/data/schemas.ts` (was the main validator failure: every block omitted it).
- `Article` now supports `type: "Article" | "BlogPosting"`; both blog posts set `articleType="BlogPosting"` (more specific, active rich-result type).

### Blog posts → BlogPosting (CHANGE)
- `blog/liangzhu-vs-sanxingdui` and `blog/chinese-neolithic-jade-guide` now emit `BlogPosting` instead of generic `Article`.

### Booking pages — HowTo (REMOVED)
- All 4 `*-museum-booking.astro` pages + `china-museum-booking-guide.astro`:
  - **HowTo was deprecated** — Google removed HowTo rich results Sept 2023; no high-value "how to book" rich-result case justifies keeping it.
  - Removed the HowTo blocks entirely; step-by-step content remains as visible HTML (`+seen in DOM`). FAQPage kept (continues to feed FAQ rich results / AI answers).

### TouristAttraction (site pages, via `touristAttractionSchema`)
- Added `@context`.
- Added `isAccessibleForFree: true` for free-entry sites (ticketLow === 0, e.g. Liangzhu, Yin Xu).
- Already correct: `geo`, `address`, `openingHours`, conditional `offers` (CNY), `touristType`.

### Homepage (`index.astro`)
- Added `@context` to inline `ItemList` + `FAQPage` schema.

### About page (`about.astro`)
- Added `@context` to inline `Person` + `Organization`.
- Removed empty `sameAs: []` (added nothing; would signal unverifiable identity). **Follow-up:** fill `sameAs` with verifiable profiles (see Recommendations).

### Factual correctness fix (schema + on-page text)
- Wangzhuang M27 was announced **October 2024**. Fixed `datePublished` on the tomb page from `2025-03-15` → `2024-10-15`, and corrected "March/early 2025" claims in `index.astro`, `about.astro`, `dawenkou-site.astro`, and the tomb page body.

## Types kept (eligible/active — no change needed)
- FAQPage (home, 18 site pages, 4 booking pages, booking hub, faq hub) — keep for FAQ rich results and AI answer extraction.
- ItemList (home).
- BreadcrumbList (all non-noindex pages).
- Organization / Person / WebSite (all pages).

## Skipped (no truthful data / no rich-result value)
- `AggregateRating` / `Review` (no genuine reviews).
- `Event` (none), `VideoObject` (none).
- `SearchAction` on WebSite (no site search; Google requirement retired).
- `sameAs` on Person/Organization (no verifiable external profiles yet — see below).

## Recommendations (priority order)
1. **P0 — Author verifiability:** populate `Person.sameAs` with at least 2–3 real profiles (e.g. LinkedIn, a guest post, a travel-profile platform) once they exist; add author photo.
2. **P1 — External citations:** add 2–3 authoritative inbound citations into article pages for the October 2024 Wangzhuang claim (Xinhua / Global Times / SCMP / Archaeology Magazine), with `rel="noopener"` outgoing links.
3. **P2 — Opening hours structure:** if machine-readable `openingHoursSpecification` (day/hour ranges) becomes available in `src/data/sites.ts`, upgrade TouristAttraction from text to structured spec + `publicAccess`.
4. **Monitor:** re-validate with Rich Results Test after any schema edit; keep the article/blogpost type split as posts accumulate.

## Workflow artifacts
- `generated-schema.json` — aggregated final schema examples (see file).
- Rebuild command used for validation: `npm run build` (29 pages) + dist JSON-LD scan (104 blocks, 0 missing `@context`, 0 HowTo).