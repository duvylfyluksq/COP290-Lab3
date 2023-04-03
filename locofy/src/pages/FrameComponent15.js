import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MovieDescriptionContainerBrows from "../components/MovieDescriptionContainerBrows";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent15.css";

const FrameComponent15 = () => {
  const navigate = useNavigate();

  const onMovieDescriptionBrowsePageContainerClick = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer1Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer2Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer3Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer4Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer5Click = useCallback(() => {
    navigate("/movieout");
  }, [navigate]);

  const onMovieDescriptionBrowsePageContainer6Click = useCallback(() => {
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

  return (
    <div className="moviebrowse-out-parent">
      <div className="moviebrowse-out">
        <div className="scrolllist2">
          <MovieDescriptionContainerBrows
            productId="/vector31.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainerClick
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector31.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer1Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector31.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer2Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector32.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer3Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector32.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer4Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector32.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer5Click
            }
          />
          <MovieDescriptionContainerBrows
            productId="/vector32.svg"
            onMovieDescriptionBrowsePageContainerClick={
              onMovieDescriptionBrowsePageContainer6Click
            }
          />
        </div>
        <div className="left2">
          <div className="sort">
            <div className="sortbyheader">
              <div className="sort-by">Sort By</div>
              <div className="ascendingdescendinginteraction">
                <img className="vector-icon12" alt="" src="/vector25.svg" />
                <img className="vector-icon12" alt="" src="/vector26.svg" />
              </div>
            </div>
            <div className="sortfieldsinteraction">
              <div className="horizontallist">
                <div className="popularity">
                  <div className="button" />
                  <div className="rating3">Rating</div>
                </div>
                <div className="popularity">
                  <div className="button" />
                  <div className="popularity1">Popularity</div>
                </div>
              </div>
              <div className="horizontallist1">
                <div className="popularity">
                  <div className="button" />
                  <div className="releasedate1">Release Date</div>
                </div>
                <div className="popularity">
                  <div className="button" />
                  <div className="alphabetical">Alphabetical</div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="filterheader">
              <div className="filter1">Filter</div>
              <img className="vector-icon14" alt="" src="/vector27.svg" />
            </div>
            <div className="genretags">
              <div className="horizontalrow">
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
                <div className="filterbrowseinteraction">
                  <div className="adventure">Adventure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoviesContainer
          coordinates="/vector33.svg"
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

export default FrameComponent15;
