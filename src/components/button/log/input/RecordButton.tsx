import LogButton from "../LogButton.tsx";
import AudioIcon from "../../../icon/tech/log/audio/Audio.tsx";
import React from "react";

type RecordButtonProperties = {
    pressed: boolean;
}

const RecordButton: React.FC<RecordButtonProperties> = ({pressed}: RecordButtonProperties) => {
    return (
        <LogButton pressed={pressed} icon={AudioIcon}/>
    )
}

export default RecordButton;