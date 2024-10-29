import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import SettingsIcon from "../../../icon/utility/navigation/settings/Settings.tsx"

const subText = cva("font-montserrat font-regular text-m text-center", {
    variants: {
        state: {
            default: [
                "text-black"
            ],
            selected: [
                "text-primary-500 font-semibold"
            ]
        },
    },
    defaultVariants: {
        state: "default",
    },
});

const borderIcon = cva("rounded-full fit-content px-6 py-2" ,{
    variants: {
        state: {
            default: "",
            selected: "bg-primary-500"
        },
    }
})

type SettingsComponentProps = VariantProps<typeof subText> & {
};

const SettingsComponent: React.FC<SettingsComponentProps> = ({ state = "default" }: SettingsComponentProps) => {
    return(
        <div>
            <div className={borderIcon({state})}>
                <SettingsIcon state={state}></SettingsIcon>
            </div>
            <h1 className={subText({state})}>Settings</h1>
        </div>
    )
}

export default SettingsComponent
