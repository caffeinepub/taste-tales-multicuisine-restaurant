# Specification

## Summary
**Goal:** Standardize the restaurant menu data and improve the `/menu` experience with consistent ordering, descriptions, and category media, plus a staff-only management page to edit names/prices and persist changes via the Motoko backend.

**Planned changes:**
- Replace `frontend/src/data/menuData.ts` with a cleaned/standardized dataset (consistent naming/capitalization/spelling/formatting), while keeping all existing categories/items represented and resolving duplicates deterministically.
- Introduce an explicit category order (and optional sub-grouping) and update `frontend/src/pages/MenuPage.tsx` to render categories in that order on both desktop (grid) and mobile (accordion).
- Improve/standardize English category and item descriptions where missing or low-quality, keeping text concise and consistent in tone/length.
- Add a standardized category icon + optional cover image system and update `/menu` to display icons/images cleanly with meaningful `alt` text and graceful fallbacks when images are missing.
- Update menu item rows/cards to show a standardized layout: name + optional description + price (₹ formatting unchanged), ensuring alignment when descriptions are absent.
- Add a new authenticated “Menu Management” page using Internet Identity to edit category name/description/order and item name/price (optionally description), with changes persisted in the backend.
- Extend `backend/main.mo` (single actor) with methods to fetch the current menu, update/replace the menu, and enforce editor authorization (e.g., admin allowlist), storing menu state in stable memory.
- Add and reference generated static assets for menu category cover images/icons under `frontend/public/assets/generated` (no backend image serving).

**User-visible outcome:** Visitors see a cleaner, consistently ordered menu with better descriptions and category icons/cover images; authorized staff can log in to update menu names/prices (and related fields) and have those changes persist across refreshes and upgrades.
