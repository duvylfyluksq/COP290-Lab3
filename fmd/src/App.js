import './App.css';
import Comment from './comment'
import GenreTile from './genre_tile'
import UserProfile from './user_profile';
import pfp from './profilePicture_comment.jpeg'
import userpfp from './profilePicture_user.jpeg'
import BrowsecardShow from './browsecard_show';
import BrowsecardMovie from './browsecard_movie';
import Review from './review';
import NavBar from './navbar1';

function App() {
  return (
    <div className="App">
      <NavBar pic={userpfp} username="duvyflfyluksq" />
      <UserProfile pic={userpfp} username="duvylfyluksq" bio="Im a puppet on a string tracy island, time-traveling diamond cutter-shaped heartaches that come to find you four in some velvet morning years too late..." 
      interest1="Adventure" interest2="Romance" interest3="Comedy" posts="424242" likes="424242" comments="424242"/>

      <BrowsecardMovie poster={pfp} title="Joker" year="2017" rating="9.36" duration="2hrs 2mins" cast="John Doe, John Doe, Jane Doe" genre1="Crime" genre2="Dark" genre3="Thriller"/>
      <BrowsecardShow poster={pfp} title="Joker" season="7" year="2017" rating="9.36" duration="2hrs 2mins" cast="John Doe, John Doe, Jane Doe" genre1="Crime" genre2="Dark" genre3="Thriller"/>

      <Comment name="etherinmatic" profilePic={pfp} body="have you got colour in your cheeks? do you ever get that fear that you cant shift the tide that sticks around like summat in your teeth? are there some aces up your sleeve? have you no idea that youre in deep? ive dreamt about you nearly every night this week. how many secrets can you keep? cause theres this tune i found...hello, its me i was wondering if after all these years youd like to meet to go over everything they say that times supposed to heal ya, but i aint done much healing hello, can you hear me? im in california dreaming about who we used to be when we."/>
      <Comment name="duvylfyluksq" profilePic={pfp} body="well, well, well, well hello, baby for one day, youre here and then youre gone i’m waking up to another day, it’s amazing its getting crazy, thats why i wonder how i keep escaping touching that pain, maybe its just my prayers speak as in the strange ways stuck in."/>
      <Comment name="immiscible-blade" profilePic={pfp} body="have you got colour in your cheeks? do you ever get that fear that you cant shift the tide that sticks around like summat in your teeth? are there some aces up your sleeve? have you no idea that youre in deep? ive dreamt about you nearly every night this week. how many secrets can you keep? cause theres this tune i....."/>
      <Comment name="duvylfyluksq" profilePic={pfp} body="well, well, well, well hello, baby for one day, youre here and then youre gone i’m waking up to another day, it’s amazing its getting crazy, thats why i wonder how i keep escaping touching that pain, maybe its just my prayers speak as in the strange ways stuck in."/>
      <Comment name="duvylfyluksq" profilePic={pfp} body="well, well, well, well hello, baby for one day, youre here and then youre gone i’m waking up to another day, it’s amazing its getting crazy, thats why i wonder how i keep escaping touching that pain, maybe its just my prayers speak as in the strange ways stuck in."/>
      <Comment name="duvylfyluksq" profilePic={pfp} body="well, well, well, well hello, baby for one day, youre here and then youre gone i’m waking up to another day, it’s amazing its getting crazy, thats why i wonder how i keep escaping touching that pain, maybe its just my prayers speak as in the strange ways stuck in."/>
      <Comment name="duvylfyluksq" profilePic={pfp} body="well, well, well, well hello, baby for one day, youre here and then youre gone i’m waking up to another day, it’s amazing its getting crazy, thats why i wonder how i keep escaping touching that pain, maybe its just my prayers speak as in the strange ways stuck in."/>
      <Comment name="duvylfyluksq" profilePic={pfp} body="well, well, well, well hello, baby for one day, youre here and then youre gone i’m waking up to another day, it’s amazing its getting crazy, thats why i wonder how i keep escaping touching that pain, maybe its just my prayers speak as in the strange ways stuck in."/>
      <GenreTile genre="Adventure"/>
      <Review reviewtitle="AChha hai" username="johnwick" profilePic={pfp} rating="8.9" body="ifasjdfbasjdjbnvkjsdnSJKDNF Adkdfnja dnfdfjANDDJan  AJASNK FNAJDAFNF"/>
    </div>
  );
}

export default App;
