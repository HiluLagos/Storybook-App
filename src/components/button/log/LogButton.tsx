import React, { useState, useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";

const logButtonStyles = cva(
    "flex justify-center items-center rounded-[32px]", {
        variants: {
            pressed: {
                true: "bg-primary-700",
                false: "bg-primary-500",
            },
            size: {
                small: "w-12 h-12",
                default: "w-16 h-16"
            }
        }
    }
);

const iconStyles = cva(
    "flex justify-center items-center rounded-3xl", {
        variants: {
            pressed: {
                true: "bg-primary-900",
                false: "bg-primary-100",
            },
            size: {
                small: "w-10 h-10",
                default: "w-12 h-12"
            }
        }
    }
);

type LogButtonProperties = VariantProps<typeof logButtonStyles> & {
    pressed: boolean;
    icon?: React.FC<{pressed: boolean}>;
};

const LogButton: React.FC<LogButtonProperties> = ({icon: Icon, size = "default", pressed }: LogButtonProperties) => {
    const [currentIntent, setCurrentIntent] = useState(pressed ? "pressed" : "default");
    const [previousIntent, setPreviousIntent] = useState(currentIntent);

    useEffect(() => {
        setCurrentIntent(pressed ? "pressed" : "default");
    }, [pressed]);

    const handleMouseDown = () => {
        setPreviousIntent(currentIntent);
        setCurrentIntent("pressed");
    };

    const handleMouseUp = () => {
        if (previousIntent === "done") {
            setCurrentIntent("default");
        } else {
            setCurrentIntent("done");
        }
    };

    return (
        <button className={logButtonStyles({ size, pressed: currentIntent === "pressed" })} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <div className={iconStyles({ size, pressed: currentIntent === "pressed" })}>
                {Icon && <Icon pressed={currentIntent === "pressed"} />}
            </div>
        </button>
    );
};

export default LogButton;