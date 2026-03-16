# La Vida San Diego — Website Audit Report

**Audit Date:** March 15, 2026
**Site:** La Vida San Diego | lavida.fit
**Stack:** React 18 + TypeScript + Vite + Tailwind CSS
**Branch:** vida_mar12_v1

---

## Overall Score

| Category | Score | Grade |
|---|---|---|
| Visual Design & Branding | 9.0 / 10 | A |
| Accessibility (WCAG 2.1 AA) | 9.0 / 10 | A |
| Mobile Responsiveness | 8.5 / 10 | A- |
| SEO & Discoverability | 6.5 / 10 | C+ |
| Performance & Speed | 5.0 / 10 | D+ |
| Content Strategy | 6.5 / 10 | C+ |
| **Weighted Average** | **7.4 / 10** | **B** |

---

## What's Working Well

### 1. Brand & Visual Identity — A

The warm color palette (olive #9F9D58, blush #FEBDBA, coral #F28383, cream #F4E1C1) nails the "beachy wellness" vibe. Montserrat typography scales cleanly across breakpoints. The centered-logo navbar, coin-shine animation, and wave SVG section dividers are polished touches that feel premium. Section color alternation (olive → peach → cream) creates a smooth visual rhythm.

### 2. Accessibility — A

One of the strongest areas. Skip-to-content link, semantic HTML with proper ARIA roles, keyboard-navigable everything, prefers-reduced-motion support, focus-visible outlines, and a dedicated /accessibility page. This is genuinely well-implemented, not checkbox-driven.

### 3. Mobile Responsiveness — A-

Mobile-first Tailwind approach with proper breakpoints (xs→2xl). Hamburger nav, responsive grids (2-col → 4-col), and font scaling all work well. Touch targets are adequate. Minor gap: no focus trap on mobile menu.

---

## What Needs Work — Priority Ranked

### P0: Performance (Score: 5/10)

**The Problem:** Image assets are enormous and unoptimized.

| Folder | Size | Issue |
|---|---|---|
| /images/menu/ | ~26 MB | No compression, no WebP |
| /images/locations/ | ~4.2 MB | Full-res map backgrounds |
| /images/about/ | ~4.7 MB | Uncompressed JPGs |
| /images/hero/ | ~3.3 MB | Only first slide is eager-loaded |

**Recommendations:**

- Convert all images to WebP/AVIF with `<picture>` fallbacks — expect 60-80% size reduction
- Add `srcset` for responsive image sizes (mobile doesn't need 2000px-wide images)
- Add `<link rel="preconnect">` for Google Fonts and Behold API
- Implement a build-time image pipeline (e.g., vite-imagetools or sharp)
- Add Web Vitals tracking (LCP is almost certainly suffering from hero image weight)

**Impact:** This is the single biggest issue. A 38+ MB image payload will tank Core Web Vitals and hurt both UX and Google ranking.

---

### P1: SEO & Discoverability (Score: 6.5/10)

**What's good:** Title, meta description, OG tags, heading hierarchy (hidden H1 + H2s per section), alt text, robots.txt — all solid.

**What's missing:**

| Gap | Why It Matters |
|---|---|
| No sitemap.xml | Google can't efficiently discover pages |
| No JSON-LD structured data | Missing LocalBusiness, Restaurant, and Menu schemas — critical for "near me" searches and rich results |
| OG image points to lovable.dev | Broken branding when shared on social media |
| No canonical URL | Risk of duplicate content issues |
| Menu is PDF-only | Menu content is invisible to search engines |
| No theme-color meta tag | Missing browser chrome branding on mobile |

**Recommendations:**

- Add JSON-LD LocalBusiness schema with name, address, hours, phone, cuisine type, ordering URLs — this is the highest-ROI SEO fix for a restaurant
- Generate sitemap.xml and reference it in robots.txt
- Replace OG image with a branded asset hosted on your domain
- Add canonical `<link>` tags
- Consider rendering menu items as HTML (searchable, indexable) alongside the PDF

---

### P2: Content Strategy (Score: 6.5/10)

**What's good:** Clear hero → about → menu → locations → catering → social → contact flow. CTAs are prominent ("ORDER NOW" in sticky nav is smart). Brand voice is consistent and warm.

**What's thin or missing:**

| Gap | Recommendation |
|---|---|
| No testimonials/reviews | Add 3-5 customer quotes or Google review stars — social proof drives orders |
| No FAQ section | Address common questions (dietary options, allergens, delivery radius, catering minimums) |
| Catering section is vague | Add package previews, pricing ranges, or at minimum a downloadable catering menu |
| Menu is PDF-only | Web-accessible menu with item descriptions and dietary tags (V, GF, DF) |
| Instagram feed is placeholder | YOUR_BEHOLD_FEED_ID is not configured — currently showing fallback menu images |
| No email capture | Add newsletter signup for promotions/new location announcements |
| 3 of 4 locations are "Coming Soon" | Consider reducing to 1-2 coming soon with launch dates to avoid looking aspirational |

---

### P3: Minor UX & Technical Fixes

| Item | Detail |
|---|---|
| Mobile menu focus trap | Add focus trap to prevent tabbing behind the open hamburger menu |
| Catering form has no backend | Currently uses mailto: — form submissions may get lost. Consider Formspree, Netlify Forms, or a serverless function |
| No 404 analytics | Custom 404 page exists but no tracking to catch broken links |
| No service worker / PWA | Not critical, but would enable offline menu viewing and faster repeat visits |
| Form validation feedback | No ARIA-live regions for real-time error messages |

---

## Quick Win Checklist

These can be done fast and have outsized impact:

- [ ] **Configure Behold feed ID** — Instagram section goes from placeholder to real social proof
- [ ] **Swap OG image** — Fix broken social media previews
- [ ] **Add JSON-LD schema** — ~30 lines of code, major SEO lift for local search
- [ ] **Create sitemap.xml** — 5-minute task, helps indexing
- [ ] **Compress hero images** — WebP conversion of 5 hero slides could save ~2.5 MB alone
- [ ] **Add `<link rel="preconnect">` tags** — 2 lines in index.html for fonts and API

---

## Competitive Edge Opportunities

- **Web-native menu with dietary filters** — Most competitors use PDF-only menus. A searchable, filterable HTML menu with V/GF/DF tags would be a differentiator and SEO goldmine.
- **Online ordering consolidation** — Currently split across Toast (pickup) + Grubhub + DoorDash (delivery). Consider a unified first-party ordering experience to reduce commission fees and own the customer relationship.
- **Location launch countdown** — Replace generic "Coming Soon" stamps with target dates or email waitlists per location to build anticipation and capture leads.

---

## Architecture Note

The codebase is clean and well-organized. React component structure (Hero, About, Menu, Locations, Catering, Instagram, Footer) maps 1:1 to visual sections. The custom event system for modal triggering is clever. shadcn/ui + Radix provides a solid accessible component foundation. No architectural changes needed — the improvements above are all additive.

---

## Summary

La Vida's website has excellent design, branding, and accessibility — the visual identity is cohesive and the WCAG compliance is genuinely impressive. The two areas dragging the score down are **image performance** (38+ MB of unoptimized assets) and **SEO gaps** (no structured data, no sitemap, PDF-only menu). Fixing the P0 and P1 items above would move the overall score from a **B** to an **A-** and meaningfully impact both search visibility and conversion rates.
