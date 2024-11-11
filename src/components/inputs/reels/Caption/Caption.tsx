import React from "react";
import ExpandTypography from "../../../typography/expandable/ExpandTypography.tsx";

type DescriptionProps = {
    title: string,
    description: string,
}

const Caption: React.FC<DescriptionProps> = ({title, description}) => {
    return (
        <div className="relative w-[360px] min-h-28 bg-shadow-black-40 pb-2 inset-0 filter blur-4px">
            <div className="relative h-full w-full text-secondary-100 flex flex-col pl-6 py-2 pr-[66px] gap-1.5"
                style={{
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                }}>
                <div>
                    <ExpandTypography size={"m"} weight={"semiBold"} limit={40}>
                        {title}
                    </ExpandTypography>
                </div>
                <div>
                    <ExpandTypography size={"m"} weight={"regular"} limit={40}>
                        {description}
                    </ExpandTypography>
                </div>
            </div>
        </div>
    )
}

export default Caption;