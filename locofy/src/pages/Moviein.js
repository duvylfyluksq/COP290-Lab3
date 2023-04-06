import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReviewContainer from "../components/ReviewContainer";
import MoreMoviesLikeThisContainer from "../components/MoreMoviesLikeThisContainer";
import NavbarContainer from '../components/NavbarContainer';
import "./Moviein.css";

const FrameComponent10 = () => {
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

  const onMovieCardContainerClick = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainerClick = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onMovieCardContainer1Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer1Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onMovieCardContainer2Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer2Click = useCallback(() => {
    navigate("/tvshowout");
  }, [navigate]);

  const onTVShowCardContainer3Click = useCallback(() => {
    navigate("/tvshowout");
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

  const onSeeAllReviewsClick = useCallback(() => {
    navigate("/reviewsmovieout");
  }, [navigate]);

  return (
    <div className="movie-out-parent">
      <div className="movie-out">
        <div className="body10">
          <div className="moviedescription">
            <div className="left">
              <img className="joker-icon" alt="" src="/joker1@2x.png" />
            </div>
            <div className="right">
              <div className="descriptionheader">
                <div className="rating">
                  <div className="xy10">x.y/10</div>
                  <img className="vector-icon6" alt="" src="/vector2.svg" />
                </div>
                <div className="duration">
                  <p className="director-john-doe">Duration</p>
                </div>
                <div className="genres">
                  <div className="genre2">
                    <div className="genre">Genre</div>
                  </div>
                  <div className="genre2">
                    <div className="genre">Genre</div>
                  </div>
                  <div className="genre2">
                    <div className="genre">Genre</div>
                  </div>
                </div>
              </div>
              <div className="sublayout">
                <div className="descriptionbody">
                  <div className="title1">
                    <div className="title2">Title</div>
                    <div className="year">(Year)</div>
                  </div>
                  <div className="plotsynopsis">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                    aute irure dolor in reprehenderit in
                  </div>
                </div>
                <div className="subsublayout">
                  <img className="line-icon" alt="" src="/line.svg" />
                  <div className="credits">
                    <p className="director-john-doe">Director: John Doe</p>
                    <p className="director-john-doe">&nbsp;</p>
                    <p className="director-john-doe">
                      Writers: John Doe, Jane Doe, John Doe
                    </p>
                    <p className="director-john-doe">&nbsp;</p>
                    <p className="director-john-doe">{`Cast: John Doe, Jane Doe, John Doe `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewlist4">
            <div className="reviews">Reviews</div>
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
            <div className="see-all-reviews" onClick={onSeeAllReviewsClick}>
              See All Reviews
            </div>
            <div className="reviews">More Like This</div>
            <MoreMoviesLikeThisContainer
              onMovieCardContainerClick={onMovieCardContainerClick}
              onTVShowCardContainerClick={onTVShowCardContainerClick}
              onMovieCardContainer1Click={onMovieCardContainer1Click}
              onTVShowCardContainer1Click={onTVShowCardContainer1Click}
              onMovieCardContainer2Click={onMovieCardContainer2Click}
              onTVShowCardContainer2Click={onTVShowCardContainer2Click}
              onTVShowCardContainer3Click={onTVShowCardContainer3Click}
            />
          </div>
        </div>
        <NavbarContainer
          dimensions="/vector16.svg"
          dimensionsText="/fluentcompose24filled1.svg"
          dimensionsId="/profilemenu5.svg"
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

export default FrameComponent10;
