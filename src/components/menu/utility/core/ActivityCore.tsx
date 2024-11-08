import React from "react";
import Typography from "../../../typography/basic/Typography.tsx";
import CircularProgressComponent from "../../../progress/icon/circularProgress/CircularProgressComponent.tsx";
import Accumulator from "../accumulator/Accumulator.tsx";

const textMap = {
  water: "Water",
  steps: "Steps",
  pills: "Medicine"
}

interface ActivityCoreProps {
  activity: "water" | "steps" | "pills";
  count: number;
  percentage: number;
  isCounter: boolean;
}

const ActivityCore: React.FC<ActivityCoreProps> = ({activity = "water", count = 159, percentage = 45, isCounter= true}) => {
  return (
    <div className={"flex flex-col items-center"}>
      <Typography size={"h3"} weight={"semiBold"}>{textMap[activity]}</Typography>
      <div className={"mb-2"}>
        <CircularProgressComponent activity={activity} size={"large"} percentage={percentage}/>
      </div>
      <Accumulator activity={activity} count={count} isCounter={isCounter}/>
    </div>
  );
};

export default ActivityCore;
