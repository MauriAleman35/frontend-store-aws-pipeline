import { Component } from '@angular/core';
import { CatalogComponent } from './features/catalog/catalog.component';

@Component({
  selector: 'app-root',
  imports: [CatalogComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
