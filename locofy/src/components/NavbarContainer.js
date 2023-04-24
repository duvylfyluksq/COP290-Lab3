import React from 'react';
import { useMemo,useState } from "react";
import "./NavbarContainer.css";
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";


const NavbarContainer = ({
  user,
  dimensionsText,
  dimensions,
  propBoxShadow,
}) => {
  const logoStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);
  
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const onSearchEnter = useCallback((e) => {
    if (e.key === "Enter") {
      navigate("/searchin", { state: { pref: searchText, user } });
    }
  }, [navigate, searchText]);

  const onSearchTextChange = useCallback((e) => {
    setSearchText(e.target.value);
    
  }, []);
  
  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedin", {state: {user}});
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    navigate("/moviebrowsein", {state: {user}});
  }, [navigate]);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowsein", {state: {user}});
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresin", {state: {user}});
  }, [navigate]);

  const onFluentcompose24FilledClick = useCallback(() => {
    navigate("/makepost", {state: {user}});
  }, [navigate]);

  const onProfileMenuClick = useCallback(() => {
    navigate("/bobdylaninself", {state: {user}})
  }, [navigate]);

  const onWatchlistClick = useCallback(() => {
    navigate("/watchlistinself", {state: {user}});
  }, [navigate]);
  const onViewProfileClick = useCallback(() => {
    navigate("/bobdylaninself", {state: {user}});
  }, [navigate]);
  const onLogoutClick = useCallback(() => {
    navigate("/homesignedout");
  }, [navigate]);

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
        <input 
            type="text" 
            placeholder="What's on your mind?" 
            className="type" 
            value={searchText}
            onChange={onSearchTextChange}
            onKeyDown={onSearchEnter}
          />
      </div>
      <div className="navbar-rhs2">
        
        <div class="rhs">
          <button class="signedin">
            <img
              className="profilemenu-icon2"
              alt=""
              src= {user.pfp}
              onClick={onProfileMenuClick}
            />
          </button>
          <div className="dropdown">
              <span className="name">{user.username}</span>
              <hr />
              <a href="" onClick={onWatchlistClick}>Watchlist</a><br />
              <a href="" onClick={onViewProfileClick}>View Profile</a><br />
              <hr />
              <a href="" onClick={onLogoutClick}>Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarContainer;
