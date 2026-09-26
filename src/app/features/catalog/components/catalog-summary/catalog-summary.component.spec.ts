import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogSummaryComponent } from './catalog-summary.component';
import { CatalogSummary } from '../../../../core/models/product.model';

describe('CatalogSummaryComponent', () => {
  let component: CatalogSummaryComponent;
  let fixture: ComponentFixture<CatalogSummaryComponent>;

  const mockSummary: CatalogSummary = {
    total: 9,
    available: 6,
    outOfStock: 3
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogSummaryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogSummaryComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('summary', mockSummary);
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar los valores correctos de total, disponibles y agotados', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const totalEl = compiled.querySelector('[data-testid="summary-total-value"]');
    const availableEl = compiled.querySelector('[data-testid="summary-available-value"]');
    const outOfStockEl = compiled.querySelector('[data-testid="summary-out-of-stock-value"]');

    expect(totalEl?.textContent?.trim()).toBe('9');
    expect(availableEl?.textContent?.trim()).toBe('6');
    expect(outOfStockEl?.textContent?.trim()).toBe('3');
  });

  it('debe reflejar cambios cuando el resumen cambia', () => {
    fixture.componentRef.setInput('summary', {
      total: 10,
      available: 8,
      outOfStock: 2
    });
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[data-testid="summary-total-value"]')?.textContent?.trim()).toBe('10');
    expect(compiled.querySelector('[data-testid="summary-available-value"]')?.textContent?.trim()).toBe('8');
    expect(compiled.querySelector('[data-testid="summary-out-of-stock-value"]')?.textContent?.trim()).toBe('2');
  });
});
