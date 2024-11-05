import React from "react";
import Cross from "../../icon/utility/cross/Cross.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import {Button} from "../../button/utility/button/Button.tsx";
import DeletePopUpIcon from "../../icon/popUps/delete/DeletePopUpIcon.tsx";

const WellDoneLogPopUp: React.FC = () => {
    return (
        <div className={"flex flex-col w-72 rounded-2xl p-5 space-y-6 bg-bg-bright-green text-center"}>
            <div className={"self-end"}>
                <Cross/>
            </div>
            <div className={"flex flex-col items-center justify-center space-y-2"}>
                <DeletePopUpIcon/>
                <Typography weight={"semiBold"} size={"h5"}>Well done Homer!</Typography>
                <div className={"text-text-description-bright text-center space-y-2"}>
                    <Typography weight={"regular"} size={"h5"}>You’ve accomplished today’s activities.</Typography>
                </div>
            </div>
            <div className={"space-y-2 flex flex-col items-center justify-center"}>
                <Button intent={"default"} size={"small"} value={"Log out"}/>
            </div>
        </div>
    );
}

export default WellDoneLogPopUp;