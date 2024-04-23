const Product = require('../models/productModel');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find(undefined, undefined, undefined);
        res.status(200).json(products);
    } catch (e) {
        res.status(500);
        throw new Error(e.message);
    }
}

const createProduct = async (req, res) => {
    try {
        const product = new Product({
            title: req.body.title,
        });
        product.save().then(data => {
            res.status(201).json(data);
        }).catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            });
        })
    } catch (e) {
        res.status(500);
        throw new Error(e.message);
    }
}

module.exports = {
    createProduct,
    getProducts
};