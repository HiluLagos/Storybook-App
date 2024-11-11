import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const meditation = cva(
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

type WaterProps = VariantProps<typeof meditation>;

const Meditation: React.FC<WaterProps> = ({size = "medium"}:WaterProps) => {
  return (
      <svg className={meditation({size})} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M38.9258 10.375C38.9258 14.4481 35.6238 17.75 31.5508 17.75C27.4777 17.75 24.1758 14.4481 24.1758 10.375C24.1758 6.30191 27.4777 3 31.5508 3C35.6238 3 38.9258 6.30191 38.9258 10.375Z"
              stroke="#D74DDE" stroke-width="4"/>
          <path
              d="M5 47.2501L12.6372 43.391C13.3805 43.0154 13.85 42.2478 13.85 41.408C13.85 32.7367 20.1562 25.319 28.6198 23.8935C30.5464 23.569 32.5536 23.569 34.4802 23.8935C35.5042 24.066 36.4966 24.3262 37.45 24.6656M58.1 47.2501L50.4627 43.391C49.7196 43.0154 49.25 42.2478 49.25 41.408C49.25 38.1842 48.3783 35.1339 46.8484 32.5001"
              stroke="#D74DDE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path
              d="M24.1747 44.2998L21.1016 48.3974C21.0078 48.5224 20.9609 48.585 20.9137 48.6446C20.1376 49.6254 19.0699 50.3343 17.8647 50.6691C17.7914 50.6895 17.7154 50.7084 17.5638 50.7461L13.1837 51.8412C10.1076 52.6102 7.94971 55.3741 7.94971 58.5448C7.94971 60.4531 9.49654 61.9998 11.4046 61.9998H15.9952C17.763 61.9998 18.6469 61.9998 19.5049 61.8989C21.5115 61.6632 23.4483 61.0175 25.1951 60.0024C25.9421 59.5681 26.6492 59.0377 28.0634 57.9772L28.5997 57.5748M28.5997 57.5748L34.4997 53.1498M28.5997 57.5748L36.0918 60.3844C37.8896 61.0585 38.7887 61.3956 39.7177 61.6128C40.1985 61.7252 40.6847 61.8134 41.1741 61.8768C42.1201 61.9998 43.0804 61.9998 45.0005 61.9998H51.6947C53.603 61.9998 55.1497 60.4531 55.1497 58.5448C55.1497 55.3741 52.9918 52.6102 49.9158 51.8412L45.5357 50.7461C45.384 50.7084 45.3079 50.6895 45.2348 50.6691C44.0294 50.3343 42.9618 49.6254 42.1856 48.6446C42.1387 48.585 42.0915 48.5221 41.9977 48.3974L38.9247 44.2998"
              stroke="#D74DDE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
)
}

export default Meditation;
