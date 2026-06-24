# Security Audit — La Vida

> K13 house security audit. Engineering record — **not** deployed (lives outside `public/`).
> Stakeholder-facing privacy posture now lives in the live `/privacy` page (Privacy Policy).
> Mirrors the War Room profile `LaVida` → `security.status: done`.

- **Project:** La Vida (www.lavida.fit)
- **What it serves:** Healthy quick-service restaurant marketing site, Carlsbad / San Diego. One catering enquiry form; ordering + payment offloaded to Toast & Grubhub/DoorDash.
- **Stack:** Vite + React 18 + Tailwind + shadcn/ui (static SPA, no backend). **Hosted on Vercel.**
- **Reviewed by:** K13 Software Studio
- **Date:** 2026-06-24 (re-audit; first pass 2026-06-22)
- **Overall posture:** **Hardened.** Very low attack surface and now a full edge security-header
  suite with an **enforcing CSP**. The two priority gaps from the 2026-06-22 pass (missing headers,
  missing Privacy Policy) are both **closed**. Remaining items are routine dependency bumps.

---

## What changed since 2026-06-22
- ✅ **Migrated to Vercel** with a real `vercel.json` headers file (PR #10).
- ✅ **Full CSP shipped and promoted from Report-Only to enforcing** (PRs #11 → #13).
- ✅ **HSTS, X-Frame-Options, Permissions-Policy** now set at the edge.
- ✅ **Privacy Policy published** at `/privacy`, linked in the footer (PR #10) — closes the CalOPPA gap.
- ✅ Internal HTML reports removed from the deployed `public/` tree (engineering records only).

---

## 1. Transport & headers — `vercel.json`
- [x] HTTPS enforced — custom domain over HTTPS; CSP also sets `upgrade-insecure-requests`.
- [x] **Content-Security-Policy** — full enforcing policy: `default-src 'self'`; scripts/frames scoped
  to `w.behold.so` (Instagram widget); styles + fonts to Google Fonts; `frame-ancestors 'none'`;
  `object-src 'none'`; `base-uri 'self'`. Promoted from Report-Only to enforcing (#13).
- [x] **X-Frame-Options: DENY** + `frame-ancestors 'none'` — clickjacking covered.
- [x] X-Content-Type-Options: nosniff.
- [x] Referrer-Policy — `strict-origin-when-cross-origin`.
- [x] Permissions-Policy — `geolocation=(), microphone=(), camera=(), payment=()`.
- [x] **HSTS** — `max-age=63072000; includeSubDomains; preload`.
- [x] **Deploy headers file present** — `vercel.json` (`headers` block on `/(.*)`).

## 2. Secrets & config
- [x] No API keys / tokens in the client bundle — Behold feed id is a public widget id; no private keys.
- [x] `.env` not required — static site, no secrets.
- [x] Third-party endpoints are public widgets / outbound links only.

## 3. Auth & access
- [x] N/A — no auth, no accounts, no admin surface.

## 4. Input & forms
- [x] Catering form validated client-side (React Hook Form + Zod).
- [x] **No server-side intake** — form submits via `mailto:` to `sd.lavidafit@gmail.com`; data lives
  only in the user's own mail client. No injection surface, no stored data to breach.
- [x] **Note:** mailto means no spam/rate-limit risk on La Vida's side, but also no delivery
  guarantee or audit trail. If a real backend intake is added later, add validation, rate-limiting,
  and a secure endpoint.

## 5. Dependencies & build
- [x] **`npm audit` run this pass.** 3 moderate advisories in shipped/build deps; 7 more are dev-only.
  - `react-router` / `react-router-dom` — open-redirect via protocol-relative `//` path. La Vida has
    **no user-controlled redirects** (all routes are static), so practical exposure is ~nil; bump anyway.
  - `postcss` — XSS via unescaped `</style>` in stringify output. **Build-time only** (Tailwind/PostCSS
    compile step); no postcss at runtime on the static site.
  - `vitest` / `ws` — dev/test tooling only, never shipped to the production bundle.
  - All have **non-breaking fixes** via `npm audit fix`. → see Finding #1.
- [x] Lockfile committed; reproducible Vite build.
- [x] No unmaintained / typo-squat packages spotted in the core deps.

## 6. Data & privacy
- [x] Minimal PII — catering form only (name, phone, email); not stored server-side.
- [x] No analytics, no tracking cookies, no advertising pixels.
- [x] **Privacy Policy published** at `/privacy` (CalOPPA/CCPA-aware: California rights, no sale of
  data, contact channel), footer-linked. Closes the priority gap from the prior pass.

## 7. Deployment & ops
- [x] SPA routing handled at the edge (`vercel.json` rewrite all → `/index.html`).
- [x] Error pages don't leak stack traces (static build).
- [x] Security headers applied at the edge (see §1).

---

## Findings

| # | Severity | Area | Finding | Recommendation | Status |
|---|----------|------|---------|----------------|--------|
| 1 | Low | Deps | 3 moderate advisories in shipped/build deps (react-router open-redirect, postcss build-time XSS); 7 dev-only | Run `npm audit fix` (non-breaking) and re-lock | open |
| 2 | Info | Forms | mailto intake — no delivery guarantee / audit trail | Acceptable for now; revisit if a backend intake is added | accepted |
| 3 | Info | Legal | No standalone Terms of Service page | Optional for a brochure site with no on-site accounts/transactions; add if T&Cs are ever needed | accepted |

**Resolved since 2026-06-22:** edge security headers + enforcing CSP (was Finding #1, now §1 all green);
Privacy Policy published (was Finding #2, now §6); `npm audit` now run (was Finding #4).

## Remaining risks / watch-list
- Dependency advisories are low practical risk for a static brochure site but cheap to clear — bump them.
- If La Vida ever adds a real backend form, newsletter, or on-site ordering, re-audit (intake
  hardening, secrets, PCI scope, and a Terms of Service).

## Disclaimer
Prepared for informational purposes by K13 Software Studio as of 2026-06-24. This is an
engineering security review, not a formal penetration test or compliance certification.
