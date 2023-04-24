import React from 'react';
import { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './SuggestedContainer.css';
import { Movie } from '../model/Movie';

const SuggestedContainer = ({ user, suggested }) => {
  const navigate = useNavigate();

  const onCardClick = useCallback((suggested) => {
    const isMovie = !!suggested.movie;
    const content = isMovie ? suggested.movie : suggested.tvshow;
    if (isMovie) {
        navigate("/moviein", { state: { movie: content, user} });
   } else 
    {
      navigate("/tvshowin", { state: { show: content, user} });
    }

  }, [navigate, user]);
  

  const renderCard = (suggested, index) => {
    const isMovie = !!suggested.movie;
    const content = isMovie ? suggested.movie : suggested.tvshow;
    return (
      <div key={index} className="moviecard3" onClick={() => onCardClick(suggested)}>
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
        {suggested.map((suggested, index) => renderCard(suggested, index))}
      </div>
    </div>
  );
};

export default SuggestedContainer;
