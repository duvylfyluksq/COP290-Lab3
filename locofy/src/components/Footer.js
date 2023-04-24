import React from 'react';
import "./Footer.css";
import { useState } from 'react';
import { UserApi } from '../api/UserApi';

const api = new UserApi();

const Footer = ({ 
  show,user}) => {
  const [showBox, setShowImage] = useState(true);

  const handleDelete = () => {
    api.watchlistTvshowRemoveUserIdPut(user.user_id, show.show_id.id, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('TV show removed from watchlist successfully.');
        setShowImage(false);
      }
    });
  };

  return showBox && (
    <div className="watchlistdisplay-tvshow1">
      <div className="picture3">
        <img className="joker-icon4" alt="" src={show.poster} />
      </div>
      <div className="right6">
        <div className="sublayout5">
          <div className="title10">{show.title}</div>
          <div className="season2">Season {show.season}</div>
          <div className="rating9">
            <div className="xy105">{show.rating}/10</div>
            <img className="vector-icon23" alt="" src="/vector2.svg" />
          </div>
        </div>
        <img
          className="material-symbolsdelete-outlin-icon1"
          alt=""
          src="/materialsymbolsdeleteoutline.svg"
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
};

export default Footer;
