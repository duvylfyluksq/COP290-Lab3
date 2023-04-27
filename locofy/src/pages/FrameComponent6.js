import React from 'react';
import { useCallback,useEffect,useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import MovieWatchListContainer from "../components/MovieWatchListContainer";
import BottomFooter from "../components/BottomFooter";
import ReviewForm from "../components/ReviewForm";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent6.css";
import { Title } from "../model/Title";
import {Review} from "../model/Review";
import { ReviewsApi } from '../api/ReviewsApi';
import { UserApi } from '../api/UserApi';


const revapi = new ReviewsApi();
const userapi =  new  UserApi();


const FrameComponent6 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const host = location.state.host;
  
  const [watchlist,setWatchlist] = useState([]);
  const [reviews,setReviews] = useState([]);

  useEffect(() => {
    revapi.reviewUserUserIdGet(user.user_id, {sortOrder:true}, (error, data, response) => {
      if (response.status === 200) {
        const reviewlist = data.map((reviewData) => Review.constructFromObject(reviewData));
        setReviews(reviewlist);
        userapi.watchlistUserIdGet(user.user_id,
          (error, data, response) => {
            if (response.status === 200) {
              const watchlist = data.map((watchlistData) =>
                  Title.constructFromObject(watchlistData)
                );
              setWatchlist(watchlist);
            } else {
              console.log(error);
            }
          }
        ); 
      } else {
        console.log(error);
      }
    });
  }, [user]);


  const onWatchlistTextClick = useCallback(() => {
    navigate("/watchlistinother",{state:{user,host,watchlist}});
  }, [navigate,user,host,watchlist]);

  const onPostsTextClick = useCallback(() => {
    navigate("/reviewsduvylfyluksqin",{state:{user,host,reviews}});
  }, [navigate,user,host,reviews]);

  return (
    <div className="duvylfyluksq-inother-parent">
      <div className="duvylfyluksq-inother">
        <div className="body6">
          <UserProfile user = {user}/>
          <div className="watchlist3">
            <div className="watchlistheader3">
              <div className="watchlist4">Watchlist</div>
              <img className="vector-icon3" alt="" src="/watchlist.svg" />
            </div>
            <div className="watchlistdisplay3">
            {watchlist.slice(0,10).map((title, index) => {
                if (!!title.movie) {
                  return (
                    <MovieWatchListContainer
                      key={index}
                      movie={title.movie}
                    />
                  );
                } else {
                  return (
                    <BottomFooter
                      key={index}
                      show={title.tvshow}
                    />
                  );
                }
              })}
            </div>
            <div className="watchlist5" onClick={onWatchlistTextClick}>
              View Entire Watchlist
            </div>
          </div>
          <div className="recentposts">
            <div className="recentposts1">Recent Posts</div>
            <div className="watchlistdisplay3">
            {reviews.slice(0,3).map((review) => (
                <ReviewForm
                user = {user}
                host = {host}
                review = {review}
              />
              ))}
            </div>
            <div className="posts" onClick={onPostsTextClick}>
              View All Posts
            </div>
          </div>
        </div>
        <NavbarContainer
          propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          user = {host}
        />
      </div>
    </div>
  );
};

export default FrameComponent6;
