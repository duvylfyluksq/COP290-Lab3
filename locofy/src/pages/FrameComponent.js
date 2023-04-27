import React from 'react';
import { useCallback,useState } from "react";
import { useLocation } from "react-router-dom";
import MovieWatchListContainer from "../components/MovieWatchListContainer";
import BottomFooter from "../components/BottomFooter";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent.css";

const FrameComponent = () => {
  const location = useLocation();
  const host = location.state.host;
  const watchlist = location.state.watchlist;

  return (
    <div className="watchlist-inother-parent">
      <div className="watchlist-inother">
        <div className="body">
          <div className="watchlistheader">
            <div className="watchlist">Watchlist</div>
            <img className="vector-icon" alt="" src="/watchlist.svg" />
          </div>
          <div className="watchlistdisplay">
            {watchlist.map((title, index) => {
                  if (!!title.movie) {
                    return (
                      <MovieWatchListContainer
                        key={index}
                        movie={title.movie}
                      />
                    );
                  } else {
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
        <NavbarContainer
          propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          user={host}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
