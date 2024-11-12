import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Typography from "../../typography/basic/Typography.tsx";
import Pills from "../../icon/activity/pills/Pills.tsx";
import Steps from "../../icon/activity/steps/Steps.tsx";
import Meditation from "../../icon/activity/meditation/Meditation.tsx";
import Face from "../../icon/utility/Face/Face.tsx"
import { IntentType } from "../../../../types.ts";

const background = cva("w-[328px] h-fit border-2 rounded-2xl p-4", {
    variants: {
        intent: {
            pills: "bg-bg-bright-yellow border-bg-colorful-yellow",
            acts: "bg-bg-bright-orange border-bg-colorful-orange",
            meditation: "bg-bg-bright-violet border-bg-colorful-violet",
            sad: "bg-bg-bright-red border-bg-colorful-red",
            happy: "bg-bg-bright-green border-bg-colorful-lightgreen",
        }
    }
});

const text = cva("", {
    variants: {
        intent: {
            pills: "text-text-dark-yellow",
            acts: "text-text-dark-orange",
            meditation: "text-text-dark-violet",
            sad: "text-text-dark-red",
            happy: "text-text-dark-green",
        }
    }
});

const titleMap = {
    pills: 'Medication Effects and Compliance',
    acts: 'Physical Activity: Exercise Preformed',
    meditation: 'Mindfulness and Personal Reflection',
    sad: 'Incidents of Anger and Frustration',
    happy: 'Positive Emotional Experiences',
    default: 'How did we get here?'
};

const componentMap = {
    pills: <Pills size={'large'}/>,
    acts: <Steps size={'large'}/>,
    meditation: <Meditation size={'large'}/>,
    sad:<Face state="sad" color={'selected'} size={'large'}/>,
    happy:<Face state="happy" color={'selected'} size={'large'}/>,
    default: <Face state="neutral" size={'large'}/>
};

type SummaryProps = VariantProps<typeof background> & {
    intent: IntentType,
    description: string,
    observation: string
};

const Summary: React.FC<SummaryProps> = ({ intent, description, observation }) => {
    return (
        <div className={`flex flex-col gap-4 ${background({intent})}`}>
            <div className={`flex flex-row gap-2.5 ${text({intent})}`}>
                {componentMap[intent ?? 'default']}
                <div className={'w-[218px]'}>
                    <Typography size={"h5"} weight={"semiBold"}>{titleMap[intent ?? 'default']}</Typography>
                </div>
            </div>
            <div className={`flex items-center ${text({intent})}`}>
                <span className="mr-2">&#8226;</span> {/* Bullet point */}
                <Typography size={"p"} weight={"semiBold"}>Description:</Typography>
            </div>
            <div>
                <Typography size={"p"} weight={"regular"}>{description}</Typography>
            </div>
            <div className={`flex items-center ${text({intent})}`}>
                <span className="mr-2">&#8226;</span> {/* Bullet point */}
                <Typography size={"p"} weight={"semiBold"}>Recorded Observation:</Typography>
            </div>
            <div>
                <Typography size={"p"} weight={"regular"}>{observation}</Typography>
            </div>
        </div>
    );
};

export default Summary;