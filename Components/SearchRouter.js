const searchRouter = require('express').Router();
const Products = require('../Model/ProductModel');

searchRouter.post('/', async (req, res) => {
    const { Category } = req.body;

    const listofproducts = await Products.find({ category:{$regex:`${Category}` , $options:"i"} });

    res.status(200).json({
        listofproducts
    })
})

module.exports = searchRouter;