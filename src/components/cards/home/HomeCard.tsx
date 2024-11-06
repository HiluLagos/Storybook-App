import React from 'react';
import { cva } from "class-variance-authority";
import IconProvider from "../../icon/IconProvider.tsx";
import Typography from "../../typography/basic/Typography.tsx";

const card = cva(
    "w-[156px] h-[240px] rounded-2xl border-[3px] flex flex-col items-center justify-center", {
        variants: {
            type: {
                task: "border-bg-colorful-orange bg-bg-bright-orange",
                log: "border-bg-colorful-violet bg-bg-bright-violet",
                saved: "border-bg-colorful-yellow bg-bg-bright-yellow",
                survey: "border-bg-colorful-lightblue bg-bg-bright-blue",
            }
        },
        defaultVariants: {
            type: "task"
        }
    }
);

type HomeCardType = "task" | "log" | "saved" | "survey";

type HomeCardProps = {
    type: HomeCardType;
    progress: number;
};

const iconMap = {
    task: IconProvider({variant: "task", size: "large"}),
    log: IconProvider({variant: "log", size: "large"}),
    saved: IconProvider({variant: "saved", size: "large"}),
    survey: IconProvider({variant: "survey", size: "large"}),
}

const messageMap: { [key in HomeCardType]: (progress: number) => string } = {
    task: (progress) => `${progress} pending`,
    log: (progress) => `${progress} recorded`,
    saved: (progress) => `${progress} saved`,
    survey: (progress) => `${progress} left`,
};

const colourMap: { [key in HomeCardType]: string } = {
    task: "#FFA500",
    log: "#8A2BE2",
    saved: "#FFFF00",
    survey: "#00BFFF",
};

const HomeCard: React.FC<HomeCardProps> = ({type, progress}) => {

    const message = messageMap[type](progress);
    const colour = colourMap[type];

    return (
        <div className={card({type})}>
            <div className={"w-[124px] h-[137px]"}>
                <div className={"left-0"}>
                    {iconMap[type]}
                </div>
                <div style={{color: colour}}>
                    <Typography size={"m"}>{message}</Typography>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;
