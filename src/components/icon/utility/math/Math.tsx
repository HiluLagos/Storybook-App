import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const math = cva(
  "", {
    variants: {
      operation: {
        sum: "",
        sub: "opacity-0"
      }
    },
    defaultVariants: {
      operation: "sum"
    }
  }
)

type MathProps = VariantProps<typeof math>;

const Math: React.FC<MathProps> = ({operation}: MathProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
         className="size-6">
      <path className={math({operation})} stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
    </svg>
  )
}

export default Math;
