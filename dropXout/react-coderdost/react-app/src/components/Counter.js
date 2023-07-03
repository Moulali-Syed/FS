import React, { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  let num = useRef(0);
  const incrementHandler = (e) => {
    e.stopPropagation();
    setCount((count) => count + 1);
    //   setCount(count + 1);
    num.current++;
    console.log(num);
  };

  const fibx = useCallback(function fibonacci(n) {
    if (n === 0) return 1;
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }, []);

  useMemo(() => fibx(count), [count, fibx]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Click</button>
      <p>{fibx(count)}</p>
    </>
  );
};

export default Counter;
