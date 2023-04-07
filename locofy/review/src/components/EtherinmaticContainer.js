import { useMemo } from "react";
import "./EtherinmaticContainer.css";

const EtherinmaticContainer = ({
  propAlignSelf,
  propAlignSelf1,
  propWidth,
}) => {
  const commenterStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const commentTextStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth,
    };
  }, [propAlignSelf1, propWidth]);

  return (
    <div className="comment2">
      <button className="commenter" style={commenterStyle}>
        <img className="picture-icon2" alt="" src="/picture1@2x.png" />
        <div className="etherinmatic">etherinmatic</div>
      </button>
      <div className="commenttext" style={commentTextStyle}>
        have you got colour in your cheeks? do you ever get that fear that you
        cant shift the tide that sticks around like summat in your teeth? are
        there some aces up your sleeve? have you no idea that youre in deep? ive
        dreamt about you nearly every night this week. how many secrets can you
        keep? cause theres this tune i.....
      </div>
    </div>
  );
};

export default EtherinmaticContainer;
