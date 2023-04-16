import React from 'react';
import { useMemo } from "react";
import "./TVShowsContainer.css";

const TVShowCard = ({ tvShow, onClick }) => (
  <div className="tvshowcard8" onClick={onClick}>
    <img className="tvshowcard-icon11" alt="" src={tvShow.imageSrc} />
    <div className="gradient-overlay"></div>
    <div className="linearfill23">
      <div className="details23">
        <div className="rating38">
          <div className="xy1028">{tvShow.rating}/10</div>
          <img className="vector-icon58" alt="" src={tvShow.ratingIconSrc} />
        </div>
        <div className="title33">{tvShow.title}</div>
        <div className="season12">{tvShow.season}</div>
      </div>
    </div>
  </div>
);

const TVShowsContainer = ({
  propHeight,
  propFlexShrink,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  onTVShowCardClick,
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

  const tvShows = [
    {
      title: 'Title 1',
      season: 'Season 1',
      rating: '8.5',
      imageSrc: '/moviecard@2x.png',
      ratingIconSrc: '/vector19.svg',
    },
    // Add more TV shows here
  ];

  return (
    <div className="top-tv-shows" style={topTVShowsStyle}>
      <div className="top-tv-shows1">Top TV Shows</div>
      <div className="top-tv-shows2" style={topTVShows1Style}>
        {tvShows.map((tvShow, index) => (
          <TVShowCard
            key={index}
            tvShow={tvShow}
            onClick={() => onTVShowCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TVShowsContainer;
