const express = require("express");
const router = express.Router();
const { getProducts, getProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js')

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:', deleteProduct);

module.exports = router;