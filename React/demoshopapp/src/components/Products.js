import React from 'react';
import ProductItem from './ProductItem';

const Products = (props) => {
  const items = props.items;
  return (
    <>
      {items.map((item) => (
        <ProductItem item={item} />
      ))}
    </>
  );
};

export default Products;
