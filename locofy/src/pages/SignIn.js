import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeBackContainer from "../components/WelcomeBackContainer";
import FooterContainer from "../components/FooterContainer";
import LinksContainer1 from "../components/LinksContainer1";
import "./SignIn.css";

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
      <div className="signintile">
        <WelcomeBackContainer
          welcomeBackText="/vector37.svg"
          createAccountText="Welcome Back!"
        />
        <input className="fields" type="text" />
        <FooterContainer
          onLoginContainerClick={onLoginContainerClick}
          onSignUpTextClick={onSignUpTextClick}
        />
      </div>
      <div className="body15" />
      <LinksContainer1
        dimensionsId="/vector38.svg"
        propTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        propWebkitTextStroke="unset"
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
