 # Schema & Structured Data Findings

 **Score:** 88/100

 ## Current Implementation

 All 22 JSON-LD blocks validated — zero parse errors across 23 pages.

 ### Schema Coverage by Page Type

 | Page Type | Count | Schema Types Used |
 |-----------|-------|-------------------|
 | Homepage | 1 | WebSite, SearchAction, ItemList, TouristAttraction (x8), BreadcrumbList, FAQPage |
 | Site guides | 8 | TouristAttraction, PostalAddress, Offer |
 | Itineraries | 3 | TravelGuide, Itinerary, City, FAQPage |
 | Booking guides | 3 | HowTo, HowToStep |
 | Articles | 3 | Article |
 | Practical guides | 3 | Article, FAQPage |
 | Blog posts | 2 | Article |
 | Blog index | 1 | **NONE** — critical gap |

 ## Validation

 - All 22 blocks parse as valid JSON
 - FAQPage markup properly nests Question/Answer entities
 - TouristAttraction schema includes address, opening hours, offers
 - HowTo steps are numbered and complete

 ## Issues

 1. **Blog index has zero schema** — should have `Blog` + `ItemList` + `BlogPosting`
 2. **Unconventional wrapper on 3 booking guides** — `henan-museum-booking`, `sanxingdui-museum-booking`, `shaanxi-history-museum-booking` use `["{...}", "{...}"]` (JSON strings in array) instead of `[{...}, {...}]`
 3. **Missing aggregateRating** — no review/rating markup on TouristAttraction pages to trigger star ratings in SERPs
 4. **YouTubeVideoObject missing** — itineraries could benefit from embedded video schema

 ## Missing Opportunities

 - `Organization` schema on every page (brand entity)
 - `Person` schema on About page (author entity)
 - `BreadcrumbList` on site guide and blog pages
 - `Event` schema for seasonal/time-limited content
 - `Review` schema for site guide testimonials
