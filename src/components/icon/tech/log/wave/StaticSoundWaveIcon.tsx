import { cva, VariantProps } from "class-variance-authority";
import React, { useRef } from "react";

const soundWaveIconStyles = cva("flex justify-start items-center", {
    variants: {},
});

type SoundWaveIconProps = VariantProps<typeof soundWaveIconStyles> & {
    wavesNumber: number; // Number of waves to display
};

// Helper function to generate a single random half-height
const generateRandomHeight = () => Math.floor(Math.random() * 12) + 2; // Between 2 and 14

const StaticSoundWaveIcon: React.FC<SoundWaveIconProps> = ({ wavesNumber }) => {
    // Generate the heights once and store them in a ref to persist across renders
    const initialHeights = Array.from({ length: wavesNumber }, generateRandomHeight);
    const heightsRef = useRef<number[]>(initialHeights); // Store the initial heights in the ref

    // Create SVG paths using the pre-generated heights
    const paths = heightsRef.current.map((height, idx) => {
        const xPosition = 4 + idx * 6; // Calculate x position
        return `M${xPosition} ${16 - height} V${16 + height}`; // Centered wave path
    });

    return (
        <div className={soundWaveIconStyles()}>
            <svg
                width={wavesNumber * 6 + 4} // Adjust width based on the number of waves
                height="32"
                viewBox={`0 0 ${wavesNumber * 6 + 4} 32`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {paths.map((d, idx) => (
                    <path
                        key={idx}
                        d={d}
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                ))}
            </svg>
        </div>
    );
};

export default StaticSoundWaveIcon;
