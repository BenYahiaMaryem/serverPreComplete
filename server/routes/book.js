'use strict'
const express = require('express')
const router = express.Router()
const books=require('../controllers/book')




//books routes

router.get('/books',books.getAllBooks)
.post('/books',books.createBook)
.get('/books/:_id',books.findBookById)
.put('/books/:_id/delete',books.deleteBook)
.put('/books/:_id/update',books.updateBook)
// export router
module.exports = router