const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
    name: String,
    description: String,
    skus: [
        {
            sku: String,
            price: Number,
            quantity: Number,
            size: {
                type: String,
                enum: ['S', 'M', 'L']
            }
        }
    ],
    imgSrc: String,
});

// Idk what to do at the moment, i need to create a 'product' and separate this from 
// the qty of specific colors/sizes and create a new form on the dashboard to add 
// a certain qty of products of that product
// This video help me
// https://www.youtube.com/watch?v=XGV1FstO6B0&list=PLN8GsERLAKgLhbmt6hgWT1hTTHkbcNJ5E

module.exports = mongoose.model('Product', productSchema)
