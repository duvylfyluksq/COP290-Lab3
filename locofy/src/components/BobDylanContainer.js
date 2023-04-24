import React from 'react';
import "./BobDylanContainer.css";

const BobDylanContainer = ({user}) => {
  return (
    <div className="userprofile1">
      <div className="left4">
        <div className="picture4">
          <img className="picture-icon3" alt="" src={user.pfp} />
          <img className="imageicon" alt="" src="/imageicon.svg" />
        </div>
        <div className="username3">
          <div className="bobdylan">{user.username}</div>
          <img className="imageicon" alt="" src="/editicon.svg" />
        </div>
      </div>
      <div className="right8">
        <div className="bio4">
          <div className="bioheader">
            <div className="bio5">Bio</div>
            <img className="editicon1" alt="" src="/editicon1.svg" />
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
        <div className="genre29" key={genre}>
          <div className="adventure45">{genre}</div>
        </div>
      ))}
          </div>
        </div>
        <div className="stats3">
          <div className="stats4">
            <p className="interests5">Stats</p>
          </div>
          <div className="statinfo1">
            <div className="posts6">
              <div className="num3">424242</div>
              <div className="posts7">Posts</div>
            </div>
            <div className="posts6">
              <div className="num3">424242</div>
              <div className="posts7">Likes</div>
            </div>
            <div className="posts6">
              <div className="num3">424242</div>
              <div className="comments3">Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BobDylanContainer;
