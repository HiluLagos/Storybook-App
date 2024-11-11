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
  children?: React.ReactNode;
}

const ActivityCore: React.FC<ActivityCoreProps> = ({activity = "water", count = 159, percentage = 45, isCounter= true, children}) => {
  return (
    <div className={"flex flex-col items-center"}>
      <Typography size={"h3"} weight={"semiBold"}>{textMap[activity]}</Typography>
      <div className={"max-h-[571px] flex flex-col items-center overflow-scroll space-y-4"} style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
        <CircularProgressComponent activity={activity} size={"large"} percentage={percentage}/>
        {children}
      </div>
      <div className={"pt-2"}>
        <Accumulator activity={activity} count={count} isCounter={isCounter}/>
      </div>
    </div>
  );
};

export default ActivityCore;
