import TopNotch from "../../icon/settings/drawer/topNotch/TopNotch.tsx";
import Comment from "../../cards/helptalk/Comment.tsx";
import React from "react";
import Typography from "../../typography/basic/Typography.tsx";

type CommentsProps = {
    comments: {
        username: string;
        text: string;
    }[];
}

const Comments: React.FC<CommentsProps> = ({ comments }: CommentsProps) => {
    return (
        <div className="relative h-[582px] w-[360px] overflow-y-auto border border-gray-200 rounded-t-2xl scrollbar-hide">
            <div className="absolute top-0">
                <TopNotch />
            </div>
            <div className={`flex flex-col ${comments.length === 0 ? "justify-center items-center h-full p-[87px]" : "pt-10 space-y-1"}`}>
                {comments.length === 0 ? (
                    <Typography size="h5" weight="semiBold">
                        Be the first one to comment
                    </Typography>
                ) : (
                    comments.map((comment, index) => (
                        <Comment key={index} author={comment.username} comment={comment.text} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Comments;
