import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { StateType } from "../../../../types.ts";

const subText = cva("font-montserrat font-regular text-m text-center", {
    variants: {
        state: {
            default: ["text-black"],
            selected: ["text-primary-500 font-semibold"]
        },
    },
    defaultVariants: {
        state: "default",
    },
});

const borderIcon = cva("rounded-full fit-content", {
    variants: {
        state: {
            default: "",
            selected: "bg-primary-500"
        },
        size: {
            default: "px-6 py-2",
            small: "px-3 py-1"
        }
    },
    defaultVariants: {
        size: "default"
    }
});

type IconWrapperProps = VariantProps<typeof subText> & {
    IconComponent: React.FC<{ state: StateType }>;
    label: string;
    size?: "default" | "small";
    onClick: () => void;
};

const IconWrapper: React.FC<IconWrapperProps> = ({ state = "default", IconComponent, label, size = "default", onClick }: IconWrapperProps) => {
    return (
        <div onClick={onClick}>
            <div className={borderIcon({ state, size })}>
                <IconComponent state={state || "default"} />
            </div>
            <h1 className={subText({ state })}>{label}</h1>
        </div>
    );
};

export default IconWrapper;