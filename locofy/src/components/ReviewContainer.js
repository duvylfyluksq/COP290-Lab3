import React from 'react';
import "./ReviewContainer.css";
// import Comment from './comment.js';
import CommentContainer from './commentContainer';
import { useRef,useState,useCallback,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ReviewsApi } from '../api/ReviewsApi';
import { Comment } from '../model/Comment';



const api = new ReviewsApi();

const ReviewContainer = ({review ,user}) => {
  const [commentHeight, setCommentHeight] = useState(0);
  
  const [showComments, setShowComments] = useState(false);

  const [sentiment, setSentiment] = useState(0.0);


  const [comments, setcomments] = useState([]);
  const reviewContainerRef = useRef(null);

  // const document = {
  //   type: 'PLAIN_TEXT',
  //   content: review.content,
  //   };

  // useEffect(()=>{
  //   async function analyzeSentiment() {
  //     const language = require('@google-cloud/language');
  //     const opts = { 
  //       credentials : require('./apikey.json'),
  //       projectId : "fmd-cop290"
  //     };
  //     const client = new language.LanguageServiceClient(opts);
  //     try {
  //       const results = await client.analyzeSentiment({
  //         document: document,
  //       });
  //       setSentiment(results[0]["documentSentiment"]["score"]);
  //       console.log(results);
  //     } catch (error) {
  //       console.error("Failed to analyze sentiment:", error);
  //     }
  //   }
  //   analyzeSentiment();
  // },[review]);

  useEffect(() => {
    const reviewContainer = reviewContainerRef.current;
    if (showComments) {
      reviewContainer.style.height = `$calc(100vh - 200px + ${commentHeight}px)`;
    } else {
      reviewContainer.style.height = '';
    }
  }, [showComments],
  );

  
  const toggleComments = useCallback(() => {
    api.reviewReviewIdCommentGet(review.review_id, (error, data, response) => {
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
    <div className="review2" ref={reviewContainerRef}>
      <div className="reviewheader1">
        <div className="review-title1">{review.title}</div>
        <div className="reviewername1">
          <div className="by1">by</div>
          <div className="sublayout7">
            <img
              className="picture-icon1"
              alt=""
              src={user.pfp}
            />
            <div className="duvylfyluksq1">
              {user.username}
            </div>
          </div>
        </div>
        <div className="rating12">
          <div className="rating-xy101">
            <span className="rating13">Rating:</span>
            <span> {review.rating}/10</span><br />
            <span className = "rating13">Sentiment:  </span>
            <span>{sentiment}</span>
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
          <img className="vector-icon29" alt="" src="/vector9.svg" onClick={()=>toggleComments()} />
        </div>
        <div className="likes5">
          <div className="likes6">424242</div>
          <img id="likebutton-icon1" className="likebutton-icon1" alt="" src="/likebutton.svg"/>
        </div>
      </div>
      {showComments && (
        <div className="commentt-container"
        ref={el => el && setCommentHeight(el.offsetHeight)}
        ><CommentContainer comments = {comments} />
        </div>)}
    </div>
  );
};

export default ReviewContainer;