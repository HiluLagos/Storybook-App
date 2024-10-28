import React from "react";
import Circular from "../../circular/Circular.tsx";
import ActivityIconProvider from "../../../icon/activity/ActivityIconProvider.tsx";

type CircularProgressComponentProps = {
  size: "small" | "medium";
  percentage: number;
  activity: "water" | "pills" | "salad" | "steps";
}

const CircularProgressComponent: React.FC<CircularProgressComponentProps> = ({size = "medium", percentage = 45, activity = "water"}: CircularProgressComponentProps) => {
  return (
    <Circular size={size} activity={activity} percentage={percentage}>
      <ActivityIconProvider size={size} activity={activity} />
    </Circular>
  )
}

export default CircularProgressComponent;
