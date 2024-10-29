import LogButton from "../LogButton.tsx";
import LockIcon from "../../../icon/tech/log/lock/LockIcon.tsx";
import React from "react";

type RecordButtonProperties = {
    pressed: boolean;
}

const SendButton: React.FC<RecordButtonProperties> = ({pressed}: RecordButtonProperties) => {
    return (
        <LogButton pressed={pressed} icon={LockIcon} size={"small"}/>
    )
}

export default SendButton;