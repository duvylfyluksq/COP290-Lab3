import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieNavbar.css";

const MovieNavbar = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
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
    <div className="navbar6">
      <button className="logo7" onClick={onLogoClick}>
        <img className="vector-icon87" alt="" src="/vector40.svg" />
      </button>
      <div className="navbar-lhs6">
        <div className="movies12" onClick={onMoviesTextClick}>
          <p className="movies13">Movies</p>
        </div>
        <div className="tv-shows6" onClick={onTVShowsTextClick}>
          TV Shows
        </div>
        <div className="genres13" onClick={onGenresTextClick}>
          Genres
        </div>
      </div>
      <div className="searchbar6">
        <img className="vector-icon88" alt="" src="/vector23.svg" />
        <div className="search-movies-tv6">Search Movies, TV Shows</div>
      </div>
      <div className="navbar-rhs6">
        <img
          className="fluentcompose-24-filled-icon3"
          alt=""
          src="/fluentcompose24filled1.svg"
          onClick={onFluentcompose24FilledClick}
        />
        <img
          className="profilemenu-icon3"
          alt=""
          src="/profilemenu9.svg"
          onClick={onProfileMenuClick}
        />
      </div>
    </div>
  );
};

export default MovieNavbar;
