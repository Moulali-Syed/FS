import React, { useState } from 'react';
import datas from './datas.json';

const Data = () => {
  const [nData, setnData] = useState(datas);

  const handleClick = () => {
    setnData([]);
  };

  const handleIndividual = (id) => {
    const filteredData = nData.filter((i) => i.id !== id);
    setnData(filteredData);
  };

  const handleUpdate = (id) => {
    setnData(
      nData.map((item) => {
        if (item.id === id) {
          return { ...item, name: 'Apple' };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <ul>
        {nData.map((d) => (
          <li key={d.id}>
            {d.name} <br />{' '}
            <button onClick={() => handleIndividual(d.id)}>Remove</button>
            <button onClick={() => handleUpdate(d.id)}>Update</button>
          </li>
        ))}
      </ul>

      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default Data;
