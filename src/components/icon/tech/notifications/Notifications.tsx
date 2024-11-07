import React from "react";
import {StateType} from "../../../../../types.ts";

interface NotificationIconProps {
    state?: StateType;
}

const Notifications: React.FC<NotificationIconProps> = ({ state = "default" }) => {
    if (state == "default") {
        return (
            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.33982 15.0807L3.33987 15.0806C3.5018 14.7566 3.58615 14.3994 3.58615 14.0372V9.33333C3.58615 4.73097 7.31711 1 11.9195 1C16.5219 1 20.2529 4.73096 20.2529 9.33333V14.0372C20.2529 14.3992 20.3371 14.7564 20.499 15.0804L20.4991 15.0807L22.7878 19.658C22.9429 19.9684 22.7173 20.3333 22.3705 20.3333H1.46856C1.12161 20.3333 0.89603 19.9683 1.05116 19.658L3.33982 15.0807ZM11.9191 24.3333C11.2052 24.3333 10.5488 24.0838 10.0332 23.6667H13.8051C13.2895 24.0838 12.6331 24.3333 11.9191 24.3333Z"
                    stroke="black" stroke-width="2"/>
            </svg>
        );
    } else {
        return (
            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.9195 0C6.76483 0 2.58615 4.17868 2.58615 9.33333V14.0372C2.58615 14.2441 2.53796 14.4483 2.44539 14.6335L0.156735 19.2108C-0.330865 20.186 0.378268 21.3333 1.46856 21.3333H22.3705C23.4607 21.3333 24.1698 20.186 23.6822 19.2108L21.3935 14.6335C21.301 14.4483 21.2529 14.2441 21.2529 14.0372V9.33333C21.2529 4.17868 17.0742 0 11.9195 0ZM11.9191 25.3333C10.1775 25.3333 8.69592 24.2203 8.1468 22.6667H15.6915C15.1425 24.2203 13.6609 25.3333 11.9191 25.3333Z"
                    fill="black"/>
            </svg>
        );
    }
}

export default Notifications;
