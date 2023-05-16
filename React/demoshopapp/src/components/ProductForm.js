import React, { useState } from 'react';

const ProductForm = (props) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  function titleChangeHandler(event) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
    console.log(event.target.value);
  }

  //   const [fullProductInput, setFullProductInput] = useState({
  //     title: '',
  //     date: '',
  //   });
  //   function titleChangeHandler(event) {
  //     let obj = { ...fullProductInput, title: event.target.value };
  //     setFullProductInput(obj);
  //     console.log(fullProductInput);
  //   }
  //   function dateChangeHandler(event) {
  //     let obj = { ...fullProductInput, date: event.target.value };
  //     setFullProductInput(obj);
  //     console.log(fullProductInput);
  //   }
  function submitHandler(event) {
    event.preventDefault();
    const productData = {
      title,
      date,
    };
    console.log(productData);
    props.saveProduct(productData);
    setTitle('');
    setDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={titleChangeHandler}
          value={title}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          min="2023-01-01"
          max="2023-12-12"
          onChange={dateChangeHandler}
          value={date}
        />
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default ProductForm;
