// src/components/icon/activity/IconProvider.ts
import React from "react";
import Pills from "./activity/pills/Pills.tsx";
import Salad from "./activity/salad/Salad.tsx";
import Steps from "./activity/steps/Steps.tsx";
import Water from "./activity/water/Water.tsx";
import Task from "./menu/Task/Task.tsx";
import Log from "./menu/Log/Log.tsx";
import Saved from "./menu/Saved/Saved.tsx";
import Survey from "./menu/Survey/Survey.tsx";
import Activities from "./menu/Activities/Activities.tsx";
import Mail from "./utility/mail/Mail.tsx";
//import Lock from "./tech/log/lock/LockIcon.tsx";

export type IconInterface = {
  size: "medium" | "large";
  variant: "pills" | "salad" | "steps" | "water" | "task" | "log" | "activities" | "mail" | "saved" | "survey"; //lock
};

const iconMap = {
  pills: Pills,
  salad: Salad,
  steps: Steps,
  water: Water,
  task: Task,
  log: Log,
  saved: Saved,
  survey: Survey,
  activities: Activities,
  mail: Mail,
  //lock: Lock
};

const IconProvider: React.FC<IconInterface> = ({ size, variant }: IconInterface) => {
  const IconComponent = iconMap[variant];
  return IconComponent ? <IconComponent size={size} /> : null;
};

export default IconProvider;
