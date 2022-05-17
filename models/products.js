const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
    name: String,
    description: String,
    price: Number,
    onsale: Boolean,
    imgSrc: String,
    color: {
        type: String,
        enum: ['red', 'blue', 'green']
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    },
    qtyInStock: Number,
    requests: [{type: Schema.Types.ObjectId, ref: 'Request'}]
});



module.exports = mongoose.model('Product', productSchema)
