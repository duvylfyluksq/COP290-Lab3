import React from 'react';
import "./ReviewsContainer.css";

const ReviewsContainer = () => {
  return (
    <div className="sortpanel-reviewspage1">
      <div className="sortbyheader2">
        <div className="sort-by1">Sort By</div>
        <div className="ascendingdescendinginteraction1">
          <img className="vector-icon26" alt="" src="/vector12.svg" />
          <img className="vector-icon26" alt="" src="/vector13.svg" />
        </div>
      </div>
      <div className="sort-reviewpage1">
        <div className="likes3">
          <div className="button6" />
          <div className="likes4">Likes</div>
        </div>
        <div className="likes3">
          <div className="button6" />
          <div className="popularity3">Most Recent</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsContainer;
