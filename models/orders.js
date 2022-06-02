
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productRequestSchema = Schema({
    user_id: String,
    items: [
        {
            sku: String,
            price: Number,
            quantity: Number,
            feature: String,
            onsale: Boolean,
        }
    ],
});




module.exports = mongoose.model('Orders', productRequestSchema)