const express = require('express');
const router = express.Router();

const slice = require('../controllers/slice')

router.route('/')
    .get(slice.index)


module.exports = router