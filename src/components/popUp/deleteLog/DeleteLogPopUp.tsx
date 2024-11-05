import React from "react";
import Cross from "../../icon/utility/cross/Cross.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import {Button} from "../../button/utility/button/Button.tsx";
import DeletePopUpIcon from "../../icon/popUps/delete/DeletePopUpIcon.tsx";

const DeleteLogPopUp: React.FC = () => {
    return (
        <div className={"flex flex-col w-72 rounded-2xl p-5 space-y-6 bg-bg-default text-center"}>
            <div className={"self-end"}>
                <Cross/>
            </div>
            <div className={"flex flex-col items-center justify-center space-y-2"}>
                <DeletePopUpIcon/>
                <Typography weight={"extraBold"} size={"p"}>You are about to delete a log.</Typography>
                <div className={"text-text-description-bright text-center space-y-2"}>
                    <Typography weight={"semiBold"} size={"m"}>This will delete your audio permanently!</Typography>
                    <Typography weight={"semiBold"} size={"m"}>Are you sure?</Typography>
                </div>
            </div>
            <div className={"space-y-2 flex flex-col items-center justify-center"}>
                <Button intent={"default"} size={"small"} value={"Delete"}/>
            </div>
        </div>
    );
}

export default DeleteLogPopUp;