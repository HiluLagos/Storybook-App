// src/components/icon/activity/ActivityIconProvider.ts
import React from "react";
import Pills from "./pills/Pills.tsx";
import Salad from "./salad/Salad.tsx";
import Steps from "./steps/Steps.tsx";
import Water from "./water/Water.tsx";

type IconProviderProps = {
  size: "medium" | "large";
  activity: "pills" | "salad" | "steps" | "water";
};

const iconMap = {
  pills: Pills,
  salad: Salad,
  steps: Steps,
  water: Water,
};

const ActivityIconProvider: React.FC<IconProviderProps> = ({ size, activity }: IconProviderProps) => {
  const IconComponent = iconMap[activity];
  return IconComponent ? <IconComponent size={size} /> : null;
};

export default ActivityIconProvider;
