import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CreateAccountContainer from "../components/CreateAccountContainer";
import LinksContainer1 from "../components/LinksContainer1";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

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
    <div className="signup">
      <div className="body20">
        <CreateAccountContainer />
      </div>
      <LinksContainer1
        dimensions="/frame-1"
        dimensionsId="/vector42.svg"
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

export default SignUp;
