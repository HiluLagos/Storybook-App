import React, {useState} from "react";
import Typography from "../basic/Typography.tsx";

interface ExpandTypographyProps {
  weight: "regular" | "semiBold" | "extraBold";
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "m";
  children: string;
  expanded?: boolean;
}

const ExpandTypography: React.FC<ExpandTypographyProps> = ({weight = "regular", size = "p", children = "Sample text", expanded = false}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const changeExpanded = () => {
    setIsExpanded(!isExpanded);
  }

  const limit: number = 56;
  const hasReadMore: boolean = children.length > limit;
  const displayedChildren: string = hasReadMore ? isExpanded ? children : children.slice(0, limit) + "..." : children;

  return (
      <div className="flex flex-col relative">
          <Typography size={size} weight={weight}>
              {displayedChildren}
          </Typography>
          {hasReadMore &&
              <div className="flex justify-end items-end flex-grow">
                  <button className="text-text-description-dark text-m" onClick={changeExpanded}>
                      {isExpanded ? "Hide text" : "Read more"}
                  </button>
              </div>
          }
      </div>
  )
}

export default ExpandTypography;
