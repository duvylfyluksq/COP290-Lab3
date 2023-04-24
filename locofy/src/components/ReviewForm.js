import React from 'react';
import { useMemo } from "react";
import "./ReviewForm.css";
import CommentContainer from './commentContainer';
import { useRef,useState } from 'react';

const ReviewForm = ({
  review, user, host 
}) => {
  
  const [charCount2, setCharCount2] = useState(0);
  function handleInputChange2(event) {
    const inputValue = event.target.value;
    setCharCount2(inputValue.length);
  }
  const [commentHeight, setCommentHeight] = useState(0);
  function liking(){
    var like= document.querySelectorAll("#likebutton-icon");
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
    <div className="review" ref={reviewContainerRef}>
      <div className="indocked">
        <div className="review1">
          <div className="reviewheader">
            <div className="review-title">{review.title}</div>
            <div className="reviewername">
              <div className="by">by</div>
              <div className="sublayout6">
                <img
                  className="picture-icon"
                  alt=""
                  src={user.pfp}
                  onClick={onPictureIconClick}
                  
                />
                <div
                  className="duvylfyluksq"
                  onClick={onDuvylfyluksqTextClick}
                 
                >
                  {user.username}
                </div>
              </div>
            </div>
            <div className="rating10">
              <div className="rating-xy10">
                <span className="rating11">Rating:</span>
                <span> {review.rating}/10</span><br />
            <span className = "rating13">Sentiment:  </span>
            <span>Positive </span>
              </div>
              <img className="vector-icon24" alt="" src="/vector8.svg" />
            </div>
          </div>
          <div className="lorem-ipsum-dolor">
            {review.content}
          </div>
          <div className="reviewfooter">
            <div className="commentsdropdown">
              <div className="comments">Comments</div>
              <img className="vector-icon25" alt="" src="/vector9.svg" onClick={toggleComments} />
            </div>
            <div className="options">
              <div className="likes2">424242</div>
              <img id="likebutton-icon" className="likebutton-icon" alt="" src="/likebutton.svg" onClick={()=>liking()} />
            </div>
          </div>
              {showComments && (
            <div className="commentt-container"
            ref={el => el && setCommentHeight(el.offsetHeight)}
            ><CommentContainer />
            </div>)}
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
