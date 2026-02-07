/**
 * Single source of truth for brand asset paths.
 * Prevents drift and ensures consistent logo usage across the application.
 */

export const BRAND_ASSETS = {
  logo: '/assets/generated/taste-tales-logo.dim_512x512.png',
  favicon: '/assets/generated/taste-tales-favicon.dim_64x64.png',
  hero: '/assets/generated/taste-tales-hero.dim_1920x1080.png',
} as const;
