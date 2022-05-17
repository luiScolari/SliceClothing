const Product = require("../models/products")
const Request = require('../models/productsRequest')

module.exports.index = async (req, res) => {
    const products = await Product.find({})
    res.render('slice/index', { products })
}


// POST when a costumer choose a product and put in the cart
module.exports.storeProductRequest = async (req, res) => {
    const { id } = req.body
    const product = await Product.findById(id)
    const request = await new Request(req.body)
    request.product.push(product._id)
    product.requests.push(request)
    product.save()
    request.save()
    res.redirect('/')
}

module.exports.renderDetailsView = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('slice/details', { product })
}