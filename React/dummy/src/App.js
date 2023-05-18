import './App.css';
import { useEffect, useState } from 'react';

function App() {
  function getWindowDimension() {
    const { innerHeight: height, innerWidth: width } = window;
    return {
      height,
      width,
    };
  }
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());

  useEffect(() => {
    function handleResize() {
      setWindowDimension(getWindowDimension());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        value={`${windowDimension.width} ${windowDimension.height}`}
        onChange={() => console.log('dimension changed')}
      />
    </div>
  );
}

export default App;
