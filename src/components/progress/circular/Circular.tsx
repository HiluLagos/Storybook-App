import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const circular = cva(
  "relative", {
    variants: {
      size: {
        medium: "w-8 h-8",
        large: "w-40 h-40",
      }
    },
    defaultVariants: {
      size: "medium",
    }
  }
)

type CommentProps = VariantProps<typeof circular> & {
  percentage: number;
};

const Searcher: React.FC<CommentProps> = ({size = "medium", percentage = 0}:CommentProps) => {
  const sizeClass = circular({ size });
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={sizeClass}>
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle
          className="text-gray-300"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className="text-yellow-500"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>
    </div>
  );
}

export default Searcher;
