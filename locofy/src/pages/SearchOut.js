import React from 'react';
import { useCallback, useState, useEffect } from "react";
import BrowsePageContainer1 from "../components/BrowsePageContainer1";
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
        setTitles(titleList);

      } else {
        console.log(error);
      }
    });
  }, [pref]);


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
                <BrowsePageContainer1
                  key={index}
                  show={title.tvshow}
                  dimensions="/vector29.svg"
                />
              )}
            </>
          ))}
          </div>

        <MoviesContainer/>
      </div>
  );
};

export default SearchOut;