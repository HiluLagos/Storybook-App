import React from "react";
import {HeartIcon} from "../../icon/tech/heart/HeartIcon.tsx";
import {SavedReelsIcon} from "../../icon/tech/saved/SavedReelsIcon.tsx";
import CommentIcon from "../../icon/tech/comment/CommentIcon.tsx";


const Interactions: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 p-2 text-secondary-100">
      <HeartIcon />
      <CommentIcon />
      <SavedReelsIcon />
    </div>
  );
};

export default Interactions;