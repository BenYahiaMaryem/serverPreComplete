import { BooksService } from './../../services/books.service';
import { Component, OnInit,OnChanges,Input,DoCheck } from '@angular/core';
import { CartsService } from './../../services/carts.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit,OnChanges,DoCheck {
  books: any = []
  data: any = []
 cart = {
  
    isDeleted: 0,
    books: [],
    TotalPrice:this.total,
    TotalQty:0
 }


 total:number=0;
  /*@Input() TotalQty: number;
    @Input() oldPrice: number;*/
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
    
     // console.log("total"+this.total)
  }

  ngDoCheck(){
    
      console.log("total"+this.total)
  }

  removeBookFromCart(id): void {
    console.log(id)
    this.books.splice(id, 1)
   
    this.cart.books=this.books
    this.cartsService.removeBookFromCart(this.cart).subscribe(data => {
        console.log(data)
      })
     
  }

totalQ():void{
this.total = 0;
    for(let element of this.books) {
      this.total += element.oldPrice * element.TotalQty;
}
}


  trackBooks(index, book) {
      let t=book.oldPrice*book.TotalQty
        t=book.oldPrice*book.TotalQty+t
        this.total=book.oldPrice*book.TotalQty
         // console.log(book.oldPrice*book.TotalQty+"total "+this.total);
        return book ? book.TotalQty : undefined;

    }

    passCommand():void{
      
      console.log("test command")
    }
}
