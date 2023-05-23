import React from 'react';
import Card from './Card';
import './Cards.css';

const Cards = ({ courses, category }) => {
  const allCourses = [];
  const getCourses = () => {
    if (category === 'All') {
      Object.values(courses).forEach((c) =>
        c.forEach((cou) => allCourses.push(cou))
      );
      return allCourses;
    } else {
      return courses[category];
    }
  };

  console.log(allCourses);
  return (
    <div className="card-container">
      {getCourses().map((course) => (
        <Card course={course} key={course.id} />
      ))}
    </div>
  );
};

export default Cards;
