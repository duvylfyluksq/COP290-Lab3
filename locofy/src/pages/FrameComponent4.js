import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SortPanelReviewsPageRadios from "../components/SortPanelReviewsPageRadios";
import ReviewForm from "../components/ReviewForm";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onPictureIconClick = useCallback(() => {
    navigate("/bobdylaninself");
  }, [navigate]);

  const onDuvylfyluksqTextClick = useCallback(() => {
    navigate("/bobdylaninself");
  }, [navigate]);

  const onPictureIcon1Click = useCallback(() => {
    navigate("/bobdylaninself");
  }, [navigate]);

  const onDuvylfyluksqText1Click = useCallback(() => {
    navigate("/bobdylaninself");
  }, [navigate]);

  const onPictureIcon2Click = useCallback(() => {
    navigate("/bobdylaninself");
  }, [navigate]);

  const onDuvylfyluksqText2Click = useCallback(() => {
    navigate("/bobdylaninself");
  }, [navigate]);

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
            <div className="username1">bobdylan</div>
          </div>
          <SortPanelReviewsPageRadios />
          <div className="reviewlist1">
            <div className="postslist1">
              <ReviewForm
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="pointer"
                bodyFrameCursor="pointer"
                onPictureIconClick={onPictureIconClick}
                onDuvylfyluksqTextClick={onDuvylfyluksqTextClick}
              />
              <ReviewForm
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="pointer"
                bodyFrameCursor="pointer"
                onPictureIconClick={onPictureIcon1Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText1Click}
              />
              <ReviewForm
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="pointer"
                bodyFrameCursor="pointer"
                onPictureIconClick={onPictureIcon2Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText2Click}
              />
            </div>
            <div className="paginationfooter4">
              <div className="back8">
                <img className="backicon4" alt="" src="/backicon.svg" />
                <div className="back9">Previous</div>
              </div>
              <div className="navigate4">1 of 20</div>
              <div className="back8">
                <div className="next9">Next</div>
                <img className="next-icon4" alt="" src="/next.svg" />
              </div>
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
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
