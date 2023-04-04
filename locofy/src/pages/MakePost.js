import React from 'react';
import { useCallback } from "react";
import MovieNavbar from "../components/MovieNavbar";
import "./MakePost.css";

// const button=document.getElementById("rating");
// button.addEventListener("click",function changeColor(){
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].className="uncolored";
//     }
// buttons[buttonNumber - 1].className="colored";
// });
// function changeColor(buttonNumber) {
//   for (var i = 0; i < buttons.length; i++) {
//       buttons[i].className="uncolored";
//   }
//   buttons[buttonNumber - 1].className="colored";
// }

const MakePost = () => {
  const onPostClick = useCallback(() => {
    // Please sync "State=SignedIn" to the project
  }, []);
  function changeColor(buttonNumber){
    var buttons = document.querySelectorAll("#rating");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('colored');
    }
    buttons[buttonNumber - 1].classList.add('colored');
  }
  
  return (
    <div className="makepost">
      <div className="body18">
        <div className="write-a-review-container">
          <p className="write-a-review"><center>Write a Review</center></p>
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
            <button id="rating" className="uncolored" onClick={() => changeColor(1)}>1</button>
            <button id="rating" className="uncolored" onClick={() => changeColor(2)}>2</button>
            <button id="rating" className="uncolored" onClick={() => changeColor(3)}>3</button>
            <button id="rating" className="uncolored" onClick={() => changeColor(4)}>4</button>
            <button id="rating" className="uncolored" onClick={() => changeColor(5)}>5</button>
            <button id="rating" className="uncolored" onClick={() => changeColor(6)}>6</button>
            <button id="rating" className="uncolored" onClick={() => changeColor(7)}>7</button>
            <button id="rating" className="uncolored" onClick={() => changeColor(8)}>8</button>
            <button id="rating" className="uncolored" onClick={() => changeColor(9)}>9</button>
            <button id="rating" className="uncolored" onClick={() => changeColor(10)}>10</button>
            <br />
          </div>
        </div>
        <div className="movieorshow">
          <div className="what-are-you-container">
            <p className="write-a-review">Review Title</p>
          </div>
          <input
              className="select2"
              type="text"
              placeholder="Write your review title"
          />
        </div>
        <div className="end">
          <div className="movieorshow">
            <div className="reviewbody1">Review Content</div>
            <textarea className="body19" placeholder="Write your review" cols="80" />
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
