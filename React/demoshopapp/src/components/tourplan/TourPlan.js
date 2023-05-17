import React, { useState } from 'react';
import Tours from './Tours';
import data from './data';
import './TourPlan.css';
const TourPlan = () => {
  const [tours, setTours] = useState(data);

  function removeTourHandler(tourId) {
    const newTours = tours.filter((tour) => tour.id !== tourId);
    setTours(newTours);
  }

  function refreshHandler() {
    setTours(data);
  }

  if (tours.length === 0) {
    return (
      <div className="container">
        <h2>No Tours Left</h2>
        <button onClick={refreshHandler}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="box">
      <Tours tours={tours} removeTour={removeTourHandler} />
    </div>
  );
};

export default TourPlan;
