import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const loading = cva(
  "", {
    variants: {
      color: {
        default: "text-icon-black",
        primary: "text-primary-900",
      }
    }
  }
)

type LoadingProps = VariantProps<typeof loading>;

const Loading: React.FC<LoadingProps> = ({color = "default"}: LoadingProps) => {
  return (
    <svg className={loading({color})} width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 1C7.41775 1 5.87103 1.46919 4.55544 2.34824C3.23985 3.22729 2.21447 4.47672 1.60897 5.93853C1.00347 7.40034 0.84504 9.00887 1.15372 10.5607C1.4624 12.1126 2.22433 13.538 3.34315 14.6569C4.46197 15.7757 5.88743 16.5376 7.43928 16.8463C8.99113 17.155 10.5997 16.9965 12.0615 16.391C13.5233 15.7855 14.7727 14.7602 15.6518 13.4446C16.5308 12.129 17 10.5822 17 9"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
};

export default Loading;
