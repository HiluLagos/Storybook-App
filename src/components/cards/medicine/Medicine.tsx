import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import StateTag from "../../tag/StateTag.tsx";
import Typography from "../../typography/Typography.tsx";
import DoneSquare from "../../icon/utility/done-square/DoneSquare.tsx";
import Clock from "../../icon/utility/clock/Clock.tsx";

const medicine = cva(
  "rounded-lg border-4 flex flex-row w-[328px] h-fit p-4 justify-between", {
    variants: {
      complete: {
        false: "border-primary-500",
        true: "bg-primary-100 border-primary-900",
      }
    },
    defaultVariants: {
      complete: false
    }
  }
)

type MedicineProps = VariantProps<typeof medicine> & {
  name: string;
  description: string;
  schedule: string;
};

// function getScheduleHour(schedule: Date) {
//   return schedule.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', hour12: false});
// }

const Medicine: React.FC<MedicineProps> = ({complete = false, name = "Cloroplatino", description = "medicine hehe yeah", schedule = "23:00"}: MedicineProps) => {
  // const scheduleHour = getScheduleHour(schedule);

  return (
    <div className={medicine({complete})}>
      <div className={"flex flex-col w-[216px]"}>
        <StateTag state={"lightBlue"}>Info</StateTag>
        <Typography weight={"extraBold"} size={"h5"}>{name}</Typography>
        <div className={"flex items-center"}>
          <Clock />
          <Typography weight={"semiBold"} size={"p"}>{schedule + "hs"}</Typography>
        </div>

        <div className={"text-text-description-dark"}>
          <Typography weight={"regular"} size={"m"}>{description}</Typography>
        </div>

        {complete &&
            <div className={"pt-4 text-text-description-dark"}>
                <Typography weight={"regular"} size={"m"}>{"Taken at 00:17"}</Typography>
            </div>
        }
      </div>

      <div className={"w-[56px] flex flex-col items-center justify-end "}>
        <div className={"h-[56px] flex flex-col justify-end"}>
          <DoneSquare done={complete} />
        </div>
      </div>
    </div>
  )
}

export default Medicine;
