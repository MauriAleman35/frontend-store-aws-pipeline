import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  imports: [],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
  readonly title = input<string>('No hay productos disponibles');
  readonly message = input<string>('Actualmente el catálogo no cuenta con artículos registrados.');
}
