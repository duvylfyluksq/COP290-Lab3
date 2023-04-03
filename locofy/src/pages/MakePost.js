import React from 'react';
import { useCallback } from "react";
import MovieNavbar from "../components/MovieNavbar";
import "./MakePost.css";

const MakePost = () => {
  const onPostClick = useCallback(() => {
    // Please sync "State=SignedIn" to the project
  }, []);

  return (
    <div className="makepost">
      <div className="body18">
        <div className="write-a-review-container">
          <p className="write-a-review">Write a Review</p>
        </div>
        <div className="movieorshow">
          <div className="what-are-you-container">
            <p className="write-a-review">What are you reviewing?</p>
          </div>
          <input
            className="select2"
            type="text"
            placeholder="Search Movies, TV Shows"
          />
        </div>
        <div className="movieorshow">
          <div className="rating5">Rating</div>
          <div className="ratinglist">
            <div className="ratingbubble">
              <img className="ratingbubble-child" alt="" src="/ellipse-1.svg" />
              <div className="number">1</div>
            </div>
            <div className="ratingbubble">
              <img
                className="ratingbubble-child"
                alt=""
                src="/ellipse-11.svg"
              />
              <div className="number">2</div>
            </div>
            <div className="ratingbubble">
              <img
                className="ratingbubble-child"
                alt=""
                src="/ellipse-12.svg"
              />
              <div className="number">3</div>
            </div>
            <div className="ratingbubble">
              <img
                className="ratingbubble-child"
                alt=""
                src="/ellipse-13.svg"
              />
              <div className="number">4</div>
            </div>
            <div className="ratingbubble">
              <img
                className="ratingbubble-child"
                alt=""
                src="/ellipse-14.svg"
              />
              <div className="number">5</div>
            </div>
            <div className="ratingbubble">
              <img
                className="ratingbubble-child"
                alt=""
                src="/ellipse-15.svg"
              />
              <div className="number">6</div>
            </div>
            <div className="ratingbubble">
              <img
                className="ratingbubble-child"
                alt=""
                src="/ellipse-16.svg"
              />
              <div className="number">7</div>
            </div>
            <div className="ratingbubble">
              <img
                className="ratingbubble-child"
                alt=""
                src="/ellipse-17.svg"
              />
              <div className="number">8</div>
            </div>
            <div className="ratingbubble">
              <img
                className="ratingbubble-child"
                alt=""
                src="/ellipse-18.svg"
              />
              <div className="number8">9</div>
            </div>
            <div className="ratingbubble9">
              <img
                className="ratingbubble-child6"
                alt=""
                src="/ellipse-19.svg"
              />
              <div className="number9">10</div>
            </div>
          </div>
        </div>
        <textarea className="title6" placeholder="Enter Tite" />
        <div className="end">
          <div className="movieorshow">
            <div className="reviewbody1">Review Content</div>
            <textarea className="body19" placeholder="Write your review" />
          </div>
          <button className="post" onClick={onPostClick}>
            <div className="login">Post</div>
          </button>
        </div>
      </div>
      <MovieNavbar />
    </div>
  );
};

export default MakePost;
