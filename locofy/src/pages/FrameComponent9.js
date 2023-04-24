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

  const [sortType,setSortType] = useState(false);
  const [filter,setFilter] = useState()
  const onSortTypeChange = useCallback((s) => {
    setSortType(s);
  }, []);
  const onFilterChange = useCallback((s)=> {
      setFilter(s);
  },[])

  
  const fetchUsersSequentially = (reviewList, index, userList, callback) => {
    if (index >= reviewList.length) {
      callback(userList);
      return;
    }
  
    const review = reviewList[index];
    userapi.userUserIdGet(review.user_id, (error, data, response) => {
      if (response.status === 200) {
        const newUser = User.constructFromObject(data);
        console.log(newUser);
        userList.push(newUser);
        fetchUsersSequentially(reviewList, index + 1, userList, callback);
      } else {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    if(!fetched){
          revapi.reviewMovieIdGet(mov.movie_id.id, {'sortOrder': sortType,"sortTypeReviews" : filter},(error, data, response) => {
            if (response.status === 200) {
              const reviewList = data.map((reviewData) =>
              Review.constructFromObject(reviewData)
              );
              console.log(reviewList);
              setReviews(reviewList);
              console.log("lmao");
              console.log(reviews);
              fetchUsersSequentially(reviewList, 0, [], (userList) => {
                setUsers(userList);
              });
              
            } else {
              console.log(error);
            }
          });
          setFetched(true);
        } 
    },[mov,fetched,sortType,filter]);


  const onPictureIconClick = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqTextClick = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/homesignedout");
  }, [navigate]);

  const onMoviesTextClick = useCallback(() => {
    navigate("/moviebrowseout");
  }, [navigate]);

  const onTVShowsTextClick = useCallback(() => {
    navigate("/tvshowbrowseout");
  }, [navigate]);

  const onGenresTextClick = useCallback(() => {
    navigate("/genresout");
  }, [navigate]);

  const onNavbarRHSContainerClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);
  const [reviewblock,setReviewBlock] = useState();
  useEffect(() => {
    // Call reviewBlock again when the reviews change
    const reviewBlock = reviews.map((review, index) => (
        users && users.length === reviews.length ? (
          <ReviewContainer
            review={review}
            key={index}
            user={users[index]}
            onPictureIconClick={onPictureIconClick}
            onDuvylfyluksqTextClick={onDuvylfyluksqTextClick}
          />
        ) : null
      ));
    
    setReviewBlock(reviewBlock);
  }, [reviews]);

  return (
    <div className="reviews-movie-out-parent">
      <div className="reviews-movie-out">
        <div className="body9">
          <div className="reviewsheader3">
            <div className="showing3">Showing Reviews For</div>
            <div className="title">{mov.title}</div>
          </div>
          <SortPanelReviewsPageRadios onSortTypeChange={onSortTypeChange} onFilterChange = {onFilterChange} />
          
          <div className="reviewlist9999999">
            <div className="reviews">Reviews</div>
            <div className="reviews139">
              {reviewblock}
            </div>
        </div>
        <MoviesContainer
          coordinates="/vector18.svg"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onNavbarRHSContainerClick={onNavbarRHSContainerClick}
        />
      </div>
    </div>
    </div>
  );
};

export default FrameComponent9;
