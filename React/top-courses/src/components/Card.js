import React from 'react';
import './Card.css';
const Card = ({ course }) => {
  return (
    <div className="card">
      <div>
        <img src={course.image.url} alt={course.image.alt} />
      </div>
      <div>
        <h4>{course.title}</h4>
      </div>
      <div>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
