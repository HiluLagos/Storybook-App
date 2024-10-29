// src/components/icon/activity/IconProvider.ts
import React from "react";
import Pills from "./activity/pills/Pills.tsx";
import Salad from "./activity/salad/Salad.tsx";
import Steps from "./activity/steps/Steps.tsx";
import Water from "./activity/water/Water.tsx";

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

const IconProvider: React.FC<IconProviderProps> = ({ size, activity }: IconProviderProps) => {
  const IconComponent = iconMap[activity];
  return IconComponent ? <IconComponent size={size} /> : null;
};

export default IconProvider;
