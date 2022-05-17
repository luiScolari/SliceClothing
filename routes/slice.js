const express = require('express');
const router = express.Router();

const slice = require('../controllers/slice')

router.route('/')
    .get(slice.index)

router.route('/products')
    .post(slice.storeProductRequest)

router.route('/products/:id')
    .get(slice.renderDetailsView)
    
module.exports = router