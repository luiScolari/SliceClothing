const express = require("express");
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');

// Require routes
const sliceRoutes = require('./routes/slice');
const adminRoutes = require('./routes/admin');

// Require models
const products = require("./models/products");

// Set the session options
const sessionOptions = {
    secret: 'a stupid secret',
    resave: false, 
    saveUninitialized: false
}

app.use(session(sessionOptions))

// Set the view engine to ejs
app.set('view engine', 'ejs')

// Set the view engine to ejsMate
app.engine('ejs', ejsMate)

// Join the url where the code is run, basically you just need to write 'slice/index', 
// instead of './views/slice/index'
app.set('views', path.join(__dirname, 'views'));

// Use the public folder as static styleSheet, code that run in the frontend
app.use(express.static(path.join(__dirname, '/public')))

// Use to can get the data from 'req.body', idk exactly why, read the docs
app.use(express.urlencoded({ extended: true }))

// You can use methods like 'patch' 'put' 'delete'
app.use(methodOverride('_method'))

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
app.use('/admin', adminRoutes) 




app.listen(3000, () => {
    console.log('listening to port 3000')
})