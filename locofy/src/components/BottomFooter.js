import React from 'react';
import "./BottomFooter.css";

const BottomFooter = ({
  image,
  rating,
  title,
  season
}) => {
  return (
    <div className="watchlistdisplay-tvshow">
      <div className="picture1">
        <img className="joker-icon2" alt="" src={image} />
      </div>
      <div className="right3">
        <div className="sublayout3">
          <div className="title8">{title}</div>
          <div className="season1">{season}</div>
          <div className="rating7">
            <div className="xy103">{rating}/10</div>
            <img className="vector-icon16" alt="" src="/vector2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;

