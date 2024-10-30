import React, { useEffect, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

const staticSoundWaveStyles = cva("flex justify-start items-center", {
    variants: {},
});

type StaticSoundWaveIconProps = VariantProps<typeof staticSoundWaveStyles> & {
    wavesNumber: number;
    lineSpacing?: number; // Optional prop for spacing between lines
    lineLimit: number;     // Maximum number of lines to display
};

// Helper function to generate a single random height
const generateRandomHeight = () => {
    return Math.floor(Math.random() * 24) + 4; // Random height between 4 and 28
};

const DynamicSoundWaveIcon: React.FC<StaticSoundWaveIconProps> = ({ wavesNumber, lineSpacing = 6, lineLimit }) => {
    const [heights, setHeights] = useState<number[]>([]);

    // Effect to manage paths based on wavesNumber
    useEffect(() => {
        if (wavesNumber > heights.length) {
            setHeights((prevHeights) => {
                // Create a new height for the new path
                const newHeight = generateRandomHeight();
                const updatedHeights = [...prevHeights, newHeight];

                // Check if we exceed the line limit
                if (updatedHeights.length > lineLimit) {
                    updatedHeights.shift(); // Remove the oldest height if limit exceeded
                }

                return updatedHeights;
            });
        }
    }, [wavesNumber, lineLimit]); // Only depends on wavesNumber and lineLimit

    // Update heights to shift them left on new wave addition
    const paths = heights.map((height, index) => {
        const xPosition = 4 + index * lineSpacing; // Calculate x position
        return `M${xPosition} 28V${height}`; // Create the path string
    });

    // Update SVG width dynamically based on the number of paths
    const svgWidth = 4 + paths.length * lineSpacing;

    return (
        <div className={staticSoundWaveStyles() && ""}>
            <svg
                width={svgWidth}
                height="32"
                viewBox={`0 0 ${svgWidth} 32`} // Adapt viewBox to match dynamic width
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

export default DynamicSoundWaveIcon;
