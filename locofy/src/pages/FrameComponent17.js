import React from 'react';
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieLinkContainer from "../components/MovieLinkContainer";
import TVShowsContainer from "../components/TVShowsContainer";
import NewReleasesContainer from "../components/NewReleasesContainer";
import TrendingMoviesContainer from "../components/TrendingMoviesContainer";
import TrendingContainer from "../components/TrendingContainer";

import "./FrameComponent17.css";
import MoviesContainer from '../components/MoviesContainer';

import { useState } from 'react';
import { TitlesApi } from '../api/TitlesApi';
import {Movie} from "../model/Movie";
import {Tvshow} from "../model/Tvshow";
import {Title} from "../model/Title";

const api = new TitlesApi();
const FrameComponent17 = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [release, setRelease] = useState([]);
  const [trmovie, setTrmovie] = useState([]);
  const [trshow, setTrshow] = useState([]);

  useEffect(() => {
    
    const opts = { sortTypeBrowse: "Rat" };
    api.movieGet(opts, (error, data, response) => {
      if (response.status === 200) {
        const movieList = data.slice(0, 5).map((movieData) =>
          Movie.constructFromObject(movieData)
        );
        setMovies(movieList);
    api.tvshowGet(opts, (error, data, response) => {
          if (response.status === 200) {
            const showList = data.slice(0, 5).map((showData) =>
              Tvshow.constructFromObject(showData)
            );
            setShows(showList);
            api.titleGet({sortTypeBrowse:"Rel"}, (error, data, response) => {
              if (response.status === 200) {
                const newreleaselist = data.slice(0, 5).map((releaseData) =>
                Title.constructFromObject(releaseData)
                );
                setRelease(newreleaselist);
                api.movieGet({sortTypeBrowse:"Pop"}, (error, data, response) => {
                  if (response.status === 200) {
                    const trmovieList = data.slice(0, 5).map((trmovieData) =>
                    Movie.constructFromObject(trmovieData)
                    );
                    setTrmovie(trmovieList);
                    api.tvshowGet({sortTypeBrowse:"Pop"}, (error, data, response) => {
                      if (response.status === 200) {
                        const trshowList = data.slice(0, 5).map((trshowDaata) =>
                        Tvshow.constructFromObject(trshowDaata)
                        );
                        setTrshow(trshowList);
                        
                      } else {
                        console.log(error);
                      }
                    });
                  } else {
                    console.log(error);
                  }
                });
              } else {
                console.log(error);
              }
            });
          } else {
            console.log(error);
          }
        });
      } else {
        console.log(error);
      }
    });
  }, []);


  return (
    <div className="home-signedout-parent">
      <div className="home-signedout">
        <div className="body14">
          <MovieLinkContainer  movies = {movies}/>
          <TVShowsContainer 
            shows  = {shows}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <NewReleasesContainer
            releases = {release}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <TrendingMoviesContainer
            movies={trmovie}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <TrendingContainer
            shows = {trshow}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
        </div>
        <MoviesContainer/>
      </div>
    </div>
  );
};

export default FrameComponent17;