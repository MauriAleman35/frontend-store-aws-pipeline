import { Component, input } from '@angular/core';
import { CatalogSummary } from '../../../../core/models/product.model';

@Component({
  selector: 'app-catalog-summary',
  imports: [],
  templateUrl: './catalog-summary.component.html',
  styleUrl: './catalog-summary.component.scss'
})
export class CatalogSummaryComponent {
  readonly summary = input.required<CatalogSummary>();
}
