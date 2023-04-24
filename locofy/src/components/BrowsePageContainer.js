import React, {useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import "./BrowsePageContainer.css";

const BrowsePageContainer = ({
  show,
  dimensions,
  user = [],
}) => {
  const navigate = useNavigate();

  const onTVShowDescriptionBrowsePageContainerClick = useCallback(() => {
    const isUser = (user.length != 0);
    const path = isUser ? '/showin' : '/showout';
    navigate(path, { state: { show, user } });
  }, [navigate,show]);

  return (
    <div
      className="tvshowdescription-browsepage" onClick={onTVShowDescriptionBrowsePageContainerClick}
    >
      <div className="picture5">
        <img
          className="peakyblinders-icon1"
          alt=""
          src={show.poster}
        />
      </div>
      <div className="right10">
        <div className="header1">
          <div className="title18">{show.title}</div>
          <div className="season7">
            Season {show.season}
          </div>
          <div className="year3">(Year)</div>
        </div>
        <div className="subheader">
          <div className="rating21">
            <div className="xy1013">{show.rating}/10</div>
            <img className="vector-icon40" alt="" src={dimensions} />
          </div>
          <div className="avgduration1">
            <p className="season-z">{show.duration}</p>
          </div>
        </div>
        <div className="body22">
          <div className="credits2">Cast: {show.cast.join(",")}</div>
          <div className="genres10">
          {show.genres.map((genre, index) => (
            <div key={index} className="genre212">
              <div className="genre10">{genre}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePageContainer;
