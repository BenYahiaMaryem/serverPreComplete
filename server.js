// Get dependencies
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser=require('cookie-parser')
const mongoose=require('mongoose')
mongoose.Promise = Promise
var session=require('express-session')
var MongoStore=require('connect-mongo')(session);

//mongoose.connect('mongodb://localhost:27017/data2')
const autoIncrement = require('mongoose-auto-increment');
const connection= mongoose.connect('mongodb://localhost:27017/data2')
autoIncrement.initialize(connection)

//import models
const book = require('./server/models/book')
const categorie = require('./server/models/category')
const client = require('./server/models/client')
const cart = require('./server/models/cart')



const app = express()

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  secret: 'mySecret',
  resave: false, 
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
  //cookie: {maxAge: 180 * 60 * 1000 }
}))

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')))

// Set our api routes
//app.use('/api', api)
app.use('/api',require('./server/routes/book'))
app.use('/api',require('./server/routes/client'))
app.use('/api',require('./server/routes/category'))
app.use('/api',require('./server/routes/cart'))

app.use(function(req,res,next){
res.locals.session=req.session;
next();
});
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
  
})

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3003'
app.set('port', port)

/**
 * Create HTTP server.
 */
const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`))