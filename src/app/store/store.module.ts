import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { ResearchComponent } from './research/research.component';
import { FormsModule } from '@angular/forms';
import { RapidSearchComponent } from './rapid-search/rapid-search.component';
import { CartComponent } from './cart/cart.component'

const ROUTES = [
   /*  {
        path: '',
        redirectTo: 'research',
        pathMatch: 'full'
    },*/
    {
        path: '', 
        component:ResearchComponent
    },
    {
        path: 'header', 
        component: HeaderComponent
    },
    {
        path: 'footer', 
        component: FooterComponent
    },
    {
        path: 'catalog', 
        component: CatalogComponent
    },

     {
        path: 'research', 
        component: ResearchComponent
    },
    
    {
        path: 'rapidSearch', 
        component: RapidSearchComponent
    },
    {
         path: 'cart', 
        component: CartComponent
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
    ResearchComponent,
    RapidSearchComponent,
    CartComponent
  ],
  exports: [
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    ResearchComponent,
    RapidSearchComponent,
    CartComponent
  ],
  providers: [
      CatalogComponent
  ]
})
export class StoreModule { }
