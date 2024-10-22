import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import {HeartIcon} from "../../../icon/tech/heart/HeartIcon.tsx";


const tag = cva("rounded-full outline text-primary-900 font-semibold flex items-center justify-center gap-4 ps-4 pe-4 py-2 fit-content max-w-xs", {
    variants: {
        intent: {
            unselected: "outline-primary-300",
            selected: "outline-primary-500 bg-primary-100",
        },
        size: {
            small: "h-8",
            medium: "h-10",
        },
    }
})

export interface TagProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof tag> {}

export const Tag: React.FC<TagProps> = ({ intent, size, value, ...props }) => {
    return <button className={tag({ intent, size })}  {...props}>
        <HeartIcon size={size} intent={intent} />
        {value}
    </button>;
};