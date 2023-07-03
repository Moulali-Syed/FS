import React from 'react';

const List = ({ items, layout }) => {
  let type = layout === 'numbered' ? 'number' : layout === 'alpha' ? 'A' : 'I';
  return (
    <div>
      <ol type={`${type}`}>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.fName}</h3>
            <h4>{item.city}</h4>
            <p>{item.speciality}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
