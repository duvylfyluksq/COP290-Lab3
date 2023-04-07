import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import MovieWatchListContainer from "../components/MovieWatchListContainer";
import BottomFooter from "../components/BottomFooter";
import ReviewForm from "../components/ReviewForm";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent6.css";

const FrameComponent6 = () => {
  const navigate = useNavigate();

  const onPictureIconClick = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onDuvylfyluksqText1Click = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onPictureIcon1Click = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onDuvylfyluksqText2Click = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onPictureIcon2Click = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onDuvylfyluksqText3Click = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedin");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    // Please sync "MovieBrowse-In" to the project
  }, []);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowsein");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    // Please sync "Genres-In" to the project
  }, []);

  const onFluentcompose24FilledClick = useCallback(() => {
    navigate("/makepost");
  }, [navigate]);

  const onProfileMenuClick = useCallback(() => {
    // Please sync "UserPage/InSelf" to the project
  }, []);

  const onWatchlistText1Click = useCallback(() => {
    navigate("/watchlistinother");
  }, [navigate]);

  const onPostsText1Click = useCallback(() => {
    navigate("/reviewsduvylfyluksqin");
  }, [navigate]);

  return (
    <div className="duvylfyluksq-inother-parent">
      <div className="duvylfyluksq-inother">
        <div className="body6">
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
          <div className="recentposts">
            <div className="recentposts1">Recent Posts</div>
            <div className="watchlistdisplay3">
              <ReviewForm
                picture="/picture@2x.png"
                duvylfyluksq="duvylfyluksq"
                bodyCursor="pointer"
                bodyFrameCursor="pointer"
                onPictureIconClick={onPictureIconClick}
                onDuvylfyluksqTextClick={onDuvylfyluksqText1Click}
              />
              <ReviewForm
                picture="/picture@2x.png"
                duvylfyluksq="duvylfyluksq"
                bodyCursor="pointer"
                bodyFrameCursor="pointer"
                onPictureIconClick={onPictureIcon1Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText2Click}
              />
              <ReviewForm
                picture="/picture@2x.png"
                duvylfyluksq="duvylfyluksq"
                bodyCursor="pointer"
                bodyFrameCursor="pointer"
                onPictureIconClick={onPictureIcon2Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText3Click}
              />
            </div>
            <div className="posts" onClick={onPostsText1Click}>
              View All Posts
            </div>
          </div>
        </div>
        <NavbarContainer
          dimensions="/vector15.svg"
          dimensionsText="/fluentcompose24filled1.svg"
          dimensionsId="/profilemenu4.svg"
          propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onFluentcompose24FilledClick={onFluentcompose24FilledClick}
          onProfileMenuClick={onProfileMenuClick}
        />
      </div>
    </div>
  );
};

export default FrameComponent6;
