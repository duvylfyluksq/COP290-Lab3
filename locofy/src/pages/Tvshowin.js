import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReviewContainer from "../components/ReviewContainer";
import MoreMoviesLikeThisContainer from "../components/MoreMoviesLikeThisContainer";
import NavbarContainer from '../components/NavbarContainer';
import "./Tvshowin.css";

const FrameComponent11 = () => {
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
    navigate("/movieout");
  }, [navigate]);

  const onTVShowCardContainerClick = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer1Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onTVShowCardContainer1Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieCardContainer2Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onTVShowCardContainer2Click = useCallback(() => {
    navigate("/movieout");
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
    <div className="tvshow-out-parent">
      <div className="tvshow-out">
        <div className="body11">
          <div className="tvshowdescription">
            <div className="left1">
              <img
                className="peakyblinders-icon"
                alt=""
                src="/peakyblinders@2x.png"
              />
            </div>
            <div className="right1">
              <div className="descriptionheader1">
                <div className="rating1">
                  <div className="xy101">x.y/10</div>
                  <img className="vector-icon7" alt="" src="/vector1.svg" />
                </div>
                <div className="episodeduration">
                  <p className="avgduration">AvgDuration</p>
                </div>
                <div className="genres1">
                  <div className="genre23">
                    <div className="genre4">Genre</div>
                  </div>
                  <div className="genre23">
                    <div className="genre4">Genre</div>
                  </div>
                  <div className="genre23">
                    <div className="genre4">Genre</div>
                  </div>
                </div>
              </div>
              <div className="sublayout1">
                <div className="descriptionbody1">
                  <div className="title3">
                    <div className="title4">
                      <p className="avgduration">
                        <span>Title</span>
                        <span className="span">{` `}</span>
                      </p>
                    </div>
                    <div className="season">Season z</div>
                    <div className="year1">
                      <p className="avgduration">(Year)</p>
                    </div>
                  </div>
                  <div className="plotsynopsis1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                    aute irure dolor in reprehenderit in
                  </div>
                </div>
                <div className="subsublayout1">
                  <img className="line-icon1" alt="" src="/line.svg" />
                  <div className="credits1">
                    <p className="avgduration">Director: John Doe</p>
                    <p className="avgduration">&nbsp;</p>
                    <p className="avgduration">
                      Writers: John Doe, Jane Doe, John Doe
                    </p>
                    <p className="avgduration">&nbsp;</p>
                    <p className="avgduration">{`Cast: John Doe, Jane Doe, John Doe `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewlist5">
            <div className="reviews1">Reviews</div>
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
            <div className="see-all-reviews1" onClick={onSeeAllReviewsClick}>
              See All Reviews
            </div>
            <div className="reviews1">More Like This</div>
            <MoreMoviesLikeThisContainer
              propCursor="unset"
              onMovieCardContainerClick={onMovieCardContainerClick}
              onTVShowCardContainerClick={onTVShowCardContainerClick}
              onMovieCardContainer1Click={onMovieCardContainer1Click}
              onTVShowCardContainer1Click={onTVShowCardContainer1Click}
              onMovieCardContainer2Click={onMovieCardContainer2Click}
              onTVShowCardContainer2Click={onTVShowCardContainer2Click}
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

export default FrameComponent11;
