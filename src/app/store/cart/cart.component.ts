import { Component, OnInit,OnChanges } from '@angular/core';
import { CartsService } from './../../services/carts.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit,OnChanges {
 books: any = []

  constructor(private cartsService: CartsService) { }

  ngOnInit() {
      this.cartsService.getCartById().subscribe(data => {
        console.log('cart' + data.books)
        this.books=data.books;
      })
  }
  ngOnChanges(){
     this.cartsService.getCartById().subscribe(data => {
        this.books=data.books;
        
      })
  }
  test(): void {
    console.log("salem")
  }

}
