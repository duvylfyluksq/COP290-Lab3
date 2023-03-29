import React from 'react';
import './comment.css'
const Comment = ({ name, profilePic, body }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="pfp"><img src={profilePic} alt={`${name}'s profile picture`} /></div>
        <p>{name}</p>
      </div>
      <div className="comment-body">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Comment
