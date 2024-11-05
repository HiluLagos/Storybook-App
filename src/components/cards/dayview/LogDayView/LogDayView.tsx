import React, {useEffect, useState} from "react";
import DayView from "../DayView/DayView.tsx";
import StaticSoundWaveIcon from "../../../icon/tech/log/wave/StaticSoundWaveIcon.tsx";
import PlayIcon from "../../../icon/tech/log/play/PlayIcon.tsx";
import Typography from "../../../typography/basic/Typography.tsx";

type DayViewProps = {
    header: string,
    tag: "missed" | "done" | "info",
    time: string,
    audioLength: string
}

const LogDayView: React.FC<DayViewProps> = ({header, tag, time, audioLength}: DayViewProps) => {
    const [isPaused, setIsPaused] = useState(true);
    const totalSeconds = parseInt(audioLength.split(":")[0]) * 60 + parseInt(audioLength.split(":")[1]);
    const [playbackTime, setPlaybackTime] = useState(0);

    const handlePlay = () => {
        setIsPaused(!isPaused);
    }

    useEffect(() => {
        if (!isPaused && playbackTime < totalSeconds) {
            const playbackInterval = setInterval(() => {
                setPlaybackTime((prev) => {
                    if (prev + 1 >= totalSeconds) {
                        setIsPaused(true);
                        return totalSeconds;
                    }
                    return prev + 1;
                });
            }, 1000);
            return () => clearInterval(playbackInterval);
        } else if (playbackTime >= totalSeconds) {
            setPlaybackTime(0);
        }
    }, [isPaused, playbackTime, totalSeconds]);
    const playbackProgress = (playbackTime / totalSeconds) * 100;
    const displayTime = isPaused ? audioLength : `${Math.floor(playbackTime / 60)}:${(playbackTime % 60).toString().padStart(2, "0")}`;

    return(
        <DayView type={"log"} time={time} header={header} tag={tag}>
            <div className={"flex flex-row items-center gap-2"} onClick={handlePlay}>
                <PlayIcon paused={isPaused}/>
                <div className="w-[182px] h-8 overflow-hidden relative">
                    <div
                        className="absolute top-0 left-0 h-full transition-all duration-500 ease-in-out"
                        style={{
                            clipPath: isPaused
                                ? "none"
                                : `inset(0 ${100 - playbackProgress}% 0 0)`,
                        }}
                    >
                        <StaticSoundWaveIcon wavesNumber={36} />
                    </div>
                </div>
            </div>
            <Typography size={"m"}>{displayTime}</Typography>
        </DayView>
    )
}

export default LogDayView;