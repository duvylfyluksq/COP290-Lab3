import "./UserReviewForm.css";
import CommentContainer from './commentContainer';
import React,{ useMemo, useRef,useState,useCallback, useEffect } from 'react';
import {Comment} from '../model/Comment';
import { ReviewsApi } from "../api/ReviewsApi";

import { useNavigate } from "react-router-dom";

const reviewsApi = new ReviewsApi();

const UserReviewForm = ({
  review, user, host 
}) => {

  const [commen, setcommen] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [comments, setcomments] = useState([]);
  const commentInputRef = useRef(null);

  function comm() {
    const reviewId = review.review_id;
    const userId = user.user_id;
    const content = commen;
  
    reviewsApi.reviewReviewIdCommentPost(reviewId, userId, content, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Comment posted successfully.");
        commentInputRef.current.value = "";
        setCharCount2(0);
        reviewsApi.reviewReviewIdCommentGet(review.review_id, (error, data, response) => {
          if (response.status == 200) {
            const commentlist = data.map((comment) =>
              Comment.constructFromObject(comment)
            );
            console.log(commentlist);
            setcomments(commentlist);
          } else {
            console.log(error);
          }
        },[comments]);
      }
    });
  }
  

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

  const [charCount2, setCharCount2] = useState(0);
  function handleInputChange2(event) {
    const inputValue = event.target.value;
    setCharCount2(inputValue.length);
    setcommen(inputValue);
  }
  const [commentHeight, setCommentHeight] = useState(0);

  

  function handleLike() {
    reviewsApi.reviewReviewIdLikesPut(
      review.review_id,
      host.user_id,
      (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          console.log("API called successfully.");
        }
      }
    );
  }

  function liking(){
    var like= document.querySelectorAll("#likebutton-icon");
    if(like[0].classList.contains('liked')){
      like[0].classList.remove('liked');
      like[0].setAttribute("src","/likebutton.svg");
    }else{
      like[0].classList.add('liked');
      like[0].setAttribute("src","/likedbutton.svg");
    }
    handleLike();
  }

  
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

  const toggleComments = useCallback(() => {
    reviewsApi.reviewReviewIdCommentGet(review.review_id, (error, data, response) => {
      if (response.status == 200) {
        const commentlist = data.map((comment) =>
          Comment.constructFromObject(comment)
        );
        console.log(commentlist);
        setcomments(commentlist);
      } else {
        console.log(error);
      }
    });
    setShowComments(!showComments);
  }, [showComments,comments]);
  return (
    <div className="review9034" ref={reviewContainerRef}>
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
                />
                <div
                  className="duvylfyluksq"
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
            <div className="commentsdropdown1">
            <div className="comments1">Comments</div>
            <img className="vector-icon29" alt="" src="/vector9.svg" onClick={()=>toggleComments()} />
            </div>
            <div className="likes5">
            <div className="likes6">424242</div>
            <img id="likebutton-icon1" className="likebutton-icon1" alt="" src="/likebutton.svg" onClick={()=>liking()}/>
            </div>
          </div>
              {showComments && (
            <div className="commentt-container"
            ref={el => el && setCommentHeight(el.offsetHeight)}
            ><CommentContainer comments = {comments} />
            </div>)}
        </div>
        <div className="addcomment">
          <div className="add-comment">Add Comment</div>
          <div className="body21">
            <div className="bodyframe">
              <textarea className="commentbody" placeholder='Write a comment' cols='80' rows='3'  maxlength="200"
              onChange={handleInputChange2} ref={commentInputRef}/>
            </div>
            <div className="maxchar">
              <div className="max-characters">Characters left: {200-charCount2}</div>
            </div>
          </div>
          <div className="comment">
            <div className="comment1" onClick={()=>comm()}>Comment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviewForm;
