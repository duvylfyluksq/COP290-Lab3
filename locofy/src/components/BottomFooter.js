import React from 'react';
import "./BottomFooter.css";

const BottomFooter = ({
  show
}) => {
  return (
    <div className="watchlistdisplay-tvshow">
      <div className="picture1">
        <img className="joker-icon2" alt="" src={show.poster} />
      </div>
      <div className="right3">
        <div className="sublayout3">
          <div className="title8">{show.title}</div>
          <div className="season1">Season {show.season}</div>
          <div className="rating7">
            <div className="xy103">{show.rating}/10</div>
            <img className="vector-icon16" alt="" src="/vector2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;

