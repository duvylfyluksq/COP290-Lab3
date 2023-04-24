import React from 'react';
import {useState, useCallback, useEffect } from "react";

import {useLocation, useNavigate} from "react-router-dom";

import ReviewContainer from "../components/ReviewContainer";
import MoreShowsLikeThis from "../components/MoreShowsLikeThis";
import MoviesContainer from "../components/MoviesContainer";
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

const FrameComponent11 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const show = location.state.show;
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
              const reviewList = data.slice(0, 3).map((reviewData) =>
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

        } else {
          console.log(error);
        }
      });
    }
    },[show, fetched]);


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

  const onSeeAllReviewsClick = useCallback(() => {
    navigate("/reviewsshowout", {state:{show}});
  }, [navigate]);

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
                <div className="genres1">
                {show.genres.map((genre) => (
                <div className="genre2">
                  <div className="genre">{genre}</div>
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
              shows = {shows}
            />
            </div>
          </div>
        </div>
        <MoviesContainer
          coordinates="/vector21.svg"
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

export default FrameComponent11;
