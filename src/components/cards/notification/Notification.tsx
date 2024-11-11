import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import IconProvider from "../../icon/IconProvider.tsx";
import Typography from "../../typography/basic/Typography.tsx";

const notificationBackground = cva(
  "rounded-2xl border-2 w-[296px] min-h-[100px] flex flex-row overflow-hidden", {
    variants: {
      color: {
        default: "bg-secondary-100 border-secondary-700",
        danger: "bg-bg-bright-red border-bg-colorful-red",
        success: "bg-bg-bright-green border-bg-colorful-lightgreen",
        info: "bg-bg-bright-orange border-bg-colorful-orange"
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
        info: "bg-bg-colorful-orange"
      }
    }
  }
);

type NotificationProps = VariantProps<typeof notificationBackground> & {
  icon: "pills" | "salad" | "steps" | "water" | "task" | "confetti";
  description: string;
  date: string;

};

const Notification: React.FC<NotificationProps> = ({color = "default", icon = "pills", description = "This is a description", date = "23:00 18/11/1987"}: NotificationProps) => {
  return (
    <div className={notificationBackground({color})}>
      <div className={notificationShade({color})}></div>
      <div className={"px-4 flex items-center"}>
        <IconProvider size={"medium"} variant={icon} />
      </div>
      <div className={"pl-4 pt-4 pr-2 pb-2 w-[220px] flex flex-col"}>
        <Typography size={"p"} weight={"regular"}>{description}</Typography>
        <div className={"pt-4 text-text-description-bright flex flex-row justify-end"}>
          <Typography size={"p"} weight={"regular"}>{date}</Typography>
        </div>
      </div>
    </div>
  )
}

export default Notification;
