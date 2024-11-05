import React from "react";
import ConfettiTop from "./ConfettiTop.tsx";
import ConfettiRight from "./ConfettiRight.tsx";
import ConfettiLeft from "./ConfettiLeft.tsx";

interface ConfettiDisplayProps {
    className?: string;
}

const ConfettiDisplay: React.FC<ConfettiDisplayProps> = ({ className }) => {
    return (
        <div className={className + "w-[288] pt-2 px-0.5"}>
            <ConfettiTop/>
            <div className="flex">
                <div className=" pr-2">
                    <ConfettiLeft/>
                </div>
                <div className=" pl-2">
                    <ConfettiRight/>
                </div>
            </div>
        </div>
    );
}

export default ConfettiDisplay;