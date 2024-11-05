import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import StateTag from "../../stateTag/StateTag.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import DoneSquare from "../../icon/utility/done-square/DoneSquare.tsx";
import Clock from "../../icon/utility/clock/Clock.tsx";

const medicine = cva(
  "rounded-lg border-4 flex flex-row w-[328px] h-fit p-4 justify-between border-bg-colorful-yellow", {
    variants: {
      complete: {
        false: "",
        true: "bg-bg-light-yellow",
      }
    },
    defaultVariants: {
      complete: false
    }
  }
)

const takenText = cva(
  "pt-4", {
    variants: {
      complete: {
        false: "opacity-0",
        true: "text-text-description-dark",
      }
    }
  }
)

type MedicineProps = VariantProps<typeof medicine> & {
  name: string;
  description: string;
  schedule: string;
  completeTime: string;
};

// function getScheduleHour(schedule: Date) {
//   return schedule.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', hour12: false});
// }

const Medicine: React.FC<MedicineProps> = ({complete = false, name = "Cloroplatino", description = "medicine hehe yeah", schedule = "23:00", completeTime = "00:17"}: MedicineProps) => {
  // const scheduleHour = getScheduleHour(schedule);

  return (
    <div className={medicine({complete})}>
      <div className={"flex flex-col w-[216px]"}>
        <StateTag state={"lightBlue"}>Night</StateTag>
        <Typography weight={"extraBold"} size={"h5"}>{name}</Typography>
        <div className={"flex items-center"}>
          <Clock />
          <Typography weight={"semiBold"} size={"p"}>{schedule + "hs"}</Typography>
        </div>

        <div className={"text-text-description-dark"}>
          <Typography weight={"regular"} size={"m"}>{description}</Typography>
        </div>

        <div className={takenText({complete})}>
          <Typography weight={"regular"} size={"m"}>{"Taken at " + completeTime}</Typography>
        </div>
      </div>

      <div className={"p-0.5 flex flex-col items-center justify-end"}>
        <DoneSquare done={complete} />
      </div>
    </div>
  )
}

export default Medicine;
