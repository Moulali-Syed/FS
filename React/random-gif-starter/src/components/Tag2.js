import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag2 = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('');

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  const clickHandler = () => {
    fetchData();
  };

  const changeHandler = (e) => {
    setTag(e.target.value);
  };
  return (
    <div
      className="w-1/2 bg-blue-400  rounded-lg border border-black
     flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h3 className="mt-[15px] text-2xl underline uppercase font-bold">
        RANDOM {tag} GIF
      </h3>
      {loading ? <Spinner /> : <img src={gif} width={450} alt="random-gif" />}
      <input
        type="text"
        className="w-9/12 py-2 rounded text-lg mb-[3px] text-center"
        onChange={changeHandler}
      />
      <button
        className="bg-green-100 w-9/12 py-2 rounded text-lg mb-[20px]"
        onClick={clickHandler}
        value={tag}
      >
        GENERATE
      </button>
    </div>
  );
};

export default Tag2;
