const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const products = data.products;

//Create  POST /products   - CRUD
app.post('/products', (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
});

//Read GET  /products
app.get('/products', (req, res) => {
  res.json(data);
});

app.get('/products/:id', (req, res) => {
  const id = +req.params.id;
  const product = products.find((prod) => prod.id === id);
  res.json(product);
});

//Update PUT  /products/:id
app.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productInd = products.findIndex((prod) => prod.id === id);
  products.splice(productInd, 1, { ...req.body, id: id });
  res.status(201).json(products);
});

//Update PATCH  /products/:id
app.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productInd = products.findIndex((prod) => prod.id === id);
  const product = products[productInd];
  products.splice(productInd, 1, { ...product, ...req.body });
  res.status(201).json(products);
});

app.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productInd = products.findIndex((prod) => prod.id === id);
  const deletedProduct = products.splice(productInd, 1);
  res.status(201).json(deletedProduct);
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
