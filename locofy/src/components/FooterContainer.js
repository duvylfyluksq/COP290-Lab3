import "./FooterContainer.css";

const FooterContainer = ({ onLoginContainerClick, onSignUpTextClick }) => {
  return (
    <div className="footer">
      <div className="login1" onClick={onLoginContainerClick}>
        <div className="login2">Login</div>
      </div>
      <div className="subfooter">
        <div className="check">Don’t have an account?</div>
        <div className="signup1" onClick={onSignUpTextClick}>
          Sign Up Now
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
