import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const calendarIcon = cva("", {
    variants: {
        state: {
            default: [
                 "stroke-black"
            ],
            selected: [
                "fill-primary-900", "stroke-primary-900"
            ]
        },
    },
    defaultVariants: {
        state: "default",
    },
});

type CalendarIconProps = VariantProps<typeof calendarIcon> & {
};

const HomeIcon: React.FC<CalendarIconProps> = ({ state = "default" }: CalendarIconProps) => {

    if (state == "default") {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.749 13.25C17.0142 13.25 17.2686 13.1446 17.4561 12.9571C17.6437 12.7696 17.749 12.5152 17.749 12.25C17.749 11.9848 17.6437 11.7304 17.4561 11.5429C17.2686 11.3554 17.0142 11.25 16.749 11.25C16.4838 11.25 16.2295 11.3554 16.0419 11.5429C15.8544 11.7304 15.749 11.9848 15.749 12.25C15.749 12.5152 15.8544 12.7696 16.0419 12.9571C16.2295 13.1446 16.4838 13.25 16.749 13.25ZM16.749 17.25C17.0142 17.25 17.2686 17.1446 17.4561 16.9571C17.6437 16.7696 17.749 16.5152 17.749 16.25C17.749 15.9848 17.6437 15.7304 17.4561 15.5429C17.2686 15.3554 17.0142 15.25 16.749 15.25C16.4838 15.25 16.2295 15.3554 16.0419 15.5429C15.8544 15.7304 15.749 15.9848 15.749 16.25C15.749 16.5152 15.8544 16.7696 16.0419 16.9571C16.2295 17.1446 16.4838 17.25 16.749 17.25ZM12.749 12.25C12.749 12.5152 12.6437 12.7696 12.4561 12.9571C12.2686 13.1446 12.0142 13.25 11.749 13.25C11.4838 13.25 11.2295 13.1446 11.0419 12.9571C10.8544 12.7696 10.749 12.5152 10.749 12.25C10.749 11.9848 10.8544 11.7304 11.0419 11.5429C11.2295 11.3554 11.4838 11.25 11.749 11.25C12.0142 11.25 12.2686 11.3554 12.4561 11.5429C12.6437 11.7304 12.749 11.9848 12.749 12.25ZM12.749 16.25C12.749 16.5152 12.6437 16.7696 12.4561 16.9571C12.2686 17.1446 12.0142 17.25 11.749 17.25C11.4838 17.25 11.2295 17.1446 11.0419 16.9571C10.8544 16.7696 10.749 16.5152 10.749 16.25C10.749 15.9848 10.8544 15.7304 11.0419 15.5429C11.2295 15.3554 11.4838 15.25 11.749 15.25C12.0142 15.25 12.2686 15.3554 12.4561 15.5429C12.6437 15.7304 12.749 15.9848 12.749 16.25ZM6.74902 13.25C7.01424 13.25 7.26859 13.1446 7.45613 12.9571C7.64367 12.7696 7.74902 12.5152 7.74902 12.25C7.74902 11.9848 7.64367 11.7304 7.45613 11.5429C7.26859 11.3554 7.01424 11.25 6.74902 11.25C6.48381 11.25 6.22945 11.3554 6.04192 11.5429C5.85438 11.7304 5.74902 11.9848 5.74902 12.25C5.74902 12.5152 5.85438 12.7696 6.04192 12.9571C6.22945 13.1446 6.48381 13.25 6.74902 13.25ZM6.74902 17.25C7.01424 17.25 7.26859 17.1446 7.45613 16.9571C7.64367 16.7696 7.74902 16.5152 7.74902 16.25C7.74902 15.9848 7.64367 15.7304 7.45613 15.5429C7.26859 15.3554 7.01424 15.25 6.74902 15.25C6.48381 15.25 6.22945 15.3554 6.04192 15.5429C5.85438 15.7304 5.74902 15.9848 5.74902 16.25C5.74902 16.5152 5.85438 16.7696 6.04192 16.9571C6.22945 17.1446 6.48381 17.25 6.74902 17.25Z"
                    fill="black" className={calendarIcon({state})}/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.749 1C6.94791 1 7.13868 1.07902 7.27933 1.21967C7.41998 1.36032 7.499 1.55109 7.499 1.75V2.513C8.161 2.5 8.89 2.5 9.692 2.5H13.805C14.608 2.5 15.337 2.5 15.999 2.513V1.75C15.999 1.55109 16.078 1.36032 16.2187 1.21967C16.3593 1.07902 16.5501 1 16.749 1C16.9479 1 17.1387 1.07902 17.2793 1.21967C17.42 1.36032 17.499 1.55109 17.499 1.75V2.577C17.759 2.597 18.0053 2.62233 18.238 2.653C19.41 2.811 20.359 3.143 21.108 3.891C21.856 4.64 22.188 5.589 22.346 6.761C22.499 7.901 22.499 9.356 22.499 11.194V13.306C22.499 15.144 22.499 16.6 22.346 17.739C22.188 18.911 21.856 19.86 21.108 20.609C20.359 21.357 19.41 21.689 18.238 21.847C17.098 22 15.643 22 13.805 22H9.694C7.856 22 6.4 22 5.261 21.847C4.089 21.689 3.14 21.357 2.391 20.609C1.643 19.86 1.311 18.911 1.153 17.739C1 16.599 1 15.144 1 13.306V11.194C1 9.356 1 7.9 1.153 6.761C1.311 5.589 1.643 4.64 2.391 3.891C3.14 3.143 4.089 2.811 5.261 2.653C5.49433 2.62233 5.74067 2.597 6 2.577V1.75C6 1.55126 6.07888 1.36065 6.21932 1.22002C6.35975 1.0794 6.55026 1.00026 6.749 1ZM5.459 4.14C4.454 4.275 3.874 4.529 3.451 4.952C3.028 5.375 2.774 5.955 2.639 6.96C2.61633 7.13 2.597 7.30967 2.581 7.499H20.917C20.901 7.30967 20.8817 7.12967 20.859 6.959C20.724 5.954 20.47 5.374 20.047 4.951C19.624 4.528 19.044 4.274 18.038 4.139C17.011 4.001 15.656 3.999 13.749 3.999H9.749C7.842 3.999 6.488 4.002 5.459 4.14ZM2.499 11.25C2.499 10.396 2.499 9.653 2.512 9H20.986C20.999 9.653 20.999 10.396 20.999 11.25V13.25C20.999 15.157 20.997 16.512 20.859 17.54C20.724 18.545 20.47 19.125 20.047 19.548C19.624 19.971 19.044 20.225 18.038 20.36C17.011 20.498 15.656 20.5 13.749 20.5H9.749C7.842 20.5 6.488 20.498 5.459 20.36C4.454 20.225 3.874 19.971 3.451 19.548C3.028 19.125 2.774 18.545 2.639 17.539C2.501 16.512 2.499 15.157 2.499 13.25V11.25Z"
                      fill="black" className={calendarIcon({state})}/>
            </svg>


        );
    }
    else {
        return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="primary-900" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.7501 2.5C7.7501 2.30109 7.67108 2.11032 7.53043 1.96967C7.38978 1.82902 7.19901 1.75 7.0001 1.75C6.80119 1.75 6.61042 1.82902 6.46977 1.96967C6.32912 2.11032 6.2501 2.30109 6.2501 2.5V4.08C4.8101 4.195 3.8661 4.477 3.1721 5.172C2.4771 5.866 2.1951 6.811 2.0791 8.25H21.9211C21.8051 6.81 21.5231 5.866 20.8281 5.172C20.1341 4.477 19.1891 4.195 17.7501 4.079V2.5C17.7501 2.30109 17.6711 2.11032 17.5304 1.96967C17.3898 1.82902 17.199 1.75 17.0001 1.75C16.8012 1.75 16.6104 1.82902 16.4698 1.96967C16.3291 2.11032 16.2501 2.30109 16.2501 2.5V4.013C15.5851 4 14.8391 4 14.0001 4H10.0001C9.1611 4 8.4151 4 7.7501 4.013V2.5Z"
                className={calendarIcon({state})}/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2 12C2 11.161 2 10.415 2.013 9.75H21.987C22 10.415 22 11.161 22 12V14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14V12ZM17 14C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12C16.7348 12 16.4804 12.1054 16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14ZM17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17C18 16.7348 17.8946 16.4804 17.7071 16.2929C17.5196 16.1054 17.2652 16 17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM7 14C7.26522 14 7.51957 13.8946 7.70711 13.7071C7.89464 13.5196 8 13.2652 8 13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14ZM7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z"
                  className={calendarIcon({state})}/>
        </svg>)

    }
};

export default HomeIcon;