import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import dayjs, { Dayjs } from "dayjs";
import React, { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Typography from "../../../typography/basic/Typography.tsx";
import Arrow from "../../../icon/utility/arrow/Arrow.tsx";
import {dayColor, dot} from "../ServerDayStyle.ts";

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

type WeekProps = {
    events: number[]
}

const Week: React.FC<WeekProps> = ({ events }) => {
    const [startOfWeek, setStartOfWeek] = useState<Dayjs>(dayjs().startOf('week'));
    const days = Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, 'day'));

    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

    const handleDaySelect = (selectedDay: Dayjs) => {
        setSelectedDate(selectedDay);
        console.log(`Selected day: ${selectedDay.format('DD/MM/YYYY')}`);
    };

    const handleDecrease = () => {
        setSelectedDate(selectedDate.subtract(7, 'day'));
        setStartOfWeek(startOfWeek.subtract(7, 'day'));
    }

    const handleIncrease = () => {
        setSelectedDate(selectedDate.add(7, 'day'));
        setStartOfWeek(startOfWeek.add(7, 'day'));
    }

    useEffect(() => {
        if (selectedDate) {
            console.log(`Current day updated to: ${selectedDate.format('DD/MM/YYYY')}`);
        }
    }, [selectedDate]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-col bg-white w-fit p-3 gap-3 rounded-2xl items-center">
                <div className={"flex flex-row justify-between items-center w-full"}>
                    <Arrow orientation={"left"} onToggleAction={handleDecrease}/>
                    <Typography size="h4" weight="semiBold">{selectedDate.format('DD/MM/YYYY')}</Typography>
                    <Arrow orientation={"right"} onToggleAction={handleIncrease}/>
                </div>
                <div className="flex flex-row">
                    {days.map((day) => (
                        <div className={"flex flex-col items-center"}>
                            <Typography size={"p"} weight={"semiBold"}>{day.toDate().toString()[0]}</Typography>
                            <ServerDay
                                key={day.toString()}
                                day={day}
                                events={events}
                                outsideCurrentMonth={false}
                                isFirstVisibleCell={false}
                                isLastVisibleCell={false}
                                onDaySelect={handleDaySelect}
                                selected={selectedDate.isSame(day, 'day')}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </LocalizationProvider>
    );
}

export default Week;