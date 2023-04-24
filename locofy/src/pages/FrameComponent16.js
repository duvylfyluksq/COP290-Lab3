import React from 'react';
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SuggestedContainer from "../components/SuggestedContainer";
import MovieLinkContainer from "../components/MovieLinkContainer";
import TVShowsContainer from "../components/TVShowsContainer";
import NewReleasesContainer from "../components/NewReleasesContainer";
import TrendingMoviesContainer from "../components/TrendingMoviesContainer";
import TrendingContainer from "../components/TrendingContainer";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent16.css";
import {Movie} from "../model/Movie";
import {Tvshow} from "../model/Tvshow";
import {Title} from "../model/Title";
import {User } from "../model/User";
import { TitlesApi } from '../api/TitlesApi';
import {UserApi} from "../api/UserApi";

const api = new TitlesApi();

const FrameComponent16 = () => {
  const navigate = useNavigate();
  const [suggested, setSuggested] = useState([]);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [release, setRelease] = useState([]);
  const [trmovie, setTrmovie] = useState([]);
  const [trshow, setTrshow] = useState([]);
  const location = useLocation();
  const user = location.state.user;
  console.log(user);

  useEffect(() => {
    
    const opts = { sortTypeBrowse: "Rat" };
    api.titleGet({genre: user.interests}, (error, data, response) => {
      if (response.status === 200) {
        const suggestedList = data.slice(0, 5).map((suggestedData) =>
        Title.constructFromObject(suggestedData)
        );
        console.log(suggestedList);
        setSuggested(suggestedList);
        api.movieGet(opts, (error, data, response) => {
          if (response.status === 200) {
            const movieList = data.slice(0, 5).map((movieData) =>
              Movie.constructFromObject(movieData)
            );
            console.log(movieList);
            setMovies(movieList);
        api.tvshowGet(opts, (error, data, response) => {
              if (response.status === 200) {
                const showList = data.slice(0, 5).map((showData) =>
                  Tvshow.constructFromObject(showData)
                );
                console.log(showList);
                setShows(showList);
                api.titleGet({sortTypeBrowse:"Rel"}, (error, data, response) => {
                  if (response.status === 200) {
                    const newreleaselist = data.slice(0, 5).map((releaseData) =>
                    Title.constructFromObject(releaseData)
                    );
                    console.log(newreleaselist);
                    setRelease(newreleaselist);
                    api.movieGet({sortTypeBrowse:"Pop"}, (error, data, response) => {
                      if (response.status === 200) {
                        const trmovieList = data.slice(0, 5).map((trmovieData) =>
                        Movie.constructFromObject(trmovieData)
                        );
                        console.log(trmovieList);
                        setTrmovie(trmovieList);
                        api.tvshowGet({sortTypeBrowse:"Pop"}, (error, data, response) => {
                          if (response.status === 200) {
                            const trshowList = data.slice(0, 5).map((trshowDaata) =>
                            Tvshow.constructFromObject(trshowDaata)
                            );
                            console.log(trshowList);
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
      } else {
        console.log(error);
      }
    });
  }, []);

 

  return (
    <div className="home-signedin-parent">
      <div className="home-signedin">
        <div className="body13">
          <SuggestedContainer 
          user = {user}
          suggested = {suggested}
          />
          <MovieLinkContainer  
          movies = {movies}
          user = {user}
          />
          <TVShowsContainer 
            shows  = {shows}
            user = {user}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
           
      
          />
          <NewReleasesContainer
            releases = {release}
            user = {user}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <TrendingMoviesContainer
            movies={trmovie}
            user = {user}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
            
          />
          <TrendingContainer
            shows = {trshow}
            user = {user}
            propHeight="unset"
            propFlexShrink="unset"
            propAlignSelf="stretch"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
        </div>
        <NavbarContainer
          user = {user}
          dimensions="/vector35.svg"
          dimensionsText="/fluentcompose24filled1.svg"
          dimensionsId="/profilemenu8.svg"
          propBoxShadow="unset"
        
        />
      </div>
    </div>
  );
};

export default FrameComponent16;
