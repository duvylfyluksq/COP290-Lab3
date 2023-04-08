import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HorizontalRowContainer from "../components/HorizontalRowContainer";
import MoviesContainer from '../components/MoviesContainer';
import "./FrameComponent12.css";

const FrameComponent12 = () => {
  const navigate = useNavigate();

  const onGenreCardContainerClick = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer1Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer2Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer3Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer4Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer5Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer6Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer7Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer8Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer9Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer10Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer11Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer12Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer13Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer14Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer15Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer16Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer17Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer18Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer19Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onGenreCardContainer20Click = useCallback(() => {
    navigate("/mixedbrowseout")
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedout");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    navigate("/moviebrowseout");
  }, [navigate]);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowseout")
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresout");
  }, [navigate]);

  const onNavbarRHSContainerClick = useCallback(() => {
    navigate("/signin");
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
        <MoviesContainer
          coordinates="/vector21.svg"
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

export default FrameComponent12;
