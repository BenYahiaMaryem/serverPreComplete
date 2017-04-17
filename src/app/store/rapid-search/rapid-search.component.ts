import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
@Component({
  selector: 'app-rapid-search',
  templateUrl: './rapid-search.component.html',
  styleUrls: ['./rapid-search.component.css']
})
export class RapidSearchComponent implements OnInit {

books: any[];

book:any = {
    
    attr:'RapidSearch' 
}

  constructor(private bookService:BooksService) { }

  ngOnInit() {
    this.book = {
        
      attr:''        
    }
  }

  /* public save(isValid: boolean, f: any,book:any) {
        if(f)
        {
          console.log(book)
         this.bookService.getBookAdvancedSearch(book).subscribe( books => {
            this.books = books;
             console.log(books)
          })
        }
    }
*/

}
