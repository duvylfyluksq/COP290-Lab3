import React from 'react';
import "./UserProfile.css";

const UserProfile = ({user}) => {
  return (
    <div className="userprofile">
      <div className="left3">
        <img className="picture-icon2" alt="" src={user.pfp} />
        <div className="duvylfyluksq2">{user.username}</div>
      </div>
      <div className="right7">
        <div className="bio2">
          <div className="bio3">Bio</div>
          <div className="biotext">
            {user.bio}
          </div>
        </div>
        <div className="interests">
          <div className="interests1">
            <p className="interests2">Interests</p>
          </div>
          <div className="genres7">
            {user.interests.map((genre) => (
              <div className="genre2509" key={genre}>
                <div className="genre509">{genre}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
