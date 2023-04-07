import React from 'react';
import { useMemo } from "react";
import "./TrendingContainer.css";

const TrendingContainer = ({
  propHeight,
  propFlexShrink,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  onTVShowCardContainer13Click,
  onTVShowCardContainer14Click,
  onTVShowCardContainer15Click,
  onTVShowCardContainer16Click,
  onTVShowCardContainer17Click,
}) => {
  const trendingTVShowsStyle = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propFlexShrink, propAlignSelf]);

  const trendingTVShows1Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);

  return (
    <div className="trending-tv-shows" style={trendingTVShowsStyle}>
      <div className="trending-tv-shows-container">Trending TV Shows
      </div>
      <div className="trending-tv-shows2" style={trendingTVShows1Style}>
        <div className="tvshowcard17" onClick={onTVShowCardContainer13Click}>
          <img className="tvshowcard-icon20" alt="" src="/moviecard@2x.png" />
          <div class="gradient-overlay"></div>
          <div className="linearfill41">
            <div className="details41">
              <div className="rating56">
                <div className="xy1046">x.y/10</div>
                <img className="vector-icon76" alt="" src="/vector19.svg" />
              </div>
              <div className="title51">Title</div>
              <div className="season21">Season z</div>
            </div>
          </div>
        </div>
        <div className="tvshowcard17" onClick={onTVShowCardContainer14Click}>
          <img className="tvshowcard-icon20" alt="" src="/tvshowcard1@2x.png" />
          <div class="gradient-overlay"></div>
          <div className="linearfill41">
            <div className="details41">
              <div className="rating56">
                <div className="xy1046">x.y/10</div>
                <img className="vector-icon76" alt="" src="/vector34.svg" />
              </div>
              <div className="title51">Title</div>
              <div className="season21">Season z</div>
            </div>
          </div>
        </div>
        <div className="tvshowcard17" onClick={onTVShowCardContainer15Click}>
          <img className="tvshowcard-icon20" alt="" src="/moviecard@2x.png" />
          <div class="gradient-overlay"></div>
          <div className="linearfill41">
            <div className="details41">
              <div className="rating56">
                <div className="xy1046">x.y/10</div>
                <img className="vector-icon76" alt="" src="/vector19.svg" />
              </div>
              <div className="title51">Title</div>
              <div className="season21">Season z</div>
            </div>
          </div>
        </div>
        <div className="tvshowcard17" onClick={onTVShowCardContainer16Click}>
          <img className="tvshowcard-icon20" alt="" src="/tvshowcard1@2x.png" />
          <div class="gradient-overlay"></div>
          <div className="linearfill41">
            <div className="details41">
              <div className="rating56">
                <div className="xy1046">x.y/10</div>
                <img className="vector-icon76" alt="" src="/vector34.svg" />
              </div>
              <div className="title51">Title</div>
              <div className="season21">Season z</div>
            </div>
          </div>
        </div>
        <div className="tvshowcard17" onClick={onTVShowCardContainer17Click}>
          <img className="tvshowcard-icon20" alt="" src="/moviecard@2x.png" />
          <div class="gradient-overlay"></div>
          <div className="linearfill41">
            <div className="details41">
              <div className="rating56">
                <div className="xy1046">x.y/10</div>
                <img className="vector-icon76" alt="" src="/vector19.svg" />
              </div>
              <div className="title51">Title</div>
              <div className="season21">Season z</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingContainer;
