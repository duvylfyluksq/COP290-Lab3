import React from 'react';
import { useMemo, useCallback } from "react";
import { useLocation, useNavigate} from 'react-router-dom';
import "./MoreMoviesLikeThisContainer.css";

const MoreMoviesLikeThisContainer = ({
  propCursor, movies,
}) => {

  const navigate = useNavigate();

  const onMovieCardContainerClick = useCallback((movie) => {
    navigate("/movieout", {state:{movie}});
  }, [navigate]);

  return (
    <div className="moremovieslikethis50">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="moviecard"
          onClick={() => onMovieCardContainerClick(movie)}
        >
          <img className="moviecard-icon" alt="" src={movie.poster} />
          <div className="gradient-overlay"></div>
          <div className="linearfill">
            <div className="details">
              <div className="rating14">
                <div className="xy106">{movie.rating}/10</div>
                <img className="vector-icon30" alt="" src="/vector19.svg" />
              </div>
              <div className="title11">{movie.title}</div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default MoreMoviesLikeThisContainer;
