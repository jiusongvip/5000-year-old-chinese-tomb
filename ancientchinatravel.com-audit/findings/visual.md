 # Visual & Image Audit Findings

 **Score:** 68/100

 ## OG Images

 12 files, 27 MB total. All are lossless WebP at 1200×630.

 | File | Size | Issue |
 |------|------|-------|
 | og-terracotta.webp | 2.59 MB | Largest OG image |
 | og-yangling.webp | 2.59 MB | |
 | og-qianling.webp | 2.42 MB | |
 | og-sanxingdui.webp | 2.34 MB | |
 | og-liangzhu.webp | 2.34 MB | |
 | og-default.webp | 2.20 MB | Used on all 23 pages |
 | og-yinxu.webp | 2.06 MB | |
 | og-tomb.webp | 2.00 MB | |
 | og-home.webp | 1.95 MB | |
 | og-itinerary.webp | 1.95 MB | |
 | og-dawenkou.webp | 1.93 MB | |
 | og-mawangdui.webp | 1.82 MB | Smallest — still 1.8 MB |

 **Fix:** Recompress all to quality 75, target 80–150 KB each.

 ## Inline Images (Homepage)

 - 9 images, all from `images.unsplash.com`
 - Hero: 1 image, `loading=eager` (correct), 1800×1200 (too large for mobile)
 - Cards: 8 images, `loading=lazy` (correct), 600×400 each
 - All have `alt` text (correct)
 - No `srcset` on any image
 - No `width`/`height` attributes

 ## Content Page Images

 - **8 site guide pages:** 0 inline images
 - **3 itinerary pages:** 0 inline images
 - **3 booking guides:** 0 inline images
 - **5 article pages:** 0 inline images
 - **Blog posts:** 0 inline images

 This is a significant engagement gap — 600–800 word pages with no visual support.

 ## Image Formats

 - OG images: WebP (good)
 - Inline images: JPEG via Unsplash URL params (auto-format enabled via `&auto=format`)
 - No AVIF support (browser-dependent, not critical)

 ## Accessibility

 - All images have `alt` text — compliant
 - No decorative images detected that would need empty `alt=""`
 - No ARIA labels on image containers
