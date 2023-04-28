import React from 'react';
import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MoviesContainer from '../components/MoviesContainer';
import "./Continue.css";
import {UserApi} from '../api/UserApi';
import { UserIdBioBody } from '../model/UserIdBioBody';
import { UserIdInterestsBody } from '../model/UserIdInterestsBody';
import {User} from '../model/User';

const Continue = () => {
  
  const navigate = useNavigate();
  const [bio, setBio] = useState('');
  const api = new UserApi();


  const location = useLocation();
  const user = location.state.user;

  const updateUserBio = (bio) => {
    const bioBody = new UserIdBioBody(bio);
      const opts = {
        body: bioBody,
      };
    api.profileUserIdBioPut(user.user_id, opts, (error, data, response) => {
      if (error) {
        console.error("Error occurred:", error);
        return;
      }
      if (response.status === 200) {
        console.log("Bio updated successfully");
        user.bio = bio;
        navigate("/homesignedin", {state: {user}});
      } else {
        console.log("Failed to update bio:", response.body);
      }
    });
  };

  const updateUserInterests = (interests) => {
    const interestsBody = new UserIdInterestsBody(interests);
      const opts = {
        body: interestsBody,
      };
    api.profileUserIdInterestsPut(user.user_id, opts, (error, data, response) => {
      if (error) {
        console.error("Error occurred:", error);
        return;
      }
      if (response.status === 200) {
        console.log("Interests updated successfully");
        user.interests = interests;
        updateUserBio(bio);
      } else {
        console.log("Failed to update interests:", response.body);
      }
    });
  };
  
  

  const onContinueClick = useCallback(() => {
    var selected = [];
    var genres = document.querySelectorAll(".filterbrowseinteraction21");
    console.log(genres);
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].classList.contains('colored2')) {
        selected.push(genres[i].textContent);
      }
    }
    if (selected.length !== 3) {
      alert('Please select exactly 3 interests before continuing');
      return;
    }
    console.log(selected);
    updateUserInterests(selected);
  }, [api, bio, navigate]);
  


  

  function changecolour(buttonNumber){
    var genres = document.querySelectorAll(".filterbrowseinteraction21");
    if(genres[buttonNumber].classList.contains('colored2')){
    genres[buttonNumber].classList.remove('colored2');
    }else{
    genres[buttonNumber].classList.add('colored2');
    }
  }

  return (
    <div className="continue">
      <div className="body16">
        <div className="bio">
          <div className="bio1">Bio</div>
          <textarea
            className="body17"
            type="text"
            placeholder="What kind of a film buff are you?"
            maxLength={200}
            required
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="select">
          <div className="header">
            <div className="select1">Select 3 of your favourite genres</div>
          </div>
          <div className="genretags1">
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(0)}>
                <div className="adventure21" >Adventure</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(1)}>
                <div className="adventure21" >Action</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(2)}>
                <div className="adventure21" >Drama</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(3)}>
                <div className="adventure21">Comedy</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(4)}>
                <div className="adventure21">Romance</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(5)}>
                <div className="adventure21">Horror</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(6)}>
                <div className="adventure21">Thriller</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(7)}>
                <div className="adventure21">Sci-Fi</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(8)}>
                <div className="adventure21">Mystery</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(9)}>
                <div className="adventure21">Crime</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(10)}>
                <div className="adventure21" >Animation</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(11)}>
                <div className="adventure21" >Biography</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(12)}>
                <div className="adventure21" >History</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(13)}>
                <div className="adventure21" >War</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(14)}>
                <div className="adventure21" >Sport</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(15)}>
                <div className="adventure21" >Fantasy</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(16)}>
                <div className="adventure21" >Documentary</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(17)}>
                <div className="adventure21" >Dark</div>
              </button>
            </div>
            <div className="horizontalrow7">
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(18)}>
                <div className="adventure21" >Psychological</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(19)}>
                <div className="adventure21" >Western</div>
              </button>
              <button className="filterbrowseinteraction21" onClick={() =>changecolour(20)}>
                <div className="adventure21" >Musical</div>
              </button>
            </div>
          </div>
        </div>
        <button className="continue1" onClick={onContinueClick}>
          <div className="continue2">Continue</div>
        </button>
      </div>
      <MoviesContainer/>
    </div>
  );
};

export default Continue;
