import React from 'react';
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import WatchListMovieContainer from "../components/WatchListMovieContainer";
import Footer from "../components/Footer";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const watchlist = location.state.watchlist;
  const user = location.state.user;
  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedin");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    navigate("/moviebrowsein");
  }, [navigate]);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowsein");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresin");
  }, [navigate]);

  const onFluentcompose24FilledClick = useCallback(() => {
    navigate("/makepost");
  }, [navigate]);

  const onProfileMenuClick = useCallback(() => {
    navigate("/bobdylaninself")
  }, [navigate]);

  return (
    <div className="watchlist-inself-parent">
      <div className="watchlist-inself">
        <div className="body2">
          <div className="watchlistheader2">
            <div className="watchlist2">Watchlist</div>
            <img className="vector-icon2" alt="" src="/watchlist.svg" />
          </div>
          <div className="watchlistdisplay2">
          {watchlist.map((title, index) => {
                if (!!title.movie) {
                  return (
                    <WatchListMovieContainer
                      key={index}
                      user = {user}
                      movie={title.movie}
                    />
                  );
                } else {
                  return (
                    <Footer
                      key={index}
                      user ={user}
                      show={title.tvshow}
                    />
                  );
                }
              })}
          </div>
        </div>
        <NavbarContainer
          dimensions="/vector7.svg"
          dimensionsText="/fluentcompose24filled.svg"
          dimensionsId="/profilemenu1.svg"
          propBoxShadow="unset"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onFluentcompose24FilledClick={onFluentcompose24FilledClick}
          onProfileMenuClick={onProfileMenuClick}
          user = {user}
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
