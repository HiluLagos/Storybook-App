import React from "react";
import ConfettiTop from "./bg/ConfettiTop.tsx";
import Confetti from "./Confetti.tsx";
import ConfettiRight from "./bg/ConfettiRight.tsx";
import ConfettiLeft from "./bg/ConfettiLeft.tsx";

const ConfettiDisplay: React.FC = () => {
    return (
        <div>
            <Confetti />
            <ConfettiTop />
            <ConfettiRight />
            <ConfettiLeft />
        </div>
    );
}

export default ConfettiDisplay;