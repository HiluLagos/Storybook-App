import React from "react";
import Math from "../../../icon/utility/math/Math.tsx";
import Typography from "../../../typography/basic/Typography.tsx";
import {cva, VariantProps} from "class-variance-authority";

const accumulator = cva(
  "w-[296px] h-12 rounded-[100px] p-4 flex flex-row items-center", {
    variants: {
      activity: {
        water: "bg-bg-light-lightblue",
        steps: "bg-bg-light-orange",
        pills: "bg-bg-light-yellow",
        salad: "bg-primary-100"
      },
      isCounter: {
        true: "justify-between",
        false: "justify-center"
      }
    },
    defaultVariants: {
      activity: "water",
      isCounter: true
    }
  }
)

type AccumulatorProps = VariantProps<typeof accumulator> & {
  count: number;
  subOperation?: () => void;
  sumOperation?: () => void;
}

const defaultOperation = () => {}

const Accumulator: React.FC<AccumulatorProps> = ({ count = 159, isCounter = true, activity = "water", subOperation = defaultOperation, sumOperation = defaultOperation }) => {
  return (
    <div className={accumulator({activity, isCounter})}>
      {isCounter ? <button onPointerDown={subOperation}><Math operation={"sub"}/></button> : null}
      <Typography size={"h3"} weight={"regular"}>{count.toString()}</Typography>
      {isCounter ? <button onPointerDown={sumOperation}><Math operation={"sum"}/></button> : null}
    </div>
  );
};

export default Accumulator;
