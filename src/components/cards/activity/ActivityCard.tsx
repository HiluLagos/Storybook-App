import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import CircularProgressComponent from "../../progress/icon/circularProgress/CircularProgressComponent.tsx";
import Typography from "../../typography/basic/Typography.tsx";

const activityCard = cva(
  "w-[152px] h-[152px] rounded-2xl border-[3px] flex flex-col items-center justify-center", {
    variants: {
      activity: {
        water: "border-bg-colorful-lightblue",
        pills: "border-bg-colorful-yellow",
        salad: "border-bg-colorful-lightgreen",
        steps: "border-bg-colorful-orange",
      }
    },
    defaultVariants: {
      activity: "water"
    }
  }
)

type ActivityCardProps = VariantProps<typeof activityCard> & {
  activity: "water" | "pills" | "salad" | "steps";
  progress: number;
  maxProgress: number;
};

const textMap = {
  water: "Water",
  pills: "Pills",
  salad: "Healthy Food",
  steps: "Steps",
}

const ActivityCard: React.FC<ActivityCardProps> = ({activity = "water", progress = 45, maxProgress = 100}: ActivityCardProps) => {
  const percentage = (progress / maxProgress) * 100;
  const finalPercentage = percentage > 100 ? 100 : (percentage < 0 ? 0 : percentage);

  return (
    <div className={`${activityCard({activity})} bg-bg-default`}>
      <CircularProgressComponent activity={activity} size={"medium"} percentage={finalPercentage} />
      <Typography weight={"semiBold"} size={"p"}>{textMap[activity]}</Typography>
      <div className={"text-text-description-bright"}>
        <Typography weight={"semiBold"} size={"p"}>{progress.toString() + (activity === "water" ? "L" : "")}</Typography>
      </div>
    </div>
  )
}

export default ActivityCard;
