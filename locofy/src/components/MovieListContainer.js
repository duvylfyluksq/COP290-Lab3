import React from 'react';
import { useCallback } from "react";
import "./MovieListContainer.css";

const MovieListContainer = () => {
  const onMovieCardContainer3Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer4Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer5Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer6Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer7Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer8Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  return (
    <div className="top-movies">
      <div className="top-movies1">Top Movies</div>
      <div className="top-movies2">
        <div className="moviecard6" onClick={onMovieCardContainer3Click}>
          <img className="moviecard-icon6" alt="" src="/moviecard@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill17">
            <div className="details17">
              <div className="rating32">
                <div className="xy1022">x.y/10</div>
                <img className="vector-icon52" alt="" src="/vector19.svg" />
              </div>
              <div className="title27">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard6" onClick={onMovieCardContainer4Click}>
          <img className="moviecard-icon6" alt="" src="/tvshowcard1@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill17">
            <div className="details17">
              <div className="rating32">
                <div className="xy1022">x.y/10</div>
                <img className="vector-icon52" alt="" src="/vector34.svg" />
              </div>
              <div className="title27">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard6" onClick={onMovieCardContainer5Click}>
          <img className="moviecard-icon6" alt="" src="/moviecard@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill17">
            <div className="details17">
              <div className="rating32">
                <div className="xy1022">x.y/10</div>
                <img className="vector-icon52" alt="" src="/vector19.svg" />
              </div>
              <div className="title27">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard6" onClick={onMovieCardContainer6Click}>
          <img className="moviecard-icon6" alt="" src="/tvshowcard1@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill17">
            <div className="details17">
              <div className="rating32">
                <div className="xy1022">x.y/10</div>
                <img className="vector-icon52" alt="" src="/vector34.svg" />
              </div>
              <div className="title27">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard6" onClick={onMovieCardContainer7Click}>
          <img className="moviecard-icon6" alt="" src="/moviecard@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill17">
            <div className="details17">
              <div className="rating32">
                <div className="xy1022">x.y/10</div>
                <img className="vector-icon52" alt="" src="/vector19.svg" />
              </div>
              <div className="title27">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard6" onClick={onMovieCardContainer8Click}>
          <img className="moviecard-icon6" alt="" src="/tvshowcard1@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill17">
            <div className="details17">
              <div className="rating32">
                <div className="xy1022">x.y/10</div>
                <img className="vector-icon52" alt="" src="/vector34.svg" />
              </div>
              <div className="title27">Title</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListContainer;
