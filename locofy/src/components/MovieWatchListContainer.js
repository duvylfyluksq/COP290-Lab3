import React from 'react';
import "./MovieWatchListContainer.css";

const MovieWatchListContainer = () => {
  return (
    <div className="watchlistdisplay-movie">
      <div className="picture">
        <img className="joker-icon1" alt="" src="/joker@2x.png" />
      </div>
      <div className="right2">
        <div className="sublayout2">
          <div className="title7">{`Eternal Sunshine Of The Spotless.. `}</div>
          <div className="rating6">
            <div className="xy102">x.y/10</div>
            <img className="vector-icon15" alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieWatchListContainer;
