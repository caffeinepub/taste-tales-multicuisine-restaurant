# Specification

## Summary
**Goal:** Improve Menu page screenshot loading speed and perceived performance for mobile users on slow/mobile data.

**Planned changes:**
- Serve mobile-optimized (smaller/compressed) versions of menu screenshot images and update `MENU_SCREENSHOT_ASSETS` (or add responsive selection so mobile receives optimized assets).
- Prioritize the first above-the-fold menu screenshot to download immediately (eager load / `fetchpriority="high"`).
- Add a preload resource hint for the first menu screenshot on mobile viewports, avoiding duplicate/conflicting hints.
- Ensure the Menu page shows a clear loading state while screenshots load and degrades gracefully if an image fails (no broken layout).

**User-visible outcome:** On `/menu`, the first screenshot appears sooner on mobile data, overall menu images load faster with less data usage, and loading/error states remain clean and stable.
