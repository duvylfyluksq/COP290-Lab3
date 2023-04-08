import React from 'react';
import { useMemo } from "react";
import "./MoreMoviesLikeThisContainer.css";

const MoreMoviesLikeThisContainer = ({
  propCursor,
  onMovieCardContainerClick,
  onTVShowCardContainerClick,
  onMovieCardContainer1Click,
  onTVShowCardContainer1Click,
  onMovieCardContainer2Click,
  onTVShowCardContainer2Click,
  onTVShowCardContainer3Click,
}) => {
  const tVShowCardStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className="moremovieslikethis50">
      <div className="moviecard" onClick={onMovieCardContainerClick}>
        <img className="moviecard-icon" alt="" src="/moviecard@2x.png" />
        <div className='gradient-overlay'></div>
        <div className="linearfill">
          <div className="details">
            <div className="rating14">
              <div className="xy106">x.y/10</div>
              <img className="vector-icon30" alt="" src="/vector19.svg" />
            </div>
            <div className="title11">Title</div>
          </div>
        </div>
      </div>
      <div className="moviecard" onClick={onTVShowCardContainerClick}>
        <img className="moviecard-icon" alt="" src="/moviecard@2x.png" />
        <div className='gradient-overlay'></div>
        <div className="linearfill1">
          <div className="details1">
            <div className="rating14">
              <div className="xy106">x.y/10</div>
              <img className="vector-icon30" alt="" src="/vector19.svg" />
            </div>
            <div className="title11">Title</div>
            <div className="season3">Season z</div>
          </div>
        </div>
      </div>
      <div className="moviecard" onClick={onMovieCardContainer1Click}>
        <img className="moviecard-icon" alt="" src="/moviecard@2x.png" />
        <div className='gradient-overlay'></div>
        <div className="linearfill">
          <div className="details">
            <div className="rating14">
              <div className="xy106">x.y/10</div>
              <img className="vector-icon30" alt="" src="/vector19.svg" />
            </div>
            <div className="title11">Title</div>
          </div>
        </div>
      </div>
      <div className="moviecard" onClick={onTVShowCardContainer1Click}>
        <img className="moviecard-icon" alt="" src="/moviecard@2x.png" />
        <div className='gradient-overlay'></div>
        <div className="linearfill1">
          <div className="details1">
            <div className="rating14">
              <div className="xy106">x.y/10</div>
              <img className="vector-icon30" alt="" src="/vector19.svg" />
            </div>
            <div className="title11">Title</div>
            <div className="season3">Season z</div>
          </div>
        </div>
      </div>
      <div className="moviecard" onClick={onMovieCardContainer2Click}>
        <img className="moviecard-icon" alt="" src="/moviecard@2x.png" />
        <div className='gradient-overlay'></div>
        <div className="linearfill">
          <div className="details">
            <div className="rating14">
              <div className="xy106">x.y/10</div>
              <img className="vector-icon30" alt="" src="/vector19.svg" />
            </div>
            <div className="title11">Title</div>
          </div>
        </div>
      </div>
      <div className="moviecard" onClick={onTVShowCardContainer2Click}>
        <img className="moviecard-icon" alt="" src="/moviecard@2x.png" />
        <div className='gradient-overlay'></div>
        <div className="linearfill1">
          <div className="details1">
            <div className="rating14">
              <div className="xy106">x.y/10</div>
              <img className="vector-icon30" alt="" src="/vector19.svg" />
            </div>
            <div className="title11">Title</div>
            <div className="season3">Season z</div>
          </div>
        </div>
      </div>
      <div
        className="moviecard"
        onClick={onTVShowCardContainer3Click}
        style={tVShowCardStyle}
      >
        <img className="moviecard-icon" alt="" src="/moviecard@2x.png" />
        <div className='gradient-overlay'></div>
        <div className="linearfill1">
          <div className="details1">
            <div className="rating14">
              <div className="xy106">x.y/10</div>
              <img className="vector-icon30" alt="" src="/vector19.svg" />
            </div>
            <div className="title11">Title</div>
            <div className="season3">Season z</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreMoviesLikeThisContainer;
