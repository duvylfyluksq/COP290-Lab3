import "./CommentForm.css";

const CommentForm = () => {
  return (
    <div className="addcomment1">
      <div className="add-comment1">Add Comment</div>
      <div className="body1">
        <div className="bodyframe1">
          <div className="commentbody">Write Your Comment</div>
        </div>
        <div className="maxchar1">
          <div className="max-characters1">{`Max Characters: 200 `}</div>
        </div>
      </div>
      <button className="comment4">
        <div className="comment5">Comment</div>
      </button>
    </div>
  );
};

export default CommentForm;
