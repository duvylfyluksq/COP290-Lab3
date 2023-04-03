import { useMemo } from "react";
import "./WelcomeBackContainer.css";

const WelcomeBackContainer = ({
  welcomeBackText,
  createAccountText,
  vectorWidth,
  propWidth,
}) => {
  const headerStyle = useMemo(() => {
    return {
      width: vectorWidth,
    };
  }, [vectorWidth]);

  const welcomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="header3" style={headerStyle}>
      <div className="logo6">
        <img className="vector-icon86" alt="" src={welcomeBackText} />
      </div>
      <div className="welcome" style={welcomeStyle}>
        {createAccountText}
      </div>
    </div>
  );
};

export default WelcomeBackContainer;
