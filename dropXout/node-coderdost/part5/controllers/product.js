const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const products = data.products;

exports.createProduct = (req, res) => {
  products.push(req.body);
  res.status(201).json(products);
};

exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((prod) => prod.id === id);
  res.status(200).json(product);
};
exports.replaceProduct = (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((prod) => prod.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(202).json(products);
};
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((prod) => prod.id === id);
  products.splice(productIndex, 1, {
    ...products[productIndex],
    ...req.body,
  });
  res.status(200).json(products);
};
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productInd = products.findIndex((prod) => prod.id === id);
  const deletedProduct = products.splice(productInd, 1);
  res.status(200).json(deletedProduct);
};
