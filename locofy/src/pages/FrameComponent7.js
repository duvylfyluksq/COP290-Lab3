import React from "react";
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BobDylanContainer from "../components/BobDylanContainer";
import WatchListMovieContainer from "../components/WatchListMovieContainer";
import Footer from "../components/Footer";
import ReviewForm from "../components/ReviewForm";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const onWatchlistText1Click = useCallback(() => {
    navigate("/watchlistinself");
  }, [navigate]);

  const onPostsText1Click = useCallback(() => {
    navigate("/reviewsbobdylanin");
  }, [navigate]);

  return (
    <div className="bobdylan-inself-parent">
      <div className="bobdylan-inself">
        <div className="body7">
          <BobDylanContainer user = {user}/>
          <div className="watchlist6">
            <div className="watchlistheader4">
              <div className="watchlist7">Watchlist</div>
              <img className="vector-icon4" alt="" src="/vector.svg" />
            </div>
            <div className="watchlistdisplay4">
            <WatchListMovieContainer
              image="/joker@2x.png"
              rating="x.y"
              title="Eternal Sunshine Of The Sjloawidhwoadqoih"
              productId="/materialsymbolsdeleteoutline.svg"
            />
            <Footer 
              image="/joker@2x.png"
              rating="a.b"
              title="How I Met Your Mother"
              season="Season 5"
              productId="/materialsymbolsdeleteoutline.svg" />
            <WatchListMovieContainer
              image="/joker@2x.png"
              rating="x.y"
              title="Eternal Sunshine Of The Spotless.. "
              productId="/materialsymbolsdeleteoutline.svg"
            />
            <Footer 
              image="/joker@2x.png"
              rating="a.b"
              title="How I Met Your Mother"
              season="Season 5"
              productId="/materialsymbolsdeleteoutline.svg" />
            <Footer 
              image="/joker@2x.png"
              rating="a.b"
              title="How I Met Your Mother"
              season="Season 5"
              productId="/materialsymbolsdeleteoutline.svg" />
            </div>
            <div className="watchlist8" onClick={onWatchlistText1Click}>
              View Entire Watchlist
            </div>
          </div>
          <div className="recentposts2">
            <div className="recentposts3">Recent Posts</div>
            <div className="watchlistdisplay4">
              <ReviewForm
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="unset"
                bodyFrameCursor="unset"
              />
              <ReviewForm
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="unset"
                bodyFrameCursor="unset"
              />
              <ReviewForm
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="unset"
                bodyFrameCursor="unset"
              />
            </div>
            <div className="posts1" onClick={onPostsText1Click}>
              View All Posts
            </div>
          </div>
        </div>
        <NavbarContainer
          dimensions="/vector16.svg"
          dimensionsText="/fluentcompose24filled1.svg"
          dimensionsId="/profilemenu5.svg"
          propBoxShadow="unset"
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

export default FrameComponent7;
