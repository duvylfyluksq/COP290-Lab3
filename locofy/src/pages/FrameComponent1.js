import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MovieWatchListContainer from "../components/MovieWatchListContainer";
import BottomFooter from "../components/BottomFooter";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

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

  return (
    <div className="watchlist-out-parent">
      <div className="watchlist-out">
        <div className="body1">
          <div className="watchlistheader1">
            <div className="watchlist1">Watchlist</div>
            <img className="vector-icon1" alt="" src="/vector.svg" />
          </div>
          <div className="watchlistdisplay1">
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
          <div className="paginationfooter1">
            <div className="back2">
              <img className="backicon1" alt="" src="/backicon.svg" />
              <div className="back3">Previous</div>
            </div>
            <div className="navigate1">1 of 20</div>
            <div className="back2">
              <div className="next3">Next</div>
              <img className="next-icon1" alt="" src="/next.svg" />
            </div>
          </div>
        </div>
        <MoviesContainer
          coordinates="/vector5.svg"
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

export default FrameComponent1;
