const express = require("express");
const app = express()

const sliceRoutes = require('./routes/slice')

app.get('/', (req, res) => {
    res.send('aa')
})

app.listen(3000, () => {
    console.log('listening to port 3000')
})