// Imports commented out for brevity
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './categories.service';
// Define the routes
const ROUTES = [
    {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
    },
    {
        path: 'categories',
        component: CategoriesComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
     CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
