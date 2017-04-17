'use strict'
let cart = require('../models/cart')
const bodyParser = require('body-parser')

module.exports = {

        // fetch all carts
  getCarts: (req, res) => {
    var response = {}
    cart.find({})
       // .populate('command')
        .exec((err, data) => {
        // Mongo command to fetch all data from collection.
          if (err) {
            response = {'error': true, 'message': 'Error fetching data'}
          } else {
            response = data
          }
          res.json(response)
        })
  },
  getCartByDate: (req, res) => {
    var response = {}

    cart.findOne({name: req.params.name}, (err, data) => {
      if (err) {
        response = {'error': true, 'message': 'Error fetching data'}
      } else {
        response = data
      }
      res.json(response)
    })
  },
// insert a client
  addCart: (req, res) => {
    let db = new cart(req.body)
    var response = {}
    db.save(function (err) {
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
      if (err) {
        return res.send(err)
      } else {
        response = {'error': false, 'message': 'Data added'}
      }
      res.json(response)
    })
  },

// fetch a client by id
  getCartById: (req, res) => {
    var response = {}
    cart.findOne({_id: req.params._id}, (err, cart) => {
        // Mongo command to fetch all data from collection.
      if (err) {
        response = {'error': true, 'message': 'Error fetching data'}
      } else {
        response = cart
      }
      res.json(response)
    })
  },

  updateCart: (req, res) => {
    var response = {}
    cart.findOneAndUpdate({ date: req.params.date}, req.body, function (err, cart) {
      if (err) return res.status(400).json(err)

      else {
        response = cart
      }
      res.json(response)
    })
  },

  deleteCart: (req, res) => {
    var response = {}
    cart.findOneAndUpdate({ date: req.params.date }, req.body, function (err, cart) {
      if (err) return res.status(400).json(err)

      else {
        response = cart
      }
      res.json(response)
    })
  }

}
