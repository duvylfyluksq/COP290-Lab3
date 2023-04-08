import React from 'react';
import { useMemo } from "react";
import "./LinksContainer1.css";

const LinksContainer1 = ({
  coordinates,
  onLogoClick,
  onMoviesTextClick,
  onTVShowsTextClick,
  onGenresText1Click,
  onNavbarRHSContainerClick,
}) => {

  return (
    <div className="navbar4">
      <a className="logo4" onClick={onLogoClick}>
        <img className="vector-icon37" alt="" src={coordinates} />
      </a>
      <div className="navbar-lhs4">
        <div className="movies8" onClick={onMoviesTextClick}>
          <p className="movies9">Movies</p>
        </div>
        <div className="tv-shows4" onClick={onTVShowsTextClick}>
          TV Shows
        </div>
        <div className="genres9" onClick={onGenresText1Click}>
          Genres
        </div>
      </div>
      <div className="right9">
        <div className="searchbar4">
          <img className="vector-icon38" alt="" src="/vector23.svg" />
          <div className="search-movies-tv4">Search Movies, TV Shows</div>
        </div>
        <div className="navbar-rhs4" onClick={onNavbarRHSContainerClick}>
          <img className="vector-icon39" alt="" src="/vector24.svg" />
          <div className="sign-in1">
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksContainer1;
