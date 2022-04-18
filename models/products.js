const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
    name: String,
    description: String,
    price: Number,
    onsale: Boolean,
    imgSrc: String
})

module.exports = mongoose.model('Product', productSchema)