import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1,
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/Books/Kids/BOTM/BOTYSF_Kids_BHP_Tile.jpg',
      title: 'Best Kids Book 2023',
      price: '1000',
    },
    {
      id: 2,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91pJQMkd5dL._AC_UL254_SR254,254_.jpg',
      title: 'Too Late',
      price: '300',
    },
    {
      id: 3,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91c9eorep5L._AC_UL127_SR127,127_.jpg',
      title: 'Fourth Wing',
      price: '400',
    },
    {
      id: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81c9SSbG3OL._AC_UL127_SR127,127_.jpg',
      title: 'Teach to Be Rich',
      price: '700',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
