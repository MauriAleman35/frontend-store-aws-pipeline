import { Injectable, computed, signal } from '@angular/core';
import { CatalogSummary, Product } from '../models/product.model';

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Audífonos inalámbricos NovaBass Pro',
    description: 'Cancelación activa de ruido, Bluetooth 5.3 y batería de hasta 36 horas.',
    category: 'Tecnología',
    price: 350.0,
    inStock: true,
    iconName: 'headphones'
  },
  {
    id: 'prod-02',
    name: 'Teclado mecánico compacto RGB',
    description: 'Switches táctiles silenciosos, layout 75% e iluminación RGB personalizable.',
    category: 'Tecnología',
    price: 420.0,
    inStock: true,
    iconName: 'keyboard'
  },
  {
    id: 'prod-03',
    name: 'Cargador portátil 20.000 mAh FastCharge',
    description: 'Carga ultrarrápida de 65W por USB-C y pantalla digital de estado.',
    category: 'Tecnología',
    price: 210.0,
    inStock: false,
    iconName: 'powerbank'
  },
  {
    id: 'prod-04',
    name: 'Soporte ergonómico para laptop',
    description: 'Estructura de aleación de aluminio plegable con 6 niveles de altura.',
    category: 'Tecnología',
    price: 180.0,
    inStock: true,
    iconName: 'laptop-stand'
  },
  {
    id: 'prod-05',
    name: 'Lámpara de escritorio LED con atenuador',
    description: 'Control táctil de temperatura de color, temporizador y puerto USB auxiliar.',
    category: 'Hogar',
    price: 160.0,
    inStock: true,
    iconName: 'lamp'
  },
  {
    id: 'prod-06',
    name: 'Botella térmica de acero 750ml',
    description: 'Aislamiento al vacío de doble pared, mantiene bebidas frías 24h o calientes 12h.',
    category: 'Hogar',
    price: 95.0,
    inStock: true,
    iconName: 'bottle'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _products = signal<Product[]>(INITIAL_PRODUCTS);

  readonly products = this._products.asReadonly();

  readonly summary = computed<CatalogSummary>(() => {
    const list = this._products();
    const total = list.length;
    const available = list.filter((p) => p.inStock).length;
    const outOfStock = total - available;

    return { total, available, outOfStock };
  });

  getProducts(): Product[] {
    return this._products();
  }

  getSummary(): CatalogSummary {
    return this.summary();
  }
}
