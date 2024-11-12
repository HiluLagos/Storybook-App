import React, { useState } from "react";
import Cross from "../../icon/utility/cross/Cross.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import { Button } from "../../button/utility/button/Button.tsx";
import QrRecipe from "../../cards/qr/QrRecipe.tsx";

type DescriptionPopUpProps = {
    intent: "incomplete" | "complete";
    descTitle: string;
    description: string;
    variant: "info" | "recipe";
    closePopUp: (title: string, newIntent: "incomplete" | "complete") => void;
    updateIntent: (title: string, newIntent: "incomplete" | "complete") => void;
};

const DescriptionPopUp: React.FC<DescriptionPopUpProps> = ({ intent, descTitle = "Title of tasks", description = "Description of tasks", variant = "info", closePopUp, updateIntent }) => {
    const [currentIntent, setCurrentIntent] = useState(intent);
    const [isClosing, setIsClosing] = useState(false);

    const toggleIntent = () => {
        const newIntent = currentIntent === "incomplete" ? "complete" : "incomplete";
        setCurrentIntent(newIntent);
        updateIntent(descTitle, newIntent);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => closePopUp(descTitle, currentIntent), 300);
    };

    const value = currentIntent === "incomplete" ? "To do" : "Done";

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'} bg-shadow-black-60`}>
            <div
                className={`flex flex-col w-72 rounded-2xl p-5 space-y-4 bg-bg-default ${isClosing ? 'animate-slideOutToBottom' : 'animate-slideInFromTop'}`}
            >
                <div className={"self-end"} onClick={handleClose}>
                    <Cross/>
                </div>
                <div className={"space-y-2"}>
                    <div className={"flex flex-col space-y-2"}>
                        <div className={"bg-primary-300 rounded-xl p-2"}>
                            <Typography weight={"semiBold"} size={"p"}>{descTitle}</Typography>
                        </div>
                        <div className={"bg-primary-100 rounded-xl p-2"}>
                            <Typography weight={"regular"} size={"p"}>{description}</Typography>
                        </div>
                    </div>

                    {variant === "recipe" && (
                        <div className={"flex flex-col items-center"}>
                            <QrRecipe/>
                        </div>
                    )}
                    <div className={"space-y-2 p-2 flex flex-col items-center justify-center"}>
                        <Button intent={currentIntent} size={"small"} value={value} onClick={toggleIntent}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionPopUp;