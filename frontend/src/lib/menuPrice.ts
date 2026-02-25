import { MenuItem } from '@/data/menuData';

/**
 * Formats a menu item's price for display.
 * Handles numeric prices, textual labels (e.g., "M.R.P."), and dual prices.
 */
export function formatMenuPrice(item: MenuItem): string {
  // If there's a priceLabel, use it directly
  if (item.priceLabel) {
    return item.priceLabel;
  }

  // If there's a numeric price, format it with rupee symbol
  if (typeof item.price === 'number') {
    return `₹${item.price}`;
  }

  // Fallback for items with neither price nor priceLabel
  return 'Price on request';
}
