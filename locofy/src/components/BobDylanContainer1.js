import React from 'react';
import "./BobDylanContainer.css";

const BobDylanContainer1 = ({user}) => {
  return (
    <div className="userprofile1">
      <div className="left4291">
        <div className="picture4291">
          <img className="picture-icon3" alt="" src={user.pfp} />
        </div>
        <div className="username3">
          <div className="bobdylan">{user.username}</div>
        </div>
      </div>
      <div className="right8291">
        <div className="bio4">
          <div className="bioheader">
            <div className="bio5">Bio</div>
          </div>
          <div className="biotext1">
            {user.bio}
          </div>
        </div>
        <div className="interests3">
          <div className="interests4">
            <p className="interests5">Interests</p>
          </div>
          <div className="genres8">
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

export default BobDylanContainer1;
