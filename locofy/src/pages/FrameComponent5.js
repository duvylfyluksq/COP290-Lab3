import React from 'react';
import { useCallback } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import ReviewsContainer from "../components/ReviewsContainer";
import ReviewContainer from "../components/ReviewContainer";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent5.css";

const FrameComponent5 = () => {
  const location = useLocation();
  const user = location.state.user;
  const reviews = location.state.reviews;

  return (
    <div className="reviews-duvylfyluksq-out-parent">
      <div className="reviews-duvylfyluksq-out">
        <div className="body5">
          <div className="reviewsheader2">
            <div className="showing2">Showing Reviews By</div>
            <div className="username2">{user.username}</div>
          </div>
          <div className="reviewlist9999999">
            <div className="reviews139">
            {reviews.map((review) => (
                <ReviewContainer
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="unset"
                bodyFrameCursor="unset"
                user = {user}
                review = {review}
              />
              ))}   
            </div>
        </div>
            
        </div>
        <MoviesContainer/>
      </div>
    </div>
  );
};

export default FrameComponent5;
