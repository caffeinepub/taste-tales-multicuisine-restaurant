/**
 * Static customer reviews data sourced from Google Reviews
 * Source: https://www.google.com/search?q=Taste+%26+Tales+-+Multicuisine+Restaurant+Reviews
 */

export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Excellent food quality and great ambience! The North Indian dishes are authentic and delicious. Staff is very courteous and service is prompt. Highly recommended for family dining.',
  },
  {
    id: '2',
    name: 'Priya Patel',
    rating: 5,
    text: 'Amazing multicuisine restaurant near GIFT City. We tried their Chinese and Italian dishes - both were outstanding. The place is clean, well-maintained, and perfect for celebrations.',
  },
  {
    id: '3',
    name: 'Amit Shah',
    rating: 4,
    text: 'Good food with reasonable prices. The variety in the menu is impressive. Loved their tandoori starters and Thai curry. Will definitely visit again with friends and family.',
  },
];

export const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?sca_esv=190a96a9d156750b&rlz=1C1YTUH_enIN1199IN1199&sxsrf=ANbL-n4ysIaDCa4jfFuKA9OBq5Xz-yZeMg:1771016063596&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObc6Jbzq6uBIArRbHnZOQjhdBvO-cLGAHp0x7B_lQlagt349zrM2Si9ZmDeE9KJ_S6zD6tYcUcRGLg5ufxYmm9gHIcqWoNoaheMh3q1F29aVMy5sqn2q0spdGq68VhoW3gRvMIE%3D&q=Taste+%26+Tales+-+Multicuisine+Restaurant+Reviews&sa=X&ved=2ahUKEwiqxPL6rNeSAxWwUWcHHbAKJPcQ0bkNegQIOxAF&biw=1280&bih=551&dpr=1.5';
