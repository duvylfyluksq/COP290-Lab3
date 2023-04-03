import { useMemo } from "react";
import "./NewReleasesContainer.css";

const NewReleasesContainer = ({
  propHeight,
  propFlexShrink,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  onMovieCardContainer9Click,
  onTVShowCardContainer9Click,
  onMovieCardContainer10Click,
  onTVShowCardContainer10Click,
  onMovieCardContainer11Click,
  onTVShowCardContainer11Click,
  onTVShowCardContainer12Click,
}) => {
  const newReleasesStyle = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propFlexShrink, propAlignSelf]);

  const newReleases1Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);

  return (
    <div className="new-releases" style={newReleasesStyle}>
      <div className="new-releases1">
        <p className="new-releases2">New Releases</p>
      </div>
      <div className="new-releases3" style={newReleases1Style}>
        <div className="moviecard12" onClick={onMovieCardContainer9Click}>
          <img className="moviecard-icon12" alt="" src="/moviecard@2x.png" />
          <div className="linearfill28">
            <div className="details28">
              <div className="rating43">
                <div className="xy1033">x.y/10</div>
                <img className="vector-icon63" alt="" src="/vector19.svg" />
              </div>
              <div className="title38">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard12" onClick={onTVShowCardContainer9Click}>
          <img className="moviecard-icon12" alt="" src="/tvshowcard1@2x.png" />
          <div className="linearfill29">
            <div className="details29">
              <div className="rating43">
                <div className="xy1033">x.y/10</div>
                <img className="vector-icon63" alt="" src="/vector34.svg" />
              </div>
              <div className="title38">Title</div>
              <div className="season17">Season z</div>
            </div>
          </div>
        </div>
        <div className="moviecard12" onClick={onMovieCardContainer10Click}>
          <img className="moviecard-icon12" alt="" src="/moviecard@2x.png" />
          <div className="linearfill28">
            <div className="details28">
              <div className="rating43">
                <div className="xy1033">x.y/10</div>
                <img className="vector-icon63" alt="" src="/vector19.svg" />
              </div>
              <div className="title38">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard12" onClick={onTVShowCardContainer10Click}>
          <img className="moviecard-icon12" alt="" src="/tvshowcard1@2x.png" />
          <div className="linearfill29">
            <div className="details29">
              <div className="rating43">
                <div className="xy1033">x.y/10</div>
                <img className="vector-icon63" alt="" src="/vector34.svg" />
              </div>
              <div className="title38">Title</div>
              <div className="season17">Season z</div>
            </div>
          </div>
        </div>
        <div className="moviecard12" onClick={onMovieCardContainer11Click}>
          <img className="moviecard-icon12" alt="" src="/moviecard@2x.png" />
          <div className="linearfill28">
            <div className="details28">
              <div className="rating43">
                <div className="xy1033">x.y/10</div>
                <img className="vector-icon63" alt="" src="/vector19.svg" />
              </div>
              <div className="title38">Title</div>
            </div>
          </div>
        </div>
        <div className="moviecard12" onClick={onTVShowCardContainer11Click}>
          <img className="moviecard-icon12" alt="" src="/tvshowcard1@2x.png" />
          <div className="linearfill29">
            <div className="details29">
              <div className="rating43">
                <div className="xy1033">x.y/10</div>
                <img className="vector-icon63" alt="" src="/vector34.svg" />
              </div>
              <div className="title38">Title</div>
              <div className="season17">Season z</div>
            </div>
          </div>
        </div>
        <div className="moviecard12" onClick={onTVShowCardContainer12Click}>
          <img className="moviecard-icon12" alt="" src="/moviecard@2x.png" />
          <div className="linearfill29">
            <div className="details29">
              <div className="rating43">
                <div className="xy1033">x.y/10</div>
                <img className="vector-icon63" alt="" src="/vector19.svg" />
              </div>
              <div className="title38">Title</div>
              <div className="season17">Season z</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleasesContainer;
