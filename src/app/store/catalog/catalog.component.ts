import { Component, OnInit } from '@angular/core';

import {BooksService} from '../../services/books.service';
import { CartsService } from './../../services/carts.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

 books: any = []

  cart = {
  
    isDeleted: 0,
    TotalQty: 0,
    books: []
  }

  constructor(private booksService: BooksService, private cartsService: CartsService) {
    this.booksService.getAllBooks().subscribe(books => {
      this.books = books
    })
  }

  ngOnInit() {
  }

  public getBookAdvancedSearch(book) {
    this.booksService.getBookAdvancedSearch(book).subscribe(books => {
      this.books = books
      console.log("from catalog")
    })
  }

  public getBookRapidSearch(book) {
    this.booksService.getBookRapidSearch(book).subscribe(books => {
      this.books = books
      console.log("from catalog")
    })
  }
  public addToCart(book) {
    if (book.isDeleted === 0) // book exists
    {
      console.log('cart will be added')
    
    
      this.cart.books.push(book._id)
      this.cart.TotalQty += 1

      this.cartsService.addCart(this.cart).subscribe(data => {
        console.log('Success' + data)
        //this.books.push(book);
      })
    }
  }
}
