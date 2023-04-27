import React from "react";
import  { useEffect, useState } from 'react';

import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BobDylanContainer from "../components/BobDylanContainer";
import MovieWatchListContainer from "../components/MovieWatchListContainer";
import BottomFooter from "../components/BottomFooter";
import ReviewContainer from "../components/ReviewContainer";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent7.css";
import { Title } from "../model/Title";
import {Review} from "../model/Review";
import { ReviewsApi } from '../api/ReviewsApi';
import { UserApi } from '../api/UserApi';


const revapi = new ReviewsApi();
const userapi =  new  UserApi();

const FrameComponent8 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const [reviews,setReviews] = useState([]);
  const [watchlist,setWatchlist] = useState([]);
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

  useEffect(() => {
    revapi.reviewUserUserIdGet(user.user_id, {sortOrder:true}, (error, data, response) => {
      if (response.status === 200) {
        const reviewlist = data.map((reviewData) => Review.constructFromObject(reviewData));
        setReviews(reviewlist);
        userapi.watchlistUserIdGet(
          user.user_id,
          (error, data, response) => {
            if (response.status === 200) {
              const watchlist = data
                .map((watchlistData) =>
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
  

  const onWatchlistText1Click = useCallback(() => {
    navigate("/watchlistout", {state:{watchlist,user}});
  }, [navigate,watchlist,user]);

  const onPostsText1Click = useCallback(() => {
    navigate("/reviewsduvylfyluksqout",{state:{reviews,user}});
  }, [navigate,reviews,user]);

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
            <div className="watchlist8" onClick={onWatchlistText1Click}>
              View Entire Watchlist
            </div>
          </div>
          <div className="recentposts2">
            <div className="recentposts3">Recent Posts</div>
            <div className="review1390">
              {reviews.slice(0,3).map((review) => (
                <ReviewContainer
                picture="/picture1@2x.png"
                duvylfyluksq="bobdylan"
                bodyCursor="unset"
                bodyFrameCursor="unset"
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
        <MoviesContainer
          coordinates="/vector14.svg"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onNavbarRHSContainerClick={onNavbarRHSContainerClick}
        />
      </div>
    </div>
  );
};

export default FrameComponent8;
