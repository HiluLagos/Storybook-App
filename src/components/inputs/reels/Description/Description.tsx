import React from "react";
import Typography from "../../../typography/basic/Typography.tsx";

type DescriptionProps = {
    tag: string
}

const Description: React.FC<DescriptionProps> = ({tag}) => {
    return(
        <div className={"bg-shadow-black-40 text-primary-100 rounded-b-lg w-[156px] flex justify-center p-2"} style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
            <Typography size={"m"} weight={"regular"}>
                {"#" + tag}
            </Typography>
        </div>
    )
}

export default Description;