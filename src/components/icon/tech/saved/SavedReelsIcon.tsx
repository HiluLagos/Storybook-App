import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const icon = cva("", {
    variants: {
        size: {
            extraSmall: "w-4 h-4",
            small: "w-6 h-6",
            medium: "w-8 h-8",
        },
        intent: {
            selected: "fill-black stroke-black",
            unselected: "fill-none stroke-black",
        }
    }
});

export interface IconProps extends React.SVGProps<SVGSVGElement>, VariantProps<typeof icon> {}

export const SavedReelsIcon: React.FC<IconProps> = ({ size = "medium", intent = "unselected", ...props }) => {
    return (
        <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={icon({size, intent})}
            {...props}
        >
            <path
                d="M9.01879 17.1742L9.01872 17.1742L3.80498 22.1033C3.04838 22.8186 1.80055 22.333 1.72637 21.2946C1.33808 15.8586 1.32175 10.4077 1.64423 4.97211C1.75898 3.03791 3.37756 1.55664 5.30872 1.55664H14.6916C16.6227 1.55664 18.2412 3.0379 18.356 4.9721L19.3542 4.91287L18.356 4.97211C18.6786 10.4077 18.6621 15.8585 18.274 21.2945C18.1997 22.3331 16.9519 22.8186 16.1952 22.1033L10.9816 17.1743L10.9815 17.1742C10.4308 16.6537 9.56949 16.6537 9.01879 17.1742Z"
                className={icon({ intent })}
                strokeWidth="2"
            />
        </svg>
    );
};