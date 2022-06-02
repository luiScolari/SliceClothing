const Admin = require('../models/admins');
const Product = require('../models/products');
const Order = require('../models/orders');

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
    if (req.session.admin_id) {
        const newProduct = await new Product(req.body)
        newProduct.save()
        res.redirect('/admin')
    } else {
        res.send('not here')
    }
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
    res.send(req.body)
}



// <!-- <div class="requests">
// <% for (let request of requests) { %>
//     <div class="request">
//         <span>
//             <%= request.qty %>
//                 <%= request.product[0].name %>
//         </span>
//         <span>Size <%= request.size %></span> <span>Avaliable <%= request.product[0].size %></span>
//     </div>
//     <% } %>
// </div> -->