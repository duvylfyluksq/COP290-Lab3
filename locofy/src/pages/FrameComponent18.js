import React from 'react';
import { useCallback,useState,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MovieDescriptionContainerBrows from "../components/MovieDescriptionContainerBrows";
import NavbarContainer from '../components/NavbarContainer';
import "./FrameComponent15.css";
import { Movie } from '../model/Movie';
import { TitlesApi } from '../api/TitlesApi';


const api = new TitlesApi();
const FrameComponent18 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;

  const [movies, setMovies] = useState([]);
  const [selectedgenre, setSelectedGenre] = useState([]);
  const [sortparam, setSortparam] = useState("Rat");
  const [sortype,setsorttype] = useState(false);
 
  useEffect(() => {
   
    api.movieGet({sortTypeBrowse: sortparam, genre: selectedgenre, sortOrder: sortype},(error, data, response) => {
      if (response.status === 200) {
        const movieList = data.map((movieData) =>
        Movie.constructFromObject(movieData)
        );
        setMovies(movieList);

      } else {
        console.log(error);
      }
    });
  }, [selectedgenre,sortparam,sortype]);

  function changeColor(buttonNumber){
    
    switch(buttonNumber){
      case 1:
        setSortparam("Rat");
        break;
      case 2:
        setSortparam("Pop");
        break;
      case 3:
        setSortparam("Rel");
        break;
      case 4:
      setSortparam("Lex")
      break;
      default:
        setSortparam("Rat");
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

  function changecolour(buttonNumber) {
    var genres = document.querySelectorAll("#adventure");
    var genreText = genres[buttonNumber].innerText;
  
    if (genres[buttonNumber].classList.contains('colored2')) {
      genres[buttonNumber].classList.remove('colored2');
      setSelectedGenre((prevSelectedGenre) => {
        return prevSelectedGenre.filter((genre) => genre !== genreText);
      });
    } else {
      genres[buttonNumber].classList.add('colored2');
      setSelectedGenre((prevSelectedGenre) => {
        return [...prevSelectedGenre, genreText];
      });
    }
  }
  

  function active(buttonNumber){
    switch(buttonNumber){
      case 1:
        setsorttype(false);
        break;
      case 2:
        setsorttype(true);
        break;
      default:
        setsorttype(false);
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
      <div className="moviebrowse-out">
        <div className="scrolllist2">
          {movies.map((movie, index) => (
            <MovieDescriptionContainerBrows
              user = {user}
              key={index}
              movie = {movie}
              productId="/vector31.svg"
            />
          ))}
        </div>

        <div className="left2">
          <div className="sort">
            <div className="sortbyheader">
              <div className="sort-by">Sort By</div>
              <div className="ascendingdescendinginteraction">
                <img id='sorting' className="vector-icon12" alt="" src="/vector25.svg" onClick={() => active(1)} />
                <img id='sorting' className="vector-icon13" alt="" src="/vector26.svg" onClick={() => active(2)} />
              </div>
            </div>
            <div className="sortfieldsinteraction">
              <div className="horizontallist">
                <div className="popularity">
                  <div id='button' className="button" onClick={() => changeColor(1)} />
                  <div className="rating3">Rating</div>
                </div>
                <div className="popularity">
                  <div id='button' className="button" onClick={() => changeColor(2)} />
                  <div className="popularity1">Popularity</div>
                </div>
              </div>
              <div className="horizontallist1">
                <div className="popularity">
                  <div id='button' className="button" onClick={() => changeColor(3)} />
                  <div className="releasedate1">Release Date</div>
                </div>
                <div className="popularity">
                  <div id='button' className="button" onClick={() => changeColor(4)} />
                  <div className="alphabetical">Alphabetical</div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="filterheader">
              <div className="filter1">Filter</div>
              <img className="vector-icon14" alt="" src="/vector27.svg" />
            </div>
            <div className="genretags">
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(0)}>
                  <div className="adventure">Adventure</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(1)}>
                  <div className="adventure">Action</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(2)}>
                  <div className="adventure">Drama</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(3)}>
                  <div className="adventure">Comedy</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(4)}>
                  <div className="adventure">Romance</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(5)}>
                  <div className="adventure">Horror</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(6)}>
                  <div className="adventure">Thriller</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(7)}>
                  <div className="adventure">Sci-Fi</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(8)}>
                  <div className="adventure">Mystery</div>
                </div>
              </div>
              <div className="horizontalrow">
              <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(9)}>
                  <div className="adventure">Crime</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(10)}>
                  <div className="adventure">Animation</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(11)}>
                  <div className="adventure">Biography</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(12)}>
                  <div className="adventure">History</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(13)}>
                  <div className="adventure">War</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(14)}>
                  <div className="adventure">Sport</div>
                </div>
              </div>
              <div className="horizontalrow">
              <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(15)}>
                  <div className="adventure">Fantasy</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction904" onClick={() =>changecolour(16)}>
                  <div className="adventure">Documentary</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(17)}>
                  <div className="adventure">Dark</div>
                </div>
              </div>
              <div className="horizontalrow">
                <div id='adventure' className="filterbrowseinteraction904" onClick={() =>changecolour(18)}>
                  <div className="adventure">Psychological</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(19)}>
                  <div className="adventure">Western</div>
                </div>
                <div id='adventure' className="filterbrowseinteraction" onClick={() =>changecolour(20)}>
                  <div className="adventure">Musical</div>
                </div>
              </div>
            </div>
          </div>

          <NavbarContainer
            user = {user}
            propBoxShadow="unset"
          />
      </div>
    </div>
  );
};

export default FrameComponent18;
