const express = require('express');
const productController = require('../controllers/product');

const productRouter = express.Router();
productRouter
  .post('/products', productController.createProduct)
  .get('/products', productController.getAllProducts)
  .get('/products/:id', productController.getProduct)
  .put('/products/:id', productController.replaceProduct)
  .patch('/products/:id', productController.updateProduct)
  .delete('/products/:id', productController.deleteProduct);

module.exports = productRouter;
