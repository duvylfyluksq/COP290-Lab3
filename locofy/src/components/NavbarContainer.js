import React from 'react';
import { useMemo } from "react";
import "./NavbarContainer.css";

const NavbarContainer = ({
  dimensions,
  dimensionsText,
  dimensionsId,
  propBoxShadow,
  onLogoContainerClick,
  onMoviesTextClick,
  onTVShowsTextClick,
  onGenresTextClick,
  onFluentcompose24FilledClick,
  onProfileMenuClick,
}) => {
  const logoStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  return (
    <div className="navbar2">
      <div className="logo2" onClick={onLogoContainerClick} style={logoStyle}>
        <img className="vector-icon17" alt="" src={dimensions} />
      </div>
      <div className="navbar-lhs2">
        <div className="movies4" onClick={onMoviesTextClick}>
          <p className="movies5">Movies</p>
        </div>
        <div className="tv-shows2" onClick={onTVShowsTextClick}>
          TV Shows
        </div>
        <div className="genres5" onClick={onGenresTextClick}>
          Genres
        </div>
      </div>
      <div className="searchbar2">
        <img className="vector-icon18" alt="" src="/vector4.svg" />
        <div className="search-movies-tv2">Search Movies, TV Shows</div>
      </div>
      <div className="navbar-rhs2">
        <img
          className="fluentcompose-24-filled-icon2"
          alt=""
          src={dimensionsText}
          onClick={onFluentcompose24FilledClick}
        />
        <img
          className="profilemenu-icon2"
          alt=""
          src={dimensionsId}
          onClick={onProfileMenuClick}
        />
      </div>
    </div>
  );
};

export default NavbarContainer;
