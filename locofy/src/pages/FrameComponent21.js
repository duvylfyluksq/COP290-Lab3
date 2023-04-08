import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HorizontalRowContainer from "../components/HorizontalRowContainer";
import NavbarContainer from '../components/NavbarContainer';
import "./FrameComponent12.css";

const FrameComponent20 = () => {
  const navigate = useNavigate();

  const onGenreCardContainerClick = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer1Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer2Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer3Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer4Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer5Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer6Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer7Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer8Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer9Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer10Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer11Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer12Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer13Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer14Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer15Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer16Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer17Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer18Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer19Click = useCallback(() => {
    navigate("/mixedbrwosein")
  }, [navigate]);

  const onGenreCardContainer20Click = useCallback(() => {
    navigate("/mixedbrwosein")
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
  }, [navigate]);

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

export default FrameComponent20;
