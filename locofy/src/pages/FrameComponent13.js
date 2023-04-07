import React from 'react';
import { useCallback } from "react";
import BrowsePageContainer from "../components/BrowsePageContainer";
import LeftContainer from "../components/LeftContainer";
import { useNavigate } from "react-router-dom";
import "./FrameComponent13.css";
import NavbarContainer from '../components/NavbarContainer';
import MovieDescriptionContainerBrows from '../components/MovieDescriptionContainerBrows';

const FrameComponent13 = () => {
  const navigate = useNavigate();

  const onTVShowDescriptionBrowsePageContainerClick = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowDescriptionBrowsePageContainer1Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowDescriptionBrowsePageContainer2Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowDescriptionBrowsePageContainer3Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);
  const onMovieDescriptionBrowsePageContainerClick = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer1Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);
  const onTVShowDescriptionBrowsePageContainer4Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowDescriptionBrowsePageContainer5Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowDescriptionBrowsePageContainer6Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

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
    // Please sync "UserPage/InSelf" to the project
  }, []);
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
      <div className="mixedbrowse-in">
        <div className="scrolllist">
          <BrowsePageContainer
            dimensions="/vector8.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainerClick
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector31.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainerClick
            }
          />
          <BrowsePageContainer
            dimensions="/vector8.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer2Click
            }
          />
          <BrowsePageContainer
            dimensions="/vector8.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer3Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector31.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainerClick
            }
          />
          <BrowsePageContainer
            dimensions="/vector8.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer5Click
            }
          />
          <BrowsePageContainer
            dimensions="/vector8.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer6Click
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
  );
};

export default FrameComponent13;
