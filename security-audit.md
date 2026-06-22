# Security Audit — La Vida

> K13 house security audit. Engineering record — **not** deployed (lives outside `public/`).
> Stakeholder-facing posture is in `public/legal-compliance-report.html`.
> Mirrors the War Room profile `LaVida` → `security.status: in-progress`.

- **Project:** La Vida (www.lavida.fit)
- **What it serves:** Healthy quick-service restaurant marketing site, Carlsbad / San Diego. One catering enquiry form; ordering + payment offloaded to Toast & Grubhub.
- **Stack:** Vite + React 18 + Tailwind + shadcn/ui (static SPA, no backend).
- **Reviewed by:** K13 Software Studio
- **Date:** 2026-06-22
- **Overall posture:** **Good for a static brochure site** — very low attack surface; the gaps are hardening (headers) and one privacy doc, not active vulnerabilities.

---

## 1. Transport & headers
- [x] HTTPS enforced — custom domain over HTTPS; CSP `upgrade-insecure-requests` set.
- [ ] **Content-Security-Policy** — only `upgrade-insecure-requests` today. Add a real CSP allowing: `self`, `w.behold.so` + `feeds.behold.so` (Instagram widget), `fonts.googleapis.com` + `fonts.gstatic.com`, and `'unsafe-inline'` only where the bundle requires it.
- [ ] **X-Frame-Options / frame-ancestors** — not set (clickjacking). Add `DENY` / `frame-ancestors 'none'`.
- [x] X-Content-Type-Options: nosniff — present.
- [x] Referrer-Policy — `strict-origin-when-cross-origin`.
- [x] Permissions-Policy — `geolocation=(), microphone=(), camera=(), payment=()`.
- [ ] **HSTS (Strict-Transport-Security)** — not set. Add at deploy.
- [ ] **Deploy headers file absent** — no `vercel.json` / `netlify.toml` / `_headers`. Meta-tag CSP can't express all headers; add the host's headers config.

## 2. Secrets & config
- [x] No API keys / tokens in the client bundle — Behold feed id is a public widget id (not a secret); no private keys found.
- [x] `.env` not required — static site, no secrets.
- [x] Third-party endpoints are public widgets / outbound links only.

## 3. Auth & access
- [x] N/A — no auth, no accounts, no admin surface.

## 4. Input & forms
- [x] Catering form validated client-side (React Hook Form + Zod).
- [x] **No server-side intake** — form submits via `mailto:` to `sd.lavidafit@gmail.com`; data lives only in the user's own mail client. No injection surface, no stored data to breach.
- [ ] **Note:** because it's mailto, there's no spam/rate-limit risk on La Vida's side, but also no delivery guarantee or audit trail. If a real backend intake is added later, add validation, rate-limiting, and a secure endpoint.

## 5. Dependencies & build
- [ ] Run `npm audit` and resolve any high/critical (not verified in this pass).
- [x] Lockfile committed; reproducible Vite build.
- [x] No unmaintained / typo-squat packages spotted in the core deps.

## 6. Data & privacy
- [x] Minimal PII — catering form only (name, phone, email); not stored server-side.
- [x] No analytics, no tracking cookies, no advertising pixels.
- [ ] **Privacy Policy missing** — required under CalOPPA because the form collects PII (see legal report). This is the priority item.

## 7. Deployment & ops
- [x] SPA 404 fallback handled (`dist/index.html` → `404.html`).
- [x] Error pages don't leak stack traces (static build).
- [ ] No security headers at the edge (see §1).

---

## Findings

| # | Severity | Area | Finding | Recommendation | Status |
|---|----------|------|---------|----------------|--------|
| 1 | Low | Headers | Only `upgrade-insecure-requests` CSP; no HSTS / X-Frame-Options | Add a deploy headers file with full CSP + HSTS + X-Frame-Options | open |
| 2 | Low | Privacy | No Privacy Policy though catering form collects PII | Publish a CalOPPA privacy policy, link in footer | open |
| 3 | Info | Forms | mailto intake — no delivery guarantee / audit trail | Acceptable for now; revisit if a backend intake is added | accepted |
| 4 | Info | Deps | `npm audit` not run this pass | Run and triage high/critical | open |

## Remaining risks / watch-list
- No edge security headers — low risk for a static brochure site, but cheap to fix and worth doing.
- If La Vida ever adds a real backend form, newsletter, or on-site ordering, re-audit (intake hardening, secrets, PCI scope).

## Disclaimer
Prepared for informational purposes by K13 Software Studio as of 2026-06-22. This is an
engineering security review, not a formal penetration test or compliance certification.
