import React from 'react';
import './review.css'

const Review = ({ reviewtitle, username, profilePic, rating, body }) => {
  return (
    <div className="review">
      <div className="review-header">
        <p id='revtitle'>{reviewtitle}</p>
        <div className='by'>
            <div id='byy'>by:</div>
            <div className="pf"><img src={profilePic} alt="pf" /></div>
            <p id="user">{username}</p>
        </div>
        <div className='rate'>
            <div id='tt'>Rating: </div>
            <div id="rating">{rating}/10</div>
        </div>
      </div>
      <div className="review-body">
        <p>{body}</p>
      </div>
        <button className='button'>Comments</button>
    </div>
  );
};


export default Review
