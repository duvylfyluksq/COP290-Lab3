import React from 'react';
import "./MoviesContainer.css";

const MoviesContainer = ({
  coordinates,
  onLogoContainerClick,
  onMoviesTextClick,
  onTVShowsTextClick,
  onGenresTextClick,
  onNavbarRHSContainerClick,
}) => {
  return (
    <div className="navbar3">
      <div className="logo3" onClick={onLogoContainerClick}>
        <img className="vector-icon19" alt="" src={coordinates} />
      </div>
      <div className="navbar-lhs3">
        <div className="movies6" onClick={onMoviesTextClick}>
          <p className="movies7">Movies</p>
        </div>
        <div className="tv-shows3" onClick={onTVShowsTextClick}>
          TV Shows
        </div>
        <div className="genres6" onClick={onGenresTextClick}>
          Genres
        </div>
      </div>
      <div className="right4">
        <div className="searchbar3">
          <img className="vector-icon20" alt="" src="/vector4.svg" />
          <div className="search-movies-tv3">Search Movies, TV Shows</div>
        </div>
        <div className="navbar-rhs3" onClick={onNavbarRHSContainerClick}>
          <img className="vector-icon21" alt="" src="/vector6.svg" />
          <div className="sign-in">Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default MoviesContainer;
