import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import Typography from "../../typography/basic/Typography.tsx";

const summary = cva("w-[328px] h-fit border", {
    variants : {
        intent: {
            pills: "bg-bg-light-yellow border-bg-colorful-yellow",
            acts: "bg-bg-light-orange border-bg-colorful-orange",
            meditation: "bg-bg-light-violet border-bg-colorful-violet",
            sad: "bg-bg-light-red border-bg-colorful-red",
            happy: "bg-bg-light-green border-bg-colorful-green",
        }
    }
})

const text = cva("", {
    variants: {
        intent: {
            pills: "text-text-dark-yellow",
            acts: "text-text-dark-orange",
            meditation: "text-text-dark-violet",
            sad: "text-text-dark-red",
            happy: "text-text-dark-green",
            text: "text-text-default"
        }
    }
})

type SummaryProps = VariantProps<typeof summary> & {
    title: string,
    description: string,
    observation: string
}

const Summary: React.FC<SummaryProps> = ({intent, title, description, observation}) => {
    return (
        <div className={summary({intent})}>
            <div className={"flex flex-row"}>
                <Typography size={"h5"} weight={"semiBold"}>{title}</Typography>
            </div>
            <div>
                <Typography size={"p"} weight={"semiBold"}>Description:</Typography>
                <Typography size={"p"} weight={"regular"}>{description}</Typography>
            </div>
            <div>
                <Typography size={"p"} weight={"semiBold"}>Recorded Observation:</Typography>
                <Typography size={"p"} weight={"regular"}>{observation}</Typography>
            </div>
        </div>
    )
}

export default Summary;