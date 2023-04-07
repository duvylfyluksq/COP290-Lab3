import { useCallback } from "react";
import ReviewForm from "../components/ReviewForm";
import CommentsSectionContainer from "../components/CommentsSectionContainer";
import CommentForm from "../components/CommentForm";
import "./InExpanded.css";

const InExpanded = () => {
  const onPictureIconClick = useCallback(() => {
    // Please sync "duvylfyluksq-InOther" to the project
  }, []);

  const onDuvylfyluksqTextClick = useCallback(() => {
    // Please sync "duvylfyluksq-InOther" to the project
  }, []);

  return (
    <div className="inexpanded">
      <div className="review1">
        <div className="inexpanded1">
          <ReviewForm
            productIds="/vector3.svg"
            byWidth="unset"
            byAlignSelf="stretch"
            onPictureIconClick={onPictureIconClick}
            onDuvylfyluksqTextClick={onDuvylfyluksqTextClick}
          />
          <CommentsSectionContainer />
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default InExpanded;
