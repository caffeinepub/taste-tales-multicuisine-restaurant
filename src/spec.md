# Specification

## Summary
**Goal:** Update the “Review us on Google” button/link to open the restaurant’s provided Google Reviews URL.

**Planned changes:**
- Set `SOCIAL_LINKS.google` in `frontend/src/lib/socialLinks.ts` to the exact Google Reviews URL provided by the user (replacing the current placeholder value).
- Ensure the footer “Social Connect” button labeled “Review us on Google” opens that URL in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

**User-visible outcome:** Clicking “Review us on Google” in the footer opens the Taste & Tales Google Reviews page in a new browser tab.
