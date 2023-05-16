import React, { useState } from 'react';
import ProductDate from './ProductDate';

const ProductItem = (props) => {
  let title = props.item.itemName;
  const [state, setState] = useState(title);
  function clickHandler() {
    console.log('Added to Cart');
    setState('PopCorn');
  }
  return (
    <div>
      <ProductDate date={props.item.date} />
      <h2>{state}</h2>
      <button onClick={clickHandler}>AddToCart</button>
    </div>
  );
};

export default ProductItem;
