const Products = require("../models/products")

module.exports.index = async (req, res) => {
    const products = await Products.find({})
    res.render('slice/index', { products })
}

module.exports.renderNewForm = async (req, res) => {
    res.render('slice/new')
}

module.exports.createNewProduct = async (req, res) => {
    console.log(req.body.product)
    const newProducts = new Products(req.body.product)
    console.log(newProducts)
}

module.exports.renderDetailsView = async (req, res) => {
    const { id } = req.params
    const product = await Products.findById(id)
    res.render('slice/details', { product })
}