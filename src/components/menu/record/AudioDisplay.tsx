import { cva, VariantProps } from "class-variance-authority";
import Arrow from "../../icon/utility/arrow/Arrow.tsx";
import AiIcon from "../../icon/tech/log/ai/AiIcon.tsx";
import React, { useEffect, useState } from "react";
import DynamicSoundWaveIcon from "../../icon/tech/log/wave/DynamicSoundWaveIcon.tsx";
import StaticSoundWaveIcon from "../../icon/tech/log/wave/StaticSoundWaveIcon.tsx";
import PlayIcon from "../../icon/tech/log/play/PlayIcon.tsx";
import DeleteIcon from "../../icon/utility/delete/DeleteIcon.tsx";

// Styles for the inner section that changes layout based on state
const innerContainerStyles = cva("inline-flex items-center", {
    variants: {
        state: {
            recording: "flex justify-end w-[222px] h-8 overflow-hidden",
            expanded: "space-x-[8px] w-[260px] h-8 justify-between",
            collapsed: "space-x-[8px] w-[260px] h-8",
        },
    },
});

// Types for `AudioDisplayProps` with the extracted variant options
type AudioDisplayProps = VariantProps<typeof innerContainerStyles> & {
    time?: string;
    isRecording?: boolean;
};

const AudioDisplay: React.FC<AudioDisplayProps> = ({ time = "1:08", isRecording = false }) => {
    const [showMore, setShowMore] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    const [wavesNumber, setWavesNumber] = useState(0);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    // Increment wavesNumber every 100 milliseconds to add new wave
    useEffect(() => {
        const waveInterval = setInterval(() => {
            setWavesNumber((prev) => prev + 1);
        }, 100);
        return () => clearInterval(waveInterval);
    }, []);

    // Increment elapsedSeconds every second for timer display
    useEffect(() => {
        const timerInterval = setInterval(() => {
            setElapsedSeconds((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(timerInterval);
    }, []);

    const formattedTime = `${Math.floor(elapsedSeconds / 60)}:${(elapsedSeconds % 60)
        .toString()
        .padStart(2, "0")}`;

    return (
        <div className="inline-flex items-center justify-center flex-col border-2 border-primary-500 rounded-3xl p-4 space-y-2">
            {isRecording ? (
                <div className={innerContainerStyles({ state: "recording" })}>
                    <div className="flex justify-end w-[222px] h-8 overflow-hidden">
                        <DynamicSoundWaveIcon wavesNumber={wavesNumber} lineLimit={36} lineSpacing={6} />
                    </div>
                    <text>{formattedTime}</text>
                </div>
            ) : showMore ? (
                <>
                    <div className={innerContainerStyles({ state: "expanded" })}>
                        <div className="flex justify-end w-[190px] h-8 overflow-hidden">
                            <StaticSoundWaveIcon wavesNumber={36} />
                        </div>
                        <text>{time}</text>
                        <Arrow orientation="down" onToggleAction={() => setShowMore(false)} />
                    </div>
                    <div className="inline-flex items-center justify-between w-[260px] h-6 mt-2">
                        <AiIcon pressed={false} />
                        <button onClick={() => setIsPaused(!isPaused)}>
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
                        }}
                    >
                        <PlayIcon paused={isPaused} />
                    </button>
                    <div className="flex justify-end w-[182px] h-8 overflow-hidden">
                        <StaticSoundWaveIcon wavesNumber={36} />
                    </div>
                    <text>{time}</text>
                    <Arrow orientation="left" onToggleAction={() => setShowMore(true)} />
                </div>
            )}
        </div>
    );
};

export default AudioDisplay;
