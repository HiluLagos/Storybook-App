import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const circular = cva(
  "", {
    variants: {
      size: {
        medium: "w-16 h-16",
        large: "w-[152px] h-[152px]",
      },
      activity: {
        pills: "text-yellow-300",
        salad: "text-green-300",
        steps: "text-orange-300",
        water: "text-blue-300"
      }
    },
    defaultVariants: {
      size: "medium",
      activity: "pills"
    }
  }
)

const innerCircle = cva(
  "", {
    variants: {
      activity: {
        pills: "text-yellow-100",
        salad: "text-green-100",
        steps: "text-orange-100",
        water: "text-blue-100"
      }
    }
  }
)

type CircularProps = VariantProps<typeof circular> & {
  percentage: number;
  children?: React.ReactNode;
};

const Circular: React.FC<CircularProps> = ({size = "medium", activity = "pills", percentage = 45, children}:CircularProps) => {
  const sizeClass = circular({ size });
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const capPercentage = percentage > 100 ? 100 : (percentage < 0 ? 0 : percentage);
  const offset = circumference - (capPercentage / 100) * circumference;

  return (
    <div className={`${sizeClass} relative flex items-center justify-center`}>
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle
          className={innerCircle({activity}) + " fill-secondary-100"}
          strokeWidth="8"
          stroke="currentColor"
          fill="secondary-100"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className={circular({activity})}
          strokeWidth={percentage >= 100 ? 12 : 8}
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
      <div className="absolute flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Circular;
