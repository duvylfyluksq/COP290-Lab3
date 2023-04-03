import { useMemo } from "react";
import "./Navbar2.css";

const Navbar2 = ({
  productIds,
  propJustifyContent,
  propGap,
  onLogoClick,
  onMoviesTextClick,
  onTVShowsTextClick,
  onGenresTextClick,
  onNavbarRHSContainerClick,
}) => {
  const navbarLHSStyle = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      gap: propGap,
    };
  }, [propJustifyContent, propGap]);

  return (
    <div className="navbar5">
      <button className="logo5" onClick={onLogoClick}>
        <img className="vector-icon83" alt="" src={productIds} />
      </button>
      <div className="navbar-lhs5" style={navbarLHSStyle}>
        <div className="movies10" onClick={onMoviesTextClick}>
          <p className="movies11">Movies</p>
        </div>
        <div className="tv-shows5" onClick={onTVShowsTextClick}>
          TV Shows
        </div>
        <div className="genres12" onClick={onGenresTextClick}>
          Genres
        </div>
      </div>
      <div className="right12">
        <div className="searchbar5">
          <img className="vector-icon84" alt="" src="/vector23.svg" />
          <div className="search-movies-tv5">Search Movies, TV Shows</div>
        </div>
        <div className="navbar-rhs5" onClick={onNavbarRHSContainerClick}>
          <img className="vector-icon85" alt="" src="/vector24.svg" />
          <div className="sign-in2">Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
