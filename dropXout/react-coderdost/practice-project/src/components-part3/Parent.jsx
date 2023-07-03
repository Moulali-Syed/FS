import React from 'react';
import List from './List';

const Parent = () => {
  const items = [
    {
      id: 1,
      fName: 'Apple',
      city: 'Shimla',
      speciality: 'Sweet and Attractive color',
    },
    {
      id: 1,
      fName: 'Banana',
      city: 'Japan',
      speciality: 'Healthy Fruit',
    },
    {
      id: 1,
      fName: 'Apple',
      city: 'Shimla',
      speciality: 'Sweet and Attractive color',
    },
  ];
  return (
    <div>
      <h1>A List rendered based on props</h1>
      <List items={items} layout="numbered" />
      <List items={items} layout="alpha" />
      <List items={items} layout="bullet" />
    </div>
  );
};

export default Parent;
