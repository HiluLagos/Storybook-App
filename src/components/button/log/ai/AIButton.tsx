import LogButton from "../LogButton.tsx";
import AiIcon from "../../../icon/tech/log/ai/AiIcon.tsx";
import React from "react";

type RecordButtonProperties = {
    pressed: boolean;
}

const SendButton: React.FC<RecordButtonProperties> = ({pressed}: RecordButtonProperties) => {
    return (
        <LogButton pressed={pressed} icon={AiIcon}/>
    )
}

export default SendButton;