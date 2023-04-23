import React from 'react';
import { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './SuggestedContainer.css';
import { Movie } from '../model/Movie';

const SuggestedContainer = ({ user, suggested }) => {
  const navigate = useNavigate();

  const onCardClick = useCallback((item) => {
    const isMovie = item instanceof Movie;
    const content = isMovie ? item.movie : item.tvshow;
    const path = isMovie ? '/moviein' : '/tvshowin';
    navigate(path, { state: { object: content, user } });
  }, [navigate, user]);
  

  const renderCard = (item, index) => {
    const isMovie = !!item.movie;
    const content = isMovie ? item.movie : item.tvshow;
    return (
      <div key={index} className="moviecard3" onClick={() => onCardClick(item)}>
        <img className="moviecard-icon3" alt="" src={content.poster} />
        <div className="gradient-overlay"></div>
        <div className={isMovie ? 'linearfill10' : 'linearfill11'}>
          <div className="details10">
            <div className="rating25">
              <div className="xy1015">{content.rating}/10</div>
              <img
                className="vector-icon45"
                alt=""
                src={isMovie ? '/vector19.svg' : '/vector34.svg'}
              />
            </div>
            <div className="title20">{content.title}</div>
            {!isMovie && <div className="season8">Season {content.season}</div>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="recommendations">
      <div className="recommendations1">Recommended For You</div>
      <div className="recommendations2">
        {suggested.map((item, index) => renderCard(item, index))}
      </div>
    </div>
  );
};

export default SuggestedContainer;
