import React from 'react';
import "./BobDylanContainer.css";

const BobDylanContainer = ({user}) => {
  return (
    <div className="userprofile1">
      <div className="left4">
        <div className="picture4">
          <img className="picture-icon3" alt="" src={user.pfp} />
          {/* <img className="imageicon" alt="" src="/imageicon.svg" /> */}
        </div>
        <div className="username3">
          <div className="bobdylan">{user.username}</div>
          {/* <img className="imageicon" alt="" src="/editicon.svg" /> */}
        </div>
      </div>
      <div className="right8">
        <div className="bio4">
          <div className="bioheader">
            <div className="bio5">Bio</div>
            {/* <img className="editicon1" alt="" src="/editicon1.svg" /> */}
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

export default BobDylanContainer;
