import React from 'react';
import { useNavigate } from 'react-router-dom';

const Labs = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate('/about');
  }

  function backHandler() {
    navigate(-1);
  }
  return (
    <div>
      <div>Labs</div>
      <button onClick={clickHandler}>GoTo About Page</button>
      <button onClick={backHandler}>goBack</button>
    </div>
  );
};

export default Labs;
