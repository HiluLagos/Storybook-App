import {cva, VariantProps} from "class-variance-authority";
import {Tick} from "../../../icon/utility/tick/Tick.tsx";
import React from "react";

const checkListIcon = cva("p-3.5 rounded-lg fit-content", {
    variants: {
        intent: {
            default: "bg-primary-500 text-black",
            loading: "bg-primary-900 text-black",
            pressed: "bg-primary-100 text-primary-900",
            done: "bg-primary-700 text-black",
        }
    }
})

const checkListText = cva("flex flex-row flex-justify items-center rounded-lg p-2 fit-content w-60", {
    variants: {
        intent: {
            default: "bg-primary-500 text-black",
            loading: "bg-primary-900 text-black",
            pressed: "bg-primary-100 text-primary-900",
            done: "bg-primary-700 text-black",
        }
    }
})

export interface CheckListProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof checkListText>, VariantProps<typeof checkListIcon>  {}

export const CheckList: React.FC<CheckListProps> = ({ intent, title, ...props }) => {
    return <div className={"flex flex-row flex-justify items-center gap-4"} {...props}>
        <div className={checkListIcon({intent})}>
            <Tick state={intent === 'done' ? 'tick' : 'untick'} />
        </div>
        <div className={checkListText({ intent })}>
            {title}
        </div>
    </div>;
}