# Specification

## Summary
**Goal:** Fix missing logo rendering across the site by correcting logo asset paths, centralizing references, and adding graceful fallbacks.

**Planned changes:**
- Ensure the canonical logo asset exists in the publicly served frontend static assets and update `frontend/src/lib/brandAssets.ts` so `BRAND_ASSETS.logo` points to the correct, existing path/filename.
- Update all logo usages (SiteHeader, SiteFooter, HomePage hero, LogoMotif) to reference the centralized `BRAND_ASSETS.logo` path.
- Add resilient logo rendering fallbacks for `<img>` (e.g., text or simple inline SVG) to avoid broken-image icons and layout breakage when the asset fails to load.
- Fix `frontend/index.html` SEO/social meta tags (`og:image`, `twitter:image`) to reference the same valid logo asset path; keep favicon reference valid.

**User-visible outcome:** The logo reliably appears across header, footer, hero, and motif components (including after hard refresh), and if it ever fails to load the UI shows a clean fallback instead of a broken image; social/SEO images are no longer broken.
