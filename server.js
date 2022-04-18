const express = require("express");
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')

// Require routes
const sliceRoutes = require('./routes/slice');
const products = require("./models/products");

// EJS shit
app.set('view engine', 'ejs')

//
app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))

// Connecting to mongoDB
mongoose.connect('mongodb://localhost:27017/sliceClothing', {})
    .then(data => {
        console.log('mongoose working')
    }).catch(err => {
        console.log('error')
        console.log(err)
    })


// Use routes
app.use('/', sliceRoutes)


app.listen(3000, () => {
    console.log('listening to port 3000')
})