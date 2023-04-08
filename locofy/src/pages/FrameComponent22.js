import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReviewForm from '../components/ReviewForm';
import MoreMoviesLikeThisContainer from "../components/MoreMoviesLikeThisContainer";
import NavbarContainer from '../components/NavbarContainer';
import "./FrameComponent11.css";

const FrameComponent22 = () => {
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
    // Please sync "UserPage/InSelf" to the project
  }, []);

  const onSeeAllReviewsClick = useCallback(() => {
    navigate("/reviewsmovieout");
  }, [navigate]);

  return (
    <div className="tvshow-out-parent">
      <div className="tvshow-out">
        <div className="body11">
          <div className="tvshowdescription100">
            <div className="left40">
              <img
                className="peakyblinders-icon40"
                alt=""
                src="/peakyblinders@2x.png"
              />
            </div>
            <div className="right100">
              <div className="descriptionheader60">
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
              <div className="sublayout100">
                <div className="descriptionbody60">
                  <div className="title100">
                    <div className="title200">Title</div>
                    <div className="season5001">Season</div>
                    <div className="year500">(Year)</div>
                  </div>
                  <div className="plotsynopsis100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor igap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);gap: var(--gap-mini);
                  </div>
                </div>
                <div className="subsublayout100">
                  <img className="line-icon100" alt="" src="/line.svg" />
                  <div className="credits100">
                    <p className="avgduration">Director: John Doe</p>
                    <p className="avgduration">
                      Writers: John Doe, Jane Doe, John Doe
                    </p>
                    <p className="avgduration">{`Cast: John Doe, Jane Doe, John Doe `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewlist5">
            <div className="reviews1">Reviews</div>
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
            <div className="see-all-reviews1" onClick={onSeeAllReviewsClick}>
              See All Reviews
            </div>
            <div className="reviews1">More Like This</div>
            <div className="more-like-this">
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

export default FrameComponent22;
