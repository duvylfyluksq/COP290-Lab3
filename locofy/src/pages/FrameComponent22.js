import React from 'react';
import {useState, useCallback, useEffect } from "react";

import {useLocation, useNavigate} from "react-router-dom";


import MoreShowsLikeThis from "../components/MoreShowsLikeThis";
import ReviewForm from '../components/ReviewForm';
import NavbarContainer from '../components/NavbarContainer';
import "./FrameComponent11.css";
import {Tvshow} from "../model/Tvshow";
import {User } from "../model/User";
import {Review} from "../model/Review";
import { TitlesApi } from '../api/TitlesApi';
import { ReviewsApi } from '../api/ReviewsApi';
import {UserApi} from "../api/UserApi";

const api = new TitlesApi();
const revapi = new ReviewsApi();
const userapi = new UserApi();

const FrameComponent22 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const show = location.state.show;
  const user = location.state.user;
  const [shows,setShows] = useState([]);
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
      api.tvshowGet({genre: show.genres}, (error, data, response) => {
        if (response.status === 200) {
          const showList = data.slice(0,11).map((showData) =>
          Tvshow.constructFromObject(showData)
          );
          console.log(showList);
          const updatedShows = showList.filter((m) => m.title !== show.title);
          setShows(updatedShows);
          
          revapi.reviewTvshowIdGet(show.show_id.id, {},(error, data, response) => {
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
              setFetched(true);
            } else {
              console.log(error);
            }
          });

        } else {
          console.log(error);
        }
      });
    }
    },[show, fetched]);

  const [isadded,setisadded] = useState(user.watchlist_shows[show.show_id.id] !== undefined && user.watchlist_shows[show.show_id.id]);
    useEffect(()=>{
      if (user.watchlist_shows[show.show_id.id]){
        setisadded(true);
      }
      else{
        setisadded(false);
      }
    },[show])
  const onPictureIconClick = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onDuvylfyluksqTextClick = useCallback(() => {
    navigate("/duvylfyluksqout");
  }, [navigate]);

  const onMakepostClick = useCallback(() => {
    navigate("/makepost", {state:{content: show, user}});
  }, [navigate]);

  const onSeeAllReviewsClick = useCallback(() => {
    navigate("/reviewsshowin", {state:{show,user}});
  }, [navigate,show,user]);

  

  const onWatchlistClick = useCallback(() => {
    console.log("Watchlist clicked");
    if(isadded){
      setisadded(false);
    }
    else{
      setisadded(true);
    }
    userapi.watchlistTvshowUserIdPut(user.user_id, show.show_id.id, (error, data, response) => {
      if (response === 201) {
        console.log("Watchlist updated");
        
      } else {
        console.log(error);
      }
    });
  }, [show, user,isadded]);

  const reviewBlock = reviews.slice(0,3).map((review, index) => (
    users && users.length === reviews.length ? (
      <ReviewForm
        review={review}
        key={index}
        user={users[index]}
        host={user}
        onPictureIconClick={onPictureIconClick}
        onDuvylfyluksqTextClick={onDuvylfyluksqTextClick}
      />
    ) : null
  ));

  return (
    <div className="tvshow-out-parent">
      <div className="tvshow-out">
        <div className="body11">
          <div className="tvshowdescription100">
            <div className="left40">
              <img
                className="peakyblinders-icon40"
                alt=""
                src={show.poster}
              />
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
        onClick={onWatchlistClick}
        src = { isadded ? "./plus.svg" : "./minus.svg"} />
        
            </div>
            <div className="right100">
              <div className="descriptionheader60">
                <div className="rating1">
                  <div className="xy101">{show.rating}/10</div>
                  <img className="vector-icon7" alt="" src="/vector1.svg" />
                </div>
                <div className="episodeduration">
                  <p className="avgduration">{show.duration}</p>
                </div>
                <div className="genres509">
                {show.genres.map((genre) => (
                <div className="genre2509">
                  <div className="genre509">{genre}</div>
                </div>
              ))}
                </div>
              </div>
              <div className="sublayout100">
                <div className="descriptionbody60">
                  <div className="title100">
                    <div className="title200">{show.title}</div>
                    <div className="season5001">Season {show.season}</div>
                    <div className="year500">({show.release_date.getFullYear()})</div>
                  </div>
                  <div className="plotsynopsis100">
                    {show.plot}
                  </div>
                </div>
                <div className="subsublayout1001">
                  <img className="line-icon100" alt="" src="/line.svg" />
                  <div className="credits100">
                    <p className="avgduration">Director: {show.director}</p>
                    <p className="avgduration">
                      Writer: {show.writer}
                    </p>
                    <p className="avgduration">Cast: {show.cast.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewlist5">
            <div className="reviews1">Reviews</div>
            <div className="reviews139">
            {reviewBlock}
            <div className="see-all-reviews1" onClick={onSeeAllReviewsClick}>
              See All Reviews
            </div>
            </div>
            <div className="reviews1">More Like This</div>
            <div className="more-like-this">
            <MoreShowsLikeThis
              user = {user}
              shows = {shows}
            />
            </div>
          </div>
        </div>
        <NavbarContainer
          user = {user}
          dimensions="/vector35.svg"
          dimensionsText="/fluentcompose24filled1.svg"
          dimensionsId="/profilemenu8.svg"
          propBoxShadow="unset"
        
        />
      </div>
    </div>
  );
};

export default FrameComponent22;
