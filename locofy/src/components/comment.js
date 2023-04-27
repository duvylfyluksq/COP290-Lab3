import React from 'react';
import "./comment.css";
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {UserApi} from "../api/UserApi";
import {User} from "../model/User";

const userapi = new UserApi();



const Comment = ({
  user,
  comment,
  host = [],
  }) => {

    const navigate = useNavigate();

    const onUserClick = useCallback(() => {
      const isUser = host.length !== 0;
      var isHost; 
      if (host.length != 0) {
        isHost = (host.user_id === user.user_id);
      }
      else {
        isHost = false;
      }
      if (isUser) {
        if (isHost){
          navigate("/bobdylaninself", {state: {user, host}});
        }
        else {
          navigate("/duvylfyluksqinother", {state: {user, host}});
        }
      }
      else {
        navigate("/duvylfyluksqout", {state: {user}});
      }
    }, [navigate]);

  return (
    <div className="commenttttt">
      <div className="reviewername1">
          <div className="sublayout7" onClick={onUserClick}>
            <img
              className="picture-icon1"
              alt=""
              src={user.pfp}
            />
            <div className="duvylfyluksq1">
              {user.username}
            </div>
          </div>
        </div>
        <div className="contentt">
        {comment.content}
        </div>
    </div>
  );
};

export default Comment;
