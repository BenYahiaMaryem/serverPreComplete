//import { CatalogComponent } from './../catalog/catalog.component'
import { Component, OnInit } from '@angular/core'
import { CategoriesService } from '../../services/categories.service'
import { BooksService } from '../../services/books.service'


//import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  categories: any = []
  books: any[]
  book: any = {
    name: 'book name',
    author: 'auhtor name',
    editionDate: 2000,
    edition: '',
    priceMin : 0 ,
    priceMax:0,
    category: ''
  }
  //catalog:CatalogComponent

  constructor(private categoryService: CategoriesService,
    private bookService: BooksService
  /*,private catalogComponent:CatalogComponent*/) {
    // this.catalog=catalogComponent
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  ngOnInit() {

    this.book = {
      name: null,
      author: null,
      editionDate: null,
      edition: null,
      priceMin : 10,
      priceMax: 500,
      categories: this.categories,
      category: null


    }
  }

  setMin(event){
    console.log("event"+event)
  }

/*  public save(isValid: boolean, f: any, book: any) {
    if (f) {
      console.log(book)
      this.bookService.getBookAdvancedSearch(book).subscribe(books => {
        this.books = books
      })
      //this.catalog.getBookAdvancedSearch(book)
    }
  }
*/
}
