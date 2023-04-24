import React from 'react';
import "./comment.css";
import { useState, useEffect } from 'react';
import {UserApi} from "../api/UserApi";
import {User} from "../model/User";

const userapi = new UserApi();
const Comment = ({
  comment,
  picture,
  duvylfyluksq}) => {
    const [user, setUser] = useState({});

    
  
    useEffect(() => {
      userapi.userUserIdGet(comment.user_id, (error, data, response) => {
        if (error) {
          console.log(error);
          return;
        }
        
        if (response.status === 200) {
          const newUser = User.constructFromObject(data); // define User class first
          console.log(newUser);
          setUser(newUser);
        } else {
          console.log(response.statusText);
        }
      });
    }, [comment.user_id]);


  return (
    <div className="commenttttt">
      <div className="reviewername1">
          <div className="sublayout7">
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
