import React from 'react';
import { useState } from 'react';
import { useCallback } from "react";
import MovieNavbar from "../components/MovieNavbar";
import "./MakePost.css";
import NavbarContainer from '../components/NavbarContainer';
import { useNavigate } from 'react-router-dom';

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
  const [charCount1, setCharCount1] = useState(0);
  function handleInputChange1(event) {
    const inputValue = event.target.value;
    setCharCount1(inputValue.length);
  }
  const [charCount2, setCharCount2] = useState(0);
  function handleInputChange2(event) {
    const inputValue = event.target.value;
    setCharCount2(inputValue.length);
  }
  function changeColor(buttonNumber){
    var buttons = document.querySelectorAll("#rating");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('colored');
    }
    buttons[buttonNumber - 1].classList.add('colored');
  }
  const navigate = useNavigate();

const onLogoContainerClick = useCallback(() => {
  navigate("/homesignedin");
}, [navigate]);

const onMoviesTextClick = useCallback(() => {
  navigate("/moviebrowsein");
}, [navigate]);

const onTVShowsTextClick = useCallback(() => {
  navigate("/tvshowbrowsein");
}, [navigate]);

const onGenresTextClick = useCallback(() => {
  navigate("/genresin");
}, [navigate]);

const onFluentcompose24FilledClick = useCallback(() => {
  navigate("/makepost");
}, [navigate]);

const onProfileMenuClick = useCallback(() => {
  // Please sync "UserPage/InSelf" to the project
}, []);
  
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
              maxlength="120"
              onChange={handleInputChange1}
          />
          <center class="charlimit">Characters left: {120-charCount1}</center>
        </div>
        <div className="end">
          <div className="movieorshow">
            <div className="reviewbody1">Review Content</div>
            <textarea className="body19" placeholder="Write your review" cols="80" maxlength="600"
              onChange={handleInputChange2} />
            <center class="charlimit">Characters left: {600-charCount2}</center>
          </div>
          <button className="post" onClick={onPostClick}>
            <div className="login">Post</div>
          </button>
        </div>
      </div>
      <NavbarContainer
          dimensions="/vector35.svg"
          dimensionsText="/fluentcompose24filled1.svg"
          dimensionsId="/profilemenu8.svg"
          propBoxShadow="unset"
          onLogoContainerClick={onLogoContainerClick}
          onMoviesTextClick={onMoviesTextClick}
          onTVShowsTextClick={onTVShowsTextClick}
          onGenresTextClick={onGenresTextClick}
          onFluentcompose24FilledClick={onFluentcompose24FilledClick}
          onProfileMenuClick={onProfileMenuClick}
        />
    </div>
  );
};

export default MakePost;