 # AI Search Readiness Findings

 **Score:** 42/100

 ## llms.txt / ai.txt

 **Status:** MISSING

 No `llms.txt` or `ai.txt` file exists. AI crawlers (ChatGPT, Perplexity, Gemini, Claude) increasingly rely on these files for structured content discovery.

 Recommended `/llms.txt` content:

 ```
 # Ancient China Travel
 > Step-by-step guides to visit ancient Chinese archaeological sites. Tickets, routes, museum booking instructions, and insider tips for foreign travelers.

 ## Archaeological Sites
 - [Dawenkou Site](https://5000-year-old-chinese-tomb.com/dawenkou-site): 6,300-year-old Neolithic site in Shandong, free entry
 - [Liangzhu Ancient City](https://5000-year-old-chinese-tomb.com/liangzhu-ancient-city): 5,300-year-old UNESCO Neolithic site near Hangzhou
 - [Sanxingdui](https://5000-year-old-chinese-tomb.com/sanxingdui): 4,800-year-old Bronze Age site with iconic bronze masks near Chengdu
 - [Yin Xu](https://5000-year-old-chinese-tomb.com/yin-xu-anyang): 3,300-year-old Shang Dynasty capital, UNESCO site
 - [Terracotta Warriors](https://5000-year-old-chinese-tomb.com/terracotta-warriors): 2,200-year-old Qin Dynasty army in Xi'an
 - [Han Yangling](https://5000-year-old-chinese-tomb.com/han-yangling-mausoleum): 2,100-year-old Han Dynasty tomb with glass-floor museum
 - [Mawangdui Han Tombs](https://5000-year-old-chinese-tomb.com/mawangdui-han-tombs): 2,100-year-old tomb with Lady Dai mummy in Changsha
 - [Qianling Mausoleum](https://5000-year-old-chinese-tomb.com/qianling-mausoleum): 1,300-year-old Tang Dynasty tomb of China's only female emperor

 ## Itineraries
 - [10-Day Itinerary](https://5000-year-old-chinese-tomb.com/ancient-china-10-day-itinerary): Four cities, three UNESCO sites
 - [Xi'an & Chengdu Route](https://5000-year-old-chinese-tomb.com/xian-chengdu-ancient-sites): 7-day archaeology tour
 - [Henan Archaeology Tour](https://5000-year-old-chinese-tomb.com/henan-archaeology-tour): 5-day Shang Dynasty route

 ## Practical Guides
 - [240-Hour Transit Visa Guide](https://5000-year-old-chinese-tomb.com/china-240-hour-transit-visa)
 - [How to Book Sanxingdui Museum Tickets](https://5000-year-old-chinese-tomb.com/sanxingdui-museum-booking)
 - [How to Book Shaanxi History Museum](https://5000-year-old-chinese-tomb.com/shaanxi-history-museum-booking)
 - [How to Buy Train Tickets as a Foreigner](https://5000-year-old-chinese-tomb.com/how-to-buy-train-tickets-china)
 - [China SIM Card Guide](https://5000-year-old-chinese-tomb.com/china-sim-card-tourist)
 ```

 ## Crawler Access

 - `robots.txt` uses broad `User-agent: *` — all crawlers allowed
 - No explicit directives for AI-specific bots (GPTBot, CCBot, PerplexityBot, Claude-Web)
 - Site is static HTML — fully crawlable by all bots including those without JavaScript rendering

 ## Citability Assessment

 - **FAQPage schema** on 7 pages — provides direct answers for AI citations
 - **Clear factual claims** with verification dates — trustworthy for AI citation
 - **No conflicting information** across pages — consistent data
 - **Good internal linking** — AI crawlers can easily map related content

 ## Brand & Entity Signals

 - WebSite schema with SearchAction establishes brand entity
 - TouristAttraction schema with PostalAddress provides location signals
 - No `sameAs` links to Wikipedia, Wikidata, or social profiles
 - No Google Business Profile or entity reconciliation

 ## Recommendations Priority

 1. Create `/llms.txt` (Critical)
 2. Add AI bot directives to `robots.txt` (High)
 3. Add `sameAs` links to Wikipedia/Wikidata entities (Medium)
 4. Register brand entity in Google's Knowledge Graph (Medium)
 5. Set up brand mention monitoring (Medium)
