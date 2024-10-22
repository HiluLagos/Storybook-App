import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const homeIcon = cva("", {
    variants: {
        state: {
            default: [
                ""
            ],
            selected: [
                "fill-current"
            ]
        },
    },
    defaultVariants: {
        state: "default",
    },
});

type HomeIconProps = VariantProps<typeof homeIcon> & {
};

const HomeIcon: React.FC<HomeIconProps> = ({ state = "default" }: HomeIconProps) => {

    return (
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.4624 11.5743L22.4624 11.5744L22.8255 12.1459C23.2332 12.7879 22.772 13.6271 22.0114 13.6271H20.8263H20.043L20.077 14.4097C20.1435 15.9363 20.0601 17.4675 19.8269 18.9811L19.8269 18.9812C19.6442 20.1677 18.6233 21.0436 17.4226 21.0436H14.8926V16.1426C14.8926 14.5449 13.5975 13.2497 11.9998 13.2497C10.4021 13.2497 9.10693 14.5449 9.10693 16.1426V21.0436H6.57708C5.37653 21.0436 4.35549 20.1677 4.17276 18.9811L3.4315 19.0953L4.17276 18.9811C3.93966 17.4675 3.85625 15.9363 3.92269 14.4097L3.95675 13.6271H3.1734H1.98805C1.22754 13.6271 0.766336 12.7879 1.17406 12.1459L1.53711 11.5742L0.904003 11.1721L1.53711 11.5742C3.727 8.12609 6.51365 5.09562 9.76644 2.62486L10.8981 1.76527C11.5493 1.27062 12.4504 1.27063 13.1016 1.76528L14.2331 2.62477L14.6868 2.02753L14.2331 2.62477C17.486 5.0956 20.2725 8.12612 22.4624 11.5743Z"
                stroke="black" stroke-width="1.5" className={homeIcon({state})}/>
        </svg>


    );
};

export default HomeIcon;