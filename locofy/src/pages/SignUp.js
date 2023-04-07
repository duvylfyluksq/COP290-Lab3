import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CreateAccountContainer from "../components/CreateAccountContainer";
import "./SignUp.css";
import MoviesContainer from '../components/MoviesContainer';

const SignUp = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
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
  
  return (
    <div className="signup">
      <div className="body20">
        <CreateAccountContainer />
      </div>
      <MoviesContainer
        coordinates="/vector42.svg"
        onLogoClick={onLogoClick}
        onMoviesTextClick={onMoviesTextClick}
        onTVShowsTextClick={onTVShowsTextClick}
        onGenresText1Click={onGenresTextClick}
        onNavbarRHSContainerClick={onNavbarRHSContainerClick}
      />
    </div>
  );
};

export default SignUp;
