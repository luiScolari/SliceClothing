const mongoose = require('mongoose')
const Product = require('../models/products')

mongoose.connect('mongodb://localhost:27017/sliceClothing', {})
    .then(data => {
        console.log('mongoose working')
    }).catch(err => {
        console.log('error')
        console.log(err)
    })

const seedProducts = async () => {
    await Product.deleteMany({})
        const product = new Product({
            name: 'Bomber Jacket',
            description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interest',
            skus: [
                {
                    sku: 'BJM',
                    price: 200,
                    quantity: 20,
                    size: 'M'
                },
                {
                    sku: 'BJL',
                    price: 150,
                    quantity: 25,
                    size: 'L'
                }
            ],
            imgSrc: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        })
        product.save()

}

seedProducts()