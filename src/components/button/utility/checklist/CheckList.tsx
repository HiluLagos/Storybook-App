import {cva, VariantProps} from "class-variance-authority";
import {Tick} from "../../../icon/utility/tick/Tick.tsx";
import React from "react";

const checkListIcon = cva("p-3.5 rounded-lg fit-content", {
    variants: {
        intent: {
            default: "bg-primary-500 text-black",
            pressed: "bg-primary-900 text-black shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]",
            done: "bg-primary-700 text-black",
        }
    }
})

const checkListText = cva("flex flex-row flex-justify items-center rounded-lg p-2 fit-content w-60", {
    variants: {
        intent: {
            default: "bg-primary-500 text-black",
            pressed: "bg-primary-900 text-black shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]",
            done: "bg-primary-700 text-black",
        }
    }
})

export interface CheckListProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof checkListText>, VariantProps<typeof checkListIcon>  {}

export const CheckList: React.FC<CheckListProps> = ({ intent, title, ...props }) => {
    const [currentIntent, setCurrentIntent] = React.useState(intent);
    const [previousIntent, setPreviousIntent] = React.useState(currentIntent);

    const handleMouseDown = () => {
        setPreviousIntent(currentIntent);
        setCurrentIntent("pressed");
    }

    const handleMouseUp = () => {
        if (previousIntent === "done") {
            setCurrentIntent("default");
        } else {
            setCurrentIntent("done");
        }
    }

    return <div className={"flex flex-row flex-justify items-center gap-4"} {...props}>
        <div className={checkListIcon({intent: currentIntent})}
            onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
        >
            <Tick state={
              currentIntent === 'default' ? 'untick' :
              currentIntent === 'done' ? 'tick' :
              previousIntent === 'done' ? 'tick' : 'untick'
            } />
        </div>
        <div className={checkListText({ intent: currentIntent })}>
            {title}
        </div>
    </div>;
}