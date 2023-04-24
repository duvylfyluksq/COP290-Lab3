import React from 'react';
import { useMemo, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import "./TrendingContainer.css";

const MoreShowsLikeThis = ({
  user = [],
  shows,
  propHeight,
  propFlexShrink,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
}) => {

  const navigate = useNavigate();

  const trendingTVShowsStyle = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propFlexShrink, propAlignSelf]);

  const trendingTVShows1Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);

  const onTVShowCardContainerClick = useCallback(
    (show) => {
      const isUser = user.length !== 0;
      const path = isUser ? "/tvshowin" : "/tvshowout";
      navigate(path, { state: { show, user } });
    },
    [navigate]
  );
  

  return (
    <div className="moremovieslikethis50">
        {shows.map((show, index) => (
          <div
            key={index}
            className="tvshowcard17"
            onClick={() => onTVShowCardContainerClick(show)}
          >
            <img className="tvshowcard-icon20" alt={show.title} src={show.poster} />
            <div className="gradient-overlay"></div>
            <div className="linearfill41">
              <div className="details41">
                <div className="rating56">
                  <div className="xy1046">{show.rating}/10</div>
                  <img className="vector-icon76" alt="" src="/vector19.svg" />
                </div>
                <div className="title51">{show.title}</div>
                <div className="season21">Season {show.season}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default MoreShowsLikeThis;