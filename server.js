const express = require("express");
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')

// Require routes
const sliceRoutes = require('./routes/slice')

// EJS shit
app.set('view engine', 'ejs')

//
app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))


// Use routes
app.use('/', sliceRoutes)



app.listen(3000, () => {
    console.log('listening to port 3000')
})