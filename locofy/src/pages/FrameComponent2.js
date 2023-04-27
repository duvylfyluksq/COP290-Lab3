import React, { useEffect, useState } from 'react';
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import WatchListMovieContainer from "../components/WatchListMovieContainer";
import Footer from "../components/Footer";
import NavbarContainer from "../components/NavbarContainer";
import "./FrameComponent2.css";
import { UserApi } from '../api/UserApi';
import { Title } from '../model/Title';

const userapi =  new  UserApi();

const FrameComponent2 = () => {
  const location = useLocation();
  const [watchlist,setWatchlist] = useState([]);
  const [user,setUser] = useState(location.state.user);

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  useEffect(()=> {
    userapi.watchlistUserIdGet(
      user.user_id,
      (error, data, response) => {
        console.log("rip");
        if (response.status === 200) {
          const watchlist = data
            .map((watchlistData) =>
              Title.constructFromObject(watchlistData)
            );
          console.log(watchlist);
          setWatchlist(watchlist);
          console.log("hello");
        } else {
          console.log(error);
        }
      }
    ); 
  },[user])


  return (
    <div className="watchlist-inself-parent">
      <div className="watchlist-inself">
        <div className="body2">
          <div className="watchlistheader2">
            <div className="watchlist2">Watchlist</div>
            <img className="vector-icon2" alt="" src="/watchlist.svg" />
          </div>
          <div className="watchlistdisplay2">
          {watchlist.map((title, index) => {
                if (!!title.movie) {
                  return (
                    <WatchListMovieContainer
                      key={index}
                      user = {user}
                      movie={title.movie}
                      updateUser={updateUser}
                    />
                  );
                } else {
                  return (
                    <Footer
                      key={index}
                      user ={user}
                      show={title.tvshow}
                      updateUser={updateUser}
                    />
                  );
                }
              })}
          </div>
        </div>
        <NavbarContainer
          propBoxShadow="unset"
          user = {user}
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
