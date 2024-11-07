import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const savedReelsIcon = cva("", {
    variants: {
        size: {
            large: "w-16 h-16",
            medium: "w-8 h-8",
        }
    }
})

type SavedReelsIconProps = VariantProps<typeof savedReelsIcon>;

const SavedReels: React.FC<SavedReelsIconProps> = ({size}) => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={savedReelsIcon({size})}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19.4896 1.48438C12.9725 1.48438 7.44782 6.49065 7.05564 13.101C6.18912 27.7064 6.23269 42.3584 7.27676 56.9755C7.63488 61.989 13.6589 64.3333 17.3116 60.88L31.2149 47.7358C31.6555 47.3193 32.3446 47.3193 32.7852 47.7358L46.6883 60.88C50.3414 64.3333 56.3651 61.989 56.7235 56.9755C57.7672 42.3584 57.8111 27.7064 56.9443 13.101C56.5521 6.49065 51.0275 1.48438 44.5105 1.48438H19.4896Z"
                  fill="#E0E030"/>
        </svg>

    )
}

export default SavedReels;