import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const tick = cva("w-4 h-4" , {
    variants: {
        state: {
            tick: "",
            untick: "fill-none",
        }
    }
})

interface TickProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tick> {}

export const Tick: React.FC<TickProps> = ({state}) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 3.348 3.348 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 8.652 8.652 10.8 6 10.8Z"
                fill="currentColor"/>
            <path
                d="M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM4.8 9L1.8 6L2.646 5.154L4.8 7.302L9.354 2.748L10.2 3.6L4.8 9Z"
                fill="currentColor" className={tick({state})}/>
        </svg>);

}