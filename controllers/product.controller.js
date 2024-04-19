const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
  try {
    const response = await Product.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.findById(id);
    if(!response) {
        res.status(404).json({ message: 'Product not found' });
    } else {
        res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const response = await Product.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Product.findByIdAndUpdate(id, req.body);
    if (!request) {
      return res.status(404).json({ message: "Product not found" });
    }
    const response = await Product.findById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.findByIdAndDelete(id, req.body);
    if (!response) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
