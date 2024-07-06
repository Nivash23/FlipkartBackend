const AdminRouter = require('express').Router();

const Admin = require('../Model/AdminModel');
const Product = require('../Model/ProductModel');

AdminRouter.post('/', async (req, res) => {
    const { acesscode } = req.body;

    const admin = await Admin.findOne({ Acesscode: acesscode })
    

    if (admin)
    {
        res.status(200).json({
            message:"admin login sucess.."
        })
    }
    else {
        res.status(404).json({
            message:"admin does not exists.. "
        })
    }
})

AdminRouter.post('/productentry/', async (req, res) => {
    const { name, price, category, ProductCategory, Description, src } = req.body;

    const product = new Product({
        name,
        price,
        category,
        ProductCategory,
        Description,
        src
    })
    await product.save();

    res.status(200).json({
        message:"Product sucessfully pushed..."
    })
})

module.exports = AdminRouter;