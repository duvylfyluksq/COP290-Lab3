import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReviewContainer from "../components/ReviewContainer";
import MoreMoviesLikeThisContainer from "../components/MoreMoviesLikeThisContainer";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent10.css";
import {useLocation} from "react-router-dom";


const FrameComponent10 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state.movie;

  const onPictureIconClick = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqTextClick = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onPictureIcon1Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqText1Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onPictureIcon2Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqText2Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onMovieCardContainerClick = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainerClick = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onMovieCardContainer1Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer1Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onMovieCardContainer2Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer2Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer3Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedout");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    navigate("/moviebrowseout");
  }, [navigate]);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowseout");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresout");
  }, [navigate]);

  const onNavbarRHSContainerClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  const onSeeAllReviewsClick = useCallback(() => {
    navigate("/reviewsmovieout");
  }, [navigate]);

  return (
    <div className="movie-out-parent">
      <div className="movie-out">
        <div className="body10">
          <div className="moviedescription50">
            <div className="left50">
              <img className="joker-icon70" alt="" src={movie.poster} />
            </div>
            <div className="right50">
              <div className="descriptionheader50">
                <div className="rating">
                  <div className="xy10">{movie.rating}/10</div>
                  <img className="vector-icon60" alt="" src="/vector2.svg" />
                </div>
                <div className="duration">
                  <p className="director-john-doe">{movie.duration}</p>
                </div>
                <div className="genres">
                {movie.genres.map((genre) => (
                <div className="genre2">
                  <div className="genre">{genre}</div>
                </div>
              ))}
                </div>
              </div>
              <div className="sublayout50">
                <div className="descriptionbody">
                  <div className="title100">
                    <div className="title200">{movie.title}</div>
                    <div className="year500">({movie.release_date.getFullYear()})</div>
                  </div>
                  <div className="plotsynopsis50">
                    {movie.plot}
                  </div>
                </div>
                <div className="subsublayout50">
                  <img className="line-icon50" alt="" src="/line.svg" />
                  <div className="credits50">
                    <p className="director-john-doe">Director: {movie.director}</p>
                    <p className="director-john-doe">
                      Writer: {movie.writer}
                    </p>
                    <p className="director-john-doe">Cast: {movie.cast.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewlist4">
            <div className="reviews">Reviews</div>
            <div className="reviews139">
            <ReviewContainer
              onPictureIconClick={onPictureIconClick}
              onDuvylfyluksqTextClick={onDuvylfyluksqTextClick}
            />
            <ReviewContainer
              onPictureIconClick={onPictureIcon1Click}
              onDuvylfyluksqTextClick={onDuvylfyluksqText1Click}
            />
            <ReviewContainer
              onPictureIconClick={onPictureIcon2Click}
              onDuvylfyluksqTextClick={onDuvylfyluksqText2Click}
            />
            <div className="see-all-reviews" onClick={onSeeAllReviewsClick}>
              See All Reviews
            </div>
            </div>
            <div className="reviews">More Like This</div>
            <div className="more-like-this">
            <MoreMoviesLikeThisContainer
              onMovieCardContainerClick={onMovieCardContainerClick}
              onTVShowCardContainerClick={onTVShowCardContainerClick}
              onMovieCardContainer1Click={onMovieCardContainer1Click}
              onTVShowCardContainer1Click={onTVShowCardContainer1Click}
              onMovieCardContainer2Click={onMovieCardContainer2Click}
              onTVShowCardContainer2Click={onTVShowCardContainer2Click}
              onTVShowCardContainer3Click={onTVShowCardContainer3Click}
            />
            </div>
          </div>
        </div>
        <MoviesContainer
          coordinates="/vector20.svg"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onNavbarRHSContainerClick={onNavbarRHSContainerClick}
        />
      </div>
    </div>
  );
};

export default FrameComponent10;
