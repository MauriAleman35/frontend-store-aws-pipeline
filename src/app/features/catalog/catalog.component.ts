import { Component, inject } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CatalogSummaryComponent } from './components/catalog-summary/catalog-summary.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-catalog',
  imports: [CatalogSummaryComponent, ProductCardComponent, EmptyStateComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  private readonly productService = inject(ProductService);

  readonly products = this.productService.products;
  readonly summary = this.productService.summary;
}
