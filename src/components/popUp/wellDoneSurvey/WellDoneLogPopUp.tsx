import React from "react";
import Cross from "../../icon/utility/cross/Cross.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import Confetti from "../../icon/popUps/confetti/Confetti.tsx";
import ConfettiDisplay from "../../icon/popUps/confetti/bg/ConfettiDisplay.tsx";

const WellDoneLogPopUp: React.FC = () => {
    return (
        <div className={"fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-shadow-black-60"}>

            <div className="relative flex flex-col w-[288px] rounded-2xl bg-bg-bright-green text-center">
                <ConfettiDisplay className="absolute inset-0 "/>
                <div className={"flex flex-col p-5 "}>
                    <div className="self-end ">
                        <Cross/>
                    </div>
                    <div className={"space-y-2.5"}>
                        <div className="flex flex-col items-center justify-center pl-2.5 pt-6">
                            <Confetti/>
                        </div>
                        <div className="flex flex-col items-center justify-center ">
                            <Typography weight={"semiBold"} size={"h5"}>Well done Homer!</Typography>
                            <div className="text-text-description-bright text-center ">
                                <Typography weight={"regular"} size={"h5"}>You’ve accomplished today’s
                                    activities.</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WellDoneLogPopUp;