const ProductRouter = require('express').Router();
const Products = require('../Model/ProductModel');

ProductRouter.get('/', async (req, res) => {
    const product = await Products.find();
    res.status(200).send(product)
})

module.exports = ProductRouter;