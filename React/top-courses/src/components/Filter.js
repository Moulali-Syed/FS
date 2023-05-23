import React from 'react';
import './Filter.css';
const Filter = ({ filterData, category, setCategory }) => {
  let c = '';
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div id="filter-container">
      {filterData.map((item) => {
        return (
          <button
            style={{
              border: `${category === item.title ? '2px solid red' : ''}`,
            }}
            key={item.id}
            onClick={() => filterHandler(item.title)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
