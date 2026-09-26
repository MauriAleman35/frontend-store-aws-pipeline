import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';
import { ProductService } from '../../core/services/product.service';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogComponent],
      providers: [ProductService]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe renderizar el encabezado con nombre, subtítulo y versión de catálogo', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.catalog-header__title')?.textContent).toContain('NovaStore');
    expect(compiled.querySelector('.catalog-header__subtitle')?.textContent).toContain(
      'Productos seleccionados para tu día a día'
    );
    expect(compiled.querySelector('[data-testid="catalog-version-badge"]')?.textContent).toContain(
      'Catálogo v1.0'
    );
  });

  it('debe mostrar en el catálogo todos los productos recibidos del servicio', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const expectedProducts = productService.getProducts();

    const productCards = compiled.querySelectorAll('[data-testid="product-card"]');
    expect(productCards.length).toBe(expectedProducts.length);
    expect(productCards.length).toBeGreaterThanOrEqual(8);
  });
});
