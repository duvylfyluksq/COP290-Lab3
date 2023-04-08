import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MovieDescriptionContainerBrows from "../components/MovieDescriptionContainerBrows";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent15.css";

const FrameComponent15 = () => {
  const navigate = useNavigate();

  const onMovieDescriptionBrowsePageContainerClick = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer1Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer2Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer3Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer4Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer5Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer6Click = useCallback(() => {
    navigate("/movieout");
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
  function changeColor(buttonNumber){
    var buttons = document.querySelectorAll("#button");
    for (var i = 0; i < buttons.length; i++) {
      if (i == buttonNumber - 1) {
        buttons[i].classList.add('colored');
    } else {
        buttons[i].classList.remove('colored');
    }
    }
  }

  function changecolour(buttonNumber){
    var genres = document.querySelectorAll("#adventure");
    if(genres[buttonNumber].classList.contains('colored2')){
    genres[buttonNumber].classList.remove('colored2');
    }else{
    genres[buttonNumber].classList.add('colored2');
    }
  }
  function active(buttonNumber){
    var logos = document.querySelectorAll("#sorting");
    for (var i = 0; i < logos.length; i++) {
      if (i == buttonNumber - 1) {
        logos[i].classList.add('coloured');
    } else {
        logos[i].classList.remove('coloured');
    }
    }
  }
  return (
    // <div className="moviebrowse-out-parent">
      <div className="moviebrowse-out">
        <div className="scrolllist2">
          <MovieDescriptionContainerBrows
            productId="/vector31.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainerClick
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector31.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer1Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector31.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer2Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector32.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer3Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector32.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer4Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector32.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer5Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector32.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer6Click
            }
          />
        </div>
        <div className="left2">
          <div className="sort">
            <div className="sortbyheader">
              <div className="sort-by">Sort By</div>
              <div className="ascendingdescendinginteraction">
                <img id='sorting' className="vector-icon12" alt="" src="/vector25.svg" onClick={() => active(1)} />
                <img id='sorting' className="vector-icon13" alt="" src="/vector26.svg" onClick={() => active(2)} />
              </div>
            </div>
            <div className="sortfieldsinteraction">
              <div className="horizontallist">
                <div className="popularity">
                  <div id='button' className="button" onClick={() => changeColor(1)} />
                  <div className="rating3">Rating</div>
                </div>
                <div className="popularity">
                  <div id='button' className="button" onClick={() => changeColor(2)} />
                  <div className="popularity1">Popularity</div>
                </div>
              </div>
              <div className="horizontallist1">
                <div className="popularity">
                  <div id='button' className="button" onClick={() => changeColor(3)} />
                  <div className="releasedate1">Release Date</div>
                </div>
                <div className="popularity">
                  <div id='button' className="button" onClick={() => changeColor(4)} />
                  <div className="alphabetical">Alphabetical</div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="filterheader">
              <div className="filter1">Filter</div>
              <img className="vector-icon14" alt="" src="/vector27.svg" />
            </div>
            <div className="genretags">
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(0)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(1)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(2)}>
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(3)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(4)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(5)}>
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(6)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(7)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(8)}>
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
              <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(9)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(10)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(11)}>
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(12)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(13)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(14)}>
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
              <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(15)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(16)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(17)}>
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(18)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(19)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(20)}>
                  <div className="adventure">Adventure</div>
                </div>
              </div>
            </div>
          </div>

        <MoviesContainer
          coordinates="/vector33.svg"
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

export default FrameComponent15;
