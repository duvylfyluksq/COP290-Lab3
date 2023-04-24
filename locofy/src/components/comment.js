import React from 'react';
import "./comment.css";

const Comment = ({
  picture,
  duvylfyluksq}) => {
  
  return (
    <div className="commenttttt">
      <div className="reviewername1">
          <div className="sublayout7">
            <img
              className="picture-icon1"
              alt=""
              src="1.jpeg"
            />
            <div className="duvylfyluksq1">
              Akshit
            </div>
          </div>
        </div>
        <div className="contentt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        </div>
    </div>
  );
};

export default Comment;
