import React from 'react';
import "./Footer.css";

const Footer = ({ productId }) => {
  return (
    <div className="watchlistdisplay-tvshow1">
      <div className="picture3">
        <img className="joker-icon4" alt="" src="/joker@2x.png" />
      </div>
      <div className="right6">
        <div className="sublayout5">
          <div className="title10">How I Met Your Mother</div>
          <div className="season2">Season 5</div>
          <div className="rating9">
            <div className="xy105">x.y/10</div>
            <img className="vector-icon23" alt="" src="/vector2.svg" />
          </div>
        </div>
        <img
          className="material-symbolsdelete-outlin-icon1"
          alt=""
          src={productId}
        />
      </div>
    </div>
  );
};

export default Footer;
