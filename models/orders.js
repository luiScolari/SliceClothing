
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productRequestSchema = Schema({
    user_id: String,
    items: [
        {
            sku: String,
            price: Number,
            quantity: Number,
        }
    ],
});




module.exports = mongoose.model('Orders', productRequestSchema)