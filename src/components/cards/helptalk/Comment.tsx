import {HeartIcon} from "../../icon/tech/heart/HeartIcon.tsx";
import User from "../../icon/utility/user/User.tsx";
import ExpandTypography from "../../typography/expandable/ExpandTypography.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import React, {useState} from "react";

type ButtonProps = {
    expanded?: boolean;
    comment: string;
    author: string
}

const Comment: React.FC<ButtonProps> = ({expanded = false, comment, author}: ButtonProps) => {
    const [liked, setLiked] = useState(false);
    return (
        <div className="flex flex-row items-center justify-center space-x-4 space-y-4 px-4 py-2 w-[360px]">
            <div className="w-[288px]">
                <div className="flex flex-row items-center justify-start space-x-2">
                    <User size={"small"}/>
                    <Typography weight={"regular"} size={"m"} >{author}</Typography>
                </div>
                <div className="ml-10">
                    <ExpandTypography expanded={expanded} weight={"regular"} size={"p"} >{comment}</ExpandTypography>
                </div>
            </div>
            <button className="" onClick={() => setLiked(!liked)}>
                <HeartIcon size={"small"} intent={liked ? "selected" : "unselected"} />
            </button>
        </div>
    )
}

export default Comment;