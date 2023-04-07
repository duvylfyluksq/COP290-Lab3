import React from 'react';
import "./MovieWatchListContainer.css";

const MovieWatchListContainer = ({
  image,
  rating,
  title
}) => {
  return (
    <div className="watchlistdisplay-movie">
      <div className="picture">
        <img className="joker-icon1" alt="" src={image} />
      </div>
      <div className="right2">
        <div className="sublayout2">
          <div className="title7">{title}</div>
          <div className="rating6">
            <div className="xy102">{rating}/10</div>
            <img className="vector-icon15" alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieWatchListContainer;

