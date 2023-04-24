import React from 'react';
import { useCallback, useState, useEffect } from "react";
import BrowsePageContainer from "../components/BrowsePageContainer";
import LeftContainer from "../components/LeftContainer";
import { useNavigate, useLocation } from "react-router-dom";
import "./SearchOut.css";
import MoviesContainer from '../components/MoviesContainer';
import MovieDescriptionContainerBrows from '../components/MovieDescriptionContainerBrows';
import {Title} from '../model/Title';
import { TitlesApi } from '../api/TitlesApi';

const api = new TitlesApi();

const SearchOut = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pref  = location.state.pref;
  const [titles, setTitles] = useState([]);



  useEffect(() => {
    api.searchGet(pref,(error, data, response) => {
      if (response.status === 200) {
        const titleList = data.map((titleData) =>

        Title.constructFromObject(titleData)
        
        );
        console.log(titleList);
        setTitles(titleList);

      } else {
        console.log(error);
      }
    });
  }, [pref]);

  

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedout");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    navigate("/moviebrowseout");
  }, [navigate]);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowseout");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresout");
  }, [navigate]);

  const onNavbarRHSContainerClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
      <div className="mixedbrowse-in790">
        <div className="scrolllist790">
        {titles.map((title, index) => (
            <>
              {title.movie ? (
                <MovieDescriptionContainerBrows
                  key={index}
                  movie={title.movie}
                  productId="/vector29.svg"
                />
              ) : (
                <BrowsePageContainer
                  key={index}
                  show={title.tvshow}
                  dimensions="/vector29.svg"
                />
              )}
            </>
          ))}
          </div>

        <MoviesContainer
          coordinates="/vector33.svg"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onNavbarRHSContainerClick={onNavbarRHSContainerClick}
        />
        

      </div>
  );
};

export default SearchOut;