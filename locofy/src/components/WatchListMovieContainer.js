import React from 'react';
import './WatchListMovieContainer.css';
import { useState } from 'react';
import { UserApi } from '../api/UserApi';

const api = new UserApi();

const WatchListMovieContainer = ({
  movie,user
}) => {
  const [showBox, setShowImage] = useState(true);

  const handleDelete = () => {
    api.watchlistMovieRemoveUserIdPut(user.user_id, movie.movie_id.id, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('TV show removed from watchlist successfully.');
        user.watchlist_movies[movie.movie_id.id] = false;
        setShowImage(false);
      }
    });
  };

  return showBox && (
    <div className="watchlistdisplay-movie1">
      <div className="picture2">
        <img className="joker-icon3" alt="" src={movie.poster} />
      </div>
      <div className="right5">
        <div className="sublayout4">
          <div className="title9">{movie.title}</div>
          <div className="rating8">
            <div className="xy104">{movie.rating}/10</div>
            <img className="vector-icon22" alt="" src="/vector1.svg" />
          </div>
        </div>
        <img
          className="material-symbolsdelete-outlin-icon"
          alt=""
          src="/materialsymbolsdeleteoutline.svg"
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
};

export default WatchListMovieContainer;

