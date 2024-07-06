const express = require('express');
const app = express();
const cors = require('cors');
const ProductRouter = require('./Components/ProductsRouter');
const SearchRouter=require('./Components/SearchRouter');
const ReCategoryRouter = require('./Components/RecentCategory');
const AdminRouter = require('./Components/Adminlogin');

app.use(express.json());
app.use(cors());

app.use('/api/getProducts/', ProductRouter);

app.use('/api/search/', SearchRouter);

app.use('/api/category1/', ReCategoryRouter);

app.use('/api/Admin/', AdminRouter);


module.exports = app;

