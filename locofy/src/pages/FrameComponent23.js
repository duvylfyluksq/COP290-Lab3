import React, { useEffect, useState } from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import MoreMoviesLikeThisContainer from "../components/MoreMoviesLikeThisContainer";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent10.css";
import {useLocation} from "react-router-dom";
import {Movie} from "../model/Movie";
import {User } from "../model/User";
import {Review} from "../model/Review";
import { TitlesApi } from '../api/TitlesApi';
import { ReviewsApi } from '../api/ReviewsApi';
import {UserApi} from "../api/UserApi";

const api = new TitlesApi();
const revapi = new ReviewsApi();
const userapi = new UserApi();


const FrameComponent23 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mov = location.state.movie;
  const user = location.state.user;
  const [movies,setMovies] = useState([]);
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
      api.movieGet({genre: mov.genres}, (error, data, response) => {
        if (response.status === 200) {
          const movieList = data.slice(0, 11).map((movieData) =>
          Movie.constructFromObject(movieData)
          );
          const updatedMovies = movieList.filter((m) => m.title !== mov.title);
          setMovies(updatedMovies);
          
          revapi.reviewMovieIdGet(mov.movie_id.id, {},(error, data, response) => {
            if (response.status === 200) {
              const reviewList = data.slice(0, 3).map((reviewData) =>
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

        } else {
          console.log(error);
        }
      });
    }
    },[mov, fetched]);



  const onMakepostClick = useCallback(() => {
    navigate("/makepost", {state: {content: mov, user}});
  }, [navigate]);

  const onSeeAllReviewsClick = useCallback(() => {
    navigate("/reviewsmoviein", {state:{mov, user}});
  }, [navigate]);

  const [isadded,setisadded] = useState(user.watchlist_movies[mov.movie_id.id] !== undefined && user.watchlist_movies[mov.movie_id.id]);

  useEffect(()=>{
    if (user.watchlist_movies[mov.movie_id.id]){
      setisadded(true);
    }
    else{
      setisadded(false);
    }
  },[mov,user])
  
  const onWatchlistClick = useCallback(() => {
    if(isadded){
      setisadded(false);
      user.watchlist_movies[mov.movie_id.id] = false;
    }
    else{
      setisadded(true);
      user.watchlist_movies[mov.movie_id.id] = true;
    }
    userapi.watchlistMovieUserIdPut(user.user_id, mov.movie_id.id, (error, data, response) => {
      if (response === 201) {
      } else {
        console.log(error);
      }
    });
  }, [mov, user, isadded]);
  

  
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
    <div className="movie-out-parent">
      <div className="movie-out">
        <div className="body10">
          <div className="moviedescription50">
            <div className="left50">
              <img className="joker-icon70" alt="" src={mov.poster} />
              <img
          className="fluentcompose-24-filled-icon2"
          alt=""
          src="/makepost.svg"
          onClick={onMakepostClick}
        />
        <img className="watchlist12345"
        alt=""
        src="/watchlist.svg" 
        />
        <img className="plus5678"
        alt=""
        onClick={() => onWatchlistClick()}
        src={isadded ? "./minus.svg" : "./plus.svg"}/>
        
            </div>
            <div className="right50">
              <div className="descriptionheader50">
                <div className="rating">
                  <div className="xy10">{mov.rating}/10</div>
                  <img className="vector-icon60" alt="" src="/vector2.svg" />
                </div>
                <div className="duration">
                  <p className="director-john-doe">{mov.duration}</p>
                </div>
                <div className="genres509">
                {mov.genres.map((genre) => (
                <div className="genre2509">
                  <div className="genre509">{genre}</div>
                </div>
              ))}
                </div>
              </div>
              <div className="sublayout50">
                <div className="descriptionbody">
                  <div className="title100">
                    <div className="title200">{mov.title}</div>
                    <div className="year500">({mov.release_date.getFullYear()})</div>
                  </div>
                  <div className="plotsynopsis50">
                    {mov.plot}
                  </div>
                </div>
                <div className="subsublayout50">
                  <img className="line-icon50" alt="" src="/line.svg" />
                  <div className="credits50">
                    <p className="director-john-doe">Director: {mov.director}</p>
                    <p className="director-john-doe">
                      Writer: {mov.writer}
                    </p>
                    <p className="director-john-doe">Cast: {mov.cast.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewlist4">
            <div className="reviews">Reviews</div>
            <div className="reviews139">
            {reviewBlock}
            <div className="see-all-reviews" onClick={onSeeAllReviewsClick}>
              See All Reviews
            </div>
            </div>
            <div className="reviews">More Like This</div>
            <div className="more-like-this">
            <MoreMoviesLikeThisContainer
              user = {user}
              movies = {movies}
            />
            </div>
          </div>
        </div>
        <NavbarContainer
          user = {user}
          propBoxShadow="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent23;
