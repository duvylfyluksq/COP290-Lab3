import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import "./Continue.css";

const Continue = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
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

  const onContinueClick = useCallback(() => {
    navigate("/homesignedin");
  }, [navigate]);

  return (
    <div className="continue">
      <div className="body16">
        <div className="bio">
          <div className="bio1">Bio</div>
          <input
            className="body17"
            type="text"
            placeholder="What kind of a film buff are you?"
            maxLength={200}
            required
          />
        </div>
        <div className="select">
          <div className="header">
            <div className="select1">Select 3 of your favourite genres</div>
          </div>
          <div className="genretags1">
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
              <button className="filterbrowseinteraction21">
                <div className="adventure21">Adventure</div>
              </button>
            </div>
          </div>
        </div>
        <button className="continue1" onClick={onContinueClick}>
          <div className="continue2">Continue</div>
        </button>
      </div>
      <Navbar2
        productIds="/vector39.svg"
        propJustifyContent="flex-start"
        propGap="56px"
        onLogoClick={onLogoClick}
        onMoviesTextClick={onMoviesTextClick}
        onTVShowsTextClick={onTVShowsTextClick}
        onGenresTextClick={onGenresTextClick}
        onNavbarRHSContainerClick={onNavbarRHSContainerClick}
      />
    </div>
  );
};

export default Continue;
