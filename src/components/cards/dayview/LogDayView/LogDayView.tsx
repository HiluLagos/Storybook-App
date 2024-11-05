import React, {ReactNode} from "react";
import DayView from "../DayView/DayView.tsx";

type DayViewProps = {
    header: string,
    children: ReactNode,
    tag: "missed" | "done" | "info",
    time: string
}

const LogDayView: React.FC<DayViewProps> = ({header, children, tag, time}: DayViewProps) => {
    return(
        <DayView type={"log"} time={time} header={header} tag={tag}>
            {children}
        </DayView>
    )
}

export default LogDayView;