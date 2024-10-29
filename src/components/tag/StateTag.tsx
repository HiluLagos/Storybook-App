import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import Typography from "../typography/Typography.tsx";

const stateTag = cva(
  "rounded-3xl px-[8px] py-[4px] w-fit h-fit", {
    variants: {
      state: {
        green: "bg-bg-colorful-lightgreen text-text-dark-green",
        yellow: "bg-bg-colorful-yellow text-text-dark-yellow",
        orange: "bg-bg-colorful-orange text-text-dark-orange",
        lightBlue: "bg-bg-colorful-lightblue text-text-dark-blue",
      }
    },
    defaultVariants: {
      state: "green"
    }
  }
)

type StateTagProps = VariantProps<typeof stateTag> & {
  children: string
};

const Tag: React.FC<StateTagProps> = ({state = "green", children}: StateTagProps) => {
  return (
    <div className={stateTag({state})}>
      <Typography weight={"semiBold"} size={"m"}>{children}</Typography>
    </div>
  )
}

export default Tag;
