import React, { useState } from 'react';
import './Tour.css';

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span onClick={readMoreHandler} className="read-more">
            {readMore ? 'show less' : 'Read More'}
          </span>
        </div>
      </div>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
};

export default Tour;
