import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SuggestedContainer from "../components/SuggestedContainer";
import MovieListContainer from "../components/MovieListContainer";
import TVShowsContainer from "../components/TVShowsContainer";
import NewReleasesContainer from "../components/NewReleasesContainer";
import TrendingMoviesContainer from "../components/TrendingMoviesContainer";
import TrendingContainer from "../components/TrendingContainer";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent16.css";

const FrameComponent16 = () => {
  const navigate = useNavigate();

  const onTVShowCardContainer4Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowCardContainer5Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowCardContainer6Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowCardContainer7Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowCardContainer8Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onMovieCardContainer9Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onTVShowCardContainer9Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer10Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onTVShowCardContainer10Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer11Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onTVShowCardContainer11Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onTVShowCardContainer12Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer12Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer13Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer14Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer15Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer16Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onMovieCardContainer17Click = useCallback(() => {
    // Please sync "Movie-In" to the project
  }, []);

  const onTVShowCardContainer13Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowCardContainer14Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowCardContainer15Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowCardContainer16Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onTVShowCardContainer17Click = useCallback(() => {
    // Please sync "TVShow-In" to the project
  }, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedin");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    // Please sync "MovieBrowse-In" to the project
  }, []);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowsein");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    // Please sync "Genres-In" to the project
  }, []);

  const onFluentcompose24FilledClick = useCallback(() => {
    navigate("/makepost");
  }, [navigate]);

  const onProfileMenuClick = useCallback(() => {
    // Please sync "UserPage/InSelf" to the project
  }, []);

  return (
    <div className="home-signedin-parent">
      <div className="home-signedin">
        <div className="body13">
          <SuggestedContainer />
          <MovieListContainer />
          <TVShowsContainer
            onTVShowCardContainer4Click={onTVShowCardContainer4Click}
            onTVShowCardContainer5Click={onTVShowCardContainer5Click}
            onTVShowCardContainer6Click={onTVShowCardContainer6Click}
            onTVShowCardContainer7Click={onTVShowCardContainer7Click}
            onTVShowCardContainer8Click={onTVShowCardContainer8Click}
          />
          <NewReleasesContainer
            onMovieCardContainer9Click={onMovieCardContainer9Click}
            onTVShowCardContainer9Click={onTVShowCardContainer9Click}
            onMovieCardContainer10Click={onMovieCardContainer10Click}
            onTVShowCardContainer10Click={onTVShowCardContainer10Click}
            onMovieCardContainer11Click={onMovieCardContainer11Click}
            onTVShowCardContainer11Click={onTVShowCardContainer11Click}
            onTVShowCardContainer12Click={onTVShowCardContainer12Click}
          />
          <TrendingMoviesContainer
            onMovieCardContainer12Click={onMovieCardContainer12Click}
            onMovieCardContainer13Click={onMovieCardContainer13Click}
            onMovieCardContainer14Click={onMovieCardContainer14Click}
            onMovieCardContainer15Click={onMovieCardContainer15Click}
            onMovieCardContainer16Click={onMovieCardContainer16Click}
            onMovieCardContainer17Click={onMovieCardContainer17Click}
          />
          <TrendingContainer
            onTVShowCardContainer13Click={onTVShowCardContainer13Click}
            onTVShowCardContainer14Click={onTVShowCardContainer14Click}
            onTVShowCardContainer15Click={onTVShowCardContainer15Click}
            onTVShowCardContainer16Click={onTVShowCardContainer16Click}
            onTVShowCardContainer17Click={onTVShowCardContainer17Click}
          />
        </div>
        <NavbarContainer
          dimensions="/vector35.svg"
          dimensionsText="/fluentcompose24filled1.svg"
          dimensionsId="/profilemenu8.svg"
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

export default FrameComponent16;
