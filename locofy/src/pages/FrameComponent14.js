import { useCallback } from "react";
import BrowsePageContainer from "../components/BrowsePageContainer";
import LeftContainer from "../components/LeftContainer";
import { useNavigate } from "react-router-dom";
import "./FrameComponent14.css";

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
        <div className="navbar1">
          <div className="logo1" onClick={onLogoContainerClick}>
            <img className="vector-icon10" alt="" src="/vector30.svg" />
          </div>
          <div className="navbar-lhs1">
            <div className="movies2" onClick={onMoviesTextClick}>
              <p className="movies3">Movies</p>
            </div>
            <div className="tv-shows1" onClick={onTVShowsTextClick}>
              TV Shows
            </div>
            <div className="genres4" onClick={onGenresTextClick}>
              Genres
            </div>
          </div>
          <div className="searchbar1">
            <img className="vector-icon11" alt="" src="/vector23.svg" />
            <div className="search-movies-tv1">Search Movies, TV Shows</div>
          </div>
          <div className="navbar-rhs1">
            <img
              className="fluentcompose-24-filled-icon1"
              alt=""
              src="/fluentcompose24filled1.svg"
              onClick={onFluentcompose24FilledClick}
            />
            <img
              className="profilemenu-icon1"
              alt=""
              src="/profilemenu7.svg"
              onClick={onProfileMenuClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent14;
