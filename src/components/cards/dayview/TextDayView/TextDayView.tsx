import React from "react";
import DayView from "../DayView/DayView.tsx";
import Typography from "../../../typography/basic/Typography.tsx";

type DayViewProps = {
    header: string,
    children: string,
    tag: "missed" | "done" | "info",
    type: "activity" | "task",
    time: string
}

const TextDayView: React.FC<DayViewProps> = ({header, children, tag, type, time}: DayViewProps) => {
    return(
        <DayView type={type} time={time} header={header} tag={tag}>
            <Typography size="m" weight="regular">{children}</Typography>
        </DayView>
    )
}

export default TextDayView;