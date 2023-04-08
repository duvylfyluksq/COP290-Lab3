import React from 'react';
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="userprofile">
      <div className="left3">
        <img className="picture-icon2" alt="" src="/picture2@2x.png" />
        <div className="duvylfyluksq2">duvylfyluksq</div>
      </div>
      <div className="right7">
        <div className="bio2">
          <div className="bio3">Bio</div>
          <div className="biotext">
            Im a puppet on a string tracy island, time-traveling diamond
            cutter-shaped heartaches that come to find you four in some velvet
            morning years too late...
          </div>
        </div>
        <div className="interests">
          <div className="interests1">
            <p className="interests2">Interests</p>
          </div>
          <div className="genres7">
            <div className="genre26">
              <div className="adventure42">Adventure</div>
            </div>
            <div className="genre26">
              <div className="adventure42">Adventure</div>
            </div>
            <div className="genre26">
              <div className="adventure42">Adventure</div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stats1">
            <p className="interests2">Stats</p>
          </div>
          <div className="statinfo">
            <div className="posts3">
              <div className="num">424242</div>
              <div className="posts4">Posts</div>
            </div>
            <div className="posts3">
              <div className="num">424242</div>
              <div className="posts4">Likes</div>
            </div>
            <div className="posts3">
              <div className="num">424242</div>
              <div className="comments2">Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
