import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import Face from "../../../icon/utility/Face/Face.tsx";

type SliderType = "happy" | "neutral" | "sad";

const background = cva("rounded-full p-2 flex flex-row justify-between items-center transition-colors duration-300", {
    variants: {
        color: {
            happy: "bg-bg-bright-green",
            neutral: "bg-bg-bright-orange",
            sad: "bg-bg-bright-red",
        }
    },
});

type EmotionalSliderProps = VariantProps<typeof background> & {
    selectedState?: SliderType;
};

const EmotionalSlider: React.FC<EmotionalSliderProps> = ({ selectedState}) => {
    return (
        <div className={background({ color: selectedState })} style={{ width: "300px", height: "48px", padding: "8px 0" }}>
            <div className="cursor-pointer">
                {selectedState === "sad" && <Face state="sad" color="selected" />}
            </div>
            <div className="cursor-pointer">
                {selectedState === "neutral" && <Face state="neutral" color="selected" />}
            </div>
            <div className="cursor-pointer">
                {selectedState === "happy" && <Face state="happy" color="selected" />}
            </div>
        </div>
    );
};

export default EmotionalSlider;