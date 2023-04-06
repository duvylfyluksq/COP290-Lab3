import React from 'react';
import { useCallback } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import MovieWatchListContainer from "../components/MovieWatchListContainer";
import BottomFooter from "../components/BottomFooter";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent.css";
import Box from "./Watchlist_list"

const FrameComponent = () => {
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
  // const [numBoxes, setNumBoxes] = useState(5); // State variable for the number of boxes to display
  // const [currentIndex, setCurrentIndex] = useState(0); // State variable for the index of the first box to display

  // const boxes = []; // Array to hold the boxes
  // for (let i = currentIndex; i < currentIndex + numBoxes; i++) {
  //   boxes.push(<Box />);
  // }

  // // Event handlers for the next and previous buttons
  // const handleNext = () => {
  //   if (currentIndex + numBoxes < 20) {
  //     setCurrentIndex(currentIndex + numBoxes);
  //   }
  // };

  // const handlePrev = () => {
  //   if (currentIndex - numBoxes >= 0) {
  //     setCurrentIndex(currentIndex - numBoxes);
  //   }
  // };

  return (
    <div className="watchlist-inother-parent">
      <div className="watchlist-inother">
        <div className="body">
          <div className="watchlistheader">
            <div className="watchlist">Watchlist</div>
            <img className="vector-icon" alt="" src="/vector.svg" />
          </div>
          <div className="watchlistdisplay">
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
          <div className="paginationfooter">
            <div className="back">
              <img className="backicon" alt="" src="/backicon.svg" />
              <div className="back1">Previous</div>
            </div>
            <div className="navigate">1 of 20</div>
            <div className="back">
              <div className="next1">Next</div>
              <img className="next-icon" alt="" src="/next.svg" />
            </div>
          </div>
        </div>
        <NavbarContainer
          dimensions="/vector3.svg"
          dimensionsText="/fluentcompose24filled.svg"
          dimensionsId="/profilemenu.svg"
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

export default FrameComponent;
