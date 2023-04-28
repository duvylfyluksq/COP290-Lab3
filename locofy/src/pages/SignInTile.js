import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeBackContainer from "../components/WelcomeBackContainer";
import FooterContainer from "../components/FooterContainer";
import "./SignInTile.css";

const SignInTile = () => {
  const navigate = useNavigate();

  const onLoginContainerClick = useCallback(() => {
    navigate("/homesignedin");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);
  
  return (
    <div className="signintile1">
      <WelcomeBackContainer
        welcomeBackText="/vector43.svg"
        createAccountText="Welcome Back!"
        vectorWidth="unset"
        propWidth="282px"
      />
      <input className="fields1" type="text" />
      <FooterContainer
        onLoginContainerClick={onLoginContainerClick}
        onSignUpTextClick={onSignUpTextClick}
      />
    </div>
  );
};

export default SignInTile;
