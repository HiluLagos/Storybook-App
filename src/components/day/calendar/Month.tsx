import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {cva} from "class-variance-authority";
import React from "react";

const dayColor = cva("rounded-lg font-montserrat text-p flex flex-col justify-end", {
    variants: {
        selected: {
            false: "",
            true: "bg-primary-100"
        },
        current: {
            false: "",
            true: "bg-primary-700 font-semibold text-white"
        },
        outsideMonth: {
            false: "",
            true: "text-secondary-500"
        }
    }
});

const dot = cva("absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full", {
    variants: {
        current : {
            false: "bg-primary-700",
            true: "bg-white"
        }
    }
})

type ServerDayProps = PickersDayProps<Dayjs> & {
    events: number[]
}

const ServerDay: React.FC<ServerDayProps> = (props) => {
    const { day, outsideCurrentMonth, selected, events, ...other } = props;

    const isEventDay = events.includes(day.date());

    return (
        <div className="relative">
            <PickersDay
                {...other}
                outsideCurrentMonth={outsideCurrentMonth}
                day={day}
                className={dayColor({ selected, current: dayjs().isSame(day, 'day'), outsideMonth: outsideCurrentMonth })}
                disableTouchRipple
                disableHighlightToday
            />
            {isEventDay && (
                <span className={dot({ current: dayjs().isSame(day, 'day') })}></span>
            )}
        </div>
    );
}

type MonthProps = {
    events: number[]
}

const Month: React.FC<MonthProps> = ({ events }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                showDaysOutsideCurrentMonth
                defaultValue={dayjs()}
                slots={{
                    day: (props) => <ServerDay {...props} events={events} />,
                }}
            />
        </LocalizationProvider>
    );
}

export default Month;