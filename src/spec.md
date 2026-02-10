# Specification

## Summary
**Goal:** Fix Gallery ambience images not rendering in production and resolve the build/deployment configuration error so the app builds and deploys cleanly.

**Planned changes:**
- Update Gallery image asset handling so all referenced image paths point to static files that exist in deployed frontend assets and are served correctly in production (thumbnails + lightbox).
- Make Gallery image loading resilient to filename/path issues (e.g., spaces/special characters) by standardizing asset filenames and/or references, and add an in-UI fallback state when an image fails to load.
- Investigate and fix the build/deployment configuration issue so a clean build and deployment succeeds without manual intervention.

**User-visible outcome:** Visiting `/gallery` shows a responsive grid with visible thumbnails; clicking a thumbnail opens a lightbox with the full image; production builds/deployments succeed and gallery image requests do not 404.
