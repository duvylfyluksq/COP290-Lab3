import React from 'react';
import { useCallback } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import HorizontalRowContainer from "../components/HorizontalRowContainer";
import NavbarContainer from '../components/NavbarContainer';
import "./FrameComponent12.css";

const FrameComponent20 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
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
              a='Adventure'
              b='Action'
              c='Drama'
              user={user}
            />
            <HorizontalRowContainer
              a='Comedy'
              b='Romance'
              c='Horror'
              user={user}
            />
            <HorizontalRowContainer
              a='Thriller'
              b='Sci-Fi'
              c='Mystery'
              user={user}
            />
            <HorizontalRowContainer
              a='Crime'
              b='Animation'
              c='Biography'
              user={user}
            />
            <HorizontalRowContainer
              a='History'
              b='War'
              c='Sport'
              user={user}
            />
            <HorizontalRowContainer
              a='Fantasy'
              b='Documentary'
              c='Dark'
              user={user}
            />
            <HorizontalRowContainer
              a='Psychological'
              b='Western'
              c='Musical'
              user={user}
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
          user={user}
        />
      </div>
    </div>
  );
};

export default FrameComponent20;
