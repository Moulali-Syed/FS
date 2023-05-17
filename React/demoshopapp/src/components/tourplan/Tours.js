import React from 'react';
import Tour from './Tour';
import './Tours.css';

const Tours = (props) => {
  const tours = props.tours;
  return (
    <div className="tours-cont">
      <div className="heading">
        <h2>Plan With Love</h2>
      </div>
      <div className="tour-cont">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={props.removeTour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
