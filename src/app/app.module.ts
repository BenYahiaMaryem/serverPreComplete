import { Component } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Imports commented out for brevity
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
//smart table
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
/*import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './categories.service';*/
import { BooksComponent } from './books/books.component';
import { BooksService } from './books//books.service';


//import { ClientsComponent } from './clients/clients.component';
// Define the routes
const ROUTES = [
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
    },
    /*{
        path: 'categories',
        component: CategoriesComponent
    },*/
    {
        path: 'books',
        component: BooksComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),// Add routes to the app
    MaterialModule,
    Ng2SmartTableModule 
  ],
  providers: [BooksService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

