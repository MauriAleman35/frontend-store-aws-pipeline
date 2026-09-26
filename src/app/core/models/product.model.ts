export type ProductCategory = 'Tecnología' | 'Hogar' | 'Accesorios';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  inStock: boolean;
  iconName: 'headphones' | 'keyboard' | 'powerbank' | 'laptop-stand' | 'lamp' | 'bottle' | 'desk-organizer' | 'backpack' | 'cable-pouch';
}

export interface CatalogSummary {
  total: number;
  available: number;
  outOfStock: number;
}
