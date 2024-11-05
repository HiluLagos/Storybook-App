import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import Typography from "../../../typography/basic/Typography.tsx";

const button = cva(
    "rounded-full", {
  variants: {
    intent: {
      default: "bg-primary-700 text-black",
      disabled: "bg-primary-100 text-primary-900",
      pressed: "bg-primary-900 text-black shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]",
    },
    size: {
      small: "w-36 h-9",
      medium: "w-72 h-9",
    },
  }
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ intent, size, value, ...props }) => {
  return <button className={button({ intent, size })} {...props}>
    <Typography weight={"semiBold"} size={"p"}>{String(value)}</Typography>
  </button>;
};