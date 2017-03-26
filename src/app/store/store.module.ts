import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component'

const ROUTES = [
    {
        path: 'catalog', 
        component: CatalogComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),// Add routes to the app
  ],
  declarations: [
    CatalogComponent,
    HeaderComponent
  ],
  exports: [
    CatalogComponent,
    HeaderComponent
  ]
})
export class StoreModule { }
