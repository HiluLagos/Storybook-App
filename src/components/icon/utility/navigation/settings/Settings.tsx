import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const settingsIcon = cva("", {
    variants: {
        state: {
            default: [

            ],
            selected: [

            ]
        },
    },
    defaultVariants: {
        state: "default",
    },
});

type SettingsIconProps = VariantProps<typeof settingsIcon> & {
};

const SettingsIconComponent: React.FC<SettingsIconProps> = ({ state = "default" }: SettingsIconProps) => {
    const IconComponent = state === "selected" ? SettingsIcon : SettingsOutlinedIcon;

    return (
        <IconComponent className={settingsIcon({ state })} />
    );
};

export default SettingsIconComponent;