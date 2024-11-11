import React from "react";
import Typography from "../../../typography/basic/Typography.tsx";

type DescriptionProps = {
    title: string,
    description: string,
}

const Caption: React.FC<DescriptionProps> = ({title, description}) => {
    return (
        <div
            className={"bg-shadow-black-60 text-secondary-100 w-[360px] h-[165px] flex flex-col pl-6 py-2 pr-[66px] overflow-auto gap-2"}
            style={{
                overflowWrap: "break-word",
                wordBreak: "break-word",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}>
            <div className="relative" >
                <Typography size={"m"} weight={"semiBold"}>
                    {title}
                </Typography>
            </div>
            <div className="relative">
                <Typography size={"m"} weight={"regular"}>
                    {description}
                </Typography>
            </div>
        </div>

    )
}

export default Caption;