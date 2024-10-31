import { cva, VariantProps } from "class-variance-authority";
import Arrow from "../../icon/utility/arrow/Arrow.tsx";
import AiIcon from "../../icon/tech/log/ai/AiIcon.tsx";
import React, { useEffect, useState } from "react";
import DynamicSoundWaveIcon from "../../icon/tech/log/wave/DynamicSoundWaveIcon.tsx";
import StaticSoundWaveIcon from "../../icon/tech/log/wave/StaticSoundWaveIcon.tsx";
import PlayIcon from "../../icon/tech/log/play/PlayIcon.tsx";
import DeleteIcon from "../../icon/utility/delete/DeleteIcon.tsx";

const innerContainerStyles = cva("inline-flex items-center", {
    variants: {
        state: {
            recording: "flex justify-end w-[222px] h-8 overflow-hidden",
            expanded: "space-x-[8px] w-[260px] h-8 justify-between",
            collapsed: "space-x-[8px] w-[260px] h-8",
        },
    },
});

type AudioDisplayProps = VariantProps<typeof innerContainerStyles> & {
    time?: string;
    isRecording?: boolean;
};

const AudioDisplay: React.FC<AudioDisplayProps> = ({ time = "0:10", isRecording = false }) => {
    const [showMore, setShowMore] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [wavesNumber, setWavesNumber] = useState(0);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [playbackTime, setPlaybackTime] = useState(0);
    const [showSummary, setShowSummary] = useState(false);

    const totalSeconds = parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);

    useEffect(() => {
        if (isRecording) {
            const waveInterval = setInterval(() => {
                setWavesNumber((prev) => prev + 1);
            }, 100);
            return () => clearInterval(waveInterval);
        }
    }, [isRecording]);

    useEffect(() => {
        if (isRecording) {
            const timerInterval = setInterval(() => {
                setElapsedSeconds((prev) => prev + 1);
            }, 1000);
            return () => clearInterval(timerInterval);
        }
    }, [isRecording]);

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

    const displayTime = isPaused ? time : `${Math.floor(playbackTime / 60)}:${(playbackTime % 60).toString().padStart(2, "0")}`;
    const playbackProgress = (playbackTime / totalSeconds) * 100;

    return (
        <div className="space-y-4">
            <div className="inline-flex items-center justify-center flex-col border-2 border-primary-500 rounded-3xl p-4 space-y-2">
                {isRecording ? (
                    <div className={innerContainerStyles({ state: "recording" })}>
                        <div className="flex justify-end w-[222px] h-8 overflow-hidden">
                            <DynamicSoundWaveIcon wavesNumber={wavesNumber} lineLimit={36} lineSpacing={6} />
                        </div>
                        <span>{`${Math.floor(elapsedSeconds / 60)}:${(elapsedSeconds % 60).toString().padStart(2, '0')}`}</span>
                    </div>
                ) : showMore ? (
                    <>
                        <div className={innerContainerStyles({ state: "expanded" })}>
                            <div className="w-[190px] h-8 overflow-hidden relative">
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
                            <span>{displayTime}</span>
                            <Arrow orientation="down" onToggleAction={() => setShowMore(false)} />
                        </div>
                        <div className="inline-flex items-center justify-between w-[260px] h-6 mt-2">
                            <button onClick={() => setShowSummary(!showSummary)}>
                                <AiIcon pressed={false} />
                            </button>
                            <button
                                onClick={() => {
                                    setIsPaused(!isPaused);
                                    if (!isPaused && playbackTime >= totalSeconds) {
                                        setPlaybackTime(0);
                                    }
                                }}
                            >
                                <PlayIcon paused={isPaused} />
                            </button>
                            <DeleteIcon />
                        </div>
                    </>
                ) : (
                    <div className={innerContainerStyles({ state: "collapsed" })}>
                        <button
                            onClick={() => {
                                setIsPaused(!isPaused);
                                setShowMore(true);
                                if (!isPaused && playbackTime >= totalSeconds) {
                                    setPlaybackTime(0);
                                }
                            }}
                        >
                            <PlayIcon paused={isPaused} />
                        </button>
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
                        <span>{displayTime}</span>
                        <Arrow orientation="left" onToggleAction={() => setShowMore(true)} />
                    </div>
                )}
            </div>
            {showSummary &&
                <ul className="flex flex-col justify-center bg-primary-100 w-[296px] rounded-2xl space-y-4 p-4 list-disc pl-9">
                    <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
                    <li>Urna senectus</li>
                    <li>Lorem ipsum dolor</li>
                </ul>
            }
        </div>
    );
};

export default AudioDisplay;
