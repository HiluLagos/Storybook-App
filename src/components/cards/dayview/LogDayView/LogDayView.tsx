import React, {useEffect, useState} from "react";
import DayView from "../DayView/DayView.tsx";
import StaticSoundWaveIcon from "../../../icon/tech/log/wave/StaticSoundWaveIcon.tsx";
import PlayIcon from "../../../icon/tech/log/play/PlayIcon.tsx";
import DynamicSoundWaveIcon from "../../../icon/tech/log/wave/DynamicSoundWaveIcon.tsx";
import Typography from "../../../typography/basic/Typography.tsx";

type DayViewProps = {
    header: string,
    tag: "missed" | "done" | "info",
    time: string,
    audioLength: string
}

const LogDayView: React.FC<DayViewProps> = ({header, tag, time, audioLength}: DayViewProps) => {

    const [paused, setPause] = useState(true);
    const [currentAudioTime, setCurrentAudioTime] = useState(audioLength);

    const handlePlay = () => {
        setPause(!paused);
    }

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!paused) {
            if (currentAudioTime === audioLength) { setCurrentAudioTime("00:00");}
            interval = setInterval(() => {
                setCurrentAudioTime((prevTime) => {
                    const [min, sec] = prevTime.split(":").map(Number);
                    const totalSeconds = min * 60 + sec + 1;
                    const newMin = Math.floor(totalSeconds / 60);
                    const newSec = totalSeconds % 60;
                    const newTime = `${String(newMin).padStart(2, "0")}:${String(newSec).padStart(2, "0")}`;
                    if (newTime === audioLength) {
                        setPause(true);
                        return audioLength;
                    }
                    return newTime;
                });
            }, 1000);
        } else {
            setCurrentAudioTime(audioLength);
        }
        return () => clearInterval(interval);
    }, [paused, audioLength]);

    return(
        <DayView type={"log"} time={time} header={header} tag={tag}>
            <div className={"flex flex-row items-center gap-2"} onClick={handlePlay}>
                <PlayIcon paused={paused}/>
                {paused ? <StaticSoundWaveIcon wavesNumber={30}/> : <DynamicSoundWaveIcon wavesNumber={30} lineLimit={30}/>}
            </div>
            <Typography size={"m"}>{currentAudioTime}</Typography>
        </DayView>
    )
}

export default LogDayView;