import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe devolver la lista de productos iniciales', () => {
    const products = service.getProducts();
    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThanOrEqual(8);
    expect(service.products().length).toBe(products.length);
  });

  it('debe calcular correctamente el resumen de productos disponibles y agotados', () => {
    const summary = service.getSummary();
    const products = service.getProducts();

    const expectedAvailable = products.filter((p) => p.inStock).length;
    const expectedOutOfStock = products.filter((p) => !p.inStock).length;

    expect(summary.total).toBe(products.length);
    expect(summary.available).toBe(expectedAvailable);
    expect(summary.outOfStock).toBe(expectedOutOfStock);
    expect(summary.available + summary.outOfStock).toBe(summary.total);
  });

  // ❌ DEMO: este test rompe el pipeline intencionalmente
  it('DEMO: el precio del primer producto debe ser negativo (falla intencional)', () => {
    const products = service.getProducts();
    // Un precio nunca puede ser negativo — este expect siempre falla
    expect(products[0].price).toBeLessThan(0);
  });
});
