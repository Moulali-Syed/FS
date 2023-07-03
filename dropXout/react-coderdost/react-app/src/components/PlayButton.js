import React, { useContext, useState } from 'react';
import './PlayButton.css';
import ThemeContext from '../context/ThemeContext';

const PlayButton = ({ onPlay, onPause, children }) => {
  const theme = useContext(ThemeContext);

  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    // console.log(e);//Synthetic Event
    e.stopPropagation();

    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!playing);
  }
  return (
    <button className={`${theme}`} onClick={handleClick}>
      {children} - {playing ? '⏸️' : '▶️'}
    </button>
  );
};

export default PlayButton;
