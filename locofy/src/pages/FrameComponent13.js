import { useCallback } from "react";
import BrowsePageContainer from "../components/BrowsePageContainer";
import LeftContainer from "../components/LeftContainer";
import { useNavigate } from "react-router-dom";
import "./FrameComponent13.css";

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
    <div className="mixedbrowse-in-parent">
      <div className="mixedbrowse-in">
        <div className="scrolllist">
          <BrowsePageContainer
            dimensions="/vector8.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainerClick
            }
          />
          <BrowsePageContainer
            dimensions="/vector8.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer1Click
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
          <BrowsePageContainer
            dimensions="/vector8.svg"
            onTVShowDescriptionBrowsePageContainerClick={
              onTVShowDescriptionBrowsePageContainer4Click
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
        <LeftContainer />
        <div className="navbar">
          <div className="logo" onClick={onLogoContainerClick}>
            <img className="vector-icon8" alt="" src="/vector28.svg" />
          </div>
          <div className="navbar-lhs">
            <div className="movies" onClick={onMoviesTextClick}>
              <p className="movies1">Movies</p>
            </div>
            <div className="tv-shows" onClick={onTVShowsTextClick}>
              TV Shows
            </div>
            <div className="genres3" onClick={onGenresTextClick}>
              Genres
            </div>
          </div>
          <div className="searchbar">
            <img className="vector-icon9" alt="" src="/vector4.svg" />
            <div className="search-movies-tv">Search Movies, TV Shows</div>
          </div>
          <div className="navbar-rhs">
            <img
              className="fluentcompose-24-filled-icon"
              alt=""
              src="/fluentcompose24filled.svg"
              onClick={onFluentcompose24FilledClick}
            />
            <img
              className="profilemenu-icon"
              alt=""
              src="/profilemenu6.svg"
              onClick={onProfileMenuClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
