 # SEO Action Plan: 5000-year-old-chinese-tomb.com

 **Date:** 2026-08-04 | **Health Score:** 72/100 → Target 90+

 ---

 ## Phase 1: Critical Fixes (Week 1)

 *Fix immediately — these block indexing or significantly harm rankings.*

 ### 1.1 Compress OG Images
 **Effort:** 30 min | **Impact:** High (performance, social sharing)

 Recompress all 12 OG images from 1.8–2.6 MB to 80–150 KB:
 ```
 npx sharp-cli --input og-*.webp --output og-*.webp --format webp --quality 75
 ```
 Or use `cwebp -q 75 og-default.webp -o og-default.webp`

 ### 1.2 Add Missing Pages to Sitemap
 **Effort:** 15 min | **Impact:** Critical (indexability)

 Add to [sitemap.xml](/abs/D:\workspaces\website\5000-year-old-chinese-tomb\dist\sitemap.xml):
 ```xml
 <url><loc>https://5000-year-old-chinese-tomb.com/blog</loc><priority>0.6</priority><lastmod>2026-08-04</lastmod><changefreq>monthly</changefreq></url>
 <url><loc>https://5000-year-old-chinese-tomb.com/blog/chinese-neolithic-jade-guide</loc><priority>0.7</priority><lastmod>2026-08-04</lastmod><changefreq>monthly</changefreq></url>
 <url><loc>https://5000-year-old-chinese-tomb.com/blog/liangzhu-vs-sanxingdui</loc><priority>0.7</priority><lastmod>2026-08-04</lastmod><changefreq>monthly</changefreq></url>
 ```

 ### 1.3 Add lastmod and changefreq to All Sitemap URLs
 **Effort:** 5 min (code change) | **Impact:** High (freshness signals)

 Modify sitemap generation to include `<lastmod>` and `<changefreq>` on every URL.

 ### 1.4 Create llms.txt
 **Effort:** 20 min | **Impact:** High (AI crawler visibility)

 Create `/public/llms.txt` with structured listing of all key pages and their descriptions.

 ### 1.5 Fix Title Tag HTML Entities
 **Effort:** 10 min | **Impact:** Medium (search appearance)

 In the affected `.astro` files, ensure title text uses raw characters not HTML entities:
 ```astro
 <!-- Before -->
 <title>Xi&#39;an &amp; Chengdu | Ancient China Travel</title>
 <!-- After -->
 <title>Xi'an & Chengdu | Ancient China Travel</title>
 ```
 Use `{@html title}` or ensure the title variable doesn't double-encode.

 ---

 ## Phase 2: High-Impact Improvements (Weeks 2–3)

 *These significantly improve rankings and user experience.*

 ### 2.1 Add Unsplash Preconnect
 **Effort:** 5 min | **Impact:** Medium-High (LCP)

 Add to `BaseLayout.astro` head:
 ```html
 <link rel="preconnect" href="https://images.unsplash.com">
 <link rel="dns-prefetch" href="https://images.unsplash.com">
 ```

 ### 2.2 Preload Key Fonts
 **Effort:** 10 min | **Impact:** Medium (FCP, LCP)

 ```html
 <link rel="preload" href="/_astro/outfit-latin-700-normal.D4itBLBr.woff" as="font" type="font/woff" crossorigin>
 <link rel="preload" href="/_astro/geist-sans-latin-400-normal.gapTbOY8.woff2" as="font" type="font/woff2" crossorigin>
 ```

 ### 2.3 Add Responsive Image srcset for Hero
 **Effort:** 15 min | **Impact:** Medium (LCP, bandwidth)

 Generate responsive image sizes and add `srcset` + `sizes` to the homepage hero image.

 ### 2.4 Use Page-Specific OG Images
 **Effort:** 30 min | **Impact:** Medium (social sharing CTR)

 Map each page to its site-specific OG image already on disk:
 ```
 / → og-home.webp
 /liangzhu-ancient-city → og-liangzhu.webp
 /sanxingdui → og-sanxingdui.webp
 /terracotta-warriors → og-terracotta.webp
 /dawenkou-site → og-dawenkou.webp
 /yin-xu-anyang → og-yinxu.webp
 /han-yangling-mausoleum → og-yangling.webp
 /mawangdui-han-tombs → og-mawangdui.webp
 /qianling-mausoleum → og-qianling.webp
 /5000-year-old-chinese-tomb → og-tomb.webp
 /ancient-china-10-day-itinerary → og-itinerary.webp
 ```

 ### 2.5 Configure Security Headers
 **Effort:** 30 min (server config) | **Impact:** Medium (trust signals)

 Add at CDN/server level (Cloudflare/Netlify):
 ```
 X-Content-Type-Options: nosniff
 X-Frame-Options: DENY
 Referrer-Policy: strict-origin-when-cross-origin
 Strict-Transport-Security: max-age=31536000; includeSubDomains
 Content-Security-Policy: default-src 'self'; img-src 'self' https://images.unsplash.com data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self'; frame-src https://www.openstreetmap.org
 ```

 ### 2.6 Add Blog Schema to Blog Index
 **Effort:** 15 min | **Impact:** Medium (structured data coverage)

 Add `Blog` + `ItemList` + `BlogPosting` schema to the blog index page.

 ### 2.7 Add AI Crawler Rules to robots.txt
 **Effort:** 5 min | **Impact:** Medium

 ```
 User-agent: GPTBot
 Allow: /
 User-agent: CCBot
 Allow: /
 User-agent: PerplexityBot
 Allow: /
 User-agent: Claude-Web
 Allow: /
 User-agent: anthropic-ai
 Allow: /
 ```

 ---

 ## Phase 3: Content & Authority (Month 2)

 *Scale content and strengthen E-E-A-T.*

 ### 3.1 Expand Blog Content
 **Effort:** 4–6 hours | **Impact:** Medium-High

 - Expand "Liangzhu vs Sanxingdui" to 800+ words with a comparison table
 - Add 2–3 new blog posts (e.g., "Best Time to Visit Chinese Archaeological Sites", "Photography Tips at Ancient Chinese Sites")
 - Add blog index intro text to reach 300+ words

 ### 3.2 Add Author Pages / About Page
 **Effort:** 1–2 hours | **Impact:** Medium (E-E-A-T)

 - Create an About page with author credentials and site mission
 - Add `author` property to all Article schemas
 - Link author byline from article pages

 ### 3.3 Add Inline Images to Content Pages
 **Effort:** 2–3 hours | **Impact:** Medium (engagement)

 Add 1–2 relevant images to each site guide page (currently zero images on 8 site guides, 3 itineraries).

 ### 3.4 Add Breadcrumb Schema to All Pages
 **Effort:** 30 min | **Impact:** Low (structured data depth)

 Generate BreadcrumbList schema on site guides and blog posts.

 ### 3.5 Implement Review/Rating Schema on Site Pages
 **Effort:** 1 hour | **Impact:** Low-Medium (SERP features)

 Add `aggregateRating` to TouristAttraction schema for potential star ratings in search results.

 ---

 ## Phase 4: Monitoring & Iteration (Ongoing)

 - **Set up Google Search Console** upon deployment — monitor indexation, clicks, CTR
 - **Set up Bing Webmaster Tools** for Bing/Copilot visibility
 - **Submit sitemap** to both Google and Bing
 - **Monitor AI citation rates** using the profound or seranking extensions when domain goes live
 - **Quarterly OG image verification** — ensure images stay compressed after rebuilds
 - **Monthly sitemap audit** — verify all pages are listed, no 404s
 - **Track Core Web Vitals** in Search Console once live

 ---

 ## Quick Reference: Fix Difficulty

 | Fix | Time | Difficulty |
 |-----|------|------------|
 | Compress OG images | 30 min | Easy |
 | Add sitemap URLs | 15 min | Easy |
 | Add lastmod/changefreq | 5 min | Easy |
 | Create llms.txt | 20 min | Easy |
 | Fix title entities | 10 min | Easy |
 | Unsplash preconnect | 5 min | Easy |
 | Font preloading | 10 min | Easy |
 | Page-specific OG images | 30 min | Medium |
 | Responsive srcset | 15 min | Medium |
 | Security headers | 30 min | Medium |
 | Blog schema | 15 min | Medium |
 | AI crawler rules | 5 min | Easy |
 | Expand blog content | 4-6 hrs | Medium |
 | Author/About page | 1-2 hrs | Medium |
 | Inline images | 2-3 hrs | Medium |
 | Breadcrumb schema | 30 min | Medium |
 | Review/rating schema | 1 hr | Medium |

 ---

 *Action plan generated from SEO audit. 7 Critical items, 7 High items, 9 Medium items, 3 Low items.*
