import "./ReviewForm.css";
import CommentContainer from './commentContainer';
import React,{ useMemo, useRef,useState,useCallback, useEffect } from 'react';
import {Comment} from '../model/Comment';
import { ReviewsApi } from "../api/ReviewsApi";
import {User} from "../model/User";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../api/UserApi";

const reviewsApi = new ReviewsApi();
const userapi= new UserApi();

const ReviewForm = ({
  review, user, host 
}) => {

  const [commen, setcommen] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [comments, setcomments] = useState([]);
  const commentInputRef = useRef(null);
  const [sentiment,setSentiment] = useState("");
  const [isliked,setisliked] = useState(review.likes[host.user_id] !== undefined && review.likes[host.user_id]);
  useEffect(()=>{
    if (review.likes[host.user_id] === true){
      setisliked(true);
    }
    else{
      setisliked(false);
    }
  },[review])
  
  console.log(review.likes);
  
  
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

  const countTrueValues = (likes) => {
    let trueCount = 0;
    for (const value of Object.values(likes)) {
      if (value === true) {
        trueCount++;
      }
    }
    return trueCount;
  };

  const [likes,setLikes] = useState(countTrueValues(review.likes));

  function comm() {
    const reviewId = review.review_id;
    const userId = host.user_id;
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
            setcomments(commentlist);
            fetchUsersSequentially(commentlist, 0, [], (userList) => {
              setUsers(userList);
            });
          } else {
            console.log(error);
          }
        }),[comments];
      }
    });
  }
  const navigate = useNavigate();

  const onUserClick = useCallback(() => {
    var isHost; 
    isHost = (host.user_id === user.user_id);
    if (isHost){
      navigate("/bobdylaninself", {state: {user, host}});
    }
    else {
      navigate("/duvylfyluksqinother", {state: {user, host}});
    }
  }, [navigate,user,host]);



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
    
  
    if (isliked === true){
      setLikes(likes-1);
      setisliked(false);
    }
    else{
      setLikes(likes+1);
      setisliked(true);
    }
    var like= document.querySelectorAll("#likebutton-icon1");
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
    useEffect(() => {
    const reviewContainer = reviewContainerRef.current;
    if (showComments) {
      reviewContainer.style.height = `$calc(100vh - 200px + ${commentHeight}px)`;
    } else {
      reviewContainer.style.height = '';
    }
  }, [showComments],
  );

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

  return (
    <div className="review" ref={reviewContainerRef}>
      <div className="indocked">
        <div className="review1">
          <div className="reviewheader">
            <div className="review-title">{review.title}</div>
            <div className="reviewername">
              <div className="by">by</div>
              <div className="sublayout6" onClick={onUserClick} >
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
            <span>{sentiment}</span>
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
          <div className="likes6">{likes}</div>
          <img id="likebutton-icon1" className="likebutton-icon1" alt="" src= {isliked? "./likedbutton.svg" : "./likebutton.svg"} onClick={()=>liking()}/>
        </div>
          </div>
              {showComments && (
            <div className="commentt-container"
            ref={el => el && setCommentHeight(el.offsetHeight)}
            ><CommentContainer comments = {comments} userlist={users} host = {host}/>
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

export default ReviewForm;