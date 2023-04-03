import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SortPanelReviewsPageRadios from "../components/SortPanelReviewsPageRadios";
import ReviewForm from "../components/ReviewForm";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onPictureIconClick = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onDuvylfyluksqTextClick = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onPictureIcon1Click = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onDuvylfyluksqText1Click = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onPictureIcon2Click = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onDuvylfyluksqText2Click = useCallback(() => {
    navigate("/duvylfyluksqinother");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedin");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    // Please sync "MovieBrowse-In" to the project
  }, []);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowsein");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    // Please sync "Genres-In" to the project
  }, []);

  const onFluentcompose24FilledClick = useCallback(() => {
    navigate("/makepost");
  }, [navigate]);

  const onProfileMenuClick = useCallback(() => {
    // Please sync "UserPage/InSelf" to the project
  }, []);

  return (
    <div className="reviews-duvylfyluksq-in-parent">
      <div className="reviews-duvylfyluksq-in">
        <div className="body3">
          <div className="reviewsheader">
            <div className="showing">Showing Reviews By</div>
            <div className="username">duvylfyluksq</div>
          </div>
          <SortPanelReviewsPageRadios />
          <div className="reviewlist">
            <div className="postslist">
              <ReviewForm
                picture="/picture@2x.png"
                duvylfyluksq="duvylfyluksq"
                onPictureIconClick={onPictureIconClick}
                onDuvylfyluksqTextClick={onDuvylfyluksqTextClick}
              />
              <ReviewForm
                picture="/picture@2x.png"
                duvylfyluksq="duvylfyluksq"
                bodyCursor="pointer"
                bodyFrameCursor="pointer"
                onPictureIconClick={onPictureIcon1Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText1Click}
              />
              <ReviewForm
                picture="/picture@2x.png"
                duvylfyluksq="duvylfyluksq"
                bodyCursor="pointer"
                bodyFrameCursor="pointer"
                onPictureIconClick={onPictureIcon2Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText2Click}
              />
            </div>
            <div className="paginationfooter3">
              <div className="back6">
                <img className="backicon3" alt="" src="/backicon1.svg" />
                <div className="back7">Previous</div>
              </div>
              <div className="navigate3">1 of 20</div>
              <div className="back6">
                <div className="next7">Next</div>
                <img className="next-icon3" alt="" src="/next.svg" />
              </div>
            </div>
          </div>
        </div>
        <NavbarContainer
          dimensions="/vector10.svg"
          dimensionsText="/fluentcompose24filled.svg"
          dimensionsId="/profilemenu2.svg"
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

export default FrameComponent3;
