import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HorizontalRowContainer from "../components/HorizontalRowContainer";
import MoviesContainer from '../components/MoviesContainer';
import "./FrameComponent12.css";

const FrameComponent12 = ({genre}) => {
  const navigate = useNavigate();

  const onGenreCardContainerClick = useCallback(() => {
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
              a='Adventure'
              b='Action'
              c='Drama'
            />
            <HorizontalRowContainer
              a='Comedy'
              b='Romance'
              c='Horror'
            />
            <HorizontalRowContainer
              a='Thriller'
              b='Sci-Fi'
              c='Mystery'
            />
            <HorizontalRowContainer
              a='Crime'
              b='Animation'
              c='Biography'
            />
            <HorizontalRowContainer
              a='History'
              b='War'
              c='Sport'
            />
            <HorizontalRowContainer
              a='Fantasy'
              b='Documentary'
              c='Dark'
            />
            <HorizontalRowContainer
              a='Psychological'
              b='Western'
              c='Musical'
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
