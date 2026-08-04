 # Performance Findings (Core Web Vitals)

 **Score:** 52/100

 ## Estimated Metrics (Lab)

 These are estimates based on static analysis. Real field data will be available after deployment with Google Search Console.

 | Metric | Estimated | Target | Status |
 |--------|-----------|--------|--------|
 | LCP | 2.5–4.0s | < 2.5s | Needs improvement |
 | INP | < 50ms | < 200ms | Pass |
 | CLS | 0.0 (static layout) | < 0.1 | Pass |
 | TTFB | < 200ms (CDN) | < 800ms | Pass |

 ## Resource Summary

 | Resource | Size | Notes |
 |----------|------|-------|
 | HTML (homepage) | 34.7 KB | Good |
 | CSS (single file) | 22.1 KB | Excellent |
 | Fonts (20 files) | 328.4 KB | Reasonable, needs preloading |
 | OG images (12 files) | 27 MB total | Critical — needs compression |
 | Unsplash images | CDN | Good, needs preconnect + srcset |
 | JavaScript | <1 KB | Excellent |

 ## LCP Optimization

 Current LCP candidates on homepage:
 1. Hero image: 1800×1200 from Unsplash, ~200–400 KB over network
 2. Font rendering: Outfit 700 (headings) discovered via CSS

 Recommendations:
 - Add `fetchpriority="high"` to hero image
 - Preconnect to `images.unsplash.com`
 - Preload critical fonts (Outfit 700, Geist Sans 400)
 - Inline critical CSS for above-fold content

 ## Render-Blocking Resources

 - 1 CSS file (22.1 KB) — acceptable, but critical CSS inlining would improve FCP
 - No render-blocking JavaScript

 ## Third-Party Impact

 - **OpenStreetMap iframe** (homepage) — lazy-loaded, non-blocking
 - **Unsplash CDN** (9 images) — external, needs preconnect
 - **No analytics scripts** — excellent for performance
 - **No ad scripts** — excellent for performance

 ## Caching

 - Content-hashed filenames enable aggressive caching (CSS, fonts, images)
 - Cache headers must be configured at server/CDN level
 - Recommended: `Cache-Control: public, max-age=31536000, immutable` for hashed assets
 - Recommended: `Cache-Control: public, max-age=3600` for HTML pages
