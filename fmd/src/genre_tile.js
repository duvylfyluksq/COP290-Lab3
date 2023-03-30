import React from 'react';
import './genre_tile.css'

function GenreTile(props) {  
  return (
    <div className="tile">
      {props.genre}
    </div>
  );
}

export default GenreTile;
