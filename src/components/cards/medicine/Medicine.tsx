import {cva, VariantProps} from "class-variance-authority";
import React, {useState} from "react";
import StateTag from "../../stateTag/StateTag.tsx";
import Typography from "../../typography/basic/Typography.tsx";
import DoneSquare from "../../icon/utility/done-square/DoneSquare.tsx";
import Clock from "../../icon/utility/clock/Clock.tsx";
import ExpandTypography from "../../typography/expandable/ExpandTypography.tsx";

const medicine = cva(
  "rounded-lg border-4 flex flex-row w-[328px] h-fit p-4 justify-between border-bg-colorful-yellow shadow-[0_4px_6px_rgba(0,0,0,0.3)]", {
    variants: {
      complete: {
        false: "bg-bg-default",
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
  onCompletion?: () => void;
  onDecompletion?: () => void;
};

const defaultOperation = () => {}

const Medicine: React.FC<MedicineProps> = ({complete: taken = false, name = "Cloroplatino", description = "medicine hehe yeah", schedule = "23:00", completeTime = "00:00", onCompletion = defaultOperation, onDecompletion = defaultOperation}: MedicineProps) => {
  const [complete, setComplete] = useState(taken);
  const [takenHour, setTakenHour] = useState(completeTime);

  const manageTaken = () => {
    const newComplete = !complete;
    setComplete(newComplete);
    if (newComplete) {
      onCompletion();
      setTakenHour(new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', hour12: false}));
    } else {
      onDecompletion();
    }
  };

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
          <ExpandTypography weight={"regular"} size={"m"}>{description}</ExpandTypography>
        </div>

        <div className={takenText({complete})}>
          <Typography weight={"regular"} size={"m"}>{"Taken at " + takenHour + "hs"}</Typography>
        </div>
      </div>

      <div className={"p-0.5 flex flex-col items-center justify-end"} onClick={manageTaken}>
        <DoneSquare done={complete} />
      </div>
    </div>
  )
}

export default Medicine;
