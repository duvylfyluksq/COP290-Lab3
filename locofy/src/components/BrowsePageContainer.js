import React from 'react';
import "./BrowsePageContainer.css";

const BrowsePageContainer = ({
  dimensions,
  onTVShowDescriptionBrowsePageContainerClick,
}) => {
  return (
    <div
      className="tvshowdescription-browsepage"
      onClick={onTVShowDescriptionBrowsePageContainerClick}
    >
      <div className="picture5">
        <img
          className="peakyblinders-icon1"
          alt=""
          src="/peakyblinders1@2x.png"
        />
      </div>
      <div className="right10">
        <div className="header1">
          <div className="title18">Title</div>
          <div className="season7">
            <p className="season-z">Season z</p>
          </div>
          <div className="year3">(Year)</div>
        </div>
        <div className="subheader">
          <div className="rating21">
            <div className="xy1013">x.y/10</div>
            <img className="vector-icon40" alt="" src={dimensions} />
          </div>
          <div className="avgduration1">
            <p className="season-z">AvgDuration</p>
          </div>
        </div>
        <div className="body22">
          <div className="credits2">{`Cast: John Doe, Jane Doe, John Doe `}</div>
          <div className="genres10">
            <div className="genre212">
              <div className="genre10">Genre</div>
            </div>
            <div className="genre212">
              <div className="genre10">Genre</div>
            </div>
            <div className="genre212">
              <div className="genre10">Genre</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePageContainer;
