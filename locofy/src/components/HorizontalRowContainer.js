import "./HorizontalRowContainer.css";

const HorizontalRowContainer = ({
  onGenreCardContainerClick,
  onGenreCardContainer1Click,
  onGenreCardContainer2Click,
}) => {
  return (
    <div className="horizontalrow14">
      <div className="genrecard" onClick={onGenreCardContainerClick}>
        <img className="tvshowcard-icon4" alt="" src="/tvshowcard@2x.png" />
        <div className="linearfill7">
          <div className="details7">
            <div className="genre7">Genre</div>
          </div>
        </div>
      </div>
      <div className="genrecard" onClick={onGenreCardContainer1Click}>
        <img className="tvshowcard-icon4" alt="" src="/tvshowcard@2x.png" />
        <div className="linearfill7">
          <div className="details7">
            <div className="genre7">Genre</div>
          </div>
        </div>
      </div>
      <div className="genrecard" onClick={onGenreCardContainer2Click}>
        <img className="tvshowcard-icon4" alt="" src="/tvshowcard@2x.png" />
        <div className="linearfill7">
          <div className="details7">
            <div className="genre7">Genre</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalRowContainer;
