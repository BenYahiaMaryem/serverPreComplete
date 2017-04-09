import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { ResearchComponent } from './research/research.component';
import { FormsModule } from '@angular/forms';

const ROUTES = [
    {
        path: 'catalog', 
        component: CatalogComponent
    },

     {
        path: 'research', 
        component: ResearchComponent
    }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),// Add routes to the app
    FormsModule 
  ],
  declarations: [
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    ResearchComponent
  ],
  exports: [
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    ResearchComponent
  ]
})
export class StoreModule { }
