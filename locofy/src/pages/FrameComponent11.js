import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReviewContainer from "../components/ReviewContainer";
import MoreMoviesLikeThisContainer from "../components/MoreMoviesLikeThisContainer";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent11.css";

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
    navigate("/tvshowbrowseout");
  }, [navigate]);

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
            <div className="reviews139">
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
        <MoviesContainer
          coordinates="/vector21.svg"
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

export default FrameComponent11;
