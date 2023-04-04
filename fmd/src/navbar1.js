import React from "react";
import './Website/style_navbar.css';
import makepost from './Website/images/navbar/add_a_post.jpg';
import logo from './Website/images/navbar/Logo.jpg';
// import { library, dom } from '@fortawesome/fontawesome-free';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// library.add(faSearch);

function NavBar(props){
    return (
    <div class="navbar">
        <a href="#Home_signedin">
        <img src={logo} alt = "logo" class="logo" />
        </a>
        <a href="#Movies" class="movies">Movies</a>
        <a href="#TV Shows" class="tv">TV Shows</a>
        <a href="#Genres" class="genre">Genres</a>
        <div class="search">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search Movies or TV Shows" />
        </div>
        <a href="#Add_a_post" class="add">
        <img src={makepost} alt="makepost" />
        </a>
        <pre>        </pre>               
        <div class="rhs">
        <button class="signedin">
        <img src={props.pic} alt ="eh" class = "profile" />
        </button>
        <div class="dropdown">
            <span class="name">{props.username}</span>
            <hr />
            <a href="#Watchlist">Watchlist</a><br />
            <a href="#userpage">View Profile</a><br />
            <hr />
            <a href="#signout">Logout</a>
        </div>
        </div>
    </div>
);
}

export default NavBar;