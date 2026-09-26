import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { Product } from '../../../../core/models/product.model';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const mockProductInStock: Product = {
    id: 'prod-test-1',
    name: 'Audífonos inalámbricos NovaBass Pro',
    description: 'Cancelación activa de ruido y batería de hasta 36 horas.',
    category: 'Tecnología',
    price: 350.0,
    inStock: true,
    iconName: 'headphones'
  };

  const mockProductOutOfStock: Product = {
    id: 'prod-test-2',
    name: 'Cargador portátil 20.000 mAh',
    description: 'Carga ultrarrápida de 65W.',
    category: 'Tecnología',
    price: 210.0,
    inStock: false,
    iconName: 'powerbank'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
  });

  it('debe crearse correctamente', () => {
    fixture.componentRef.setInput('product', mockProductInStock);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('debe mostrar correctamente el nombre y el precio formateado en bolivianos', () => {
    fixture.componentRef.setInput('product', mockProductInStock);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const nameEl = compiled.querySelector('[data-testid="product-name"]');
    const priceEl = compiled.querySelector('[data-testid="product-price"]');

    expect(nameEl?.textContent?.trim()).toBe('Audífonos inalámbricos NovaBass Pro');
    expect(priceEl?.textContent?.trim()).toBe('Bs 350,00');
  });

  it('debe mostrar la etiqueta "Disponible" cuando el producto tiene stock', () => {
    fixture.componentRef.setInput('product', mockProductInStock);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const badgeEl = compiled.querySelector('[data-testid="product-status-badge"]');

    expect(badgeEl?.textContent?.trim()).toBe('Disponible');
    expect(badgeEl?.classList).toContain('badge--in-stock');
  });

  it('debe mostrar la etiqueta "Agotado" cuando un producto está agotado', () => {
    fixture.componentRef.setInput('product', mockProductOutOfStock);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const badgeEl = compiled.querySelector('[data-testid="product-status-badge"]');

    expect(badgeEl?.textContent?.trim()).toBe('Agotado');
    expect(badgeEl?.classList).toContain('badge--out-of-stock');
  });
});
