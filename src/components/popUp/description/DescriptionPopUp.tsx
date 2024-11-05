import React from "react";
import Cross from "../../icon/utility/cross/Cross.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import {Button} from "../../button/utility/button/Button.tsx";

type DescriptionPopUpProps = {
    intent: "incomplete" | "default"
};

const DescriptionPopUp: React.FC<DescriptionPopUpProps> = ({intent}) => {
    const value = intent === "incomplete" ? "To do" : "Done";
    return (
        <div className={"flex flex-col w-72 rounded-2xl p-5 space-y-4 bg-bg-default"}>
            <div className={"self-end"}>
                <Cross/>
            </div>
            <div className={"space-y-2"}>
                <div className={"flex flex-col space-y-2"}>
                    <div className={"bg-primary-300 rounded-xl p-2"}>
                        <Typography weight={"semiBold"} size={"p"}>Title of tasks</Typography>
                    </div>
                    <div className={"bg-primary-100 rounded-xl p-2"}>
                        <Typography weight={"regular"} size={"p"}>Description of tasks</Typography>
                    </div>
                </div>
                <div className={"space-y-2 p-2 flex flex-col items-center justify-center"}>
                    <Button intent={intent} size={"small"} value={value}/>
                </div>
            </div>
        </div>
    );
}

export default DescriptionPopUp;
