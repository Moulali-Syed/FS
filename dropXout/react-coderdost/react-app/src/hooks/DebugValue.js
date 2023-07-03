import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const DebugValue = () => {
  const [firstName, setFirstName] = useLocalStorage('firstName', 'kyle');
  const [lastName, setLastName] = useState('Cook');
  return (
    <div>
      First:{' '}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      Last:{' '}
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );
};

export default DebugValue;
