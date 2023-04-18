import React from 'react';
import "./ReviewContainer.css";
// import Comment from './comment.js';
import CommentContainer from './commentContainer';
import { useRef,useState } from 'react';

const ReviewContainer = ({ onPictureIconClick, onDuvylfyluksqTextClick,review }) => {
  const [commentHeight, setCommentHeight] = useState(0);
  function liking(){
    var like= document.querySelectorAll("#likebutton-icon1");
    if(like[0].classList.contains('liked')){
      like[0].classList.remove('liked');
      like[0].setAttribute("src","/likebutton.svg");
    }else{
      like[0].classList.add('liked');
      like[0].setAttribute("src","/likedbutton.svg");
    }
  }
  const [showComments, setShowComments] = useState(false);
  const reviewContainerRef = useRef(null);
  React.useEffect(() => {
    const reviewContainer = reviewContainerRef.current;
    if (showComments) {
      reviewContainer.style.height = `$calc(100vh - 200px + ${commentHeight}px)`;
    } else {
      reviewContainer.style.height = '';
    }
  }, [showComments],
  );

  function toggleComments() {
    setShowComments(!showComments);
  }
  return (
    <div className="review2" ref={reviewContainerRef}>
      <div className="reviewheader1">
        <div className="review-title1">{review.title}</div>
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
            <span> {review.rating}/10</span>
          </div>
          <img className="vector-icon28" alt="" src="/vector8.svg" />
        </div>
      </div>
      <div className="lorem-ipsum-dolor1">
        {review.content}
      </div>
      <div id = 'reviewfooter1' className="reviewfooter1">
        <div className="commentsdropdown1">
          <div className="comments1">Comments</div>
          <img className="vector-icon29" alt="" src="/vector9.svg" onClick={toggleComments} />
        </div>
        <div className="likes5">
          <div className="likes6">424242</div>
          <img id="likebutton-icon1" className="likebutton-icon1" alt="" src="/likebutton.svg" onClick={()=>liking()}/>
        </div>
      </div>
      {showComments && (
        <div className="commentt-container"
        ref={el => el && setCommentHeight(el.offsetHeight)}
        ><CommentContainer />
        </div>)}
    </div>
  );
};

export default ReviewContainer;
