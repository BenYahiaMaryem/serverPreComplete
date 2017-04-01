import { Component, SimpleChange} from '@angular/core';
import { NgForm } from "@angular/forms";
//smart table imports 
import { Ng2SmartTableModule, LocalDataSource, Grid, InputFilterComponent } from 'ng2-smart-table';

import {BooksService} from '../../services/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent  {
    grid: Grid
    

    books :any=[]
    categories : any[]
    settings = {
    columns: {
        _id: {
        title: 'Id'  
        },
        name: {
        title: 'Name'
        },
        author: {
        title: 'Author'
        },
        description: {
        title: 'Description'
        },
        price: {
        title: 'Price'  
        },
        edition: {
        title: 'Edition'  
        },
        editionDate: {
        title: 'Edition Date'  
        },
        image: {
        title: 'Image'  
        }
    },
    actions: {
        add: true,
        edit: true,
        delete: true
    },
    add: {
        confirmCreate: true
    },
     delete: {
        confirmDelete: true
    },
     edit: {
        confirmSave: true
    }
    }

    book = {
        _id: 0,
        name : 'book name',
        author : 'auhtor name' ,
        editionDate : 'j/m/y',
        price : 0 ,
        description : ' description',
        edition : 'edition',
        image: 'Insert Image Here',
        isDeleted : 0

    }
    source: LocalDataSource = new LocalDataSource()
    sourceCategories:LocalDataSource = new LocalDataSource()

    constructor(private booksService: BooksService) {  
        this.booksService.getAllBooks().subscribe(books => {
                this.books = books
                this.source.load(books)
                })
        }
    addBook(newData){
            let book = this.book
            book = newData
            book._id = +newData._id
            book.price = +newData.price
            book.isDeleted = 0
            this.booksService.addBook(book)
                .subscribe(data => {
                    console.log('Success' + data)
                   //this.books.push(book);
                })
        }


    /*getBookById(_id){
        var bookG=this.booksService.getBookById(_id)
        .subscribe(data => {
                    console.log('Success getting book by id' + data)
                    
                })
    }*/
    removeBook(_id){
        var bookG=this.booksService.getBookById(_id)
        .subscribe(data => {
                    this.book=data;
                    this.book.isDeleted=1;
                    this.booksService.removeBook(this.book).subscribe (data => {
                    console.log('Success deleting ' + data);
                    
                    })
        })
    }
    updateBook(newData){
        let book = this.book
        book = newData
        console.log(`${book} ken ${newData}`)
        book._id = +newData._id
        book.price = +newData.price
        book.isDeleted = 0
        console.log(`${book} to be updated`)
        this.booksService.updateBook(book)
        .subscribe(data => {
                    console.log('Success updating' + data)
                   // this.books.push(book);
                })
    }
    onCreateConfirm(event): void{
        this.addBook(event.newData)
        //duplicated item show to be deleted
        //this.books.push(event.newData)
       // this.books.push(event.newData)
        //.then()
        ///===> input fields to be removed after inserting
       this.books=this.booksService.getAllBooks().subscribe(books => {
                this.books = books
                
        this.source.load(this.books)
    })
    }

    onEditConfirm(event): void {
        this.updateBook(event.newData)
        this.books=this.booksService.getAllBooks().subscribe(books => {
                this.books = books
                
        this.source.load(this.books)
    })
        
    }

    onDeleteConfirm(event): void {
       console.log(event)
       this.removeBook(+event.data._id) 
    }
 
}
