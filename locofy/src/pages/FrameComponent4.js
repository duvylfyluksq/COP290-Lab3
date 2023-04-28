import React from 'react';
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const reviews = location.state.reviews;

  return (
    <div className="reviews-bobdylan-in-parent">
      <div className="reviews-bobdylan-in">
        <div className="body4">
          <div className="reviewsheader1">
            <div className="showing1">Showing Reviews By</div>
            <div className="username1">{user.username}</div>
          </div>
          <div className="reviewlist1">
            <div className="reviews1390">
            {reviews.map((review) => (
                <ReviewForm
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="unset"
                bodyFrameCursor="unset"
                host = {user}
                user = {user}
                review = {review}
              />
              ))}
            </div>
          </div>
        </div>
        <NavbarContainer
          propBoxShadow="unset"
          user = {user}
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
