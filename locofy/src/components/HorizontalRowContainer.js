import React,{useCallback} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import "./HorizontalRowContainer.css";

const HorizontalRowContainer = ({
  a,b,c,user
}) => {
  const navigate = useNavigate();

  const onGenreCardContainerClick1 = useCallback(() => {
    const genre = a;
    if(user.length!==0){
      navigate("/mixedbrowsein", {state: {genre,user}})
    }
    else{
      navigate("/mixedbrowseout", {state: {genre}})
    }
  }, [navigate]);

  const onGenreCardContainerClick2 = useCallback(() => {
    const genre = b;
    if(user.length!==0){
      navigate("/mixedbrowsein", {state: {genre,user}})
    }
    else{
      navigate("/mixedbrowseout", {state: {genre}})
    }
  }, [navigate]);

  const onGenreCardContainerClick3 = useCallback(() => {
    const genre = c;
    if(user.length!==0){
      navigate("/mixedbrowsein", {state: {genre,user}})
    }
    else{
      navigate("/mixedbrowseout", {state: {genre}})
    }
  }, [navigate]);

  return (
    <div className="horizontalrow14">
      <div className="genrecard" onClick={onGenreCardContainerClick1}>
        <img className="tvshowcard-icon4" alt="" src="/tvshowcard@2x.png" />
        <div className="gradient-overlay"></div>
        <div className="linearfill7">
          <div className="details7">
            <div className="genre7">{a}</div>
          </div>
        </div>
      </div>
      <div className="genrecard" onClick={onGenreCardContainerClick2}>
        <img className="tvshowcard-icon4" alt="" src="/tvshowcard@2x.png" />
        <div className="gradient-overlay"></div>
        <div className="linearfill7">
          <div className="details7">
            <div className="genre7">{b}</div>
          </div>
        </div>
      </div>
      <div className="genrecard" onClick={onGenreCardContainerClick3}>
        <img className="tvshowcard-icon4" alt="" src="/tvshowcard@2x.png" />
        <div className="gradient-overlay"></div>
        <div className="linearfill7">
          <div className="details7">
            <div className="genre7">{c}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalRowContainer;
