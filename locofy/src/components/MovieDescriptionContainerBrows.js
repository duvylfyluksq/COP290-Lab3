import React from 'react';
import "./MovieDescriptionContainerBrows.css";

const MovieDescriptionContainerBrows = ({
  productId,
  onMovieDescriptionBrowsePageContainerClick,
}) => {
  return (
    <div
      className="moviedescription-browsepage"
      onClick={onMovieDescriptionBrowsePageContainerClick}
    >
      <div className="picture6">
        <img className="joker-icon5" alt="" src="/joker2@2x.png" />
      </div>
      <div className="right11">
        <div className="header2">
          <div className="title19">Title</div>
          <div className="year4">(Year)</div>
        </div>
        <div className="subheader1">
          <div className="rating24">
            <div className="xy1014">x.y/10</div>
            <img className="vector-icon44" alt="" src={productId} />
          </div>
          <div className="duration2">
            <p className="duration3">Duration</p>
          </div>
        </div>
        <div className="body23">
          <div className="credits3">{`Cast: John Doe, Jane Doe, John Doe `}</div>
          <div className="genres11">
            <div className="genre215">
              <div className="genre13">Genre</div>
            </div>
            <div className="genre215">
              <div className="genre13">Genre</div>
            </div>
            <div className="genre215">
              <div className="genre13">Genre</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescriptionContainerBrows;
