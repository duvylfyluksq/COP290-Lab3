import React from 'react';
import { useMemo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewReleasesContainer.css";
import {Movie} from "../model/Movie";

const NewReleasesContainer = ({
  user,
  releases,
  propHeight,
  propFlexShrink,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
}) => {

  const navigate = useNavigate();

  const newReleasesStyle = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propFlexShrink, propAlignSelf]);

  const newReleases1Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);

  const onCardClick = useCallback((release) => {
    const isMovie = release instanceof Movie;
    const content = release;
    if (isMovie) {
    navigate("/movieout", { state: { movie: content, user} });
  } else {
    navigate("/tvshowout", { state: { show: content, user} });
  }
  }, [navigate]);

  const renderCard = (release, index) => {
    
    const isMovie = !!release.movie;
    const content = isMovie ? release.movie : release.tvshow;
    console.log(isMovie);
    return (
      <a
        key={index}
        className="moviecard12"
        onClick={() => onCardClick(content)}
      >
        <img
          className="moviecard-icon12"
          alt=""
          src= {content.poster}
        />
        <div className="gradient-overlay"></div>
        <div className={isMovie ? "linearfill28" : "linearfill29"}>
          <div className="details28">
            <div className="rating43">
              <div className="xy1033">{content.rating}/10</div>
              <img
                className="vector-icon63"
                alt=""
                src='/vector19.svg'
              />
            </div>
            <div className="title38">{content.title}</div>
            {!isMovie && <div className="season17">Season {content.season}</div>}
          </div>
        </div>
      </a>
    );
  };



  return (
    <div className="new-releases" style={newReleasesStyle}>
      <div className="new-releases2">New Releases</div>
      <div className="new-releases3" style={newReleases1Style}>
        {releases.map((release, index) => renderCard(release, index))}
      </div>
    </div>
  );
};

export default NewReleasesContainer;
