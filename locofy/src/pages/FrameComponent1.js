import React from 'react';
import { useCallback } from "react";
import { useLocation } from "react-router-dom";

import "./FrameComponent1.css";

import MovieWatchListContainer from "../components/MovieWatchListContainer";
import BottomFooter from "../components/BottomFooter";
import MoviesContainer from "../components/MoviesContainer";

const FrameComponent1 = () => {
  const location = useLocation();
  const watchlist = location.state.watchlist;

  return (
    <div className="watchlist-out-parent">
      <div className="watchlist-out">
        <div className="body1">
          <div className="watchlistheader1">
            <div className="watchlist1">Watchlist</div>
            <img className="vector-icon1" alt="" src="/watchlist.svg" />
          </div>
          <div className="watchlistdisplay1">
            {watchlist.map((title, index) => {
              if (!!title.movie) {
                return (
                  <MovieWatchListContainer
                    key={index}
                    movie={title.movie}
                  />
                );
              } 
              else {
                return (
                  <BottomFooter
                    key={index}
                    show={title.tvshow}
                  />
                );
              }
            })}
          </div>
        </div>

        <MoviesContainer />

      </div>
    </div>
  );
};

export default FrameComponent1;
