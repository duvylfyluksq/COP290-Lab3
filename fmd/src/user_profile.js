import React from "react";
import GenreTile from "./genre_tile";
import './user_profile.css';

function UserProfile(props) {
  return (
    <div className="user-profile">
      <div className="left">
        <div className="pfp"><img src={props.pfp} alt="pfp" /></div>
        <p className="username">{props.username}</p>
      </div>
      <div className="right">
        <div className="bio">
            <h6>Bio</h6>
            <p>{props.bio}</p>
        </div>
        <div className="interests">
            <h6>Interests</h6>
            <div className="interestList">
                <GenreTile genre={props.interest1}/>
                <GenreTile genre={props.interest2}/>
                <GenreTile genre={props.interest3}/>
            </div>
        </div>
        <div className="stats">
            <h6>Stats</h6>
            <div className="statList">
                <div className="statField">{props.posts}<p>Posts</p></div>
                <div className="statField">{props.likes}<p>Likes</p></div>
                <div className="statField">{props.comments}<p>Comments</p></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
