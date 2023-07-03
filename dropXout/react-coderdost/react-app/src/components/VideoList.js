import React, { useContext, useEffect } from 'react';
import Video from './Video';
import PlayButton from './PlayButton';
import useVideo from '../hooks/Videos';
import axios from 'axios';
import useVideoDispatch from '../hooks/VideoDispatch';

const VideoList = ({ editVideo }) => {
  // const videos = useContext(VideosContext);
  const videos = useVideo();
  const dispatch = useVideoDispatch();

  async function handleClick() {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data);
    dispatch({ type: 'LOAD', payload: response.data });
  }

  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div>
      {videos.map((video, index) => (
        <Video
          key={index}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.views}
          channel={video.channel}
          isVerified={video.isVerified}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log('Video is Playing', video.title)}
            onPause={() => console.log('Video is Paused', video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
};

export default VideoList;
