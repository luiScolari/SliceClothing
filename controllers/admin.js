const Admin = require('../models/admins');
const Product = require('../models/products');
const Order = require('../models/orders');
const { findById } = require('../models/products');

module.exports.renderAdminLogin = async (req, res) => {
    if (!req.session.admin_id) {
        res.render('admin/login')
    } else {
        const products = await Product.find({})
        // const requests = await Request.find({}).populate('product')
        // console.log(requests[0].product)
        res.render('admin/dashboard', { products })
    }
}

module.exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body
    const findedAdmin = await Admin.findOne({ username: username })
    if (username === findedAdmin.username && password === findedAdmin.password) {
        req.session.admin_id = findedAdmin._id
        const products = await Product.find({})
        // const requests = await Request.find({}).populate('product')
        // console.log(requests[0].product)
        res.render('admin/dashboard', { products })
    } else {
        res.send('admin/login')
    }
}

module.exports.insertNewProduct = async (req, res) => {
    const newProduct = await new Product(req.body)
    console.log(newProduct)
    res.redirect('/admin')

}

module.exports.renderEditProductForm = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    if (req.session.admin_id) {
        res.render('admin/editProducts', { product })
    } else {
        res.render('admin/login')
    }
}

module.exports.editProduct = async (req, res) => {
    console.log(req.body)
    res.redirect('/admin')
}


module.exports.appendSku = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    console.log(product)
    for (let sku of product.skus) {
        if (sku.size === req.body.size) {
            sku.quantity += req.body.quantity
            sku.price = req.body.price
            console.log(sku)
        }
    }
    // await product.save()
    res.redirect(`/admin/products/${id}`)
}
