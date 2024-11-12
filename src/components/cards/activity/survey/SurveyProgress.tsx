import React from "react";
import Bar from "../../../progress/bar/Bar.tsx";

type SurveyProgressProps = {
  percentage: number;
}

const SurveyProgress: React.FC<SurveyProgressProps> = ({percentage = 45}: SurveyProgressProps) => {
  return (
    <Bar percentage={percentage} text={"Progress Survey"} />
  )
}

export default SurveyProgress;
