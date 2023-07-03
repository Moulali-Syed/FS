import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const inputRef = useRef(null);

  const clickHandler = () => {
    inputRef.current.focus();
  };

  const popHandler = () => {
    inputRef.current.showPopUp();
  };
  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={clickHandler}>Click</button>
      <button onClick={popHandler}>showPopUP</button>
    </div>
  );
};

export default ParentComponent;
