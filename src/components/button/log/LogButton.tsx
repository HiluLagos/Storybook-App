import React, { useState } from "react";
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
    pressed?: boolean;
    icon?: React.FC<{pressed: boolean}>;
};

const LogButton: React.FC<LogButtonProperties> = ({ pressed = false, icon: Icon, size = "default" }: LogButtonProperties) => {
    const [isPressed, setIsPressed] = useState(pressed);

    const handleClick = () => {
        if(isPressed) setIsPressed(false);
        else setIsPressed(true);
    };

    return (
        <button className={logButtonStyles({ pressed: isPressed, size })} onClick={handleClick}>
            <div className={iconStyles({ pressed: isPressed, size })}>
                {Icon && <Icon pressed={isPressed}/>}
            </div>
        </button>
    );
};

export default LogButton;