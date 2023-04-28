import React from 'react';
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieLinkContainer from "../components/MovieLinkContainer";
import TVShowsContainer from "../components/TVShowsContainer";
import NewReleasesContainer from "../components/NewReleasesContainer";
import TrendingMoviesContainer from "../components/TrendingMoviesContainer";
import TrendingContainer from "../components/TrendingContainer";
import Navbar2 from "../components/Navbar2";
import "./FrameComponent17.css";
import MoviesContainer from '../components/MoviesContainer';
// import Left from './images/left_arrow.jpg'
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

  const onTVShowCardContainerClick = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer1Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer2Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer3Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer4Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onMovieCardContainer5Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onTVShowCardContainer5Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer6Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onTVShowCardContainer6Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer7Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onTVShowCardContainer7Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onTVShowCardContainer8Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer8Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer9Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer10Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer11Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer12Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer13Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  

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
            onTVShowCardContainer4Click={onTVShowCardContainerClick}
            onTVShowCardContainer5Click={onTVShowCardContainer1Click}
            onTVShowCardContainer6Click={onTVShowCardContainer2Click}
            onTVShowCardContainer7Click={onTVShowCardContainer3Click}
            onTVShowCardContainer8Click={onTVShowCardContainer4Click}
          />
          <NewReleasesContainer
            releases = {release}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
            onMovieCardContainer9Click={onMovieCardContainer5Click}
            onTVShowCardContainer9Click={onTVShowCardContainer5Click}
            onMovieCardContainer10Click={onMovieCardContainer6Click}
            onTVShowCardContainer10Click={onTVShowCardContainer6Click}
            onMovieCardContainer11Click={onMovieCardContainer7Click}
            onTVShowCardContainer11Click={onTVShowCardContainer7Click}
            onTVShowCardContainer12Click={onTVShowCardContainer8Click}
          />
          <TrendingMoviesContainer
            movies={trmovie}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
            onMovieCardContainer12Click={onMovieCardContainer8Click}
            onMovieCardContainer13Click={onMovieCardContainer9Click}
            onMovieCardContainer14Click={onMovieCardContainer10Click}
            onMovieCardContainer15Click={onMovieCardContainer11Click}
            onMovieCardContainer16Click={onMovieCardContainer12Click}
            onMovieCardContainer17Click={onMovieCardContainer13Click}
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