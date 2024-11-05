import React from "react";
import Circular from "../../circular/Circular.tsx";
import IconProvider from "../../../icon/IconProvider.tsx";

type CircularProgressComponentProps = {
  size: "medium" | "large";
  percentage: number;
  activity: "water" | "pills" | "salad" | "steps";
}

const CircularProgressComponent: React.FC<CircularProgressComponentProps> = ({size = "medium", percentage = 45, activity = "water"}: CircularProgressComponentProps) => {
  return (
    <Circular size={size} activity={activity} percentage={percentage}>
      <IconProvider size={size} variant={activity} />
    </Circular>
  )
}

export default CircularProgressComponent;
