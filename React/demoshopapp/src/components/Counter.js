import React, { useState } from 'react';
import './Counter.css';
const Counter = () => {
  const [num, setNum] = useState(0);

  function incrementCount() {
    setNum((prevCount) => prevCount + 1);
  }
  function decrementCount() {
    setNum((prevCount) => prevCount - 1);
  }
  function resetCount() {
    setNum(0);
  }
  return (
    <>
      <div className="container">
        <h3>Increment and Decrement</h3>
        <div className="display">
          <button onClick={incrementCount}>+</button>
          <p>{num}</p>
          <button onClick={decrementCount}>-</button>
        </div>
        <button onClick={resetCount}>Reset</button>
      </div>
    </>
  );
};
export default Counter;
