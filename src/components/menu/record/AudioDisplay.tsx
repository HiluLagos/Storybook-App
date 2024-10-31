import { cva } from "class-variance-authority";
import Arrow from "../../icon/utility/arrow/Arrow.tsx";
import AiIcon from "../../icon/tech/log/ai/AiIcon.tsx";
import { useEffect, useState } from "react";
import DynamicSoundWaveIcon from "../../icon/tech/log/wave/DynamicSoundWaveIcon.tsx";

const AudioDisplayStyle = cva("", {
    variants: {
        size: {
            small: "",
            default: ""
        }
    }
});

const AudioDisplay = () => {
    const [showMore, setShowMore] = useState(false);
    const [isRecording, setIsRecording] = useState(true);

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

    const formattedTime = `${Math.floor(elapsedSeconds / 60)}:${(elapsedSeconds % 60).toString().padStart(2, '0')}`;


    return (
        (isRecording ?
            <div className="inline-flex items-center justify-center flex-col space-y-1 border-2 border-primary-500 rounded-3xl p-4">
                <div className="inline-flex items-center ">
                    <div className="flex justify-end w-[222px] h-8 overflow-hidden">
                        <DynamicSoundWaveIcon wavesNumber={wavesNumber} lineLimit={36} lineSpacing={6}/> {/* Set maxWaves limit */}
                    </div>
                    <span>{formattedTime}</span>
                </div>
            </div>
            : (showMore ?
                <div className="inline-flex items-center justify-center flex-col space-y-1 border-2 border-primary-500 rounded-3xl p-4">
                    <div className="inline-flex items-center space-x-[8px] w-[260px] h-8">
                        <div className="flex justify-end w-[190px] h-8 overflow-hidden">
                            <DynamicSoundWaveIcon wavesNumber={wavesNumber} lineLimit={36} lineSpacing={6}/> {/* Set maxWaves limit */}
                        </div>
                        <span>{formattedTime}</span>
                        <Arrow orientation={"down"} onToggleAction={() => setShowMore(false)}/>
                    </div>
                    <div className="inline-flex items-center justify-between w-[260px] h-6">
                        <AiIcon />
                        <AiIcon />
                        <AiIcon />
                    </div>
                </div>
                :
                <div
                    className="inline-flex items-center justify-center flex-col space-y-1 border-2 border-primary-500 rounded-3xl p-4">
                    <div className="inline-flex items-center space-x-[8px] w-[260px] h-8">
                        <AiIcon />
                        <div className="flex justify-end w-[182px] h-8 overflow-hidden">
                            <DynamicSoundWaveIcon wavesNumber={wavesNumber} lineLimit={36} lineSpacing={6}/> {/* Set maxWaves limit */}
                        </div>
                        <span>{formattedTime}</span>
                        <Arrow orientation={"left"} onToggleAction={() => setShowMore(true)}/>
                    </div>
                </div>
        ))
    );
}

export default AudioDisplay;
