import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WatchListMovieContainer from "../components/WatchListMovieContainer";
import Footer from "../components/Footer";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();

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

  return (
    <div className="watchlist-inself-parent">
      <div className="watchlist-inself">
        <div className="body2">
          <div className="watchlistheader2">
            <div className="watchlist2">Watchlist</div>
            <img className="vector-icon2" alt="" src="/vector.svg" />
          </div>
          <div className="watchlistdisplay2">
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
          <div className="paginationfooter2">
            <div className="back4">
              <img className="backicon2" alt="" src="/backicon1.svg" />
              <div className="back5">Previous</div>
            </div>
            <div className="navigate2">1 of 20</div>
            <div className="back4">
              <div className="next5">Next</div>
              <img className="next-icon2" alt="" src="/next1.svg" />
            </div>
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
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
