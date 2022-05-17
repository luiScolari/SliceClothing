const express = require('express');
const router = express.Router();

const admin = require('../controllers/admin')

router.route('/')
    .get(admin.renderAdminLogin)
    .post(admin.loginAdmin)

router.route('/products')
    .post(admin.insertNewProduct)

router.route('/products/:id')
    .get(admin.renderEditProductForm)
    .put(admin.editProduct)
module.exports = router