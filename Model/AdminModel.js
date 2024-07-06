const mongoose = require('mongoose');

const AdminSchema =new mongoose.Schema({
    name: String,
    Acesscode:String
})

const Admin = mongoose.model('AdminRegistration', AdminSchema, 'AdminRegistration');

module.exports = Admin;