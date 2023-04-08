import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MoviesContainer from '../components/MoviesContainer';
import "./Continue.css";

const Continue = () => {
  
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

  const onContinueClick = useCallback(() => {
    navigate("/homesignedin");
  }, [navigate]);

  function changecolour(buttonNumber){
    var genres = document.querySelectorAll(".filterbrowseinteraction21");
    if(genres[buttonNumber].classList.contains('colored2')){
    genres[buttonNumber].classList.remove('colored2');
    }else{
    genres[buttonNumber].classList.add('colored2');
    }
  }

  return (
    <div className="continue">
      <div className="body16">
        <div className="bio">
          <div className="bio1">Bio</div>
          <textarea
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
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(0)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(1)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(2)}>
                <div className="adventure21" >Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(3)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(4)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(5)}>
                <div className="adventure21" >Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(6)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(7)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(8)}>
                <div className="adventure21" >Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(9)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(10)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(11)}>
                <div className="adventure21" >Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(12)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(13)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(14)}>
                <div className="adventure21" >Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(15)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(16)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(17)}>
                <div className="adventure21" >Adventure</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(18)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(19)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(20)}>
                <div className="adventure21" >Adventure</div>
              </button>
            </div>
          </div>
        </div>
        <button className="continue1" onClick={onContinueClick}>
          <div className="continue2">Continue</div>
        </button>
      </div>
      <MoviesContainer
        coordinates="/vector21.svg"
        onLogoContainerClick={onLogoContainerClick}
        onMoviesTextClick={onMoviesTextClick}
        onTVShowsTextClick={onTVShowsTextClick}
        onGenresTextClick={onGenresTextClick}
        onNavbarRHSContainerClick={onNavbarRHSContainerClick}
      />
    </div>
  );
};

export default Continue;
