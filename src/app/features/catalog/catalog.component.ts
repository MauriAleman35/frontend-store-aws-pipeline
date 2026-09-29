import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { ProductCategory } from '../../core/models/product.model';
import { CatalogSummaryComponent } from './components/catalog-summary/catalog-summary.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-catalog',
  imports: [CatalogSummaryComponent, ProductCardComponent, EmptyStateComponent, FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  private readonly productService = inject(ProductService);

  readonly summary = this.productService.summary;

  // Filtros
  readonly filterCategory = signal<ProductCategory | 'Todos'>('Todos');
  readonly filterStock = signal<'todos' | 'disponibles' | 'agotados'>('todos');

  readonly categories: (ProductCategory | 'Todos')[] = ['Todos', 'Tecnología', 'Hogar', 'Accesorios'];

  // Productos filtrados reactivamente
  readonly products = computed(() => {
    let list = this.productService.products();

    if (this.filterCategory() !== 'Todos') {
      list = list.filter(p => p.category === this.filterCategory());
    }

    if (this.filterStock() === 'disponibles') {
      list = list.filter(p => p.inStock);
    } else if (this.filterStock() === 'agotados') {
      list = list.filter(p => !p.inStock);
    }

    return list;
  });
}
