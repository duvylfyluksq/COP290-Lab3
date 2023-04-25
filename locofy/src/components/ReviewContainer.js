import React from 'react';
import "./ReviewContainer.css";
// import Comment from './comment.js';
import CommentContainer from './commentContainer';
import { useRef,useState,useCallback,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ReviewsApi } from '../api/ReviewsApi';
import { Comment } from '../model/Comment';
import { UserApi } from "../api/UserApi";
import {User} from "../model/User";


const reviewsApi = new ReviewsApi();
const userapi= new UserApi();



const countTrueValues = (likes) => {
  let trueCount = 0;
  for (const value of Object.values(likes)) {
    if (value === true) {
      trueCount++;
    }
  }
  return trueCount;
};


const ReviewContainer = ({review ,user}) => {
  const [commentHeight, setCommentHeight] = useState(0);
  
  const [showComments, setShowComments] = useState(false);

  const [sentiment, setSentiment] = useState("");


  const [comments, setcomments] = useState([]);
  const reviewContainerRef = useRef(null);
  const [users,setUsers] = useState([]);  
  const [fetched, setFetched] = useState(false);
  

  const fetchUsersSequentially = (commentlist, index, userList, callback) => {
    if (index >= commentlist.length) {
      callback(userList);
      return;
    }
    const comment = commentlist[index];
    userapi.userUserIdGet(comment.user_id, (error, data, response) => {
      if (response.status === 200) {
        const newUser = User.constructFromObject(data);
        userList.push(newUser);
        fetchUsersSequentially(commentlist, index + 1, userList, callback);
      } else {
        console.log(error);
      }
    });
  
  

  
  };

  const toggleComments = useCallback(() => {
    if(!fetched){
      reviewsApi.reviewReviewIdCommentGet(review.review_id, (error, data, response) => {
        if (response.status == 200) {
          const commentlist = data.map((comment) =>
            Comment.constructFromObject(comment)
          );
          setcomments(commentlist);
          fetchUsersSequentially(commentlist, 0, [], (userList) => {
            setUsers(userList);
          });
        } else {
          console.log(error);
        }
      });
      setShowComments(!showComments);
    }
  }, [showComments,comments,users]);

  const navigate = useNavigate();

  const onUserClick = useCallback(() => {
    
      navigate("/duvylfyluksqout", {state: {user}});
    
  }, [navigate]);

  

  useEffect(() => {
    async function analyzeSentiment() {
      const url = 'http://localhost:3001/analyzeSentiment';

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: review.content }),
        });

        if (!response.ok) {
          throw new Error('Failed to analyze sentiment');
        }

        const results = await response.json();
        if(results.sentiment>0){
          setSentiment("Positive");
        }else{
          setSentiment("Negative");
        }
        console.log(results);
      } catch (error) {
        console.error('Failed to analyze sentiment:', error);
      }
    }
    analyzeSentiment();
  }, [review]);

  useEffect(() => {
    const reviewContainer = reviewContainerRef.current;
    if (showComments) {
      reviewContainer.style.height = `$calc(100vh - 200px + ${commentHeight}px)`;
    } else {
      reviewContainer.style.height = '';
    }
  }, [showComments],
  );
  
  return (
    <div className="review2" ref={reviewContainerRef}>
      <div className="reviewheader1">
        <div className="review-title1">{review.title}</div>
        <div className="reviewername1">
          <div className="by1">by</div>
          <div className="sublayout7" onClick={onUserClick}>
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
          <div className="likes6">{countTrueValues(review.likes)}</div>
          <img id="likebutton-icon1" className="likebutton-icon1" alt="" src="/likebutton.svg"/>
        </div>
      </div>
      {showComments && (
        <div className="commentt-container"
        ref={el => el && setCommentHeight(el.offsetHeight)}
        ><CommentContainer comments = {comments}  userlist={users}/>
        </div>)}
    </div>
  );
};

export default ReviewContainer;