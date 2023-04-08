import React from 'react';
import { useMemo } from "react";
import "./ReviewForm.css";
import { useState } from 'react';

const ReviewForm = ({
  picture,
  duvylfyluksq,
  bodyCursor,
  bodyFrameCursor,
  onPictureIconClick,
  onDuvylfyluksqTextClick,
}) => {
  const pictureIconStyle = useMemo(() => {
    return {
      cursor: bodyCursor,
    };
  }, [bodyCursor]);

  const duvylfyluksqStyle = useMemo(() => {
    return {
      cursor: bodyFrameCursor,
    };
  }, [bodyFrameCursor]);

  const [charCount2, setCharCount2] = useState(0);
  function handleInputChange2(event) {
    const inputValue = event.target.value;
    setCharCount2(inputValue.length);
  }
  return (
    <div className="review">
      <div className="indocked">
        <div className="review1">
          <div className="reviewheader">
            <div className="review-title">Review Title</div>
            <div className="reviewername">
              <div className="by">by</div>
              <div className="sublayout6">
                <img
                  className="picture-icon"
                  alt=""
                  src={picture}
                  onClick={onPictureIconClick}
                  style={pictureIconStyle}
                />
                <div
                  className="duvylfyluksq"
                  onClick={onDuvylfyluksqTextClick}
                  style={duvylfyluksqStyle}
                >
                  {duvylfyluksq}
                </div>
              </div>
            </div>
            <div className="rating10">
              <div className="rating-xy10">
                <span className="rating11">Rating:</span>
                <span> x.y/10</span>
              </div>
              <img className="vector-icon24" alt="" src="/vector8.svg" />
            </div>
          </div>
          <div className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim.
          </div>
          <div className="reviewfooter">
            <div className="commentsdropdown">
              <div className="comments">Comments</div>
              <img className="vector-icon25" alt="" src="/vector9.svg" />
            </div>
            <div className="options">
              <div className="likes2">424242</div>
              <img className="likebutton-icon" alt="" src="/likebutton.svg" />
            </div>
          </div>
        </div>
        <div className="addcomment">
          <div className="add-comment">Add Comment</div>
          <div className="body21">
            <div className="bodyframe">
              <textarea className="commentbody" placeholder='Write a comment' cols='80' rows='3'  maxlength="200"
              onChange={handleInputChange2} />
            </div>
            <div className="maxchar">
              <div className="max-characters">Characters left: {200-charCount2}</div>
            </div>
          </div>
          <div className="comment">
            <div className="comment1">Comment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
