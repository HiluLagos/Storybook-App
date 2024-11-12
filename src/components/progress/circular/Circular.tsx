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
  activity: "pills" | "salad" | "steps" | "water";
  percentage: number;
  children?: React.ReactNode;
};

const Circular: React.FC<CircularProps> = ({size = "medium", activity = "pills", percentage = 45, children}:CircularProps) => {
  const sizeClass = circular({ size });
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const capPercentage = percentage > 100 ? 100 : (percentage < 0 ? 0 : percentage);
  const offset = circumference - (capPercentage / 100) * circumference;

    // Definir los colores del gradiente para cada actividad
    const gradientId = `gradient-${activity}`;
    const gradientColors = {
        pills: ["#E0E030", "#7A7A1A"],
        salad: ["#28C40B", "#135E05"],
        steps: ["#EDB14D", "#87652C"],
        water: ["#33D4ED", "#1D7987"],
    };
    const [startColor, endColor] = gradientColors[activity];


    return (
    <div className={`${sizeClass} relative flex items-center justify-center`}>
        <svg className="w-full h-full" viewBox="0 0 120 120">
            <defs>
                <linearGradient id={gradientId} x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={startColor}/>
                    <stop offset="100%" stopColor={endColor}/>
                </linearGradient>
            </defs>
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
                stroke={`url(#${gradientId})`}
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
