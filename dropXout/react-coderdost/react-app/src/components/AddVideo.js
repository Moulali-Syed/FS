import React, { useContext, useEffect, useRef, useState } from 'react';
import './AddVideo.css';
import useVideoDispatch from '../hooks/VideoDispatch';

const initialState = {
  time: '1 month ago',
  channel: 'HappyChannel4',
  isVerified: true,
  title: '',
  views: '',
};
const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialState);
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();

  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: 'UPDATE', payload: video });
    } else {
      dispatch({ type: 'ADD', payload: video });
    }
    setVideo(initialState);
    input.current.focus();
  };

  const changeHandler = (e) => {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
    input.current.placeholder = '';
    input.current.focus();
    'type here'.split('').forEach((char, i) => {
      setTimeout(() => {
        input.current.placeholder = input.current.placeholder + char;
      }, 200 * i);
    });
  }, [editableVideo]);

  return (
    <form>
      <input
        type="text"
        placeholder="title"
        onChange={changeHandler}
        name="title"
        value={video.title}
        ref={input}
      />
      <input
        type="text"
        placeholder="views"
        onChange={changeHandler}
        name="views"
        value={video.views}
      />

      <div>
        <button onClick={handleSubmit}>
          {editableVideo ? 'Edit' : 'Add'} Video
        </button>
      </div>
    </form>
  );
};

export default AddVideo;
