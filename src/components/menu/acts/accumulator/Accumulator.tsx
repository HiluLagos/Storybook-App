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
        pills: "bg-bg-light-yellow"
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
}

const Accumulator: React.FC<AccumulatorProps> = ({ count = 159, isCounter = true, activity = "water" }) => {
  return (
    <div className={accumulator({activity, isCounter})}>
      {isCounter ? <Math operation={"sub"}/> : null}
      <Typography size={"h3"} weight={"regular"}>{count.toString()}</Typography>
      {isCounter ? <Math operation={"sum"}/> : null}
    </div>
  );
};

export default Accumulator;
