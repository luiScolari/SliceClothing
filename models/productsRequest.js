
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productRequestSchema = Schema({
    color: {
        type: String,
        enum: ['red', 'blue', 'green']
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    },
    qty: Number,
    product: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});




module.exports = mongoose.model('Request', productRequestSchema)