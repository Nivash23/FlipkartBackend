const ReCategoryRouter = require('express').Router();

const Products = require('../Model/ProductModel');

ReCategoryRouter.post('/', async (req, res) => {
    const { Category1 } = req.body;

    const productslist = await Products.find({ category: { $regex: `${Category1}`, $options: "i" } })
    

    res.status(200).json({
        productslist
    })
})

module.exports = ReCategoryRouter;