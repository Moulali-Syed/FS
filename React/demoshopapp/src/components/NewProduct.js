import React from 'react';
import ProductForm from './ProductForm';

const NewProduct = (props) => {
  function saveProduct(product) {
    console.log(product);
    props.printProduct(product);
  }
  return (
    <div>
      <ProductForm saveProduct={saveProduct} />
    </div>
  );
};

export default NewProduct;
