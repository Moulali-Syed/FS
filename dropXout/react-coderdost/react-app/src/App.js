import './App.css';
import { useContext, useReducer, useState, Profiler } from 'react';
import videoDB from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState('darkMode');

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...videos,
          {
            id: videos.length + 1,
            ...action.payload,
          },
        ];
      case 'LOAD':
        return action.payload;
      case 'DELETE':
        return videos.filter((vid) => vid.id !== action.payload);
      case 'UPDATE':
        const index = videos.findIndex((vid) => vid.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  // const [videos, setVideos] = useState(videoDB);
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  function editVideo(id) {
    setEditableVideo(videos.find((vid) => vid.id === id));
  }

  const themeContext = useContext(ThemeContext);

  const onRender = ({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  }) => {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    );
  };

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <VideosContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>
            <button
              onClick={() =>
                setMode((old) =>
                  old === 'darkMode' ? 'lightMode' : 'darkMode'
                )
              }
            >
              ChangeTheme
            </button>
            <div
              className={`App ${mode}`}
              onClick={() => console.log('parent triggered')}
            >
              <Profiler id="AddVideo" onRender={onRender}>
                <AddVideo editableVideo={editableVideo} />
              </Profiler>
              <VideoList editVideo={editVideo} />
            </div>
            {/* <Counter /> */}
          </VideoDispatchContext.Provider>
        </VideosContext.Provider>
      </ThemeContext.Provider>
      <ParentComponent />
    </>
  );
}

export default App;
