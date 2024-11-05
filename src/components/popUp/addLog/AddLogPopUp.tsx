import React from "react";
import Cross from "../../icon/utility/cross/Cross.tsx";
import AddLogPopUpIcon from "../../icon/popUps/addLog/AddLogPopUpIcon.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import {Button} from "../../button/utility/button/Button.tsx";

const AddLogPopUp: React.FC = () => {
    return (
        <div className={"flex flex-col w-[288px] h-[271px] rounded-2xl p-5 space-y-6 bg-bg-default"}>
            <div className={"self-end"}>
                <Cross/>
            </div>
            <div className={"flex flex-col items-center justify-center space-y-2"}>
                <AddLogPopUpIcon/>
                <Typography weight={"extraBold"} size={"p"}>You are about to add a log!</Typography>
                <div className={"text-text-description-bright text-center"}>
                    <Typography weight={"semiBold"} size={"m"}>This will add your audio into today’s logs!</Typography>
                </div>
            </div>
            <div className={"space-y-2 flex flex-col items-center justify-center"}>
                <Button intent={"default"} size={"small"} value={"Add"}/>
            </div>
        </div>
    );
}

export default AddLogPopUp;
