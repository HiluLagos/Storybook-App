import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const audioIconStyles = cva(
    "flex justify-center items-center w-[28px] h-[28px]", {
        variants: {
            pressed: {
                true: "",
                false: "",
            },
            color : {
                green: "stroke-primary-900",
                default: "stroke-icon-black",
            }
        },
        defaultVariants: {
            color: "default",
        }
    }
);

type SendIconProps = VariantProps<typeof audioIconStyles> & {
    pressed: boolean;
    color?: "green" | "default";
};

const SendIcon: React.FC<SendIconProps> = ({ pressed=false, color="default" }: SendIconProps) => { // Default pressed to false
    return (
        <div className={audioIconStyles({ pressed, color })}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.01363 5.28711L23.8439 13.9999L6.01363 22.7127C5.91185 22.7519 5.80075 22.7598 5.69442 22.7357C5.58809 22.7115 5.49134 22.6564 5.41644 22.5771C5.33935 22.4958 5.28628 22.3947 5.26311 22.285C5.23994 22.1754 5.24759 22.0614 5.28519 21.9559L7.98457 13.9999L5.28519 6.04398C5.24759 5.93841 5.23994 5.82448 5.26311 5.71483C5.28628 5.60518 5.33935 5.50408 5.41644 5.42273C5.49134 5.34349 5.58809 5.2883 5.69442 5.26415C5.80075 5.24 5.91185 5.24799 6.01363 5.28711Z"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={pressed ? "fill-secondary-100 stroke-secondary-100" : color}/>
                <path
                    d="M7.65 14H15.4582"
                    className={pressed ? "stroke-primary-900" : color} strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export default SendIcon;