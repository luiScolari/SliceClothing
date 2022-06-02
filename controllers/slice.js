const Product = require("../models/products")
const Order = require('../models/orders')

module.exports.index = async (req, res) => {
    const products = await Product.find({})
    res.render('slice/index', { products })
}


// POST when a costumer choose a product and put in the cart
module.exports.storeProductRequest = async (req, res) => {
    const product = await Product.findOne({
        skus:
        {
            $elemMatch:
                { "size": req.body.items.size }
        }
    },
        { "skus.$": 1 })

    console.log(product.skus[0].sku)
    const order = await new Order({
        items: [{
            sku: product.skus[0].sku,
            price: product.skus[0].price,
            quantity: req.body.qty,
            feature: product.skus[0].feature,
            onsale: false
        }
        ]
    })
    console.log(order)
    // req.session.user_id
    console.log(req.body)
    // const order = await req.body
    res.redirect('/')
    // https://www.youtube.com/watch?v=08oWQbaSoEE
    // https://www.youtube.com/watch?v=1fAUUIx-NLs
}

module.exports.renderDetailsView = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('slice/details', { product })
}