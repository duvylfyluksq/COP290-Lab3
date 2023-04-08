import React from 'react';
import "./Footer.css";
import { useState } from 'react';

const Footer = ({ 
  title,
  image,
  season,
  rating,
  productId }) => {
  const [showBox, setShowImage] = useState(true);

  const handleDelete = () => {
    setShowImage(false);
  };
  return showBox && (
    <div className="watchlistdisplay-tvshow1">
      <div className="picture3">
        <img className="joker-icon4" alt="" src={image} />
      </div>
      <div className="right6">
        <div className="sublayout5">
          <div className="title10">{title}</div>
          <div className="season2">{season}</div>
          <div className="rating9">
            <div className="xy105">{rating}/10</div>
            <img className="vector-icon23" alt="" src="/vector2.svg" />
          </div>
        </div>
        <img
          className="material-symbolsdelete-outlin-icon1"
          alt=""
          src={productId}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Footer;
