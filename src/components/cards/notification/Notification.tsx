import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import IconProvider from "../../icon/IconProvider.tsx";
import Typography from "../../typography/Typography.tsx";

const notificationBackground = cva(
  "rounded-2xl border-2 w-[296px] min-h-[100px] flex flex-row overflow-hidden", {
    variants: {
      color: {
        default: "bg-secondary-100 border-secondary-700",
        danger: "bg-bg-bright-red border-bg-colorful-red",
        success: "bg-bg-bright-green border-bg-colorful-lightgreen",
        info: "bg-bg-bright-blue border-bg-colorful-lightblue"
      }
    },
    defaultVariants: {
      color: "default"
    }
  }
);

const notificationShade = cva(
  "w-3 h-auto", {
    variants: {
      color: {
        default: "bg-secondary-700",
        danger: "bg-bg-colorful-red",
        success: "bg-bg-colorful-lightgreen",
        info: "bg-bg-colorful-lightblue"
      }
    }
  }
);

type NotificationProps = VariantProps<typeof notificationBackground> & {
  icon: "pills" | "salad" | "steps" | "water" | "task" | "log" | "activities";
};

const Notification: React.FC<NotificationProps> = ({color = "default", icon = "pills"}: NotificationProps) => {
  return (
    <div className={notificationBackground({color})}>
      <div className={notificationShade({color})}></div>
      <div className={"px-4 flex items-center"}>
        <IconProvider size={"medium"} activity={icon} />
      </div>
      <div className={"pl-4 pt-4 pr-2 pb-2 flex flex-col justify-between"}>
        <Typography size={"p"} weight={"regular"}>sape</Typography>
        <div className={"text-text-description-bright bg"}>
          <Typography size={"p"} weight={"regular"}>anti sape</Typography>
        </div>
      </div>
    </div>
  )
}

export default Notification;
