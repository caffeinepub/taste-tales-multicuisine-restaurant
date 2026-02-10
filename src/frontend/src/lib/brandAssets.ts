/**
 * Single source of truth for brand asset paths.
 * Prevents drift and ensures consistent logo usage across the application.
 */

export const BRAND_ASSETS = {
  logo: '/assets/generated/taste-tales-logo.dim_512x512.png',
  favicon: '/assets/generated/taste-tales-favicon.dim_64x64.png',
  hero: '/assets/generated/taste-tales-hero-ambience.dim_1920x1080.png',
  ambienceGallery: '/assets/generated/gallery-ambience-ambience-v3.dim_1200x800.png',
} as const;

/**
 * Gallery images for the ambience showcase.
 * All paths point to generated static assets under /assets/generated/
 */
export const GALLERY_IMAGES = [
  {
    src: '/assets/generated/gallery-ambience.dim_1200x800.png',
    alt: 'Restaurant ambience with warm lighting and elegant decor',
  },
  {
    src: '/assets/generated/gallery-ambience-ambience.dim_1200x800.png',
    alt: 'Indoor dining area with teal chairs and elegant table settings',
  },
  {
    src: '/assets/generated/gallery-ambience-ambience-v2.dim_1200x800.png',
    alt: 'Spacious dining hall with decorative ceiling and teal seating',
  },
  {
    src: '/assets/generated/gallery-ambience-ambience-v3.dim_1200x800.png',
    alt: 'Main dining room with ornate ceiling design and elegant ambience',
  },
  {
    src: '/assets/generated/gallery-north-indian.dim_1200x800.png',
    alt: 'North Indian cuisine presentation',
  },
  {
    src: '/assets/generated/gallery-chinese.dim_1200x800.png',
    alt: 'Chinese cuisine dishes',
  },
  {
    src: '/assets/generated/gallery-mexican.dim_1200x800.png',
    alt: 'Mexican cuisine specialties',
  },
  {
    src: '/assets/generated/gallery-thai.dim_1200x800.png',
    alt: 'Thai cuisine offerings',
  },
  {
    src: '/assets/generated/gallery-italian.dim_1200x800.png',
    alt: 'Italian cuisine dishes',
  },
  {
    src: '/assets/generated/gallery-fast-food.dim_1200x800.png',
    alt: 'Fast food favorites',
  },
  {
    src: '/assets/generated/gallery-desserts.dim_1200x800.png',
    alt: 'Delicious desserts selection',
  },
  {
    src: '/assets/generated/gallery-shakes.dim_1200x800.png',
    alt: 'Refreshing shakes and beverages',
  },
] as const;
