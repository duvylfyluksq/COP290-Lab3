import React from 'react';
import CreateAccountContainer from "../components/CreateAccountContainer";
import "./SignUp.css";
import MoviesContainer from '../components/MoviesContainer';

const SignUp = () => {
  return (
    <div className="signup">
      <div className="body20">
        <CreateAccountContainer />
      </div>
      <MoviesContainer/>
    </div>
  );
};

export default SignUp;
