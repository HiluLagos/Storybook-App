import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import Typography from "../../../typography/basic/Typography.tsx";

const textStyle = cva("w-[96px] h-[32px] rounded-lg flex items-center justify-center", {
    variants: {
        state: {
            default: "bg-white text-secondary-500",
            selected: "bg-primary-700 text-white",
        }
    }
})

type TextProps = VariantProps<typeof textStyle> & {
    text: string,
    onClick?: () => void
}

const Text: React.FC<TextProps> = ({state, text, onClick}) => {
    return (
        <div className={textStyle({state})} onPointerDown={onClick}>
            <Typography size="m" weight={"semiBold"}>{text}</Typography>
        </div>
    );
}

export default Text;