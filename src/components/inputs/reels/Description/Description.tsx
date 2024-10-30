import React from "react";
import Typography from "../../../typography/Typography.tsx";

type DescriptionProps = {
    tag: string
}

const Description: React.FC<DescriptionProps> = ({tag}) => {
    return(
        <div className={"bg-secondary-900 text-primary-100 rounded-b-lg w-[156px] flex justify-center py-1"}>
            <Typography size={"m"} weight={"regular"}>{"#" + tag}</Typography>
        </div>
    )
}

export default Description;