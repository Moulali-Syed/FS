import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate('/labs');
  }
  return (
    <div>
      <div>Support</div>
      <button onClick={clickHandler}>goTo Labs Page</button>
    </div>
  );
};

export default Support;
