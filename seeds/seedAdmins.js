const mongoose = require('mongoose')
const Admin = require('../models/admins')

mongoose.connect('mongodb://localhost:27017/sliceClothing', {})
    .then(data => {
        console.log('mongoose working')
    }).catch(err => {
        console.log('error')
        console.log(err)
    })


const luis = {
    username: 'luis',
    password: 'cola'
}

const seedDb = async () => {
    await Admin.deleteMany({})
    const admin = new Admin(luis)
    admin.save()
}

seedDb()