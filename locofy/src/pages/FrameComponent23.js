import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MoreMoviesLikeThisContainer from "../components/MoreMoviesLikeThisContainer";
import NavbarContainer from '../components/NavbarContainer';
import "./FrameComponent10.css";
import ReviewForm from '../components/ReviewForm';

const FrameComponent23 = () => {
  const navigate = useNavigate();

  const onPictureIconClick = useCallback(() => {
    navigate("/duvylfyluksqin");
  }, [navigate]);

  const onDuvylfyluksqTextClick = useCallback(() => {
    navigate("/duvylfyluksqin");
  }, [navigate]);

  const onPictureIcon1Click = useCallback(() => {
    navigate("/duvylfyluksqin");
  }, [navigate]);

  const onDuvylfyluksqText1Click = useCallback(() => {
    navigate("/duvylfyluksqin");
  }, [navigate]);

  const onPictureIcon2Click = useCallback(() => {
    navigate("/duvylfyluksqin");
  }, [navigate]);

  const onDuvylfyluksqText2Click = useCallback(() => {
    navigate("/duvylfyluksqin");
  }, [navigate]);

  const onMovieCardContainerClick = useCallback(() => {
    navigate("/tvshowin");
  }, [navigate]);

  const onTVShowCardContainerClick = useCallback(() => {
    navigate("/tvshowin");
  }, [navigate]);

  const onMovieCardContainer1Click = useCallback(() => {
    navigate("/tvshowin");
  }, [navigate]);

  const onTVShowCardContainer1Click = useCallback(() => {
    navigate("/tvshowin");
  }, [navigate]);

  const onMovieCardContainer2Click = useCallback(() => {
    navigate("/tvshowin");
  }, [navigate]);

  const onTVShowCardContainer2Click = useCallback(() => {
    navigate("/tvshowin");
  }, [navigate]);

  const onTVShowCardContainer3Click = useCallback(() => {
    navigate("/tvshowin");
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
    navigate("/bobdylaninself")
  }, [navigate]);

  const onSeeAllReviewsClick = useCallback(() => {
    navigate("/reviewsmovieout");
  }, [navigate]);

  return (
    <div className="movie-out-parent">
      <div className="movie-out">
        <div className="body10">
          <div className="moviedescription50">
            <div className="left50">
              <img className="joker-icon70" alt="" src="/joker1@2x.png" />
            </div>
            <div className="right50">
              <div className="descriptionheader50">
                <div className="rating">
                  <div className="xy10">x.y/10</div>
                  <img className="vector-icon60" alt="" src="/vector2.svg" />
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
              <div className="sublayout50">
                <div className="descriptionbody">
                  <div className="title100">
                    <div className="title200">Title</div>
                    <div className="year500">(Year)</div>
                  </div>
                  <div className="plotsynopsis50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor irwohferifhowhfdsohjfowefwfewbewuhgdewugefwigfiewuewhidsonx
                    hewjoifjewpkfewjsk ksjbdiwbxiw iforwjocdkcndwojs xiwjoc dwowdno cdwnciwn cozzidw   hewjoifjewpkfewjskcbwdi icdwocj 
                    dncdi cdj nco dodxk ncod xnceoipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor irwohferifhowhfdsohjfowefwfewbewuhgdewugefwigfiewuewhidsonx
                    hewjoifjewpkfewjsk ksjbdiwbxiw iforwjocdkcndwojs xiwjoc dwowdno cdwnciwn cozzidw   hewjoifjewpkfewjskcbwdi icdwocj 
                    dncdi cdj nco dodxk ncod xnceo
                  </div>
                </div>
                <div className="subsublayout50">
                  <img className="line-icon50" alt="" src="/line.svg" />
                  <div className="credits50">
                    <p className="director-john-doe">Director: John Doe</p>
                    {/* <p className="director-john-doe">&nbsp;</p> */}
                    <p className="director-john-doe">
                      Writers: John Doe, Jane Doe, John Doe
                    </p>
                    {/* <p className="director-john-doe">&nbsp;</p> */}
                    <p className="director-john-doe">{`Cast: John Doe, Jane Doe, John Doe `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewlist4">
            <div className="reviews">Reviews</div>
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
            <div className="see-all-reviews" onClick={onSeeAllReviewsClick}>
              See All Reviews
            </div>
            <div className="reviews">More Like This</div>
            <div className="more-like-this">
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

export default FrameComponent23;
