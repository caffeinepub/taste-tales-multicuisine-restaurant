/**
 * Centralized social media and review platform URLs for the restaurant.
 * Used by Social Connect components across the application.
 */

export const SOCIAL_CONNECT_LINKS = {
  instagram: {
    url: 'https://instagram.com',
    label: 'Follow us on Instagram',
  },
  googleReview: {
    url: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review',
    label: 'Review us on Google',
  },
  facebook: {
    url: 'https://facebook.com',
    label: 'Follow us on Facebook',
  },
  twitter: {
    url: 'https://twitter.com',
    label: 'Follow us on Twitter',
  },
} as const;
