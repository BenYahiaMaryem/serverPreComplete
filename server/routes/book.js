'use strict'
const express = require('express')
const router = express.Router()
const books=require('../controllers/book')




//books routes

router.get('/books',books.getAllBooks)
.post('/books',books.createBook)
.get('/books/:_id/book',books.findBookById)
.get('/books/:name',books.FindBookByName)
.put('/books/:name/delete',books.deleteBook)
.put('/books/:name/update',books.updateBook)
// export router
module.exports = router