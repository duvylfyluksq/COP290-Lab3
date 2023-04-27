import React from 'react';
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  const location = useLocation();
  const user = location.state.user;
  const host = location.state.host;
  const reviews = location.state.reviews;

  return (
    <div className="reviews-duvylfyluksq-in-parent">
      <div className="reviews-duvylfyluksq-in">
        <div className="body3">
          <div className="reviewsheader">
            <div className="showing">Showing Reviews By</div>
            <div className="usrnamee">{user.username}</div>
          </div>
          <div className="reviewlist">
            <div className="postslist">
            {reviews.map((review) => (
                <ReviewForm
                host = {host}
                user = {user}
                review = {review}
              />
              ))}
            </div>
          </div>
        </div>
        <NavbarContainer
          propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          user={host}
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
