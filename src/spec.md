# Specification

## Summary
**Goal:** Make the entire frontend fully responsive and usable across mobile, tablet (iPad), and desktop viewports without overflow or horizontal scrolling.

**Planned changes:**
- Update page layouts (Home, About, Menu, Offers, Contact, Menu Management) to reflow cleanly at common breakpoints (~360px, ~768px, ~1280px), ensuring no clipped content or horizontal scrolling.
- Adjust the header layout (brand name, search bar, nav actions) to avoid overlap/overflow and provide appropriate spacing/wrapping behavior across mobile/tablet/desktop, including a usable mobile hamburger menu.
- Make key Home page sections responsive (hero, cuisine card grid, multi-column sections) so typography and grids transition from single-column (mobile) to multi-column (tablet/desktop) while keeping image aspect ratios intact.
- Make Menu Management responsive by improving TabsList behavior on narrow screens and ensuring forms/actions stack and remain usable without sideways scrolling.
- Refine footer responsiveness so sections collapse into appropriate columns by breakpoint and contact/social rows wrap neatly without collisions.

**User-visible outcome:** The site works cleanly on phones, iPads, and desktops: all pages fit within the viewport, navigation and forms remain usable, and grids/sections adapt smoothly without content overflowing or being clipped.
