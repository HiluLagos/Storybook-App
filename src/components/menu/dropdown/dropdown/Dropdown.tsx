import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const dropdown = cva(
  "rounded-2xl w-80", {
    variants: {
      dropped: {
        true: "bg-red-800",
        false: "bg-gray-700",
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

export const Dropdown: React.FC<DropdownProps> = ({ dropped = false, children }: DropdownProps) => {
  console.log(dropdown({ dropped }));

  return (
    <div className={dropdown({ dropped })}>
      <h1>Dropdown</h1>
      { dropped ? children : null }
    </div>
  )
}
