# La Vida Website Improvement Log

---

## March 15, 2026 — Performance & SEO Overhaul

### What Changed (Non-Technical)

**Your website now loads significantly faster.** Every image on the site has been converted to a modern format (WebP) that's dramatically smaller without losing visual quality. The total image weight dropped from ~24 MB to ~3.3 MB — an **86% reduction**. Visitors on slow connections or mobile data will notice a much faster experience.

**Google can now understand your business better.** We added structured data (a machine-readable description of your restaurant) that tells Google your name, address, hours, cuisine type, and ordering link. This helps you appear in "restaurants near me" searches and can enable rich results (stars, hours, menu links) directly in Google search.

**When someone shares your website link on iMessage, Instagram, or Facebook, it now shows a branded food image** instead of the previous generic placeholder. This makes shared links look professional and appetizing.

**A sitemap was added** so search engines can efficiently discover and index all pages on your site.

**Images below the initial screen now load only when needed** (as the visitor scrolls down), making the first page load faster.

---

### Technical Details

#### Phase 1: Performance

| Change | Files Modified | Impact |
|--------|---------------|--------|
| Converted all JPG/PNG to WebP with `<picture>` fallbacks | Hero (5), About (3), Menu (8), Locations (3), Catering (1) = **20 images** | ~24 MB → ~3.3 MB (**86% reduction**) |
| Added `loading="lazy"` to off-screen images | Menu.tsx, Locations.tsx, Catering.tsx | Reduces initial page load weight |
| Added `<link rel="preconnect">` for Google Fonts | index.html | Eliminates DNS+TLS roundtrip (~100-300ms saved) |
| Added `<link rel="dns-prefetch">` for Behold API | index.html | Pre-resolves DNS for Instagram feed |

**Image Size Breakdown:**

| Image | Before | After (WebP) | Savings |
|-------|--------|-------------|---------|
| hero/slide-1 | 503K | 278K | 45% |
| hero/slide-2 | 416K | 166K | 60% |
| hero/slide-3 | 616K | 386K | 37% |
| hero/slide-4 | 343K | 177K | 48% |
| hero/slide-5 | 1.5M | 183K | 88% |
| about/Strawberry salad | 1.7M | 123K | 93% |
| about/salad | 2.6M | 160K | 94% |
| about/part-2 | 313K | 213K | 32% |
| menu/bowl-1 through bowl-8 | ~10.6M total | ~1.38M total | 87% |
| locations/Large_map | 1.8M | 99K | 95% |
| locations/map | 1.2M | 70K | 94% |
| locations/map_only | 1.2M | 56K | 95% |
| catering image | 1.7M | 255K | 85% |

**Files modified:**
- `src/data/heroSlides.ts` — Added `srcWebP` field to HeroSlide interface
- `src/data/menuItems.ts` — Added `srcWebP` field to MenuItem interface
- `src/components/sections/Hero.tsx` — `<picture>` with WebP source
- `src/components/sections/Menu.tsx` — `<picture>` with WebP source + lazy loading
- `src/components/sections/Locations.tsx` — `<picture>` with WebP source + lazy loading
- `src/components/sections/Catering.tsx` — `<picture>` with WebP source + lazy loading
- `src/components/sections/Instagram.tsx` — Uses WebP for fallback images

---

#### Phase 2: SEO & Discoverability

| Change | Files Modified | Impact |
|--------|---------------|--------|
| Added JSON-LD `Restaurant` schema | index.html | Enables rich results in Google (hours, address, menu, ordering) |
| Created sitemap.xml | public/sitemap.xml | Helps search engines discover and index pages |
| Updated robots.txt with sitemap reference | public/robots.txt | Points crawlers to sitemap |
| Added canonical URL | index.html | Prevents duplicate content issues |
| Added `theme-color` meta tag | index.html | Branded browser chrome on mobile (olive #9F9D58) |
| Added `og:url` and `og:site_name` | index.html | Complete Open Graph metadata |
| Replaced OG image with branded asset | index.html + public/images/og-image.jpg | Professional social media previews (1200x630) |
| Added OG image dimensions | index.html | Faster social media preview rendering |

**JSON-LD Schema includes:**
- Business name, address, geo coordinates
- Opening hours (Mon-Sun 11AM-9PM)
- Cuisine types: Healthy Food, Bowls, Smoothies, Wraps
- Menu URL (PDF link)
- Online ordering action (Toast Tab)
- Instagram social link
- Email contact

---

### What Still Needs Owner Input

See `docs/questionnaire-for-eren-lorena.md` for the 8 questions that need answers before we can:
- Connect the real Instagram feed
- Add customer testimonials
- Expand catering section details
- Add phone number to structured data
- Confirm location launch timelines
- Add dietary labels to menu items

---

### Verification Checklist

- [x] TypeScript compiles with zero errors (`npx tsc --noEmit`)
- [x] Production build succeeds (`npm run build`)
- [x] All WebP images generated alongside originals (fallback preserved)
- [x] `<picture>` elements provide JPG/PNG fallback for older browsers
- [x] JSON-LD validates (schema.org Restaurant type)
- [x] Sitemap references all pages
- [x] OG image is 1200x630 at 187K
