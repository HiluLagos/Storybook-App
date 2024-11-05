import LogButton from "../LogButton.tsx";
import SendIcon from "../../../icon/tech/log/send/SendIcon.tsx";
import React from "react";

type RecordButtonProperties = {
    pressed: boolean;
}

const SendButton: React.FC<RecordButtonProperties> = ({pressed}: RecordButtonProperties) => {
    return (
        <LogButton pressed={pressed} icon={SendIcon}/>
    )
}

export default SendButton;