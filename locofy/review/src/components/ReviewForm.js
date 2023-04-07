import { useMemo } from "react";
import "./ReviewForm.css";

const ReviewForm = ({
  productIds,
  byWidth,
  byAlignSelf,
  onPictureIconClick,
  onDuvylfyluksqTextClick,
}) => {
  const reviewHeaderStyle = useMemo(() => {
    return {
      width: byWidth,
      alignSelf: byAlignSelf,
    };
  }, [byWidth, byAlignSelf]);

  return (
    <div className="review4">
      <div className="reviewheader1" style={reviewHeaderStyle}>
        <div className="review-title1">Review Title</div>
        <div className="reviewername1">
          <div className="by1">by</div>
          <button className="sublayout1">
            <img
              className="picture-icon1"
              alt=""
              src="/picture@2x.png"
              onClick={onPictureIconClick}
            />
            <div className="duvylfyluksq1" onClick={onDuvylfyluksqTextClick}>
              duvylfyluksq
            </div>
          </button>
        </div>
        <div className="rating2">
          <div className="rating-xy101">
            <span className="rating3">Rating:</span>
            <span> x.y/10</span>
          </div>
          <img className="vector-icon3" alt="" src="/vector.svg" />
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
        <button className="commentsdropdown1">
          <div className="comments1">Comments</div>
          <img className="vector-icon4" alt="" src={productIds} />
        </button>
        <div className="options">
          <div className="likes2">424242</div>
          <button className="likebutton1">
            <img className="vector-icon5" alt="" src="/vector2.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
