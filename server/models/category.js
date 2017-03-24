'use strict'
const mongoose = require('mongoose')
mongoose.Promise = Promise

// mongoose.createConnection('mongodb://maryem:root@ds135820.mlab.com:35820/bookstore')
mongoose.connect('mongodb://localhost:27017/data')
// const validator = require('validator')
const Schema = mongoose.Schema

const categorySchema = Schema({
    _id: {
        type: Number,
        required: true
    },
    name:{
        type: String
    },
    isDeleted: {
        type: Number,
        default: 0,
        min: 0,
        max: 1
    },
    books: [{
        type: Number,
        ref: 'Book'
    }]
})
const Category = mongoose.model('Category', categorySchema)
module.exports = Category