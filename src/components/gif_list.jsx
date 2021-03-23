import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectGif}) => {
  return (
    <div className="gif-list">
      {gifs.map((gif) => <Gif id={gif} key={gif} selectGif={selectGif} />)}
    </div>
  );
};

export default GifList;