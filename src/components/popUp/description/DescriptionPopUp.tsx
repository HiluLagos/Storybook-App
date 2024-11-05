import React, { useState } from "react";
import Cross from "../../icon/utility/cross/Cross.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import { Button } from "../../button/utility/button/Button.tsx";

type DescriptionPopUpProps = {
    intent: "incomplete" | "default";
    title: string;
    description: string;
};

const DescriptionPopUp: React.FC<DescriptionPopUpProps> = ({ intent, title = "Title of tasks", description = "Description of tasks" }) => {
    const [currentIntent, setCurrentIntent] = useState(intent);

    const toggleIntent = () => {
        setCurrentIntent(prevIntent => (prevIntent === "incomplete" ? "default" : "incomplete"));
    };

    const value = currentIntent === "incomplete" ? "To do" : "Done";

    return (
        <div className={"flex flex-col w-72 rounded-2xl p-5 space-y-4 bg-bg-default"}>
            <div className={"self-end"}>
                <Cross />
            </div>
            <div className={"space-y-2"}>
                <div className={"flex flex-col space-y-2"}>
                    <div className={"bg-primary-300 rounded-xl p-2"}>
                        <Typography weight={"semiBold"} size={"p"}>{title}</Typography>
                    </div>
                    <div className={"bg-primary-100 rounded-xl p-2"}>
                        <Typography weight={"regular"} size={"p"}>{description}</Typography>
                    </div>
                </div>
                <div className={"space-y-2 p-2 flex flex-col items-center justify-center"}>
                    <Button intent={currentIntent} size={"small"} value={value} onClick={toggleIntent} />
                </div>
            </div>
        </div>
    );
};

export default DescriptionPopUp;