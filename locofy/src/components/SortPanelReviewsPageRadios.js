import "./SortPanelReviewsPageRadios.css";

const SortPanelReviewsPageRadios = () => {
  return (
    <div className="sortpanel-reviewspage">
      <input className="sortbyheader1" type="radio" />
      <div className="sort-reviewpage">
        <div className="likes">
          <div className="button4" />
          <div className="likes1">Likes</div>
        </div>
        <div className="likes">
          <div className="button4" />
          <div className="popularity2">Most Recent</div>
        </div>
      </div>
    </div>
  );
};

export default SortPanelReviewsPageRadios;
