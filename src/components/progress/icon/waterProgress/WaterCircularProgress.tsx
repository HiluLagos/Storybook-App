import React from "react";
import Circular from "../../circular/Circular.tsx";
import Water from "../../../icon/activity/water/Water.tsx";

type WaterCircularProgressProps = {
  size: "small" | "medium";
  percentage: number;
}

const WaterCircularProgress: React.FC<WaterCircularProgressProps> = ({size = "medium", percentage = 45}: WaterCircularProgressProps) => {
  return (
    <Circular size={size} activity="water" percentage={percentage}>
      <Water size={size} />
    </Circular>
  )
}

export default WaterCircularProgress;
