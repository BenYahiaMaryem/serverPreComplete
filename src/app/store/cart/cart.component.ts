import { BooksService } from './../../services/books.service';
import { Component, OnInit,OnChanges } from '@angular/core';
import { CartsService } from './../../services/carts.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit,OnChanges {
  books: any = []
  data: any = []
 cart = {
  
    isDeleted: 0,
    books: []
  }
  constructor(private cartsService: CartsService, private booksService: BooksService) { }

  ngOnInit() {
      this.cartsService.getCartById().subscribe(data => {
        console.log('cart' + data.books[0].name)
        this.books = data.books
      })
      /*console.log(this.data+'after first sub')
          let fields = `${this.data.books[0]}`
          for(let i = 1; i < this.data.length; i++){
            fields += `,${this.data.books[i]}`
          }
          console.log(fields)
          this.booksService.getManyBooks(fields).subscribe(book => {
            this.books.push(book)
            console.log(`${this.books}=========>`)
          })
          console.log(this.books)
        */

  }
  ngOnChanges(){
     this.cartsService.getCartById().subscribe(data => {
        this.books=data.books;
      })
  }
  test(id): void {
    console.log(id)
    this.books.splice(id, 1)
    /*this.booksService.getBookById(id).subscribe(data => {
      //this.books.
      console.log(`${this.books}`)
      //.indexOf(data)
    
    })*/
    this.cart.books=this.books
    this.cartsService.removeBookFromCart(this.cart).subscribe(data => {
        console.log(data)
      })
  }

}
