import React, { useContext, useEffect } from 'react';
import './Video.css';
import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideoDispatch';

const Video = ({
  id,
  title,
  channel,
  views,
  time,
  isVerified,
  children,
  editVideo,
}) => {
  const theme = useContext(ThemeContext);

  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('video playing ', id);
  //   }, 1000);

  //   //clean up function
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [id]);

  return (
    <>
      <div className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: 'DELETE', payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="little bird"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {isVerified && '✅'}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Video;
