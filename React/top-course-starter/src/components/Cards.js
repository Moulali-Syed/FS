import React from 'react';
import Card from './Card';
const Cards = ({ courses }) => {
  let allCourses = [];

  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };
  return (
    <div>
      {!courses ? (
        <div>
          <p>No Data Found</p>
        </div>
      ) : (
        getCourses().map((course) => <Card course={course} key={course.id} />)
      )}
    </div>
  );
};

export default Cards;
