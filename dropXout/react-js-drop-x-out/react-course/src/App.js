import { useState } from 'react';
import './App.css';
import BookList from './BookList';
import Data from './Data';

function App() {
  const [state, setState] = useState(0);

  const clickHandler = () => {
    setState((prev) => prev + 1);
  };
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={clickHandler}>Click</button>
      <Data />
    </div>
  );
}

export default App;
