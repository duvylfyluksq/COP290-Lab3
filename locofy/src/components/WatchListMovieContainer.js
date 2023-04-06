import React from 'react';
import './WatchListMovieContainer.css';
import { useState } from 'react';

const WatchListMovieContainer = ({
  title,
  image,
  rating,
  productId,
}) => {
  const [showBox, setShowImage] = useState(true);

  const handleDelete = () => {
    setShowImage(false);
  };

  return showBox && (
    <div className="watchlistdisplay-movie1">
      <div className="picture2">
        <img className="joker-icon3" alt="" src={image} />
      </div>
      <div className="right5">
        <div className="sublayout4">
          <div className="title9">{title}</div>
          <div className="rating8">
            <div className="xy104">{rating}/10</div>
            <img className="vector-icon22" alt="" src="/vector1.svg" />
          </div>
        </div>
        <img
          className="material-symbolsdelete-outlin-icon"
          alt=""
          src={productId}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default WatchListMovieContainer;

