import { useMemo } from "react";
import "./EtherinmaticComment.css";

const EtherinmaticComment = ({ propAlignSelf, propWidth, propAlignSelf1 }) => {
  const commenter1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const commentText1Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);

  return (
    <div className="comment3">
      <div className="commenter1" style={commenter1Style}>
        <img className="picture-icon3" alt="" src="/picture1@2x.png" />
        <div className="etherinmatic1">etherinmatic</div>
      </div>
      <div className="commenttext1" style={commentText1Style}>
        have you got colour in your cheeks? do you ever get that fear that you
        cant shift the tide that sticks around like summat in your teeth? are
        there some aces up your sleeve? have you no idea that youre in deep? ive
        dreamt about you nearly every night this week. how many secrets can you
        keep? cause theres this tune i.....
      </div>
    </div>
  );
};

export default EtherinmaticComment;
