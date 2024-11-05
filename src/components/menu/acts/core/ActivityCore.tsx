import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import Typography from "../../../typography/basic/Typography.tsx";
import CircularProgressComponent from "../../../progress/icon/circularProgress/CircularProgressComponent.tsx";
import Accumulator from "../accumulator/Accumulator.tsx";

const activityCore = cva(
  "rounded-full h-fit w-fit", {
    variants: {
      activity: {
        water: "bg-bg-light-lightblue",
        steps: "bg-bg-light-orange",
        pills: "bg-bg-light-yellow"
      }
    }
  }
);

const textMap = {
  water: "Water",
  steps: "Steps",
  pills: "Medicine"
}

type ActivityCoreProps = VariantProps<typeof activityCore> & {
  activity: "water" | "steps" | "pills";
  count: number;
  percentage: number;
};

const ActivityCore: React.FC<ActivityCoreProps> = ({activity = "water", count = 159, percentage = 45}) => {
  return (
    <div>
      <Typography size={"h3"} weight={"regular"}>{textMap[activity]}</Typography>
      <div className={activityCore({activity})}>
        <CircularProgressComponent activity={activity} size={"large"} percentage={percentage}/>
      </div>
      <Accumulator activity={activity} count={count} isCounter={true}/>
    </div>
  );
};

export default ActivityCore;
