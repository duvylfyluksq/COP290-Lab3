import React from 'react'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MovieForm from "./MovieForm";
import "./MovieLinkContainer.css";

const MovieLinkContainer = () => {
  const navigate = useNavigate();

  const onMovieCardContainerClick = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer1Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer2Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer3Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer4Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardClick = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  return (
    <div className="top-movies3">
      <div className="top-movies4">Top Movies</div>
      <div className="top-movies5">
        <a className="moviecard22" onClick={onMovieCardClick}>
          <img className="moviecard-icon22" alt="" src="/moviecard@2x.png" />
          <div className="linearfill47">
            <div className="details47">
              <div className="rating62">
                <div className="xy1052">x.y/10</div>
                <img className="vector-icon82" alt="" src="/vector19.svg" />
              </div>
              <div className="title57">Title</div>
            </div>
          </div>
        </a>
        <MovieForm
          imageDimensions="/tvshowcard1@2x.png"
          imageDimension175x15="/vector34.svg"
          onMovieCardContainerClick={onMovieCardContainerClick}
        />
        <MovieForm
          imageDimensions="/moviecard@2x.png"
          imageDimension175x15="/vector19.svg"
          onMovieCardContainerClick={onMovieCardContainer1Click}
        />
        <MovieForm
          imageDimensions="/tvshowcard1@2x.png"
          imageDimension175x15="/vector34.svg"
          onMovieCardContainerClick={onMovieCardContainer2Click}
        />
        <MovieForm
          imageDimensions="/moviecard@2x.png"
          imageDimension175x15="/vector19.svg"
          onMovieCardContainerClick={onMovieCardContainer3Click}
        />
        <MovieForm
          imageDimensions="/tvshowcard1@2x.png"
          imageDimension175x15="/vector34.svg"
          onMovieCardContainerClick={onMovieCardContainer4Click}
        />
      </div>
    </div>
  );
};

export default MovieLinkContainer;
