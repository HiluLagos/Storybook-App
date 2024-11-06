import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const logIcon = cva("", {
    variants: {
        size: {
            large: "w-16 h-16",
            medium: "w-8 h-8",
        }
    }
})

type LogIconProps = VariantProps<typeof logIcon>

const Saved: React.FC<LogIconProps> = ({size}) => {
    return (
        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={logIcon({size})}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.18112 0.927734C4.10792 0.927734 0.655011 4.05666 0.409897 8.18814C-0.131675 17.3165 -0.104446 26.474 0.548096 35.6097C0.771925 38.7431 4.53692 40.2083 6.81987 38.05L15.5094 29.8349C15.7848 29.5746 16.2155 29.5746 16.4909 29.8349L25.1803 38.05C27.4635 40.2083 31.2283 38.7431 31.4523 35.6097C32.1046 26.474 32.132 17.3165 31.5903 8.18811C31.3452 4.05666 27.8923 0.927734 23.8192 0.927734H8.18112Z"
                  fill="#E0E030"/>
        </svg>
    )
}

export default Saved;