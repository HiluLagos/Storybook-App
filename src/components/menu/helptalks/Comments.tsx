// src/components/menu/helptalks/Comments.tsx
import Comment from "../../cards/helptalk/Comment.tsx";
import React, { useState } from "react";
import Typography from "../../typography/basic/Typography.tsx";
import DraggableDrawer from "../utility/drawer/Drawer.tsx";
import CommentIcon from "../../icon/tech/comment/CommentIcon.tsx";
import Type from "../../inputs/type/Type.tsx";

type CommentsProps = {
  comments: {
    username: string;
    text: string;
  }[];
};

const Comments: React.FC<CommentsProps> = ({ comments }: CommentsProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDrawerOpen(true)}>
        <CommentIcon />
      </button>
      <DraggableDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} pxHeight={582}>
          <div className="h-full">
              <div
                  className={`flex-grow overflow-y-auto w-[360px] scrollbar-hide h-full max-h-[calc(100%-70px)]`}
              >
                  {comments.length === 0 ? (
                      <div className="h-[450px] flex items-center justify-center">
                          <Typography size="h5" weight="semiBold">
                          Be the first one to comment
                        </Typography>
                      </div>

                  ) : (
                      comments.map((comment, index) => (
                          <Comment key={index} author={comment.username} comment={comment.text}/>
                      ))
                  )}

              </div>
              <div className="fixed bottom-0 w-[360px] flex justify-center bg-white h-14">
                  <Type/>
              </div>
          </div>
      </DraggableDrawer>
    </div>
  );
};

export default Comments;