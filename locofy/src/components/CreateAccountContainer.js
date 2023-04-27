import React,{ useState,useCallback,useEffect } from 'react';
import WelcomeBackContainer from "./WelcomeBackContainer";
import { useNavigate } from "react-router-dom";
import "./CreateAccountContainer.css";
import {UserApi} from '../api/UserApi';
import {UserSignupBody} from '../model/UserSignupBody';
import {User} from  '../model/User';

const CreateAccountContainer = () => {
  
  const navigate = useNavigate();

  const api = new UserApi();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const onSignUpClick = useCallback(() => {

    const randomNumber = Math.floor(Math.random() * 1338) + 1;
    const pfp = `${randomNumber}.jpeg`;
    const userSignupBody = new UserSignupBody(username, password, confirm_password, pfp, "a", ["a","a","a"]);
    const opts = {
      body: userSignupBody,
    };
    api.userSignupPost(opts, (error, data, response) => {
      if (error) {
        console.error("Error occurred:", error);
        return;
      }
      if (response.status !== 200) {
        console.log(response.body);
      } else {
        console.log("Success, going to select bio and interests")
        const user = User.constructFromObject(response.body);
        navigate('/continue', {state: {user}});
      }
    });
  }, [username, password, confirm_password,navigate,api]);

  const image = document.getElementById("your-img");
  function toggleVisibility1() {  
    var getPassword = document.getElementById("Password1");
    var image = document.getElementById("your-img");
    if (getPassword.type === "password") {  
      getPassword.type = "text";
      image.setAttribute("src", "/hidepasswordicon.svg");
    } else {  
      getPassword.type = "password";
      image.setAttribute("src", "/showpasswordicon.svg");
    }  
  };
  function toggleVisibility2() {  
    var confPassword = document.getElementById("Password2");
    var image = document.getElementById("my-img");
    if (confPassword.type === "password") {  
      confPassword.type = "text";
      image.setAttribute("src", "/hidepasswordicon.svg");
    } else {  
      confPassword.type = "password";
      image.setAttribute("src", "/showpasswordicon.svg");
    }  
  };
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
            <input type="text" className="usrname" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          </div>
        </div>
        <div className="password">
        <input type="password" id="Password1" className="usrname" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <div className="hideorshowpassword">
            <img
              id="your-img"
              className="showpasswordicon"
              alt=""
              src="/showpasswordicon.svg"
              onClick={() => toggleVisibility1()}
            />
          </div>
        </div>
        <div className="password">
        <input type="password" id="Password2" className="usrname" placeholder="Confirm Password" onChange={(e) => setConfirm_password(e.target.value)} />
          <div className="hideorshowpassword">
            <img
              id="my-img"
              className="showpasswordicon"
              alt=""
              src="/showpasswordicon.svg"
              onClick={() => toggleVisibility2()}
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
          <a href="./SignIn" className="signin1">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountContainer;
