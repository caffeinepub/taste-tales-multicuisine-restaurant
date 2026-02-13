# Specification

## Summary
**Goal:** Update the app’s menu dataset to exactly match the latest user-pasted menu sections, items, descriptions, and prices, and ensure menu/global search reflects the updated data.

**Planned changes:**
- Update `frontend/src/data/menuData.ts` so categories (section headings) and items (name, optional parenthetical description, and price) match the pasted menu text exactly; add missing sections/items and remove anything not present in the pasted text.
- Represent multi-price entries (e.g., `410 / 430.00`) using `priceLabel` (verbatim formatting), while keeping single numeric prices as `price`.
- Verify/update menu and global search data wiring so `/menu` search and `/search` results reflect the updated items/categories and show correctly formatted price badges (including `priceLabel` where applicable).

**User-visible outcome:** The Menu page and global Search show the latest menu sections/items with correct names/descriptions and prices, and searches return results for newly added/renamed menu entries with correctly formatted price badges.
