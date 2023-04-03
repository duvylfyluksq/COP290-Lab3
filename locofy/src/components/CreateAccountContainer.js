import { useCallback } from "react";
import WelcomeBackContainer from "./WelcomeBackContainer";
import { useNavigate } from "react-router-dom";
import "./CreateAccountContainer.css";

const CreateAccountContainer = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/continue");
  }, [navigate]);

  return (
    <div className="signintile2">
      <WelcomeBackContainer
        welcomeBackText="/vector41.svg"
        createAccountText="Create Account!"
        vectorWidth="314px"
        propWidth="289px"
      />
      <form className="fields2">
        <div className="username4">
          <div className="username5">
            <p className="username6">Username</p>
          </div>
        </div>
        <div className="password">
          <div className="password1">Password</div>
          <div className="hideorshowpassword">
            <img
              className="showpasswordicon"
              alt=""
              src="/showpasswordicon.svg"
            />
          </div>
        </div>
        <div className="password">
          <div className="password2">Confirm Password</div>
          <div className="hideorshowpassword">
            <img
              className="showpasswordicon"
              alt=""
              src="/showpasswordicon.svg"
            />
          </div>
        </div>
      </form>
      <div className="footer1">
        <button className="signup2" onClick={onSignUpClick}>
          <div className="login3">Sign Up</div>
        </button>
        <div className="subfooter1">
          <div className="check1">Already have an account?</div>
          <div className="signin1">Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountContainer;
