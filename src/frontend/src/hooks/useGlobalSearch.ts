import { useMemo } from 'react';
import { useGetMenu } from './useQueries';
import { useInternetIdentity } from './useInternetIdentity';
import { useIsCallerAdmin } from './useQueries';
import { mergeMenuData } from '@/lib/menuAdapters';
import { OFFERS } from '@/data/offersData';

export interface SearchResultPage {
  type: 'page';
  title: string;
  path: string;
  description?: string;
}

export interface SearchResultOffer {
  type: 'offer';
  title: string;
  description: string;
}

export interface SearchResultMenuItem {
  type: 'menu-item';
  categoryId: string;
  categoryName: string;
  itemName: string;
  itemDescription?: string;
  price: number;
}

export interface SearchResultCategory {
  type: 'menu-category';
  categoryId: string;
  categoryName: string;
  description: string;
}

export type SearchResult = SearchResultPage | SearchResultOffer | SearchResultMenuItem | SearchResultCategory;

export interface GroupedSearchResults {
  pages: SearchResultPage[];
  offers: SearchResultOffer[];
  menuCategories: SearchResultCategory[];
  menuItems: SearchResultMenuItem[];
}

export function useGlobalSearch(query: string): GroupedSearchResults {
  const { data: backendMenu } = useGetMenu();
  const { identity } = useInternetIdentity();
  const { data: isAdmin } = useIsCallerAdmin();

  const isAuthenticated = !!identity;
  const showMenuManagement = isAuthenticated && isAdmin;

  const results = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    if (!normalizedQuery) {
      return {
        pages: [],
        offers: [],
        menuCategories: [],
        menuItems: [],
      };
    }

    // Search pages
    const pages: SearchResultPage[] = [
      { type: 'page', title: 'Home', path: '/', description: 'Welcome to Taste & Tales' },
      { type: 'page', title: 'About', path: '/about', description: 'Our story and heritage' },
      { type: 'page', title: 'Menu', path: '/menu', description: 'Explore our diverse menu' },
      { type: 'page', title: 'Offers', path: '/offers', description: 'Exclusive offers and deals' },
      { type: 'page', title: 'Contact', path: '/contact', description: 'Get in touch with us' },
    ];

    if (showMenuManagement) {
      pages.push({
        type: 'page',
        title: 'Menu Management',
        path: '/menu-management',
        description: 'Manage restaurant menu',
      });
    }

    const matchedPages = pages.filter((page) => {
      const titleMatch = page.title.toLowerCase().includes(normalizedQuery);
      const descMatch = page.description?.toLowerCase().includes(normalizedQuery);
      return titleMatch || descMatch;
    });

    // Search offers
    const matchedOffers: SearchResultOffer[] = OFFERS.filter((offer) => {
      const titleMatch = offer.title.toLowerCase().includes(normalizedQuery);
      const descMatch = offer.description.toLowerCase().includes(normalizedQuery);
      return titleMatch || descMatch;
    }).map((offer) => ({
      type: 'offer',
      title: offer.title,
      description: offer.description,
    }));

    // Search menu
    const categories = mergeMenuData(backendMenu || null);
    const matchedCategories: SearchResultCategory[] = [];
    const matchedItems: SearchResultMenuItem[] = [];

    categories.forEach((category) => {
      const categoryNameMatch = category.name.toLowerCase().includes(normalizedQuery);
      const categoryDescMatch = category.description.toLowerCase().includes(normalizedQuery);

      if (categoryNameMatch || categoryDescMatch) {
        matchedCategories.push({
          type: 'menu-category',
          categoryId: category.id,
          categoryName: category.name,
          description: category.description,
        });
      }

      category.items.forEach((item) => {
        const itemNameMatch = item.name.toLowerCase().includes(normalizedQuery);
        const itemDescMatch = item.description?.toLowerCase().includes(normalizedQuery);

        if (itemNameMatch || itemDescMatch) {
          matchedItems.push({
            type: 'menu-item',
            categoryId: category.id,
            categoryName: category.name,
            itemName: item.name,
            itemDescription: item.description,
            price: item.price,
          });
        }
      });
    });

    // Sort by relevance (exact match > starts with > contains)
    const sortByRelevance = <T extends { title?: string; itemName?: string; categoryName?: string }>(
      items: T[],
      query: string
    ): T[] => {
      return items.sort((a, b) => {
        const aText = (a.title || a.itemName || a.categoryName || '').toLowerCase();
        const bText = (b.title || b.itemName || b.categoryName || '').toLowerCase();

        const aExact = aText === query ? 3 : 0;
        const bExact = bText === query ? 3 : 0;
        const aStarts = aText.startsWith(query) ? 2 : 0;
        const bStarts = bText.startsWith(query) ? 2 : 0;
        const aContains = aText.includes(query) ? 1 : 0;
        const bContains = bText.includes(query) ? 1 : 0;

        return bExact + bStarts + bContains - (aExact + aStarts + aContains);
      });
    };

    return {
      pages: sortByRelevance(matchedPages, normalizedQuery),
      offers: sortByRelevance(matchedOffers, normalizedQuery),
      menuCategories: sortByRelevance(matchedCategories, normalizedQuery),
      menuItems: sortByRelevance(matchedItems, normalizedQuery),
    };
  }, [query, backendMenu, showMenuManagement]);

  return results;
}
