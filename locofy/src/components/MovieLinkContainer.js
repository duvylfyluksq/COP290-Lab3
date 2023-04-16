import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieLinkContainer.css";
import { TitlesApi } from "../api/TitlesApi";
import { Movie } from "../model/Movie";

const api = new TitlesApi();

const MovieLinkContainer = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const opts = { sortTypeBrowse: "Rat" };
    api.movieGet(opts, (error, data, response) => {
      if (response.status === 200) {
        const movieList = data.slice(0, 5).map((movieData) =>
          Movie.constructFromObject(movieData)
        );
        console.log(movieList);
        setMovies(movieList);
      } else {
        console.log(error);
      }
    });
  }, []);

  const onMovieCardClick = useCallback((movie) => {
    navigate("/movieout", { state: { movie } });
  }, [navigate]);

  return (
    <div id="topmovies" className="top-movies3">
      <div className="top-movies4">Top Movies</div>
      <div className="top-movies5">
        {movies.map((movie, index) => (
          <a
            className="moviecard22"
            onClick={() => onMovieCardClick(movie)}
            key={movie.movie_id.id}
          >
            <img className="moviecard-icon22" alt="" src={movie.poster} />
            <div className="gradient-overlay"></div>
            <div className="linearfill47">
              <div className="details47">
                <div className="rating62">
                  <div className="xy1052">{movie.rating}/10</div>
                  <img
                    className="vector-icon82"
                    alt=""
                    src="/vector19.svg"
                  />
                </div>
                <div className="title57">{movie.title}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MovieLinkContainer;
