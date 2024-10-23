import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import CalendarIcon from "../../../icon/utility/navigation/calendar/Calendar.tsx"

const subText = cva("font-montserrat font-regular text-m text-center", {
    variants: {
        state: {
            default: [
                "text-black"
            ],
            selected: [
                "text-primary-500 font-semibold"
            ]
        },
    },
    defaultVariants: {
        state: "default",
    },
});

const borderIcon = cva("rounded-full fit-content px-6 py-2" ,{
    variants: {
        state: {
            default: "",
            selected: "bg-primary-500"
        },
    }
})

type CalendarComponentProps = VariantProps<typeof subText> & {
};

const CalendarComponent: React.FC<CalendarComponentProps> = ({ state = "default" }: CalendarComponentProps) => {
    return(
        <div>
            <div className={borderIcon({state})}>
                <CalendarIcon state={state}></CalendarIcon>
            </div>
            <h1 className={subText({state})}>Calendar</h1>
        </div>
    )
}

export default CalendarComponent
