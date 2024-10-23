import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import TalksIcon from "../../../icon/utility/navigation/talks/HelpTalks.tsx"

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

type TalksIconProps = VariantProps<typeof subText> & {
};

const TalksComponent: React.FC<TalksIconProps> = ({ state = "default" }: TalksIconProps) => {

    return(
        <div>
            <div className={borderIcon({state})}>
                <TalksIcon state={state}></TalksIcon>
            </div>
            <h1 className={subText({state})}>Home</h1>
        </div>
    )
}

export default TalksComponent
