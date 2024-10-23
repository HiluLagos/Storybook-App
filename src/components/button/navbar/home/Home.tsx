import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import HomeIcon from "../../../icon/utility/navigation/home/HomeIcon.tsx"

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

type HomeComponentProps = VariantProps<typeof subText> & {
};

const HomeComponent: React.FC<HomeComponentProps> = ({ state = "default" }: HomeComponentProps) => {

    return(
        <div>
            <div className={borderIcon({state})}>
                <HomeIcon state={state}></HomeIcon>
            </div>
            <h1 className={subText({state})}>Home</h1>
        </div>
    )
}

export default HomeComponent
