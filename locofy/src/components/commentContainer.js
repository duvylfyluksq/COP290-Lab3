import React from 'react';
import "./commentContainer.css";
import Comment from './comment';

const CommentContainer = ({ comments, userlist = [], host = [], }) => {


  if (userlist.length !== comments.length || (userlist.length === 0)) {
    return null;
  }

  return (
    <div className="commenttttts">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment comment={comment} user={userlist[index]} host = {host} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default CommentContainer;
