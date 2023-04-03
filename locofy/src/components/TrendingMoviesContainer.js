import React from 'react';
import { useMemo } from "react";
import "./TrendingMoviesContainer.css";

const TrendingMoviesContainer = ({
  propHeight,
  propFlexShrink,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  onMovieCardContainer12Click,
  onMovieCardContainer13Click,
  onMovieCardContainer14Click,
  onMovieCardContainer15Click,
  onMovieCardContainer16Click,
  onMovieCardContainer17Click,
}) => {
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

  return (
    <div className="trending-movies" style={trendingMoviesStyle}>
      <div className="trending-movies1">
        <p className="trending-movies2">Trending Movies</p>
      </div>
      <div className="trending-movies3" style={trendingMovies1Style}>
        <div className="moviecard15" onClick={onMovieCardContainer12Click}>
          <img className="moviecard-icon15" alt="" src="/moviecard@2x.png" />
          <div className="linearfill35">
            <div className="details35">
              <div className="rating50">
                <div className="xy1040">x.y/10</div>
                <img className="vector-icon70" alt="" src="/vector19.svg" />
              </div>
              <div className="title45">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard15" onClick={onMovieCardContainer13Click}>
          <img className="moviecard-icon15" alt="" src="/tvshowcard1@2x.png" />
          <div className="linearfill35">
            <div className="details35">
              <div className="rating50">
                <div className="xy1040">x.y/10</div>
                <img className="vector-icon70" alt="" src="/vector34.svg" />
              </div>
              <div className="title45">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard15" onClick={onMovieCardContainer14Click}>
          <img className="moviecard-icon15" alt="" src="/moviecard@2x.png" />
          <div className="linearfill35">
            <div className="details35">
              <div className="rating50">
                <div className="xy1040">x.y/10</div>
                <img className="vector-icon70" alt="" src="/vector19.svg" />
              </div>
              <div className="title45">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard15" onClick={onMovieCardContainer15Click}>
          <img className="moviecard-icon15" alt="" src="/tvshowcard1@2x.png" />
          <div className="linearfill35">
            <div className="details35">
              <div className="rating50">
                <div className="xy1040">x.y/10</div>
                <img className="vector-icon70" alt="" src="/vector34.svg" />
              </div>
              <div className="title45">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard15" onClick={onMovieCardContainer16Click}>
          <img className="moviecard-icon15" alt="" src="/moviecard@2x.png" />
          <div className="linearfill35">
            <div className="details35">
              <div className="rating50">
                <div className="xy1040">x.y/10</div>
                <img className="vector-icon70" alt="" src="/vector19.svg" />
              </div>
              <div className="title45">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard15" onClick={onMovieCardContainer17Click}>
          <img className="moviecard-icon15" alt="" src="/tvshowcard1@2x.png" />
          <div className="linearfill35">
            <div className="details35">
              <div className="rating50">
                <div className="xy1040">x.y/10</div>
                <img className="vector-icon70" alt="" src="/vector34.svg" />
              </div>
              <div className="title45">Title</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMoviesContainer;
