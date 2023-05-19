import React, { useState } from 'react';
import Card from './Card';
const Cards = ({ courses, category }) => {
  let allCourses = [];
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === 'All') {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <div>
          <p>No Data Found</p>
        </div>
      ) : (
        getCourses().map((course) => (
          <Card
            course={course}
            key={course.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      )}
    </div>
  );
};

export default Cards;
