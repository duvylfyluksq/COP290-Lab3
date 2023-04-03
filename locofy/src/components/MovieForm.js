import "./MovieForm.css";

const MovieForm = ({
  imageDimensions,
  imageDimension175x15,
  onMovieCardContainerClick,
}) => {
  return (
    <div className="moviecard21" onClick={onMovieCardContainerClick}>
      <img className="moviecard-icon21" alt="" src={imageDimensions} />
      <div className="linearfill46">
        <div className="details46">
          <div className="rating61">
            <div className="xy1051">x.y/10</div>
            <img className="vector-icon81" alt="" src={imageDimension175x15} />
          </div>
          <div className="title56">Title</div>
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
