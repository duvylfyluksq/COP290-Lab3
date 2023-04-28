import React from 'react';
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SortPanelReviewsPageRadios from "../components/SortPanelReviewsPageRadios";
import ReviewForm from "../components/ReviewForm";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const reviews = location.state.reviews;

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedin");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    navigate("/moviebrowsein");
  }, [navigate]);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowsein");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresin");
  }, [navigate]);

  const onFluentcompose24FilledClick = useCallback(() => {
    navigate("/makepost");
  }, [navigate]);

  const onProfileMenuClick = useCallback(() => {
    navigate("/bobdylaninself");
  }, [navigate]);

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
          dimensions="/vector11.svg"
          dimensionsText="/fluentcompose24filled.svg"
          dimensionsId="/profilemenu3.svg"
          propBoxShadow="unset"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onFluentcompose24FilledClick={onFluentcompose24FilledClick}
          onProfileMenuClick={onProfileMenuClick}
          user = {user}
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
