import React from 'react';
import { cva } from "class-variance-authority";
import IconProvider from "../../icon/IconProvider.tsx";

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

type HomeCardProps = {
    type: "task" | "log" | "saved" | "survey";
    progress: number;
};

const iconMap = {
    task: IconProvider({variant: "task", size: "large"}),
    log: IconProvider({variant: "log", size: "large"}),
    saved: IconProvider({variant: "saved", size: "large"}),
    survey: IconProvider({variant: "survey", size: "large"}),
}

const HomeCard: React.FC<HomeCardProps> = ({type}) => {

    return (
        <div>
            <div className={card({type})}>
                <div className={"mt-[16px] ml-[16px] mr-[16px] bg-"}>
                    <div className={"left-0"}>
                        {iconMap[type]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;
