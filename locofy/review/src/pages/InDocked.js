import { useCallback } from "react";
import ReviewForm from "../components/ReviewForm";
import CommentContainer from "../components/CommentContainer";
import "./InDocked.css";

const InDocked = () => {
  const onPictureIconClick = useCallback(() => {
    // Please sync "duvylfyluksq-InOther" to the project
  }, []);

  const onDuvylfyluksqTextClick = useCallback(() => {
    // Please sync "duvylfyluksq-InOther" to the project
  }, []);

  return (
    <div className="indocked">
      <div className="review">
        <div className="indocked1">
          <ReviewForm
            productIds="/vector1.svg"
            byWidth="800px"
            onPictureIconClick={onPictureIconClick}
            onDuvylfyluksqTextClick={onDuvylfyluksqTextClick}
          />
          <CommentContainer />
        </div>
      </div>
    </div>
  );
};

export default InDocked;
