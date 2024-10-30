import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const soundWaveIconStyles = cva("flex justify-start items-center", {
    variants: {},
});

type SoundWaveIconProps = VariantProps<typeof soundWaveIconStyles> & {
    wavesNumber: number; // Number of waves to display
};

// Helper function to generate paths with random heights
const generatePath = (index: number) => {
    const randomHeight = Math.floor(Math.random() * 24) + 4; // Random height between 4 and 28
    const xPosition = 4 + index * 6; // Calculate x position based on index
    return `M${xPosition} 16V${randomHeight}`; // Return path string
};

const StaticSoundWaveIcon: React.FC<SoundWaveIconProps> = ({ wavesNumber }) => {
    // Create SVG paths based on the wavesNumber
    const paths = Array.from({ length: wavesNumber }).map((_, idx) => (
        <path
            key={idx}
            d={generatePath(idx)}
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ));

    return (
        <div className={soundWaveIconStyles()}>
            <svg
                width={wavesNumber * 6 + 4} // Adjust width based on number of waves
                height="32"
                viewBox={`0 0 ${wavesNumber * 6 + 4} 32`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {paths}
            </svg>
        </div>
    );
};

export default StaticSoundWaveIcon;
