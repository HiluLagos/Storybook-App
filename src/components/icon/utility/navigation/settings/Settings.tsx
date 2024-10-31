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
                "fill-primary-900", "stroke-primary-900"
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
        <IconComponent className={settingsIcon({ state })} style={{ color: 'black' }} />
    );
};

export default SettingsIconComponent;