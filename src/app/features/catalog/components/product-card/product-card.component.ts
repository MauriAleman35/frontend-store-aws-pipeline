import { Component, computed, input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  readonly product = input.required<Product>();

  readonly formattedPrice = computed(() => {
    const price = this.product().price;
    const formattedNumber = price.toFixed(2).replace('.', ',');
    return `Bs ${formattedNumber}`;
  });

  readonly statusLabel = computed(() => {
    return this.product().inStock ? 'Disponible' : 'Agotado';
  });

  readonly statusClass = computed(() => {
    return this.product().inStock ? 'badge--in-stock' : 'badge--out-of-stock';
  });
}
