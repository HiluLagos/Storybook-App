import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import {HeartIcon} from "../../../icon/tech/heart/HeartIcon.tsx";

const tag = cva("rounded-full outline text-primary-900 font-semibold flex items-center justify-center gap-4 px-4 fit-content max-w-xs", {
    variants: {
        intent: {
            unselected: "outline-primary-300 bg-white",
            selected: "outline-primary-500 bg-primary-100",
        },
        size: {
            extraSmall: "h-8 text-m ",
            small: "h-9 text-p ",
        },
    }
})

export interface TagProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof tag> {}

export const Tag: React.FC<TagProps> = ({ intent, size, value, ...props }) => {
    const [currentIntent, setCurrentIntent] = React.useState(intent);

    const handleClick = () => {
        setCurrentIntent(currentIntent === "unselected" ? "selected" : "unselected");
    }

    return <button className={tag({ intent: currentIntent, size })}
                   onClick={handleClick}
                   {...props}>
        <HeartIcon size={"extraSmall"} intent={currentIntent} />
        {value}
    </button>;
};