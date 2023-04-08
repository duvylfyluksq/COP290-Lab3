import React from 'react';
import "./ReviewContainer.css";

const ReviewContainer = ({ onPictureIconClick, onDuvylfyluksqTextClick }) => {
  return (
    <div className="review2">
      <div className="reviewheader1">
        <div className="review-title1">Review Title</div>
        <div className="reviewername1">
          <div className="by1">by</div>
          <div className="sublayout7">
            <img
              className="picture-icon1"
              alt=""
              src="/picture@2x.png"
              onClick={onPictureIconClick}
            />
            <div className="duvylfyluksq1" onClick={onDuvylfyluksqTextClick}>
              duvylfyluksq
            </div>
          </div>
        </div>
        <div className="rating12">
          <div className="rating-xy101">
            <span className="rating13">Rating:</span>
            <span> x.y/10</span>
          </div>
          <img className="vector-icon28" alt="" src="/vector8.svg" />
        </div>
      </div>
      <div className="lorem-ipsum-dolor1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
      </div>
      <div className="reviewfooter1">
        <div className="commentsdropdown1">
          <div className="comments1">Comments</div>
          <img className="vector-icon29" alt="" src="/vector9.svg" />
        </div>
        <div className="likes5">
          <div className="likes6">424242</div>
          <img className="likebutton-icon1" alt="" src="/likebutton.svg" />
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
