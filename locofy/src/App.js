import React from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import FrameComponent1 from "./pages/FrameComponent1";
import FrameComponent2 from "./pages/FrameComponent2";
import FrameComponent3 from "./pages/FrameComponent3";
import FrameComponent4 from "./pages/FrameComponent4";
import FrameComponent5 from "./pages/FrameComponent5";
import FrameComponent6 from "./pages/FrameComponent6";
import FrameComponent7 from "./pages/FrameComponent7";
import FrameComponent8 from "./pages/FrameComponent8";
import FrameComponent9 from "./pages/FrameComponent9";
import FrameComponent10 from "./pages/FrameComponent10";
import FrameComponent11 from "./pages/FrameComponent11";
import FrameComponent12 from "./pages/FrameComponent12";
import FrameComponent13 from "./pages/FrameComponent13";
import FrameComponent14 from "./pages/FrameComponent14";
import FrameComponent15 from "./pages/FrameComponent15";
import FrameComponent16 from "./pages/FrameComponent16";
import FrameComponent17 from "./pages/FrameComponent17";
import FrameComponent18 from "./pages/FrameComponent18";
import FrameComponent19 from "./pages/FrameComponent19";
import FrameComponent20 from "./pages/FrameComponent20";
import FrameComponent21 from "./pages/FrameComponent21";
import FrameComponent22 from "./pages/FrameComponent22";
import FrameComponent23 from "./pages/FrameComponent23";
import FrameComponent24 from "./pages/FrameComponent24";
import FrameComponent25 from "./pages/FrameComponent25";
import SignIn from "./pages/SignIn";
import Continue from "./pages/Continue";
import MakePost from "./pages/MakePost";
import SignUp from "./pages/SignUp";
import SignInTile from "./pages/SignInTile";
import { useEffect } from "react";
import ReviewsShowOut from './pages/ReviewsShowOut';
import SearchOut from './pages/SearchOut';
import Searchin from './pages/Searchin';



function App(){


  const action = useNavigationType();
  const location = useLocation();


  const pathname = location.pathname;
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-24":
        title = "";
        metaDescription = "";
        break;
      case "/frame-24":
        title = "";
        metaDescription = "";
        break;
      case "/frame-23":
        title = "";
        metaDescription = "";
        break;
      case "/frame-22":
        title = "";
        metaDescription = "";
        break;
      case "/frame-21":
        title = "";
        metaDescription = "";
        break;
      case "/frame-20":
        title = "";
        metaDescription = "";
        break;
      case "/frame-19":
        title = "";
        metaDescription = "";
        break;
      case "/frame-18":
        title = "";
        metaDescription = "";
        break;
      case "/frame-17":
        title = "";
        metaDescription = "";
        break;
      case "/frame-16":
        title = "";
        metaDescription = "";
        break;
      case "/frame-15":
        title = "";
        metaDescription = "";
        break;
      case "/frame-14":
        title = "";
        metaDescription = "";
        break;
      case "/frame-13":
        title = "";
        metaDescription = "";
        break;
      case "/frame-12":
        title = "";
        metaDescription = "";
        break;
      case "/frame-11":
        title = "";
        metaDescription = "";
        break;
      case "/frame-10":
        title = "";
        metaDescription = "";
        break;
      case "/frame-9":
        title = "";
        metaDescription = "";
        break;
      case "/frame-8":
        title = "";
        metaDescription = "";
        break;
      case "/frame-7":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
      case "/continue":
        title = "";
        metaDescription = "";
        break;
      case "/makepost":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/signintile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/watchlistinother" element={<FrameComponent />} />
      <Route path="/watchlistout" element={<FrameComponent1 />} />
      <Route path="/watchlistinself" element={<FrameComponent2 />} />
      <Route path="/reviewsduvylfyluksqin" element={<FrameComponent3 />} />
      <Route path="/reviewsbobdylanin" element={<FrameComponent4 />} />
      <Route path="/reviewsduvylfyluksqout" element={<FrameComponent5 />} />
      <Route path="/duvylfyluksqinother" element={<FrameComponent6 />} />
      <Route path="/bobdylaninself" element={<FrameComponent7 />} />
      <Route path="/duvylfyluksqout" element={<FrameComponent8 />} />
      <Route path="/reviewsmovieout" element={<FrameComponent9 />} />
      <Route path="/reviewsshowout" element={<ReviewsShowOut />} />
      <Route path="/movieout" element={<FrameComponent10 />} />
      <Route path="/tvshowout" element={<FrameComponent11 />} />
      <Route path="/genresout" element={<FrameComponent12 />} />
      <Route path="/mixedbrowsein" element={<FrameComponent13 />} />
      <Route path="/tvshowbrowsein" element={<FrameComponent14 />} />
      <Route path="/moviebrowseout" element={<FrameComponent15 />} />
      <Route path="/homesignedin" element={<FrameComponent16 />} />
      <Route path="/" element={<FrameComponent17 />} />
      <Route path="/homesignedout" element={<FrameComponent17 />} />
      <Route path="/searchout" element={<SearchOut />} />
      <Route path="/searchin" element={<Searchin />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/continue" element={<Continue />} />
      <Route path="/makepost" element={<MakePost />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/moviebrowsein" element={<FrameComponent18 />} />
      <Route path="/tvshowbrowseout" element={<FrameComponent19 />} />
      <Route path="/mixedbrowseout" element={<FrameComponent20 />} />
      <Route path="/genresin" element={<FrameComponent21 />} />
      <Route path="/tvshowin" element={<FrameComponent22 />} />
      <Route path="/moviein" element={<FrameComponent23 />} />
      <Route path="/reviewsmoviein" element={<FrameComponent24 />} />
      <Route path="/reviewsshowin" element={<FrameComponent25 />} /> 
    </Routes>
  );
}
export default App;
