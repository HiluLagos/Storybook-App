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

const generateRandomHeight = () => {
    return Math.floor(Math.random() * 12) + 2; // Random half-height between 2 and 14
};

const DynamicSoundWaveIcon: React.FC<StaticSoundWaveIconProps> = ({ wavesNumber, lineSpacing = 6, lineLimit }) => {
    const [heights, setHeights] = useState<number[]>([]);

    useEffect(() => {
        if (wavesNumber > heights.length) {
            setHeights((prevHeights) => {
                const newHeight = generateRandomHeight();
                const updatedHeights = [...prevHeights, newHeight];

                if (updatedHeights.length > lineLimit) {
                    updatedHeights.shift();
                }
                return updatedHeights;
            });
        }
    }, [wavesNumber, lineLimit]);

    const paths = heights.map((height, index) => {
        const xPosition = 4 + index * lineSpacing;
        const halfHeight = height; // Using the same value for up and down growth
        return `M${xPosition} ${16 - halfHeight} V${16 + halfHeight}`; // Grow both up and down from the center (y = 16)
    });

    const svgWidth = 4 + paths.length * lineSpacing;

    return (
        <div className={staticSoundWaveStyles() && ""}>
            <svg
                width={svgWidth}
                height="32"
                viewBox={`0 0 ${svgWidth} 32`}
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
