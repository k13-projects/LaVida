# La Vida Website Improvement Log

---

## March 16, 2026 — Web Menu, Instagram Feed, Focus Trap & Full Menu Data

### What Changed (Non-Technical)

**The full menu is now a real web page, not just a PDF.** Visitors can browse all 34 menu items at [/menu](https://www.lavida.fit/menu) with search, dietary filters (Vegan, Gluten-Free, Dairy-Free, Gluten-Free Option), and food photos. The PDF is still available via a "View PDF" button. This makes the menu searchable by Google, which the PDF never was.

**The Instagram feed is now live.** It pulls real posts from @lavida.sandiego via Behold (feed ID: `rfsYLytJBGuKlwhFGhdS`) instead of showing placeholder bowl images. The old custom carousel code was replaced with the official Behold widget.

**The mobile menu now traps keyboard focus.** When the hamburger menu is open, pressing Tab cycles through menu items only (doesn't wander behind the overlay). Pressing Escape closes it and returns focus to the hamburger button. This is a WCAG 2.1 AA requirement.

**Navigation updated.** "Menu" in the navbar now links to the dedicated `/menu` page instead of opening the PDF modal.

---

### Technical Details

#### New Files

| File | Purpose |
|------|---------|
| `src/pages/MenuPage.tsx` | Full web menu page with search, dietary filters, and PDF modal |
| `src/components/menu/MenuSearch.tsx` | Search bar + dietary filter toggle chips |
| `src/components/menu/MenuGrid.tsx` | Responsive grid layout for menu item cards |
| `src/components/menu/MenuItemCard.tsx` | Individual menu item card component |
| `src/components/menu/DietaryBadge.tsx` | Dietary tag badge component (V, GF, DF, GFO) |
| `src/hooks/use-focus-trap.ts` | Reusable focus trap hook for modals and mobile menu |
| `src/pages/Decisions.tsx` | Internal decisions/questionnaire page |

#### Modified Files

| File | Change |
|------|--------|
| `src/data/menuItems.ts` | Expanded with `fullMenuItems` (34 items across 7 categories), `DietaryTag` type, `DIETARY_TAG_CONFIG`, `fullMenuCategories` |
| `src/components/sections/Instagram.tsx` | Replaced custom carousel + fallback system with Behold widget (`rfsYLytJBGuKlwhFGhdS`) |
| `src/components/sections/Menu.tsx` | "SEE MENU" now uses `<Link to="/menu">` instead of modal trigger; food showcase uses `object-cover object-center` |
| `src/components/layout/Navbar.tsx` | Desktop/mobile "Menu" links to `/menu` page; added `useFocusTrap` on mobile menu; removed `menuModalOpen` button trigger |
| `src/App.tsx` | Added routes: `/decisions`, `/menu` |

#### Menu Data Structure

```
fullMenuCategories (7):  bowls, wraps, sandwiches, salads, smoothies, matcha, acai
fullMenuItems (34):      7 bowls, 7 wraps, 4 sandwiches, 3 salads, 7 smoothies, 4 matcha, 3 acai

Dietary tags:  V (Vegan), GF (Gluten-Free), DF (Dairy-Free), GFO (Gluten-Free Option)
```

---

## March 15, 2026 — Performance & SEO Overhaul

### What Changed (Non-Technical)

**The website now loads significantly faster.** Every image on the site was converted to WebP format — the total image weight dropped from ~24 MB to ~3.3 MB (**86% reduction**). Visitors on slow connections or mobile data will notice a much faster experience.

**Google can now understand your business better.** Structured data (JSON-LD) tells Google your name, address, hours, cuisine type, and ordering link. This helps you appear in "restaurants near me" searches and can enable rich results (stars, hours, menu links) directly in search.

**When someone shares your website link on iMessage, Instagram, or Facebook, it now shows a branded food image** instead of the previous generic Lovable placeholder.

**A sitemap was added** so search engines can efficiently discover and index all pages.

**Images below the initial screen now load only when the visitor scrolls to them**, making the first page load faster.

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

See `docs/questionnaire-for-eren-lorena.md` for remaining questions:
- ~~Connect the real Instagram feed~~ **Done** (feed ID: `rfsYLytJBGuKlwhFGhdS`)
- ~~Add dietary labels to menu items~~ **Done** (all 34 items tagged)
- Add customer testimonials
- Expand catering section details
- Add phone number to structured data
- Confirm location launch timelines

---

### Verification Checklist

- [x] TypeScript compiles with zero errors
- [x] Production build succeeds
- [x] All WebP images generated alongside originals (fallback preserved)
- [x] `<picture>` elements provide JPG/PNG fallback for older browsers
- [x] JSON-LD validates (schema.org Restaurant type)
- [x] Sitemap references all pages
- [x] OG image is 1200x630 at 187K
- [x] Instagram feed pulling real posts via Behold widget
- [x] `/menu` page renders with search + dietary filters
- [x] Mobile menu focus trap working (Tab cycles, Escape closes)
- [x] All nav links updated to point to `/menu` page

---

### Current Site Map

```
/                 → Main landing page (Hero, About, Menu CTA, Locations, Catering, Instagram, Footer)
/menu             → Full web menu with search, dietary filters, and PDF viewer
/accessibility    → WCAG 2.1 AA accessibility statement
/decisions        → Internal stakeholder decisions page
```
