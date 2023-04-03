import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
    // Please sync "TVShowBrowse-Out" to the project
  }, []);

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
          <div className="watchlist9">
            <div className="watchlistheader5">
              <div className="watchlist10">Watchlist</div>
              <img className="vector-icon5" alt="" src="/vector.svg" />
            </div>
            <div className="watchlistdisplay5">
              <MovieWatchListContainer />
              <BottomFooter />
              <MovieWatchListContainer />
              <BottomFooter />
              <BottomFooter />
            </div>
            <div className="watchlist11" onClick={onWatchlistText1Click}>
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
