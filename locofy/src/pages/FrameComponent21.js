import React from 'react';
import { useCallback } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import HorizontalRowContainer from "../components/HorizontalRowContainer";
import NavbarContainer from '../components/NavbarContainer';
import "./FrameComponent12.css";

const FrameComponent20 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="genres-out-parent">
      <div className="genres-out">
        <div className="body12">
          <div className="genres2">Genres</div>
          <div className="list">
            <HorizontalRowContainer
              a='Adventure'
              b='Action'
              c='Drama'
              user={user}
            />
            <HorizontalRowContainer
              a='Comedy'
              b='Romance'
              c='Horror'
              user={user}
            />
            <HorizontalRowContainer
              a='Thriller'
              b='Sci-Fi'
              c='Mystery'
              user={user}
            />
            <HorizontalRowContainer
              a='Crime'
              b='Animation'
              c='Biography'
              user={user}
            />
            <HorizontalRowContainer
              a='History'
              b='War'
              c='Sport'
              user={user}
            />
            <HorizontalRowContainer
              a='Fantasy'
              b='Documentary'
              c='Dark'
              user={user}
            />
            <HorizontalRowContainer
              a='Psychological'
              b='Western'
              c='Musical'
              user={user}
            />
          </div>
        </div>
        <NavbarContainer
          propBoxShadow="unset"
          user={user}
        />
      </div>
    </div>
  );
};

export default FrameComponent20;
