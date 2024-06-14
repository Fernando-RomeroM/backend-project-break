const Product = require('../models/Product');

// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
    const { name, price, description, type, size } = req.body;
    
    const newProduct = new Product({
        name,
        price,
        description,
        type,
        size,
    });
    
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    createProduct,
};
