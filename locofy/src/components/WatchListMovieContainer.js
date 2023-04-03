import React from 'react';
import "./WatchListMovieContainer.css";

const WatchListMovieContainer = ({ productId }) => {
  return (
    <div className="watchlistdisplay-movie1">
      <div className="picture2">
        <img className="joker-icon3" alt="" src="/joker@2x.png" />
      </div>
      <div className="right5">
        <div className="sublayout4">
          <div className="title9">{`Eternal Sunshine Of The Spotless.. `}</div>
          <div className="rating8">
            <div className="xy104">x.y/10</div>
            <img className="vector-icon22" alt="" src="/vector1.svg" />
          </div>
        </div>
        <img
          className="material-symbolsdelete-outlin-icon"
          alt=""
          src={productId}
        />
      </div>
    </div>
  );
};

export default WatchListMovieContainer;
