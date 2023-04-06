import { useCallback } from "react";
import "./OutDocked.css";

const OutDocked = () => {
  const onPictureIconClick = useCallback(() => {
    // Please sync "duvylfyluksq-Out" to the project
  }, []);

  const onDuvylfyluksqTextClick = useCallback(() => {
    // Please sync "duvylfyluksq-Out" to the project
  }, []);

  return (
    <div className="outdocked">
      <div className="review3">
        <div className="reviewheader">
          <div className="review-title">Review Title</div>
          <div className="reviewername">
            <div className="by">by</div>
            <button className="sublayout">
              <img
                className="picture-icon"
                alt=""
                src="/picture@2x.png"
                onClick={onPictureIconClick}
              />
              <div className="duvylfyluksq" onClick={onDuvylfyluksqTextClick}>
                duvylfyluksq
              </div>
            </button>
          </div>
          <div className="rating">
            <div className="rating-xy10">
              <span className="rating1">Rating:</span>
              <span> x.y/10</span>
            </div>
            <img className="vector-icon" alt="" src="/vector4.svg" />
          </div>
        </div>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim.
        </div>
        <div className="reviewfooter">
          <button className="commentsdropdown">
            <div className="comments">Comments</div>
            <img className="vector-icon1" alt="" src="/vector5.svg" />
          </button>
          <div className="likes">
            <div className="likes1">424242</div>
            <button className="likebutton">
              <img className="vector-icon2" alt="" src="/vector6.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutDocked;
