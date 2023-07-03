import React from 'react';

const Book = ({ image, title, price }) => {
  return (
    <div className="book">
      <img src={image} alt="kid" />
      <h1>{title}</h1>
      <p>${price}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default Book;
