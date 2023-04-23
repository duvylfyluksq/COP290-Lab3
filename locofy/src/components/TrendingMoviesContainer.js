import React from 'react';
import { useMemo, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import "./TrendingMoviesContainer.css";

const TrendingMoviesContainer = ({
  user = [],
  movies,
  propHeight,
  propFlexShrink,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  onMovieCardClick,
}) => {
  
  const navigate = new useNavigate();

  const trendingMoviesStyle = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propFlexShrink, propAlignSelf]);

  const trendingMovies1Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);

  const onMovieCardContainerClick = useCallback((movie) => {
    navigate("/movieout", {state:{movie}});
  }, [navigate]);

  return (
    <div className="trending-movies" style={trendingMoviesStyle}>
      <div className="trending-movies1">Trending Movies</div>
      <div className="trending-movies3" style={trendingMovies1Style}>
        {movies.map((movie, index) => (
          <div
            key={index}
            className="moviecard15"
            onClick={() => onMovieCardContainerClick(movie)}
          >
            <img className="moviecard-icon15" alt={movie.title} src={movie.poster} />
            <div className="gradient-overlay"></div>
            <div className="linearfill35">
              <div className="details35">
                <div className="rating50">
                  <div className="xy1040">{movie.rating}/10</div>
                  <img className="vector-icon70" alt="" src="/vector19.svg" />
                </div>
                <div className="title45">{movie.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMoviesContainer;
