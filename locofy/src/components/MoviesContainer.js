import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./MoviesContainer.css";

const MoviesContainer = ({
  coordinates,
  onLogoContainerClick,
  onMoviesTextClick,
  onTVShowsTextClick,
  onGenresTextClick,
  onNavbarRHSContainerClick,
}) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const onSearchEnter = useCallback((e) => {
    if (e.key === "Enter") {
      navigate("/searchout", { state: { pref: searchText } });
    }
  }, [navigate, searchText]);

  const onSearchTextChange = useCallback((e) => {
    setSearchText(e.target.value);
    
  }, []);

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
          <img className="vector-icon84" alt="" src="/vector23.svg" />
          <input 
            type="text" 
            placeholder="What's on your mind?" 
            className="type" 
            value={searchText}
            onChange={onSearchTextChange}
            onKeyDown={onSearchEnter}
          />
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
