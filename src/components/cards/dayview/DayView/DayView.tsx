import {cva} from "class-variance-authority";
import React, {ReactNode} from "react";
import Typography from "../../../typography/Typography.tsx";
import StateTag from "../../../stateTag/StateTag.tsx";
import ActivitiesIcon from "../../../icon/menu/Activities/Activities.tsx";
import LogIcon from "../../../icon/menu/Log/Log.tsx";
import TaskIcon from "../../../icon/menu/Task/Task.tsx";

const card = cva("w-[296px] rounded-lg flex flex-row overflow-hidden", {
    variants: {
        type: {
            activity: "bg-bg-bright-blue",
            log: "bg-bg-bright-violet",
            task: "bg-bg-bright-orange"
        }
    }

})

const title = cva("", {
    variants: {
        type: {
            activity: "text-bg-colorful-lightblue",
            log: "text-bg-colorful-violet",
            task: "text-bg-colorful-orange"
        }
    }
})

const shade = cva("w-[5px] h-auto", {
    variants: {
        type: {
            activity: "bg-bg-colorful-lightblue",
            log: "bg-bg-colorful-violet",
            task: "bg-bg-colorful-orange"
        }
    }
})

type DayViewProps = {
    header: string,
    children: ReactNode,
    tag: "missed" | "done" | "info",
    type: "activity" | "log" | "task",
    time: string
}

const stateTag = {
    missed: StateTag({state: "orange", children: "Missed"}),
    done: StateTag({state: "green", children: "Done"}),
    info: StateTag({state: "lightBlue", children: "Info"})
}

const iconMap = {
    activity: ActivitiesIcon,
    log: LogIcon,
    task: TaskIcon,
}



const DayView: React.FC<DayViewProps> = ({type, header, children, tag, time}) => {

    const IconComponent = iconMap[type];

    return(
        <div className={card({type})}>
            <div className={shade({type})}/>
            <div className={"flex flex-col basis-3/4 px-2 pb-2 gap-1"}>
                <div className={title({type})}>
                    <Typography size={"h5"} weight={"semiBold"} >{header}</Typography></div>
                    {children}
                    {stateTag[tag]}
            </div>
            <div className={"basis-1/4 flex flex-col justify-between items-end pe-2 py-2"}>
                <IconComponent size={"medium"}/>
                <Typography size={"m"} weight={"semiBold"}>
                    {time == "" ? "---" : time + "hs."}
                </Typography>
        </div>
        </div>
    )
}

export default DayView;