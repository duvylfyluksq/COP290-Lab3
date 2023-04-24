import React from 'react';
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReviewsContainer from "../components/ReviewsContainer";
import ReviewContainer from "../components/ReviewContainer";
import MoviesContainer from "../components/MoviesContainer";
import "./FrameComponent9.css";
import SortPanelReviewsPageRadios from '../components/SortPanelReviewsPageRadios';


const FrameComponent25 = () => {
    const navigate = useNavigate();
    return (
        <div className="reviews-movie-out-parent">
        <div className="reviews-movie-out">
          <div className="body9">
            <div className="reviewsheader3">
              <div className="showing3">Showing Reviews For</div>
              <div className="title">{mov.title}</div>
            </div>
            <SortPanelReviewsPageRadios onSortTypeChange={onSortTypeChange} onFilterChange = {onFilterChange} />
            
            <div className="reviewlist9999999">
              <div className="reviews">Reviews</div>
              <div className="reviews139">
                {reviewblock}
              </div>
          </div>
          <NavbarContainer
            user = "123"
            dimensions="/vector35.svg"
            dimensionsText="/fluentcompose24filled1.svg"
            dimensionsId="/profilemenu8.svg"
            propBoxShadow="unset"
          />
        </div>
      </div>
      </div>
    );
  };

export default FrameComponent25;