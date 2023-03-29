import './App.css';
import Comment from './comment'
import pfp from './profilePicture_comment.jpeg'

function App() {
  return (
    <div className="App">

      <Comment name="etherinmatic" profilePic={pfp} body="have you got colour in your cheeks? do you ever get that fear that you cant shift the tide that sticks around like summat in your teeth? are there some aces up your sleeve? have you no idea that youre in deep? ive dreamt about you nearly every night this week. how many secrets can you keep? cause theres this tune i found...hello, its me i was wondering if after all these years youd like to meet to go over everything they say that times supposed to heal ya, but i aint done much healing hello, can you hear me? im in california dreaming about who we used to be when we."/>
      <Comment name="duvylfyluksq" profilePic={pfp} body="well, well, well, well hello, baby for one day, youre here and then youre gone i’m waking up to another day, it’s amazing its getting crazy, thats why i wonder how i keep escaping touching that pain, maybe its just my prayers speak as in the strange ways stuck in."/>
      <Comment name="bobdylan" profilePic={pfp} body="have you got colour in your cheeks? do you ever get that fear that you cant shift the tide that sticks around like summat in your teeth? are there some aces up your sleeve? have you no idea that youre in deep? ive dreamt about you nearly every night this week. how many secrets can you keep? cause theres this tune i....."/>

    </div>
  );
}

export default App;
