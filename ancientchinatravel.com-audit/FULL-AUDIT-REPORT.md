 # SEO Audit Report: 5000-year-old-chinese-tomb.com

 **Audit Date:** 2026-08-04
 **Business Type:** Travel / Informational — Chinese archaeology tourism guides
 **Pages Audited:** 23 (static HTML site, Astro 5.7 + Tailwind)
 **Overall SEO Health Score:** 72/100

 ---

 ## Executive Summary

 5000-year-old-chinese-tomb.com is a well-structured, content-rich travel site covering 8 Chinese archaeological sites with practical guides, itineraries, and booking instructions for foreign travelers. The site has strong fundamentals: clean HTML, proper schema markup, well-organized heading structures, good internal linking, and genuinely useful content written from firsthand experience.

 The biggest issues are performance-related (massive OG images, no font preloading, no preconnect for Unsplash), a sitemap that's missing 3 pages, and missing security headers. The site is not yet deployed to a live domain, so some findings (SSL, redirects, CWV field data) are provisional.

 ### Top 5 Critical Issues

 1. **OG images are 1.8–2.6 MB each** — every page serves a 2MB+ OG image that Googlebot and social crawlers must download. These should be under 300 KB.
 2. **Sitemap missing 3 pages** — the blog index and both blog posts are absent from `sitemap.xml`. Search engines won't discover them.
 3. **All 9 homepage images come from Unsplash without `srcset` or CDN optimization** — the hero image alone is 1800×1200 loaded eagerly with no responsive sizing.
 4. **No `lastmod` or `changefreq` on any sitemap URL** — Google must guess freshness.
 5. **No `llms.txt` or `ai.txt`** — the site is invisible to AI crawlers (ChatGPT, Perplexity, Gemini) that increasingly drive travel query traffic.

 ### Top 5 Quick Wins

 1. **Compress and resize OG images** — use the existing 1200×630 dimensions but with quality 75, target 80–150 KB each.
 2. **Add 3 missing blog URLs to sitemap.**
 3. **Create `llms.txt`** listing the 8 site pages, 3 itineraries, and key guides.
 4. **Add `lastmod` dates to sitemap** (every URL has a known build date: 2026-08-04).
 5. **Add `<link rel="preconnect">` for `https://images.unsplash.com`** to shave ~100-200ms off image loads.

 ---

 ## Scoring Breakdown

 | Category | Score | Weight | Weighted |
 |----------|-------|--------|----------|
 | Technical SEO | 68/100 | 22% | 15.0 |
 | Content Quality | 85/100 | 23% | 19.6 |
 | On-Page SEO | 78/100 | 20% | 15.6 |
 | Schema / Structured Data | 88/100 | 10% | 8.8 |
 | Performance (CWV) | 52/100 | 10% | 5.2 |
 | AI Search Readiness | 42/100 | 10% | 4.2 |
 | Images | 68/100 | 5% | 3.4 |
 | **Total** | | | **71.8** |

 ---

 ## Technical SEO

 ### What Works

 - Clean static HTML with no client-side rendering — all content is crawlable immediately
 - `robots.txt` correctly configured: `Allow: /` for all bots, sitemap declared
 - Every page has a proper `<link rel="canonical">` pointing to the correct URL
 - Every page has `<link rel="alternate" hreflang="en">` and `x-default`
 - All 23 pages return proper HTML (no SPAs, no JavaScript-dependent rendering)
 - Internal linking is solid: 24–28 unique internal links per page, 29–49 total
 - Zero broken internal links detected
 - Clean URL structure: short slugs, no query parameters, no `.html` extensions

 ### What Needs Work

 #### [Critical] Sitemap is incomplete
 - **File:** [sitemap.xml](/abs/D:\workspaces\website\5000-year-old-chinese-tomb\dist\sitemap.xml)
 - 20 URLs in sitemap vs. 23 actual pages
 - Missing: `/blog`, `/blog/chinese-neolithic-jade-guide`, `/blog/liangzhu-vs-sanxingdui`
 - **Fix:** Add these 3 URLs with `priority=0.6` for blog index and `0.7` for blog posts

 #### [High] No lastmod or changefreq in sitemap
 - 0/20 URLs have `lastmod`; 0/20 have `changefreq`
 - **Fix:** Add `<lastmod>2026-08-04</lastmod>` and `<changefreq>monthly</changefreq>` to every URL

 #### [High] No security headers configured
 - Since this is a static site, security headers must be set at the server/CDN level (Cloudflare, Netlify, etc.)
 - Missing: `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, `Referrer-Policy: strict-origin-when-cross-origin`

 #### [Medium] No HTML sitemap or index page for discoverability
 - A dedicated `/sitemap` page linking to all 23 pages would help crawl depth for smaller search engines

 ### Score: 68/100

 ---

 ## On-Page SEO

 ### What Works

 - Every page has a well-crafted `<title>` with the format: `[Topic] | Ancient China Travel` — good keyword placement and branding
 - All meta descriptions are unique, keyword-rich, and between 125–221 characters (ideal range)
 - Every page has exactly 1 `<h1>` — consistent heading hierarchy
 - Clear, scannable heading structures: H1 → H2 → H3 on most pages
 - URL slugs are clean and descriptive (e.g., `/sanxingdui-museum-booking`, `/liangzhu-ancient-city`)
 - Open Graph tags are comprehensive: `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:image:width`, `og:image:height`, `og:image:type`
 - Twitter Card: `summary_large_image` on every page

 ### What Needs Work

 #### [High] Title tag HTML entities in rendered output
 - Several titles contain `&#39;` instead of `'` and `&amp;` instead of `&`
 - Examples: "The 5,000-Year-Old Chinese Tomb Everyone&#39;s Talking About", "Xi&#39;an &amp; Chengdu"
 - This appears in the `<title>` tag and in search results. The fix is in the Astro source — use `set:html` or `@html` template directive.

 #### [Medium] Site-wide OG image is generic
 - All 23 pages use `og-default.webp` as their `og:image`
 - Site-specific OG images exist on disk (`og-home.webp`, `og-dawenkou.webp`, `og-sanxingdui.webp`, etc.) but aren't being used
 - **Fix:** Map each page to its specific OG image in the Astro layout

 #### [Medium] No breadcrumb markup except on homepage
 - Only the homepage has `BreadcrumbList` schema. Site guide pages and blog posts should have breadcrumbs.

 ### Score: 78/100

 ---

 ## Content Quality

 ### What Works

 - **Strong E-E-A-T signals:** "Written by someone who has visited every site on this page", "Every booking guide tested with a foreign passport", "Ticket prices verified August 2026"
 - Content is genuinely useful: real ticket prices, step-by-step booking instructions, honest assessments ("Is It Worth Visiting?" pros/cons)
 - Zero AI-fluff or generic travel-site filler — every paragraph answers a real traveler question
 - Clear audience targeting: English-speaking foreign travelers visiting Chinese archaeological sites
 - Good word counts on core pages: site guides 645–783 words, itineraries 562–1049 words, booking guides 461–788 words

 ### What Needs Work

 #### [High] Blog index page is thin (216 words)
 - **File:** [blog/index.html](/abs/D:\workspaces\website\5000-year-old-chinese-tomb\dist\blog\index.html)
 - Only 2 blog posts listed + 2 placeholder links. Needs more content or should be consolidated.

 #### [Medium] Blog post "Liangzhu vs Sanxingdui" is thin (247 words)
 - The comparison topic is strong but the execution is brief. Should be 600+ words.

 #### [Medium] No author bylines or author pages
 - No `author` property in Article schema on most pages
 - No author bio or About page (adds E-E-A-T signals)

 #### [Low] No published dates visible on page
 - While schema includes `datePublished`/`dateModified`, these dates aren't visible to users on most pages

 ### Score: 85/100

 ---

 ## Schema & Structured Data

 ### What Works

 - **All JSON-LD is valid JSON** — zero parse errors detected across 22 schemas
 - Rich type coverage:
   - Homepage: `WebSite` + `SearchAction` + `ItemList` (8 TouristAttractions) + `BreadcrumbList`
   - Site guides (8 pages): `TouristAttraction` + `PostalAddress` + `Offer`
   - Itineraries (3 pages): `TravelGuide` + `Itinerary` + `City` + `FAQPage`
   - Booking guides (3 pages): `HowTo` + `HowToStep`
   - Article pages (5 pages): `Article`
   - Blog posts (2 pages): `Article`
 - FAQPage markup on key pages (homepage, visa guide, itineraries, practical guides)
 - Address and Offer (price) markup on site guide pages

 ### What Needs Work

 #### [High] Blog index page (blog/) has NO schema
 - Should have `Blog` + `ItemList` + `BlogPosting` schema

 #### [Medium] Some pages use a wrapper array pattern `["{...}", "{...}"]` — valid but unconventional
 - Pages like `henan-museum-booking`, `sanxingdui-museum-booking`, `shaanxi-history-museum-booking` wrap schema in `[JSON string, JSON string]`
 - This parses but might confuse some schema validators. Use `[{...}, {...}]` instead.

 #### [Low] Missing `aggregateRating` on TouristAttraction pages
 - Adding review/rating markup would enable star ratings in search results

 ### Score: 88/100

 ---

 ## Performance (Core Web Vitals)

 ### What Works

 - Static HTML with no client-side JavaScript framework — near-instant TTFB on a CDN
 - CSS is a single optimized file at 22.1 KB (excellent)
 - Fonts are self-hosted (328 KB total, 20 files — reasonable)
 - Image loading strategy: hero image is `loading="eager"` (correct), card images are `loading="lazy"` (correct)
 - All images have `alt` text
 - No render-blocking JavaScript
 - No third-party tracking scripts

 ### What Needs Work

 #### [Critical] OG images are 1.8–2.6 MB each
 - 12 OG images totaling ~27 MB on disk
 - `og-terracotta.webp`: 2.6 MB for a 1200×630 image
 - `og-yangling.webp`: 2.6 MB
 - `og-qianling.webp`: 2.4 MB
 - **Fix:** Recompress all OG images to quality 75, target 80–150 KB each. The current images are lossless — social platforms don't need lossless.

 #### [High] Homepage hero image is 1800×1200 from Unsplash with no `srcset`
 - Loaded `eager` with a single resolution. Mobile users download a desktop-sized image.
 - No `decoding="async"` on non-hero images

 #### [High] No preconnect for external image CDN
 - All 9 homepage images come from `images.unsplash.com`
 - Adding `<link rel="preconnect" href="https://images.unsplash.com">` would reduce connection setup by ~100-200ms

 #### [High] No font preloading
 - 20 font files, none preloaded. The first text paint waits for font discovery.
 - Key fonts to preload: Outfit 700 (headings) and Geist Sans 400 (body)

 #### [Medium] CSS is render-blocking
 - The single `<link rel="stylesheet">` blocks rendering until loaded. For a 22KB file this is minor, but inlining critical CSS for above-fold content would improve LCP.

 #### [Medium] No cache policy for static assets
 - The Astro build generates content-hashed filenames (`DxDEX7TP.css`), which is good for cache busting, but cache headers must be set at the server level.

 ### Estimated CWV (Lab, based on static analysis)

 | Metric | Estimated | Target | Status |
 |--------|-----------|--------|--------|
 | LCP | 2.5–4.0s | < 2.5s | Needs improvement |
 | INP | < 50ms | < 200ms | Pass |
 | CLS | 0.0 | < 0.1 | Pass |
 | TTFB | < 200ms (from CDN) | < 800ms | Pass |

 ### Score: 52/100

 ---

 ## Image Audit

 ### What Works

 - All images have descriptive `alt` text
 - All images have explicit `loading` attributes (eager for hero, lazy for below-fold)
 - Images are served in WebP format (OG images)
 - Aspect ratios are preserved with CSS (`aspect-[3/2]`, `object-cover`)
 - Unsplash images include auto-format and fit parameters

 ### What Needs Work

 #### [Critical] OG images: 12 files, 27 MB total, 1.8–2.6 MB each
 - See Performance section. This is the single most impactful fix.

 #### [High] Unsplash images are requested at fixed resolutions
 - Hero: 1800×1200 — should use `srcset` with 600w, 900w, 1200w, 1800w
 - Card thumbnails: 600×400 — reasonable but could use `srcset` for 2x displays

 #### [Medium] No `width`/`height` attributes on Unsplash images
 - All Unsplash images lack explicit dimensions, increasing CLS risk if CSS fails to load

 #### [Medium] Site guide pages and non-homepage pages have ZERO inline images
 - Content pages with 600–800 words and no supporting images. Adding one relevant image per page would improve engagement and SEO.

 ### Score: 68/100

 ---

 ## AI Search Readiness

 ### What Works

 - All content is fully crawlable (static HTML, no JS rendering)
 - `robots.txt` allows all crawlers (`User-agent: *`)
 - Sites are structured as individual entities with clear topical focus
 - FAQPage schema provides direct answer candidates for AI crawlers

 ### What Needs Work

 #### [Critical] No `llms.txt` or `ai.txt` file
 - AI crawlers (ChatGPT, Perplexity, Gemini, Claude) use `llms.txt` for efficient content discovery
 - **Fix:** Create `/llms.txt` listing all key pages with descriptions.

 #### [High] No `robots.txt` directives for AI-specific crawlers
 - Explicitly allow: `GPTBot`, `CCBot`, `PerplexityBot`, `Claude-Web`, `anthropic-ai`

 #### [Medium] No structured brand monitoring
 - No `profound` or brand mention tracking configured

 ### Score: 42/100

 ---

 ## Page-by-Page Summary

 | Page | Words | H1 | H2 | Schema | OG Image | Issues |
 |------|-------|----|----|--------|----------|--------|
 | Homepage (/) | 806 | 1 | 6 | WebSite+ItemList+Breadcrumb+FAQ | og-default.webp | Uses default OG; Unsplash images need srcset |
 | Dawenkou Site | 758 | 1 | 6 | TouristAttraction+Address+Offer | og-default.webp | No page-specific OG; no inline images |
 | Liangzhu Ancient City | 667 | 1 | 6 | TouristAttraction+Address+Offer | og-default.webp | No page-specific OG |
 | Sanxingdui | 701 | 1 | 6 | TouristAttraction+Address+Offer | og-default.webp | No page-specific OG |
 | Yin Xu | 679 | 1 | 6 | TouristAttraction+Address+Offer | og-default.webp | No page-specific OG |
 | Terracotta Warriors | 783 | 1 | 6 | TouristAttraction+Address+Offer | og-default.webp | No page-specific OG |
 | Han Yangling | 758 | 1 | 6 | TouristAttraction+Address+Offer | og-default.webp | No page-specific OG |
 | Mawangdui | 649 | 1 | 5 | TouristAttraction+Address+Offer | og-default.webp | No page-specific OG |
 | Qianling | 645 | 1 | 5 | TouristAttraction+Address+Offer | og-default.webp | No page-specific OG |
 | 10-Day Itinerary | 1049 | 1 | 5 | TravelGuide+Itinerary+FAQ | og-default.webp | No page-specific OG |
 | Xi'an-Chengdu | 573 | 1 | 4 | TravelGuide+Itinerary+FAQ | og-default.webp | No page-specific OG |
 | Henan Tour | 562 | 1 | 4 | TravelGuide+Itinerary+FAQ | og-default.webp | No page-specific OG |
 | Sanxingdui Booking | 788 | 1 | 5 | HowTo | og-default.webp | Schema wrapper format |
 | Henan Museum Booking | 461 | 1 | 4 | HowTo | og-default.webp | Schema wrapper format |
 | Shaanxi Museum Booking | 742 | 1 | 4 | HowTo | og-default.webp | Schema wrapper format |
 | 240-Hour Visa | 409 | 1 | 4 | Article+FAQ | og-default.webp | Slightly thin |
 | SIM Card Guide | 386 | 1 | 4 | Article+FAQ | og-default.webp | Slightly thin |
 | Tour Guide Worth It | 337 | 1 | 3 | Article+FAQ | og-default.webp | Slightly thin |
 | Train Tickets | 500 | 1 | 5 | Article+FAQ | og-default.webp | OK |
 | 5000-Yr Tomb Article | 520 | 1 | 4 | Article | og-default.webp | OK |
 | Blog Index | 216 | 1 | 4 | NONE | og-default.webp | Thin, no schema, not in sitemap |
 | Jade Guide (Blog) | 600 | 1 | 4 | Article | og-default.webp | Not in sitemap |
 | Liangzhu vs Sanxingdui (Blog) | 247 | 1 | 1 | Article | og-default.webp | Thin, not in sitemap |

 ---

 *Report generated by Claude SEO Audit v2.2.0. 23 pages crawled, 0 errors.*
