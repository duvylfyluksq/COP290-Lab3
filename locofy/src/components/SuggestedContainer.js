import React from 'react';
import { useCallback } from "react";
import "./SuggestedContainer.css";

const SuggestedContainer = ({
  onMovieCardContainerClick,
  onTVShowCardContainerClick,
  onMovieCardContainer1Click,
  onTVShowCardContainer1Click,
  onMovieCardContainer2Click,
  onTVShowCardContainer2Click,
  onTVShowCardContainer3Click
}) => {

  return (
    <div className="recommendations">
      <div className="recommendations1">Recommended For You</div>
      <div className="recommendations2">
        <div className="moviecard3" onClick={onMovieCardContainerClick}>
          <img className="moviecard-icon3" alt="" src="/moviecard@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill10">
            <div className="details10">
              <div className="rating25">
                <div className="xy1015">x.y/10</div>
                <img className="vector-icon45" alt="" src="/vector19.svg" />
              </div>
              <div className="title20">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard3" onClick={onTVShowCardContainerClick}>
          <img className="moviecard-icon3" alt="" src="/tvshowcard1@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill11">
            <div className="details11">
              <div className="rating25">
                <div className="xy1015">x.y/10</div>
                <img className="vector-icon45" alt="" src="/vector34.svg" />
              </div>
              <div className="title20">Title</div>
              <div className="season8">Season z</div>
            </div>
          </div>
        </div>
        <div className="moviecard3" onClick={onMovieCardContainer1Click}>
          <img className="moviecard-icon3" alt="" src="/moviecard@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill10">
            <div className="details10">
              <div className="rating25">
                <div className="xy1015">x.y/10</div>
                <img className="vector-icon45" alt="" src="/vector19.svg" />
              </div>
              <div className="title20">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard3" onClick={onTVShowCardContainer1Click}>
          <img className="moviecard-icon3" alt="" src="/tvshowcard1@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill11">
            <div className="details11">
              <div className="rating25">
                <div className="xy1015">x.y/10</div>
                <img className="vector-icon45" alt="" src="/vector34.svg" />
              </div>
              <div className="title20">Title</div>
              <div className="season8">Season z</div>
            </div>
          </div>
        </div>
        <div className="moviecard3" onClick={onMovieCardContainer2Click}>
          <img className="moviecard-icon3" alt="" src="/moviecard@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill10">
            <div className="details10">
              <div className="rating25">
                <div className="xy1015">x.y/10</div>
                <img className="vector-icon45" alt="" src="/vector19.svg" />
              </div>
              <div className="title20">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard3" onClick={onTVShowCardContainer2Click}>
          <img className="moviecard-icon3" alt="" src="/tvshowcard1@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill11">
            <div className="details11">
              <div className="rating25">
                <div className="xy1015">x.y/10</div>
                <img className="vector-icon45" alt="" src="/vector34.svg" />
              </div>
              <div className="title20">Title</div>
              <div className="season8">Season z</div>
            </div>
          </div>
        </div>
        <div className="moviecard3" onClick={onTVShowCardContainer3Click}>
          <img className="moviecard-icon3" alt="" src="/moviecard@2x.png" />
          <div className='gradient-overlay'></div>
          <div className="linearfill11">
            <div className="details11">
              <div className="rating25">
                <div className="xy1015">x.y/10</div>
                <img className="vector-icon45" alt="" src="/vector19.svg" />
              </div>
              <div className="title20">Title</div>
              <div className="season8">Season z</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedContainer;
