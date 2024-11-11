import React, { useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Face from "../../icon/utility/Face/Face.tsx";

type SliderType = "default" | "happy" | "neutral" | "sad";

const background = cva("rounded-full p-2 flex flex-row justify-between items-center transition-colors duration-300", {
    variants: {
        color: {
            default: "bg-bg-default",
            happy: "bg-bg-bright-green",
            neutral: "bg-bg-bright-orange",
            sad: "bg-bg-bright-red",
        }
    },
    defaultVariants: {
        color: "default",
    }
});

type EmotionalSliderProps = VariantProps<typeof background> & {
    state?: SliderType;
};

const EmotionalSlider: React.FC<EmotionalSliderProps> = ({ state = "default" }) => {
    const [selectedState, setSelectedState] = useState<SliderType>(state);

    const handleClick = (newState: SliderType) => {
        setSelectedState(newState);
    };

    return (
        <div className={background({ color: selectedState })} style={{ width: "300px", height: "48px", padding: "8px 0" }}>
            <div onClick={() => handleClick("sad")} className="cursor-pointer">
                <Face state="sad" color={selectedState === "sad" ? "selected" : "unselected"} />
            </div>
            <div onClick={() => handleClick("neutral")} className="cursor-pointer">
                <Face state="neutral" color={selectedState === "neutral" ? "selected" : "unselected"} />
            </div>
            <div onClick={() => handleClick("happy")} className="cursor-pointer">
                <Face state="happy" color={selectedState === "happy" ? "selected" : "unselected"} />
            </div>
        </div>
    );
};

export default EmotionalSlider;