import React from 'react';
import { cva } from "class-variance-authority";
import IconProvider from "../../icon/IconProvider.tsx";
import Typography from "../../typography/basic/Typography.tsx";

const border_bg_colours: { [key in HomeCardType]: string } = {
    task:   "border-bg-colorful-orange bg-bg-bright-orange",
    log:    "border-bg-colorful-violet bg-bg-bright-violet",
    saved:  "border-bg-colorful-yellow bg-bg-bright-yellow",
    survey: "border-bg-colorful-lightblue bg-bg-bright-blue",
};

const card = cva(
    "w-[156px] h-[240px] rounded-xl border-[3px] p-[16px]", {
        variants: {
            type: {
                task:   border_bg_colours.task,
                log:    border_bg_colours.log,
                saved:  border_bg_colours.saved,
                survey: border_bg_colours.survey,
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
    task:   IconProvider({variant: "task",      size: "large"}),
    log:    IconProvider({variant: "log",       size: "large"}),
    saved:  IconProvider({variant: "saved",     size: "large"}),
    survey: IconProvider({variant: "survey",    size: "large"}),
}

const messageMap: { [key in HomeCardType]: (progress: number) => string } = {
    task:   (progress) => `${progress} pending`,
    log:    (progress) => `${progress} recorded`,
    saved:  (progress) => `${progress} saved`,
    survey: (progress) => `${progress} left`,
};

const colourTextMap: { [key in HomeCardType]: string } = {
    task:   "text-text-dark-orange",
    log:    "text-text-dark-violet",
    saved:  "text-text-dark-yellow",
    survey: "text-text-dark-blue",
};

const mapTitle: { [key in HomeCardType]: string } = {
    task:   "Tasks",
    log:    "Log",
    saved:  "Saved Reels",
    survey: "Daily Survey",
};

const center: string =  "flex items-center justify-center";
const left: string =    "flex items-center justify-start";

const measure: { [key in HomeCardType]: [string, string, string] } = {
    // [icon, title, message]
    task:   ["w-[124px] h-[149px]", `w-[80px]   h-[34px]`,                  `w-[72px]`],
    log:    ["w-[124px] h-[149px]", `w-[55px]   h-[34px]`,                  `w-[75px]`],
    saved:  ["w-[124px] h-[115px]", `w-[124px]  h-[68px] leading-[1.1]`,    `w-[62px]`],
    survey: ["w-[124px] h-[115px]", `w-[124px]  h-[68px] leading-[1.1]`,    `w-[40px]`],
};

const HomeCard: React.FC<HomeCardProps> = ({type, progress}) => {

    const title = mapTitle[type];
    const textColour = colourTextMap[type];
    const message = messageMap[type](progress);
    const [iconStyle, titleStyle, messageStyle] = measure[type];

    return (
        <div className={card({type})}>

            <div className={`${iconStyle} mb-[4px]`}>
                {iconMap[type]}
            </div>

            <div className={textColour}>

                <div className={`${titleStyle} ${center} mb-[4px]`}>
                    <Typography weight={"semiBold"} size={"h4"}>
                        {title}
                    </Typography>
                </div>

                <div className={`${messageStyle} ${left} h-[17px] flex-grow`}>
                    <Typography size={"m"}>
                        {message}
                    </Typography>
                </div>

            </div>
        </div>
    )
}

export default HomeCard;
