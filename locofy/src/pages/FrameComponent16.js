import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SuggestedContainer from "../components/SuggestedContainer";
import MovieListContainer from "../components/MovieListContainer";
import TVShowsContainer from "../components/TVShowsContainer";
import NewReleasesContainer from "../components/NewReleasesContainer";
import TrendingMoviesContainer from "../components/TrendingMoviesContainer";
import TrendingContainer from "../components/TrendingContainer";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent16.css";

const FrameComponent16 = () => {
  const navigate = useNavigate();

  const onTVShowCardContainerClick = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer1Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onMovieCardContainerClick = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onTVShowCardContainer2Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onMovieCardContainer1Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer2Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);
  const onTVShowCardContainer3Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);


  const onMovieCardContainer3Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer4Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer5Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer6Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer7Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);
  const onMovieCardContainer8Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);
  const onTVShowCardContainer4Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer5Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer6Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer7Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer8Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onMovieCardContainer9Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onTVShowCardContainer9Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onMovieCardContainer10Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onTVShowCardContainer10Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onMovieCardContainer11Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);
  const onTVShowCardContainer11Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer12Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onMovieCardContainer12Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer13Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer14Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer15Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer16Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);

  const onMovieCardContainer17Click = useCallback(() => {
    navigate("/moviein")
  }, [navigate]);
  
  const onTVShowCardContainer13Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer14Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer15Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer16Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

  const onTVShowCardContainer17Click = useCallback(() => {
    navigate("/tvshowin")
  }, [navigate]);

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
  }, []);

  return (
    <div className="home-signedin-parent">
      <div className="home-signedin">
        <div className="body13">
          <SuggestedContainer 
          onMovieCardContainerClick={onMovieCardContainerClick}
          onTVShowCardContainerClick={onTVShowCardContainerClick}
          onMovieCardContainer1Click={onMovieCardContainer1Click}
          onTVShowCardContainer1Click={onTVShowCardContainer1Click}
          onMovieCardContainer2Click={onMovieCardContainer2Click}
          onTVShowCardContainer2Click={onTVShowCardContainer2Click}
          onTVShowCardContainer3Click={onTVShowCardContainer3Click}
          />
          <MovieListContainer 
          onMovieCardContainer3Click={onMovieCardContainer3Click}
          onMovieCardContainer4Click={onMovieCardContainer4Click}
          onMovieCardContainer5Click={onMovieCardContainer5Click}
          onMovieCardContainer6Click={onMovieCardContainer6Click}
          onMovieCardContainer7Click={onMovieCardContainer7Click}
          onMovieCardContainer8Click={onMovieCardContainer8Click}
          />
          <TVShowsContainer
            onTVShowCardContainer4Click={onTVShowCardContainer4Click}
            onTVShowCardContainer5Click={onTVShowCardContainer5Click}
            onTVShowCardContainer6Click={onTVShowCardContainer6Click}
            onTVShowCardContainer7Click={onTVShowCardContainer7Click}
            onTVShowCardContainer8Click={onTVShowCardContainer8Click}
          />
          <NewReleasesContainer
            onMovieCardContainer9Click={onMovieCardContainer9Click}
            onTVShowCardContainer9Click={onTVShowCardContainer9Click}
            onMovieCardContainer10Click={onMovieCardContainer10Click}
            onTVShowCardContainer10Click={onTVShowCardContainer10Click}
            onMovieCardContainer11Click={onMovieCardContainer11Click}
            onTVShowCardContainer11Click={onTVShowCardContainer11Click}
            onTVShowCardContainer12Click={onTVShowCardContainer12Click}
          />
          <TrendingMoviesContainer
            onMovieCardContainer12Click={onMovieCardContainer12Click}
            onMovieCardContainer13Click={onMovieCardContainer13Click}
            onMovieCardContainer14Click={onMovieCardContainer14Click}
            onMovieCardContainer15Click={onMovieCardContainer15Click}
            onMovieCardContainer16Click={onMovieCardContainer16Click}
            onMovieCardContainer17Click={onMovieCardContainer17Click}
          />
          <TrendingContainer
            onTVShowCardContainer13Click={onTVShowCardContainer13Click}
            onTVShowCardContainer14Click={onTVShowCardContainer14Click}
            onTVShowCardContainer15Click={onTVShowCardContainer15Click}
            onTVShowCardContainer16Click={onTVShowCardContainer16Click}
            onTVShowCardContainer17Click={onTVShowCardContainer17Click}
          />
        </div>
        <NavbarContainer
          dimensions="/vector35.svg"
          dimensionsText="/fluentcompose24filled1.svg"
          dimensionsId="/profilemenu8.svg"
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

export default FrameComponent16;
