import { useCallback } from "react";
import "./ReviewContainer.css";

const ReviewContainer = () => {
  const onPictureIconClick = useCallback(() => {
    // Please sync "duvylfyluksq-Out" to the project
  }, []);

  const onDuvylfyluksqTextClick = useCallback(() => {
    // Please sync "duvylfyluksq-Out" to the project
  }, []);

  return (
    <div className="review5">
      <div className="reviewheader2">
        <div className="review-title2">Review Title</div>
        <div className="reviewername2">
          <div className="by2">by</div>
          <button className="sublayout2">
            <img
              className="picture-icon4"
              alt=""
              src="/picture@2x.png"
              onClick={onPictureIconClick}
            />
            <div className="duvylfyluksq2" onClick={onDuvylfyluksqTextClick}>
              duvylfyluksq
            </div>
          </button>
        </div>
        <div className="rating4">
          <div className="rating-xy102">
            <span className="rating5">Rating:</span>
            <span> x.y/10</span>
          </div>
          <img className="vector-icon6" alt="" src="/vector.svg" />
        </div>
      </div>
      <div className="lorem-ipsum-dolor2">
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
      <div className="reviewfooter2">
        <button className="commentsdropdown2">
          <div className="comments2">Comments</div>
          <img className="vector-icon7" alt="" src="/vector3.svg" />
        </button>
        <div className="options1">
          <div className="likes3">424242</div>
          <img className="likebutton-icon" alt="" src="/vector2.svg" />
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
