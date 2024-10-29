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

const LogIcon: React.FC<LogIconProps> = ({size}) => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={logIcon({size})}>
            <path d="M32 6.3999V57.5999" stroke="#D74DDE" stroke-width="3" stroke-linecap="round"/>
            <path d="M44.7998 16V48" stroke="#D74DDE" stroke-width="3" stroke-linecap="round"/>
            <path d="M19.2002 16V48" stroke="#D74DDE" stroke-width="3" stroke-linecap="round"/>
            <path d="M57.6001 28.8V35.2" stroke="#D74DDE" stroke-width="3" stroke-linecap="round"/>
            <path d="M6.3999 28.8V35.2" stroke="#D74DDE" stroke-width="3" stroke-linecap="round"/>
        </svg>

    )
}

export default LogIcon;