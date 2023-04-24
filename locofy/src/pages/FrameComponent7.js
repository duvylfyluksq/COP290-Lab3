import React from "react";
import  { useEffect, useState } from 'react';

import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BobDylanContainer from "../components/BobDylanContainer";
import WatchListMovieContainer from "../components/WatchListMovieContainer";
import Footer from "../components/Footer";
import ReviewForm from "../components/ReviewForm";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent7.css";
import { Title } from "../model/Title";
import {Review} from "../model/Review";
import { User } from "../model/User";
import { ReviewsApi } from '../api/ReviewsApi';
import { UserApi } from '../api/UserApi';


const revapi = new ReviewsApi();
const userapi =  new  UserApi();

const FrameComponent7 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const [reviews,setReviews] = useState([]);
  const [watchlist,setWatchlist] = useState([]);

  console.log(user);
  useEffect(() => {
    revapi.reviewUserUserIdGet(user.user_id, {sortOrder:true}, (error, data, response) => {
      console.log("rip");
      if (response.status === 200) {
        const reviewlist = data.map((reviewData) => Review.constructFromObject(reviewData));
        console.log(reviewlist);
        setReviews(reviewlist);
        console.log("hello");
        userapi.watchlistUserIdGet(
          user.user_id,
          (error, data, response) => {
            console.log("rip");
            if (response.status === 200) {
              const watchlist = data
                .map((watchlistData) =>
                  Title.constructFromObject(watchlistData)
                );
              console.log(watchlist);
              setWatchlist(watchlist);
              console.log("hello");
            } else {
              console.log(error);
            }
          }
        ); 
      } else {
        console.log(error);
      }
    });
  }, []);
  

  const onWatchlistText1Click = useCallback(() => {
    navigate("/watchlistinself", {state:{watchlist, user}});
  }, [navigate,watchlist]);

  const onPostsText1Click = useCallback(() => {
    navigate("/reviewsbobdylanin",{state:{reviews,user}});
  }, [navigate,reviews]);

  return (
    <div className="bobdylan-inself-parent">
      <div className="bobdylan-inself">
        <div className="body7">
          <BobDylanContainer user = {user}/>
          <div className="watchlist6">
            <div className="watchlistheader4">
              <div className="watchlist7">Watchlist</div>
              <img className="vector-icon4" alt="" src="/watchlist.svg" />
            </div>
            <div className="watchlistdisplay4">
              {watchlist.slice(0,10).map((title, index) => {
                if (!!title.movie) {
                  return (
                    <WatchListMovieContainer
                      key={index}
                      user = {user}
                      movie={title.movie}
                    />
                  );
                } else {
                  return (
                    <Footer
                      key={index}
                      user ={user}
                      show={title.tvshow}
                    />
                  );
                }
              })}
            </div>
            <div className="watchlist8" onClick={onWatchlistText1Click}>
              View Entire Watchlist
            </div>
          </div>
          <div className="recentposts2">
            <div className="recentposts3">Recent Posts</div>
            <div className="review1390">
              {reviews.slice(0,3).map((review) => (
                <ReviewForm
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="unset"
                bodyFrameCursor="unset"
                host = {user}
                user = {user}
                review = {review}
              />
              ))}
              
            </div>
            <div className="posts1" onClick={onPostsText1Click}>
              View All Posts
            </div>
          </div>
        </div>
        <NavbarContainer
          user = {user}
          dimensions="/vector16.svg"
          dimensionsText="/fluentcompose24filled1.svg"
          dimensionsId="/profilemenu5.svg"
          propBoxShadow="unset"
          
        />
      </div>
    </div>
  );
};

export default FrameComponent7;
