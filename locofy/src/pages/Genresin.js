import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HorizontalRowContainer from "../components/HorizontalRowContainer";
import NavbarContainer from '../components/NavbarContainer';
import "./Genresin.css";

const FrameComponent12 = () => {
  const navigate = useNavigate();

  const onGenreCardContainerClick = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer1Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer2Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer3Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer4Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer5Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer6Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer7Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer8Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer9Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer10Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer11Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer12Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer13Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer14Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer15Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer16Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer17Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer18Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer19Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
  }, []);

  const onGenreCardContainer20Click = useCallback(() => {
    // Please sync "MixedBrowse-In" to the project
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

  return (
    <div className="genres-out-parent">
      <div className="genres-out">
        <div className="body12">
          <div className="genres2">Genres</div>
          <div className="list">
            <HorizontalRowContainer
              onGenreCardContainerClick={onGenreCardContainerClick}
              onGenreCardContainer1Click={onGenreCardContainer1Click}
              onGenreCardContainer2Click={onGenreCardContainer2Click}
            />
            <HorizontalRowContainer
              onGenreCardContainerClick={onGenreCardContainer3Click}
              onGenreCardContainer1Click={onGenreCardContainer4Click}
              onGenreCardContainer2Click={onGenreCardContainer5Click}
            />
            <HorizontalRowContainer
              onGenreCardContainerClick={onGenreCardContainer6Click}
              onGenreCardContainer1Click={onGenreCardContainer7Click}
              onGenreCardContainer2Click={onGenreCardContainer8Click}
            />
            <HorizontalRowContainer
              onGenreCardContainerClick={onGenreCardContainer9Click}
              onGenreCardContainer1Click={onGenreCardContainer10Click}
              onGenreCardContainer2Click={onGenreCardContainer11Click}
            />
            <HorizontalRowContainer
              onGenreCardContainerClick={onGenreCardContainer12Click}
              onGenreCardContainer1Click={onGenreCardContainer13Click}
              onGenreCardContainer2Click={onGenreCardContainer14Click}
            />
            <HorizontalRowContainer
              onGenreCardContainerClick={onGenreCardContainer15Click}
              onGenreCardContainer1Click={onGenreCardContainer16Click}
              onGenreCardContainer2Click={onGenreCardContainer17Click}
            />
            <HorizontalRowContainer
              onGenreCardContainerClick={onGenreCardContainer18Click}
              onGenreCardContainer1Click={onGenreCardContainer19Click}
              onGenreCardContainer2Click={onGenreCardContainer20Click}
            />
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

export default FrameComponent12;
