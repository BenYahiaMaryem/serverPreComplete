
import { Component } from '@angular/core';
import 'hammerjs';

// Imports commented out for brevity
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';


import { AppComponent } from './app.component';
/*import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './categories.service';*/
import { BooksService } from './services/books.service';
import { CartsService } from './services/carts.service';
import { CategoriesService } from './services/categories.service';

import { AdminComponent } from './admin/admin.component';
import { StoreComponent } from './store/store.component';

import { StoreModule } from './store/store.module';

import { AdminModule } from './admin/admin.module'

//import { ClientsComponent } from './clients/clients.component';
// Define the routes
const ROUTES = [
    {
        path: '',
        redirectTo: 'store',
        pathMatch: 'full'
    },
    /*{
        path: 'categories',
        component: CategoriesComponent
    },*/
    /*{
        path: 'books',
        component: BooksComponent
    },*/
    {
        path: 'store',
        loadChildren: './store/store.module#StoreModule',
        component:StoreComponent
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    }
]

@NgModule({
  declarations: [
    AppComponent,
    //BooksComponent,
    AdminComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),// Add routes to the app
    StoreModule,
    AdminModule
    
  ],
  providers: [
        BooksService,
        CategoriesService,
        CartsService,
        {provide: APP_BASE_HREF, useValue: '/' }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

