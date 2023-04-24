import React from 'react';
import "./commentContainer.css";
import Comment from './comment';

const CommentContainer = ({comments}) => {
  console.log("rip");
  console.log(comments);
  return (
    <div className="commenttttts">
        {comments.map((comment, index) => (
      <div key={index}>
      <Comment comment  = {comment}/><br />
      </div>
  ))}
    </div>
  );
};

export default CommentContainer;