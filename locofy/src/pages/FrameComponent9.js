import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReviewsContainer from "../components/ReviewsContainer";
import ReviewContainer from "../components/ReviewContainer";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent9.css";

const FrameComponent9 = () => {
  const navigate = useNavigate();

  const onPictureIconClick = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqTextClick = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onPictureIcon1Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqText1Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onPictureIcon2Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqText2Click = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedout");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    navigate("/moviebrowseout");
  }, [navigate]);

  const onTVShowsTextClick = useCallback(() => {
    // Please sync "TVShowBrowse-Out" to the project
  }, []);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresout");
  }, [navigate]);

  const onNavbarRHSContainerClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
    <div className="reviews-movie-out-parent">
      <div className="reviews-movie-out">
        <div className="body9">
          <div className="reviewsheader3">
            <div className="showing3">Showing Reviews For</div>
            <div className="title">Eternal Sunshine Of The Spo...</div>
          </div>
          <ReviewsContainer />
          <div className="reviewlist3">
            <div className="postslist6">
              <ReviewContainer
                onPictureIconClick={onPictureIconClick}
                onDuvylfyluksqTextClick={onDuvylfyluksqTextClick}
              />
              <ReviewContainer
                onPictureIconClick={onPictureIcon1Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText1Click}
              />
              <ReviewContainer
                onPictureIconClick={onPictureIcon2Click}
                onDuvylfyluksqTextClick={onDuvylfyluksqText2Click}
              />
            </div>
            <div className="paginationfooter6">
              <div className="back12">
                <img className="backicon6" alt="" src="/backicon.svg" />
                <div className="back13">Previous</div>
              </div>
              <div className="navigate6">1 of 20</div>
              <div className="back12">
                <div className="next13">Next</div>
                <img className="next-icon6" alt="" src="/next.svg" />
              </div>
            </div>
          </div>
        </div>
        <MoviesContainer
          coordinates="/vector18.svg"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onNavbarRHSContainerClick={onNavbarRHSContainerClick}
        />
      </div>
    </div>
  );
};

export default FrameComponent9;
