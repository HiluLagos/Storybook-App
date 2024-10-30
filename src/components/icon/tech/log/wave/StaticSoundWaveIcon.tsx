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
    const halfHeight = Math.floor(Math.random() * 12) + 2; // Random half-height between 2 and 14
    const xPosition = 4 + index * 6; // Calculate x position based on index

    // Path starts from (x, 16 - halfHeight) and goes to (x, 16 + halfHeight)
    return `M${xPosition} ${16 - halfHeight} V${16 + halfHeight}`;
};

const StaticSoundWaveIcon: React.FC<SoundWaveIconProps> = ({ wavesNumber = 6 }) => {
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
