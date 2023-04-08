import React,{ useState,useCallback,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import WelcomeBackContainer from "../components/WelcomeBackContainer";
import FooterContainer from "../components/FooterContainer";
import LinksContainer1 from "../components/LinksContainer1";
import "./SignIn.css";
import MoviesContainer from '../components/MoviesContainer';
import {UserApi} from '../api/UserApi';
import {UserSigninBody} from '../model/UserSigninBody';
import {User} from  '../model/User';


const SignIn = () => {
  
  const navigate = useNavigate();

  const api = new UserApi();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginContainerClick = useCallback(() => {
    const userSigninBody = new UserSigninBody(username, password);
    const opts = {
      body: userSigninBody,
    };
    api.userSigninPost(opts, (error, data, response) => {
      if (error) {
        console.error("Error occurred:", error);
        return;
      }
      if (response.status !== 200) {
        console.log(response.body);
      } else {
        console.log(response.body)
        const user = User.constructFromObject(response.body);
        navigate('/homesignedin', {state: {user: user}});
      }
    });
  }, [username, password, navigate, api]);

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
    navigate("/tvshowbrowseout");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresout");
  }, [navigate]);

  const onNavbarRHSContainerClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);
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
  return (
    <div className="signin">
       <div className="body15">
      <div className="signintile">
        <WelcomeBackContainer
          welcomeBackText="/vector37.svg"
          createAccountText="Welcome Back!"
        />
        <input type="text" className="password" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" id="Password1" className="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

          <div className="hideorshowpassword">
          <pre>                                                       </pre>
            <img
              id="your-img"
              className="showpasswordicon"
              alt=""
              src="/showpasswordicon.svg"
              onClick={() => toggleVisibility1()}
            />
          </div>
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
