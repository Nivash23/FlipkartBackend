const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    ProductCategory: String,
    Description:String,
    src:String,
})

const Products = mongoose.model('ProductsCollection', ProductSchema, 'ProductsCollections');

module.exports = Products;