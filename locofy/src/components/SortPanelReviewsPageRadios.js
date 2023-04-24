import React from 'react';
import "./SortPanelReviewsPageRadios.css";
import {useState, useCallback, useEffect } from "react";



const SortPanelReviewsPageRadios = ({ onSortTypeChange ,onFilterChange}) => {
  

  function changeColor(buttonNumber){

    switch(buttonNumber){
      case 1: 
        onFilterChange("Likes");
        break;
      case 2: 
        onFilterChange("Recent");
        break;
    }
    var buttons = document.querySelectorAll("#button");
    for (var i = 0; i < buttons.length; i++) {
      if (i == buttonNumber - 1) {
        buttons[i].classList.add('colored');
    } else {
        buttons[i].classList.remove('colored');
    }
    }
  }

  function active(buttonNumber){

    switch(buttonNumber){
      case 1: 
        onSortTypeChange(false)
        break;
      case 2: 
        onSortTypeChange(true)
        break;
      default:
        onSortTypeChange(false)

    }
    var logos = document.querySelectorAll("#sorting");
    for (var i = 0; i < logos.length; i++) {
      if (i == buttonNumber - 1) {
        logos[i].classList.add('coloured');
    } else {
        logos[i].classList.remove('coloured');
    }
    }
  }
  return (
    <div className="sortpanel-reviewspage">
      <div className="sort-by">Sort By
        <div className="ascendingdescendinginteraction">
                <img id='sorting' className="vector-icon12" alt="" src="/vector25.svg" onClick={() => active(1)} />
                <img id='sorting' className="vector-icon12" alt="" src="/vector26.svg" onClick={() => active(2)} />
        </div>
      </div>
      {/* <input className="sortbyheader1" type="radio" /> */}
      <div className="sort-reviewpage">
        <div className="popularity">
          <div id='button' className="button" onClick={() => changeColor(1)} />
          <div className="releasedate1">Likes</div>
        </div>
                <div className="popularity">
                  <div id='button' className="button" onClick={() => changeColor(2)} />
                  <div className="alphabetical">Most Recent</div>
                </div>
      </div>
    </div>          
  );
};

export default SortPanelReviewsPageRadios;
