import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeBackContainer from "../components/WelcomeBackContainer";
import FooterContainer from "../components/FooterContainer";
import LinksContainer1 from "../components/LinksContainer1";
import "./SignIn.css";
import MoviesContainer from '../components/MoviesContainer';

const SignIn = () => {
  const navigate = useNavigate();

  const onLoginContainerClick = useCallback(() => {
    navigate("/homesignedin");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
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
    <div className="signin">
       <div className="body15">
      <div className="signintile">
        <WelcomeBackContainer
          welcomeBackText="/vector37.svg"
          createAccountText="Welcome Back!"
        />
        <input type="text" className="password" placeholder="Username" />
        <input type="password" className="password" placeholder="Password" />
        <FooterContainer
          onLoginContainerClick={onLoginContainerClick}
          onSignUpTextClick={onSignUpTextClick}
        />
      </div>
      </div>
      <MoviesContainer
        coordinates="/vector38.svg"
        onLogoClick={onLogoClick}
        onMoviesTextClick={onMoviesTextClick}
        onTVShowsTextClick={onTVShowsTextClick}
        onGenresText1Click={onGenresTextClick}
        onNavbarRHSContainerClick={onNavbarRHSContainerClick}
      />
    </div>
  );
};

export default SignIn;
