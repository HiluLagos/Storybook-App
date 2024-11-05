import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import Drag from "../../icon/utility/drag/Drag.tsx";
import IconProvider from "../../icon/IconProvider.tsx";
import Typography from "../../typography/basic/Typography.tsx";

const preference = cva(
  "rounded-lg flex flex-row items-center py-3 px-3", {
    variants: {
      state: {
        default: "w-[288px] h-[56px] bg-secondary-100 border-2 border-secondary-300",
        dragged: "w-[304px] h-[59px] bg-secondary-300"
      }
    },
    defaultVariants: {
      state: "default"
    }
  }
)

type PreferenceProps = VariantProps<typeof preference> & {
  activity: "pills" | "salad" | "steps" | "water"
};

const textMap = {
  water: "Water",
  pills: "Pills",
  salad: "Healthy Food",
  steps: "Steps",
}

const Preference: React.FC<PreferenceProps> = ({state = "default", activity = "pills"}: PreferenceProps) => {
  return (
    <div className={preference({state})}>
      <Drag state={state} />
      <div className={"px-2.5"}>
        <IconProvider size={"medium"} variant={activity} />
      </div>
      <Typography weight={"semiBold"} size={"p"}>{textMap[activity]}</Typography>
    </div>
  )
}

export default Preference;
