import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const dropdown = cva(
  "rounded-2xl w-80 bg-slate-50", {
    variants: {
      dropped: {
        true: "h-fit",
        false: "h-40",
      }
    },
    defaultVariants: {
      dropped: false,
    }
  }
)

type DropdownProps = VariantProps<typeof dropdown> & {
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ dropped, children }: DropdownProps) => {
  return (
    <div className={dropdown({ dropped })}>
      <h1>Dropdown</h1>
      { dropped ? children : null }
    </div>
  )
}
