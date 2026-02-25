// Single source of truth for all brand assets
// Asset paths are relative to the public directory and will be resolved by Vite
export const BRAND_ASSETS = {
  logo: '/assets/generated/taste-tales-logo.dim_512x512.png',
  favicon: '/assets/generated/taste-tales-favicon.dim_64x64.png',
  // Optimized hero images for performance
  hero: '/assets/generated/taste-tales-hero-food-eye-catching-optimized.dim_1280x720.png',
  heroMobile: '/assets/generated/taste-tales-hero-food-eye-catching-mobile.dim_640x360.png',
  heroOriginal: '/assets/generated/taste-tales-hero-food-eye-catching.dim_1920x1080.png',
} as const;

// Indian cooking themed watermark images for performance
export const WATERMARK_ASSETS = {
  tile1: '/assets/generated/indian-cooking-watermark-01-optimized.dim_1200x800.png',
  tile2: '/assets/generated/indian-cooking-watermark-02-optimized.dim_1200x800.png',
  tile3: '/assets/generated/indian-cooking-watermark-03-optimized.dim_1200x800.png',
} as const;

// Gallery images for the Gallery page
export const GALLERY_IMAGES = [
  {
    src: '/assets/generated/gallery-north-indian.dim_1200x800.png',
    alt: 'North Indian Cuisine',
  },
  {
    src: '/assets/generated/gallery-chinese.dim_1200x800.png',
    alt: 'Chinese Cuisine',
  },
  {
    src: '/assets/generated/gallery-mexican.dim_1200x800.png',
    alt: 'Mexican Cuisine',
  },
  {
    src: '/assets/generated/gallery-thai.dim_1200x800.png',
    alt: 'Thai Cuisine',
  },
  {
    src: '/assets/generated/gallery-italian.dim_1200x800.png',
    alt: 'Italian Cuisine',
  },
  {
    src: '/assets/generated/gallery-fast-food.dim_1200x800.png',
    alt: 'Fast Food',
  },
  {
    src: '/assets/generated/gallery-desserts.dim_1200x800.png',
    alt: 'Desserts',
  },
  {
    src: '/assets/generated/gallery-shakes.dim_1200x800.png',
    alt: 'Shakes and Beverages',
  },
  {
    src: '/assets/generated/gallery-ambience.dim_1200x800.png',
    alt: 'Restaurant Ambience',
  },
  {
    src: '/assets/generated/gallery-ambience-ambience.dim_1200x800.png',
    alt: 'Dining Area',
  },
  {
    src: '/assets/generated/gallery-ambience-ambience-v2.dim_1200x800.png',
    alt: 'Interior View',
  },
  {
    src: '/assets/generated/gallery-ambience-ambience-v3.dim_1200x800.png',
    alt: 'Seating Area',
  },
] as const;

// Value proposition images for About page
export const VALUE_IMAGES = {
  globalCulinary: '/assets/generated/global-culinary-journey.dim_400x300.png',
  premiumIngredients: '/assets/generated/premium-ingredients.dim_400x300.png',
  hygieneSafety: '/assets/generated/hygiene-safety.dim_400x300.png',
  familyFriendly: '/assets/generated/family-friendly.dim_400x300.png',
} as const;
