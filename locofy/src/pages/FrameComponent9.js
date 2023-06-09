import React from 'react';
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReviewsContainer from "../components/ReviewsContainer";
import ReviewContainer from "../components/ReviewContainer";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent9.css";
import SortPanelReviewsPageRadios from '../components/SortPanelReviewsPageRadios';
import { ReviewsApi } from '../api/ReviewsApi';
import {UserApi} from "../api/UserApi";
import {User } from "../model/User";
import {Review} from "../model/Review";

const FrameComponent9 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mov = location.state.mov;

  const revapi = new ReviewsApi();
  const userapi = new UserApi();


  const [reviews,setReviews] = useState([]);
  const [users,setUsers] = useState();  
  const [fetched, setFetched] = useState(false);

    
  const fetchUsersSequentially = (reviewList, index, userList, callback) => {
    if (index >= reviewList.length) {
      callback(userList);
      return;
    }
  
    const review = reviewList[index];
    userapi.userUserIdGet(review.user_id, (error, data, response) => {
      if (response.status === 200) {
        const newUser = User.constructFromObject(data);
        userList.push(newUser);
        fetchUsersSequentially(reviewList, index + 1, userList, callback);
      } else {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    if(!fetched){
          revapi.reviewMovieIdGet(mov.movie_id.id, {},(error, data, response) => {
            if (response.status === 200) {
              const reviewList = data.map((reviewData) =>
              Review.constructFromObject(reviewData)
              );
              setReviews(reviewList);
              fetchUsersSequentially(reviewList, 0, [], (userList) => {
                setUsers(userList);
              });
              
            } else {
              console.log(error);
            }
          });
        } 
    },[mov, fetched]);

  const reviewBlock = reviews.map((review, index) => (
    users && users.length === reviews.length ? (
      <ReviewContainer
        review={review}
        user={users[index]}
        key={index}
      />
    ) : null
  ));

  return (
    <div className="reviews-movie-out-parent">
      <div className="reviews-movie-out">
        <div className="body9">
          <div className="reviewsheader3">
            <div className="showing3">Showing Reviews For</div>
            <div className="title">{mov.title}</div>
          </div>
          <div className="reviewlist9999999">
            <div className="reviews139">
              {reviewBlock}
            </div>
        </div>
        <MoviesContainer/>
      </div>
    </div>
    </div>
  );
};

export default FrameComponent9;
