import "./CommentContainer.css";

const CommentContainer = () => {
  return (
    <div className="addcomment">
      <div className="add-comment">Add Comment</div>
      <div className="body">
        <textarea className="bodyframe" placeholder="Write Your Comment" />
        <div className="maxchar">
          <div className="max-characters">{`Max Characters: 200 `}</div>
        </div>
      </div>
      <button className="comment">
        <div className="comment1">Comment</div>
      </button>
    </div>
  );
};

export default CommentContainer;
