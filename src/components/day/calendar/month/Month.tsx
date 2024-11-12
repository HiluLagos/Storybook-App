import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import React from "react";
import {dayColor, dot} from "../ServerDayStyle.ts";
import { createTheme } from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";

const theme = createTheme({
  components: {
    MuiPickersYear: {
      styleOverrides: {
        yearButton: {
          '&.Mui-selected': {
            backgroundColor: '#8EBA69 !important', // Color for the selected year button
            color: 'white', // Adjust text color if needed
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#D0F2B5 !important', // Hover style for the selected year button
          },
        },
      },
    },
  },
});

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
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              showDaysOutsideCurrentMonth
              defaultValue={dayjs()}
              slots={{
                day: (props) => <ServerDay {...props} events={events} />,
              }}
              className={"bg-white"}
            />
          </LocalizationProvider>
        </ThemeProvider>
    );
}

export default Month;