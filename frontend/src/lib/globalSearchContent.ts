import { menuCategories } from '@/data/menuData';
import { formatMenuPrice } from '@/lib/menuPrice';

export interface SearchResult {
  type: 'menu' | 'offer' | 'page';
  title: string;
  description?: string;
  link: string;
  category?: string;
  badge?: string;
}

// Normalize text for search matching
function normalizeText(text: string): string {
  return text.toLowerCase().trim();
}

// Menu items search index
function getMenuSearchResults(query: string): SearchResult[] {
  const normalizedQuery = normalizeText(query);
  const results: SearchResult[] = [];

  menuCategories.forEach((category) => {
    category.items.forEach((item) => {
      const nameMatch = normalizeText(item.name).includes(normalizedQuery);
      const categoryMatch = normalizeText(category.name).includes(normalizedQuery);
      const descriptionMatch = item.description && normalizeText(item.description).includes(normalizedQuery);

      if (nameMatch || categoryMatch || descriptionMatch) {
        results.push({
          type: 'menu',
          title: item.name,
          description: item.description || `From ${category.name}`,
          link: `/menu?q=${encodeURIComponent(item.name)}`,
          category: category.name,
          badge: formatMenuPrice(item),
        });
      }
    });
  });

  return results;
}

// Offers search index
function getOffersSearchResults(query: string): SearchResult[] {
  const normalizedQuery = normalizeText(query);
  const offers = [
    {
      title: 'Flat 15% Pre-book offer',
      description: 'Book your table in advance and enjoy a flat 15% discount on your total bill. Perfect for planning special occasions and family gatherings.',
      keywords: ['prebook', 'pre-book', 'advance', 'booking', 'discount', '15%', 'fifteen', 'percent', 'table', 'reservation'],
    },
    {
      title: 'Instant 10% off on bill payments',
      description: 'Get an instant 10% discount when you pay your bill. Valid on all payment methods including cash, card, and digital wallets.',
      keywords: ['instant', 'payment', 'bill', 'discount', '10%', 'ten', 'percent', 'cash', 'card', 'wallet'],
    },
    {
      title: 'Bank & RuPay offers',
      description: 'Exclusive discounts and cashback offers available on select bank cards and RuPay transactions.',
      keywords: ['bank', 'rupay', 'card', 'cashback', 'exclusive', 'transaction', 'credit', 'debit'],
    },
  ];

  const results: SearchResult[] = [];

  offers.forEach((offer) => {
    const matchesTitle = normalizeText(offer.title).includes(normalizedQuery);
    const matchesDescription = normalizeText(offer.description).includes(normalizedQuery);
    const matchesKeywords = offer.keywords.some((keyword) =>
      normalizeText(keyword).includes(normalizedQuery)
    );

    if (matchesTitle || matchesDescription || matchesKeywords) {
      results.push({
        type: 'offer',
        title: offer.title,
        description: offer.description,
        link: '/offers',
      });
    }
  });

  return results;
}

// Pages search index
function getPagesSearchResults(query: string): SearchResult[] {
  const normalizedQuery = normalizeText(query);
  const pages = [
    {
      title: 'Home',
      description: 'A World of Flavours, Thoughtfully Crafted',
      link: '/',
      keywords: ['home', 'main', 'welcome', 'taste', 'tales', 'restaurant', 'multicuisine', 'flavours', 'world'],
    },
    {
      title: 'About Us',
      description: 'Our story, values, and commitment to quality',
      link: '/about',
      keywords: ['about', 'story', 'heritage', 'quality', 'ingredients', 'hygiene', 'family', 'values', 'mission'],
    },
    {
      title: 'Menu',
      description: 'Explore our diverse multicuisine menu',
      link: '/menu',
      keywords: ['menu', 'food', 'dishes', 'cuisine', 'north indian', 'chinese', 'mexican', 'thai', 'italian', 'fast food', 'desserts', 'shakes'],
    },
    {
      title: 'Offers',
      description: 'Exclusive offers and deals',
      link: '/offers',
      keywords: ['offers', 'deals', 'discounts', 'promotions', 'savings', 'special'],
    },
    {
      title: 'Contact',
      description: 'Visit us near GIFT City, Gandhinagar',
      link: '/contact',
      keywords: ['contact', 'location', 'address', 'phone', 'directions', 'gift city', 'gandhinagar', 'raysan', 'hours', 'map'],
    },
  ];

  const results: SearchResult[] = [];

  pages.forEach((page) => {
    const matchesTitle = normalizeText(page.title).includes(normalizedQuery);
    const matchesDescription = normalizeText(page.description).includes(normalizedQuery);
    const matchesKeywords = page.keywords.some((keyword) =>
      normalizeText(keyword).includes(normalizedQuery)
    );

    if (matchesTitle || matchesDescription || matchesKeywords) {
      results.push({
        type: 'page',
        title: page.title,
        description: page.description,
        link: page.link,
      });
    }
  });

  return results;
}

// Main search function
export function searchGlobal(query: string): {
  menuResults: SearchResult[];
  offerResults: SearchResult[];
  pageResults: SearchResult[];
  totalResults: number;
} {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return {
      menuResults: [],
      offerResults: [],
      pageResults: [],
      totalResults: 0,
    };
  }

  const menuResults = getMenuSearchResults(trimmedQuery);
  const offerResults = getOffersSearchResults(trimmedQuery);
  const pageResults = getPagesSearchResults(trimmedQuery);

  return {
    menuResults,
    offerResults,
    pageResults,
    totalResults: menuResults.length + offerResults.length + pageResults.length,
  };
}
