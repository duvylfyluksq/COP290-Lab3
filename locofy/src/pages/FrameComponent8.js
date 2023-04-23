import React from 'react';
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import MovieWatchListContainer from "../components/MovieWatchListContainer";
import BottomFooter from "../components/BottomFooter";
import ReviewContainer from "../components/ReviewContainer";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent8.css";

const FrameComponent8 = () => {
  const navigate = useNavigate();

  const onPictureIconClick = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqText1Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onPictureIcon1Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqText2Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onPictureIcon2Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqText3Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedout");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    navigate("/moviebrowseout");
  }, [navigate]);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowseout");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresout");
  }, [navigate]);

  const onNavbarRHSContainerClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  const onWatchlistText1Click = useCallback(() => {
    navigate("/watchlistout");
  }, [navigate]);

  const onPostsText1Click = useCallback(() => {
    navigate("/reviewsduvylfyluksqout");
  }, [navigate]);

  return (
    <div className="duvylfyluksq-out-parent">
      <div className="duvylfyluksq-out">
        <div className="body8">
          <UserProfile />
          <div className="watchlist3">
            <div className="watchlistheader3">
              <div className="watchlist4">Watchlist</div>
              <img className="vector-icon3" alt="" src="/vector.svg" />
            </div>
            <div className="watchlistdisplay3">
            <BottomFooter
            image="/joker@2x.png"
            rating="a.b"
            title="How I met your mother"
            season="Season 5"            
            />
            <MovieWatchListContainer 
            image="/joker@2x.png"
            rating="x.y"
            title="Eternal Sunshine Of The Spotless.. "
            />
            <BottomFooter
            image="/joker@2x.png"
            rating="a.b"
            title="How I met your mother"
            season="Season 5"            
            />
            </div>
            <div className="watchlist5" onClick={onWatchlistText1Click}>
              View Entire Watchlist
            </div>
          </div>
          <div className="recentposts4">
            <div className="recentposts5">Recent Posts</div>
            <div className="watchlistdisplay5">
              <ReviewContainer
                onPictureIconClick={onPictureIconClick}
                onDuvylfyluksqTextClick={onDuvylfyluksqText1Click}
              />
              <ReviewContainer
                onPictureIconClick={onPictureIcon1Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText2Click}
              />
              <ReviewContainer
                onPictureIconClick={onPictureIcon2Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText3Click}
              />
            </div>
            <div className="posts2" onClick={onPostsText1Click}>
              View All Posts
            </div>
          </div>
        </div>
        <MoviesContainer
          coordinates="/vector17.svg"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onNavbarRHSContainerClick={onNavbarRHSContainerClick}
        />
      </div>
    </div>
  );
};

export default FrameComponent8;
