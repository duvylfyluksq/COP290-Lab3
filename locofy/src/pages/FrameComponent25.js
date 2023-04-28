import React from 'react';
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarContainer from '../components/NavbarContainer';
import ReviewForm from "../components/ReviewForm";
import {User } from "../model/User";
import {Review} from "../model/Review";
import { ReviewsApi } from '../api/ReviewsApi';
import {UserApi} from "../api/UserApi";
const revapi = new ReviewsApi();
const userapi = new UserApi();
import "./FrameComponent9.css";


const FrameComponent25 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const show = location.state.show;
    const user = location.state.user;
    const [users,setUsers] = useState();  
    const [reviews,setReviews] = useState([]);
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
            revapi.reviewTvshowIdGet(show.show_id.id, {},(error, data, response) => {
              if (response.status === 200) {
                const reviewList = data.map((reviewData) =>
                Review.constructFromObject(reviewData)
                );
                setReviews(reviewList);
                fetchUsersSequentially(reviewList, 0, [], (userList) => {
                  setUsers(userList);
                });
                setFetched(true);
              } else {
                console.log(error);
              }
            }),[show, fetched];
          } });
      
      const reviewBlock = reviews.map((review, index) => (
        users && users.length === reviews.length ? (
          <ReviewForm
            review={review}
            key={index}
            user={users[index]}
            host={user}
          />
        ) : null
      ));

    return (
        <div className="reviews-movie-out-parent">
        <div className="reviews-movie-out">
          <div className="body9">
            <div className="reviewsheader3">
              <div className="showing3">Showing Reviews For</div>
              <div className="title">{show.title}</div>
            </div>
            <div className="reviewlist9999999">
              <div className="reviews139">
                {reviewBlock}
              </div>
          </div>
          <NavbarContainer
            user = {user}
            propBoxShadow="unset"
          />
        </div>
      </div>
      </div>
    );
  };

export default FrameComponent25;