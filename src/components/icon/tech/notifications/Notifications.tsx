import React, { useState } from "react";
import { StateType } from "../../../../../types.ts";

interface NotificationIconProps {
    state?: StateType;
}

const Notifications: React.FC<NotificationIconProps> = ({ state = "default" }) => {
    const [iconState, setIconState] = useState<StateType>(state);

    const handleClick = () => {
        setIconState(iconState === "default" ? "selected" : "default");
    };

    if (iconState === "default") {
        return (
            <svg onClick={handleClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.33982 18.0807L7.33987 18.0806C7.5018 17.7566 7.58615 17.3994 7.58615 17.0372V12.3333C7.58615 7.73097 11.3171 4 15.9195 4C20.5219 4 24.2529 7.73096 24.2529 12.3333V17.0372C24.2529 17.3992 24.3371 17.7564 24.499 18.0804L24.4991 18.0807L26.7878 22.658C26.9429 22.9684 26.7173 23.3333 26.3705 23.3333H5.46856C5.12161 23.3333 4.89603 22.9683 5.05116 22.658L7.33982 18.0807ZM15.9191 27.3333C15.2052 27.3333 14.5488 27.0838 14.0332 26.6667H17.8051C17.2895 27.0838 16.6331 27.3333 15.9191 27.3333Z"
                    stroke="black" strokeWidth="2"/>
            </svg>
        );
    } else {
        return (
            <svg onClick={handleClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.9195 3C10.7648 3 6.58615 7.17868 6.58615 12.3333V17.0372C6.58615 17.2441 6.53796 17.4483 6.44539 17.6335L4.15673 22.2108C3.66913 23.186 4.37827 24.3333 5.46856 24.3333H26.3705C27.4607 24.3333 28.1698 23.186 27.6822 22.2108L25.3935 17.6335C25.301 17.4483 25.2529 17.2441 25.2529 17.0372V12.3333C25.2529 7.17868 21.0742 3 15.9195 3ZM15.9191 28.3333C14.1775 28.3333 12.6959 27.2203 12.1468 25.6667H19.6915C19.1425 27.2203 17.6609 28.3333 15.9191 28.3333Z"
                    fill="black"/>
            </svg>
        );
    }
}

export default Notifications;