import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const salad = cva(
  "", {
    variants: {
      size: {
        medium: "w-8 h-8",
        large: "w-16 h-16",
      }
    },
    defaultVariants: {
      size: "medium",
    }
  }
)

type SaladProps = VariantProps<typeof salad>;

const Salad: React.FC<SaladProps> = ({size = "medium"}:SaladProps) => {
  return (
    <svg className={salad({size})} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.22559 34H26.774" stroke="#28C40B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path
        d="M17.4839 33.9998C26.0354 33.9998 32.9677 26.3587 32.9677 16.9331H2C2 26.3587 8.93239 33.9998 17.4839 33.9998Z"
        stroke="#28C40B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path
        d="M16.5035 16.9331C13.3198 16.9627 11.2978 13.543 12.8639 10.7773C13.4838 9.68285 14.5698 8.92998 15.8141 8.73215C15.1123 5.63391 18.0356 2.93957 21.0759 3.88231C21.1611 3.90873 21.2453 3.93785 21.3286 3.96982C22.6231 1.9368 25.3804 1.43743 27.3085 2.88659C29.8116 0.92381 33.5058 2.40044 33.9582 5.54461C34.1188 6.66086 33.8144 7.79407 33.1159 8.68067C34.7888 10.8976 33.8355 14.0968 31.2203 15.042C31.3775 15.6608 31.3951 16.3067 31.2721 16.9331"
        stroke="#28C40B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.5483 16.9332L26.7741 10.5332" stroke="#28C40B" stroke-width="3" stroke-linecap="round"
            stroke-linejoin="round"/>
      <path
        d="M15.4193 8.50588C11.9612 4.53148 5.80931 6.08345 4.34583 11.2994C4.15605 11.9755 4.06123 12.6785 4.06454 13.385C4.06454 14.68 4.39367 15.8865 4.95323 16.9333"
        stroke="#28C40B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default Salad;
