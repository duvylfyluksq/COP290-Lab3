import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./TVShowsContainer.css";
import { TitlesApi } from "../api/TitlesApi";
import { Tvshow } from "../model/Tvshow";

const api = new TitlesApi();

const TVShowCard = ({ tvShow, onClick }) => (
  <div className="tvshowcard8" onClick={onClick}>
    <img className="tvshowcard-icon11" alt="" src={tvShow.poster} />
    <div className="gradient-overlay"></div>
    <div className="linearfill23">
      <div className="details23">
        <div className="rating38">
          <div className="xy1028">{tvShow.rating}/10</div>
          <img className="vector-icon58" alt="" src= '/vector19.svg' />
        </div>
        <div className="title33">{tvShow.title}</div>
        <div className="season12">Season {tvShow.season}</div>
      </div>
    </div>
  </div>
);

const TVShowsContainer = ({
  user = [],
  shows,
  propHeight,
  propFlexShrink,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
}) => {
  const topTVShowsStyle = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propFlexShrink, propAlignSelf]);

  const topTVShows1Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);


  const navigate = useNavigate();
  
  const onTVShowCardClick = useCallback((show) => {
    const isUser = (user.length != 0);
    const path = isUser ? '/tvshowin' : '/tvshowout';
    navigate(path, { state: { show, user } });
  }, [navigate, user]);

  return (
    <div className="top-tv-shows" style={topTVShowsStyle}>
      <div className="top-tv-shows1">Top TV Shows</div>
      <div className="top-tv-shows2" style={topTVShows1Style}>
        {shows.map((tvShow, index) => (
          <TVShowCard
            key={index}
            tvShow={tvShow}
            onClick={() => onTVShowCardClick(tvShow)}
          />
        ))}
      </div>
    </div>
  );
};

export default TVShowsContainer;
