export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
  is_active: boolean;
  category: number;  // This represents the category ID
}
