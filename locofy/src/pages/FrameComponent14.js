import React from 'react';
import { useCallback } from "react";
import BrowsePageContainer from "../components/BrowsePageContainer";
import LeftContainer from "../components/LeftContainer";
import { useNavigate } from "react-router-dom";
import "./FrameComponent14.css";
import NavbarContainer from '../components/NavbarContainer';

const FrameComponent14 = () => {
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
    // Please sync "MovieBrowse-In" to the project
  }, []);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowsein");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    // Please sync "Genres-In" to the project
  }, []);

  const onFluentcompose24FilledClick = useCallback(() => {
    navigate("/makepost");
  }, [navigate]);

  const onProfileMenuClick = useCallback(() => {
    // Please sync "UserPage/InSelf" to the project
  }, []);

  return (
    <div className="tvshowbrowse-in-parent">
      <div className="tvshowbrowse-in">
        <div className="scrolllist1">
          <BrowsePageContainer
            dimensions="/vector29.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainerClick
            }
          />
          <BrowsePageContainer
            dimensions="/vector29.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer1Click
            }
          />
          <BrowsePageContainer
            dimensions="/vector29.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer2Click
            }
          />
          <BrowsePageContainer
            dimensions="/vector29.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer3Click
            }
          />
          <BrowsePageContainer
            dimensions="/vector29.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer4Click
            }
          />
          <BrowsePageContainer
            dimensions="/vector29.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer5Click
            }
          />
          <BrowsePageContainer
            dimensions="/vector29.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer6Click
            }
          />
        </div>
        <LeftContainer propBackgroundColor="#fff" propColor="#742bba" />
   
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

export default FrameComponent14;
