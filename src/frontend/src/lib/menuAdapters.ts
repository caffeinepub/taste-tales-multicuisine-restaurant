import { MenuCategory, menuCategories } from '@/data/menuData';
import type { MenuData, MenuItem as BackendMenuItem, MenuCategory as BackendMenuCategory } from '@/backend';

// Convert frontend menu data to backend format
export function toBackendMenuData(categories: MenuCategory[]): MenuData {
  const backendItems: BackendMenuItem[] = [];
  const backendCategories: BackendMenuCategory[] = [];
  
  let itemIdCounter = 1;
  let categoryIdCounter = 1;

  categories.forEach((category) => {
    const categoryId = BigInt(categoryIdCounter);
    const itemIds: bigint[] = [];

    category.items.forEach((item) => {
      const itemId = BigInt(itemIdCounter);
      backendItems.push({
        id: itemId,
        name: item.name,
        description: item.description || '',
        price: item.price,
        categoryId: categoryId,
      });
      itemIds.push(itemId);
      itemIdCounter++;
    });

    backendCategories.push({
      id: categoryId,
      name: category.name,
      itemIds: itemIds,
    });

    categoryIdCounter++;
  });

  return {
    items: backendItems,
    categories: backendCategories,
  };
}

// Convert backend menu data to frontend format
export function fromBackendMenuData(backendData: MenuData): MenuCategory[] {
  const categories: MenuCategory[] = [];

  backendData.categories.forEach((backendCategory, index) => {
    const categoryItems = backendData.items
      .filter((item) => item.categoryId === backendCategory.id)
      .map((item) => ({
        name: item.name,
        price: item.price,
        description: item.description || undefined,
      }));

    // Try to match with default category data for metadata
    const defaultCategory = menuCategories.find(
      (cat) => cat.name.toLowerCase() === backendCategory.name.toLowerCase()
    );

    categories.push({
      id: defaultCategory?.id || `category-${index}`,
      name: backendCategory.name,
      iconKey: defaultCategory?.iconKey || 'default',
      coverImage: defaultCategory?.coverImage,
      description: defaultCategory?.description || '',
      order: defaultCategory?.order || index + 1,
      items: categoryItems,
    });
  });

  return categories.sort((a, b) => a.order - b.order);
}

// Merge backend data with default data (fallback to default if backend is empty)
export function mergeMenuData(backendData: MenuData | null): MenuCategory[] {
  if (!backendData || backendData.categories.length === 0) {
    return menuCategories;
  }
  return fromBackendMenuData(backendData);
}
