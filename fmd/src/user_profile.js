import React from "react";
import GenreTile from "./genre_tile";
import './user_profile.css';

function UserProfile(props) {
  return (
    <div className="user-profile">
      <div className="left">
        <div className="pic"><img src={props.pic} alt="pic" /></div>
        <p className="username">{props.username}</p>
      </div>
      <div className="right">
        <div className="bio">
            <h3>Bio</h3>
            <p>{props.bio}</p>
        </div>
        <div className="interests">
            <h3>Interests</h3>
            <div className="interestList">
                <GenreTile genre={props.interest1}/>
                <GenreTile genre={props.interest2}/>
                <GenreTile genre={props.interest3}/>
            </div>
        </div>
        <div className="stats">
            <h3>Stats</h3>
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
