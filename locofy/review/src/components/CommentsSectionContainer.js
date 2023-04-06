import EtherinmaticContainer from "./EtherinmaticContainer";
import EtherinmaticComment from "./EtherinmaticComment";
import "./CommentsSectionContainer.css";

const CommentsSectionContainer = () => {
  return (
    <div className="commentssection1">
      <EtherinmaticContainer />
      <EtherinmaticContainer
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propWidth="unset"
      />
      <EtherinmaticContainer
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propWidth="unset"
      />
      <EtherinmaticContainer
        propAlignSelf="unset"
        propAlignSelf1="unset"
        propWidth="960px"
      />
      <EtherinmaticComment />
      <EtherinmaticComment
        propAlignSelf="stretch"
        propWidth="unset"
        propAlignSelf1="stretch"
      />
      <EtherinmaticContainer
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propWidth="unset"
      />
      <EtherinmaticContainer
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propWidth="unset"
      />
      <EtherinmaticComment
        propAlignSelf="stretch"
        propWidth="unset"
        propAlignSelf1="stretch"
      />
    </div>
  );
};

export default CommentsSectionContainer;
