import LogButton from "../LogButton.tsx";
import MicroIcon from "../../../icon/tech/log/micro/Micro.tsx";
import React from "react";

type RecordButtonProperties = {
    pressed: boolean;
}

const RecordButton: React.FC<RecordButtonProperties> = ({pressed}: RecordButtonProperties) => {
    return (
        <LogButton pressed={pressed} icon={MicroIcon}/>
    )
}

export default RecordButton;