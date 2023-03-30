import React from 'react';
import './browsecard.css';
import GenreTile from './genre_tile'
// title, poster, year, rating, duration, cast, genres...
function Browsecard(props) {
    return (
        <div className="card">
          <div className="poster">
            <img src={props.poster} alt="poster" />
          </div>
          <div className="data">
            <div className="top">
                <p id="movietitle">{props.title}</p>
                <p id="year">({props.year})</p>
            </div>
            <div className="middle">
                <p id="rating">{props.rating}/10</p>
                <p id="duration">{props.duration}</p>
            </div>
            <div className="bottom">
                <p id="cast">Cast: {props.cast}</p>
                <div className='genrelist'>
                    <GenreTile genre={props.genre1}/>
                    <GenreTile genre={props.genre2}/>
                    <GenreTile genre={props.genre3}/>
                </div>
            </div>
          </div>
        </div>
      );
}
export default Browsecard;