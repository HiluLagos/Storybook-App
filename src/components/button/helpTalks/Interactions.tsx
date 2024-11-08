import React, { useState } from "react";
import { HeartIcon } from "../../icon/tech/heart/HeartIcon.tsx";
import { SavedReelsIcon } from "../../icon/tech/saved/SavedReelsIcon.tsx";
import CommentIcon from "../../icon/tech/comment/CommentIcon.tsx";

const Interactions: React.FC = () => {
  const [isHeartSelected, setIsHeartSelected] = useState(false);
  const [isCommentSelected, setIsCommentSelected] = useState(false);
  const [isSavedSelected, setIsSavedSelected] = useState(false);

  return (
    <div className="flex flex-col space-y-6 p-2 text-secondary-100">
      <HeartIcon
        intent={isHeartSelected ? "selected" : "unselected"}
        onClick={() => setIsHeartSelected(!isHeartSelected)}
      />
      <CommentIcon
        intent={isCommentSelected ? "selected" : "unselected"}
        onClick={() => setIsCommentSelected(!isCommentSelected)}
      />
      <SavedReelsIcon
        intent={isSavedSelected ? "selected" : "unselected"}
        onClick={() => setIsSavedSelected(!isSavedSelected)}
      />
    </div>
  );
};

export default Interactions;