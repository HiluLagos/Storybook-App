import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import Typography from "../typography/Typography.tsx";

const tag = cva(
  "rounded-3xl px-[8px] py-[4px]", {
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

type TagProps = VariantProps<typeof tag> & {
  children: string
};

const Tag: React.FC<TagProps> = ({state = "green", children}: TagProps) => {
  return (
    <div className={tag({state})}>
      <Typography weight={"semiBold"} size={"m"}>{children}</Typography>
    </div>
  )
}

export default Tag;
