import React, {useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import "./MovieDescriptionContainerBrows.css";

const MovieDescriptionContainerBrows = ({
  productId,
  movie,
}) => {

  const navigate = useNavigate();

  const onMovieDescriptionBrowsePageContainerClick = useCallback(() => {
    navigate("/movieout", {state: {movie} });
  }, [navigate,movie]);

  return (
    <div
      className="moviedescription-browsepage" onClick={onMovieDescriptionBrowsePageContainerClick}
    >
      <div className="picture6">
        <img className="joker-icon5" alt="" src={movie.poster} />
      </div>
      <div className="right11">
        <div className="header2">
          <div className="title19">Title</div>
          <div className="year4">({movie.release_date.getFullYear()})</div>
        </div>
        <div className="subheader1">
          <div className="rating24">
            <div className="xy1014">{movie.rating}/10</div>
            <img className="vector-icon44" alt="" src={productId} />
          </div>
          <div className="duration2">
            <p className="duration3">{movie.duration}</p>
          </div>
        </div>
        <div className="body23">
          <div className="credits3">Cast: {movie.cast.join(",")}</div>
          <div className="genres11">
          {movie.genres.map((genre, index) => (
            <div key={index} className="genre215">
              <div className="genre13">{genre}</div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </div>
  );
};

export default MovieDescriptionContainerBrows;