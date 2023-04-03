import { useMemo } from "react";
import "./TVShowsContainer.css";

const TVShowsContainer = ({
  propHeight,
  propFlexShrink,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  onTVShowCardContainer4Click,
  onTVShowCardContainer5Click,
  onTVShowCardContainer6Click,
  onTVShowCardContainer7Click,
  onTVShowCardContainer8Click,
}) => {
  const topTVShowsStyle = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propFlexShrink, propAlignSelf]);

  const topTVShows1Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);

  return (
    <div className="top-tv-shows" style={topTVShowsStyle}>
      <div className="top-tv-shows1">Top TV Shows</div>
      <div className="top-tv-shows2" style={topTVShows1Style}>
        <div className="tvshowcard8" onClick={onTVShowCardContainer4Click}>
          <img className="tvshowcard-icon11" alt="" src="/moviecard@2x.png" />
          <div className="linearfill23">
            <div className="details23">
              <div className="rating38">
                <div className="xy1028">x.y/10</div>
                <img className="vector-icon58" alt="" src="/vector19.svg" />
              </div>
              <div className="title33">Title</div>
              <div className="season12">Season z</div>
            </div>
          </div>
        </div>
        <div className="tvshowcard8" onClick={onTVShowCardContainer5Click}>
          <img className="tvshowcard-icon11" alt="" src="/tvshowcard1@2x.png" />
          <div className="linearfill23">
            <div className="details23">
              <div className="rating38">
                <div className="xy1028">x.y/10</div>
                <img className="vector-icon58" alt="" src="/vector34.svg" />
              </div>
              <div className="title33">Title</div>
              <div className="season12">Season z</div>
            </div>
          </div>
        </div>
        <div className="tvshowcard8" onClick={onTVShowCardContainer6Click}>
          <img className="tvshowcard-icon11" alt="" src="/moviecard@2x.png" />
          <div className="linearfill23">
            <div className="details23">
              <div className="rating38">
                <div className="xy1028">x.y/10</div>
                <img className="vector-icon58" alt="" src="/vector19.svg" />
              </div>
              <div className="title33">Title</div>
              <div className="season12">Season z</div>
            </div>
          </div>
        </div>
        <div className="tvshowcard8" onClick={onTVShowCardContainer7Click}>
          <img className="tvshowcard-icon11" alt="" src="/tvshowcard1@2x.png" />
          <div className="linearfill23">
            <div className="details23">
              <div className="rating38">
                <div className="xy1028">x.y/10</div>
                <img className="vector-icon58" alt="" src="/vector34.svg" />
              </div>
              <div className="title33">Title</div>
              <div className="season12">Season z</div>
            </div>
          </div>
        </div>
        <div className="tvshowcard8" onClick={onTVShowCardContainer8Click}>
          <img className="tvshowcard-icon11" alt="" src="/moviecard@2x.png" />
          <div className="linearfill23">
            <div className="details23">
              <div className="rating38">
                <div className="xy1028">x.y/10</div>
                <img className="vector-icon58" alt="" src="/vector19.svg" />
              </div>
              <div className="title33">Title</div>
              <div className="season12">Season z</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowsContainer;
